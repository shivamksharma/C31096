import { useEffect, useState } from 'react';

export function TrustStrip() {
  const [counts, setCounts] = useState({ facilities: 0, countries: 0, products: 0 });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            // Animate counters
            const duration = 1500;
            const steps = 60;
            const interval = duration / steps;

            const targets = { facilities: 3, countries: 45, products: 120 };

            let currentStep = 0;
            const timer = setInterval(() => {
              currentStep++;
              const progress = currentStep / steps;
              
              setCounts({
                facilities: Math.floor(targets.facilities * progress),
                countries: Math.floor(targets.countries * progress),
                products: Math.floor(targets.products * progress),
              });

              if (currentStep >= steps) {
                setCounts(targets);
                clearInterval(timer);
              }
            }, interval);

            return () => clearInterval(timer);
          }
        });
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById('trust-strip');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section
      id="trust-strip"
      className="relative bg-gradient-to-r from-[var(--brand-blue)] via-[#0d4080] to-[var(--brand-blue)] py-16 overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="trust-grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <circle cx="25" cy="25" r="1.5" fill="white"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#trust-grid)" />
        </svg>
      </div>

      <div className="relative max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center group cursor-default">
            <div className="text-4xl md:text-5xl text-white mb-2 transition-transform duration-200 group-hover:scale-110">
              {counts.facilities}
            </div>
            <div className="text-sm text-white/80">
              WHO-GMP Facilities
            </div>
            <div className="w-16 h-1 bg-white/30 mx-auto mt-3 rounded-full group-hover:bg-white/60 transition-colors" />
          </div>
          
          <div className="text-center group cursor-default">
            <div className="text-4xl md:text-5xl text-white mb-2 transition-transform duration-200 group-hover:scale-110">
              {counts.countries}+
            </div>
            <div className="text-sm text-white/80">
              Countries Served
            </div>
            <div className="w-16 h-1 bg-white/30 mx-auto mt-3 rounded-full group-hover:bg-white/60 transition-colors" />
          </div>
          
          <div className="text-center group cursor-default">
            <div className="text-4xl md:text-5xl text-white mb-2 transition-transform duration-200 group-hover:scale-110">
              {counts.products}+
            </div>
            <div className="text-sm text-white/80">
              Active Products
            </div>
            <div className="w-16 h-1 bg-white/30 mx-auto mt-3 rounded-full group-hover:bg-white/60 transition-colors" />
          </div>
          
          <div className="text-center group cursor-default">
            <div className="flex gap-2 justify-center mb-3">
              <div className="w-12 h-12 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center transition-all duration-200 group-hover:bg-white/30 group-hover:scale-110">
                <span className="text-xs text-white">WHO</span>
              </div>
              <div className="w-12 h-12 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center transition-all duration-200 group-hover:bg-white/30 group-hover:scale-110">
                <span className="text-xs text-white">ISO</span>
              </div>
            </div>
            <div className="text-sm text-white/80">
              Certified Excellence
            </div>
            <div className="w-16 h-1 bg-white/30 mx-auto mt-3 rounded-full group-hover:bg-white/60 transition-colors" />
          </div>
        </div>
      </div>
    </section>
  );
}
