import Image from 'next/image';
import { siteConfig } from '@/lib/site-data';

export function HeroSection() {
  return (
    <section id="opening" className="px-6 md:px-14 lg:px-20 pt-16 md:pt-24 pb-20 md:pb-28">
      <div className="mb-8 flex items-baseline justify-between gap-6">
        <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-muted-foreground">
          01 — Opening
        </p>
        <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-muted-foreground">
          Index · {new Date().getFullYear()}
        </p>
      </div>

      <div className="flex flex-wrap items-end gap-x-8 gap-y-4">
        <h1 className="display text-[clamp(2.6rem,8vw,6.4rem)] leading-[0.92] font-medium tracking-tight max-w-5xl">
          {siteConfig.name}
        </h1>
        <a
          href={siteConfig.resume}
          download="Mohammed_Kasim_Resume.pdf"
          className="mb-1 font-bold text-lg md:text-xl text-primary underline underline-offset-4 decoration-2"
        >
          Resume
        </a>
      </div>
      <span className="mt-8 block h-[3px] w-14 bg-primary" aria-hidden />

      <p className="mt-8 md:mt-10 display text-2xl md:text-4xl leading-snug max-w-2xl text-foreground/90">
        {siteConfig.tagline}
      </p>

      <div className="mt-12 md:mt-16 grid md:grid-cols-[auto_1fr] gap-8 md:gap-14 items-start max-w-3xl">
        <Image
          src={siteConfig.avatar}
          alt={siteConfig.name}
          width={200}
          height={200}
          className="w-[140px] md:w-[200px] aspect-square object-cover object-top"
          priority
        />

        <div className="space-y-5 text-[1.05rem] md:text-lg leading-relaxed text-foreground/80">
          <p>
            Four years in software — data structures, algorithms, data science, and the backends
            that have to stay up. I train frontier AI models — not people.
          </p>
          <p>
            At INSA I turned OpenDaylight into Insa-dlux so operators could see the network again.
            At Kegeberew I wrote the Spring Boot and MySQL side of a hospital system. I study
            Software Engineering at ASTU.
          </p>
        </div>
      </div>

      <dl className="mt-14 md:mt-16 grid sm:grid-cols-3 gap-8 max-w-3xl border-t border-border pt-8">
        <div>
          <dt className="font-mono text-[11px] tracking-[0.18em] uppercase text-muted-foreground">
            Now
          </dt>
          <dd className="mt-2 leading-relaxed">{siteConfig.now}</dd>
        </div>
        <div>
          <dt className="font-mono text-[11px] tracking-[0.18em] uppercase text-muted-foreground">
            Based
          </dt>
          <dd className="mt-2">{siteConfig.location}</dd>
        </div>
        <div>
          <dt className="font-mono text-[11px] tracking-[0.18em] uppercase text-muted-foreground">
            Phone
          </dt>
          <dd className="mt-2">
            <a href={`tel:${siteConfig.phone}`} className="ink-link underline">
              {siteConfig.phoneDisplay}
            </a>
          </dd>
        </div>
      </dl>
    </section>
  );
}
