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
      className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_18px_40px_rgba(15,23,42,0.08)] transition duration-300 hover:border-blue-200 hover:shadow-[0_18px_40px_rgba(37,99,235,0.12)] dark:border-slate-800 dark:bg-slate-900/80 dark:hover:border-blue-500/50"
    >
      <div className="relative overflow-hidden border-b border-slate-200 dark:border-slate-800">
        <Image
          src={project.image}
          alt={project.title}
          width={800}
          height={540}
          className="h-56 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
        />
      </div>

      <div className="p-6">
        <div className="mb-4 flex items-center justify-between gap-4">
          <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-700 dark:border-blue-500/40 dark:bg-blue-500/10 dark:text-blue-300">
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
            className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-500"
          >
            View Details
            <ArrowUpRight className="h-4 w-4" />
          </Link>
          {project.liveUrl ? (
            <a href={project.liveUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:border-blue-500 hover:text-blue-600 dark:border-slate-700 dark:text-slate-200">
              <Globe className="h-4 w-4" />
              Live Demo
            </a>
          ) : null}
          {project.githubUrl ? (
            <a href={project.githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:border-blue-500 hover:text-blue-600 dark:border-slate-700 dark:text-slate-200">
              <GitBranch className="h-4 w-4" />
              GitHub
            </a>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
}
