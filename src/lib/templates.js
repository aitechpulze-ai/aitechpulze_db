import { esc } from "./mail";

const SITE = process.env.NEXT_PUBLIC_SITE_URL || "https://aitechpulze.com";

const layout = (title, body) => `
<div style="font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;max-width:600px;margin:auto;background-color:#ffffff;border:1px solid #e5e7eb;border-radius:12px;overflow:hidden;box-shadow:0 4px 6px -1px rgba(0, 0, 0, 0.1)">
  <div style="background-color:#4f46e5;padding:24px;text-align:center;">
    <h1 style="margin:0;color:#ffffff;font-size:24px;font-weight:bold;letter-spacing:1px">AiTechPulze</h1>
  </div>
  <div style="padding:32px;color:#374151;line-height:1.6">
    <h2 style="margin:0 0 20px;color:#111827;font-size:20px">${title}</h2>
    ${body}
  </div>
  <div style="background-color:#f9fafb;padding:24px;text-align:center;border-top:1px solid #e5e7eb">
    <p style="margin:0 0 8px;font-size:14px;color:#4b5563;font-weight:600">AiTechPulze Solutions</p>
    <p style="margin:0 0 8px;font-size:12px;color:#6b7280">Empowering the future with Artificial Intelligence.</p>
    <p style="margin:0;font-size:12px;color:#9ca3af">
      <a href="mailto:info@aitechpulze.com" style="color:#4f46e5;text-decoration:none">info@aitechpulze.com</a> &nbsp;|&nbsp; 
      <a href="tel:+919585776088" style="color:#4f46e5;text-decoration:none">+91 95857 76088</a>
    </p>
  </div>
</div>`;

const row = (k, v) =>
  `<tr><td style="padding:8px 16px 8px 0;color:#6b7280;border-bottom:1px solid #f3f4f6;font-size:14px">${k}</td><td style="padding:8px 0;border-bottom:1px solid #f3f4f6;font-size:14px;color:#111827"><b>${esc(v || "-")}</b></td></tr>`;

export const quoteClientMail = (d) => ({
  subject: "We received your request | AiTechPulze",
  html: layout(
    `Thanks, ${esc(d.name)}!`,
    `<p>We have received your request for <b>${esc(d.projectType)}</b>.</p>
     <p>Our admin will contact you shortly (usually within 24 hours, Mon–Sat 9AM–7PM IST).</p>`
  ),
});

export const quoteAdminMail = (d) => ({
  subject: `New quote request: ${d.name} (${d.projectType})`,
  html: layout(
    "New quote request",
    `<table>${row("Name", d.name)}${row("Email", d.email)}${row("Phone", d.phone)}
     ${row("Company", d.company)}${row("Project", d.projectType)}${row("Budget", d.budget)}
     ${row("Timeline", d.timeline)}</table>
     <p style="white-space:pre-wrap">${esc(d.message)}</p>`
  ),
});

export const internshipClientMail = (d) => ({
  subject: "Internship application received | AiTechPulze",
  html: layout(
    `Thanks for applying, ${esc(d.name)}!`,
    `<p>We received your application for the <b>${esc(d.domain)}</b> internship.</p>
     <p>Our admin will review it and contact you. If approved, your portal login details will be emailed to you.</p>`
  ),
});

export const internshipAdminMail = (d) => ({
  subject: `New internship application: ${d.name}`,
  html: layout(
    "New internship application",
    `<table>${row("Name", d.name)}${row("Email", d.email)}${row("Phone", d.phone)}
     ${row("College", d.college)}${row("Domain", d.domain)}${row("Duration", d.duration)}</table>
     <p>Review it in the admin portal: <a href="${SITE}/portal/admin/dashboard">${SITE}/portal/admin/dashboard</a></p>`
  ),
});

// Student credentials mail — sent when an internship application is approved.
// Subject and opening line are specific to students (application approved).
export const credentialsMail = ({ name, email, tempPassword }) => ({
  subject: "Your AiTechPulze internship portal login",
  html: layout(
    `Welcome, ${esc(name)}! Your application is approved 🎉`,
    `<p>Use these details to log in:</p>
     <table>${row("Portal", `${SITE}/portal/login`)}${row("Username", email)}${row("Temporary password", tempPassword)}</table>
     <p>You will be asked to <b>set a new password</b> when you log in for the first time.</p>
     <p><a href="${SITE}/portal/login" style="display:inline-block;padding:10px 18px;background:#4f46e5;color:#fff;border-radius:8px;text-decoration:none">Open Student Portal</a></p>`
  ),
});

// OVERRIDE: Separate mentor credentials mail — does NOT say "Your application is approved"
// because mentors are created by admin directly, not via an internship application.
export const mentorCredentialsMail = ({ name, email, tempPassword, domain }) => ({
  subject: "Your AiTechPulze mentor portal login",
  html: layout(
    `Welcome, ${esc(name)}!`,
    `<p>An admin has set up your mentor account for the <b>${esc(domain)}</b> domain.</p>
     <p>Use these details to log in to your mentor portal:</p>
     <table>${row("Portal", `${SITE}/portal/login`)}${row("Username", email)}${row("Temporary password", tempPassword)}</table>
     <p>You will be asked to <b>set a new password</b> when you log in for the first time.</p>
     <p><a href="${SITE}/portal/login" style="display:inline-block;padding:10px 18px;background:#059669;color:#fff;border-radius:8px;text-decoration:none">Open Mentor Portal</a></p>`
  ),
});
