import { SiteShell } from '@/components/site-shell';
import { HeroSection } from '@/components/hero-section';
import { SkillsSection } from '@/components/skills-section';
import { ProjectsSection } from '@/components/projects-section';
import { ExperienceSection } from '@/components/experience-section';
import { ContactFooter } from '@/components/contact-footer';

export default function Home() {
  return (
    <SiteShell>
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <ExperienceSection />
      <ContactFooter />
    </SiteShell>
  );
}
