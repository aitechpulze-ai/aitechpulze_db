"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    if (!email.trim() || !password) { setError("Email and password are required"); return; }
    setLoading(true);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim().toLowerCase(), password }),
      });
      const data = await res.json();
      if (!res.ok) { setError(data.error || "Login failed"); setLoading(false); return; }

      if (data.mustChangePassword) {
        router.push("/portal/change-password");
        return;
      }
      // Redirect based on role
      const dest = {
        STUDENT: "/portal/student/dashboard",
        MENTOR: "/portal/mentor/dashboard",
        ADMIN: "/portal/admin/dashboard",
      }[data.role] || "/portal/login";
      router.push(dest);
    } catch {
      setError("Network error. Please try again.");
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="relative bg-[#050B14]/60 backdrop-blur-xl rounded-2xl border border-[#00F0FF]/30 p-8 shadow-[0_0_20px_rgba(0,240,255,0.1)] space-y-5 group"
      aria-label="Portal login form"
    >
      {/* Scanning Laser Effect */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00F0FF] to-transparent animate-scan opacity-50"></div>

      <div className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-xs font-mono text-[#00F0FF]/80 uppercase tracking-widest mb-1">Email address</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            autoFocus
            className="w-full bg-[#050B14]/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00F0FF] focus:ring-1 focus:ring-[#00F0FF] transition-all font-mono text-sm placeholder-white/20"
            placeholder="sys.op@domain.com"
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-xs font-mono text-[#00F0FF]/80 uppercase tracking-widest mb-1">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            className="w-full bg-[#050B14]/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00F0FF] focus:ring-1 focus:ring-[#00F0FF] transition-all font-mono text-sm placeholder-white/20"
            placeholder="••••••••"
          />
        </div>
      </div>
      {error && (
        <div role="alert" className="flex items-center gap-2 text-xs font-mono text-[#FF003C] bg-[#FF003C]/10 border border-[#FF003C]/30 rounded-lg px-4 py-3">
          <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {error}
        </div>
      )}
      <button
        type="submit"
        disabled={loading}
        className="relative w-full py-4 mt-6 bg-[#00F0FF]/10 hover:bg-[#00F0FF]/20 border border-[#00F0FF]/50 rounded-lg text-white font-bold tracking-[0.2em] uppercase text-xs overflow-hidden transition-all duration-300 shadow-[0_0_15px_rgba(0,240,255,0.2)] hover:shadow-[0_0_25px_rgba(0,240,255,0.4)] disabled:opacity-50 disabled:cursor-not-allowed group/btn"
      >
        {/* Button Glitch Hover Effect */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:animate-[shimmer_1.5s_infinite]"></div>
        {loading ? (
          <span className="flex items-center justify-center">
            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-[#00F0FF]" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            AUTHENTICATING...
          </span>
        ) : (
          "AUTHENTICATE"
        )}
      </button>
    </form>
  );
}
