import type { LucideIcon } from 'lucide-react';
import { GitBranch, Globe, Mail, MessageCircle } from 'lucide-react';

export type SocialLink = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export const socialLinks: SocialLink[] = [
  {
    label: 'GitHub',
    href: 'https://github.com/rezwankabir2007',
    icon: GitBranch,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/md-razoan-kabir2007/',
    icon: Globe,
  },
  {
    label: 'Email',
    href: 'mailto:rezwan9923@gmail.com',
    icon: Mail,
  },
  {
    label: 'WhatsApp',
    href: "https://wa.me/8801788996192",
    icon: MessageCircle,
  },
];
