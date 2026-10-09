"use client";
import { useState } from "react";
import PortalShell from "./PortalShell";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import Modal from "@/components/ui/Modal";

/* ── Applications ── */
function ApplicationsTab({ applications: initial }) {
  const [apps, setApps] = useState(initial);
  const [loading, setLoading] = useState({});
  const [msgs, setMsgs] = useState({});

  async function approve(id) {
    setLoading((l) => ({ ...l, [id]: true }));
    const res = await fetch(`/api/admin/applications/${id}/approve`, { method: "POST" });
    const data = await res.json();
    if (res.ok) {
      setApps((a) => a.map((x) => x.id === id ? { ...x, status: "APPROVED" } : x));
      if (!data.mailSent) setMsgs((m) => ({ ...m, [id]: "⚠️ Account created but email failed. Use Resend Credentials." }));
    } else {
      setMsgs((m) => ({ ...m, [id]: data.error }));
    }
    setLoading((l) => ({ ...l, [id]: false }));
  }

  async function reject(id) {
    setLoading((l) => ({ ...l, [id]: true }));
    const res = await fetch(`/api/admin/applications/${id}/reject`, { method: "POST" });
    const data = await res.json();
    if (res.ok) setApps((a) => a.map((x) => x.id === id ? { ...x, status: "REJECTED" } : x));
    else setMsgs((m) => ({ ...m, [id]: data.error }));
    setLoading((l) => ({ ...l, [id]: false }));
  }

  async function del(id) {
    if (!confirm("Delete this application?")) return;
    const res = await fetch(`/api/admin/applications/${id}`, { method: "DELETE" });
    if (res.ok) setApps((a) => a.filter((x) => x.id !== id));
  }

  const statusColour = { PENDING: "yellow", APPROVED: "green", REJECTED: "red" };

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-gray-900">Applications ({apps.length})</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-50 text-left text-xs text-gray-500 uppercase">
            <tr>
              {["Name", "Email", "Domain", "Duration", "Status", "Resume", "Actions"].map((h) => (
                <th key={h} className="px-3 py-2 whitespace-nowrap">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 bg-white">
            {apps.map((app) => (
              <tr key={app.id}>
                <td className="px-3 py-2 font-medium text-gray-900 whitespace-nowrap">{app.name}</td>
                <td className="px-3 py-2 text-gray-500">{app.email}</td>
                <td className="px-3 py-2 text-gray-500">{app.domain}</td>
                <td className="px-3 py-2 text-gray-500">{app.duration === "DAYS_15" ? "15d" : "30d"}</td>
                <td className="px-3 py-2">
                  <Badge colour={statusColour[app.status]}>{app.status}</Badge>
                </td>
                <td className="px-3 py-2">
                  <a href={`/api/admin/resume/${app.resumeUrl}`} target="_blank" rel="noopener noreferrer"
                    className="text-indigo-600 hover:underline text-xs">View PDF</a>
                </td>
                <td className="px-3 py-2">
                  <div className="flex gap-1 flex-wrap">
                    {app.status === "PENDING" && (
                      <>
                        <Button size="sm" loading={loading[app.id]} onClick={() => approve(app.id)}>Approve</Button>
                        <Button size="sm" variant="secondary" loading={loading[app.id]} onClick={() => reject(app.id)}>Reject</Button>
                      </>
                    )}
                    <Button size="sm" variant="danger" onClick={() => del(app.id)}>Delete</Button>
                  </div>
                  {msgs[app.id] && <p className="text-xs text-yellow-600 mt-1">{msgs[app.id]}</p>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ── Students ── */
function StudentsTab({ students: initial, mentors }) {
  const [students, setStudents] = useState(initial);
  const [msgs, setMsgs] = useState({});

  async function assignMentor(studentId, mentorId) {
    const res = await fetch(`/api/admin/students/${studentId}/assign-mentor`, {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ mentorId }),
    });
    const data = await res.json();
    if (res.ok) {
      const m = mentors.find((x) => x.id === mentorId);
      setStudents((s) => s.map((x) => x.id === studentId ? { ...x, mentor: m || null } : x));
    } else setMsgs((m) => ({ ...m, [studentId]: data.error }));
  }

  async function issueCertificate(studentId) {
    const res = await fetch(`/api/admin/students/${studentId}/certificate`, { method: "POST" });
    const data = await res.json();
    if (res.ok) setMsgs((m) => ({ ...m, [studentId]: `Certificate issued: ${data.certificateId}` }));
    else setMsgs((m) => ({ ...m, [studentId]: data.error }));
  }

  async function resendCredentials(studentId) {
    const res = await fetch(`/api/admin/students/${studentId}/resend-credentials`, { method: "POST" });
    const data = await res.json();
    setMsgs((m) => ({ ...m, [studentId]: res.ok ? (data.mailSent ? "Email sent!" : "Reset OK, email failed") : data.error }));
  }

  async function del(studentId) {
    if (!confirm("Delete this student account?")) return;
    const res = await fetch(`/api/admin/students/${studentId}`, { method: "DELETE" });
    if (res.ok) setStudents((s) => s.filter((x) => x.id !== studentId));
  }

  async function exportCsv() {
    const res = await fetch("/api/admin/students/export");
    const blob = await res.blob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a"); a.href = url; a.download = "students.csv"; a.click();
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-lg font-semibold text-gray-900">Students ({students.length})</h2>
        <Button size="sm" variant="secondary" onClick={exportCsv}>Export CSV</Button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-50 text-left text-xs text-gray-500 uppercase">
            <tr>{["Name", "Email", "Domain", "Mentor", "Certificate", "Actions"].map((h) => (
              <th key={h} className="px-3 py-2 whitespace-nowrap">{h}</th>
            ))}</tr>
          </thead>
          <tbody className="divide-y divide-gray-100 bg-white">
            {students.map((s) => (
              <tr key={s.id}>
                <td className="px-3 py-2 font-medium text-gray-900 whitespace-nowrap">{s.user.name}</td>
                <td className="px-3 py-2 text-gray-500 text-xs">{s.user.email}</td>
                <td className="px-3 py-2 text-gray-500">{s.domain}</td>
                <td className="px-3 py-2">
                  <select className="text-xs border rounded px-1 py-0.5"
                    value={s.mentor?.id || ""}
                    onChange={(e) => assignMentor(s.id, e.target.value)}>
                    <option value="">Unassigned</option>
                    {mentors.map((m) => <option key={m.id} value={m.id}>{m.user.name}</option>)}
                  </select>
                </td>
                <td className="px-3 py-2">
                  {s.certificateId
                    ? <span className="text-xs font-mono text-green-600">{s.certificateId}</span>
                    : <span className="text-xs text-gray-400">Not issued</span>}
                </td>
                <td className="px-3 py-2">
                  <div className="flex gap-1 flex-wrap">
                    {!s.certificateId && <Button size="sm" variant="secondary" onClick={() => issueCertificate(s.id)}>Issue Cert</Button>}
                    <Button size="sm" variant="ghost" onClick={() => resendCredentials(s.id)}>Resend Login</Button>
                    <Button size="sm" variant="danger" onClick={() => del(s.id)}>Delete</Button>
                  </div>
                  {msgs[s.id] && <p className="text-xs text-blue-600 mt-1">{msgs[s.id]}</p>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ── Mentors ── */
function MentorsTab({ mentors: initial }) {
  const [mentors, setMentors] = useState(initial);
  const [showCreate, setShowCreate] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", domain: "" });
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  async function create() {
    setLoading(true);
    const res = await fetch("/api/admin/mentors", {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    if (res.ok) {
      setMsg(data.mailSent ? "Mentor created, email sent!" : "Created, but email failed");
      setShowCreate(false);
      setForm({ name: "", email: "", domain: "" });
    } else setMsg(data.error);
    setLoading(false);
  }

  async function del(id) {
    if (!confirm("Delete this mentor?")) return;
    const res = await fetch(`/api/admin/mentors/${id}`, { method: "DELETE" });
    if (res.ok) setMentors((m) => m.filter((x) => x.id !== id));
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-lg font-semibold text-gray-900">Mentors ({mentors.length})</h2>
        <Button size="sm" onClick={() => setShowCreate(true)}>Add Mentor</Button>
      </div>

      <Modal open={showCreate} onClose={() => setShowCreate(false)} title="Create Mentor">
        <div className="space-y-3">
          <Input id="mn" label="Name *" value={form.name} onChange={(e) => setForm(f => ({ ...f, name: e.target.value }))} />
          <Input id="me" type="email" label="Email *" value={form.email} onChange={(e) => setForm(f => ({ ...f, email: e.target.value }))} />
          <Input id="md" label="Domain *" value={form.domain} onChange={(e) => setForm(f => ({ ...f, domain: e.target.value }))} />
          {msg && <p className="text-sm text-yellow-600">{msg}</p>}
          <Button onClick={create} loading={loading} className="w-full">Create & Send Login</Button>
        </div>
      </Modal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {mentors.map((m) => (
          <div key={m.id} className="bg-white border border-gray-100 rounded-xl p-4">
            <p className="font-medium text-gray-900">{m.user.name}</p>
            <p className="text-xs text-gray-500 mt-0.5">{m.user.email}</p>
            <p className="text-xs text-blue-600 mt-1">{m.domain} · {m.students.length} students</p>
            <Button size="sm" variant="danger" className="mt-3" onClick={() => del(m.id)}>Delete</Button>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Quotes ── */
function QuotesTab({ quotes: initial }) {
  const [quotes, setQuotes] = useState(initial);
  const statusColour = { NEW: "indigo", CONTACTED: "yellow", WON: "green", LOST: "red" };

  async function updateStatus(id, status) {
    const res = await fetch(`/api/admin/quotes/${id}/status`, {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });
    if (res.ok) setQuotes((q) => q.map((x) => x.id === id ? { ...x, status } : x));
  }

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-gray-900">Quote Requests ({quotes.length})</h2>
      <div className="space-y-3">
        {quotes.map((q) => (
          <div key={q.id} className="bg-white border border-gray-100 rounded-xl p-5">
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div>
                <p className="font-medium text-gray-900">{q.name} · {q.projectType}</p>
                <p className="text-xs text-gray-500 mt-0.5">{q.email} {q.phone && `· ${q.phone}`}</p>
                {q.company && <p className="text-xs text-gray-400">{q.company}</p>}
                {q.budget && <p className="text-xs text-gray-400">Budget: {q.budget}</p>}
              </div>
              <Select id={`qs-${q.id}`} value={q.status} onChange={(e) => updateStatus(q.id, e.target.value)} className="text-xs">
                {["NEW", "CONTACTED", "WON", "LOST"].map((s) => <option key={s} value={s}>{s}</option>)}
              </Select>
            </div>
            <p className="mt-3 text-sm text-gray-600 whitespace-pre-wrap">{q.message}</p>
            <p className="mt-2 text-xs text-gray-400">{new Date(q.createdAt).toLocaleString("en-IN")}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Analytics ── */
function AnalyticsTab({ analytics }) {
  const kpis = [
    { label: "Total Applications", value: analytics.total },
    { label: "Approved", value: analytics.approved },
    { label: "Pending Review", value: analytics.pending },
    { label: "Certificates Issued", value: analytics.certs },
    { label: "Mentors", value: analytics.mentorCount },
    { label: "Quote Requests", value: analytics.quoteCount },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-lg font-semibold text-gray-900">Analytics</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {kpis.map((k) => (
          <div key={k.label} className="bg-white rounded-xl border border-gray-100 p-4 text-center">
            <p className="text-3xl font-bold text-blue-600">{k.value}</p>
            <p className="text-xs text-gray-500 mt-1">{k.label}</p>
          </div>
        ))}
      </div>

      {/* Simple SVG bar chart for application status */}
      <div className="bg-white rounded-xl border border-gray-100 p-6">
        <h3 className="text-sm font-semibold text-gray-700 mb-4">Application Status</h3>
        <div className="space-y-3">
          {[
            { label: "Approved", count: analytics.approved, colour: "bg-green-400" },
            { label: "Pending", count: analytics.pending, colour: "bg-yellow-400" },
            { label: "Rejected", count: analytics.total - analytics.approved - analytics.pending, colour: "bg-red-400" },
          ].map((bar) => (
            <div key={bar.label} className="flex items-center gap-3">
              <span className="text-xs text-gray-500 w-16">{bar.label}</span>
              <div className="flex-1 bg-gray-100 rounded-full h-3">
                <div
                  className={`${bar.colour} h-3 rounded-full`}
                  style={{ width: analytics.total > 0 ? `${(bar.count / analytics.total) * 100}%` : "0%" }}
                  role="progressbar"
                  aria-valuenow={bar.count}
                  aria-valuemax={analytics.total}
                  aria-label={`${bar.label}: ${bar.count}`}
                />
              </div>
              <span className="text-xs text-gray-500 w-6">{bar.count}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function AdminDashboard({ applications, students, mentors, quotes, analytics, adminName }) {
  const tabs = [
    { id: "applications", label: "Applications", content: <ApplicationsTab applications={applications} /> },
    { id: "students", label: "Students", content: <StudentsTab students={students} mentors={mentors} /> },
    { id: "mentors", label: "Mentors", content: <MentorsTab mentors={mentors} /> },
    { id: "quotes", label: "Quotes", content: <QuotesTab quotes={quotes} /> },
    { id: "analytics", label: "Analytics", content: <AnalyticsTab analytics={analytics} /> },
  ];
  return <PortalShell role="ADMIN" name={adminName} tabs={tabs} />;
}
