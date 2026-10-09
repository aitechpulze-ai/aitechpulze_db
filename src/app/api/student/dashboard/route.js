import { NextResponse } from "next/server";
import { requireRole } from "@/lib/auth";
import { supabase } from "@/lib/supabase";

export async function GET() {
  const session = await requireRole("STUDENT");
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { data: student } = await supabase.from("Student").select("*, user:User(name, email), mentor:Mentor(meetUrl, meetLive, user:User(name)), attendance:Attendance(*)").eq("userId", session.sub).maybeSingle();
  if (student) {
    student.user = Array.isArray(student.user) ? student.user[0] : student.user;
    student.mentor = Array.isArray(student.mentor) ? student.mentor[0] : student.mentor;
    if (student.mentor) student.mentor.user = Array.isArray(student.mentor.user) ? student.mentor.user[0] : student.mentor.user;
    student.attendance = student.attendance || [];
  }
  if (!student) return NextResponse.json({ error: "Student not found" }, { status: 404 });

  const maxDays = student.duration === "DAYS_15" ? 15 : 30;
  const present = student.attendance.filter((a) => a.status === "PRESENT").length;

  return NextResponse.json({
    name: student.user.name,
    domain: student.domain,
    duration: maxDays,
    attendancePct: maxDays > 0 ? Math.round((present / maxDays) * 100) : 0,
    mentorName: student.mentor?.user?.name || null,
    meetUrl: student.mentor?.meetUrl || null,
    meetLive: student.mentor?.meetLive || false,
    certificateId: student.certificateId || null,
  });
}
