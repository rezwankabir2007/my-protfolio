import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Database,
  Download,
  Layers3,
  Mail,
  MapPin,
  Palette,
  Server,
  Wrench,
} from 'lucide-react';

import { ContactForm } from '@/components/sections/ContactForm';
import { ProjectCard } from '@/components/sections/ProjectCard';
import { SectionHeading } from '@/components/sections/SectionHeading';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { RoleTypewriter } from '@/components/ui/RoleTypewriter';
import { experienceTimeline } from '@/data/experience';
import { featuredProjects } from '@/data/projects';
import { skillCategories } from '@/data/skills';
import { socialLinks } from '@/data/social-links';

const skillIcons = [Code2, Server, Database, Wrench];

const services = [
  {
    icon: Layers3,
    title: 'Frontend Development',
    description: 'Thoughtful, maintainable interfaces built around clear content and intuitive interactions.',
  },
  {
    icon: Palette,
    title: 'Responsive Web Design',
    description: 'Layouts that adapt smoothly across mobile, tablet, and desktop screens.',
  },
  {
    icon: Code2,
    title: 'React & Next.js Development',
    description: 'Component-driven web experiences using modern React and Next.js patterns.',
  },
  {
    icon: BriefcaseBusiness,
    title: 'Website Development',
    description: 'From early concept to polished, accessible pages, with care given to the full experience.',
  },
];

const focusAreas = [
  'Responsive interfaces with considered details',
  'Modern React and Next.js development',
  'Accessible, user-first design decisions',
  'Clean components that are easy to extend',
];

export default function Home() {
  return (
    <div className="theme-home relative overflow-hidden">
      <div className="home-ambient pointer-events-none absolute inset-x-0 top-0 -z-10 h-[52rem]" />

      <div className="mx-auto max-w-7xl px-5 pb-20 sm:px-8 lg:px-10">
        <AnimatedSection id="top" className="grid min-h-[calc(100svh-5rem)] items-center gap-14 py-16 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16 lg:py-20">
          <div className="relative z-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-violet-300/20 bg-violet-200/[0.07] px-4 py-2 text-xs font-medium tracking-wide text-violet-100">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-300 opacity-50" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-violet-300" />
              </span>
              Open to learning and opportunities
            </span>

            <p className="mt-8 text-sm font-medium uppercase tracking-[0.3em] text-violet-200/75">Hello, I&apos;m</p>
          <h1 className="mt-3 max-w-3xl bg-gradient-to-b from-fuchsia-400 via-purple-500 to-orange-400 bg-clip-text text-5xl font-semibold leading-[1.05] tracking-[-0.055em] text-transparent sm:text-6xl lg:text-7xl">
              Razoan Kabir
              <span className="home-name-gradient mt-3 block bg-gradient-to-r from-violet-400 via-fuchsia-600 to-white bg-clip-text text-3xl font-medium tracking-[-0.04em] text-transparent sm:text-4xl lg:text-[2.7rem]">
                Mondol
              </span>
            </h1>

            <div className="mt-7 flex min-h-8 items-center gap-3 text-lg font-medium text-white/85 sm:text-xl">
              <span className="h-px w-8 bg-violet-300/70" />
              <RoleTypewriter />
            </div>

            <p className="mt-6 max-w-xl text-base leading-8 text-[#d3c5d8] sm:text-lg">
              I&apos;m a Diploma Engineering student and aspiring full-stack developer, creating thoughtful web experiences with React, Next.js, and TypeScript.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#projects"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#f2e9f5] px-6 py-3.5 text-sm font-semibold text-[#2b1234] shadow-[0_8px_30px_rgba(212,177,229,0.16)] transition hover:-translate-y-0.5 hover:bg-white"
              >
                View My Projects
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href="/Razoan_Kabir_Mondol_CV.pdf"
                download
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-white/90 backdrop-blur transition hover:border-violet-200/40 hover:bg-white/[0.08]"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            </div>

            <div className="mt-8 flex items-center gap-3">
              <span className="mr-1 text-xs font-medium uppercase tracking-[0.18em] text-white/45">Find me on</span>
              {socialLinks.slice(0, 2).map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.035] text-white/70 transition hover:border-violet-200/40 hover:bg-violet-200/10 hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
              <a
                href="mailto:rezwan9923@gmail.com"
                aria-label="Email Razoan"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.035] text-white/70 transition hover:border-violet-200/40 hover:bg-violet-200/10 hover:text-white"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>

            <a href="#about" className="mt-12 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-white/45 transition hover:text-violet-100">
              Scroll to explore
              <ArrowDown className="h-3.5 w-3.5" />
            </a>
          </div>

          <div className="relative mx-auto w-full max-w-[28rem] lg:ml-auto">
            <div className="absolute -inset-8 rounded-[3rem] bg-[radial-gradient(ellipse_at_center,rgba(170,115,192,0.2),transparent_68%)] blur-2xl" />
            <div className="absolute -right-5 top-16 h-28 w-28 rounded-full border border-violet-200/15 bg-violet-300/[0.05] blur-xl" />
            <div className="absolute -bottom-5 -left-7 h-32 w-32 rounded-full border border-fuchsia-200/10 bg-fuchsia-300/[0.06] blur-xl" />
            <div className="relative rounded-[2rem] bg-gradient-to-br from-violet-200/55 via-fuchsia-300/15 to-transparent p-px shadow-[0_28px_90px_rgba(10,3,16,0.45)]">
              <div className="home-portrait-mat rounded-[2rem] bg-[#2c1435] p-3 sm:p-4">
                <div className="relative overflow-hidden rounded-[1.45rem]">
                  <Image
                    src="/rezwanImage.jpg"
                    alt="Portrait of Razoan Kabir Mondol"
                    width={720}
                    height={900}
                    loading="eager"
                    sizes="(max-width: 1024px) 85vw, 40vw"
                    className="h-[25rem] w-full object-cover object-center sm:h-[34rem]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1c0b25]/85 via-transparent to-[#1c0b25]/10" />
                  <div className="home-portrait-caption absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 sm:p-8">
                    <div>
                      <p className="text-sm font-semibold text-white">Razoan Kabir Mondol</p>
                      <p className="mt-1 text-xs text-white/65">Aspiring Full-Stack Developer</p>
                    </div>
                    <span className="rounded-full border border-white/15 bg-black/20 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.17em] text-white/80 backdrop-blur">
                      Bangladesh
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-floating-badge absolute -left-5 top-12 hidden items-center gap-3 rounded-2xl border border-white/10 bg-[#31183b]/80 px-4 py-3 shadow-xl backdrop-blur-xl sm:flex">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-200/10 text-violet-100">
                <Code2 className="h-4 w-4" />
              </span>
              <span className="text-xs font-medium text-white/85">Building with purpose</span>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="border-y border-white/[0.08] py-5">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-xs font-medium uppercase tracking-[0.19em] text-white/45 sm:gap-x-12">
            {['React', 'Next.js', 'TypeScript', 'Node.js', 'MongoDB', 'Figma'].map((technology) => (
              <span key={technology} className="inline-flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-violet-200/70" />
                {technology}
              </span>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection id="about" className="scroll-mt-24 py-24 sm:py-28">
          <SectionHeading
            eyebrow="A little about me"
            title="Curious by nature. Thoughtful in how I build."
            description="I enjoy the space where design and engineering meet—turning ideas into web experiences that feel clear, useful, and considered."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-[1.12fr_0.88fr]">
            <div className="rounded-[1.75rem] border border-white/[0.09] bg-white/[0.035] p-7 backdrop-blur-sm sm:p-9">
              <p className="text-base leading-8 text-[#d3c5d8]">
                I&apos;m currently studying Diploma Engineering while building my skills as a web developer. My journey has grown through hands-on projects, self-directed learning, and a steady interest in how people use digital products.
              </p>
              <p className="mt-5 text-base leading-8 text-[#d3c5d8]">
                I&apos;m especially interested in modern frontend development, accessible design, and the foundations behind full-stack applications. My goal is to keep learning, contribute to meaningful work, and grow into a dependable developer.
              </p>
              <Link href="/about" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-violet-100 transition hover:text-white">
                More about my journey
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="home-tinted-panel rounded-[1.75rem] border border-violet-200/[0.12] bg-gradient-to-br from-[#4a2454]/45 to-[#2b1235]/60 p-7 sm:p-9">
              <h3 className="text-lg font-semibold text-white">What I care about</h3>
              <ul className="mt-6 space-y-4">
                {focusAreas.map((area) => (
                  <li key={area} className="flex items-start gap-3 text-sm leading-6 text-white/70">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-200" />
                    {area}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection id="projects" className="scroll-mt-24 py-24 sm:py-28">
          <SectionHeading
            eyebrow="Selected work"
            title="A few ideas brought to life."
            description="A selection of project concepts across education, creative workspaces, and helpful market information."
            align="center"
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          <div className="mt-9 text-center">
            <Link href="/projects" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white/80 transition hover:border-violet-200/40 hover:bg-white/[0.05] hover:text-white">
              Explore all projects
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </AnimatedSection>

        <AnimatedSection id="skills" className="scroll-mt-24 py-24 sm:py-28">
          <SectionHeading
            eyebrow="Tools of the trade"
            title="A growing toolkit for building on the web."
            description="Technologies and tools I work with as I continue learning and creating."
          />
          <div className="mt-11 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {skillCategories.map(({ title, items }, index) => {
              const Icon = skillIcons[index] ?? Code2;
              return (
                <article key={title} className="group rounded-[1.5rem] border border-white/[0.08] bg-white/[0.035] p-6 transition duration-300 hover:-translate-y-1 hover:border-violet-200/20 hover:bg-white/[0.055]">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-violet-200/10 bg-violet-200/[0.07] text-violet-100 transition group-hover:border-violet-200/20 group-hover:bg-violet-200/[0.12]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-base font-semibold text-white">{title}</h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {items.map((item) => (
                      <li key={item} className="rounded-full border border-white/[0.08] bg-black/10 px-2.5 py-1.5 text-xs text-white/65">
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </AnimatedSection>

        <AnimatedSection id="journey" className="scroll-mt-24 py-24 sm:py-28">
          <SectionHeading
            eyebrow="Experience & education"
            title="Learning through study, practice, and curiosity."
            description="A snapshot of my education and ongoing development, based on the milestones in my journey so far."
          />
          <div className="relative mt-11">
            <div className="absolute bottom-5 left-[0.6875rem] top-5 w-px bg-gradient-to-b from-violet-200/55 via-violet-200/15 to-transparent sm:left-[1.1875rem]" />
            <div className="space-y-5">
              {experienceTimeline.map((item) => (
                <article key={item.title} className="relative pl-9 sm:pl-12">
                  <span className="absolute left-0 top-6 flex h-6 w-6 items-center justify-center rounded-full border border-violet-200/30 bg-[#30163a] sm:left-2">
                    <span className="h-2 w-2 rounded-full bg-violet-200" />
                  </span>
                  <div className="rounded-[1.4rem] border border-white/[0.08] bg-white/[0.035] p-5 sm:p-6">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <h3 className="text-base font-semibold text-white">{item.title}</h3>
                      <span className="w-fit rounded-full border border-violet-200/10 bg-violet-200/[0.05] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-violet-100/75">
                        {item.period}
                      </span>
                    </div>
                    <p className="mt-3 text-sm leading-7 text-white/60">{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className="mt-7">
            <Link href="/experience" className="inline-flex items-center gap-2 text-sm font-semibold text-violet-100 transition hover:text-white">
              View full journey
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </AnimatedSection>

        <AnimatedSection id="services" className="scroll-mt-24 py-24 sm:py-28">
          <SectionHeading
            eyebrow="How I can help"
            title="Thoughtful work from interface to website."
            description="Areas I’m building experience in and excited to contribute to."
            align="center"
          />
          <div className="mt-11 grid gap-4 sm:grid-cols-2">
            {services.map(({ icon: Icon, title, description }) => (
              <article key={title} className="flex gap-4 rounded-[1.5rem] border border-white/[0.08] bg-white/[0.035] p-6 transition hover:border-violet-200/20 hover:bg-white/[0.055]">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-violet-200/[0.08] text-violet-100">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-semibold text-white">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/60">{description}</p>
                </div>
              </article>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection id="contact" className="scroll-mt-24 py-24 sm:py-28">
          <SectionHeading
            eyebrow="Get in touch"
            title="Have an idea or opportunity in mind?"
            description="I’d be glad to hear from you. Send a note and I’ll get back to you as soon as I can."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-[0.72fr_1.28fr]">
            <aside className="home-tinted-panel flex flex-col justify-between rounded-[1.75rem] border border-violet-200/[0.12] bg-gradient-to-br from-[#492452]/55 to-[#2b1235]/65 p-7 sm:p-8">
              <div>
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] text-violet-100">
                  <Mail className="h-5 w-5" />
                </span>
                <h3 className="mt-6 text-xl font-semibold text-white">Let&apos;s start a conversation</h3>
                <p className="mt-3 text-sm leading-7 text-white/65">
                  For project discussions, collaboration, or learning opportunities, email is the best way to reach me.
                </p>
              </div>
              <div className="mt-8 space-y-4">
                <a href="mailto:rezwan9923@gmail.com" className="flex items-center gap-3 text-sm text-white/80 transition hover:text-white">
                  <Mail className="h-4 w-4 text-violet-200" />
                  rezwan9923@gmail.com
                </a>
                <p className="flex items-center gap-3 text-sm text-white/65">
                  <MapPin className="h-4 w-4 text-violet-200" />
                  Bangladesh
                </p>
              </div>
            </aside>
            <ContactForm />
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
