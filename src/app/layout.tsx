import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

import { Footer } from '@/components/layout/Footer';
import { Navbar } from '@/components/layout/Navbar';
import { ThemeProvider } from '@/components/providers/ThemeProvider';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: {
    default: 'RAZOAN | Web Developer | Frontend Developer',
    template: '%s | RAZOAN',
  },
  description: 'Professional portfolio for RAZOAN, a web developer based in Bangladesh focused on modern frontend experiences.',
  keywords: ['RAZOAN', 'Web Developer', 'Frontend Developer', 'Next.js Portfolio', 'Bangladesh'],
  openGraph: {
    title: 'RAZOAN | Web Developer | Frontend Developer',
    description: 'Building digital experiences that matter.',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    siteName: 'RAZOAN Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RAZOAN | Web Developer',
    description: 'Building digital experiences that matter.',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-[var(--background)] text-[var(--foreground)] antialiased`}>
        <ThemeProvider>
          <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.10),transparent_30%),linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] text-slate-900 dark:bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.16),transparent_28%),linear-gradient(180deg,#020817_0%,#0f172a_100%)] dark:text-slate-100">
            <Navbar />
            <main>{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
