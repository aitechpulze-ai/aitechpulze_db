"use client";
import { useState } from "react";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import Select from "@/components/ui/Select";

const projectTypes = [
  "Website", "Web Application", "Mobile App", "AI / Automation",
  "SaaS / ERP / CRM", "UI/UX Design", "Cloud & DevOps", "Other",
];

export default function QuoteForm() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", company: "",
    projectType: "", budget: "", timeline: "", message: "", website: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [serverError, setServerError] = useState("");

  function set(field, value) {
    setForm((f) => ({ ...f, [field]: value }));
    setErrors((e) => ({ ...e, [field]: "" }));
  }

  function validate() {
    const errs = {};
    if (form.name.trim().length < 2) errs.name = "Name must be at least 2 characters";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) errs.email = "Enter a valid email";
    if (!form.projectType) errs.projectType = "Please select a project type";
    if (form.message.trim().length < 10) errs.message = "Message must be at least 10 characters";
    return errs;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }

    setStatus("loading");
    setServerError("");
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) { setServerError(data.error || "Something went wrong"); setStatus("error"); return; }
      setStatus("success");
    } catch {
      setServerError("Network error. Please try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="text-center py-12 px-4" role="status" aria-live="polite">
        <div className="text-5xl mb-4" aria-hidden="true">✅</div>
        <h3 className="text-xl font-semibold text-gray-900">Request received!</h3>
        <p className="mt-2 text-gray-600">We&apos;ll get back to you within 24 hours, Mon–Sat 9AM–7PM IST.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4" aria-label="Get a quote form">
      {/* Honeypot — hidden from real users */}
      <input
        type="text"
        name="website"
        value={form.website}
        onChange={(e) => set("website", e.target.value)}
        className="hidden"
        aria-hidden="true"
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input id="name" label="Your name *" value={form.name} onChange={(e) => set("name", e.target.value)} error={errors.name} autoComplete="name" />
        <Input id="email" type="email" label="Email address *" value={form.email} onChange={(e) => set("email", e.target.value)} error={errors.email} autoComplete="email" />
        <Input id="phone" type="tel" label="Phone (optional)" value={form.phone} onChange={(e) => set("phone", e.target.value)} autoComplete="tel" />
        <Input id="company" label="Company (optional)" value={form.company} onChange={(e) => set("company", e.target.value)} autoComplete="organization" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Select id="projectType" label="Project type *" value={form.projectType} onChange={(e) => set("projectType", e.target.value)} error={errors.projectType}>
          <option value="">Select…</option>
          {projectTypes.map((t) => <option key={t} value={t}>{t}</option>)}
        </Select>
        <Input id="budget" label="Budget (optional)" placeholder="e.g. ₹15,000–₹50,000" value={form.budget} onChange={(e) => set("budget", e.target.value)} />
        <Input id="timeline" label="Timeline (optional)" placeholder="e.g. 4 weeks" value={form.timeline} onChange={(e) => set("timeline", e.target.value)} />
      </div>

      <Textarea
        id="message"
        label="Tell us about your project *"
        value={form.message}
        onChange={(e) => set("message", e.target.value)}
        error={errors.message}
        rows={5}
        placeholder="Describe what you're building, who it's for, and any key requirements…"
      />

      {serverError && (
        <p role="alert" className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
          {serverError}
        </p>
      )}

      <Button type="submit" size="lg" loading={status === "loading"} className="w-full sm:w-auto">
        Send Request
      </Button>
    </form>
  );
}
