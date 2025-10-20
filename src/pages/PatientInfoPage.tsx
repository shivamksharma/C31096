import { motion } from 'framer-motion';
import { User, FileText, Download, Search, Heart, Pill, Activity, Shield, BookOpen, Video, MessageCircle, Phone, Mail, Calendar, CheckCircle, AlertTriangle } from 'lucide-react';

export function PatientInfoPage() {
  const patientResources = [
    {
      title: 'Understanding Your Medication',
      description: 'Learn how to take your medication safely and effectively',
      category: 'Medication Guides',
      type: 'Guide',
      language: 'English',
      format: 'PDF',
      featured: true
    },
    {
      title: 'Cardiovascular Health Guide',
      description: 'Comprehensive information about heart health and treatment',
      category: 'Disease Information',
      type: 'Brochure',
      language: 'English',
      format: 'PDF',
      featured: true
    },
    {
      title: 'Diabetes Management',
      description: 'Tips for managing diabetes and blood sugar levels',
      category: 'Disease Information',
      type: 'Guide',
      language: 'English',
      format: 'PDF',
      featured: true
    },
    {
      title: 'Pain Management Options',
      description: 'Understanding different approaches to pain relief',
      category: 'Treatment Information',
      type: 'Brochure',
      language: 'English',
      format: 'PDF',
      featured: false
    },
    {
      title: 'Antibiotic Safety',
      description: 'Important information about antibiotic use and resistance',
      category: 'Medication Safety',
      type: 'Guide',
      language: 'English',
      format: 'PDF',
      featured: false
    },
    {
      title: 'Medication Storage Guide',
      description: 'How to properly store your medications at home',
      category: 'Medication Safety',
      type: 'Infographic',
      language: 'English',
      format: 'PDF',
      featured: false
    }
  ];

  const videoResources = [
    {
      title: 'How to Take Your Medication',
      duration: '3:45',
      description: 'Step-by-step guide for proper medication administration',
      thumbnail: '/api/placeholder/300/200'
    },
    {
      title: 'Understanding Side Effects',
      duration: '5:20',
      description: 'What to expect and when to contact your doctor',
      thumbnail: '/api/placeholder/300/200'
    },
    {
      title: 'Healthy Lifestyle Tips',
      duration: '4:15',
      description: 'Diet and exercise recommendations for better health',
      thumbnail: '/api/placeholder/300/200'
    }
  ];

  const faqs = [
    {
      question: 'How do I know if my medication is working?',
      answer: 'Monitor your symptoms and follow up with your healthcare provider regularly. Keep a journal of how you feel and any side effects you experience.',
      category: 'General'
    },
    {
      question: 'What should I do if I miss a dose?',
      answer: 'If you miss a dose, take it as soon as you remember. If it\'s almost time for your next dose, skip the missed dose and continue with your regular schedule.',
      category: 'Medication Use'
    },
    {
      question: 'Can I drink alcohol while taking my medication?',
      answer: 'Alcohol interactions vary by medication. Check with your doctor or pharmacist, and read the medication guide for specific instructions.',
      category: 'Lifestyle'
    },
    {
      question: 'How should I store my medications?',
      answer: 'Most medications should be stored at room temperature, away from moisture, heat, and direct light. Some require refrigeration - check the label.',
      category: 'Storage'
    },
    {
      question: 'What are common side effects?',
      answer: 'Side effects vary by medication. Common ones include nausea, dizziness, or fatigue. Contact your doctor if side effects are severe or persistent.',
      category: 'Side Effects'
    }
  ];

  const supportServices = [
    {
      title: 'Patient Support Hotline',
      description: 'Speak with a patient support specialist',
      contact: '1-800-EDIF-HELP',
      hours: 'Mon-Fri 8AM-8PM EST',
      icon: Phone
    },
    {
      title: 'Email Support',
      description: 'Send us your questions via email',
      contact: 'patientsupport@edifpharma.com',
      hours: '24/7 Response within 24 hours',
      icon: Mail
    },
    {
      title: 'Live Chat',
      description: 'Chat with a support representative online',
      contact: 'Available on website',
      hours: 'Mon-Fri 9AM-6PM EST',
      icon: MessageCircle
    }
  ];

  const categories = [
    { name: 'All Resources', count: 24, icon: FileText },
    { name: 'Medication Guides', count: 8, icon: Pill },
    { name: 'Disease Information', count: 6, icon: Heart },
    { name: 'Treatment Information', count: 5, icon: Activity },
    { name: 'Medication Safety', count: 5, icon: Shield }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--brand-blue)] to-[#0d3c75] text-white py-20 md:py-32">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm mb-6">
              <span className="text-sm tracking-wide">PATIENT RESOURCES</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">
              Information for Patients
            </h1>
            <p className="text-lg text-white/80 leading-relaxed">
              Access comprehensive patient information, medication guides, educational materials,
              and support resources to help you understand and manage your health effectively.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Categories */}
      <section className="py-12 bg-[var(--surface)] border-b border-[var(--border-color)]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-6 mb-8">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-900)]/40" size={20} strokeWidth={2} />
                <input
                  type="text"
                  placeholder="Search patient resources..."
                  className="w-full pl-10 pr-4 py-3 border border-[var(--border-color)] bg-white focus:outline-none focus:ring-2 focus:ring-[var(--brand-blue)] focus:border-transparent"
                />
              </div>
            </div>
            <div className="flex gap-3">
              <select className="px-4 py-3 border border-[var(--border-color)] bg-white focus:outline-none focus:ring-2 focus:ring-[var(--brand-blue)] focus:border-transparent">
                <option>All Categories</option>
                <option>Medication Guides</option>
                <option>Disease Information</option>
                <option>Treatment Information</option>
                <option>Medication Safety</option>
              </select>
              <select className="px-4 py-3 border border-[var(--border-color)] bg-white focus:outline-none focus:ring-2 focus:ring-[var(--brand-blue)] focus:border-transparent">
                <option>All Languages</option>
                <option>English</option>
                <option>Spanish</option>
                <option>French</option>
              </select>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            {categories.map((category, index) => (
              <motion.button
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-3 px-4 py-3 bg-white border border-[var(--border-color)] hover:border-[var(--brand-blue)] hover:bg-[var(--brand-blue)]/5 transition-colors duration-150"
              >
                <category.icon className="text-[var(--brand-blue)]" size={18} strokeWidth={2} />
                <span className="text-sm text-[var(--text-900)] font-medium">{category.name}</span>
                <span className="text-xs text-[var(--text-900)]/60 bg-[var(--brand-blue)]/10 px-2 py-1">
                  {category.count}
                </span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="inline-block px-4 py-2 bg-[var(--brand-blue)]/10 mb-4">
              <span className="text-sm text-[var(--brand-blue)] tracking-wide">FEATURED</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-4">
              Most Popular Resources
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {patientResources.filter(r => r.featured).map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-[var(--brand-blue)] to-[#0a3a72] text-white p-8"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-white/10 flex items-center justify-center flex-shrink-0">
                    <BookOpen size={24} strokeWidth={2} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="inline-block px-2 py-1 bg-white/20 text-white text-xs font-medium">
                        {resource.category}
                      </span>
                      <span className="text-xs text-white/80">{resource.format}</span>
                    </div>
                    <h3 className="text-lg mb-2">{resource.title}</h3>
                    <p className="text-sm text-white/90 mb-3">{resource.description}</p>
                    <p className="text-xs text-white/70">{resource.language}</p>
                  </div>
                </div>
                <button className="w-full bg-white text-[var(--brand-blue)] hover:bg-white/90 active:bg-white/95 px-4 py-3 text-sm tracking-wide transition-colors duration-150">
                  Download Resource
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Resources */}
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
              <span className="text-sm text-[var(--brand-blue)] tracking-wide">ALL RESOURCES</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-4">
              Complete Resource Library
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {patientResources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white border border-[var(--border-color)] p-6"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 bg-[var(--brand-blue)]/10 flex items-center justify-center flex-shrink-0">
                    <BookOpen className="text-[var(--brand-blue)]" size={20} strokeWidth={2} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="inline-block px-2 py-1 bg-[var(--brand-blue)]/10 text-[var(--brand-blue)] text-xs font-medium">
                        {resource.category}
                      </span>
                      <span className="text-xs text-[var(--text-900)]/60">{resource.format}</span>
                    </div>
                    <h3 className="text-lg text-[var(--text-900)] mb-1">{resource.title}</h3>
                    <p className="text-sm text-[var(--text-900)]/70 mb-2">{resource.description}</p>
                    <p className="text-xs text-[var(--text-900)]/60">{resource.language}</p>
                  </div>
                </div>
                <button className="w-full bg-[var(--brand-blue)] text-white hover:bg-[var(--brand-blue)]/85 active:bg-[var(--brand-blue)]/95 px-4 py-2 text-sm tracking-wide transition-colors duration-150">
                  <Download size={16} strokeWidth={2} />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Resources */}
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
              <span className="text-sm text-[var(--brand-blue)] tracking-wide">VIDEO LIBRARY</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-4">
              Educational Videos
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {videoResources.map((video, index) => (
              <motion.div
                key={video.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[var(--surface)] border border-[var(--border-color)] overflow-hidden"
              >
                <div className="aspect-video bg-[var(--brand-blue)]/10 flex items-center justify-center">
                  <Video className="text-[var(--brand-blue)]" size={48} strokeWidth={2} />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="inline-block px-2 py-1 bg-[var(--brand-blue)]/10 text-[var(--brand-blue)] text-xs font-medium">
                      {video.duration}
                    </span>
                  </div>
                  <h3 className="text-lg text-[var(--text-900)] mb-2">{video.title}</h3>
                  <p className="text-sm text-[var(--text-900)]/70 mb-4">{video.description}</p>
                  <button className="w-full bg-[var(--brand-blue)] text-white hover:bg-[var(--brand-blue)]/85 active:bg-[var(--brand-blue)]/95 px-4 py-3 text-sm tracking-wide transition-colors duration-150">
                    Watch Video
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
              <span className="text-sm text-[var(--brand-blue)] tracking-wide">FREQUENTLY ASKED QUESTIONS</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-4">
              Common Questions
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white border border-[var(--border-color)] p-6"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-6 h-6 bg-[var(--brand-blue)]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="text-[var(--brand-blue)]" size={14} strokeWidth={2} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg text-[var(--text-900)] mb-2">{faq.question}</h3>
                    <p className="text-sm text-[var(--text-900)]/70">{faq.answer}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Services */}
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
              <span className="text-sm text-[var(--brand-blue)] tracking-wide">PATIENT SUPPORT</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-4">
              Get Help & Support
            </h2>
            <p className="text-lg text-[var(--text-900)]/60 max-w-2xl mx-auto">
              Our patient support team is here to help you with questions about your medication,
              treatment, or any concerns you may have.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {supportServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[var(--surface)] border border-[var(--border-color)] p-8 text-center"
              >
                <div className="w-16 h-16 bg-[var(--brand-blue)]/10 flex items-center justify-center mx-auto mb-4">
                  <service.icon className="text-[var(--brand-blue)]" size={32} strokeWidth={2} />
                </div>
                <h3 className="text-lg text-[var(--text-900)] mb-2">{service.title}</h3>
                <p className="text-sm text-[var(--text-900)]/70 mb-3">{service.description}</p>
                <p className="text-sm text-[var(--brand-blue)] font-medium mb-2">{service.contact}</p>
                <p className="text-xs text-[var(--text-900)]/60">{service.hours}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Notice */}
      <section className="py-12 bg-red-50 border-t border-red-200">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="bg-red-50 border border-red-200 p-6">
            <div className="flex items-start gap-3">
              <AlertTriangle className="text-red-600 mt-0.5" size={20} strokeWidth={2} />
              <div>
                <h3 className="text-sm font-medium text-red-800 mb-1">Medical Emergency</h3>
                <p className="text-sm text-red-700">
                  If you are experiencing a medical emergency, call emergency services (911) immediately
                  or go to the nearest emergency room. Do not rely on this website for emergency medical advice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}