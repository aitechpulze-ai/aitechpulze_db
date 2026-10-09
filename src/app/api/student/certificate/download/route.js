import { NextResponse } from "next/server";
import { readFile } from "fs/promises";
import { requireRole } from "@/lib/auth";
import { supabase } from "@/lib/supabase";
import { safeResolve } from "@/lib/uploads";

// GET /api/student/certificate/download — student downloads their own certificate
export async function GET() {
  const session = await requireRole("STUDENT");
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { data: student } = await supabase.from("Student").select("*").eq("userId", session.sub).maybeSingle();
  if (!student) return NextResponse.json({ error: "Student not found" }, { status: 404 });
  if (!student.certificateUrl) return NextResponse.json({ error: "Certificate not issued" }, { status: 404 });

  const full = safeResolve(student.certificateUrl);
  if (!full) return NextResponse.json({ error: "Invalid path" }, { status: 400 });

  try {
    const data = await readFile(full);
    return new Response(data, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="certificate-${student.certificateId}.pdf"`,
        "Cache-Control": "private, no-store",
      },
    });
  } catch {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
}
