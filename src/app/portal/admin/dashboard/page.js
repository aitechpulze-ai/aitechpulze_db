import { redirect } from "next/navigation";
import { requireRole } from "@/lib/auth";
import { supabaseAdmin } from "@/lib/supabase";
import AdminDashboard from "@/components/portal/AdminDashboard";

export const metadata = { title: "Admin Portal | AiTechPulze", robots: { index: false } };

export default async function AdminDashboardPage() {
  const session = await requireRole("ADMIN");
  if (!session) redirect("/portal/login");

  const [applicationsRes, studentsRes, mentorsRes, quotesRes, totalApp, approvedApp, pendingApp, certsCount, mentorCount, quoteCount] = await Promise.all([
    supabaseAdmin.from("InternshipApplication").select("*").order("createdAt", { ascending: false }),
    supabaseAdmin.from("Student").select("*, user:User(name, email), mentor:Mentor(*, user:User(name))").order("id", { ascending: false }),
    supabaseAdmin.from("Mentor").select("*, user:User(name, email), students:Student(*)").order("id", { ascending: false }),
    supabaseAdmin.from("Quote").select("*").order("createdAt", { ascending: false }),
    supabaseAdmin.from("InternshipApplication").select("*", { count: "exact", head: true }),
    supabaseAdmin.from("InternshipApplication").select("*", { count: "exact", head: true }).eq("status", "APPROVED"),
    supabaseAdmin.from("InternshipApplication").select("*", { count: "exact", head: true }).eq("status", "PENDING"),
    supabaseAdmin.from("Student").select("*", { count: "exact", head: true }).not("certificateId", "is", null),
    supabaseAdmin.from("Mentor").select("*", { count: "exact", head: true }),
    supabaseAdmin.from("Quote").select("*", { count: "exact", head: true }),
  ]);

  const applications = applicationsRes.data || [];
  const students = (studentsRes.data || []).map(s => {
    s.user = Array.isArray(s.user) ? s.user[0] : s.user;
    s.mentor = Array.isArray(s.mentor) ? s.mentor[0] : s.mentor;
    if (s.mentor) s.mentor.user = Array.isArray(s.mentor.user) ? s.mentor.user[0] : s.mentor.user;
    return s;
  });
  const mentors = (mentorsRes.data || []).map(m => {
    m.user = Array.isArray(m.user) ? m.user[0] : m.user;
    return m;
  });
  const quotes = quotesRes.data || [];
  const analytics = {
    total: totalApp.count || 0,
    approved: approvedApp.count || 0,
    pending: pendingApp.count || 0,
    certs: certsCount.count || 0,
    mentorCount: mentorCount.count || 0,
    quoteCount: quoteCount.count || 0,
  };

  return (
    <AdminDashboard
      applications={JSON.parse(JSON.stringify(applications))}
      students={JSON.parse(JSON.stringify(students))}
      mentors={JSON.parse(JSON.stringify(mentors))}
      quotes={JSON.parse(JSON.stringify(quotes))}
      analytics={analytics}
      adminName={session.name}
    />
  );
}
