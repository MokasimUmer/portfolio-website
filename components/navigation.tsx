'use client';

import { useState } from 'react';
import { navItems, siteConfig, socialLinks } from '@/lib/site-data';
import { scrollToSection } from '@/lib/scroll';
import { ThemeToggle } from '@/components/theme-toggle';
import { useScrollSpy } from '@/hooks/use-scroll-spy';

export function Navigation() {
  const [open, setOpen] = useState(false);
  const sectionIds = navItems.map((item) => item.id);
  const activeSection = useScrollSpy(sectionIds, 140);

  const handleNavClick = (id: string) => {
    scrollToSection(id);
    setOpen(false);
  };

  return (
    <header className="md:sticky md:top-0 md:h-dvh md:border-r border-border bg-background z-50">
      <div className="flex items-center justify-between px-5 h-14 border-b border-border md:hidden sticky top-0 bg-background">
        <button
          onClick={() => handleNavClick('opening')}
          className="font-mono text-sm tracking-wide"
          aria-label="Go to opening"
        >
          {siteConfig.shortName}
        </button>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <button
            onClick={() => setOpen((value) => !value)}
            className="font-mono text-[11px] tracking-[0.18em] uppercase text-muted-foreground"
            aria-label={open ? 'Close index' : 'Open index'}
            aria-expanded={open}
          >
            {open ? 'Close' : 'Index'}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-b border-border px-5 py-6 bg-background">
          <IndexList activeSection={activeSection} onSelect={handleNavClick} />
        </div>
      )}

      <div className="hidden md:flex h-full flex-col justify-between px-7 py-8 pb-20">
        <div>
          <div className="flex items-start justify-between gap-4">
            <button
              onClick={() => handleNavClick('opening')}
              className="text-left"
              aria-label="Go to opening"
            >
              <span className="font-mono text-[11px] tracking-[0.22em] uppercase text-muted-foreground">
                {siteConfig.shortName}
              </span>
              <span className="mt-3 block display text-[1.65rem] leading-[1.05] font-medium">
                Mohammed
                <br />
                Kasim
              </span>
            </button>
            <ThemeToggle />
          </div>
          <p className="mt-5 font-mono text-[11px] leading-relaxed text-muted-foreground">
            {siteConfig.location}
          </p>
          <nav className="mt-14" aria-label="Sections">
            <IndexList activeSection={activeSection} onSelect={handleNavClick} />
          </nav>
        </div>

        <div className="flex flex-col gap-1.5">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="font-mono text-[11px] text-muted-foreground hover:text-primary transition-colors w-fit"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}

function IndexList({
  activeSection,
  onSelect,
}: {
  activeSection: string;
  onSelect: (id: string) => void;
}) {
  return (
    <ul className="flex flex-col gap-2.5">
      {navItems.map((item, index) => {
        const active = activeSection === item.id;
        return (
          <li key={item.id}>
            <button
              onClick={() => onSelect(item.id)}
              className="flex items-baseline gap-3 text-left w-full"
            >
              <span className="font-mono text-[11px] tabular-nums text-muted-foreground w-5">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span
                className={`text-[15px] transition-colors ${
                  active ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {item.label}
              </span>
              {active && (
                <span className="ml-auto h-px w-6 bg-primary self-center" aria-hidden />
              )}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
