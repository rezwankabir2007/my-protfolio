import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Code2, Download, Sparkles } from 'lucide-react';

import { ProjectCard } from '@/components/sections/ProjectCard';
import { SectionHeading } from '@/components/sections/SectionHeading';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { featuredProjects } from '@/data/projects';
import { socialLinks } from '@/data/social-links';

const techStack = ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'MongoDB', 'REST APIs', 'Figma'];

const expertise = [
  'Responsive UI architecture',
  'Modern React and Next.js interfaces',
  'Design-driven frontend development',
  'Clean component systems and UX polish',
];

const technicalExpertise: Array<{ title: string; items: string[] }> = [
  { title: 'Frontend', items: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'] },
  { title: 'Backend', items: ['Node.js', 'Express.js', 'REST APIs'] },
  { title: 'Design', items: ['Figma', 'User Experience', 'Responsive Systems'] },
  { title: 'Workflow', items: ['Git', 'GitHub', 'VS Code', 'Problem Solving'] },
];

const journeySteps: Array<{ step: string; title: string; description: string }> = [
  {
    step: '01',
    title: 'Foundation',
    description: 'Building a strong base in engineering thinking, design fundamentals, and practical development habits.',
  },
  {
    step: '02',
    title: 'Implementation',
    description: 'Turning ideas into responsive interfaces and real user experiences using modern frontend tools.',
  },
  {
    step: '03',
    title: 'Growth',
    description: 'Continuously improving through projects, experimentation, and a mindset rooted in learning.',
  },
];

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl px-4 pb-20 pt-8 sm:px-6 lg:px-8">
      <AnimatedSection className="grid items-center gap-10 py-10 lg:grid-cols-[1.1fr_0.9fr] lg:py-20">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-blue-700 dark:border-blue-500/40 dark:bg-blue-500/10 dark:text-blue-300">
            <Sparkles className="h-3.5 w-3.5" />
            Available for Opportunities
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-5xl lg:text-7xl">
            <span className="block text-base font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Hello, I&apos;m</span>
            <span className="mt-3 block text-slate-900 dark:text-slate-100">RAZOAN KABIR</span>
          </h1>

          <div className="mt-4 flex items-center gap-3 text-xl font-medium text-slate-600 dark:text-slate-300 sm:text-2xl">
            <span>Web Developer</span>
            <span className="text-blue-600 dark:text-blue-400">|</span>
            <span>Frontend Developer</span>
          </div>

          <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            Building Digital Experiences That Matter.
          </p>

          <p className="mt-4 max-w-xl text-base leading-7 text-slate-600 dark:text-slate-300">
            I&apos;m a Diploma Engineering student and aspiring web developer focused on creating modern, responsive, and user-friendly web experiences with React, Next.js, and TypeScript.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link href="/projects" className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500">
              Explore My Work
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a href="/Razoan_Kabir_Mondol_CV.pdf" download className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-blue-500 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200">
              <Download className="h-4 w-4" />
              Download CV
            </a>
          </div>

          <div className="mt-8 flex items-center gap-3">
            {socialLinks.slice(0, 3).map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noreferrer' : undefined}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition hover:border-blue-500 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
                aria-label={label}
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-8 top-8 h-32 w-32 rounded-full border border-blue-200 bg-blue-500/5 blur-2xl dark:border-blue-500/40 dark:bg-blue-400/10" />
          <div className="absolute -right-4 bottom-6 h-32 w-32 rounded-full border border-slate-200 bg-slate-200/80 blur-2xl dark:border-slate-700 dark:bg-slate-700/60" />

          <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-white p-4 shadow-[0_30px_80px_rgba(15,23,42,0.12)] dark:border-slate-800 dark:bg-slate-900/80">
            <div className="absolute inset-x-6 top-6 h-24 rounded-full bg-blue-500/10 blur-2xl" />


            <Image src="/rezwanImage.jpg" alt="RAZOAN portrait placeholder" width={640} height={720} priority className="relative h-[540px] w-full rounded-[24px] object-cover" />
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="overflow-hidden border-y border-slate-200 bg-slate-100/80 py-5 dark:border-slate-800 dark:bg-slate-900/70">
        <div className="marquee-track flex w-max gap-10 whitespace-nowrap px-4 text-sm font-medium uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
          {[...techStack, ...techStack].map((item, index) => (
            <span key={`${item}-${index}`} className="flex items-center gap-3">
              <Code2 className="h-3.5 w-3.5" />
              {item}
            </span>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-20">
        <SectionHeading
          eyebrow="About Me"
          title="I design and build experiences that feel polished and purposeful."
          description="I’m driven by modern frontend practices, user-first thinking, and the constant challenge of turning ideas into clear, responsive products."
        />

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_18px_40px_rgba(15,23,42,0.08)] dark:border-slate-800 dark:bg-slate-900/80">
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-300">
              I am a Diploma Engineering student and aspiring web developer who enjoys building modern, responsive products with a strong focus on usability and clarity.
            </p>
            <p className="mt-5 text-lg leading-8 text-slate-700 dark:text-slate-300">
              My work is shaped by curiosity, problem-solving, and a love for clean interfaces. I enjoy learning new technologies and using them to create meaningful digital experiences.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 dark:border-slate-800 dark:bg-slate-900/70">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">What I focus on</h3>
            <ul className="mt-6 space-y-4 text-sm text-slate-700 dark:text-slate-300">
              {expertise.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-blue-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-20">
        <SectionHeading
          eyebrow="Featured Projects"
          title="Selected work shaped by product thinking and frontend craft."
          description="These project concepts reflect my interest in building user-centered interfaces across education, creative marketplaces, and data-rich experiences."
          align="center"
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-20">
        <SectionHeading
          eyebrow="Technical Expertise"
          title="A focused stack for modern product work."
        />

        <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {technicalExpertise.map(({ title, items }) => (
            <div key={title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/80">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{title}</h3>
              <ul className="mt-5 space-y-3">
                {items.map((item) => (
                  <li key={item} className="text-sm text-slate-600 dark:text-slate-300">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-20">
        <SectionHeading
          eyebrow="My Development Journey"
          title="Learning, building, and improving with every project."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {journeySteps.map(({ step, title, description }) => (
            <div key={step} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/80">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">{step}</p>
              <h3 className="mt-5 text-2xl font-semibold text-slate-900 dark:text-slate-100">{title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">{description}</p>
            </div>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-20">
        <div className="rounded-[32px] border border-slate-200 bg-slate-900 px-6 py-12 text-center text-white shadow-[0_18px_40px_rgba(15,23,42,0.18)] sm:px-10 lg:px-16 dark:border-slate-700">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">Let&apos;s Connect</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">Open to thoughtful opportunities and creative collaborations.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-300">
            I&apos;m looking for chances to learn, contribute, and build meaningful digital experiences with a team that values design and quality.
          </p>
          <Link href="/contact" className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100">
            Contact Me
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </AnimatedSection>
    </div>
  );
}
