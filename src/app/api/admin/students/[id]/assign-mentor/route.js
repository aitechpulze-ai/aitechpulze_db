import { NextResponse } from "next/server";
import { z } from "zod";
import { requireRole } from "@/lib/auth";
import { supabase } from "@/lib/supabase";

const schema = z.object({ mentorId: z.string().min(1).or(z.literal("")) });

export async function POST(req, { params }) {
  if (!(await requireRole("ADMIN"))) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { id } = await params;
  const parsed = schema.safeParse(await req.json().catch(() => ({})));
  if (!parsed.success) return NextResponse.json({ error: "Invalid input" }, { status: 400 });

  const { data: student } = await supabase.from("Student").select("*").eq("id", id).maybeSingle();
  if (!student) return NextResponse.json({ error: "Student not found" }, { status: 404 });

  const mentorId = parsed.data.mentorId || null;
  if (mentorId) {
    const { data: mentor } = await supabase.from("Mentor").select("*").eq("id", mentorId).maybeSingle();
    if (!mentor) return NextResponse.json({ error: "Mentor not found" }, { status: 404 });
  }

  await supabase.from("Student").update({ mentorId }).eq("id", id);
  return NextResponse.json({ ok: true });
}
