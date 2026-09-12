import React, { useState } from 'react';
import { CASE_STUDIES } from '../data/consultancyData';
import { Award, Quote, MapPin, Building, ArrowUpRight } from 'lucide-react';

interface CaseStudiesSectionProps {
  onOpenBooking: () => void;
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({ onOpenBooking }) => {
  const [selectedIndustry, setSelectedIndustry] = useState<string>('All');

  const industries = ['All', 'Media & Entertainment', 'Aerospace & Advanced Manufacturing', 'Healthcare & Life Sciences', 'Technology & SaaS'];

  const filteredCases = selectedIndustry === 'All'
    ? CASE_STUDIES
    : CASE_STUDIES.filter(c => c.industry === selectedIndustry);

  return (
    <section id="case-studies" className="py-20 px-4 sm:px-8 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold mb-3">
            <Award className="w-3.5 h-3.5 text-amber-600" />
            <span>Verifiable Track Record</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-3">
            Empirical Outcomes Delivered to Boardrooms
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Every engagement is measured against balance-sheet outcomes, margin expansion, and valuation resilience. Explore documented client case studies across Southern California and global enterprises.
          </p>
        </div>

        {/* Industry Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {industries.map((ind) => (
            <button
              key={ind}
              id={`filter-case-${ind.replace(/\s+/g, '-').toLowerCase()}`}
              onClick={() => setSelectedIndustry(ind)}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                selectedIndustry === ind
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {ind}
            </button>
          ))}
        </div>

        {/* Case Studies Grid */}
        <div className="space-y-8">
          {filteredCases.map((cs) => (
            <div
              key={cs.id}
              id={`case-study-${cs.id}`}
              className="bg-slate-50/70 rounded-2xl border border-slate-200 p-6 sm:p-8 hover:border-slate-300 transition-all"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left: Metadata & Narrative */}
                <div className="lg:col-span-8 space-y-4">
                  <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
                    <span className="font-bold text-amber-800 bg-amber-100/60 px-2.5 py-0.5 rounded">
                      {cs.industry}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-slate-400" />
                      {cs.location}
                    </span>
                    <span>•</span>
                    <span className="font-medium text-slate-600">
                      Duration: {cs.duration}
                    </span>
                  </div>

                  <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                    {cs.headline}
                  </h3>

                  <div className="space-y-3 pt-2 text-sm text-slate-600">
                    <div>
                      <span className="font-semibold text-slate-900">The Structural Dilemma: </span>
                      <span>{cs.challenge}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-slate-900">Advisory Execution: </span>
                      <span>{cs.solution}</span>
                    </div>
                  </div>

                  {/* Client Testimonial Quote */}
                  <div className="bg-white p-4 rounded-xl border border-slate-200/80 mt-4 relative">
                    <Quote className="w-4 h-4 text-amber-500 absolute top-3 right-3 opacity-60" />
                    <p className="text-xs sm:text-sm italic text-slate-700 leading-relaxed mb-2">
                      "{cs.testimonial.quote}"
                    </p>
                    <div className="text-xs font-bold text-slate-900">
                      {cs.testimonial.author}
                      <span className="font-normal text-slate-500 ml-1">— {cs.testimonial.role}</span>
                    </div>
                  </div>
                </div>

                {/* Right: Quantifiable Outcome Metrics */}
                <div className="lg:col-span-4 bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between h-full space-y-4">
                  <div>
                    <div className="text-xs uppercase font-bold tracking-wider text-slate-400 mb-4">
                      Quantified Balance-Sheet Impact
                    </div>
                    <div className="space-y-4">
                      {cs.metrics.map((m, idx) => (
                        <div key={idx} className="border-b border-slate-100 pb-3 last:border-0 last:pb-0">
                          <div className="text-2xl sm:text-3xl font-cinzel font-extrabold text-slate-950">
                            {m.value}
                          </div>
                          <div className="text-xs font-medium text-slate-600 mt-0.5">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={onOpenBooking}
                    className="w-full mt-4 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-900 text-xs font-bold transition-all cursor-pointer"
                  >
                    <span>Request Similar Engagement Review</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
