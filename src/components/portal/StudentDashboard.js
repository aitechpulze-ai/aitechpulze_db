"use client";
import { useState } from "react";
import PortalShell from "./PortalShell";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

function Overview({ student }) {
  const maxDays = student.duration === "DAYS_15" ? 15 : 30;
  const present = student.attendance.filter((a) => a.status === "PRESENT").length;
  const pct = maxDays > 0 ? Math.round((present / maxDays) * 100) : 0;
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-white">Welcome, {student.user.name}!</h2>
        <p className="text-sm text-[#00F0FF]/70 mt-1">Domain: {student.domain} · {maxDays}-day programme</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          { label: "Attendance", value: `${pct}%` },
          { label: "Days Recorded", value: `${student.attendance.length}/${maxDays}` },
          { label: "Mentor", value: student.mentor?.user?.name || "Not assigned" },
          { label: "Certificate", value: student.certificateId ? "Issued" : "Pending" },
        ].map((s) => (
          <div key={s.label} className="bg-[#050B14]/80 backdrop-blur-xl border border-[#00F0FF]/20 rounded-xl border border-[#00F0FF]/20 p-4">
            <p className="text-2xl font-bold text-violet-600">{s.value}</p>
            <p className="text-xs text-[#00F0FF]/70 mt-0.5">{s.label}</p>
          </div>
        ))}
      </div>

      {/* GMeet link */}
      {student.mentor?.meetLive && student.mentor?.meetUrl && (
        <div className="bg-violet-50 border border-violet-200 rounded-xl p-4 flex items-center justify-between gap-4">
          <div>
            <p className="font-medium text-violet-800">Your mentor is live!</p>
            <p className="text-sm text-violet-600">Click to join the Google Meet session.</p>
          </div>
          <a
            href={student.mentor.meetUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-violet-600 text-white rounded-lg text-sm font-medium hover:bg-violet-700 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
          >
            Join Meet
          </a>
        </div>
      )}
    </div>
  );
}

function AttendanceTab({ student }) {
  const maxDays = student.duration === "DAYS_15" ? 15 : 30;
  const map = Object.fromEntries(student.attendance.map((a) => [a.day, a.status]));
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-white">Attendance</h2>
      <div className="grid grid-cols-5 sm:grid-cols-10 gap-2">
        {Array.from({ length: maxDays }, (_, i) => i + 1).map((day) => {
          const s = map[day];
          return (
            <div key={day} className={`rounded-lg p-2 text-center text-sm font-medium border
              ${s === "PRESENT" ? "bg-green-50 border-green-300 text-green-700"
                : s === "ABSENT" ? "bg-red-50 border-red-300 text-red-700"
                : "bg-white/5 border-[#00F0FF]/30 text-[#00F0FF]/50"}`}>
              <p className="text-xs text-[#00F0FF]/50">Day</p>
              <p>{day}</p>
              <p className="text-xs mt-0.5">{s === "PRESENT" ? "✓" : s === "ABSENT" ? "✗" : "–"}</p>
            </div>
          );
        })}
      </div>
      <p className="text-xs text-[#00F0FF]/50">Attendance is marked by your mentor.</p>
    </div>
  );
}

function AssignmentsTab({ studentId, assignments }) {
  const [uploading, setUploading] = useState({});
  const [msg, setMsg] = useState({});

  async function handleSubmit(assignmentId, file) {
    if (!file) return;
    setUploading((u) => ({ ...u, [assignmentId]: true }));
    const fd = new FormData();
    fd.append("assignmentId", assignmentId);
    fd.append("file", file);
    const res = await fetch("/api/student/assignments/submit", { method: "POST", body: fd });
    const data = await res.json();
    setMsg((m) => ({ ...m, [assignmentId]: res.ok ? "Submitted!" : data.error }));
    setUploading((u) => ({ ...u, [assignmentId]: false }));
  }

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-white">Assignments</h2>
      {assignments.length === 0 && <p className="text-[#00F0FF]/70 text-sm">No assignments yet.</p>}
      {assignments.map((a) => {
        const sub = a.submissions?.[0];
        return (
          <div key={a.id} className="bg-[#050B14]/80 backdrop-blur-xl border border-[#00F0FF]/20 border border-[#00F0FF]/20 rounded-xl p-5 space-y-3">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="font-medium text-white">{a.title}</h3>
                <p className="text-sm text-[#00F0FF]/70 mt-0.5">{a.description}</p>
                <p className="text-xs text-[#00F0FF]/50 mt-1">Due: {new Date(a.dueDate).toLocaleDateString("en-IN")}</p>
              </div>
              {sub && (
                <Badge colour={sub.status === "ACCEPTED" ? "green" : sub.status === "CHANGES_REQUESTED" ? "yellow" : "indigo"}>
                  {sub.status.replace("_", " ")}
                </Badge>
              )}
            </div>
            {a.attachmentUrl && (
              <a href={`/api/student/assignments/${a.id}/attachment`} className="text-sm text-[#00F0FF] hover:underline" target="_blank" rel="noopener noreferrer">
                Download attachment
              </a>
            )}
            {sub?.feedback && (
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg px-3 py-2 text-sm text-yellow-800">
                <strong>Feedback:</strong> {sub.feedback}
              </div>
            )}
            {!sub && (
              <div className="flex items-center gap-3">
                <input
                  type="file"
                  id={`file-${a.id}`}
                  accept=".pdf,.doc,.docx,.zip,.png,.jpg"
                  className="text-sm text-gray-300 file:mr-3 file:py-1.5 file:px-3 file:rounded file:border-0 file:text-xs file:font-medium file:bg-indigo-50 file:text-indigo-700"
                  onChange={(e) => {
                    if (e.target.files?.[0]) handleSubmit(a.id, e.target.files[0]);
                  }}
                />
              </div>
            )}
            {msg[a.id] && <p className="text-xs text-green-600">{msg[a.id]}</p>}
          </div>
        );
      })}
    </div>
  );
}

function CertificateTab({ student }) {
  if (!student.certificateId) {
    return (
      <div className="text-center py-16">
        <div className="text-5xl mb-4" aria-hidden="true">🏅</div>
        <h2 className="text-xl font-semibold text-white">Certificate Not Issued Yet</h2>
        <p className="mt-2 text-[#00F0FF]/70 text-sm">Your certificate will appear here once the admin issues it.</p>
      </div>
    );
  }
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-white">Your Certificate</h2>
      <div className="bg-[#050B14]/80 backdrop-blur-xl border border-[#00F0FF]/20 border border-green-200 rounded-xl p-6">
        <p className="text-sm text-gray-300">Certificate ID: <strong className="font-mono">{student.certificateId}</strong></p>
        <p className="text-sm text-[#00F0FF]/70 mt-1">Issued: {new Date(student.certificateAt).toLocaleDateString("en-IN")}</p>
        {student.certificateUrl && (
          <a
            href={`/api/student/certificate/download`}
            className="mt-4 inline-block px-5 py-2.5 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 transition"
          >
            Download Certificate
          </a>
        )}
        <p className="mt-3 text-xs text-[#00F0FF]/50">
          Verify at: <a href={`/verify`} className="text-[#00F0FF] hover:underline">/verify</a> using your certificate ID.
        </p>
      </div>
    </div>
  );
}

export default function StudentDashboard({ student, assignments }) {
  const tabs = [
    { id: "dashboard", label: "Dashboard", content: <Overview student={student} /> },
    { id: "attendance", label: "Attendance", content: <AttendanceTab student={student} /> },
    { id: "assignments", label: "Assignments", content: <AssignmentsTab studentId={student.id} assignments={assignments} /> },
    { id: "certificate", label: "Certificate", content: <CertificateTab student={student} /> },
  ];

  return <PortalShell role="STUDENT" name={student.user.name} tabs={tabs} />;
}
