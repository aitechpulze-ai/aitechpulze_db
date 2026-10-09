import { NextResponse } from "next/server";
import { requireRole } from "@/lib/auth";
import { supabase } from "@/lib/supabase";
import { savePdf } from "@/lib/uploads";

export async function POST(req) {
  const session = await requireRole("STUDENT");
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { data: student } = await supabase.from("Student").select("*").eq("userId", session.sub).maybeSingle();
  if (!student) return NextResponse.json({ error: "Student not found" }, { status: 404 });

  const form = await req.formData();
  const assignmentId = form.get("assignmentId");
  const file = form.get("file");

  if (!assignmentId) return NextResponse.json({ error: "Assignment ID required" }, { status: 400 });
  if (!file || typeof file === "string" || file.size === 0) {
    return NextResponse.json({ error: "File is required" }, { status: 400 });
  }

  // Verify the assignment belongs to this student (direct or via mentor).
  let query = supabase.from("Assignment").select("*").eq("id", assignmentId);
  if (student.mentorId) {
    query = query.or(`studentId.eq.${student.id},and(studentId.is.null,mentorId.eq.${student.mentorId})`);
  } else {
    query = query.eq("studentId", student.id);
  }
  const { data: assignment } = await query.maybeSingle();
  if (!assignment) return NextResponse.json({ error: "Assignment not found" }, { status: 404 });

  // Check for duplicate submission.
  const { data: existing } = await supabase.from("Submission")
    .select("*")
    .eq("assignmentId", assignmentId)
    .eq("studentId", student.id)
    .maybeSingle();
  if (existing && existing.status !== "CHANGES_REQUESTED") {
    return NextResponse.json({ error: "Already submitted" }, { status: 409 });
  }

  // Accept PDF and common file types; store as PDF path but keep original ext.
  const saved = await savePdf(file, "submissions", 10 * 1024 * 1024);
  if (saved.error) return NextResponse.json({ error: saved.error }, { status: 400 });

  if (existing) {
    await supabase.from("Submission").update({
      fileUrl: saved.relPath, status: "SUBMITTED", feedback: null
    }).eq("assignmentId", assignmentId).eq("studentId", student.id);
  } else {
    await supabase.from("Submission").insert({
      assignmentId, studentId: student.id, fileUrl: saved.relPath
    });
  }

  return NextResponse.json({ ok: true });
}
