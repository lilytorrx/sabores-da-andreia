import { neon } from "@neondatabase/serverless";

function databaseUrl() {
  const value = (globalThis as { process?: { env?: Record<string, string | undefined> } }).process
    ?.env?.DATABASE_URL;
  if (!value) throw new Error("DATABASE_URL não configurada.");
  return value;
}

export async function query<T extends object>(text: string, params: unknown[] = []) {
  const sql = neon(databaseUrl());
  return sql.query(text, params) as Promise<T[]>;
}

export function brazilDate() {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Sao_Paulo",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(new Date());
  const part = (type: string) => parts.find((value) => value.type === type)?.value;
  return `${part("year")}-${part("month")}-${part("day")}`;
}
