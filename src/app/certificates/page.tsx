import type { Metadata } from 'next';
import Image from 'next/image';

import { SectionHeading } from '@/components/sections/SectionHeading';
import { certificates } from '@/data/certificates';

export const metadata: Metadata = {
  title: 'Certificates',
  description: 'Professional certificate gallery and learning milestones for RAZOAN.',
};

export default function CertificatesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Certificates"
        title="Learning milestones and continued growth."
        description="This section highlights learning progress and mock portfolio-ready certificate placeholders. I keep these editable and aligned with real achievements when available."
      />

      <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {certificates.map((certificate) => (
          <article key={certificate.title} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_18px_40px_rgba(15,23,42,0.08)] dark:border-slate-800 dark:bg-slate-900/80">
            <div className="relative h-52 border-b border-slate-200 bg-slate-100 dark:border-slate-800 dark:bg-slate-800">
              <Image src={certificate.image} alt={certificate.title} fill className="object-cover" />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">{certificate.title}</h3>
                <span className="rounded-full border border-slate-200 bg-slate-100 px-2 py-1 text-[10px] font-medium text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">
                  {certificate.date}
                </span>
              </div>
              <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">{certificate.organization}</p>
              {certificate.viewUrl ? (
                <a href={certificate.viewUrl} target="_blank" rel="noreferrer" className="mt-5 inline-flex rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-500">
                  View Certificate
                </a>
              ) : (
                <span className="mt-5 inline-flex rounded-full border border-dashed border-slate-300 px-4 py-2 text-sm font-medium text-slate-500 dark:border-slate-600 dark:text-slate-400">
                  Placeholder entry
                </span>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
