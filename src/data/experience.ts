export type ExperienceItem = {
  title: string;
  period: string;
  description: string;
  type: 'education' | 'journey' | 'project' | 'goal';
};

export const experienceTimeline: ExperienceItem[] = [
  {
    title: 'Diploma Engineering Education',
    period: 'Current',
    description:
      'Building a strong foundation in technical problem solving, practical engineering thinking, and self-directed learning.',
    type: 'education',
  },
  {
    title: 'Web Development Learning Journey',
    period: 'Ongoing',
    description:
      'Exploring React, Next.js, TypeScript, responsive UI design, and modern web development workflows through hands-on practice.',
    type: 'journey',
  },
  {
    title: 'Graphic Design Course Completion',
    period: 'Self-Directed',
    description:
      'Developing visual communication skills with design tools and experimenting with layouts, color, branding, and creative direction.',
    type: 'journey',
  },
  {
    title: 'Personal Development Projects',
    period: 'In Progress',
    description:
      'Creating portfolio work, UI experiments, and practical web applications to strengthen real-world implementation skills.',
    type: 'project',
  },
  {
    title: 'Future Career Goals',
    period: 'Next Steps',
    description:
      'Growing into a professional frontend or full-stack developer, contributing to meaningful digital products, and continuing to learn with purpose.',
    type: 'goal',
  },
];
