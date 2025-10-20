import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, GraduationCap, Briefcase, Building2, Globe } from 'lucide-react';

export function BoardPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const boardMembers = [
    {
      name: 'Dr. Elizabeth Morgan',
      title: 'Chairperson & Independent Director',
      image: '/api/placeholder/300/300',
      bio: 'Former CEO of Global Health Solutions with 30+ years in healthcare leadership. Expert in strategic planning and corporate governance.',
      background: 'Former CEO, Global Health Solutions',
      expertise: ['Corporate Governance', 'Healthcare Strategy', 'Risk Management'],
      committees: ['Audit Committee', 'Nominating Committee']
    },
    {
      name: 'James Wilson',
      title: 'Lead Independent Director',
      image: '/api/placeholder/300/300',
      bio: 'Retired CFO of Fortune 500 pharmaceutical company. Extensive experience in financial strategy and capital markets.',
      background: 'Former CFO, Major Pharma Corp',
      expertise: ['Financial Strategy', 'Capital Markets', 'M&A'],
      committees: ['Audit Committee (Chair)', 'Finance Committee']
    },
    {
      name: 'Dr. Maria Sanchez',
      title: 'Independent Director',
      image: '/api/placeholder/300/300',
      bio: 'Renowned researcher and former dean of pharmacy school. Brings deep expertise in pharmaceutical sciences and education.',
      background: 'Former Dean, University of Pharmacy',
      expertise: ['Pharmaceutical Research', 'Academic Leadership', 'Drug Development'],
      committees: ['Science Committee', 'Compensation Committee']
    },
    {
      name: 'Robert Chen',
      title: 'Independent Director',
      image: '/api/placeholder/300/300',
      bio: 'Serial entrepreneur and investor in healthcare technology. Founder of multiple successful biotech startups.',
      background: 'Founder & CEO, Biotech Ventures',
      expertise: ['Entrepreneurship', 'Healthcare Technology', 'Venture Capital'],
      committees: ['Innovation Committee', 'Finance Committee']
    },
    {
      name: 'Dr. Sarah Chen',
      title: 'Executive Director & CEO',
      image: '/api/placeholder/300/300',
      bio: 'CEO of EDIF Pharma with extensive experience in pharmaceutical leadership and drug development.',
      background: 'CEO, EDIF Pharma',
      expertise: ['Drug Development', 'Regulatory Affairs', 'Strategic Leadership'],
      committees: ['Executive Committee']
    },
    {
      name: 'Dr. Ahmed Hassan',
      title: 'Executive Director & CTO',
      image: '/api/placeholder/300/300',
      bio: 'Chief Technology Officer leading digital transformation and innovation in pharmaceutical technology.',
      background: 'CTO, EDIF Pharma',
      expertise: ['Digital Health', 'Data Analytics', 'Technology Innovation'],
      committees: ['Technology Committee', 'Innovation Committee']
    }
  ];

  const committees = [
    {
      name: 'Audit Committee',
      description: 'Oversees financial reporting, internal controls, and regulatory compliance.',
      chair: 'James Wilson'
    },
    {
      name: 'Nominating Committee',
      description: 'Identifies and evaluates candidates for board positions and executive roles.',
      chair: 'Dr. Elizabeth Morgan'
    },
    {
      name: 'Compensation Committee',
      description: 'Reviews and approves executive compensation and benefits programs.',
      chair: 'Dr. Maria Sanchez'
    },
    {
      name: 'Science Committee',
      description: 'Provides strategic guidance on research and development initiatives.',
      chair: 'Dr. Maria Sanchez'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.section
        className="relative bg-gradient-to-br from-[var(--brand-blue)] to-[var(--brand-blue-dark)] text-white overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative max-w-[1440px] mx-auto px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-4xl">
            <motion.h1
              className="text-4xl lg:text-6xl font-bold mb-6"
              {...fadeInUp}
            >
              Board of Directors
            </motion.h1>
            <motion.p
              className="text-xl lg:text-2xl opacity-90 leading-relaxed"
              {...fadeInUp}
              transition={{ delay: 0.2 }}
            >
              Experienced leaders providing strategic guidance and oversight to ensure EDIF Pharma's continued success and ethical governance.
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Board Overview */}
      <section className="py-16 lg:py-20">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-[var(--text-900)] mb-6">
              Our Board
            </h2>
            <p className="text-lg text-[var(--text-600)] max-w-3xl mx-auto">
              A diverse group of accomplished leaders bringing expertise in healthcare, finance, technology,
              and governance to guide our strategic direction.
            </p>
          </motion.div>

          <motion.div
            className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {boardMembers.map((member, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-sm border border-[var(--border-color)] overflow-hidden hover:shadow-md transition-shadow duration-300"
                variants={fadeInUp}
              >
                <div className="aspect-square bg-[var(--surface)] flex items-center justify-center">
                  <Users className="w-24 h-24 text-[var(--brand-blue)] opacity-50" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[var(--text-900)] mb-1">
                    {member.name}
                  </h3>
                  <p className="text-[var(--brand-blue)] font-medium mb-4 text-sm leading-tight">
                    {member.title}
                  </p>
                  <p className="text-[var(--text-600)] text-sm leading-relaxed mb-4">
                    {member.bio}
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-[var(--text-600)]">
                      <Building2 className="w-4 h-4 flex-shrink-0" />
                      <span>{member.background}</span>
                    </div>
                  </div>

                  <div className="mt-4">
                    <h4 className="text-sm font-medium text-[var(--text-900)] mb-2">Key Expertise:</h4>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {member.expertise.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-2 py-1 bg-[var(--brand-blue)]/10 text-[var(--brand-blue)] text-xs rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    <h4 className="text-sm font-medium text-[var(--text-900)] mb-2">Committees:</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.committees.map((committee, committeeIndex) => (
                        <span
                          key={committeeIndex}
                          className="px-2 py-1 bg-[var(--accent-green)]/10 text-[var(--accent-green-dark)] text-xs rounded-full"
                        >
                          {committee}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Board Committees */}
      <section className="py-16 lg:py-20 bg-[var(--surface)]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-[var(--text-900)] mb-6">
              Board Committees
            </h2>
            <p className="text-lg text-[var(--text-600)] max-w-3xl mx-auto">
              Specialized committees that provide focused oversight and guidance on key areas of corporate governance.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {committees.map((committee, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm border border-[var(--border-color)]"
                variants={fadeInUp}
              >
                <div className="w-12 h-12 bg-[var(--brand-blue)] rounded-lg flex items-center justify-center mb-6">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[var(--text-900)] mb-2">
                  {committee.name}
                </h3>
                <p className="text-[var(--text-600)] mb-4">
                  {committee.description}
                </p>
                <div className="flex items-center gap-2 text-sm text-[var(--brand-blue)] font-medium">
                  <Users className="w-4 h-4" />
                  <span>Chair: {committee.chair}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Governance Section */}
      <section className="py-16 lg:py-20">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-8">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-[var(--text-900)] mb-8">
              Corporate Governance
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[var(--brand-blue)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-[var(--text-900)] mb-2">Independent Oversight</h3>
                <p className="text-[var(--text-600)] text-sm">
                  Majority independent directors ensure objective decision-making
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[var(--brand-blue)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-[var(--text-900)] mb-2">Global Standards</h3>
                <p className="text-[var(--text-600)] text-sm">
                  Adherence to international corporate governance best practices
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[var(--brand-blue)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-[var(--text-900)] mb-2">Expertise</h3>
                <p className="text-[var(--text-600)] text-sm">
                  Diverse backgrounds in healthcare, finance, and technology
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}