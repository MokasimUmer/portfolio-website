import { projects, siteConfig } from '@/lib/site-data';
import { SectionLabel } from '@/components/section-label';

export function ProjectsSection() {
  return (
    <section id="work" className="px-6 md:px-14 lg:px-20 py-20 md:py-24 border-t border-border">
      <SectionLabel index="02 — Work">Selected work</SectionLabel>

      <p className="max-w-xl text-foreground/75 leading-relaxed mb-12 md:mb-16">
        Paid posts first, then the public repos. Not a deck.
      </p>

      <ol className="divide-y divide-border border-y border-border">
        {projects.map((project, index) => {
          const hasLive = 'live' in project && project.live && project.link;
          const hasSource = Boolean(project.github);

          return (
            <li key={project.title} className="py-8 md:py-10">
              <div className="grid md:grid-cols-[3.5rem_1fr_auto] gap-3 md:gap-8 items-baseline">
                <span className="font-mono text-[11px] tabular-nums text-muted-foreground">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <div className="min-w-0">
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                    <h3 className="display text-2xl md:text-3xl font-medium tracking-tight">
                      {project.title}
                    </h3>
                    <span className="font-mono text-[11px] text-muted-foreground">
                      {project.year}
                    </span>
                  </div>
                  <p className="mt-3 max-w-xl text-foreground/75 leading-relaxed">
                    {project.description}
                  </p>
                  <p className="mt-3 font-mono text-[11px] tracking-wide text-muted-foreground">
                    {project.tags.join(' · ')}
                  </p>
                </div>

                {(hasLive || hasSource) && (
                  <div className="flex gap-5 font-mono text-[11px] tracking-[0.14em] uppercase md:pt-2">
                    {hasLive && project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ink-link underline"
                      >
                        Live
                      </a>
                    )}
                    {hasSource && project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ink-link underline"
                      >
                        Source
                      </a>
                    )}
                  </div>
                )}
              </div>
            </li>
          );
        })}
      </ol>

      <p className="mt-10 font-mono text-[11px] text-muted-foreground">
        Public code on{' '}
        <a
          href={siteConfig.github}
          target="_blank"
          rel="noopener noreferrer"
          className="ink-link underline text-foreground"
        >
          github.com/{siteConfig.githubUsername}
        </a>
      </p>
    </section>
  );
}
