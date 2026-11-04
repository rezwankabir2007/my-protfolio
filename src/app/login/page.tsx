import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, LockKeyhole } from 'lucide-react';

import { AuthForm } from '@/components/auth/AuthForm';

export const metadata: Metadata = {
  title: 'Log in',
  description: 'Log in to your RAZOAN portfolio account.',
};

export default function LoginPage() {
  return (
    <div className="mx-auto grid min-h-[75vh] max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_0.85fr] lg:px-8">
      <div className="hidden rounded-[32px] bg-slate-900 p-10 text-white shadow-[0_30px_80px_rgba(15,23,42,0.2)] lg:block">
        <div className="mb-10 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600">
          <LockKeyhole className="h-6 w-6" />
        </div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">Welcome back</p>
        <h1 className="mt-4 max-w-lg text-4xl font-bold leading-tight">Continue your journey with RAZOAN.</h1>
        <p className="mt-5 max-w-lg text-base leading-7 text-slate-300">
          Sign in to access your portfolio profile and account information.
        </p>
        <div className="mt-12 border-t border-white/10 pt-6">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition hover:text-white">
            <ArrowLeft className="h-4 w-4" />
            Back to portfolio
          </Link>
        </div>
      </div>

      <div className="mx-auto w-full max-w-lg rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_18px_40px_rgba(15,23,42,0.08)] dark:border-slate-800 dark:bg-slate-900/80 sm:p-9">
        <Link href="/" className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 lg:hidden">
          <ArrowLeft className="h-4 w-4" />
          Back to portfolio
        </Link>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">Account access</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">Log in</h2>
        <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">Use your email and password to continue.</p>
        <div className="mt-8">
          <AuthForm mode="login" />
        </div>
      </div>
    </div>
  );
}
