import { NextResponse } from "next/server";
import { requireRole } from "@/lib/auth";
import { supabase } from "@/lib/supabase";

export async function GET() {
  if (!(await requireRole("ADMIN"))) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { data: rawStudents } = await supabase.from("Student").select("*, user:User(name, email), mentor:Mentor(*, user:User(name))").order("id", { ascending: false });
  const students = (rawStudents || []).map(s => {
    const user = Array.isArray(s.user) ? s.user[0] : s.user;
    const mentor = Array.isArray(s.mentor) ? s.mentor[0] : s.mentor;
    if (mentor) mentor.user = Array.isArray(mentor.user) ? mentor.user[0] : mentor.user;
    return { ...s, user, mentor };
  });
  return NextResponse.json(students);
}
