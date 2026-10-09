import { NextResponse } from "next/server";
import { requireRole } from "@/lib/auth";
import { supabase } from "@/lib/supabase";

export async function GET() {
  if (!(await requireRole("ADMIN"))) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { data: quotes } = await supabase.from("Quote").select("*").order("createdAt", { ascending: false });
  return NextResponse.json(quotes || []);
}
