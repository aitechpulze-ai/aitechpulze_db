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
      className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm space-y-5"
      aria-label="Change password form"
    >
      <Input id="cur" type="password" label="Current (temporary) password" value={form.currentPassword}
        onChange={(e) => setForm(f => ({ ...f, currentPassword: e.target.value }))} error={errors.currentPassword} autoComplete="current-password" />
      <Input id="new" type="password" label="New password (min 8 characters)" value={form.newPassword}
        onChange={(e) => setForm(f => ({ ...f, newPassword: e.target.value }))} error={errors.newPassword} autoComplete="new-password" />
      <Input id="conf" type="password" label="Confirm new password" value={form.confirm}
        onChange={(e) => setForm(f => ({ ...f, confirm: e.target.value }))} error={errors.confirm} autoComplete="new-password" />
      {serverError && (
        <p role="alert" className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">{serverError}</p>
      )}
      <Button type="submit" loading={loading} className="w-full" size="lg">Set Password</Button>
    </form>
  );
}
