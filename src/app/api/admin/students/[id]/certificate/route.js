import { NextResponse } from "next/server";
import crypto from "crypto";
import { supabase } from "@/lib/supabase";
import { requireRole } from "@/lib/auth";
import { savePdf } from "@/lib/uploads";

const CHARS = "ABCDEFGHJKMNPQRSTUVWXYZ23456789";

function makeCertificateId() {
  const bytes = crypto.randomBytes(6);
  const code = Array.from(bytes, (b) => CHARS[b % CHARS.length]).join("");
  return `ATP-${new Date().getFullYear()}-${code}`;
}

export async function POST(req, { params }) {
  if (!(await requireRole("ADMIN"))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  const { data: student } = await supabase.from("Student").select("*").eq("id", id).maybeSingle();
  if (!student) return NextResponse.json({ error: "Student not found" }, { status: 404 });
  if (student.certificateId) {
    return NextResponse.json({ error: "Certificate already issued" }, { status: 409 });
  }

  let certificateUrl = null;
  const form = await req.formData().catch(() => null);
  const file = form?.get("certificate");
  if (file && typeof file !== "string" && file.size > 0) {
    const saved = await savePdf(file, "certificates");
    if (saved.error) return NextResponse.json({ error: saved.error }, { status: 400 });
    certificateUrl = saved.relPath;
  }

  for (let i = 0; i < 5; i++) {
    try {
      const certId = makeCertificateId();
      const certAt = new Date().toISOString();
      const { data: updated, error } = await supabase.from("Student").update({
        certificateId: certId, certificateUrl, certificateAt: certAt
      }).eq("id", id).select("certificateId, certificateAt").single();
      
      if (error) {
        if (error.code === '23505') continue;
        throw error;
      }
      return NextResponse.json({ ok: true, ...updated });
    } catch (e) {
      throw e;
    }
  }
  return NextResponse.json({ error: "Could not generate a unique ID, try again" }, { status: 500 });
}
