import path from "path";
import crypto from "crypto";
import { mkdir, writeFile } from "fs/promises";

export const UPLOAD_ROOT = path.resolve(
  /*turbopackIgnore: true*/ process.env.UPLOAD_DIR || path.join(process.cwd(), "uploads")
);

// Resolves a relative path inside UPLOAD_ROOT. Returns null if it escapes (path traversal).
export function safeResolve(relPath) {
  const full = path.resolve(UPLOAD_ROOT, relPath);
  if (full !== UPLOAD_ROOT && !full.startsWith(UPLOAD_ROOT + path.sep)) return null;
  return full;
}

// Validates and stores a PDF. Returns { relPath } or { error }.
export async function savePdf(file, subdir, maxBytes = 5 * 1024 * 1024) {
  if (!file || typeof file === "string" || file.size === 0) return { error: "File is required" };
  if (file.size > maxBytes) {
    return { error: `File must be under ${Math.round(maxBytes / 1024 / 1024)} MB` };
  }
  const buf = Buffer.from(await file.arrayBuffer());
  if (buf.subarray(0, 4).toString() !== "%PDF") return { error: "File must be a PDF" };

  const dir = safeResolve(subdir);
  if (!dir) return { error: "Invalid path" };
  await mkdir(dir, { recursive: true });

  const name = `${crypto.randomUUID()}.pdf`;
  await writeFile(path.join(dir, name), buf);
  return { relPath: `${subdir}/${name}` };
}
