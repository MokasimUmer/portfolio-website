import { education, experiences } from '@/lib/site-data';
import { SectionLabel } from '@/components/section-label';

export function ExperienceSection() {
  return (
    <section id="record" className="px-6 md:px-14 lg:px-20 py-20 md:py-24 border-t border-border">
      <SectionLabel index="04 — Record">A short log</SectionLabel>

      <RecordGroup heading="Jobs" entries={experiences} />
      <RecordGroup heading="School" entries={education} />
    </section>
  );
}

function RecordGroup({
  heading,
  entries,
}: {
  heading: string;
  entries: readonly {
    title: string;
    company: string;
    period: string;
    place: string;
    description: string;
  }[];
}) {
  return (
    <div className="max-w-3xl mb-14 last:mb-0">
      <h3 className="font-mono text-[11px] tracking-[0.18em] uppercase text-muted-foreground mb-4">
        {heading}
      </h3>
      <ol className="divide-y divide-border border-y border-border">
        {entries.map((entry) => (
          <li
            key={`${entry.title}-${entry.period}`}
            className="py-8 grid sm:grid-cols-[9.5rem_1fr] gap-2 sm:gap-10"
          >
            <p className="font-mono text-[11px] tracking-wide text-muted-foreground pt-1">
              {entry.period}
            </p>
            <div>
              <h4 className="display text-xl md:text-2xl font-medium tracking-tight">
                {entry.title}
              </h4>
              <p className="mt-1 text-sm text-foreground/70">
                {entry.company}
                <span className="text-muted-foreground"> · {entry.place}</span>
              </p>
              <p className="mt-3 leading-relaxed text-foreground/80">{entry.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
