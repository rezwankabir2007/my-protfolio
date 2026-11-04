import type { Metadata } from 'next';

import { SectionHeading } from '@/components/sections/SectionHeading';
import { experienceTimeline } from '@/data/experience';

export const metadata: Metadata = {
  title: 'Experience & Education',
  description: 'A timeline of RAZOAN’s education, learning journey, and future growth in web development.',
};

export default function ExperiencePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Journey"
        title="Building a strong foundation while growing toward the next chapter."
        description="This timeline reflects my current educational path, learning progression, and directions I am actively developing in the world of web technology."
      />

      <div className="relative mt-12 pl-4">
        <div className="absolute left-3 top-0 h-full w-px bg-slate-200 dark:bg-slate-800" />

        <div className="space-y-8">
          {experienceTimeline.map((item) => (
            <div key={item.title} className="relative pl-10">
              <div className="absolute left-0 top-2 h-6 w-6 rounded-full border-4 border-white bg-blue-600 dark:border-slate-950" />
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/80">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">{item.title}</h3>
                  <span className="inline-flex rounded-full border border-slate-200 bg-slate-100 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">
                    {item.period}
                  </span>
                </div>
                <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
