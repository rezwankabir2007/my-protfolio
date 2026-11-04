'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { ChevronDown, LogIn, LogOut, Menu, UserRoundPlus, X } from 'lucide-react';
import { useEffect, useState } from 'react';

import { UserAvatar } from '@/components/auth/UserAvatar';
import { authClient } from '@/lib/auth-client';
import { ThemeToggle } from './ThemeToggle';
import type { NavItem } from '@/types';

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Skills', href: '/skills' },
  { label: 'Experience', href: '/experience' },
  { label: 'Certificates', href: '/certificates' },
  { label: 'Contact', href: '/contact' },
];

export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();
  const [isOpen, setIsOpen] = useState(false);
  const [isSigningOut, setIsSigningOut] = useState(false);
  const [signOutError, setSignOutError] = useState('');

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsOpen(false);
    setSignOutError('');
  }, [pathname]);

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

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/75">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <Link href="/" className="flex items-center gap-2 text-lg font-black tracking-[0.24em] text-slate-900 transition hover:text-blue-600 dark:text-slate-100 dark:hover:text-blue-400">
          <span>RAZOAN</span>
        </Link>

        <div className="hidden items-center gap-1 rounded-full border border-slate-200 bg-slate-50/80 p-1 dark:border-slate-700 dark:bg-slate-900/70 lg:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-3 py-2 text-sm font-medium transition ${
                  active
                    ? 'bg-slate-900 text-white shadow-sm dark:bg-blue-600 dark:text-white'
                    : 'text-slate-600 hover:bg-white hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle />
          {isPending ? (
            <span aria-label="Loading account" className="hidden h-10 w-20 animate-pulse rounded-full bg-slate-200 dark:bg-slate-800 sm:block" />
          ) : session ? (
            <details className="relative">
              <summary className="flex cursor-pointer list-none items-center gap-2 rounded-full border border-slate-200 bg-white p-1 pr-2 text-left transition hover:border-blue-500 dark:border-slate-700 dark:bg-slate-900 sm:pr-3">
                <UserAvatar name={session.user.name} image={session.user.image} />
                <span className="hidden max-w-36 sm:block">
                  <span className="block truncate text-xs font-semibold text-slate-900 dark:text-slate-100">{session.user.name}</span>
                  <span className="block max-w-36 truncate text-[10px] text-slate-500 dark:text-slate-400">{session.user.email}</span>
                </span>
                <ChevronDown className="hidden h-4 w-4 text-slate-500 sm:block dark:text-slate-400" />
                <span className="sr-only">Open account menu</span>
              </summary>
              <div className="absolute right-0 top-full z-50 mt-3 w-64 rounded-2xl border border-slate-200 bg-white p-2 shadow-xl dark:border-slate-700 dark:bg-slate-900">
                <div className="border-b border-slate-200 px-3 py-2 dark:border-slate-700">
                  <p className="truncate text-sm font-semibold text-slate-900 dark:text-slate-100">{session.user.name}</p>
                  <p className="truncate text-xs text-slate-500 dark:text-slate-400">{session.user.email}</p>
                </div>
                <Link
                  href="/profile"
                  className="mt-1 block rounded-xl px-3 py-2 text-sm text-slate-700 transition hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
                >
                  My Profile
                </Link>
                <button
                  type="button"
                  onClick={handleSignOut}
                  disabled={isSigningOut}
                  className="flex w-full items-center gap-2 rounded-xl px-3 py-2 text-left text-sm text-slate-700 transition hover:bg-slate-100 disabled:opacity-60 dark:text-slate-200 dark:hover:bg-slate-800"
                >
                  <LogOut className="h-4 w-4" />
                  {isSigningOut ? 'Signing out...' : 'Sign Out'}
                </button>
                {signOutError ? <p role="alert" className="px-3 py-2 text-xs text-red-600 dark:text-red-400">{signOutError}</p> : null}
              </div>
            </details>
          ) : (
            <div className="hidden items-center gap-2 sm:flex">
              <Link
                href="/login"
                className="inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
              >
                <LogIn className="h-4 w-4" />
                Log in
              </Link>
              <Link
                href="/signup"
                className="inline-flex items-center gap-1.5 rounded-full bg-blue-600 px-3 py-2 text-sm font-semibold text-white transition hover:bg-blue-500"
              >
                <UserRoundPlus className="h-4 w-4" />
                Sign up
              </Link>
            </div>
          )}
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:border-blue-500 hover:text-blue-600 lg:hidden dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {isOpen ? (
        <div className="border-t border-slate-200 bg-white/95 p-4 shadow-lg dark:border-slate-800 dark:bg-slate-950/95 lg:hidden">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-xl px-3 py-2 text-sm font-medium transition ${
                    active
                      ? 'bg-blue-600 text-white'
                      : 'text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-900'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
          {!isPending && !session ? (
            <div className="mt-4 grid grid-cols-2 gap-3 border-t border-slate-200 pt-4 dark:border-slate-800 sm:hidden">
              <Link href="/login" className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 px-3 py-2.5 text-sm font-medium text-slate-700 dark:border-slate-700 dark:text-slate-200">
                <LogIn className="h-4 w-4" />
                Log in
              </Link>
              <Link href="/signup" className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-3 py-2.5 text-sm font-semibold text-white">
                <UserRoundPlus className="h-4 w-4" />
                Sign up
              </Link>
            </div>
          ) : null}
        </div>
      ) : null}
    </header>
  );
}
