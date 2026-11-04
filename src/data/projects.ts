export type Project = {
  id: string;
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  category: string;
  image: string;
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    id: 'studio-space',
    slug: 'studio-space',
    title: 'StudioSpace',
    description:
      'A peer-to-peer creative workspace and production studio sharing platform where creators can explore and book creative studios.',
    longDescription:
      'StudioSpace is a concept platform for creators who need flexible workspaces and production-ready environments. It supports discovery, availability checks, and booking workflows for photographers, designers, filmmakers, and collaborative teams.',
    technologies: ['Next.js', 'TypeScript', 'Express.js', 'MongoDB'],
    category: 'Marketplace',
    image: '/images/project-studio-space.svg',
    liveUrl: '',
    githubUrl: '',
    featured: true,
  },
  
  {
    id: 'student-hub',
    slug: 'student-hub',
    title: 'StudentHub',
    description:
      'A student-focused educational platform designed to provide learning resources, academic materials, and useful study tools.',
    longDescription:
      'StudentHub brings together learning resources in one place, making it easier for students to discover notes, course materials, practice resources, and productivity tools tailored to academic routines.',
    technologies: ['Next.js', 'React', 'TypeScript'],
    category: 'Education',
    image: '/images/project-student-hub.svg',
    liveUrl: '',
    githubUrl: '',
    featured: true,
  },
  {
    id: 'bazar-dor',
    slug: 'bazar-dor',
    title: 'Bazar Dor',
    description:
      'A market price information platform that helps users explore market prices through API integration.',
    longDescription:
      'Bazar Dor is built to help users compare current market prices and spot product trends using data-driven insights. It focuses on clarity, up-to-date information, and a clean browsing experience.',
    technologies: ['Next.js', 'TypeScript', 'API Integration'],
    category: 'Data',
    image: '/images/project-bazar-dor.svg',
    liveUrl: '',
    githubUrl: '',
    featured: true,
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
