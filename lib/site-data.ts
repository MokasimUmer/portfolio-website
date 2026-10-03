export const siteConfig = {
  name: 'Mohammed Kasim',
  shortName: 'MK',
  title: 'Software developer. Trains frontier models.',
  description:
    'Mohammed Kasim is a full-stack developer in Addis Ababa who trains frontier AI models. SDN tools at INSA, hospital backends at Kegeberew, Software Engineering at ASTU.',
  url: 'https://portfolio-website-o9s5.vercel.app',
  github: 'https://github.com/MoKasimUmer',
  githubUsername: 'MoKasimUmer',
  avatar: '/mohammed-kasim.png',
  email: 'mohammedkasim81112@gmail.com',
  phone: '+251927937230',
  phoneDisplay: '+251 92 793 7230',
  location: 'Addis Ababa, Ethiopia',
  tagline: 'Full-stack developer in Addis Ababa. I train frontier AI models.',
  now: 'Software Engineering at ASTU, through July 2026.',
  since: '2022',
  resume: '/mohammed-kasim-resume.pdf',
} as const;

export const socialLinks = [
  {
    label: 'GitHub',
    href: siteConfig.github,
    username: `@${siteConfig.githubUsername}`,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/mohammed-kasim-88a85a2b3',
    username: 'mohammed-kasim-88a85a2b3',
  },
  {
    label: 'Email',
    href: `mailto:${siteConfig.email}`,
    username: siteConfig.email,
  },
  {
    label: 'Phone',
    href: `tel:${siteConfig.phone}`,
    username: siteConfig.phoneDisplay,
  },
] as const;

export const navItems = [
  { id: 'opening', label: 'Opening' },
  { id: 'work', label: 'Work' },
  { id: 'practice', label: 'Practice' },
  { id: 'record', label: 'Record' },
  { id: 'contact', label: 'Write' },
] as const;

export const projects = [
  {
    title: 'Insa-dlux',
    year: '2025',
    description:
      'A customized SDN console on OpenDaylight for INSA. Restored L2-switch after dead dependencies, visualized the topology, and updated YANG models so the controller stayed compatible.',
    tags: ['OpenDaylight', 'JavaScript', 'YANG'],
    link: 'https://github.com/MokasimUmer/Insa-dlux',
    github: 'https://github.com/MokasimUmer/Insa-dlux',
  },
  {
    title: 'medicalKTS',
    year: '2024—25',
    description:
      'Spring Boot and MySQL backend for a hospital system at Kegeberew — APIs and database work that has to stay fast when the ward is busy.',
    tags: ['Spring Boot', 'MySQL'],
    link: 'https://github.com/redu95/medicalKTS',
    github: 'https://github.com/redu95/medicalKTS',
  },
  {
    title: 'AmuQ',
    year: '2026',
    description:
      'Event board for nights that sell out. Billboard, search, host, book — find what’s on and charge the night.',
    tags: ['Next.js', 'Events'],
    link: 'https://amuq-chi.vercel.app/',
    github: undefined,
    live: true,
  },
  {
    title: 'LD Bootcamp',
    year: '2026',
    description:
      'Africa Free Routing Lightning developer bootcamp. Next.js and NestJS: curriculum, live quizzes, attendance, and satoshi payouts over LND.',
    tags: ['Next.js', 'NestJS', 'Lightning'],
    link: 'https://ld-bootcamp-web.vercel.app/',
    github: 'https://github.com/MokasimUmer/LD_Bootcamp',
    live: true,
  },
  {
    title: 'Smart Health Kiosk',
    year: '2025',
    description:
      'A kiosk patients walk up to. Check-in, vitals, and a screen that has to survive glare, gloves, and a standing distance.',
    tags: ['Python', 'Health'],
    link: 'https://github.com/MokasimUmer/Smart-Health-Kiosk',
    github: 'https://github.com/MokasimUmer/Smart-Health-Kiosk',
  },
  {
    title: 'FTMS',
    year: '2025',
    description:
      'Task and fleet ops in one dashboard. The unglamorous kind of app that has to stay up and stay obvious.',
    tags: ['TypeScript', 'Next.js'],
    link: 'https://ftms-two.vercel.app',
    github: 'https://github.com/MokasimUmer/FTMS',
    live: true,
  },
] as const;

export const experiences = [
  {
    title: 'SDN developer',
    company: 'Information Network Security Agency (INSA)',
    period: 'Jun 2025 — Sep 2025',
    place: 'Addis Ababa',
    description:
      'Built Insa-dlux on OpenDaylight: rewrote worn-out dependencies so L2-switch worked again, customized the JavaScript front end to visualize topology, and updated YANG models.',
  },
  {
    title: 'Back-end developer',
    company: 'Kegeberew Technology Solutions (KTS)',
    period: 'Jun 2024 — Oct 2025',
    place: 'Addis Ababa',
    description:
      'Spring Boot and MySQL APIs, including the back end of a hospital management system. Database work, not slides.',
  },
] as const;

export const education = [
  {
    title: 'Software Engineering',
    company: 'Adama Science and Technology University',
    period: 'May 2022 — Jul 2026',
    place: 'Adama, Ethiopia',
    description:
      'Coursework in full-stack web development, algorithms, data structures, object-oriented programming, and Java.',
  },
] as const;

export const skillGroups = [
  {
    category: 'Languages',
    items: ['JavaScript', 'Python', 'Java'],
  },
  {
    category: 'Web & APIs',
    items: ['Next.js', 'Node.js', 'Express.js', 'Spring Boot'],
  },
  {
    category: 'Data & ops',
    items: ['MySQL', 'MongoDB', 'Docker', 'SDLC'],
  },
] as const;
