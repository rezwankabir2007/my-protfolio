
"use client";

import Link from "next/link";
import { ArrowLeft, Home, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative flex min-h-[85vh] items-center justify-center overflow-hidden px-5 py-16">

      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[120px]" />
        <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-indigo-500/10 blur-[100px]" />
        <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-blue-400/10 blur-[100px]" />
      </div>

      <div className="relative mx-auto w-full max-w-2xl text-center">

        {/* 404 Illustration */}
        <div className="relative mx-auto mb-10 flex h-56 w-full max-w-md items-center justify-center sm:h-64">

          <div className="absolute h-48 w-48 rounded-full border border-dashed border-blue-500/30 sm:h-56 sm:w-56" />

          <div className="absolute h-36 w-36 rounded-full border border-blue-500/20 sm:h-44 sm:w-44" />

          <div className="relative flex items-center justify-center">
            <span className="text-[110px] font-black leading-none tracking-tighter text-slate-200 dark:text-slate-800 sm:text-[150px]">
              4
            </span>

            <div className="relative z-10 -mx-2 flex h-24 w-24 items-center justify-center rounded-full border-8 border-white bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-2xl shadow-blue-500/30 dark:border-slate-950 sm:h-28 sm:w-28">
              <Compass className="h-12 w-12 animate-[spin_15s_linear_infinite] sm:h-14 sm:w-14" />
            </div>

            <span className="text-[110px] font-black leading-none tracking-tighter text-slate-200 dark:text-slate-800 sm:text-[150px]">
              4
            </span>
          </div>

          <div className="absolute right-[18%] top-8 h-3 w-3 rounded-full bg-blue-500 shadow-lg shadow-blue-500/50" />
          <div className="absolute bottom-8 left-[18%] h-2 w-2 rounded-full bg-indigo-500" />
          <div className="absolute right-[22%] bottom-12 h-4 w-4 rounded-full border-2 border-blue-400" />
        </div>

        {/* Content */}
        <div className="space-y-5">

          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/5 px-4 py-2 text-xs font-bold tracking-[0.2em] text-blue-600 dark:text-blue-400">
            <span className="h-2 w-2 animate-pulse rounded-full bg-blue-500" />
            ERROR 404
          </div>

          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
            Lost in{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-violet-500 bg-clip-text text-transparent">
              Space?
            </span>
          </h1>

          <p className="mx-auto max-w-md text-sm leading-7 text-slate-500 dark:text-slate-400 sm:text-base">
            The page you&apos;re looking for seems to have disappeared.
            It might have been moved, deleted, or never existed.
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">

          <Link
            href="/"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/30 sm:w-auto"
          >
            <Home className="h-4 w-4" />
            Back to Home
            <ArrowLeft className="h-4 w-4 rotate-180 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          <button
            type="button"
            onClick={() => window.history.back()}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-7 py-3.5 text-sm font-semibold text-slate-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-blue-500 dark:hover:text-blue-400 sm:w-auto"
          >
            <ArrowLeft className="h-4 w-4" />
            Go Back
          </button>

        </div>

        {/* Bottom Text */}
        <div className="mt-16">
          <div className="mx-auto mb-5 h-px w-20 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
          <p className="text-xs font-medium tracking-wide text-slate-400 dark:text-slate-500">
            Lost your way? Let&apos;s find your way home.
          </p>
        </div>

      </div>
    </main>
  );
}
