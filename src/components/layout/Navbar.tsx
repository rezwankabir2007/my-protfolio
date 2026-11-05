'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

import { NavbarAccount } from '@/components/layout/NavbarAccount';
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

export function Navbar({ authEnabled }: { authEnabled: boolean }) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-xl dark:border-violet-100/10 dark:bg-[#210c2a]/75">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <Link href="/" className="flex items-center gap-2 text-lg font-black tracking-[0.24em] text-slate-900 transition hover:text-violet-700 dark:text-slate-100 dark:hover:text-violet-200">
          <span>RAZOAN</span>
        </Link>

        <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.035] p-1 dark:border-white/10 dark:bg-white/[0.035] lg:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-3 py-2 text-sm font-medium transition ${
                  active
                  ? 'bg-violet-100 text-[#32163b] shadow-sm dark:bg-violet-100 dark:text-[#32163b]'
                  : 'text-slate-600 hover:bg-white/70 hover:text-slate-900 dark:text-white/65 dark:hover:bg-white/[0.08] dark:hover:text-white'
                }`}
                aria-current={active ? 'page' : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle />
          {authEnabled ? <NavbarAccount placement="desktop" /> : null}
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:border-violet-500 hover:text-violet-700 lg:hidden dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-200 dark:hover:border-violet-200/40 dark:hover:text-white"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {isOpen ? (
        <div className="border-t border-slate-200 bg-white/95 p-4 shadow-lg dark:border-white/10 dark:bg-[#210c2a]/95 lg:hidden">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-xl px-3 py-2 text-sm font-medium transition ${
                    active
                      ? 'bg-violet-100 text-[#32163b]'
                      : 'text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-white/[0.06]'
                  }`}
                  aria-current={active ? 'page' : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
          {authEnabled ? <NavbarAccount placement="mobile" /> : null}
        </div>
      ) : null}
    </header>
  );
}
