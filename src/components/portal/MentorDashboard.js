"use client";
import { useState } from "react";
import PortalShell from "./PortalShell";
import Modal from "@/components/ui/Modal";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import Textarea from "@/components/ui/Textarea";

/* ── My Students ── */
function StudentsTab({ mentor }) {
  const [selected, setSelected] = useState(null);

  async function markAttendance(studentId, day, status) {
    await fetch("/api/mentor/attendance", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ studentId, day, status }),
    });
  }

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-gray-900">My Students ({mentor.students.length})</h2>
      {mentor.students.length === 0 && <p className="text-gray-500 text-sm">No students assigned yet.</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {mentor.students.map((s) => {
          const maxDays = s.duration === "DAYS_15" ? 15 : 30;
          const present = s.attendance.filter((a) => a.status === "PRESENT").length;
          return (
            <button
              key={s.id}
              onClick={() => setSelected(s)}
              className="text-left bg-white border border-gray-100 rounded-xl p-4 hover:border-emerald-200 hover:shadow-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
            >
              <p className="font-medium text-gray-900">{s.user.name}</p>
              <p className="text-xs text-gray-500 mt-0.5">{s.domain} · {maxDays} days</p>
              <p className="text-xs text-emerald-600 mt-1">Attendance: {present}/{maxDays}</p>
            </button>
          );
        })}
      </div>

      <Modal open={!!selected} onClose={() => setSelected(null)} title={selected?.user?.name || ""}>
        {selected && <StudentDetail student={selected} onMark={markAttendance} />}
      </Modal>
    </div>
  );
}

function StudentDetail({ student, onMark }) {
  const maxDays = student.duration === "DAYS_15" ? 15 : 30;
  const map = Object.fromEntries(student.attendance.map((a) => [a.day, a.status]));
  const [saving, setSaving] = useState({});

  async function mark(day, status) {
    setSaving((s) => ({ ...s, [day]: true }));
    await onMark(student.id, day, status);
    setSaving((s) => ({ ...s, [day]: false }));
  }

  return (
    <div className="space-y-4 text-sm">
      <p className="text-gray-500">{student.user.email} · {student.domain}</p>
      <div>
        <p className="font-medium text-gray-700 mb-2">Attendance</p>
        <div className="grid grid-cols-5 gap-1.5">
          {Array.from({ length: maxDays }, (_, i) => i + 1).map((day) => (
            <div key={day} className="border rounded p-1 text-center">
              <p className="text-xs text-gray-400">D{day}</p>
              <div className="flex gap-0.5 mt-0.5 justify-center">
                <button onClick={() => mark(day, "PRESENT")}
                  className={`text-xs px-1 py-0.5 rounded ${map[day] === "PRESENT" ? "bg-green-500 text-white" : "bg-gray-100 text-gray-500"} hover:bg-green-400 hover:text-white transition`}
                  aria-label={`Day ${day} present`}>P</button>
                <button onClick={() => mark(day, "ABSENT")}
                  className={`text-xs px-1 py-0.5 rounded ${map[day] === "ABSENT" ? "bg-red-500 text-white" : "bg-gray-100 text-gray-500"} hover:bg-red-400 hover:text-white transition`}
                  aria-label={`Day ${day} absent`}>A</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <p className="font-medium text-gray-700 mb-2">Submissions</p>
        {student.submissions.length === 0 ? (
          <p className="text-gray-400">No submissions yet.</p>
        ) : (
          <ul className="space-y-1 list-none">
            {student.submissions.map((sub) => (
              <li key={sub.id} className="flex items-center justify-between text-xs">
                <span>{sub.assignment?.title}</span>
                <Badge colour={sub.status === "ACCEPTED" ? "green" : sub.status === "CHANGES_REQUESTED" ? "yellow" : "indigo"}>
                  {sub.status}
                </Badge>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

/* ── Attendance Tab ── */
function AttendanceTab({ mentor }) {
  const [selectedStudent, setSelectedStudent] = useState(mentor.students[0]?.id || "");
  const [day, setDay] = useState(1);
  const [status, setStatus] = useState("PRESENT");
  const [msg, setMsg] = useState("");

  async function submit() {
    const res = await fetch("/api/mentor/attendance", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ studentId: selectedStudent, day: Number(day), status }),
    });
    const data = await res.json();
    setMsg(res.ok ? "Saved!" : data.error);
  }

  return (
    <div className="max-w-md space-y-4">
      <h2 className="text-lg font-semibold text-gray-900">Mark Attendance</h2>
      <Select id="att-student" label="Student" value={selectedStudent} onChange={(e) => setSelectedStudent(e.target.value)}>
        {mentor.students.map((s) => <option key={s.id} value={s.id}>{s.user.name}</option>)}
      </Select>
      <Input id="att-day" type="number" label="Day" min={1} max={30} value={day} onChange={(e) => setDay(e.target.value)} />
      <Select id="att-status" label="Status" value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="PRESENT">Present</option>
        <option value="ABSENT">Absent</option>
      </Select>
      <Button onClick={submit}>Save Attendance</Button>
      {msg && <p className="text-sm text-green-600">{msg}</p>}
    </div>
  );
}

/* ── GMeet Tab ── */
function MeetTab({ mentor }) {
  const [url, setUrl] = useState(mentor.meetUrl || "");
  const [live, setLive] = useState(mentor.meetLive || false);
  const [msg, setMsg] = useState("");

  async function save() {
    const res = await fetch("/api/mentor/meet", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ meetUrl: url, meetLive: live }),
    });
    const data = await res.json();
    setMsg(res.ok ? "Saved!" : data.error);
  }

  return (
    <div className="max-w-md space-y-4">
      <h2 className="text-lg font-semibold text-gray-900">Google Meet</h2>
      <Input id="meet-url" label="Google Meet URL" value={url} onChange={(e) => setUrl(e.target.value)} placeholder="https://meet.google.com/..." />
      <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
        <input type="checkbox" checked={live} onChange={(e) => setLive(e.target.checked)} className="rounded border-gray-300 text-emerald-600 focus:ring-emerald-500" />
        Mark as Live (students will see a &quot;Join Meet&quot; button)
      </label>
      <Button onClick={save}>Save</Button>
      {msg && <p className="text-sm text-green-600">{msg}</p>}
    </div>
  );
}

/* ── Create Assignment ── */
function CreateAssignmentTab({ mentor }) {
  const [form, setForm] = useState({ title: "", description: "", dueDate: "", studentId: "" });
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  async function submit() {
    setLoading(true);
    const fd = new FormData();
    fd.append("title", form.title);
    fd.append("description", form.description);
    fd.append("dueDate", form.dueDate);
    if (form.studentId) fd.append("studentId", form.studentId);
    if (file) fd.append("attachment", file);
    const res = await fetch("/api/mentor/assignments", { method: "POST", body: fd });
    const data = await res.json();
    setMsg(res.ok ? "Assignment created!" : data.error);
    setLoading(false);
    if (res.ok) setForm({ title: "", description: "", dueDate: "", studentId: "" });
  }

  return (
    <div className="max-w-lg space-y-4">
      <h2 className="text-lg font-semibold text-gray-900">Create Assignment</h2>
      <Input id="a-title" label="Title *" value={form.title} onChange={(e) => setForm(f => ({ ...f, title: e.target.value }))} />
      <Textarea id="a-desc" label="Description *" value={form.description} onChange={(e) => setForm(f => ({ ...f, description: e.target.value }))} />
      <Input id="a-due" type="date" label="Due date *" value={form.dueDate} onChange={(e) => setForm(f => ({ ...f, dueDate: e.target.value }))} />
      <Select id="a-student" label="Assign to" value={form.studentId} onChange={(e) => setForm(f => ({ ...f, studentId: e.target.value }))}>
        <option value="">All my students</option>
        {mentor.students.map((s) => <option key={s.id} value={s.id}>{s.user.name}</option>)}
      </Select>
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-gray-700">Attachment (PDF, optional)</label>
        <input type="file" accept=".pdf" onChange={(e) => setFile(e.target.files?.[0] || null)}
          className="text-sm file:mr-3 file:py-1.5 file:px-3 file:rounded file:border-0 file:text-xs file:font-medium file:bg-emerald-50 file:text-emerald-700" />
      </div>
      <Button onClick={submit} loading={loading}>Create Assignment</Button>
      {msg && <p className="text-sm text-green-600">{msg}</p>}
    </div>
  );
}

/* ── Submissions ── */
function SubmissionsTab({ mentor }) {
  const [feedback, setFeedback] = useState({});
  const [msg, setMsg] = useState({});

  async function updateStatus(subId, status) {
    const res = await fetch(`/api/mentor/submissions/${subId}/status`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status, feedback: feedback[subId] || "" }),
    });
    const data = await res.json();
    setMsg((m) => ({ ...m, [subId]: res.ok ? "Saved!" : data.error }));
  }

  const submissions = mentor.assignments.flatMap((a) =>
    a.submissions.map((sub) => ({ ...sub, assignmentTitle: a.title }))
  );

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-gray-900">Submissions</h2>
      {submissions.length === 0 && <p className="text-gray-500 text-sm">No submissions yet.</p>}
      {submissions.map((sub) => (
        <div key={sub.id} className="bg-white border border-gray-100 rounded-xl p-5 space-y-3">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="font-medium text-gray-900">{sub.assignmentTitle}</p>
              <p className="text-sm text-gray-500">{sub.student?.user?.name}</p>
            </div>
            <Badge colour={sub.status === "ACCEPTED" ? "green" : sub.status === "CHANGES_REQUESTED" ? "yellow" : "indigo"}>
              {sub.status}
            </Badge>
          </div>
          <a href={`/api/mentor/submissions/${sub.id}/file`} target="_blank" rel="noopener noreferrer"
            className="text-sm text-indigo-600 hover:underline">View submission</a>
          <Textarea id={`fb-${sub.id}`} label="Feedback (optional)" rows={2}
            value={feedback[sub.id] || sub.feedback || ""}
            onChange={(e) => setFeedback((f) => ({ ...f, [sub.id]: e.target.value }))} />
          <div className="flex gap-2">
            <Button size="sm" onClick={() => updateStatus(sub.id, "ACCEPTED")}>Accept</Button>
            <Button size="sm" variant="secondary" onClick={() => updateStatus(sub.id, "CHANGES_REQUESTED")}>Request Changes</Button>
          </div>
          {msg[sub.id] && <p className="text-xs text-green-600">{msg[sub.id]}</p>}
        </div>
      ))}
    </div>
  );
}

export default function MentorDashboard({ mentor }) {
  const tabs = [
    { id: "students", label: "My Students", content: <StudentsTab mentor={mentor} /> },
    { id: "attendance", label: "Attendance", content: <AttendanceTab mentor={mentor} /> },
    { id: "meet", label: "GMeet Link", content: <MeetTab mentor={mentor} /> },
    { id: "create", label: "Create Assignment", content: <CreateAssignmentTab mentor={mentor} /> },
    { id: "submissions", label: "Submissions", content: <SubmissionsTab mentor={mentor} /> },
  ];
  return <PortalShell role="MENTOR" name={mentor.user.name} tabs={tabs} />;
}
