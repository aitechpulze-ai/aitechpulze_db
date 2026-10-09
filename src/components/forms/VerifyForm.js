"use client";
import { useState } from "react";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

export default function VerifyForm() {
  const [id, setId] = useState("");
  const [result, setResult] = useState(null);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const trimmed = id.trim().toUpperCase();
    if (!/^ATP-\d{4}-[A-Z0-9]{6}$/.test(trimmed)) {
      setError("Invalid format. Expected: ATP-YYYY-XXXXXX");
      return;
    }
    setStatus("loading");
    setError("");
    setResult(null);
    try {
      const res = await fetch(`/api/verify?id=${encodeURIComponent(trimmed)}`);
      const data = await res.json();
      if (!res.ok) { setError(data.error || "Error checking certificate"); setStatus("error"); return; }
      setResult(data);
      setStatus("done");
    } catch {
      setError("Network error. Please try again.");
      setStatus("error");
    }
  }

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="flex gap-3" aria-label="Certificate verification form">
        <Input
          id="certId"
          label="Certificate ID"
          value={id}
          onChange={(e) => { setId(e.target.value); setError(""); setResult(null); }}
          placeholder="ATP-2026-ABCDEF"
          error={error}
          className="flex-1"
        />
        <div className="pt-5">
          <Button type="submit" loading={status === "loading"}>Verify</Button>
        </div>
      </form>

      {result && (
        <div
          role="status"
          aria-live="polite"
          className={`rounded-2xl p-6 border ${result.valid ? "bg-green-50 border-green-200" : "bg-red-50 border-red-200"}`}
        >
          {result.valid ? (
            <>
              <div className="text-3xl mb-2" aria-hidden="true">✅</div>
              <p className="font-semibold text-green-800">Valid Certificate</p>
              <dl className="mt-3 space-y-1 text-sm text-green-700">
                <div><dt className="inline font-medium">Name: </dt><dd className="inline">{result.name}</dd></div>
                <div><dt className="inline font-medium">Domain: </dt><dd className="inline">{result.domain}</dd></div>
                <div><dt className="inline font-medium">Duration: </dt><dd className="inline">{result.durationDays} days</dd></div>
                {result.startDate && (
                  <div>
                    <dt className="inline font-medium">Period: </dt>
                    <dd className="inline">
                      {new Date(result.startDate).toLocaleDateString("en-IN")} – {new Date(result.endDate).toLocaleDateString("en-IN")}
                    </dd>
                  </div>
                )}
              </dl>
            </>
          ) : (
            <>
              <div className="text-3xl mb-2" aria-hidden="true">❌</div>
              <p className="font-semibold text-red-800">Certificate not found</p>
              <p className="text-sm text-red-600 mt-1">No certificate with this ID was found. Please check the ID and try again.</p>
            </>
          )}
        </div>
      )}
    </div>
  );
}
