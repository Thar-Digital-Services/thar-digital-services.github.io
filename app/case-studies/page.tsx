'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { ArrowRight, ExternalLink } from 'lucide-react';

// Case studies data
const caseStudies = [
  {
    id: 'billte',
    title: 'Billte — Digital Billing Platform',
    client: 'Billte',
    clientUrl: 'https://billte.ch',
    industry: 'FinTech',
    location: 'Switzerland',
    clientDescription:
      'Billte AG is a Swiss fintech company providing end-to-end digital billing solutions for enterprises, SMEs, and freelancers.',
    challenge:
      'Billte needed to build a scalable digital billing platform integrated with Switzerland\'s eBill system, allowing businesses to send invoices through the country\'s primary digital invoicing standard used by over 90 Swiss banks. The platform also had to support multiple delivery channels while meeting strict financial and regulatory requirements.',
    solution:
      'Thar Digital Services designed and built a full-stack billing platform with secure REST APIs for eBill integration and web-based applications for SMEs and freelancers. The system supports multi-channel invoice delivery, including eBill, email, post, and SMS, along with automated payment monitoring and overdue reminder workflows.',
    technology: [
      'RESTful APIs for billing and payment workflows',
      'Integration with SIX eBill network and EBICS',
      'Secure, cloud-based infrastructure',
      'Compliance-ready architecture for Swiss financial regulations',
    ],
    outcomes: [
      'Certified integration with the SIX eBill network',
      'Invoices delivered via 90+ Swiss banks',
      '~80% reduction in invoice processing time',
      'Scalable platform supporting increasing transaction volumes',
    ],
    description: 'Enterprise digital billing and eBill integration for Swiss businesses',
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

export default function CaseStudiesPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            Case Studies
          </span>
          <h1 className="text-2xl md:text-3xl font-bold mt-4 mb-6">
            Real examples of how we help startups succeed.
          </h1>
          
        </motion.div>

        {/* Case Studies */}
        {caseStudies.length > 0 ? (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-12 mb-16"
          >
            {caseStudies.map((study) => (
              <motion.div
                key={study.id}
                variants={itemVariants}
                className="card group"
              >
                {/* Header - Case Study Card Overview */}
                <div className="mb-10">
                  <span className="text-primary text-sm font-medium uppercase tracking-wider">
                    {study.industry}
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-3">
                    {study.title}
                  </h2>
                  {study.description && (
                    <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                      {study.description}
                    </p>
                  )}
                  {study.clientUrl && (
                    <a
                      href={study.clientUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium"
                    >
                      Visit {study.client}
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>

                {/* Client */}
                {study.clientDescription && (
                  <div className="mb-10">
                    <h3 className="text-lg font-semibold mb-3 text-foreground">Client</h3>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {study.clientDescription}
                    </p>
                  </div>
                )}

                {/* The Challenge */}
                {study.challenge && (
                  <div className="mb-10">
                    <h3 className="text-lg font-semibold mb-4 text-foreground">The Challenge</h3>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {study.challenge}
                    </p>
                  </div>
                )}

                {/* Our Solution */}
                {study.solution && (
                  <div className="mb-10">
                    <h3 className="text-lg font-semibold mb-4 text-foreground">Our Solution</h3>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {study.solution}
                    </p>
                  </div>
                )}

                {/* Technology */}
                {study.technology && study.technology.length > 0 && (
                  <div className="mb-10">
                    <h3 className="text-lg font-semibold mb-4 text-foreground">Technology</h3>
                    <ul className="space-y-3">
                      {study.technology.map((tech, index) => (
                        <li
                          key={index}
                          className="text-muted-foreground flex items-start gap-3"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                          <span className="leading-relaxed">{tech}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Outcomes */}
                {study.outcomes && study.outcomes.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold mb-4 text-foreground">Outcomes</h3>
                    <ul className="space-y-3">
                      {study.outcomes.map((outcome, index) => (
                        <li
                          key={index}
                          className="text-muted-foreground flex items-start gap-3"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                          <span className="leading-relaxed">{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="card text-center mb-16">
            <p className="text-muted-foreground">Case studies coming soon...</p>
          </div>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <Button variant="hero" size="lg" href="/contact">
            Discuss Your Project
            <ArrowRight className="w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
