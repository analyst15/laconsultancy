import React from 'react';
import { PRACTICE_AREAS } from '../data/consultancyData';
import {
  TrendingUp,
  UserCheck,
  Award,
  CheckCircle2,
  Briefcase,
  Calendar,
  ChevronRight
} from 'lucide-react';

interface PracticesSectionProps {
  onSelectPractice: (practiceId: string) => void;
}

export const PracticesSection: React.FC<PracticesSectionProps> = ({ onSelectPractice }) => {
  const getServiceVisuals = (id: string, index: number) => {
    switch (id) {
      case 'management-consultancy':
        return {
          number: '01',
          icon: TrendingUp,
          accentBorder: 'border-emerald-500/20 hover:border-emerald-500',
          accentBadge: 'bg-emerald-50 text-emerald-800 border-emerald-200',
          iconBg: 'bg-[#012B2B] text-[#7BF0D4]',
          subtitle: 'Strategic & Operational Advisory'
        };
      case 'executive-coaching':
        return {
          number: '02',
          icon: UserCheck,
          accentBorder: 'border-amber-500/20 hover:border-amber-500',
          accentBadge: 'bg-amber-50 text-amber-800 border-amber-200',
          iconBg: 'bg-[#063b3b] text-amber-300',
          subtitle: 'Executive & Career Mentorship'
        };
      case 'leadership-development':
        return {
          number: '03',
          icon: Award,
          accentBorder: 'border-teal-500/20 hover:border-teal-500',
          accentBadge: 'bg-teal-50 text-teal-800 border-teal-200',
          iconBg: 'bg-slate-900 text-[#7BF0D4]',
          subtitle: 'Capacity & Organizational Culture'
        };
      default:
        return {
          number: `0${index + 1}`,
          icon: Briefcase,
          accentBorder: 'border-slate-200 hover:border-slate-400',
          accentBadge: 'bg-slate-100 text-slate-800 border-slate-200',
          iconBg: 'bg-slate-900 text-white',
          subtitle: 'Advisory Solution'
        };
    }
  };

  return (
    <section 
      id="services" 
      className="relative py-20 sm:py-28 px-4 sm:px-8 lg:px-12 bg-white border-b border-slate-200 overflow-hidden"
    >
      {/* Anchor for backward compatibility with #practices */}
      <div id="practices" className="absolute -top-24 pointer-events-none" />

      {/* Subtle ambient lighting */}
      <div 
        className="absolute top-0 right-10 w-96 h-96 rounded-full bg-emerald-50/60 blur-3xl pointer-events-none -z-10" 
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-teal-50/50 blur-3xl pointer-events-none -z-10" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#012B2B]/5 text-[#0C685E] text-xs font-bold tracking-wider uppercase">
            <span>Our Services</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-slate-900 tracking-tight leading-[1.18]">
            Specialized Advisory &amp; Transformation Practices
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            We partner with individuals, executive leadership, and forward-thinking organizations to formulate evidence-based strategies, unlock potential, and cultivate resilient high-performance cultures.
          </p>
        </div>

        {/* 3 Services Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRACTICE_AREAS.map((practice, idx) => {
            const visuals = getServiceVisuals(practice.id, idx);
            const Icon = visuals.icon;

            return (
              <div
                key={practice.id}
                id={`service-card-${practice.id}`}
                className={`group relative bg-slate-50 hover:bg-white rounded-3xl border ${visuals.accentBorder} p-7 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between`}
              >
                {/* Top Section */}
                <div className="space-y-6">
                  {/* Card Header: Icon & Number */}
                  <div className="flex items-center justify-between">
                    <div className={`w-13 h-13 rounded-2xl ${visuals.iconBg} flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300`}>
                      <Icon className="w-6 h-6" />
                    </div>

                    <span className="text-sm font-mono font-bold text-slate-300 group-hover:text-[#0C685E] transition-colors">
                      {visuals.number}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="space-y-1.5">
                    <div className="text-xs font-bold uppercase tracking-wider text-[#0C685E]">
                      {visuals.subtitle}
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 tracking-tight group-hover:text-[#0C685E] transition-colors">
                      {idx + 1}. {practice.title}
                    </h3>
                  </div>

                  {/* Summary */}
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {practice.summary}
                  </p>

                  {/* Bullet Offerings */}
                  <div className="pt-2 border-t border-slate-200/80">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                      Key Focus Areas
                    </div>

                    <ul className="space-y-2.5">
                      {practice.coreDeliverables.map((item, itemIdx) => (
                        <li 
                          key={itemIdx} 
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#0C685E] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Advisory Banner */}
        <div id="contact" className="scroll-mt-24 bg-gradient-to-r from-[#012B2B] via-[#063b3b] to-slate-900 text-white rounded-3xl p-8 sm:p-10 shadow-xl border border-teal-900 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-bold tracking-widest text-[#7BF0D4] uppercase">
              Bespoke Organizational Advisory
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Need a Customized Consulting or Coaching Program?
            </h3>
            <p className="text-slate-300 text-sm max-w-2xl">
              We design multi-disciplinary advisory engagements tailored to your board requirements, organizational size, and strategic timelines across Kenya and Africa.
            </p>
          </div>

          <button
            id="services-custom-consultation-btn"
            onClick={() => onSelectPractice(PRACTICE_AREAS[0].id)}
            className="shrink-0 px-6 py-3.5 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-sm shadow-lg border border-emerald-500/40 flex items-center gap-2 transition-all cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-emerald-200" />
            <span>Schedule Strategic Briefing</span>
            <ChevronRight className="w-4 h-4 text-emerald-200" />
          </button>
        </div>

      </div>
    </section>
  );
};

