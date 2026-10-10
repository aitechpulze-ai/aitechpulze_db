"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

export default function ChangePasswordForm() {
  const router = useRouter();
  const [form, setForm] = useState({ currentPassword: "", newPassword: "", confirm: "" });
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState("");
  const [loading, setLoading] = useState(false);

  function validate() {
    const errs = {};
    if (!form.currentPassword) errs.currentPassword = "Required";
    if (form.newPassword.length < 8) errs.newPassword = "At least 8 characters";
    if (form.newPassword !== form.confirm) errs.confirm = "Passwords do not match";
    return errs;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setLoading(true);
    setServerError("");
    try {
      const res = await fetch("/api/auth/change-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ currentPassword: form.currentPassword, newPassword: form.newPassword }),
      });
      const data = await res.json();
      if (!res.ok) { setServerError(data.error || "Failed to change password"); setLoading(false); return; }
      // Redirect based on role
      const dest = {
        STUDENT: "/portal/student/dashboard",
        MENTOR: "/portal/mentor/dashboard",
        ADMIN: "/portal/admin/dashboard",
      }[data.role] || "/portal/login";
      router.push(dest);
    } catch {
      setServerError("Network error. Please try again.");
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="relative bg-[#050B14]/60 backdrop-blur-xl rounded-2xl border border-[#00F0FF]/30 p-8 shadow-[0_0_20px_rgba(0,240,255,0.1)] space-y-5 group"
      aria-label="Change password form"
    >
      {/* Scanning Laser Effect */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00F0FF] to-transparent animate-scan opacity-50"></div>

      <Input id="cur" type="password" label="Current (temporary) password" value={form.currentPassword}
        onChange={(e) => setForm(f => ({ ...f, currentPassword: e.target.value }))} error={errors.currentPassword} autoComplete="current-password" />
      <Input id="new" type="password" label="New password (min 8 characters)" value={form.newPassword}
        onChange={(e) => setForm(f => ({ ...f, newPassword: e.target.value }))} error={errors.newPassword} autoComplete="new-password" />
      <Input id="conf" type="password" label="Confirm new password" value={form.confirm}
        onChange={(e) => setForm(f => ({ ...f, confirm: e.target.value }))} error={errors.confirm} autoComplete="new-password" />
      {serverError && (
        <div role="alert" className="flex items-center gap-2 text-xs font-mono text-[#FF003C] bg-[#FF003C]/10 border border-[#FF003C]/30 rounded-lg px-4 py-3">
          <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {serverError}
        </div>
      )}
      <Button type="submit" loading={loading} className="w-full font-bold tracking-[0.2em] uppercase" size="lg">Set Password</Button>
    </form>
  );
}
