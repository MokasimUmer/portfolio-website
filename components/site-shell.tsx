import { Navigation } from '@/components/navigation';

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="md:grid md:grid-cols-[minmax(15.5rem,18rem)_minmax(0,1fr)] min-h-dvh">
      <Navigation />
      <div className="min-w-0">{children}</div>
    </div>
  );
}
