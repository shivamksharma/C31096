import { motion } from 'framer-motion';
import { Shield, AlertTriangle, FileText, Download, Search, Heart, Pill, Activity, CheckCircle, XCircle, Info, Phone, Mail, Calendar, ExternalLink, BookOpen } from 'lucide-react';

export function SafetyInfoPage() {
  const safetyTopics = [
    {
      title: 'Medication Safety Guidelines',
      description: 'Essential information for safe medication use',
      category: 'General Safety',
      type: 'Guide',
      priority: 'High',
      featured: true
    },
    {
      title: 'Recognizing Side Effects',
      description: 'How to identify and manage medication side effects',
      category: 'Side Effects',
      type: 'Guide',
      priority: 'High',
      featured: true
    },
    {
      title: 'Drug Interactions',
      description: 'Understanding how medications interact with each other',
      category: 'Interactions',
      type: 'Reference',
      priority: 'High',
      featured: true
    },
    {
      title: 'Storage & Handling',
      description: 'Proper storage and handling of medications',
      category: 'Storage',
      type: 'Guide',
      priority: 'Medium',
      featured: false
    },
    {
      title: 'Allergy Information',
      description: 'Important information about medication allergies',
      category: 'Allergies',
      type: 'Guide',
      priority: 'High',
      featured: false
    },
    {
      title: 'Pregnancy & Breastfeeding',
      description: 'Medication safety during pregnancy and breastfeeding',
      category: 'Special Populations',
      type: 'Guide',
      priority: 'High',
      featured: false
    }
  ];

  const safetyAlerts = [
    {
      title: 'Important Safety Update: CardioVita™',
      description: 'Updated contraindications for patients with severe renal impairment',
      type: 'Safety Update',
      date: 'October 20, 2025',
      severity: 'Important',
      product: 'CardioVita™ (Amlodipine)'
    },
    {
      title: 'Recall Notice: GlucoNorm™ Lot 2025A',
      description: 'Voluntary recall due to potential contamination - contact your pharmacist',
      type: 'Recall',
      date: 'October 15, 2025',
      severity: 'Critical',
      product: 'GlucoNorm™ (Metformin HCl)'
    },
    {
      title: 'Label Update: BactroShield™',
      description: 'Updated pediatric dosing information now available',
      type: 'Label Update',
      date: 'October 10, 2025',
      severity: 'Important',
      product: 'BactroShield™ (Amoxicillin)'
    }
  ];

  const safetyTips = [
    {
      title: 'Always Read the Label',
      description: 'Check medication labels carefully before each use',
      icon: FileText
    },
    {
      title: 'Keep a Medication List',
      description: 'Maintain an updated list of all medications you take',
      icon: CheckCircle
    },
    {
      title: 'Report Side Effects',
      description: 'Contact your healthcare provider about any unexpected symptoms',
      icon: AlertTriangle
    },
    {
      title: 'Store Properly',
      description: 'Keep medications in their original containers at proper temperatures',
      icon: Shield
    },
    {
      title: 'Check Expiration Dates',
      description: 'Do not use medications past their expiration date',
      icon: Calendar
    },
    {
      title: 'Ask Questions',
      description: 'Always ask your pharmacist or doctor about any concerns',
      icon: Info
    }
  ];

  const emergencyContacts = [
    {
      title: 'Poison Control Center',
      number: '1-800-222-1222',
      description: 'For poisoning emergencies and medication overdose',
      available: '24/7'
    },
    {
      title: 'FDA MedWatch',
      number: '1-800-FDA-1088',
      description: 'Report serious adverse events and medication errors',
      available: '24/7'
    },
    {
      title: 'PharmaCorp Safety Line',
      number: '1-800-PC-SAFE',
      description: 'Report adverse events and product safety concerns',
      available: 'Mon-Fri 8AM-8PM EST'
    }
  ];

  const getSeverityColor = (severity: string) => {
    const colors: Record<string, string> = {
      'Critical': 'bg-red-50 text-red-700 border-red-200',
      'Important': 'bg-yellow-50 text-yellow-700 border-yellow-200',
      'Info': 'bg-blue-50 text-blue-700 border-blue-200'
    };
    return colors[severity] || 'bg-gray-50 text-gray-700 border-gray-200';
  };

  const getPriorityColor = (priority: string) => {
    const colors: Record<string, string> = {
      'High': 'bg-red-50 text-red-700',
      'Medium': 'bg-yellow-50 text-yellow-700',
      'Low': 'bg-green-50 text-green-700'
    };
    return colors[priority] || 'bg-gray-50 text-gray-700';
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-600 to-red-800 text-white py-20 md:py-32">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm mb-6">
              <span className="text-sm tracking-wide">MEDICATION SAFETY</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">
              Your Safety First
            </h1>
            <p className="text-lg text-white/80 leading-relaxed">
              Access comprehensive safety information, usage guidelines, and important alerts
              to ensure safe and effective use of PharmaCorp medications.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Safety Alerts - Critical */}
      <section className="py-12 bg-red-50 border-b border-red-200">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex items-center gap-3 mb-6">
            <AlertTriangle className="text-red-600" size={24} strokeWidth={2} />
            <h2 className="text-2xl text-red-800 font-semibold">Critical Safety Alerts</h2>
          </div>

          <div className="space-y-4">
            {safetyAlerts.filter(alert => alert.severity === 'Critical').map((alert, index) => (
              <motion.div
                key={alert.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`border-l-4 p-6 ${getSeverityColor(alert.severity)}`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold">{alert.title}</h3>
                      <span className={`inline-block px-2 py-1 text-xs font-medium ${getSeverityColor(alert.severity)}`}>
                        {alert.severity}
                      </span>
                    </div>
                    <p className="text-sm mb-2">{alert.description}</p>
                    <div className="flex items-center gap-4 text-xs opacity-75">
                      <span>{alert.product}</span>
                      <span>{alert.date}</span>
                    </div>
                  </div>
                  <button className="bg-red-600 text-white hover:bg-red-700 px-4 py-2 text-sm transition-colors duration-150">
                    View Details
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
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
                  placeholder="Search safety information..."
                  className="w-full pl-10 pr-4 py-3 border border-[var(--border-color)] bg-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>
            </div>
            <div className="flex gap-3">
              <select className="px-4 py-3 border border-[var(--border-color)] bg-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent">
                <option>All Categories</option>
                <option>General Safety</option>
                <option>Side Effects</option>
                <option>Interactions</option>
                <option>Storage</option>
                <option>Allergies</option>
                <option>Special Populations</option>
              </select>
              <select className="px-4 py-3 border border-[var(--border-color)] bg-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent">
                <option>All Types</option>
                <option>Guide</option>
                <option>Reference</option>
                <option>Alert</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Topics */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-2 bg-red-100 mb-4">
              <span className="text-sm text-red-700 tracking-wide">SAFETY RESOURCES</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-4">
              Safety Information & Guidelines
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {safetyTopics.map((topic, index) => (
              <motion.div
                key={topic.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-[var(--surface)] border border-[var(--border-color)] p-6"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-red-100 flex items-center justify-center flex-shrink-0">
                    <Shield className="text-red-600" size={24} strokeWidth={2} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`inline-block px-2 py-1 text-xs font-medium ${getPriorityColor(topic.priority)}`}>
                        {topic.priority} Priority
                      </span>
                      <span className="text-xs text-[var(--text-900)]/60">{topic.type}</span>
                    </div>
                    <h3 className="text-lg text-[var(--text-900)] mb-1">{topic.title}</h3>
                    <p className="text-sm text-[var(--text-900)]/70 mb-2">{topic.description}</p>
                    <p className="text-xs text-[var(--text-900)]/60">{topic.category}</p>
                  </div>
                </div>
                <button className="w-full bg-red-600 text-white hover:bg-red-700 active:bg-red-800 px-4 py-2 text-sm tracking-wide transition-colors duration-150">
                  <Download size={16} strokeWidth={2} className="inline mr-2" />
                  Download Guide
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Tips */}
      <section className="py-20 md:py-32 bg-[var(--surface)]">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-2 bg-red-100 mb-4">
              <span className="text-sm text-red-700 tracking-wide">SAFETY TIPS</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-4">
              Essential Safety Practices
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {safetyTips.map((tip, index) => (
              <motion.div
                key={tip.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white border border-[var(--border-color)] p-6"
              >
                <div className="w-12 h-12 bg-red-100 flex items-center justify-center mb-4">
                  <tip.icon className="text-red-600" size={24} strokeWidth={2} />
                </div>
                <h3 className="text-lg text-[var(--text-900)] mb-2">{tip.title}</h3>
                <p className="text-sm text-[var(--text-900)]/70">{tip.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Alerts - All */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-2 bg-red-100 mb-4">
              <span className="text-sm text-red-700 tracking-wide">SAFETY ALERTS</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-4">
              Current Safety Alerts & Updates
            </h2>
          </motion.div>

          <div className="space-y-4">
            {safetyAlerts.map((alert, index) => (
              <motion.div
                key={alert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className={`border-l-4 p-6 ${getSeverityColor(alert.severity)}`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold">{alert.title}</h3>
                      <span className={`inline-block px-2 py-1 text-xs font-medium ${getSeverityColor(alert.severity)}`}>
                        {alert.severity}
                      </span>
                      <span className="inline-block px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium">
                        {alert.type}
                      </span>
                    </div>
                    <p className="text-sm mb-2">{alert.description}</p>
                    <div className="flex items-center gap-4 text-xs opacity-75">
                      <span>{alert.product}</span>
                      <span>{alert.date}</span>
                    </div>
                  </div>
                  <button className="bg-red-600 text-white hover:bg-red-700 px-4 py-2 text-sm transition-colors duration-150">
                    View Details
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contacts */}
      <section className="py-20 md:py-32 bg-red-50">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-2 bg-red-100 mb-4">
              <span className="text-sm text-red-700 tracking-wide">EMERGENCY CONTACTS</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-red-800 mb-4">
              Emergency & Support Contacts
            </h2>
            <p className="text-lg text-red-700 max-w-2xl mx-auto">
              In case of emergency or if you experience serious side effects,
              contact these services immediately.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {emergencyContacts.map((contact, index) => (
              <motion.div
                key={contact.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-red-200 p-8 text-center"
              >
                <div className="w-16 h-16 bg-red-100 flex items-center justify-center mx-auto mb-4">
                  <Phone className="text-red-600" size={32} strokeWidth={2} />
                </div>
                <h3 className="text-lg text-red-800 mb-2">{contact.title}</h3>
                <p className="text-2xl font-bold text-red-600 mb-2">{contact.number}</p>
                <p className="text-sm text-red-700 mb-2">{contact.description}</p>
                <p className="text-xs text-red-600 font-medium">{contact.available}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Report Adverse Events */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-6">
              Report Safety Concerns
            </h2>
            <p className="text-lg text-[var(--text-900)]/60 mb-8 max-w-2xl mx-auto">
              Help us maintain the highest safety standards. Report any adverse events,
              side effects, or safety concerns you experience with our medications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center justify-center gap-2 bg-red-600 text-white hover:bg-red-700 active:bg-red-800 px-8 py-4 text-sm tracking-wide transition-colors duration-150">
                <span>Report Adverse Event</span>
              </button>
              <button className="inline-flex items-center justify-center gap-2 border border-red-600 text-red-600 hover:bg-red-50 px-8 py-4 text-sm tracking-wide transition-colors duration-150">
                <span>Contact Safety Team</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}