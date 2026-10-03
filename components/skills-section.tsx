import { skillGroups } from '@/lib/site-data';
import { SectionLabel } from '@/components/section-label';

export function SkillsSection() {
  return (
    <section id="practice" className="px-6 md:px-14 lg:px-20 py-20 md:py-24 border-t border-border">
      <SectionLabel index="03 — Practice">How I work</SectionLabel>

      <div className="grid lg:grid-cols-[minmax(0,28rem)_1fr] gap-12 lg:gap-20">
        <div className="space-y-5 text-[1.05rem] leading-relaxed text-foreground/80">
          <p>
            JavaScript and Python on the web. Spring Boot when the API is the job. Docker when it
            has to ship. I do not skip the boring SDLC steps.
          </p>
          <p>I train frontier AI models.</p>
        </div>

        <div className="grid gap-8 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.category}>
              <h3 className="font-mono text-[11px] tracking-[0.18em] uppercase text-muted-foreground mb-3">
                {group.category}
              </h3>
              <ul className="space-y-1.5">
                {group.items.map((item) => (
                  <li key={item} className="text-[15px]">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
