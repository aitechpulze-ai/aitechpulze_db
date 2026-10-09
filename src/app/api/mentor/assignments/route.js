import { NextResponse } from "next/server";
import { z } from "zod";
import { requireRole } from "@/lib/auth";
import { supabase } from "@/lib/supabase";
import { savePdf } from "@/lib/uploads";

const schema = z.object({
  title: z.string().trim().min(2).max(200),
  description: z.string().trim().min(5).max(5000),
  dueDate: z.string().refine((v) => !isNaN(Date.parse(v)), { message: "Invalid date" }),
  studentId: z.string().optional(),
});

export async function POST(req) {
  const session = await requireRole("MENTOR");
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { data: mentor } = await supabase.from("Mentor").select("*").eq("userId", session.sub).maybeSingle();
  if (!mentor) return NextResponse.json({ error: "Mentor not found" }, { status: 404 });

  const form = await req.formData();
  const parsed = schema.safeParse({
    title: form.get("title"),
    description: form.get("description"),
    dueDate: form.get("dueDate"),
    studentId: form.get("studentId") || undefined,
  });
  if (!parsed.success) return NextResponse.json({ error: "Invalid input" }, { status: 400 });

  const { studentId, ...rest } = parsed.data;

  // If a specific student was given, verify they belong to this mentor.
  if (studentId) {
    const { data: student } = await supabase.from("Student").select("*").eq("id", studentId).eq("mentorId", mentor.id).maybeSingle();
    if (!student) return NextResponse.json({ error: "Student not found" }, { status: 404 });
  }

  let attachmentUrl = null;
  const file = form.get("attachment");
  if (file && typeof file !== "string" && file.size > 0) {
    const saved = await savePdf(file, "attachments");
    if (saved.error) return NextResponse.json({ error: saved.error }, { status: 400 });
    attachmentUrl = saved.relPath;
  }

  const { data: assignment, error } = await supabase.from("Assignment").insert({
    mentorId: mentor.id,
    studentId: studentId || null,
    title: rest.title,
    description: rest.description,
    dueDate: new Date(rest.dueDate).toISOString(),
    attachmentUrl,
  }).select().single();
  
  if (error) return NextResponse.json({ error: "Failed to create assignment" }, { status: 500 });

  return NextResponse.json({ ok: true, id: assignment.id });
}
