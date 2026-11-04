type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
};

export function SectionHeading({ eyebrow, title, description, align = 'left' }: SectionHeadingProps) {
  const alignment = align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl';

  return (
    <div className={alignment}>
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-blue-600 dark:text-blue-400">{eyebrow}</p>
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">{description}</p> : null}
    </div>
  );
}
