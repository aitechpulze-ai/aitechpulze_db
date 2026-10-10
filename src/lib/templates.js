import { esc } from "./mail";

const SITE = process.env.NEXT_PUBLIC_SITE_URL || "https://aitechpulze.com";

const layout = (title, body) => `
<div style="font-family:'Space Grotesk', 'Segoe UI', Tahoma, Geneva, sans-serif; max-width:600px; margin:auto; background-color:#050505; border:1px solid #00f0ff; border-radius:16px; overflow:hidden; box-shadow:0 0 15px rgba(0, 240, 255, 0.2);">
  <div style="background: linear-gradient(90deg, #0f0c29 0%, #302b63 50%, #24243e 100%); padding:30px; text-align:center; border-bottom:1px solid rgba(0,240,255,0.3);">
    <h1 style="margin:0; color:#00f0ff; font-size:28px; font-weight:800; letter-spacing:2px; text-transform:uppercase; text-shadow:0 0 8px rgba(0,240,255,0.5);">
      AiTech<span style="color:#ff003c;">Pulze</span>
    </h1>
  </div>
  <div style="padding:32px; color:#e0e0e0; line-height:1.6; background-image: radial-gradient(circle at center, #111 0%, #000 100%);">
    <h2 style="margin:0 0 20px; color:#ffffff; font-size:22px; border-left:4px solid #00f0ff; padding-left:12px;">${title}</h2>
    ${body}
  </div>
  <div style="background-color:#0a0a0a; padding:24px; text-align:center; border-top:1px solid rgba(255,0,60,0.3);">
    <p style="margin:0 0 8px; font-size:14px; color:#00f0ff; font-weight:600; letter-spacing:1px;">AITECHPULZE SOLUTIONS</p>
    <p style="margin:0 0 8px; font-size:12px; color:#888;">Empowering the future with next-gen Artificial Intelligence.</p>
    <p style="margin:0; font-size:12px; color:#555;">
      <a href="mailto:info@aitechpulze.com" style="color:#ff003c; text-decoration:none; font-weight:bold;">info@aitechpulze.com</a> &nbsp;|&nbsp; 
      <a href="tel:+919585776088" style="color:#ff003c; text-decoration:none; font-weight:bold;">+91 95857 76088</a>
    </p>
  </div>
</div>`;

const row = (k, v) =>
  `<tr><td style="padding:8px 16px 8px 0; color:#a0a0a0; border-bottom:1px solid rgba(0,240,255,0.1); font-size:14px;">${k}</td><td style="padding:8px 0; border-bottom:1px solid rgba(0,240,255,0.1); font-size:14px; color:#ffffff;"><b>${esc(v || "-")}</b></td></tr>`;

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
