import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  onOpenBooking: () => void;
  onOpenDiagnostic?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenBooking,
  onOpenDiagnostic,
}) => {
  return (
    <section 
      id="hero-section"
      className="relative overflow-hidden bg-[#012B2B] text-white pt-10 sm:pt-14 pb-16 sm:pb-24 px-4 sm:px-8 lg:px-12 border-b border-teal-950"
    >
        {/* Top-right vibrant emerald gradient glow */}
        <div 
          className="absolute top-0 right-0 w-[550px] sm:w-[750px] h-[550px] sm:h-[750px] pointer-events-none opacity-40 blur-3xl rounded-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#1C5D37] via-[#0C685E]/30 to-transparent -mr-20 -mt-20"
          aria-hidden="true"
        />

        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            
            {/* Left Column: Typography & CTAs */}
            <div className="lg:col-span-6 space-y-6 sm:space-y-8 z-10">
              
              {/* Decorative Mint Starburst Icon (Matching Inspo) */}
              <div className="inline-block animate-pulse">
                <svg 
                  className="w-9 h-9 sm:w-11 sm:h-11 text-[#7BF0D4]" 
                  viewBox="0 0 48 48" 
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <rect x="21" y="4" width="6" height="40" rx="3" transform="rotate(0 24 24)" />
                  <rect x="21" y="4" width="6" height="40" rx="3" transform="rotate(60 24 24)" />
                  <rect x="21" y="4" width="6" height="40" rx="3" transform="rotate(120 24 24)" />
                  <circle cx="24" cy="24" r="5" fill="#7BF0D4" />
                </svg>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[44px] xl:text-[50px] font-extrabold text-white tracking-tight leading-[1.18]">
                Strategic Advisory &amp;<br />
                Management Solutions for your<br />
                <span className="relative inline-block mt-1">
                  Business
                  {/* Mint accent underline */}
                  <span 
                    className="absolute left-0 -bottom-1.5 sm:-bottom-2 w-full h-[4px] sm:h-[5px] bg-[#7BF0D4] rounded-full"
                    aria-hidden="true"
                  />
                </span>
              </h1>

              {/* Subtitle / Body Copy */}
              <p className="text-base sm:text-lg text-[#9CB3AD] leading-relaxed max-w-xl font-normal">
                Partnering with visionary leaders and organizations to drive corporate strategy, optimize operations, and achieve sustainable transformation.
              </p>

              {/* CTA Row: Pill Button + Explore Services */}
              <div className="flex flex-wrap items-center gap-6 sm:gap-8 pt-2">
                
                {/* Primary Pill Button: 'Get Started now' with underlined 'Get' */}
                <button
                  id="hero-get-started-btn"
                  onClick={onOpenBooking}
                  className="inline-flex items-center justify-center px-8 sm:px-9 py-3.5 sm:py-4 rounded-full bg-[#0C685E] hover:bg-[#0f7d72] text-white font-medium text-sm sm:text-base shadow-lg shadow-[#0C685E]/25 hover:shadow-teal-900/50 hover:translate-y-[-1px] transition-all cursor-pointer group"
                >
                  <span className="underline decoration-white underline-offset-4 font-semibold mr-1.5">
                    Get
                  </span>
                  <span>Started now</span>
                </button>

                {/* Secondary Link: Explore Our Services */}
                <a
                  id="hero-explore-services-link"
                  href="#practices"
                  className="inline-flex items-center gap-2 text-white hover:text-[#7BF0D4] font-medium text-sm sm:text-base transition-colors cursor-pointer group"
                >
                  <span>Explore Our Services</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

              </div>

            </div>

            {/* Right Column: Imagery with Custom Organic Mask */}
            <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
              
              <div className="relative w-full max-w-lg lg:max-w-none">
                
                {/* Image Container with Organic Rounded Sweep on Top-Left Corner */}
                <div className="relative overflow-hidden shadow-2xl rounded-tl-[100px] sm:rounded-tl-[150px] lg:rounded-tl-[180px] rounded-tr-[28px] sm:rounded-tr-[36px] rounded-br-[28px] sm:rounded-br-[36px] rounded-bl-[48px] sm:rounded-bl-[60px] border border-teal-500/20 bg-[#05241e]">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/keiyian-farm.firebasestorage.app/o/LA%20Consultancy%2Fmagnific_availablelight-photo-of-t_lJRaoClgv9.png?alt=media&token=2d459a19-2819-4f9b-a75d-e35f81280302"
                    alt="Linda Aredo Consultancy team collaborating on strategic management advisory"
                    className="w-full h-[380px] sm:h-[460px] lg:h-[520px] object-cover object-center transform hover:scale-[1.02] transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle inner dark gradient bottom vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>
    );
};
