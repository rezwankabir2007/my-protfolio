import Link from 'next/link';
import { ArrowUp } from 'lucide-react';

import { socialLinks } from '@/data/social-links';

const footerLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Skills', href: '/skills' },
  { label: 'Contact', href: '/contact' },
];

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-100/80 dark:border-slate-800 dark:bg-slate-950/80">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.4fr_0.8fr_1.1fr] lg:px-8">
        <div>
          <div className="mb-4 text-lg font-black tracking-[0.22em] text-slate-900 dark:text-slate-100">RAZOAN.</div>
          <p className="max-w-md text-sm leading-7 text-slate-600 dark:text-slate-300">
            Building digital experiences that matter through thoughtful design, clean code, and modern product thinking.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
            Quick Links
          </h3>
          <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition hover:text-blue-600 dark:hover:text-blue-400">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
            Contact
          </h3>
          <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
            <li>
              <a href="mailto:your-email@example.com" className="transition hover:text-blue-600 dark:hover:text-blue-400">
                rezwan9923@gmail.com
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/your-profile" className="transition hover:text-blue-600 dark:hover:text-blue-400">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com/your-username" className="transition hover:text-blue-600 dark:hover:text-blue-400">
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-200 bg-white/70 dark:border-slate-800 dark:bg-slate-950/90">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-5 text-sm text-slate-500 sm:flex-row sm:px-6 lg:px-8 dark:text-slate-400">
          <p>© {currentYear} RAZOAN. All rights reserved.</p>

          <div className="flex items-center gap-3">
            {socialLinks.slice(0, 4).map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noreferrer' : undefined}
                aria-label={label}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition hover:border-blue-500 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
            <a
              href="#top"
              aria-label="Back to top"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition hover:border-blue-500 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
            >
              <ArrowUp className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
