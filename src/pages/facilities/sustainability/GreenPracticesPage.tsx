import { motion } from 'framer-motion';
import { Leaf, Droplet, Zap, Recycle, TreePine, Wind, Sun, Factory, BarChart3, Target, Award, Users } from 'lucide-react';

export function GreenPracticesPage() {
  const sustainabilityPillars = [
    {
      icon: Leaf,
      title: 'Environmental Stewardship',
      description: 'Comprehensive environmental management systems reducing our ecological footprint',
      initiatives: ['Carbon emission monitoring', 'Waste reduction programs', 'Energy conservation', 'Water recycling systems']
    },
    {
      icon: Recycle,
      title: 'Waste Management',
      description: 'Advanced waste treatment and recycling programs minimizing environmental impact',
      initiatives: ['Hazardous waste treatment', 'Plastic waste recycling', 'Packaging optimization', 'Circular economy practices']
    },
    {
      icon: Zap,
      title: 'Energy Efficiency',
      description: 'Renewable energy adoption and energy-efficient manufacturing processes',
      initiatives: ['Solar power generation', 'LED lighting systems', 'HVAC optimization', 'Smart energy management']
    },
    {
      icon: Droplet,
      title: 'Water Conservation',
      description: 'Water-efficient processes and wastewater treatment for sustainable water use',
      initiatives: ['Water recycling systems', 'Rainwater harvesting', 'Process water optimization', 'Zero liquid discharge']
    },
    {
      icon: TreePine,
      title: 'Biodiversity Protection',
      description: 'Preservation of local ecosystems and promotion of biodiversity around our facilities',
      initiatives: ['Green belt development', 'Wildlife conservation', 'Native plant restoration', 'Environmental education']
    },
    {
      icon: Factory,
      title: 'Sustainable Manufacturing',
      description: 'Eco-friendly production processes minimizing resource consumption and emissions',
      initiatives: ['Green chemistry principles', 'Sustainable sourcing', 'Life cycle assessment', 'Carbon footprint reduction']
    }
  ];

  const greenMetrics = [
    {
      metric: '45%',
      label: 'Reduction in Carbon Emissions',
      description: 'Since 2020 baseline',
      icon: BarChart3
    },
    {
      metric: '60%',
      label: 'Renewable Energy Usage',
      description: 'Of total energy consumption',
      icon: Sun
    },
    {
      metric: '80%',
      label: 'Water Recycling Rate',
      description: 'Process water recycled',
      icon: Droplet
    },
    {
      metric: '95%',
      label: 'Waste Recovery Rate',
      description: 'Industrial waste recovered',
      icon: Recycle
    }
  ];

  const greenInitiatives = [
    {
      title: 'Solar Power Generation',
      description: 'Installed 2.5 MW solar power plant providing 60% of facility energy needs',
      impact: 'Reduced CO2 emissions by 3,200 tons annually',
      status: 'Completed 2023'
    },
    {
      title: 'Zero Liquid Discharge',
      description: 'Advanced wastewater treatment plant achieving 100% water recycling',
      impact: 'Conserved 2.5 million liters of water daily',
      status: 'Operational'
    },
    {
      title: 'Green Building Certification',
      description: 'LEED Gold certification for all new facility constructions',
      impact: '30% reduction in building energy consumption',
      status: 'Achieved 2023'
    },
    {
      title: 'Sustainable Packaging',
      description: 'Transitioned to 100% recyclable and biodegradable packaging materials',
      impact: 'Eliminated 500 tons of plastic waste annually',
      status: 'Completed 2024'
    },
    {
      title: 'Carbon Neutral Operations',
      description: 'Offsetting remaining emissions through reforestation and renewable projects',
      impact: 'Achieved carbon neutrality for Scope 1 & 2 emissions',
      status: 'Target 2025'
    },
    {
      title: 'Biodiversity Corridor',
      description: 'Created 50-acre green corridor connecting local wildlife habitats',
      impact: 'Protected habitat for 200+ species',
      status: 'Ongoing'
    }
  ];

  const certifications = [
    'ISO 14001:2015 Environmental Management',
    'ISO 50001:2018 Energy Management',
    'LEED Gold Building Certification',
    'Carbon Trust Standard',
    'Water Stewardship Certification'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-green-800 text-white py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="green-pattern" width="60" height="60" patternUnits="userSpaceOnUse">
                <circle cx="30" cy="30" r="2" fill="white"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#green-pattern)" />
          </svg>
        </div>

        <div className="relative max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm mb-6">
              <span className="text-sm tracking-wide">SUSTAINABILITY</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">
              Green Practices & Sustainability
            </h1>
            <p className="text-lg text-white/80 leading-relaxed mb-8">
              Our commitment to environmental sustainability drives every aspect of our operations.
              From renewable energy adoption to waste reduction programs, we strive to minimize
              our environmental impact while maintaining pharmaceutical excellence.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg text-center">
                <div className="text-2xl font-bold">45%</div>
                <div className="text-xs text-white/80">Carbon Reduction</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg text-center">
                <div className="text-2xl font-bold">60%</div>
                <div className="text-xs text-white/80">Renewable Energy</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg text-center">
                <div className="text-2xl font-bold">80%</div>
                <div className="text-xs text-white/80">Water Recycled</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg text-center">
                <div className="text-2xl font-bold">95%</div>
                <div className="text-xs text-white/80">Waste Recovered</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sustainability Pillars */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-2 bg-green-50 text-green-700 mb-4">
              <span className="text-sm tracking-wide">OUR APPROACH</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-4">
              Pillars of Environmental Sustainability
            </h2>
            <p className="text-lg text-[var(--text-900)]/60 max-w-3xl mx-auto">
              Our comprehensive sustainability framework addresses all aspects of environmental
              responsibility in pharmaceutical manufacturing.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {sustainabilityPillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[var(--surface)] border border-[var(--border-color)] p-8 rounded-xl hover:border-green-300 transition-colors"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <pillar.icon className="text-green-600" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl text-[var(--text-900)] mb-2">{pillar.title}</h3>
                    <p className="text-[var(--text-900)]/70 mb-4">{pillar.description}</p>
                    <ul className="space-y-2">
                      {pillar.initiatives.map((initiative, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-[var(--text-900)]/60">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                          <span>{initiative}</span>
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

      {/* Green Metrics */}
      <section className="py-20 md:py-32 bg-green-50">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-6">
              Environmental Impact Metrics
            </h2>
            <p className="text-lg text-[var(--text-900)]/60 max-w-3xl mx-auto">
              Quantifiable results demonstrating our commitment to environmental sustainability
              and continuous improvement.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {greenMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl border border-green-200 shadow-sm text-center"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <metric.icon className="text-green-600" size={28} />
                </div>
                <div className="text-3xl font-bold text-green-600 mb-2">{metric.metric}</div>
                <div className="text-lg text-[var(--text-900)] mb-2">{metric.label}</div>
                <div className="text-sm text-[var(--text-900)]/60">{metric.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Green Initiatives */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-2 bg-green-50 text-green-700 mb-4">
              <span className="text-sm tracking-wide">INITIATIVES</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-4">
              Key Sustainability Projects
            </h2>
            <p className="text-lg text-[var(--text-900)]/60 max-w-3xl mx-auto">
              Major initiatives driving our environmental sustainability goals and demonstrating
              our commitment to responsible pharmaceutical manufacturing.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {greenInitiatives.map((initiative, index) => (
              <motion.div
                key={initiative.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[var(--surface)] border border-[var(--border-color)] p-8 rounded-xl hover:border-green-300 transition-colors"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl text-[var(--text-900)]">{initiative.title}</h3>
                  <span className={`px-3 py-1 text-xs rounded-full ${
                    initiative.status === 'Completed 2023' || initiative.status === 'Completed 2024' || initiative.status === 'Operational'
                      ? 'bg-green-50 text-green-700'
                      : initiative.status === 'Target 2025'
                      ? 'bg-blue-50 text-blue-700'
                      : 'bg-yellow-50 text-yellow-700'
                  }`}>
                    {initiative.status}
                  </span>
                </div>

                <p className="text-[var(--text-900)]/70 mb-4">{initiative.description}</p>

                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="text-sm text-green-700">
                    <strong>Impact:</strong> {initiative.impact}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 md:py-32 bg-green-50">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-6">
              Environmental Certifications
            </h2>
            <p className="text-lg text-[var(--text-900)]/60 max-w-3xl mx-auto">
              Recognized certifications validating our environmental management systems
              and sustainability practices.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl border border-green-200 text-center hover:shadow-md transition-shadow"
              >
                <Award className="text-green-600 mx-auto mb-3" size={32} />
                <h3 className="text-lg text-[var(--text-900)]">{cert}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Goals */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-green-600 to-green-800 text-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl mb-6">
              Sustainability Roadmap 2025-2030
            </h2>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              Our ambitious goals for the next decade focus on achieving carbon neutrality,
              zero waste to landfill, and becoming a leader in sustainable pharmaceuticals.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                year: '2025',
                goal: 'Carbon Neutral Operations',
                description: 'Achieve net-zero carbon emissions across all facilities'
              },
              {
                year: '2027',
                goal: 'Zero Waste to Landfill',
                description: '100% waste recovery and recycling across operations'
              },
              {
                year: '2030',
                goal: 'Water Positive',
                description: 'Return more water to the environment than consumed'
              }
            ].map((goal, index) => (
              <motion.div
                key={goal.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20"
              >
                <div className="text-2xl font-bold mb-2">{goal.year}</div>
                <h3 className="text-xl mb-3">{goal.goal}</h3>
                <p className="text-white/80 leading-relaxed">{goal.description}</p>
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
            <Leaf className="mx-auto mb-6 text-green-600" size={48} />
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-6">
              Join Our Sustainability Journey
            </h2>
            <p className="text-lg text-[var(--text-900)]/60 mb-8 max-w-2xl mx-auto">
              Partner with us in building a sustainable future for pharmaceuticals.
              Contact our sustainability team to learn more about our green initiatives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center justify-center gap-2 bg-green-600 text-white hover:bg-green-700 px-8 py-4 text-sm tracking-wide transition-colors duration-150">
                <span>SCHEDULE SUSTAINABILITY TOUR</span>
              </button>
              <button className="inline-flex items-center justify-center gap-2 border border-[var(--border-color)] text-[var(--text-900)] hover:bg-[var(--surface)] px-8 py-4 text-sm tracking-wide transition-colors duration-150">
                <span>CONTACT SUSTAINABILITY TEAM</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}