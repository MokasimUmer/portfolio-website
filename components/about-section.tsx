'use client';

import { motion } from 'framer-motion';
import { siteConfig } from '@/lib/site-data';

export function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="about" className="py-20 px-6 bg-card/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-12 text-center"
          >
            About Me
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-lg text-foreground/80 leading-relaxed">
                I&apos;m {siteConfig.name} — a passionate developer with a deep focus on AI automation,
                health technology, and intelligent systems. Since 2022, I&apos;ve been building
                production applications and contributing to open source.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                My journey started with a fascination for Linux and problem-solving, and has evolved
                into shipping real products — from smart health kiosks to AI-powered course management
                platforms deployed on Vercel.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                I believe in continuous learning and staying at the forefront of technology, whether
                it&apos;s the latest AI models, modern web frameworks, or automation techniques.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <div className="bg-background/50 border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-accent">Specializations</h3>
                <ul className="space-y-3 text-foreground/80">
                  {[
                    'AI/ML Integration & Automation',
                    'Full-Stack Web Development',
                    'Health Tech & Education Platforms',
                    'Linux & Cloud Deployment',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-background/50 border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-accent">When not coding</h3>
                <p className="text-foreground/80">
                  I enjoy exploring Linux distributions, contributing to open source, learning new
                  frameworks, and building side projects that solve real-world problems.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
