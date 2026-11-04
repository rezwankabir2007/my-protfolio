import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-xl flex-col items-center justify-center px-4 text-center">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">404</p>
      <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100">Page not found.</h1>
      <p className="mt-4 text-base text-slate-600 dark:text-slate-300">
        The page you’re looking for doesn’t exist or may have moved.
      </p>
      <Link href="/" className="mt-6 rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-500">
        Back to home
      </Link>
    </div>
  );
}
