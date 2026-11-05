'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ChevronDown, LogIn, LogOut, UserRoundPlus } from 'lucide-react';
import { useState } from 'react';

import { UserAvatar } from '@/components/auth/UserAvatar';
import { authClient } from '@/lib/auth-client';

export function NavbarAccount({ placement }: { placement: 'desktop' | 'mobile' }) {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();
  const [isSigningOut, setIsSigningOut] = useState(false);
  const [signOutError, setSignOutError] = useState('');

  async function handleSignOut() {
    setSignOutError('');
    setIsSigningOut(true);

    try {
      const result = await authClient.signOut();
      if (result.error) {
        setSignOutError(result.error.message || 'Unable to sign out. Please try again.');
        return;
      }

      router.replace('/');
      router.refresh();
    } catch (error) {
      setSignOutError(error instanceof Error ? error.message : 'Unable to sign out. Please try again.');
    } finally {
      setIsSigningOut(false);
    }
  }

  if (placement === 'mobile') {
    if (isPending || session) return null;

    return (
      <div className="mt-4 grid grid-cols-2 gap-3 border-t border-slate-200 pt-4 dark:border-white/10 sm:hidden">
        <Link href="/login" className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 px-3 py-2.5 text-sm font-medium text-slate-700 dark:border-white/10 dark:text-slate-200">
          <LogIn className="h-4 w-4" />
          Log in
        </Link>
        <Link href="/signup" className="inline-flex items-center justify-center gap-2 rounded-full bg-violet-100 px-3 py-2.5 text-sm font-semibold text-[#32163b]">
          <UserRoundPlus className="h-4 w-4" />
          Sign up
        </Link>
      </div>
    );
  }

  if (isPending) {
    return <span aria-label="Loading account" className="hidden h-10 w-20 animate-pulse rounded-full bg-slate-200 dark:bg-white/10 sm:block" />;
  }

  if (!session) {
    return (
      <div className="hidden items-center gap-2 sm:flex">
        <Link href="/login" className="inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-white/[0.06]">
          <LogIn className="h-4 w-4" />
          Log in
        </Link>
        <Link href="/signup" className="inline-flex items-center gap-1.5 rounded-full bg-violet-100 px-3 py-2 text-sm font-semibold text-[#32163b] transition hover:bg-white">
          <UserRoundPlus className="h-4 w-4" />
          Sign up
        </Link>
      </div>
    );
  }

  return (
    <details className="relative">
      <summary className="flex cursor-pointer list-none items-center gap-2 rounded-full border border-slate-200 bg-white p-1 pr-2 text-left transition hover:border-violet-500 dark:border-white/10 dark:bg-white/[0.04] sm:pr-3">
        <UserAvatar name={session.user.name} image={session.user.image} />
        <span className="hidden max-w-36 sm:block">
          <span className="block truncate text-xs font-semibold text-slate-900 dark:text-slate-100">{session.user.name}</span>
          <span className="block max-w-36 truncate text-[10px] text-slate-500 dark:text-slate-400">{session.user.email}</span>
        </span>
        <ChevronDown className="hidden h-4 w-4 text-slate-500 sm:block dark:text-slate-400" />
        <span className="sr-only">Open account menu</span>
      </summary>
      <div className="absolute right-0 top-full z-50 mt-3 w-64 rounded-2xl border border-slate-200 bg-white p-2 shadow-xl dark:border-white/10 dark:bg-[#321a3b]">
        <div className="border-b border-slate-200 px-3 py-2 dark:border-white/10">
          <p className="truncate text-sm font-semibold text-slate-900 dark:text-slate-100">{session.user.name}</p>
          <p className="truncate text-xs text-slate-500 dark:text-slate-400">{session.user.email}</p>
        </div>
        <Link href="/profile" className="mt-1 block rounded-xl px-3 py-2 text-sm text-slate-700 transition hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-white/[0.06]">
          My Profile
        </Link>
        <button
          type="button"
          onClick={handleSignOut}
          disabled={isSigningOut}
          className="flex w-full items-center gap-2 rounded-xl px-3 py-2 text-left text-sm text-slate-700 transition hover:bg-slate-100 disabled:opacity-60 dark:text-slate-200 dark:hover:bg-white/[0.06]"
        >
          <LogOut className="h-4 w-4" />
          {isSigningOut ? 'Signing out...' : 'Sign Out'}
        </button>
        {signOutError ? <p role="alert" className="px-3 py-2 text-xs text-red-600 dark:text-red-400">{signOutError}</p> : null}
      </div>
    </details>
  );
}
