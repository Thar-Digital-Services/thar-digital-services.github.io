'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Users,
  Server,
  Cloud,
  Layout,
  Database,
  Shield,
  ArrowRight,
} from 'lucide-react';

const services = [
  {
    icon: Users,
    title: 'Dedicated Engineering Teams',
    description:
      'Full-time engineers who integrate seamlessly with your team, bringing senior expertise and ownership mindset.',
  },
  {
    icon: Server,
    title: 'Backend & API Development',
    description:
      'Scalable, secure backend systems designed for performance. RESTful and GraphQL APIs built to last.',
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    description:
      'AWS, GCP, and Azure infrastructure. CI/CD pipelines, containerization, and infrastructure as code.',
  },
  {
    icon: Layout,
    title: 'Frontend Development',
    description:
      'Modern web and mobile experiences. React, Vue, React Native with pixel-perfect implementation.',
  },
  {
    icon: Database,
    title: 'System Architecture',
    description:
      'Scalable architecture design for high-growth products. Microservices, event-driven systems, and more.',
  },
  {
    icon: Shield,
    title: 'Security & Compliance',
    description:
      'SOC 2, GDPR, and HIPAA readiness. Security-first development practices and regular audits.',
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

export default function ServicesSection() {
  return (
    <section className="section-padding relative">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/services-bg.jpg"
          alt=""
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
            Full-stack engineering expertise
          </h2>
          <p className="text-muted-foreground text-lg">
            From architecture to deployment, we cover every layer of modern
            software development with enterprise-grade standards.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-elevated"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <IconComponent className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {service.description}
                </p>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  Learn more
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
