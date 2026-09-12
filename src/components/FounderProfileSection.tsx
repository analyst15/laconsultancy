import React from 'react';
import { 
  Award, 
  GraduationCap, 
  Building2, 
  CheckCircle2, 
  MessageCircle, 
  Calendar, 
  Briefcase
} from 'lucide-react';

interface FounderProfileSectionProps {
  onOpenBooking: () => void;
}

export const FounderProfileSection: React.FC<FounderProfileSectionProps> = ({ onOpenBooking }) => {
  const expertiseList = [
    'Strategy',
    'Business Planning',
    'Performance Management',
    'Stakeholder & Governance Management',
    'Cross country & Regional Coordination',
    'Project & Programme Management',
    'Risk & Compliance Oversight',
    'Executive Advisory & Communication',
    'Training & Team Development',
    'Leadership Development',
    'Coaching',
    'Financial Literacy',
    'Management'
  ];

  return (
    <section 
      id="founder" 
      className="relative bg-slate-50 py-20 sm:py-28 px-4 sm:px-8 lg:px-12 border-b border-slate-200 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div 
        className="absolute top-1/3 left-0 w-96 h-96 rounded-full bg-emerald-100/50 blur-3xl pointer-events-none -z-10" 
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-teal-100/40 blur-3xl pointer-events-none -z-10" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Top Eyebrow */}
        <div className="border-b border-slate-200/80 pb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#012B2B]/5 text-[#0C685E] text-xs font-bold tracking-wider uppercase mb-2">
            <Briefcase className="w-3.5 h-3.5 text-[#0C685E]" />
            <span>Founder &amp; Principal Consultant Profile</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Executive Leadership &amp; Practice Lead
          </h2>
        </div>

        {/* Profile Card Container */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Column: Portrait & Key Highlights */}
            <div className="lg:col-span-5 bg-gradient-to-b from-slate-900 via-[#012B2B] to-[#043333] text-white p-6 sm:p-8 lg:p-10 flex flex-col justify-between relative overflow-hidden">
              {/* Subtle decorative glow behind picture */}
              <div className="absolute top-12 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full bg-emerald-500/20 blur-3xl pointer-events-none" />

              <div className="space-y-6 relative z-10">
                {/* Photo Frame */}
                <div className="relative mx-auto lg:mx-0 max-w-sm">
                  <div className="relative overflow-hidden rounded-2xl border-2 border-teal-500/30 shadow-2xl bg-slate-800">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/keiyian-farm.firebasestorage.app/o/LA%20Consultancy%2FLinkedIn.jpeg?alt=media&token=28bea3b7-a1d0-46ed-b484-f9dc5b9d7b3d"
                      alt="Linda Aredo - Founder & CEO"
                      className="w-full h-80 sm:h-96 object-cover object-top hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#012B2B]/80 via-transparent to-transparent pointer-events-none" />
                  </div>

                  {/* Years of Experience Badge */}
                  <div className="absolute -bottom-4 -right-2 sm:-right-4 bg-emerald-700 text-white px-4 py-2.5 rounded-xl shadow-lg border border-emerald-500/40 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-emerald-800/80 flex items-center justify-center font-black text-xl text-[#7BF0D4]">
                      13
                    </div>
                    <div className="leading-tight">
                      <div className="text-[11px] uppercase tracking-wider text-emerald-200 font-semibold">Years of</div>
                      <div className="text-xs font-bold text-white">Experience</div>
                    </div>
                  </div>
                </div>

                {/* Identity on mobile / left side */}
                <div className="pt-4 text-center lg:text-left">
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                    Linda Aredo
                  </h3>
                  <p className="text-sm font-semibold text-[#7BF0D4] tracking-wide mt-0.5">
                    Founder &amp; CEO
                  </p>
                  <p className="text-xs text-slate-300 mt-1">
                    Management Consultant &amp; Executive Coach
                  </p>
                </div>

                {/* Academic Qualifications & Prior Tenure */}
                <div className="space-y-3 pt-2 border-t border-teal-900/60">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#7BF0D4] flex items-center gap-1.5">
                    <GraduationCap className="w-3.5 h-3.5" />
                    <span>Academic Credentials</span>
                  </div>
                  
                  <div className="space-y-2 text-xs text-slate-200">
                    <div className="bg-[#021f1f]/80 p-2.5 rounded-lg border border-teal-800/40">
                      <div className="font-semibold text-white">Master's Degree</div>
                      <div className="text-slate-300">University of Kent (United Kingdom)</div>
                    </div>
                    <div className="bg-[#021f1f]/80 p-2.5 rounded-lg border border-teal-800/40">
                      <div className="font-semibold text-white">Bachelor's Degree</div>
                      <div className="text-slate-300">Strathmore University (Kenya)</div>
                    </div>
                  </div>

                  <div className="text-xs font-bold uppercase tracking-wider text-[#7BF0D4] flex items-center gap-1.5 pt-2">
                    <Building2 className="w-3.5 h-3.5" />
                    <span>Prior Leadership Tenure</span>
                  </div>
                  <div className="bg-[#021f1f]/80 p-2.5 rounded-lg border border-teal-800/40 text-xs">
                    <div className="font-semibold text-white">Standard Chartered Bank</div>
                    <div className="text-slate-300 leading-relaxed mt-0.5">
                      Leadership roles facilitating strategic planning, governance cycles, and multi-stakeholder engagements across Kenya &amp; Africa.
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp connect */}
              <div className="pt-6 mt-6 border-t border-teal-900/60 relative z-10">
                <a
                  href="https://wa.me/254723821985"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl bg-[#0C685E] hover:bg-[#0e786d] text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-md transition-colors border border-teal-400/30"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-200" />
                  <span>Connect with Linda on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Right Column: Bio & Core Areas of Expertise */}
            <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-8">
              
              {/* Professional Biography */}
              <div className="space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#0C685E]">
                    Executive Background
                  </span>
                  <h4 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mt-0.5">
                    Professional Biography
                  </h4>
                </div>

                <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                  <p>
                    <strong className="text-slate-900 font-semibold">Linda Aredo</strong> is a seasoned professional with over 12 years of experience spanning strategy, governance, and executive support at the highest organizational levels. She has partnered with Executives and Boards to drive strategy execution, strengthen governance frameworks, and deliver sustainable business performance across Kenya and Africa.
                  </p>
                  
                  <p>
                    Her expertise includes board engagement, enterprise performance management, and multi stakeholder coordination, honed during her tenure in <span className="text-slate-900 font-medium">Standard Chartered Bank</span>, where she led several leadership roles which included facilitating strategic planning, governance cycles, and stakeholder engagements. Linda has successfully led cross functional initiatives that improved operational efficiency, enhanced revenue growth, and strengthened institutional capacity.
                  </p>
                  
                  <p>
                    She is particularly passionate about financial inclusion, leadership development, and empowering teams through structured coaching and capacity building programs.
                  </p>
                </div>

                {/* Academic Credentials Highlight Box */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-[#012B2B] text-[#7BF0D4] flex items-center justify-center shrink-0 mt-0.5">
                    <Award className="w-5 h-5" />
                  </div>
                  <div className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    <span className="font-bold text-slate-900">Academic Background:</span> Linda holds a <span className="font-semibold text-slate-900">Masters degree from University of Kent (UK)</span> and a <span className="font-semibold text-slate-900">Bachelor’s degree from Strathmore University (Kenya)</span>.
                  </div>
                </div>
              </div>

              {/* Key Areas of Expertise */}
              <div className="space-y-4 pt-4 border-t border-slate-100">
                <h4 className="text-lg font-bold text-slate-900 tracking-tight">
                  Key Areas of Expertise
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {expertiseList.map((area, index) => (
                    <div 
                      key={index}
                      className="flex items-center gap-2.5 p-2.5 rounded-lg bg-slate-50 hover:bg-emerald-50/60 border border-slate-200/70 hover:border-emerald-300 text-slate-800 text-xs sm:text-sm font-medium transition-colors"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#0C685E] shrink-0" />
                      <span>{area}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Action Row */}
              <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
                <div className="text-xs text-slate-500">
                  Ready to collaborate on strategy, governance, or leadership coaching?
                </div>
                <div className="flex items-center gap-3">
                  <button
                    id="founder-schedule-briefing-btn"
                    onClick={onOpenBooking}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-semibold shadow-sm hover:shadow transition-all cursor-pointer"
                  >
                    <Calendar className="w-4 h-4 text-emerald-400" />
                    <span>Schedule Strategic Consultation</span>
                  </button>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
