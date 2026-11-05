import type { Metadata } from 'next';
import { GitBranch, Globe, Mail, MapPin, MessageCircle } from 'lucide-react';

import { ContactForm } from '@/components/sections/ContactForm';
import { SectionHeading } from '@/components/sections/SectionHeading';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Connect with RAZOAN for web development opportunities, collaborations, or project discussions.',
};

const contactMethods = [
  { label: 'Email', value: 'rezwan9923@gmail.com', href: 'mailto:rezwan9923@gmail.com', icon: Mail },
  { label: 'LinkedIn', value: 'https://www.linkedin.com/in/md-razoan-kabir2007/', href: 'https://www.linkedin.com/in/md-razoan-kabir2007/', icon: Globe },
  { label: 'GitHub', value: 'github.com/rezwankabir2007', href: 'https://github.com/rezwankabir2007', icon: GitBranch },
  { label: 'WhatsApp', value: '+8801788996192', href: 'https://wa.me/01788996192', icon: MessageCircle },
];

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Contact"
        title="Let’s build something useful together."
        description="I’m open to frontend opportunities, learning collaborations, and thoughtful digital product work."
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="space-y-6">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/80">
            <div className="mb-5 flex items-center gap-3 text-slate-900 dark:text-slate-100">
              <MapPin className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              <span className="font-medium">Bangladesh</span>
            </div>
            <ul className="space-y-4">
              {contactMethods.map(({ label, value, href, icon: Icon }) => (
                <li key={label}>
                  <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined} className="flex items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:border-blue-500 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-950 dark:hover:border-blue-500">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-500/10 dark:text-blue-300">
                        <Icon className="h-4 w-4" />
                      </span>
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-200">{label}</span>
                    </div>
                    <span className="text-right text-xs text-slate-500 dark:text-slate-400">{value}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <ContactForm />
      </div>
    </div>
  );
}
