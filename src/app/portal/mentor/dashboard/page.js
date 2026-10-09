import { redirect } from "next/navigation";
import { requireRole } from "@/lib/auth";
import { supabase } from "@/lib/supabase";
import MentorDashboard from "@/components/portal/MentorDashboard";

export const metadata = { title: "Mentor Portal | AiTechPulze", robots: { index: false } };

export default async function MentorDashboardPage() {
  const session = await requireRole("MENTOR");
  if (!session) redirect("/portal/login");

  const { data: rawMentor } = await supabase.from("Mentor").select(`
    *,
    user:User(name, email),
    students:Student(
      *,
      user:User(name, email),
      attendance:Attendance(*),
      submissions:Submission(*, assignment:Assignment(title))
    ),
    assignments:Assignment(
      *,
      submissions:Submission(*, student:Student(*, user:User(name)))
    )
  `).eq("userId", session.sub).maybeSingle();

  let mentor = null;
  if (rawMentor) {
    mentor = {
      ...rawMentor,
      user: Array.isArray(rawMentor.user) ? rawMentor.user[0] : rawMentor.user,
      students: (rawMentor.students || []).map(s => ({
        ...s,
        user: Array.isArray(s.user) ? s.user[0] : s.user,
        attendance: s.attendance || [],
        submissions: (s.submissions || []).map(sub => ({
          ...sub,
          assignment: Array.isArray(sub.assignment) ? sub.assignment[0] : sub.assignment
        }))
      })),
      assignments: (rawMentor.assignments || []).sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).map(a => ({
        ...a,
        submissions: (a.submissions || []).map(sub => {
          const student = Array.isArray(sub.student) ? sub.student[0] : sub.student;
          if (student) student.user = Array.isArray(student.user) ? student.user[0] : student.user;
          return { ...sub, student };
        })
      }))
    };
  }

  if (!mentor) redirect("/portal/login");

  return <MentorDashboard mentor={JSON.parse(JSON.stringify(mentor))} />;
}
