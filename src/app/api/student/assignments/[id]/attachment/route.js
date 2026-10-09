import { NextResponse } from "next/server";
import { readFile } from "fs/promises";
import { requireRole } from "@/lib/auth";
import { supabase } from "@/lib/supabase";
import { safeResolve } from "@/lib/uploads";

export async function GET(_req, { params }) {
  const session = await requireRole("STUDENT");
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { data: student } = await supabase.from("Student").select("*").eq("userId", session.sub).maybeSingle();
  if (!student) return NextResponse.json({ error: "Student not found" }, { status: 404 });

  const { id } = await params;
  let query = supabase.from("Assignment").select("*").eq("id", id);
  if (student.mentorId) {
    query = query.or(`studentId.eq.${student.id},and(studentId.is.null,mentorId.eq.${student.mentorId})`);
  } else {
    query = query.eq("studentId", student.id);
  }
  const { data: assignment } = await query.maybeSingle();
  if (!assignment?.attachmentUrl) return NextResponse.json({ error: "Not found" }, { status: 404 });

  const full = safeResolve(assignment.attachmentUrl);
  if (!full) return NextResponse.json({ error: "Invalid path" }, { status: 400 });

  try {
    const data = await readFile(full);
    return new Response(data, {
      headers: { "Content-Type": "application/pdf", "Content-Disposition": "inline", "Cache-Control": "private, no-store" },
    });
  } catch {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
}
