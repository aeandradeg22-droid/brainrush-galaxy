// Lightweight client-side mock auth for the NUMERIX demo.
// Not a real authentication system — gates the protected routes behind a
// local "session" flag so the app isn't fully open to anonymous visitors.
const KEY = "numerix-auth";

export function isAuthed(): boolean {
  if (typeof window === "undefined") return true; // skip during SSR; client re-checks
  return window.localStorage.getItem(KEY) === "1";
}

export function signIn() {
  if (typeof window !== "undefined") window.localStorage.setItem(KEY, "1");
}

export function signOut() {
  if (typeof window !== "undefined") window.localStorage.removeItem(KEY);
}
