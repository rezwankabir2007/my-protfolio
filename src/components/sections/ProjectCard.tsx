'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, GitBranch, Globe } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

import type { Project } from '@/data/projects';

export function ProjectCard({ project }: { project: Project }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={shouldReduceMotion ? undefined : { y: -6 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_18px_40px_rgba(15,23,42,0.08)] transition duration-300 hover:border-violet-200 hover:shadow-[0_18px_40px_rgba(91,34,94,0.16)] dark:border-white/[0.09] dark:bg-[#321a3b]/75 dark:hover:border-violet-200/30"
    >
      <div className="relative overflow-hidden border-b border-slate-200 dark:border-white/[0.08]">
        <Image
          src={project.image}
          alt={project.title}
          width={800}
          height={540}
          sizes="(max-width: 1024px) 100vw, 33vw"
          className="h-56 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
        />
      </div>

      <div className="p-6">
        <div className="mb-4 flex items-center justify-between gap-4">
          <span className="inline-flex rounded-full border border-violet-200 bg-violet-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-violet-700 dark:border-violet-200/15 dark:bg-violet-200/[0.07] dark:text-violet-100">
            {project.category}
          </span>
          <span className="text-xs text-slate-500 dark:text-slate-400">Featured</span>
        </div>

        <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">{project.title}</h3>
        <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{project.description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-slate-200 bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-violet-700 dark:bg-violet-100 dark:text-[#32163b] dark:hover:bg-white"
          >
            View Details
            <ArrowUpRight className="h-4 w-4" />
          </Link>
          {project.liveUrl ? (
            <a href={project.liveUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:border-violet-500 hover:text-violet-700 dark:border-white/10 dark:text-slate-200 dark:hover:border-violet-200/30 dark:hover:text-violet-100">
              <Globe className="h-4 w-4" />
              Live Demo
            </a>
          ) : (
            <button type="button" disabled title="No live demo is available for this project." className="inline-flex cursor-not-allowed items-center gap-2 rounded-full border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-500 opacity-80 dark:border-white/10 dark:text-slate-400 dark:opacity-60">
              <Globe className="h-4 w-4" />
              Live Demo
            </button>
          )}
          {project.githubUrl ? (
            <a href={project.githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:border-violet-500 hover:text-violet-700 dark:border-white/10 dark:text-slate-200 dark:hover:border-violet-200/30 dark:hover:text-violet-100">
              <GitBranch className="h-4 w-4" />
              GitHub
            </a>
          ) : (
            <button type="button" disabled title="No public source repository is available for this project." className="inline-flex cursor-not-allowed items-center gap-2 rounded-full border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-500 opacity-80 dark:border-white/10 dark:text-slate-400 dark:opacity-60">
              <GitBranch className="h-4 w-4" />
              GitHub
            </button>
          )}
        </div>
      </div>
    </motion.article>
  );
}
