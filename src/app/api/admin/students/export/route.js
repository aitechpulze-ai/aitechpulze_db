import { NextResponse } from "next/server";
import { requireRole } from "@/lib/auth";
import { supabase } from "@/lib/supabase";

export async function GET() {
  if (!(await requireRole("ADMIN"))) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { data: rawStudents } = await supabase.from("Student").select("*, user:User(name, email), mentor:Mentor(*, user:User(name)), attendance:Attendance(*)").order("id", { ascending: false });
  const students = (rawStudents || []).map(s => {
    const user = Array.isArray(s.user) ? s.user[0] : s.user;
    const mentor = Array.isArray(s.mentor) ? s.mentor[0] : s.mentor;
    if (mentor) mentor.user = Array.isArray(mentor.user) ? mentor.user[0] : mentor.user;
    return { ...s, user, mentor, attendance: s.attendance || [] };
  });

  const headers = ["Name", "Email", "Domain", "Duration", "Mentor", "Start Date", "Certificate ID", "Attendance %"];
  const rows = students.map((s) => {
    const maxDays = s.duration === "DAYS_15" ? 15 : 30;
    const present = s.attendance.filter((a) => a.status === "PRESENT").length;
    const pct = maxDays > 0 ? Math.round((present / maxDays) * 100) : 0;
    return [
      s.user?.name || "",
      s.user?.email || "",
      s.domain,
      `${maxDays} days`,
      s.mentor?.user?.name || "Unassigned",
      s.startDate ? new Date(s.startDate).toLocaleDateString("en-IN") : "",
      s.certificateId || "",
      `${pct}%`,
    ].map((v) => `"${String(v).replace(/"/g, '""')}"`).join(",");
  });

  const csv = [headers.join(","), ...rows].join("\n");
  return new Response(csv, {
    headers: {
      "Content-Type": "text/csv",
      "Content-Disposition": "attachment; filename=students.csv",
    },
  });
}
