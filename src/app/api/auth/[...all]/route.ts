import { toNextJsHandler } from 'better-auth/next-js';

import { getAuth } from '@/lib/auth';

export const runtime = 'nodejs';

function handle(method: keyof ReturnType<typeof toNextJsHandler>) {
  return (request: Request) => {
    if (!process.env.BETTER_AUTH_SECRET || process.env.BETTER_AUTH_SECRET.length < 32) {
      return Response.json(
        { message: 'Authentication needs a random BETTER_AUTH_SECRET of at least 32 characters in .env.local.' },
        { status: 503 },
      );
    }

    return toNextJsHandler(getAuth())[method](request);
  };
}

export const GET = handle('GET');
export const POST = handle('POST');
export const PATCH = handle('PATCH');
export const PUT = handle('PUT');
export const DELETE = handle('DELETE');
