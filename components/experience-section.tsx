'use client';

import { motion } from 'framer-motion';
import { experiences } from '@/lib/site-data';

export function ExperienceSection() {
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-16 text-center"
        >
          Professional Experience
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-8"
        >
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.title}
              variants={itemVariants}
              className="relative group"
            >
              <div className="hidden md:block absolute -left-12 top-6 w-8 h-8 bg-primary rounded-full border-4 border-background flex items-center justify-center">
                <div className="w-3 h-3 bg-accent rounded-full" />
              </div>
              {index !== experiences.length - 1 && (
                <div className="hidden md:block absolute -left-8 top-16 w-1 h-24 bg-gradient-to-b from-primary to-transparent" />
              )}

              <motion.div
                whileHover={{ x: 5 }}
                className="ml-0 md:ml-12 p-6 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-primary mb-1">
                      {experience.title}
                    </h3>
                    <p className="text-accent font-semibold">{experience.company}</p>
                  </div>
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    className="mt-2 md:mt-0 inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium"
                  >
                    {experience.period}
                  </motion.span>
                </div>

                <p className="text-foreground/80 mb-4 leading-relaxed">
                  {experience.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {experience.highlights.map((highlight) => (
                    <motion.span
                      key={highlight}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1 bg-background border border-border rounded-full text-xs font-medium text-foreground/70 hover:text-accent hover:border-accent transition-colors"
                    >
                      {highlight}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
