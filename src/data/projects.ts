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
    image: '/images/studio_space.png',
    liveUrl: 'https://studiospacefontend.vercel.app/',
    githubUrl: 'https://github.com/rezwankabir2007/studio_space_client',
    featured: true,
  },
  {
    id: 'fitlog',
    slug: 'fitlog',
    title: 'FitLog',
    description:
      'A fitness tracking platform that helps users monitor their workouts, track fitness activities, and manage their health and fitness goals.',
    longDescription:
      'FitLog is a modern fitness tracking platform designed to help users stay consistent with their fitness journeys. It provides an intuitive interface for tracking workout activities, managing fitness progress, and organizing personal fitness goals. The platform focuses on a clean user interface, responsive design, and a smooth user experience across different devices.',
    technologies: ['Next.js', 'TypeScript', 'API Integration'],
    category: 'Health & Fitness',
    image: '/images/Firlog_excer.png',
    liveUrl: 'https://fit-log-projects-xi.vercel.app/',
    githubUrl: 'https://github.com/rezwankabir2007/fit_log_projects',
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
    image: '/images/BazarDor.png',
    liveUrl: 'https://bazar-dor-projects.vercel.app/',
    githubUrl: 'https://github.com/rezwankabir2007/bazar_dor_projects',
    featured: true,
  },
  {
    id: 'adventure',
    slug: 'adventure',
    title: 'Adventure',
    description:
      'An adventure travel platform that helps users discover exciting destinations, explore travel experiences, and plan memorable journeys.',
    longDescription:
      'Adventure is a modern travel discovery platform designed to inspire users to explore new destinations and exciting experiences. It provides an engaging interface for browsing travel opportunities, discovering destinations, and accessing useful travel information. The platform focuses on a clean UI, responsive design, and a smooth user experience across devices.',
    technologies: ['Next.js', 'TypeScript', 'API Integration'],
    category: 'Travel & Tourism',
    image: '/images/Adventure.png',
    liveUrl: '',
    githubUrl: 'https://github.com/rezwankabir2007/wanderlust',
    featured: true,
  },
  {
    id: 'development-stack',
    slug: 'development-stack',
    title: 'Development Stack',
    description:
      'A developer-focused platform that helps users explore essential web development technologies, tools, and resources in one place.',
    longDescription:
      'Development Stack is a modern web platform designed to help developers discover and explore different technologies, development tools, and useful resources. It provides an organized way to learn about various technologies through a clean and responsive interface. The project focuses on user-friendly navigation, modern UI design, and delivering a smooth browsing experience across all devices.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    category: 'Developer Tools',
    image: '/images/Development-Stack.png',
    liveUrl: 'https://b14-a05-dev-stack-project.vercel.app/',
    githubUrl: 'https://github.com/rezwankabir2007/B14-A05-DevStack-Project',
    featured: true,
  },
];

export const featuredProjects = projects.filter(
  (project) => project.featured
);