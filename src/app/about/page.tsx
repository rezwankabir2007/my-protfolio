import type { Metadata } from 'next';

import { SectionHeading } from '@/components/sections/SectionHeading';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn more about RAZOAN, a diploma engineering student and aspiring web developer focused on modern web experiences.',
};

const values = [
  {
    title: 'Learning-first mindset',
    description: 'I am always exploring modern tools and patterns to sharpen my technical understanding and design sensibility.',
  },
  {
    title: 'Thoughtful product design',
    description: 'I care about usability, clarity, and clean interfaces that feel intuitive and premium on every screen.',
  },
  {
    title: 'Clean, maintainable code',
    description: 'I build web experiences with structure, readability, and scalability in mind from the beginning.',
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="About Me"
        title="A curious developer building meaningful digital experiences."
        description="I am a Diploma Engineering student and an aspiring web developer passionate about crafting responsive, user-friendly, and modern web applications."
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_18px_40px_rgba(15,23,42,0.08)] dark:border-slate-800 dark:bg-slate-900/80">
          <p className="text-lg leading-8 text-slate-700 dark:text-slate-300">
            My focus is on React, Next.js, TypeScript, and modern frontend technologies. I enjoy learning new tools, solving problems, and transforming ideas into polished digital products that are both functional and visually strong.
          </p>
          <p className="text-lg leading-8 text-slate-700 dark:text-slate-300">
            The process matters to me as much as the outcome. I value simple architecture, responsive interfaces, and thoughtful interaction design that improves how people experience the web.
          </p>
          <p className="text-lg leading-8 text-slate-700 dark:text-slate-300">
            As I continue my journey, I want to grow into a reliable developer who can build modern user experiences, collaborate effectively, and keep learning with purpose.
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 dark:border-slate-800 dark:bg-slate-900/70">
          <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">Quick Snapshot</h3>
          <ul className="mt-6 space-y-4 text-sm text-slate-700 dark:text-slate-300">
            <li className="flex justify-between gap-4 border-b border-slate-200 pb-3 dark:border-slate-800">
              <span className="text-slate-500 dark:text-slate-400">Name</span>
              <span className="font-medium text-slate-900 dark:text-slate-100">RAZOAN</span>
            </li>
            <li className="flex justify-between gap-4 border-b border-slate-200 pb-3 dark:border-slate-800">
              <span className="text-slate-500 dark:text-slate-400">Location</span>
              <span className="font-medium text-slate-900 dark:text-slate-100">Bangladesh</span>
            </li>
            <li className="flex justify-between gap-4 border-b border-slate-200 pb-3 dark:border-slate-800">
              <span className="text-slate-500 dark:text-slate-400">Current Path</span>
              <span className="font-medium text-slate-900 dark:text-slate-100">Diploma Engineering Student</span>
            </li>
            <li className="flex justify-between gap-4 pb-1">
              <span className="text-slate-500 dark:text-slate-400">Focus</span>
              <span className="font-medium text-slate-900 dark:text-slate-100">Frontend Development</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {values.map((value) => (
          <div key={value.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/80">
            <div className="mb-4 h-11 w-11 rounded-2xl bg-blue-600/10 text-blue-600 dark:bg-blue-500/10 dark:text-blue-300">
              <div className="flex h-full w-full items-center justify-center text-lg font-bold">•</div>
            </div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">{value.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{value.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
