const SESSION_COOKIE = "sda_admin_session";
const SESSION_LIFETIME_SECONDS = 60 * 60 * 12;

type Session = { userId: string; expiresAt: number };

function secret() {
  const value = (globalThis as { process?: { env?: Record<string, string | undefined> } }).process
    ?.env?.SESSION_SECRET;
  if (!value) throw new Error("SESSION_SECRET não configurado.");
  return value;
}

function encode(value: string) {
  return btoa(value).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
}

function decode(value: string) {
  const normalized = value.replace(/-/g, "+").replace(/_/g, "/");
  return atob(normalized + "=".repeat((4 - (normalized.length % 4)) % 4));
}

async function signature(value: string) {
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret()),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const bytes = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(value));
  return encode(String.fromCharCode(...new Uint8Array(bytes)));
}

export async function createSessionCookie(userId: string) {
  const payload = encode(
    JSON.stringify({ userId, expiresAt: Date.now() + SESSION_LIFETIME_SECONDS * 1000 }),
  );
  const token = `${payload}.${await signature(payload)}`;
  return `${SESSION_COOKIE}=${token}; Path=/; HttpOnly; SameSite=Lax; Secure; Max-Age=${SESSION_LIFETIME_SECONDS}`;
}

export function clearSessionCookie() {
  return `${SESSION_COOKIE}=; Path=/; HttpOnly; SameSite=Lax; Secure; Max-Age=0`;
}

export async function getSession(request: Request): Promise<Session | null> {
  const cookie = request.headers
    .get("cookie")
    ?.split(";")
    .map((value) => value.trim())
    .find((value) => value.startsWith(`${SESSION_COOKIE}=`))
    ?.slice(SESSION_COOKIE.length + 1);
  if (!cookie) return null;
  const [payload, receivedSignature] = cookie.split(".");
  if (!payload || !receivedSignature || receivedSignature !== (await signature(payload)))
    return null;
  try {
    const session = JSON.parse(decode(payload)) as Session;
    return session.expiresAt > Date.now() && typeof session.userId === "string" ? session : null;
  } catch {
    return null;
  }
}
