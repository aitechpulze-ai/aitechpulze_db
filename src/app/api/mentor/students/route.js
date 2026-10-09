import { NextResponse } from "next/server";
import { requireRole } from "@/lib/auth";
import { supabase } from "@/lib/supabase";

export async function GET() {
  const session = await requireRole("MENTOR");
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { data: mentor } = await supabase.from("Mentor").select("*").eq("userId", session.sub).maybeSingle();
  if (!mentor) return NextResponse.json({ error: "Mentor not found" }, { status: 404 });

  const { data: rawStudents } = await supabase.from("Student").select("*, user:User(name, email), attendance:Attendance(*), submissions:Submission(*, assignment:Assignment(title))").eq("mentorId", mentor.id);
  const students = (rawStudents || []).map(s => {
    return {
      ...s,
      user: Array.isArray(s.user) ? s.user[0] : s.user,
      attendance: s.attendance || [],
      submissions: (s.submissions || []).map(sub => ({
        ...sub,
        assignment: Array.isArray(sub.assignment) ? sub.assignment[0] : sub.assignment
      }))
    };
  });

  return NextResponse.json(students);
}
