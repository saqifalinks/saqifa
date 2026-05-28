import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.SUPABASE_URL;
const supabaseAnonKey = import.meta.env.SUPABASE_ANON_KEY;

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);

function fetchWithTimeout(input: RequestInfo | URL, init?: RequestInit) {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), 2000);
  const merged = { ...init, signal: ctrl.signal };
  return fetch(input, merged).finally(() => clearTimeout(timer));
}

export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl!, supabaseAnonKey!, { fetch: fetchWithTimeout })
  : null;
