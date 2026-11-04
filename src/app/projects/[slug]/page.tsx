import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, GitBranch, Globe } from 'lucide-react';
import { notFound } from 'next/navigation';

import { projects } from '@/data/projects';

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <Link href="/projects" className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400">
        <ArrowLeft className="h-4 w-4" />
        Back to Projects
      </Link>

      <div className="mt-8 overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-[0_18px_40px_rgba(15,23,42,0.08)] dark:border-slate-800 dark:bg-slate-900/80">
        <div className="grid gap-0 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="relative min-h-[280px]">
            <Image src={project.image} alt={project.title} fill className="object-cover" />
          </div>

          <div className="p-8">
            <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-700 dark:border-blue-500/40 dark:bg-blue-500/10 dark:text-blue-300">
              {project.category}
            </span>
            <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100">{project.title}</h1>
            <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">{project.longDescription}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="rounded-full border border-slate-200 bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {project.liveUrl ? (
                <a href={project.liveUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-500">
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
        </div>
      </div>
    </div>
  );
}
