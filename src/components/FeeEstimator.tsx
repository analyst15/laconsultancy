import React, { useState } from 'react';
import { ENGAGEMENT_MODELS } from '../data/consultancyData';
import { Calculator, Check, ArrowRight, ShieldCheck, Clock, Users, FileText } from 'lucide-react';

interface FeeEstimatorProps {
  onApplyScopeToBooking: (scopeDetails: string) => void;
}

export const FeeEstimator: React.FC<FeeEstimatorProps> = ({ onApplyScopeToBooking }) => {
  const [selectedModelId, setSelectedModelId] = useState<string>('strategy-sprint');
  const [companyScale, setCompanyScale] = useState<'emerging' | 'mid-market' | 'enterprise'>('mid-market');
  const [selectedAddons, setSelectedAddons] = useState<string[]>(['financial-model']);

  const addOnOptions = [
    {
      id: 'board-governance',
      name: 'Board Advisory & Monthly Governance Cadence',
      description: 'Senior Managing Partner attends quarterly and ad-hoc board meetings as neutral strategic counsel.',
      multiplier: 0.15
    },
    {
      id: 'financial-model',
      name: 'Proprietary 5-Year Valuation & Dynamic Operating Model',
      description: 'Institutional-grade Three-Statement financial engineering with multi-scenario sensitivity tables.',
      multiplier: 0.20
    },
    {
      id: 'onsite-partner',
      name: 'Dedicated On-Site Partner Deployment (Nairobi / Client HQ)',
      description: 'In-person operational oversight and C-suite sprint workshops twice weekly.',
      multiplier: 0.25
    },
    {
      id: 'accelerated-timeline',
      name: 'Expedited Sprint Delivery (Compressed Window)',
      description: 'Doubles advisory quantitative analyst staffing for urgent capital or board deadlines.',
      multiplier: 0.15
    }
  ];

  const toggleAddon = (id: string) => {
    setSelectedAddons(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const selectedModel = ENGAGEMENT_MODELS.find(m => m.id === selectedModelId) || ENGAGEMENT_MODELS[0];

  // Calculate pricing baseline
  const calculatePricing = () => {
    let baseLow = 45000;
    let baseHigh = 65000;
    let isMonthly = false;

    if (selectedModel.id === 'strategy-sprint') {
      baseLow = 45000;
      baseHigh = 65000;
    } else if (selectedModel.id === 'transformation-roadmap') {
      baseLow = 110000;
      baseHigh = 180000;
    } else if (selectedModel.id === 'ma-diligence') {
      baseLow = 55000;
      baseHigh = 90000;
    } else if (selectedModel.id === 'executive-retainer') {
      baseLow = 12500;
      baseHigh = 16500;
      isMonthly = true;
    }

    // Scale multiplier
    let scaleMultiplier = 1.0;
    if (companyScale === 'emerging') scaleMultiplier = 0.9;
    if (companyScale === 'enterprise') scaleMultiplier = 1.35;

    // Addons multiplier
    const addonMultiplier = selectedAddons.reduce((acc, addonId) => {
      const option = addOnOptions.find(o => o.id === addonId);
      return acc + (option ? option.multiplier : 0);
    }, 0);

    const totalMultiplier = scaleMultiplier * (1 + addonMultiplier);
    const finalLow = Math.round((baseLow * totalMultiplier) / 500) * 500;
    const finalHigh = Math.round((baseHigh * totalMultiplier) / 500) * 500;

    return {
      formattedRange: isMonthly
        ? `$${finalLow.toLocaleString()} – $${finalHigh.toLocaleString()} / mo`
        : `$${finalLow.toLocaleString()} – $${finalHigh.toLocaleString()}`,
      isMonthly,
      estimatedWeeks: selectedModel.duration
    };
  };

  const calculation = calculatePricing();

  const handleApply = () => {
    const addonNames = selectedAddons
      .map(id => addOnOptions.find(o => o.id === id)?.name)
      .filter(Boolean)
      .join(', ');

    const summary = `Model: ${selectedModel.name} | Scale: ${companyScale.toUpperCase()} | Add-ons: ${addonNames || 'None'} | Est. Range: ${calculation.formattedRange}`;
    onApplyScopeToBooking(summary);
  };

  return (
    <section id="pricing" className="py-20 px-4 sm:px-8 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold mb-3">
            <Calculator className="w-3.5 h-3.5 text-amber-400" />
            <span>Scope & Fee Estimation Framework</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
            Transparent Engagement Scope & Investment
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Configure your enterprise scale and required advisory intensity to calculate realistic engagement scopes and partner allocations. No hidden fees or bait-and-switch structures.
          </p>
        </div>

        {/* Interactive Estimator Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* 1. Engagement Model Selector */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-amber-400 mb-3">
                1. Select Engagement Model
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {ENGAGEMENT_MODELS.map((model) => (
                  <button
                    key={model.id}
                    id={`select-model-${model.id}`}
                    onClick={() => setSelectedModelId(model.id)}
                    className={`p-4 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                      selectedModelId === model.id
                        ? 'bg-amber-500/10 border-amber-500 text-white shadow-sm'
                        : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <div>
                      <div className="font-bold text-sm font-cinzel text-white mb-1">
                        {model.name}
                      </div>
                      <div className="text-xs text-slate-400 line-clamp-2">
                        {model.description}
                      </div>
                    </div>
                    <div className="text-xs text-amber-300 font-semibold pt-3 flex items-center justify-between">
                      <span>{model.duration}</span>
                      <span className="text-[11px] text-slate-400 font-normal">{model.baseFee}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Company Scale */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-amber-400 mb-3">
                2. Enterprise Scale & Annual Revenue Tier
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: 'emerging', label: 'Emerging Growth', range: '$5M – $20M ARR' },
                  { id: 'mid-market', label: 'Mid-Market Enterprise', range: '$20M – $100M ARR' },
                  { id: 'enterprise', label: 'Large Corporate', range: '$100M+ ARR' }
                ].map((tier) => (
                  <button
                    key={tier.id}
                    id={`select-scale-${tier.id}`}
                    onClick={() => setCompanyScale(tier.id as any)}
                    className={`p-3.5 rounded-xl border text-center transition-all cursor-pointer ${
                      companyScale === tier.id
                        ? 'bg-amber-500/10 border-amber-500 text-white font-bold'
                        : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <div className="text-xs font-bold text-white">{tier.label}</div>
                    <div className="text-[10px] text-slate-400 mt-1">{tier.range}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Scope Add-ons */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-amber-400 mb-3">
                3. Optional Strategic Add-Ons & Governance
              </label>
              <div className="space-y-2.5">
                {addOnOptions.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id);
                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-start gap-3.5 ${
                        isChecked
                          ? 'bg-slate-950 border-amber-500/80 text-white'
                          : 'bg-slate-950/40 border-slate-800/80 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      <div
                        className={`w-5 h-5 rounded border flex items-center justify-center shrink-0 mt-0.5 ${
                          isChecked
                            ? 'bg-amber-500 border-amber-400 text-slate-950'
                            : 'border-slate-700 bg-slate-900'
                        }`}
                      >
                        {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                      <div className="space-y-0.5">
                        <div className="text-xs sm:text-sm font-semibold text-white">
                          {addon.name}
                        </div>
                        <div className="text-xs text-slate-400">
                          {addon.description}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Summary Breakdown Card */}
          <div className="lg:col-span-5 bg-slate-950 rounded-2xl border border-slate-800 p-6 sm:p-7 shadow-xl space-y-6">
            <div className="border-b border-slate-800 pb-5">
              <div className="text-xs uppercase font-bold tracking-widest text-slate-400">
                Estimated Scope & Advisory Fee
              </div>
              <div className="text-2xl sm:text-3xl font-cinzel font-bold text-amber-400 mt-2">
                {calculation.formattedRange}
              </div>
              <p className="text-xs text-slate-400 mt-1">
                Fixed-fee milestone governance. Includes all analytical and partner hours.
              </p>
            </div>

            {/* Scope Details */}
            <div className="space-y-4 text-xs sm:text-sm">
              <div className="flex items-start gap-3 text-slate-300">
                <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white">Engagement Horizon: </span>
                  <span>{selectedModel.duration}</span>
                </div>
              </div>

              <div className="flex items-start gap-3 text-slate-300">
                <Users className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white">Team Composition: </span>
                  <span>{selectedModel.commitment}</span>
                </div>
              </div>

              <div className="flex items-start gap-3 text-slate-300">
                <FileText className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white">Primary Deliverables:</span>
                  <ul className="list-disc list-inside mt-1.5 space-y-1 text-slate-400 text-xs">
                    {selectedModel.deliverables.map((d, i) => (
                      <li key={i}>{d}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Guarantees */}
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-400 space-y-1.5">
              <div className="flex items-center gap-2 text-slate-200 font-semibold">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>LA Consultancy Guarantee</span>
              </div>
              <p>
                Strict conflict clearance and mutual non-disclosure executed before engagement kickoff.
              </p>
            </div>

            {/* Action CTA */}
            <button
              id="apply-scope-to-booking-btn"
              onClick={handleApply}
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-lg transition-all cursor-pointer"
            >
              <span>Lock in Scope & Schedule Initial Briefing</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
