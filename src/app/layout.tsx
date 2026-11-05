import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';

import { Footer } from '@/components/layout/Footer';
import { Navbar } from '@/components/layout/Navbar';
import { ThemeProvider } from '@/components/providers/ThemeProvider';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: {
    default: 'Razoan Kabir Mondol | Aspiring Full-Stack Developer',
    template: '%s | Razoan Kabir',
  },
  description: 'Portfolio of Razoan Kabir Mondol, an aspiring full-stack developer in Bangladesh building thoughtful web experiences with React, Next.js, and TypeScript.',
  keywords: ['Razoan Kabir Mondol', 'Full-Stack Developer', 'Frontend Developer', 'Next.js Portfolio', 'Bangladesh'],
  openGraph: {
    title: 'Razoan Kabir Mondol | Aspiring Full-Stack Developer',
    description: 'Thoughtful web experiences built with React, Next.js, and TypeScript.',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    siteName: 'Razoan Kabir Portfolio',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/rezwanImage.jpg', alt: 'Portrait of Razoan Kabir Mondol' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Razoan Kabir Mondol | Aspiring Full-Stack Developer',
    description: 'Thoughtful web experiences built with React, Next.js, and TypeScript.',
    images: ['/rezwanImage.jpg'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} min-h-screen bg-[var(--background)] text-[var(--foreground)] antialiased`}>
        <ThemeProvider>
          <div className="min-h-screen bg-[var(--site-background)] bg-fixed text-slate-900 dark:text-slate-100">
            <Navbar authEnabled={Boolean(process.env.BETTER_AUTH_SECRET && process.env.BETTER_AUTH_SECRET.length >= 32)} />
            <main>{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
