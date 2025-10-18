import { Button } from '../ui/button';
import { Shield, Globe, Award } from 'lucide-react';

interface HeroProps {
  onExploreProducts: () => void;
  onRequestSample: () => void;
}

export function Hero({ onExploreProducts, onRequestSample }: HeroProps) {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-[48px] leading-[56px] font-semibold text-[var(--brand-blue)]">
                Trusted medicines — engineered, tested, delivered.
              </h1>
              <p className="text-[var(--text-900)] opacity-70">
                GMP-manufactured pharmaceutical products with global approvals.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={onExploreProducts}
                className="bg-[var(--accent-red)] hover:bg-[var(--accent-red)]/90 text-white px-8 py-6 h-auto"
                aria-label="Explore products"
              >
                Explore Products
              </Button>
              <Button
                onClick={onRequestSample}
                variant="outline"
                className="border-[var(--brand-blue)] text-[var(--brand-blue)] hover:bg-[var(--brand-blue)] hover:text-white px-8 py-6 h-auto"
                aria-label="Request a sample"
              >
                Request a Sample
              </Button>
            </div>

            {/* Microtrust Line */}
            <div className="flex flex-wrap items-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <Shield size={16} className="text-[var(--brand-blue)]" aria-hidden="true" />
                <span className="text-sm text-[var(--text-900)]">WHO-GMP</span>
              </div>
              <div className="flex items-center gap-2">
                <Award size={16} className="text-[var(--brand-blue)]" aria-hidden="true" />
                <span className="text-sm text-[var(--text-900)]">ISO Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe size={16} className="text-[var(--brand-blue)]" aria-hidden="true" />
                <span className="text-sm text-[var(--text-900)]">45+ countries</span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative aspect-[16/10] rounded-[var(--radius-medium)] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1576669801838-1b1c52121e6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaGFybWFjZXV0aWNhbCUyMG1hbnVmYWN0dXJpbmclMjBsYWJ8ZW58MXx8fHwxNzYwNjQ2ODk0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="EDIF manufacturing facility overview"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
