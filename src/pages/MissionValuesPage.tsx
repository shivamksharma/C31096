import React from 'react';
import { motion } from 'framer-motion';
import { Target, Heart, Users, Award, Lightbulb, Shield } from 'lucide-react';

export function MissionValuesPage() {
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

  const values = [
    {
      icon: Heart,
      title: 'Patient-Centric Care',
      description: 'Every decision we make prioritizes patient safety, accessibility, and well-being above all else.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We continuously push boundaries in pharmaceutical research and development to bring breakthrough treatments to market.'
    },
    {
      icon: Shield,
      title: 'Quality Excellence',
      description: 'Uncompromising commitment to the highest standards of quality, safety, and regulatory compliance.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Building strong partnerships with healthcare providers, researchers, and communities worldwide.'
    },
    {
      icon: Award,
      title: 'Integrity',
      description: 'Operating with transparency, ethical practices, and accountability in everything we do.'
    },
    {
      icon: Target,
      title: 'Sustainability',
      description: 'Committed to environmentally responsible practices and social responsibility initiatives.'
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
              Mission & Values
            </motion.h1>
            <motion.p
              className="text-xl lg:text-2xl opacity-90 leading-relaxed"
              {...fadeInUp}
              transition={{ delay: 0.2 }}
            >
              Driving pharmaceutical innovation with purpose, integrity, and unwavering commitment to patient care.
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Mission Statement */}
      <section className="py-20 lg:py-28">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-8">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-[var(--text-900)] mb-8">
              Our Mission
            </h2>
            <div className="bg-gradient-to-r from-[var(--brand-blue)] to-[var(--brand-blue-dark)] p-8 lg:p-12 rounded-2xl text-white">
              <Target className="w-16 h-16 mx-auto mb-6 opacity-90" />
              <p className="text-xl lg:text-2xl leading-relaxed font-medium">
                To advance global healthcare through innovative pharmaceutical solutions that improve patient outcomes,
                enhance quality of life, and contribute to the well-being of communities worldwide.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 lg:py-28 bg-[var(--surface)]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-[var(--text-900)] mb-6">
              Our Core Values
            </h2>
            <p className="text-lg text-[var(--text-600)] max-w-2xl mx-auto">
              The principles that guide our decisions, shape our culture, and define our commitment to excellence.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm border border-[var(--border-color)] hover:shadow-md transition-shadow duration-300"
                variants={fadeInUp}
              >
                <div className="w-12 h-12 bg-[var(--brand-blue)] rounded-lg flex items-center justify-center mb-6">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[var(--text-900)] mb-4">
                  {value.title}
                </h3>
                <p className="text-[var(--text-600)] leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-20 lg:py-28">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-8">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-[var(--text-900)] mb-8">
              Our Vision
            </h2>
            <div className="bg-gradient-to-r from-[var(--accent-green)] to-[var(--accent-green-dark)] p-8 lg:p-12 rounded-2xl text-white">
              <Lightbulb className="w-16 h-16 mx-auto mb-6 opacity-90" />
              <p className="text-xl lg:text-2xl leading-relaxed font-medium">
                To be a global leader in pharmaceutical innovation, recognized for our commitment to scientific excellence,
                ethical practices, and meaningful contributions to healthcare advancement.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-20 lg:py-28 bg-[var(--surface)]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-8">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-[var(--text-900)] mb-8">
              Our Commitment
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-[var(--border-color)]">
                <Shield className="w-12 h-12 text-[var(--brand-blue)] mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-[var(--text-900)] mb-4">Quality First</h3>
                <p className="text-[var(--text-600)]">
                  Every product we develop undergoes rigorous testing and adheres to the highest international standards.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm border border-[var(--border-color)]">
                <Users className="w-12 h-12 text-[var(--brand-blue)] mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-[var(--text-900)] mb-4">Patient Focus</h3>
                <p className="text-[var(--text-600)]">
                  We prioritize patient needs in every aspect of our research, development, and manufacturing processes.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}