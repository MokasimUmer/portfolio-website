'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { siteConfig, socialLinks } from '@/lib/site-data';
import { scrollToSection } from '@/lib/scroll';

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' as const },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen pt-20 pb-12 flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-20 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          className="absolute -bottom-20 -left-40 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="mb-8 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent blur-md opacity-50" />
              <Image
                src={siteConfig.avatar}
                alt={siteConfig.name}
                width={120}
                height={120}
                className="relative rounded-full border-2 border-primary/50 object-cover"
                priority
              />
            </div>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-accent font-semibold text-lg mb-4 tracking-wide"
          >
            Welcome to my portfolio
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="block text-foreground">{siteConfig.name}</span>
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              {siteConfig.title}
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl text-foreground/80 mb-4 max-w-2xl mx-auto leading-relaxed"
          >
            {siteConfig.tagline}
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-foreground/60 mb-8 max-w-2xl mx-auto"
          >
            {siteConfig.bio}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex gap-4 justify-center flex-wrap"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:opacity-90 transition-opacity"
            >
              View My Work
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 border border-primary text-primary rounded-full font-semibold hover:bg-primary/10 transition-colors"
            >
              Get in Touch
            </motion.button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-12 flex justify-center gap-6"
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.label !== 'Email' ? '_blank' : undefined}
                rel={social.label !== 'Email' ? 'noopener noreferrer' : undefined}
                whileHover={{ scale: 1.1, y: -2 }}
                className="text-foreground/60 hover:text-accent transition-colors text-sm font-medium"
              >
                {social.label}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.button
        onClick={() => scrollToSection('about')}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        aria-label="Scroll to about section"
      >
        <div className="w-6 h-10 border-2 border-accent rounded-full flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-2 bg-accent rounded-full"
          />
        </div>
      </motion.button>
    </section>
  );
}
