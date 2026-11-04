'use client';

export default function Error({ reset }: { reset: () => void }) {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center px-4 text-center">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">Something went wrong</p>
      <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100">This page could not load.</h1>
      <button
        type="button"
        onClick={() => reset()}
        className="mt-6 rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
      >
        Try again
      </button>
    </div>
  );
}
