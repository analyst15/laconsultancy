import React from 'react';
import { 
  Target, 
  Compass, 
  ShieldCheck, 
  Award, 
  TrendingUp, 
  Users2, 
  Zap, 
  Handshake,
  CheckCircle2,
  Building2,
  Globe2
} from 'lucide-react';

interface AboutSectionProps {
  onOpenBooking?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenBooking }) => {
  const coreValues = [
    {
      number: '01',
      title: 'Integrity',
      icon: ShieldCheck,
      bullets: [
        'Upholding the highest ethical standards in every engagement.',
        'Ensuring transparency, accountability, and trust in client relationships.'
      ],
      accent: 'border-emerald-500/30 group-hover:border-emerald-500'
    },
    {
      number: '02',
      title: 'Excellence',
      icon: Award,
      bullets: [
        'Delivering solutions that are structured, polished, and outcome driven.',
        'Striving for continuous improvement and innovation in consultancy and coaching.'
      ],
      accent: 'border-amber-500/30 group-hover:border-amber-500'
    },
    {
      number: '03',
      title: 'Impact',
      icon: TrendingUp,
      bullets: [
        'Focusing on measurable results that drive sustainable growth.',
        'Creating lasting value for organizations, individuals, and communities.'
      ],
      accent: 'border-teal-500/30 group-hover:border-teal-500'
    },
    {
      number: '04',
      title: 'Inclusivity',
      icon: Users2,
      bullets: [
        'Championing diversity and equal opportunity in leadership and career development.',
        'Promoting financial inclusion and access to opportunities across sectors.'
      ],
      accent: 'border-emerald-500/30 group-hover:border-emerald-500'
    },
    {
      number: '05',
      title: 'Empowerment',
      icon: Zap,
      bullets: [
        'Equipping leaders, teams, and individuals with the tools to thrive.',
        'Building capacity through coaching, mentorship, and structured development programs.'
      ],
      accent: 'border-amber-500/30 group-hover:border-amber-500'
    },
    {
      number: '06',
      title: 'Collaboration',
      icon: Handshake,
      bullets: [
        'Partnering with clients, stakeholders, and communities to co create solutions.',
        'Leveraging multi stakeholder coordination for regional and global impact.'
      ],
      accent: 'border-teal-500/30 group-hover:border-teal-500'
    }
  ];

  return (
    <section 
      id="about" 
      className="relative bg-white py-20 sm:py-28 px-4 sm:px-8 lg:px-12 border-b border-slate-200 overflow-hidden"
    >
      {/* Subtle background ambient accents */}
      <div 
        className="absolute top-0 right-1/4 w-[480px] h-[480px] rounded-full bg-emerald-50/60 blur-3xl pointer-events-none -z-10"
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-0 left-10 w-[360px] h-[360px] rounded-full bg-teal-50/50 blur-3xl pointer-events-none -z-10"
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto space-y-16 sm:space-y-20">
        
        {/* Section Header & Executive Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#012B2B]/5 text-[#0C685E] text-xs font-bold tracking-wider uppercase">
              <Building2 className="w-3.5 h-3.5 text-[#0C685E]" />
              <span>About LA Consultancy</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-slate-900 tracking-tight leading-[1.18]">
              Empowering Visionary Leaders &amp; Sustainable Organizations
            </h2>
          </div>

          <div className="lg:col-span-7 space-y-5 text-slate-600 text-base sm:text-lg leading-relaxed">
            <p className="font-medium text-slate-800">
              LA Consultancy is a premier management consulting and advisory firm committed to unlocking organizational excellence, cultivating executive leadership, and driving systemic transformation across emerging and established sectors.
            </p>
            <p className="text-slate-600 text-base leading-relaxed">
              Rooted in African insight with a global perspective, we blend strategic rigor, operational mastery, and people-centric development. Whether steering corporate restructuring, institutional capacity building, or bespoke leadership mentorship, we work shoulder-to-shoulder with our partners to convert complex ambitions into measurable, lasting achievements.
            </p>
            
            <div className="pt-2 flex flex-wrap items-center gap-6 text-sm text-slate-700 font-medium">
              <div className="flex items-center gap-2">
                <Globe2 className="w-4 h-4 text-emerald-600" />
                <span>Pan-African &amp; Global Reach</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Evidence-Based Advisory</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Executive &amp; Board Mentorship</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          
          {/* Mission Card */}
          <div className="relative rounded-2xl bg-gradient-to-br from-[#012B2B] to-[#063b3b] text-white p-8 sm:p-10 shadow-xl overflow-hidden border border-teal-900/60 flex flex-col justify-between group">
            {/* Ambient decorative glow */}
            <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-[#0C685E]/30 blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-700" />
            
            <div className="relative space-y-5">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-300">
                <Target className="w-6 h-6" />
              </div>
              
              <div>
                <span className="text-xs font-bold tracking-widest text-[#7BF0D4] uppercase">
                  Our Purpose
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mt-1">
                  Our Mission
                </h3>
              </div>

              <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
                To partner with individuals and organizations in unlocking their potential, driving transformation, and building resilience for the future.
              </p>
            </div>

            <div className="relative pt-8 mt-4 border-t border-teal-800/40 flex items-center gap-2 text-xs font-semibold tracking-wider text-emerald-300 uppercase">
              <span>Unlocking Potential</span>
              <span className="text-teal-500">•</span>
              <span>Driving Transformation</span>
              <span className="text-teal-500">•</span>
              <span>Building Resilience</span>
            </div>
          </div>

          {/* Vision Card */}
          <div className="relative rounded-2xl bg-slate-900 text-white p-8 sm:p-10 shadow-xl overflow-hidden border border-slate-800 flex flex-col justify-between group">
            {/* Ambient decorative glow */}
            <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-amber-500/10 blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-700" />
            
            <div className="relative space-y-5">
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-400/30 flex items-center justify-center text-amber-300">
                <Compass className="w-6 h-6" />
              </div>
              
              <div>
                <span className="text-xs font-bold tracking-widest text-amber-300 uppercase">
                  Our Aspiration
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mt-1">
                  Our Vision
                </h3>
              </div>

              <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
                To be a trusted partner in Africa and beyond, recognized for transforming organizations, advancing careers, and developing leaders who drive inclusive, sustainable impact.
              </p>
            </div>

            <div className="relative pt-8 mt-4 border-t border-slate-800 flex items-center gap-2 text-xs font-semibold tracking-wider text-amber-300 uppercase">
              <span>Pan-African Footprint</span>
              <span className="text-slate-600">•</span>
              <span>Leadership Growth</span>
              <span className="text-slate-600">•</span>
              <span>Inclusive Impact</span>
            </div>
          </div>

        </div>

        {/* Core Values Section */}
        <div className="space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-[#0C685E] uppercase bg-emerald-50 px-3 py-1 rounded-full">
              Foundation of Our Practice
            </span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              Our Core Values
            </h3>
            <p className="text-slate-600 text-sm sm:text-base">
              The foundational principles that guide every client partnership, advisory mandate, and leadership engagement we undertake.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value) => {
              const Icon = value.icon;
              return (
                <div 
                  key={value.number}
                  className={`group relative bg-slate-50 hover:bg-white rounded-2xl p-7 border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between ${value.accent}`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-11 h-11 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center justify-center text-slate-900 group-hover:bg-[#012B2B] group-hover:text-white group-hover:border-[#012B2B] transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-mono font-bold text-slate-400 group-hover:text-slate-600 transition-colors">
                        {value.number}
                      </span>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold text-slate-900 group-hover:text-[#0C685E] transition-colors">
                        {value.title}
                      </h4>
                    </div>

                    <ul className="space-y-2.5 pt-1">
                      {value.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-600 leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#0C685E] mt-2 shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
