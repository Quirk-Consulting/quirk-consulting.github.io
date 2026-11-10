type Stat = { value: string; label: string };

type Props = {
  eyebrow: string;
  title: string;
  intro: string;
  stats: Stat[];
};

/** Dark, dotted header band that mirrors the hero style on quirk.com.au. */
export function LibraryHero({ eyebrow, title, intro, stats }: Props) {
  return (
    <header className="px-5 py-8 mb-6 overflow-hidden shrink-0 text-white quirk-dots rounded-2xl dark:ring-1 dark:ring-white/10 md:px-10 md:py-12">
      <p className="mb-3 text-green-500 quirk-eyebrow">{eyebrow}</p>
      <h1 className="max-w-3xl text-3xl font-semibold leading-tight md:text-5xl text-neutral-100">
        {title}
      </h1>
      <p className="max-w-2xl mt-4 text-base font-light leading-relaxed md:text-lg text-neutral-300">
        {intro}
      </p>
      <dl className="flex flex-wrap gap-2 mt-6">
        {stats.map((s) => (
          <div
            key={s.label}
            className="flex items-baseline gap-1.5 px-3 py-1.5 text-sm border rounded-full border-white/15 bg-white/5"
          >
            <dt className="sr-only">{s.label}</dt>
            <dd className="font-semibold text-neutral-100">{s.value}</dd>
            <span className="text-neutral-400">{s.label}</span>
          </div>
        ))}
      </dl>
    </header>
  );
}

export default LibraryHero;
