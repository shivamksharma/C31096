import { motion } from 'framer-motion';
import { Shield, CheckCircle, Award, Globe, FileCheck, Users, Clock, Target } from 'lucide-react';

export function WhoGmpPage() {
  const gmpPrinciples = [
    {
      icon: Shield,
      title: 'Quality Management',
      description: 'Comprehensive quality management systems ensuring product safety and efficacy',
      details: ['Quality assurance systems', 'Quality control procedures', 'Documentation and records', 'Quality risk management']
    },
    {
      icon: Users,
      title: 'Personnel',
      description: 'Qualified and trained personnel with appropriate education and experience',
      details: ['Personnel qualifications', 'Training programs', 'Hygiene and health', 'Personal protective equipment']
    },
    {
      icon: Globe,
      title: 'Premises & Equipment',
      description: 'Suitable premises and equipment designed for pharmaceutical manufacturing',
      details: ['Facility design and layout', 'Environmental controls', 'Equipment qualification', 'Maintenance programs']
    },
    {
      icon: FileCheck,
      title: 'Documentation',
      description: 'Complete documentation system for all manufacturing and quality processes',
      details: ['Batch records', 'Standard operating procedures', 'Specifications and methods', 'Change control procedures']
    },
    {
      icon: Target,
      title: 'Production',
      description: 'Controlled production processes ensuring consistent quality',
      details: ['Process validation', 'In-process controls', 'Packaging operations', 'Contamination prevention']
    },
    {
      icon: CheckCircle,
      title: 'Quality Control',
      description: 'Rigorous testing and release procedures for all products',
      details: ['Raw material testing', 'Finished product testing', 'Stability testing', 'Analytical method validation']
    }
  ];

  const whoGmpRequirements = [
    'Pharmaceutical Quality System',
    'Good Manufacturing Practice for Pharmaceutical Products',
    'Quality Control Laboratory',
    'Product Information and Labelling',
    'Complaints and Product Recall',
    'Contract Production and Analysis',
    'Self-Inspection and Quality Audits',
    'Personnel, Premises and Equipment',
    'Production and In-Process Controls',
    'Finished Product Specifications'
  ];

  const certificationProcess = [
    {
      step: '01',
      title: 'Application & Documentation',
      description: 'Submit comprehensive documentation including quality manuals, SOPs, and facility layouts'
    },
    {
      step: '02',
      title: 'Pre-Assessment Review',
      description: 'Initial review of documentation and systems by WHO-GMP assessors'
    },
    {
      step: '03',
      title: 'On-Site Assessment',
      description: 'Comprehensive audit of facilities, processes, and quality systems'
    },
    {
      step: '04',
      title: 'Certification Decision',
      description: 'Review of assessment findings and issuance of WHO-GMP certificate'
    },
    {
      step: '05',
      title: 'Surveillance Audits',
      description: 'Regular surveillance audits to maintain certification status'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--brand-blue)] to-[#0a3a72] text-white py-20 md:py-32">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm mb-6">
              <span className="text-sm tracking-wide">WORLD HEALTH ORGANIZATION</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">
              WHO-GMP Certification
            </h1>
            <p className="text-lg text-white/80 leading-relaxed mb-8">
              Our facilities adhere to the highest international standards set by the World Health Organization
              for Good Manufacturing Practice. This certification ensures the quality, safety, and efficacy
              of our pharmaceutical products worldwide.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
                <div className="text-2xl font-bold">3</div>
                <div className="text-sm text-white/80">Certified Facilities</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
                <div className="text-2xl font-bold">2023</div>
                <div className="text-sm text-white/80">Latest Certification</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
                <div className="text-2xl font-bold">150+</div>
                <div className="text-sm text-white/80">Countries Recognized</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* GMP Principles */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-2 bg-[var(--brand-blue)]/10 mb-4">
              <span className="text-sm text-[var(--brand-blue)] tracking-wide">CORE PRINCIPLES</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-4">
              WHO-GMP Principles
            </h2>
            <p className="text-lg text-[var(--text-900)]/60 max-w-3xl mx-auto">
              The foundation of our quality management system is built on these essential principles
              that ensure pharmaceutical product quality and patient safety.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {gmpPrinciples.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[var(--surface)] border border-[var(--border-color)] p-8 rounded-xl hover:border-[var(--brand-blue)] transition-colors"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-[var(--brand-blue)]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <principle.icon className="text-[var(--brand-blue)]" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl text-[var(--text-900)] mb-2">{principle.title}</h3>
                    <p className="text-[var(--text-900)]/70 mb-4">{principle.description}</p>
                    <ul className="space-y-2">
                      {principle.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-[var(--text-900)]/60">
                          <CheckCircle size={14} className="text-[var(--brand-blue)] mt-0.5 flex-shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO-GMP Requirements */}
      <section className="py-20 md:py-32 bg-[var(--surface)]">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-2 bg-[var(--brand-blue)]/10 mb-4">
              <span className="text-sm text-[var(--brand-blue)] tracking-wide">REQUIREMENTS</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-4">
              WHO-GMP Requirements
            </h2>
            <p className="text-lg text-[var(--text-900)]/60 max-w-3xl mx-auto">
              Comprehensive requirements that our facilities must meet and exceed
              to maintain WHO-GMP certification.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4">
            {whoGmpRequirements.map((requirement, index) => (
              <motion.div
                key={requirement}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-4 bg-white p-6 rounded-lg border border-[var(--border-color)] hover:border-[var(--brand-blue)] transition-colors"
              >
                <div className="w-8 h-8 bg-[var(--brand-blue)]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-sm text-[var(--brand-blue)] font-medium">
                    {(index + 1).toString().padStart(2, '0')}
                  </span>
                </div>
                <span className="text-[var(--text-900)]">{requirement}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certification Process */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-2 bg-[var(--brand-blue)]/10 mb-4">
              <span className="text-sm text-[var(--brand-blue)] tracking-wide">CERTIFICATION PROCESS</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-4">
              Achieving WHO-GMP Certification
            </h2>
            <p className="text-lg text-[var(--text-900)]/60 max-w-3xl mx-auto">
              Rigorous assessment process ensuring our facilities meet the highest global standards.
            </p>
          </motion.div>

          <div className="relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-[var(--border-color)]" />

            <div className="grid md:grid-cols-5 gap-8">
              {certificationProcess.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative text-center"
                >
                  {/* Step Number */}
                  <div className="w-16 h-16 bg-[var(--brand-blue)] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                    {step.step}
                  </div>

                  <h3 className="text-lg text-[var(--text-900)] mb-2">{step.title}</h3>
                  <p className="text-sm text-[var(--text-900)]/60 leading-relaxed">{step.description}</p>

                  {/* Arrow */}
                  {index < certificationProcess.length - 1 && (
                    <div className="hidden md:block absolute top-8 -right-4 text-[var(--border-color)]">
                      →
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certification Benefits */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-[var(--brand-blue)] to-[#0a3a72] text-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl mb-6">
              Benefits of WHO-GMP Certification
            </h2>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              WHO-GMP certification opens doors to global markets and ensures the highest quality standards
              for pharmaceutical products.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                title: 'Global Market Access',
                description: 'Accepted in over 150 countries worldwide, facilitating international trade and distribution.'
              },
              {
                icon: Shield,
                title: 'Quality Assurance',
                description: 'Demonstrates commitment to international quality standards and patient safety.'
              },
              {
                icon: Award,
                title: 'Regulatory Recognition',
                description: 'Recognized by major regulatory authorities including FDA, EMA, and other agencies.'
              }
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20"
              >
                <benefit.icon className="text-white mb-4" size={32} />
                <h3 className="text-xl mb-3">{benefit.title}</h3>
                <p className="text-white/80 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Award className="mx-auto mb-6 text-[var(--brand-blue)]" size={48} />
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-6">
              Learn More About Our WHO-GMP Standards
            </h2>
            <p className="text-lg text-[var(--text-900)]/60 mb-8 max-w-2xl mx-auto">
              Contact our quality assurance team to learn more about our WHO-GMP certification
              and quality management systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center justify-center gap-2 bg-[var(--brand-blue)] text-white hover:bg-[var(--brand-blue)]/90 px-8 py-4 text-sm tracking-wide transition-colors duration-150">
                <span>REQUEST FACILITY TOUR</span>
              </button>
              <button className="inline-flex items-center justify-center gap-2 border border-[var(--border-color)] text-[var(--text-900)] hover:bg-[var(--surface)] px-8 py-4 text-sm tracking-wide transition-colors duration-150">
                <span>CONTACT QA TEAM</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}