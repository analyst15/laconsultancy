import React from 'react';
import { PARTNERS } from '../data/consultancyData';
import { Users, GraduationCap, Briefcase, Mail, Calendar, Award } from 'lucide-react';

interface PartnersSectionProps {
  onSelectPartner: (partnerId: string) => void;
}

export const PartnersSection: React.FC<PartnersSectionProps> = ({ onSelectPartner }) => {
  return (
    <section id="partners" className="py-20 px-4 sm:px-8 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200/80 border border-slate-300 text-slate-800 text-xs font-semibold mb-3">
            <Users className="w-3.5 h-3.5 text-amber-600" />
            <span>Senior Leadership</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-3">
            Advisory Led Exclusively by Industry Veterans
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            We operate with a flat partner-heavy staffing model. Your executive strategy is architected and executed directly by experienced former tier-one engagement directors and operational leaders.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PARTNERS.map((partner) => (
            <div
              key={partner.id}
              id={`partner-card-${partner.id}`}
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Header initials badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 text-amber-400 font-cinzel font-bold text-lg flex items-center justify-center border border-slate-800">
                    {partner.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <span className="text-[11px] font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                    Partner
                  </span>
                </div>

                <h3 className="font-cinzel text-lg font-bold text-slate-900 mb-0.5">
                  {partner.name}
                </h3>
                <div className="text-xs font-semibold text-slate-500 mb-3">
                  {partner.role}
                </div>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {partner.bio}
                </p>

                {/* Prior Experience */}
                <div className="border-t border-slate-100 pt-3 mb-3 space-y-1.5">
                  <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    <Briefcase className="w-3 h-3 text-amber-600" />
                    <span>Prior Leadership</span>
                  </div>
                  <ul className="text-xs text-slate-700 space-y-1">
                    {partner.priorExperience.map((exp, i) => (
                      <li key={i} className="line-clamp-1">• {exp}</li>
                    ))}
                  </ul>
                </div>

                {/* Education */}
                <div className="border-t border-slate-100 pt-3 mb-4">
                  <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                    <GraduationCap className="w-3 h-3 text-amber-600" />
                    <span>Credentials & Alma Mater</span>
                  </div>
                  <div className="text-xs text-slate-600">
                    {partner.education}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="border-t border-slate-100 pt-4">
                <button
                  id={`schedule-with-${partner.id}`}
                  onClick={() => onSelectPartner(partner.id)}
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5 text-amber-400" />
                  <span>Schedule Briefing</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
