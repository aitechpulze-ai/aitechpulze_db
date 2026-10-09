import { NextResponse } from "next/server";
import { z } from "zod";
import { supabase } from "@/lib/supabase";
import { requireRole } from "@/lib/auth";

const schema = z.object({
  studentId: z.string().min(1),
  day: z.number().int().min(1).max(30),
  status: z.enum(["PRESENT", "ABSENT"]),
});

export async function POST(req) {
  const session = await requireRole("MENTOR");
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const parsed = schema.safeParse(await req.json().catch(() => ({})));
  if (!parsed.success) return NextResponse.json({ error: "Invalid input" }, { status: 400 });
  const { studentId, day, status } = parsed.data;

  const { data: mentor } = await supabase.from("Mentor").select("*").eq("userId", session.sub).maybeSingle();
  if (!mentor) return NextResponse.json({ error: "Mentor profile not found" }, { status: 404 });

  const { data: student } = await supabase.from("Student").select("*").eq("id", studentId).eq("mentorId", mentor.id).maybeSingle();
  if (!student) return NextResponse.json({ error: "Student not found" }, { status: 404 });

  const maxDay = student.duration === "DAYS_15" ? 15 : 30;
  if (day > maxDay) return NextResponse.json({ error: `Day must be 1 to ${maxDay}` }, { status: 400 });

  await supabase.from("Attendance").upsert(
    { studentId, day, status }, 
    { onConflict: 'studentId,day' }
  );
  return NextResponse.json({ ok: true });
}
