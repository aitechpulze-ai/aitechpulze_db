import { NextResponse } from "next/server";
import { readFile } from "fs/promises";
import { requireRole } from "@/lib/auth";
import { safeResolve } from "@/lib/uploads";

export async function GET(_req, { params }) {
  if (!(await requireRole("ADMIN"))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { path: parts } = await params;
  const rel = (parts || []).join("/");

  // Only resumes, only PDFs.
  if (!rel.startsWith("resumes/") || !rel.endsWith(".pdf")) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  const full = safeResolve(rel);
  if (!full) return NextResponse.json({ error: "Invalid path" }, { status: 400 });

  try {
    const data = await readFile(full);
    return new Response(data, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": "inline",
        "Cache-Control": "private, no-store",
        "X-Content-Type-Options": "nosniff",
      },
    });
  } catch {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
}
