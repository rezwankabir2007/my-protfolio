import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

import { UserAvatar } from '@/components/auth/UserAvatar';
import { getAuth } from '@/lib/auth';

export const metadata: Metadata = {
  title: 'My Profile',
  description: 'View your account profile.',
};

export const dynamic = 'force-dynamic';

export default async function ProfilePage() {
  if (!process.env.BETTER_AUTH_SECRET || process.env.BETTER_AUTH_SECRET.length < 32) {
    redirect('/login');
  }

  const session = await getAuth().api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect('/login');
  }

  const createdAt = new Intl.DateTimeFormat('en', {
    dateStyle: 'long',
  }).format(session.user.createdAt);

  return (
    <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">Your account</p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100">My Profile</h1>

      <section className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_18px_40px_rgba(15,23,42,0.08)] dark:border-slate-800 dark:bg-slate-900/80 sm:p-9">
        <div className="flex flex-col items-start gap-5 border-b border-slate-200 pb-7 dark:border-slate-800 sm:flex-row sm:items-center">
          <UserAvatar name={session.user.name} image={session.user.image} size="lg" />
          <div>
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">{session.user.name}</h2>
            <p className="mt-1 text-slate-600 dark:text-slate-300">{session.user.email}</p>
          </div>
        </div>

        <dl className="mt-7 grid gap-6 sm:grid-cols-2">
          <div>
            <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">Account name</dt>
            <dd className="mt-2 text-base font-medium text-slate-900 dark:text-slate-100">{session.user.name}</dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">Email address</dt>
            <dd className="mt-2 text-base font-medium text-slate-900 dark:text-slate-100">{session.user.email}</dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">Email verified</dt>
            <dd className="mt-2 text-base font-medium text-slate-900 dark:text-slate-100">{session.user.emailVerified ? 'Yes' : 'No'}</dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">Account created</dt>
            <dd className="mt-2 text-base font-medium text-slate-900 dark:text-slate-100">{createdAt}</dd>
          </div>
        </dl>
      </section>
    </div>
  );
}
