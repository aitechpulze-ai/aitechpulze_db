import { NextResponse } from "next/server";
import { requireRole } from "@/lib/auth";
import { supabase } from "@/lib/supabase";

export async function DELETE(_req, { params }) {
  if (!(await requireRole("ADMIN"))) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { id } = await params;
  const { data: app } = await supabase.from("InternshipApplication").select("*, Student(*)").eq("id", id).maybeSingle();
  if (!app) return NextResponse.json({ error: "Not found" }, { status: 404 });
  if (app.Student && app.Student.length > 0) return NextResponse.json({ error: "Cannot delete: student account exists. Delete the student first." }, { status: 409 });
  await supabase.from("InternshipApplication").delete().eq("id", id);
  return NextResponse.json({ ok: true });
}
