import { motion } from 'framer-motion';
import { Award, Shield, CheckCircle2, FileCheck, Building2, Globe, Clock, Star, Download } from 'lucide-react';

export function CertificationsPage() {
  const certifications = [
    {
      icon: Shield,
      name: 'WHO-GMP',
      issuer: 'World Health Organization',
      year: '2023',
      validUntil: '2026',
      description: 'Good Manufacturing Practice certification for pharmaceutical products',
      scope: 'All manufacturing facilities',
      color: 'from-blue-500 to-blue-600',
      status: 'Active'
    },
    {
      icon: Award,
      name: 'ISO 9001:2015',
      issuer: 'International Organization for Standardization',
      year: '2023',
      validUntil: '2026',
      description: 'Quality Management Systems certification',
      scope: 'Complete organizational quality system',
      color: 'from-purple-500 to-purple-600',
      status: 'Active'
    },
    {
      icon: FileCheck,
      name: 'ISO 14001:2015',
      issuer: 'International Organization for Standardization',
      year: '2023',
      validUntil: '2026',
      description: 'Environmental Management Systems',
      scope: 'Environmental impact and sustainability',
      color: 'from-green-500 to-green-600',
      status: 'Active'
    },
    {
      icon: Building2,
      name: 'ISO 45001:2018',
      issuer: 'International Organization for Standardization',
      year: '2022',
      validUntil: '2025',
      description: 'Occupational Health and Safety Management',
      scope: 'Workplace safety and employee health',
      color: 'from-orange-500 to-orange-600',
      status: 'Active'
    },
    {
      icon: Globe,
      name: 'FDA Registration',
      issuer: 'U.S. Food and Drug Administration',
      year: '2022',
      validUntil: 'Current',
      description: 'US market registration and compliance',
      scope: 'Drug manufacturing facilities',
      color: 'from-indigo-500 to-indigo-600',
      status: 'Active'
    },
    {
      icon: CheckCircle2,
      name: 'EU GMP',
      issuer: 'European Medicines Agency',
      year: '2023',
      validUntil: '2026',
      description: 'European Union Good Manufacturing Practice',
      scope: 'Manufacturing facilities for EU market',
      color: 'from-red-500 to-red-600',
      status: 'Active'
    },
    {
      icon: Star,
      name: 'MHRA UK',
      issuer: 'Medicines & Healthcare Regulatory Agency',
      year: '2023',
      validUntil: '2026',
      description: 'UK pharmaceutical manufacturing license',
      scope: 'UK market compliance',
      color: 'from-teal-500 to-teal-600',
      status: 'Active'
    },
    {
      icon: Award,
      name: 'TGA Australia',
      issuer: 'Therapeutic Goods Administration',
      year: '2023',
      validUntil: '2026',
      description: 'Australian pharmaceutical manufacturing approval',
      scope: 'Australian market compliance',
      color: 'from-cyan-500 to-cyan-600',
      status: 'Active'
    }
  ];

  const regulatoryApprovals = [
    {
      region: 'North America',
      authorities: ['FDA (USA)', 'Health Canada', 'CFIA (Canada)'],
      products: 'Solid dosage forms, liquids, injectables',
      status: 'Fully Approved'
    },
    {
      region: 'Europe',
      authorities: ['EMA (EU)', 'MHRA (UK)', 'Swissmedic (Switzerland)'],
      products: 'All pharmaceutical forms',
      status: 'Fully Approved'
    },
    {
      region: 'Asia Pacific',
      authorities: ['TGA (Australia)', 'Medsafe (New Zealand)', 'NPRA (Malaysia)'],
      products: 'Solid dosage forms, liquids',
      status: 'Fully Approved'
    },
    {
      region: 'Middle East & Africa',
      authorities: ['SFDA (Saudi Arabia)', 'MCC (South Africa)', 'DHA (UAE)'],
      products: 'Solid dosage forms, liquids',
      status: 'Approved'
    }
  ];

  const certificationProcess = [
    {
      step: '01',
      title: 'Application & Documentation',
      description: 'Comprehensive documentation review and facility assessment preparation'
    },
    {
      step: '02',
      title: 'Pre-Audit Assessment',
      description: 'Internal quality system review and gap analysis'
    },
    {
      step: '03',
      title: 'Certification Audit',
      description: 'On-site assessment by accredited certification bodies'
    },
    {
      step: '04',
      title: 'Certification Issuance',
      description: 'Certificate issuance and public announcement'
    },
    {
      step: '05',
      title: 'Surveillance Audits',
      description: 'Regular surveillance audits to maintain certification'
    },
    {
      step: '06',
      title: 'Recertification',
      description: 'Three-year recertification cycle with full reassessment'
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
              <span className="text-sm tracking-wide">CERTIFICATIONS & APPROVALS</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">
              Global Regulatory Certifications
            </h1>
            <p className="text-lg text-white/80 leading-relaxed mb-8">
              Our commitment to excellence is validated by comprehensive certifications from
              leading international regulatory authorities. These certifications demonstrate
              our adherence to the highest global standards for pharmaceutical manufacturing.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg text-center">
                <div className="text-2xl font-bold">8+</div>
                <div className="text-xs text-white/80">Active Certifications</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg text-center">
                <div className="text-2xl font-bold">30+</div>
                <div className="text-xs text-white/80">Country Approvals</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg text-center">
                <div className="text-2xl font-bold">150+</div>
                <div className="text-xs text-white/80">Regulatory Inspections</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg text-center">
                <div className="text-2xl font-bold">0</div>
                <div className="text-xs text-white/80">Major Observations</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certifications Grid */}
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
              <span className="text-sm text-[var(--brand-blue)] tracking-wide">OUR CERTIFICATIONS</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-4">
              International Certifications
            </h2>
            <p className="text-lg text-[var(--text-900)]/60 max-w-3xl mx-auto">
              Comprehensive certifications from global regulatory authorities validating
              our quality management systems and manufacturing excellence.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                className="group relative bg-white border border-[var(--border-color)] rounded-2xl p-6 hover:border-[var(--brand-blue)]/30 hover:shadow-xl transition-all duration-300 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                {/* Background Glow */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-500`} />

                <div className="relative">
                  {/* Status Badge */}
                  <div className="flex justify-between items-start mb-4">
                    <div className={`inline-flex items-center gap-1 px-2 py-1 text-xs rounded-full ${
                      cert.status === 'Active' ? 'bg-green-50 text-green-700' : 'bg-yellow-50 text-yellow-700'
                    }`}>
                      <div className={`w-1.5 h-1.5 rounded-full ${cert.status === 'Active' ? 'bg-green-500' : 'bg-yellow-500'}`} />
                      {cert.status}
                    </div>
                    <span className="text-xs text-[var(--brand-blue)] bg-[var(--brand-blue)]/10 px-2 py-1 rounded-full">
                      Valid {cert.validUntil}
                    </span>
                  </div>

                  {/* Icon Badge */}
                  <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${cert.color} rounded-xl mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <cert.icon className="text-white" size={24} />
                  </div>

                  {/* Content */}
                  <div className="space-y-2 mb-4">
                    <h3 className="text-lg text-[var(--text-900)]">{cert.name}</h3>
                    <p className="text-sm text-[var(--text-900)] opacity-60">
                      {cert.issuer} • {cert.year}
                    </p>
                    <p className="text-sm text-[var(--text-900)] opacity-50 leading-relaxed">
                      {cert.description}
                    </p>
                    <p className="text-xs text-[var(--brand-blue)]">
                      Scope: {cert.scope}
                    </p>
                  </div>

                  {/* Download Button */}
                  <button className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 border border-[var(--border-color)] hover:bg-[var(--brand-blue)] hover:text-white hover:border-[var(--brand-blue)] transition-colors duration-150 text-sm">
                    <Download size={14} />
                    <span>VIEW CERTIFICATE</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Regulatory Approvals */}
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
              <span className="text-sm text-[var(--brand-blue)] tracking-wide">REGULATORY APPROVALS</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-4">
              Global Market Access
            </h2>
            <p className="text-lg text-[var(--text-900)]/60 max-w-3xl mx-auto">
              Our products are approved and registered in major pharmaceutical markets worldwide,
              ensuring compliance with diverse regulatory requirements.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {regulatoryApprovals.map((region, index) => (
              <motion.div
                key={region.region}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-[var(--border-color)] p-8 rounded-xl"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl text-[var(--text-900)]">{region.region}</h3>
                  <span className="px-3 py-1 bg-green-50 text-green-700 text-sm rounded-full">
                    {region.status}
                  </span>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-[var(--text-900)] opacity-60 mb-2">Regulatory Authorities</div>
                    <div className="flex flex-wrap gap-2">
                      {region.authorities.map((authority, idx) => (
                        <span key={idx} className="px-2 py-1 bg-[var(--brand-blue)]/10 text-[var(--brand-blue)] text-xs rounded">
                          {authority}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="text-sm text-[var(--text-900)] opacity-60 mb-1">Approved Products</div>
                    <div className="text-sm text-[var(--text-900)]">{region.products}</div>
                  </div>
                </div>
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
              Maintaining Certification Excellence
            </h2>
            <p className="text-lg text-[var(--text-900)]/60 max-w-3xl mx-auto">
              Our rigorous certification maintenance process ensures continuous compliance
              and improvement of our quality management systems.
            </p>
          </motion.div>

          <div className="relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-[var(--border-color)]" />

            <div className="grid md:grid-cols-6 gap-8">
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
              Certification Performance
            </h2>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              Our track record demonstrates unwavering commitment to regulatory compliance
              and quality excellence across all our operations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                metric: '100%',
                label: 'Certification Success Rate',
                description: 'All certification audits passed successfully'
              },
              {
                metric: '0',
                label: 'Major Audit Findings',
                description: 'Zero major observations in regulatory audits'
              },
              {
                metric: '150+',
                label: 'Successful Inspections',
                description: 'Regulatory inspections completed worldwide'
              },
              {
                metric: '99.9%',
                label: 'Compliance Score',
                description: 'Average compliance across all standards'
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
            <Award className="mx-auto mb-6 text-[var(--brand-blue)]" size={48} />
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-6">
              Download Certification Documents
            </h2>
            <p className="text-lg text-[var(--text-900)]/60 mb-8 max-w-2xl mx-auto">
              Access our complete certification portfolio and regulatory approvals.
              All documents are available for download upon request.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center justify-center gap-2 bg-[var(--brand-blue)] text-white hover:bg-[var(--brand-blue)]/90 px-8 py-4 text-sm tracking-wide transition-colors duration-150">
                <Download size={18} />
                <span>DOWNLOAD CERTIFICATES</span>
              </button>
              <button className="inline-flex items-center justify-center gap-2 border border-[var(--border-color)] text-[var(--text-900)] hover:bg-[var(--surface)] px-8 py-4 text-sm tracking-wide transition-colors duration-150">
                <span>CONTACT REGULATORY TEAM</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}