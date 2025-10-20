import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Users, Heart, TrendingUp, Award, MapPin, Clock, DollarSign, Search, Filter } from 'lucide-react';

export function JoinOurTeamPage() {
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

  const benefits = [
    {
      icon: Heart,
      title: 'Comprehensive Health Coverage',
      description: 'Medical, dental, and vision insurance for you and your family'
    },
    {
      icon: TrendingUp,
      title: 'Professional Development',
      description: 'Ongoing training, conferences, and career advancement opportunities'
    },
    {
      icon: Users,
      title: 'Collaborative Culture',
      description: 'Work with talented professionals in a supportive, innovative environment'
    },
    {
      icon: Award,
      title: 'Recognition Programs',
      description: 'Employee of the month, innovation awards, and performance bonuses'
    },
    {
      icon: Clock,
      title: 'Work-Life Balance',
      description: 'Flexible schedules, remote work options, and generous PTO policy'
    },
    {
      icon: DollarSign,
      title: 'Competitive Compensation',
      description: 'Market-leading salaries, equity participation, and retirement plans'
    }
  ];

  const openPositions = [
    {
      title: 'Senior Research Scientist',
      department: 'R&D',
      location: 'Boston, MA',
      type: 'Full-time',
      description: 'Lead innovative drug discovery projects and mentor junior scientists.',
      requirements: ['PhD in relevant field', '5+ years experience', 'Publication record']
    },
    {
      title: 'Clinical Trial Manager',
      department: 'Clinical Operations',
      location: 'Remote',
      type: 'Full-time',
      description: 'Oversee clinical trial execution and ensure regulatory compliance.',
      requirements: ['BS/MS in life sciences', '3+ years in clinical trials', 'Regulatory knowledge']
    },
    {
      title: 'Regulatory Affairs Specialist',
      department: 'Regulatory',
      location: 'New York, NY',
      type: 'Full-time',
      description: 'Manage regulatory submissions and maintain compliance documentation.',
      requirements: ['Degree in life sciences', '2+ years regulatory experience', 'FDA/EMA knowledge']
    },
    {
      title: 'Data Scientist',
      department: 'Analytics',
      location: 'San Francisco, CA',
      type: 'Full-time',
      description: 'Develop AI/ML models for drug discovery and clinical data analysis.',
      requirements: ['MS/PhD in data science', 'Python/R expertise', 'Healthcare experience preferred']
    },
    {
      title: 'Quality Control Analyst',
      department: 'Quality',
      location: 'Chicago, IL',
      type: 'Full-time',
      description: 'Perform analytical testing and ensure product quality standards.',
      requirements: ['BS in chemistry/pharmacy', 'Lab experience', 'GMP knowledge']
    },
    {
      title: 'Business Development Manager',
      department: 'Commercial',
      location: 'Remote',
      type: 'Full-time',
      description: 'Identify partnership opportunities and drive strategic alliances.',
      requirements: ['MBA preferred', '5+ years pharma BD experience', 'Strong network']
    }
  ];

  const departments = [
    { name: 'Research & Development', count: 12, icon: '🧬' },
    { name: 'Clinical Operations', count: 8, icon: '🏥' },
    { name: 'Regulatory Affairs', count: 6, icon: '📋' },
    { name: 'Quality & Manufacturing', count: 15, icon: '🏭' },
    { name: 'Commercial & Marketing', count: 10, icon: '📈' },
    { name: 'Corporate & Support', count: 7, icon: '💼' }
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
              Join Our Team
            </motion.h1>
            <motion.p
              className="text-xl lg:text-2xl opacity-90 leading-relaxed"
              {...fadeInUp}
              transition={{ delay: 0.2 }}
            >
              Be part of a mission-driven organization that's advancing healthcare through innovation,
              collaboration, and excellence.
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Why Join Us */}
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
              Why Join EDIF Pharma?
            </h2>
            <p className="text-lg text-[var(--text-600)] max-w-3xl mx-auto">
              We're building a workplace where innovation thrives, careers grow, and every team member
              contributes to improving global health outcomes.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm border border-[var(--border-color)] hover:shadow-md transition-shadow duration-300"
                variants={fadeInUp}
              >
                <div className="w-12 h-12 bg-[var(--brand-blue)] rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-[var(--text-900)] mb-3">
                  {benefit.title}
                </h3>
                <p className="text-[var(--text-600)] text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Departments */}
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
              Our Departments
            </h2>
            <p className="text-lg text-[var(--text-600)] max-w-3xl mx-auto">
              Explore opportunities across our diverse teams, each contributing to our mission of advancing healthcare.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {departments.map((dept, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm border border-[var(--border-color)] text-center hover:shadow-md transition-shadow duration-300"
                variants={fadeInUp}
              >
                <div className="text-4xl mb-4">{dept.icon}</div>
                <h3 className="text-lg font-semibold text-[var(--text-900)] mb-2">
                  {dept.name}
                </h3>
                <p className="text-[var(--brand-blue)] font-medium">
                  {dept.count} open positions
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Open Positions */}
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
              Open Positions
            </h2>
            <p className="text-lg text-[var(--text-600)] max-w-3xl mx-auto mb-8">
              Discover exciting opportunities to contribute to groundbreaking work in pharmaceutical innovation.
            </p>

            {/* Search and Filter */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto mb-12">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[var(--text-400)] w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search positions..."
                  className="w-full pl-10 pr-4 py-3 border border-[var(--border-color)] rounded-lg focus:ring-2 focus:ring-[var(--brand-blue)] focus:border-transparent"
                />
              </div>
              <button className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--brand-blue)] text-white font-medium rounded-lg hover:bg-[var(--brand-blue-dark)] transition-colors duration-200">
                <Filter className="w-4 h-4" />
                Filter
              </button>
            </div>
          </motion.div>

          <motion.div
            className="grid lg:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {openPositions.map((position, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm border border-[var(--border-color)] hover:shadow-md transition-shadow duration-300"
                variants={fadeInUp}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-[var(--text-900)] mb-1">
                      {position.title}
                    </h3>
                    <p className="text-[var(--brand-blue)] font-medium">
                      {position.department}
                    </p>
                  </div>
                  <span className="px-3 py-1 bg-[var(--accent-green)]/10 text-[var(--accent-green-dark)] text-sm rounded-full">
                    {position.type}
                  </span>
                </div>

                <p className="text-[var(--text-600)] mb-4">
                  {position.description}
                </p>

                <div className="flex items-center gap-4 text-sm text-[var(--text-600)] mb-4">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>{position.location}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-medium text-[var(--text-900)] mb-2">Requirements:</h4>
                  <ul className="text-sm text-[var(--text-600)] space-y-1">
                    {position.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-[var(--brand-blue)] rounded-full flex-shrink-0" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full px-6 py-3 bg-[var(--brand-blue)] text-white font-medium rounded-lg hover:bg-[var(--brand-blue-dark)] transition-colors duration-200">
                  Apply Now
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 lg:py-20 bg-[var(--surface)]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-8">
          <motion.div
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-[var(--text-900)] mb-6">
              Ready to Make an Impact?
            </h2>
            <p className="text-lg text-[var(--text-600)] mb-8">
              Join a team that's passionate about advancing healthcare and improving lives worldwide.
              We welcome diverse perspectives and fresh ideas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-[var(--brand-blue)] text-white font-semibold rounded-lg hover:bg-[var(--brand-blue-dark)] transition-colors duration-200">
                View All Positions
              </button>
              <button className="px-8 py-4 border-2 border-[var(--brand-blue)] text-[var(--brand-blue)] font-semibold rounded-lg hover:bg-[var(--brand-blue)] hover:text-white transition-colors duration-200">
                Upload Resume
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}