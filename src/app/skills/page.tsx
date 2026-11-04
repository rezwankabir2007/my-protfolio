import type { Metadata } from 'next';

import { SectionHeading } from '@/components/sections/SectionHeading';
import { skillCategories } from '@/data/skills';

export const metadata: Metadata = {
  title: 'Skills',
  description: 'Core frontend, backend, database, and design tools used by RAZOAN in modern web development work.',
};

export default function SkillsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Core Skills"
        title="A practical toolkit for building quality digital products."
        description="I work across modern frontend and web tooling, with a focus on responsive user experiences, clean architecture, and product-minded implementation."
      />

      <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
        {skillCategories.map((category) => (
          <div key={category.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_18px_40px_rgba(15,23,42,0.08)] dark:border-slate-800 dark:bg-slate-900/80">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{category.title}</h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {category.items.map((item) => (
                <span key={item} className="rounded-full border border-slate-200 bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
