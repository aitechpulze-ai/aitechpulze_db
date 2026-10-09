import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { rateLimit, clientIp } from "@/lib/rateLimit";

const ID_FORMAT = /^ATP-\d{4}-[A-Z0-9]{6}$/;

export async function GET(req) {
  if (!rateLimit(`verify:${clientIp(req)}`, 20, 15 * 60 * 1000)) {
    return NextResponse.json({ error: "Too many requests. Try again later." }, { status: 429 });
  }

  const id = (new URL(req.url).searchParams.get("id") || "").trim().toUpperCase();
  if (!ID_FORMAT.test(id)) {
    return NextResponse.json({ valid: false, error: "Invalid certificate ID format" }, { status: 400 });
  }

  const { data: student } = await supabase.from("Student").select("*, user:User(name)").eq("certificateId", id).maybeSingle();
  if (student) student.user = Array.isArray(student.user) ? student.user[0] : student.user;
  // Make sure startDate is a Date object if it's not null
  if (student?.startDate) student.startDate = new Date(student.startDate);
  if (!student) return NextResponse.json({ valid: false });

  // Public response: only these fields, nothing else.
  const days = student.duration === "DAYS_15" ? 15 : 30;
  const start = student.startDate;
  const end = start ? new Date(start.getTime() + (days - 1) * 86400000) : null;

  return NextResponse.json({
    valid: true,
    name: student.user.name,
    domain: student.domain,
    durationDays: days,
    startDate: start,
    endDate: end,
  });
}
