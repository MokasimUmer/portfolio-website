export function SectionLabel({
  index,
  children,
}: {
  index: string;
  children: React.ReactNode;
}) {
  return (
    <header className="mb-10 md:mb-14">
      <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-muted-foreground mb-3">
        {index}
      </p>
      <h2 className="display text-3xl md:text-4xl font-medium tracking-tight">{children}</h2>
    </header>
  );
}
