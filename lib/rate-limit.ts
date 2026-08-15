/**
 * Lightweight in-memory rate limiter for serverless runtimes.
 * Limits are best-effort per instance; suitable for abuse damping, not hard guarantees.
 */

type Bucket = {
  count: number;
  resetAt: number;
};

const buckets = new Map<string, Bucket>();

export function isRateLimited(key: string, limit = 5, windowMs = 15 * 60 * 1000) {
  const now = Date.now();
  const existing = buckets.get(key);

  if (!existing || existing.resetAt <= now) {
    buckets.set(key, { count: 1, resetAt: now + windowMs });
    return false;
  }

  if (existing.count >= limit) {
    return true;
  }

  existing.count += 1;
  buckets.set(key, existing);
  return false;
}
