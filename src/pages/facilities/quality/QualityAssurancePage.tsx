import { motion } from 'framer-motion';
import { Shield, CheckCircle, AlertTriangle, FileCheck, Users, Microscope, BarChart, Clock, Target, Zap } from 'lucide-react';

export function QualityAssurancePage() {
  const qaPillars = [
    {
      icon: Shield,
      title: 'Quality Risk Management',
      description: 'Proactive identification, assessment, and mitigation of quality risks throughout the product lifecycle.',
      processes: ['Risk assessment protocols', 'Critical quality attributes', 'Failure mode analysis', 'Continuous improvement']
    },
    {
      icon: FileCheck,
      title: 'Documentation & Records',
      description: 'Comprehensive documentation system ensuring traceability and compliance with regulatory requirements.',
      processes: ['Batch production records', 'Quality control testing', 'Change control procedures', 'Deviation management']
    },
    {
      icon: Users,
      title: 'Training & Competency',
      description: 'Ongoing training programs ensuring all personnel maintain required knowledge and skills.',
      processes: ['Initial training programs', 'Refresher training', 'Competency assessments', 'Cross-training initiatives']
    },
    {
      icon: Microscope,
      title: 'Quality Control',
      description: 'Rigorous testing and validation of raw materials, intermediates, and finished products.',
      processes: ['Raw material testing', 'In-process controls', 'Finished product release', 'Stability testing programs']
    },
    {
      icon: AlertTriangle,
      title: 'Deviation & CAPA',
      description: 'Systematic investigation and resolution of deviations with corrective and preventive actions.',
      processes: ['Deviation reporting', 'Root cause analysis', 'CAPA implementation', 'Effectiveness monitoring']
    },
    {
      icon: BarChart,
      title: 'Quality Metrics & KPIs',
      description: 'Data-driven quality monitoring with key performance indicators and trend analysis.',
      processes: ['Quality metrics dashboard', 'Trend analysis reports', 'Performance monitoring', 'Continuous improvement']
    }
  ];

  const qaProcesses = [
    {
      phase: 'Pre-Production',
      activities: [
        'Raw material qualification',
        'Supplier quality audits',
        'Process validation',
        'Equipment calibration',
        'Documentation review'
      ]
    },
    {
      phase: 'Production',
      activities: [
        'In-process monitoring',
        'Environmental controls',
        'Personnel monitoring',
        'Batch record review',
        'Real-time quality checks'
      ]
    },
    {
      phase: 'Post-Production',
      activities: [
        'Finished product testing',
        'Stability studies',
        'Batch release decisions',
        'Quality review meetings',
        'Regulatory submissions'
      ]
    }
  ];

  const qualityTools = [
    {
      name: 'Statistical Process Control',
      description: 'Real-time monitoring of manufacturing processes using statistical methods',
      icon: BarChart
    },
    {
      name: 'Root Cause Analysis',
      description: 'Systematic investigation of quality issues using 5-Why and Fishbone diagrams',
      icon: Target
    },
    {
      name: 'Failure Mode Analysis',
      description: 'Proactive risk assessment of potential failure modes and their impacts',
      icon: AlertTriangle
    },
    {
      name: 'Six Sigma Methodology',
      description: 'Data-driven approach to reduce process variation and improve quality',
      icon: Zap
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
              <span className="text-sm tracking-wide">QUALITY ASSURANCE</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">
              Quality Assurance Systems
            </h1>
            <p className="text-lg text-white/80 leading-relaxed mb-8">
              Our comprehensive Quality Assurance framework ensures every product meets the highest
              standards of safety, efficacy, and quality. From raw materials to finished products,
              quality is built into every process.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg text-center">
                <div className="text-2xl font-bold">100%</div>
                <div className="text-xs text-white/80">Batch Testing</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg text-center">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-xs text-white/80">Quality Monitoring</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg text-center">
                <div className="text-2xl font-bold">99.8%</div>
                <div className="text-xs text-white/80">Quality Score</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg text-center">
                <div className="text-2xl font-bold">0</div>
                <div className="text-xs text-white/80">Product Recalls</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* QA Pillars */}
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
              <span className="text-sm text-[var(--brand-blue)] tracking-wide">QUALITY FRAMEWORK</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-4">
              Pillars of Quality Assurance
            </h2>
            <p className="text-lg text-[var(--text-900)]/60 max-w-3xl mx-auto">
              Our quality assurance system is built on these fundamental pillars that ensure
              consistent product quality and regulatory compliance.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {qaPillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[var(--surface)] border border-[var(--border-color)] p-8 rounded-xl hover:border-[var(--brand-blue)] transition-colors"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-[var(--brand-blue)]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <pillar.icon className="text-[var(--brand-blue)]" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl text-[var(--text-900)] mb-2">{pillar.title}</h3>
                    <p className="text-[var(--text-900)]/70 mb-4">{pillar.description}</p>
                    <ul className="space-y-2">
                      {pillar.processes.map((process, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-[var(--text-900)]/60">
                          <CheckCircle size={14} className="text-[var(--brand-blue)] mt-0.5 flex-shrink-0" />
                          <span>{process}</span>
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

      {/* QA Processes */}
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
              <span className="text-sm text-[var(--brand-blue)] tracking-wide">PROCESS FLOW</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-4">
              Quality Assurance Throughout Production
            </h2>
            <p className="text-lg text-[var(--text-900)]/60 max-w-3xl mx-auto">
              Quality assurance is integrated at every stage of our manufacturing process,
              from raw materials to finished products.
            </p>
          </motion.div>

          <div className="space-y-8">
            {qaProcesses.map((phase, index) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-[var(--border-color)] p-8 rounded-xl"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-[var(--brand-blue)] text-white rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-2xl text-[var(--text-900)]">{phase.phase}</h3>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {phase.activities.map((activity, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-4 bg-[var(--surface)] rounded-lg">
                      <CheckCircle size={16} className="text-[var(--brand-blue)] mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-[var(--text-900)]">{activity}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Tools */}
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
              <span className="text-sm text-[var(--brand-blue)] tracking-wide">QUALITY TOOLS</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-4">
              Advanced Quality Tools & Methodologies
            </h2>
            <p className="text-lg text-[var(--text-900)]/60 max-w-3xl mx-auto">
              We employ cutting-edge quality tools and methodologies to ensure continuous
              improvement and proactive quality management.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {qualityTools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[var(--surface)] border border-[var(--border-color)] p-8 rounded-xl hover:border-[var(--brand-blue)] transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[var(--brand-blue)]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <tool.icon className="text-[var(--brand-blue)]" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl text-[var(--text-900)] mb-2">{tool.name}</h3>
                    <p className="text-[var(--text-900)]/70 leading-relaxed">{tool.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Metrics */}
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
              Quality Performance Metrics
            </h2>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              Our commitment to quality is reflected in our performance metrics and continuous improvement initiatives.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                metric: '99.8%',
                label: 'Product Quality Score',
                description: 'Average quality compliance across all batches'
              },
              {
                metric: '< 0.1%',
                label: 'Defect Rate',
                description: 'Percentage of non-conforming products'
              },
              {
                metric: '24/7',
                label: 'Quality Monitoring',
                description: 'Continuous quality oversight and testing'
              },
              {
                metric: '0',
                label: 'Product Recalls',
                description: 'Number of product recalls in the last 5 years'
              }
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 text-center"
              >
                <div className="text-3xl font-bold mb-2">{item.metric}</div>
                <div className="text-lg mb-2">{item.label}</div>
                <div className="text-sm text-white/80">{item.description}</div>
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
            <Shield className="mx-auto mb-6 text-[var(--brand-blue)]" size={48} />
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-6">
              Experience Our Quality Assurance Standards
            </h2>
            <p className="text-lg text-[var(--text-900)]/60 mb-8 max-w-2xl mx-auto">
              Schedule a visit to our facilities to see our quality assurance systems in action
              and learn about our commitment to pharmaceutical excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center justify-center gap-2 bg-[var(--brand-blue)] text-white hover:bg-[var(--brand-blue)]/90 px-8 py-4 text-sm tracking-wide transition-colors duration-150">
                <span>SCHEDULE FACILITY TOUR</span>
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