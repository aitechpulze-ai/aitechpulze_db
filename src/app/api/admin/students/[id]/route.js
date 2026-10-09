import { NextResponse } from "next/server";
import { requireRole } from "@/lib/auth";
import { supabase } from "@/lib/supabase";

export async function DELETE(_req, { params }) {
  if (!(await requireRole("ADMIN"))) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { id } = await params;
  const { data: student } = await supabase.from("Student").select("*").eq("id", id).maybeSingle();
  if (!student) return NextResponse.json({ error: "Not found" }, { status: 404 });
  await supabase.from("User").delete().eq("id", student.userId);
  return NextResponse.json({ ok: true });
}
