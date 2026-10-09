import { NextResponse } from "next/server";
import { requireRole } from "@/lib/auth";
import { supabase } from "@/lib/supabase";

export async function GET() {
  if (!(await requireRole("ADMIN"))) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const [
    { count: total },
    { count: approved },
    { count: pending },
    { count: certs },
    { count: mentorCount },
    { count: quoteCount }
  ] = await Promise.all([
    supabase.from("InternshipApplication").select("*", { count: "exact", head: true }),
    supabase.from("InternshipApplication").select("*", { count: "exact", head: true }).eq("status", "APPROVED"),
    supabase.from("InternshipApplication").select("*", { count: "exact", head: true }).eq("status", "PENDING"),
    supabase.from("Student").select("*", { count: "exact", head: true }).not("certificateId", "is", null),
    supabase.from("Mentor").select("*", { count: "exact", head: true }),
    supabase.from("Quote").select("*", { count: "exact", head: true }),
  ]);

  return NextResponse.json({ total, approved, pending, certs, mentorCount, quoteCount });
}
