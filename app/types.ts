export interface Env {
  AI: unknown;
  DB: D1Database;
}

export type WithEnv<T> = T & { env: Env };
