// Simple in-memory limiter. Resets when the server restarts. Fine for one server.
const hits = new Map();

export function rateLimit(key, max = 5, windowMs = 15 * 60 * 1000) {
  const now = Date.now();
  const entry = hits.get(key);
  if (!entry || entry.reset < now) {
    hits.set(key, { count: 1, reset: now + windowMs });
    return true;
  }
  entry.count += 1;
  return entry.count <= max;
}

export function clientIp(req) {
  return req.headers.get("x-forwarded-for")?.split(",")[0].trim() || "unknown";
}
