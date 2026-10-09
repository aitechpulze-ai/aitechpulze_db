import { NextResponse } from "next/server";
import { requireRole } from "@/lib/auth";
import { supabase } from "@/lib/supabase";

export async function POST(_req, { params }) {
  if (!(await requireRole("ADMIN"))) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { id } = await params;
  const { data: app } = await supabase.from("InternshipApplication").select("*").eq("id", id).maybeSingle();
  if (!app) return NextResponse.json({ error: "Not found" }, { status: 404 });
  if (app.status === "APPROVED") return NextResponse.json({ error: "Cannot reject an approved application" }, { status: 409 });
  await supabase.from("InternshipApplication").update({ status: "REJECTED" }).eq("id", id);
  return NextResponse.json({ ok: true });
}
