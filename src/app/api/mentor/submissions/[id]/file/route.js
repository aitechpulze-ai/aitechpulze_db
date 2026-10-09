import { NextResponse } from "next/server";
import { readFile } from "fs/promises";
import { requireRole } from "@/lib/auth";
import { supabase } from "@/lib/supabase";
import { safeResolve } from "@/lib/uploads";

export async function GET(_req, { params }) {
  const session = await requireRole("MENTOR");
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { data: mentor } = await supabase.from("Mentor").select("*").eq("userId", session.sub).maybeSingle();
  if (!mentor) return NextResponse.json({ error: "Mentor not found" }, { status: 404 });

  const { id } = await params;
  const { data: submission } = await supabase.from("Submission").select("*, student:Student(*)").eq("id", id).maybeSingle();
  const student = Array.isArray(submission?.student) ? submission.student[0] : submission?.student;
  if (!submission || student?.mentorId !== mentor.id) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  const full = safeResolve(submission.fileUrl);
  if (!full) return NextResponse.json({ error: "Invalid path" }, { status: 400 });

  try {
    const data = await readFile(full);
    return new Response(data, {
      headers: { "Content-Type": "application/pdf", "Content-Disposition": "inline", "Cache-Control": "private, no-store" },
    });
  } catch {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
}
