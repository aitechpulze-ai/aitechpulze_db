import { NextResponse } from "next/server";
import { z } from "zod";
import { requireRole } from "@/lib/auth";
import { supabase } from "@/lib/supabase";

const schema = z.object({
  status: z.enum(["ACCEPTED", "CHANGES_REQUESTED"]),
  feedback: z.string().max(2000).optional(),
});

export async function POST(req, { params }) {
  const session = await requireRole("MENTOR");
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { data: mentor } = await supabase.from("Mentor").select("*").eq("userId", session.sub).maybeSingle();
  if (!mentor) return NextResponse.json({ error: "Mentor not found" }, { status: 404 });

  const parsed = schema.safeParse(await req.json().catch(() => ({})));
  if (!parsed.success) return NextResponse.json({ error: "Invalid input" }, { status: 400 });

  const { id } = await params;

  // Verify submission belongs to one of this mentor's students.
  const { data: submission } = await supabase.from("Submission").select("*, student:Student(*)").eq("id", id).maybeSingle();
  const student = Array.isArray(submission?.student) ? submission.student[0] : submission?.student;
  if (!submission || student?.mentorId !== mentor.id) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  await supabase.from("Submission").update({
    status: parsed.data.status, feedback: parsed.data.feedback || null
  }).eq("id", id);

  return NextResponse.json({ ok: true });
}
