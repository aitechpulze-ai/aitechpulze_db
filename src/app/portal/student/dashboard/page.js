import { redirect } from "next/navigation";
import { requireRole } from "@/lib/auth";
import { supabase } from "@/lib/supabase";
import StudentDashboard from "@/components/portal/StudentDashboard";

export const metadata = { title: "Student Portal | AiTechPulze", robots: { index: false } };

export default async function StudentDashboardPage() {
  const session = await requireRole("STUDENT");
  if (!session) redirect("/portal/login");

  const { data: rawStudent } = await supabase.from("Student").select(`
    *,
    user:User(name, email),
    mentor:Mentor(meetUrl, meetLive, user:User(name)),
    attendance:Attendance(*)
  `).eq("userId", session.sub).maybeSingle();

  if (!rawStudent) redirect("/portal/login");

  const student = {
    ...rawStudent,
    user: Array.isArray(rawStudent.user) ? rawStudent.user[0] : rawStudent.user,
    mentor: Array.isArray(rawStudent.mentor) ? rawStudent.mentor[0] : rawStudent.mentor,
    attendance: rawStudent.attendance || []
  };
  if (student.mentor) student.mentor.user = Array.isArray(student.mentor.user) ? student.mentor.user[0] : student.mentor.user;

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

  return (
    <StudentDashboard
      student={JSON.parse(JSON.stringify(student))}
      assignments={JSON.parse(JSON.stringify(assignments))}
    />
  );
}
