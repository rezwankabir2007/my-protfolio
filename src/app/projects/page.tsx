import type { Metadata } from 'next';

import { ProjectCard } from '@/components/sections/ProjectCard';
import { SectionHeading } from '@/components/sections/SectionHeading';
import { projects } from '@/data/projects';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Selected web development projects and concept work by RAZOAN, including StudioSpace, StudentHub, and Bazar Dor.',
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Selected Work"
        title="Modern solutions built with clarity and purpose."
        description="A focused set of project concepts that reflect my interest in frontend engineering, product thinking, and creating useful digital experiences."
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
