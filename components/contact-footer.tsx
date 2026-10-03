'use client';

import { useState } from 'react';
import { siteConfig, socialLinks } from '@/lib/site-data';
import { SectionLabel } from '@/components/section-label';

export function ContactFooter() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Note from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    );
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    window.setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <>
      <section id="contact" className="px-6 md:px-14 lg:px-20 py-20 md:py-24 border-t border-border">
        <SectionLabel index="05 — Write">A short note is enough</SectionLabel>

        <div className="grid lg:grid-cols-[minmax(0,22rem)_1fr] gap-12 lg:gap-20 items-start">
          <div className="space-y-6">
            <p className="text-[1.05rem] leading-relaxed text-foreground/80">
              Email or a call. I am in Addis Ababa and open for work. If it is a real problem, I
              will write back.
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="display text-xl md:text-2xl ink-link underline break-all"
            >
              {siteConfig.email}
            </a>
            <ul className="space-y-2 pt-2">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="font-mono text-[12px] text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label} — {link.username}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={siteConfig.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[12px] text-muted-foreground hover:text-primary transition-colors"
                >
                  Resume — PDF
                </a>
              </li>
            </ul>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8 max-w-xl">
            <Field
              id="name"
              label="Name"
              value={formData.name}
              onChange={(value) => setFormData({ ...formData, name: value })}
              autoComplete="name"
            />
            <Field
              id="email"
              label="Email"
              type="email"
              value={formData.email}
              onChange={(value) => setFormData({ ...formData, email: value })}
              autoComplete="email"
            />
            <label className="block">
              <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-muted-foreground">
                Note
              </span>
              <textarea
                id="message"
                required
                rows={5}
                value={formData.message}
                onChange={(event) => setFormData({ ...formData, message: event.target.value })}
                className="mt-2 w-full bg-transparent border-0 border-b border-border px-0 py-2 resize-none focus:outline-none focus:border-primary placeholder:text-muted-foreground/70"
                placeholder="What are you trying to build?"
              />
            </label>
            <button
              type="submit"
              className="font-mono text-[11px] tracking-[0.18em] uppercase text-primary border-b border-primary pb-0.5 hover:opacity-70 transition-opacity"
            >
              {submitted ? 'Opening your mail app' : 'Send via email'}
            </button>
          </form>
        </div>
      </section>

      <footer className="px-6 md:px-14 lg:px-20 py-8 border-t border-border">
        <p className="font-mono text-[11px] leading-relaxed text-muted-foreground">
          © {new Date().getFullYear()} {siteConfig.name}. Set in Fraunces and IBM Plex Mono.
        </p>
      </footer>
    </>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  type = 'text',
  autoComplete,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  autoComplete?: string;
}) {
  return (
    <label className="block">
      <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-muted-foreground">
        {label}
      </span>
      <input
        id={id}
        type={type}
        required
        autoComplete={autoComplete}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="mt-2 w-full bg-transparent border-0 border-b border-border px-0 py-2 focus:outline-none focus:border-primary"
      />
    </label>
  );
}
