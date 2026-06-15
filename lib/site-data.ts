export const siteConfig = {
  name: 'Mohammed Kasim',
  shortName: 'Mokasim',
  title: 'Full-Stack Developer & AI Automation Expert',
  description:
    'Full-stack developer specializing in AI automation, intelligent web applications, and scalable systems. Building real-world products from health tech to course management platforms.',
  url: 'https://portfolio-website-o9s5.vercel.app',
  github: 'https://github.com/MokasimUmer',
  githubUsername: 'MokasimUmer',
  avatar: 'https://avatars.githubusercontent.com/u/117762751?v=4',
  email: 'mohammedkasim81112@gmail.com',
  location: 'Available Worldwide · Remote',
  bio: 'Programming enthusiast and Linux advocate building intelligent systems that solve real problems — from health kiosks to AI-powered education platforms.',
  tagline:
    'I build intelligent automation systems and scalable web applications, turning complex challenges into elegant, production-ready solutions.',
  stats: {
    projects: '13+',
    experience: '4+',
    repos: '13',
  },
} as const;

export const socialLinks = [
  {
    label: 'GitHub',
    href: siteConfig.github,
    username: siteConfig.githubUsername,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/mokasimumer',
    username: 'mokasimumer',
  },
  {
    label: 'Email',
    href: `mailto:${siteConfig.email}`,
    username: siteConfig.email,
  },
] as const;

export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'automation', label: 'AI' },
  { id: 'contact', label: 'Contact' },
] as const;

export const projects = [
  {
    title: 'Smart Health Kiosk',
    description:
      'Interactive health kiosk platform with patient-facing workflows, vitals tracking, and a modern JavaScript frontend for clinical environments.',
    tags: ['JavaScript', 'Health Tech', 'Full-Stack', 'UI/UX'],
    link: 'https://github.com/MokasimUmer/Smart_Health_Kiosk',
    github: 'https://github.com/MokasimUmer/Smart_Health_Kiosk',
    featured: true,
  },
  {
    title: 'FTMS',
    description:
      'Full-stack task and fleet management system with real-time dashboards, deployed and production-ready on Vercel.',
    tags: ['TypeScript', 'Next.js', 'Vercel', 'Dashboard'],
    link: 'https://ftms-two.vercel.app',
    github: 'https://github.com/MokasimUmer/FTMS',
    featured: true,
  },
  {
    title: 'ASTU Course Management',
    description:
      'AI-based course management system that predicts optimized, personalized learning paths to handle add/drop complications.',
    tags: ['Python', 'AI/ML', 'Education', 'Optimization'],
    link: 'https://github.com/MokasimUmer/Astu_Course_Managment',
    github: 'https://github.com/MokasimUmer/Astu_Course_Managment',
    featured: true,
  },
  {
    title: 'CBSD Project',
    description:
      'TypeScript-based project exploring structured software design patterns with a focus on maintainable, type-safe architecture.',
    tags: ['TypeScript', 'Architecture', 'Full-Stack'],
    link: 'https://github.com/MokasimUmer/CBSD_PROJECT',
    github: 'https://github.com/MokasimUmer/CBSD_PROJECT',
  },
  {
    title: 'Dev Dating App',
    description:
      'Cross-platform mobile application built with Flutter/Dart, connecting developers through shared interests and project collaboration.',
    tags: ['Flutter', 'Dart', 'Mobile', 'Cross-Platform'],
    link: 'https://github.com/MokasimUmer/dev-dating-app',
    github: 'https://github.com/MokasimUmer/dev-dating-app',
  },
  {
    title: 'HalalConnect',
    description:
      'Community platform concept connecting users with halal services, businesses, and resources in a unified digital experience.',
    tags: ['Community', 'Web App', 'Full-Stack'],
    link: 'https://github.com/MokasimUmer/HalalConnect',
    github: 'https://github.com/MokasimUmer/HalalConnect',
  },
] as const;

export const experiences = [
  {
    title: 'Independent Full-Stack Developer',
    company: 'Freelance & Open Source',
    period: '2022 – Present',
    description:
      'Building and shipping full-stack applications, health tech solutions, and AI-powered education tools. Maintaining 13+ public repositories and deploying production apps on Vercel.',
    highlights: ['Full-Stack Development', 'AI Integration', 'Open Source', 'Vercel Deployment'],
  },
  {
    title: 'Health Tech Developer',
    company: 'Smart Health Kiosk',
    period: '2025 – Present',
    description:
      'Leading development of an interactive health kiosk platform with patient workflows, vitals integration, and a polished clinical UI.',
    highlights: ['Health Tech', 'JavaScript', 'UX Design', 'Production Systems'],
  },
  {
    title: 'AI & Education Systems',
    company: 'ASTU Course Management',
    period: '2025 – 2026',
    description:
      'Designed an AI-driven course management system that generates personalized learning paths and handles complex enrollment scenarios.',
    highlights: ['Python', 'Machine Learning', 'Education Tech', 'Data Modeling'],
  },
] as const;

export const skillGroups = [
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Flutter'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Python', 'FastAPI', 'PostgreSQL', 'MongoDB', 'REST APIs'],
  },
  {
    category: 'AI & Automation',
    items: ['OpenAI API', 'LangChain', 'Prompt Engineering', 'ML Pipelines', 'Automation Scripts'],
  },
  {
    category: 'Tools & Platforms',
    items: ['Docker', 'Linux', 'Git', 'Vercel', 'Netlify', 'VS Code'],
  },
] as const;
