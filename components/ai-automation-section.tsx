'use client';

import { motion } from 'framer-motion';
import { Zap, Brain, Lightbulb, Workflow } from 'lucide-react';
import { scrollToSection } from '@/lib/scroll';

export function AIAutomationSection() {
  const automationExamples = [
    {
      icon: Brain,
      title: 'Intelligent Content Generation',
      description:
        'AI-powered systems that automatically generate, optimize, and personalize content across multiple channels.',
      examples: ['Blog articles', 'Social media posts', 'Email campaigns', 'Product descriptions'],
    },
    {
      icon: Workflow,
      title: 'Process Automation',
      description:
        'Streamline business operations by automating repetitive tasks and optimizing workflow efficiency.',
      examples: ['Invoice processing', 'Document classification', 'Data migration', 'Report generation'],
    },
    {
      icon: Zap,
      title: 'Intelligent API Integration',
      description:
        'Seamless integration of AI capabilities into existing systems and workflows.',
      examples: ['Chatbots', 'Recommendation engines', 'Image recognition', 'Sentiment analysis'],
    },
    {
      icon: Lightbulb,
      title: 'Custom AI Solutions',
      description:
        'Tailor-made AI solutions designed specifically for your business needs and challenges.',
      examples: ['Predictive analytics', 'Anomaly detection', 'Customer insights', 'Process optimization'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="automation"
      className="py-20 px-6 bg-gradient-to-b from-background to-card/30 relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute top-10 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, delay: 1 }}
          className="absolute bottom-10 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">AI & Automation Expertise</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto text-lg">
            From personalized learning paths to intelligent health workflows — I build AI systems
            that deliver measurable impact
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          {automationExamples.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group relative bg-card/80 backdrop-blur border border-border rounded-lg p-8 hover:border-primary/50 transition-all overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    className="w-16 h-16 mb-6 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary/30 transition-colors"
                  >
                    <Icon size={32} className="text-primary" />
                  </motion.div>

                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-foreground/70 mb-6 leading-relaxed">{item.description}</p>

                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-accent">Examples:</p>
                    <div className="flex flex-wrap gap-2">
                      {item.examples.map((example) => (
                        <span
                          key={example}
                          className="px-3 py-1 bg-background border border-border rounded-full text-xs text-foreground/70"
                        >
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center"
        >
          <p className="text-foreground/60 mb-6 max-w-2xl mx-auto">
            Ready to transform your business with AI automation? Let&apos;s discuss how we can
            implement intelligent systems tailored to your needs.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('contact')}
            className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:opacity-90 transition-opacity"
          >
            Explore Automation Solutions
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
