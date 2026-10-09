import { NextResponse } from "next/server";
import { requireRole } from "@/lib/auth";
import { supabase } from "@/lib/supabase";

export async function GET() {
  const session = await requireRole("STUDENT");
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { data: student } = await supabase.from("Student").select("*").eq("userId", session.sub).maybeSingle();
  if (!student) return NextResponse.json({ error: "Student not found" }, { status: 404 });

  let query = supabase.from("Assignment").select("*, submissions:Submission(*)").order("createdAt", { ascending: false });
  if (student.mentorId) {
    query = query.or(`studentId.eq.${student.id},and(studentId.is.null,mentorId.eq.${student.mentorId})`);
  } else {
    query = query.eq("studentId", student.id);
  }
  const { data: rawAssignments } = await query;
  
  const assignments = (rawAssignments || []).map(a => ({
    ...a,
    submissions: (a.submissions || []).filter(sub => sub.studentId === student.id)
  }));

  return NextResponse.json(assignments);
}
