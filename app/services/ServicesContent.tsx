'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
  Users,
  Server,
  Cloud,
  Layout,
  Database,
  Shield,
  BarChart3,
  ArrowRight,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';

const services = [
  {
    id: 'dedicated-teams',
    title: 'Dedicated Engineering Teams',
    description:
      'Long-term, integrated engineering teams that become an extension of your company.',
    icon: Users,
  },
  {
    id: 'backend-api',
    title: 'Backend & API Development',
    description:
      'Scalable, secure backend systems and RESTful/GraphQL APIs built with best practices.',
    icon: Server,
  },
  {
    id: 'cloud-devops',
    title: 'Cloud & DevOps',
    description:
      'AWS, GCP, and Azure infrastructure, CI/CD pipelines, and infrastructure as code.',
    icon: Cloud,
  },
  {
    id: 'frontend',
    title: 'Frontend Development',
    description:
      'Modern web and mobile applications with React, Next.js, React Native, and Flutter.',
    icon: Layout,
  },
  {
    id: 'architecture',
    title: 'System Architecture & Scalability',
    description:
      'Design and implement scalable, maintainable system architectures for growth.',
    icon: Database,
  },
  {
    id: 'data-engineering',
    title: 'Data Engineering & Integrations',
    description:
      'Data pipelines, ETL processes, and third-party API integrations.',
    icon: BarChart3,
  },
  {
    id: 'security',
    title: 'Security & Compliance',
    description:
      'Security audits, compliance readiness (SOC 2, GDPR), and secure development practices.',
    icon: Shield,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function ServicesContent() {
  return (
    <div className="pt-32 pb-20 relative min-h-screen">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/services-bg.jpg"
          alt="Technology services background"
          fill
          className="object-cover opacity-30"
          aria-hidden="true"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 max-w-4xl mx-auto"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            Our Services
          </span>
          <h1 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
            Full-stack engineering expertise
          </h1>
          <p className="text-muted-foreground text-lg">
            Enterprise-level engineering services designed to help startups and
            scale-ups build, scale, and operate reliable software products.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-elevated"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <IconComponent className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-xl font-semibold mb-3 text-foreground">
                  {service.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {service.description}
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  Get started
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* How We Work Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-20 pt-20 border-t border-border/30"
        >
          {/* Header */}
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <span className="text-primary text-sm font-medium uppercase tracking-wider">
              How We Work
            </span>
            <h2 className="text-2xl md:text-3xl font-bold mt-4 mb-6">
              A proven process designed to reduce risk
            </h2>
            <p className="text-muted-foreground text-lg">
              Our structured approach ensures successful outcomes for startups and scale-ups.
            </p>
          </div>

          {/* Process Steps */}
          <div className="space-y-6 mb-12">
            {[
              {
                title: 'Discovery & Alignment',
                description:
                  'We start by understanding your business goals, technical requirements, and team culture. This ensures we are aligned from day one.',
              },
              {
                title: 'Team Formation',
                description:
                  'We carefully match engineers with the right skills and experience to your project needs. Each team member is vetted for technical depth and communication skills.',
              },
              {
                title: 'Delivery & Communication',
                description:
                  'Regular standups, sprint planning, and transparent communication. We use tools like Jira, Slack, and GitHub to keep everyone in sync.',
              },
              {
                title: 'Quality Assurance',
                description:
                  'Code reviews, automated testing, and quality gates ensure every deliverable meets enterprise standards before it reaches production.',
              },
              {
                title: 'Scaling & Long-Term Support',
                description:
                  'As you grow, we scale with you. Long-term partnerships mean we understand your codebase deeply and can support you at any stage.',
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-primary/30 flex items-center justify-center text-primary font-bold text-xl bg-transparent group-hover:border-primary/50 transition-colors">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-6 rounded-xl bg-card border border-border"
            >
              <h3 className="text-lg font-semibold mb-3 text-foreground">Communication</h3>
              <p className="text-muted-foreground">
                Daily standups, weekly syncs, and transparent reporting. We maintain time zone
                overlap for real-time collaboration.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-6 rounded-xl bg-card border border-border"
            >
              <h3 className="text-lg font-semibold mb-3 text-foreground">Tools We Use</h3>
              <p className="text-muted-foreground">
                Jira, Slack, GitHub, Figma, and your preferred development tools. We adapt to your
                workflow.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Let's Connect CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-20 pt-20 border-t border-border/30"
        >
          <Button variant="hero" size="lg" href="/contact">
            Let's Connect
            <ArrowRight className="w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
