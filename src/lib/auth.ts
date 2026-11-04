import Database from 'better-sqlite3';
import { betterAuth } from 'better-auth';
import path from 'node:path';

let database: Database | undefined;

function createAuth() {
  database ??= new Database(path.join(process.cwd(), 'database.sqlite'));
  return betterAuth({
    database,
    baseURL: process.env.BETTER_AUTH_URL || 'http://localhost:3000',
    secret: process.env.BETTER_AUTH_SECRET,
    emailAndPassword: {
      enabled: true,
      minPasswordLength: 8,
      maxPasswordLength: 128,
    },
  });
}

let authInstance: ReturnType<typeof createAuth> | undefined;

export function getAuth(): ReturnType<typeof createAuth> {
  if (!process.env.BETTER_AUTH_SECRET || process.env.BETTER_AUTH_SECRET.length < 32) {
    throw new Error('Authentication requires a random BETTER_AUTH_SECRET of at least 32 characters.');
  }

  if (!authInstance) {
    authInstance = createAuth();
  }

  return authInstance;
}
