import { NextResponse } from "next/server";
import { z } from "zod";
import { requireRole } from "@/lib/auth";
import { supabase } from "@/lib/supabase";

const schema = z.object({ status: z.enum(["NEW", "CONTACTED", "WON", "LOST"]) });

export async function POST(req, { params }) {
  if (!(await requireRole("ADMIN"))) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { id } = await params;
  const parsed = schema.safeParse(await req.json().catch(() => ({})));
  if (!parsed.success) return NextResponse.json({ error: "Invalid status" }, { status: 400 });
  const { data: quote } = await supabase.from("Quote").select("*").eq("id", id).maybeSingle();
  if (!quote) return NextResponse.json({ error: "Not found" }, { status: 404 });
  await supabase.from("Quote").update({ status: parsed.data.status }).eq("id", id);
  return NextResponse.json({ ok: true });
}
