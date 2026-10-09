import { NextResponse } from "next/server";
import { z } from "zod";
import { requireRole } from "@/lib/auth";
import { supabase } from "@/lib/supabase";

const schema = z.object({
  meetUrl: z.string().url().max(500).or(z.literal("")).optional(),
  meetLive: z.boolean(),
});

export async function POST(req) {
  const session = await requireRole("MENTOR");
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const parsed = schema.safeParse(await req.json().catch(() => ({})));
  if (!parsed.success) return NextResponse.json({ error: "Invalid input" }, { status: 400 });

  const { data: mentor } = await supabase.from("Mentor").select("*").eq("userId", session.sub).maybeSingle();
  if (!mentor) return NextResponse.json({ error: "Mentor not found" }, { status: 404 });

  await supabase.from("Mentor").update({
    meetUrl: parsed.data.meetUrl || null,
    meetLive: parsed.data.meetLive,
  }).eq("id", mentor.id);

  return NextResponse.json({ ok: true });
}
