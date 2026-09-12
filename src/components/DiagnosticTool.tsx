import React, { useState } from 'react';
import { DIAGNOSTIC_QUESTIONS, PRACTICE_AREAS } from '../data/consultancyData';
import { DiagnosticResult } from '../types';
import {
  Compass,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  RotateCcw,
  Calendar,
  Sparkles,
  TrendingUp,
  ShieldCheck,
  Building
} from 'lucide-react';

interface DiagnosticToolProps {
  onApplyDiagnosticToBooking: (result: DiagnosticResult) => void;
}

export const DiagnosticTool: React.FC<DiagnosticToolProps> = ({
  onApplyDiagnosticToBooking
}) => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState<boolean>(false);

  const handleSelectOption = (questionId: number, optionIndex: number) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: optionIndex
    }));
  };

  const handleNext = () => {
    if (currentStep < DIAGNOSTIC_QUESTIONS.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setCurrentStep(0);
    setShowResults(false);
  };

  // Compute results
  const computeDiagnostic = (): DiagnosticResult => {
    let totalScore = 0;
    const insights: string[] = [];
    let lowestScoreCategory = '';
    let lowestScore = 999;

    DIAGNOSTIC_QUESTIONS.forEach(q => {
      const selectedIndex = selectedAnswers[q.id] ?? 0;
      const option = q.options[selectedIndex];
      totalScore += option.points;
      insights.push(option.insight);

      if (option.points < lowestScore) {
        lowestScore = option.points;
        lowestScoreCategory = q.category;
      }
    });

    let maturityTier: DiagnosticResult['maturityTier'] = 'Emerging & Vulnerable';
    let executiveSummary = '';
    let recommendedPracticeId = 'management-consultancy';

    if (totalScore <= 45) {
      maturityTier = 'Emerging & Vulnerable';
      executiveSummary = 'Your enterprise displays critical dependencies in governance, strategy execution, and operating leverage. Scalability will trigger friction unless core processes and financial modeling are formalized.';
      recommendedPracticeId = 'management-consultancy';
    } else if (totalScore <= 68) {
      maturityTier = 'Growth Phase with Bottlenecks';
      executiveSummary = 'Strong baseline commercial product-market fit, but managerial execution and team resilience are suppressing performance. Targeted leadership development is required.';
      recommendedPracticeId = 'leadership-development';
    } else if (totalScore <= 85) {
      maturityTier = 'Established & Optimizing';
      executiveSummary = 'High operational discipline and established market presence. Key upside lies in executive coaching, strategic transition acceleration, and tailored financial literacy.';
      recommendedPracticeId = 'executive-coaching';
    } else {
      maturityTier = 'Market-Leading Enterprise';
      executiveSummary = 'Exceptional top-decile execution across governance and strategic clarity. The enterprise is ideally positioned for regional cross-country expansion, risk governance, and organizational transformation.';
      recommendedPracticeId = 'management-consultancy';
    }

    const strengths: string[] = [];
    const criticalPriorities: string[] = [];

    DIAGNOSTIC_QUESTIONS.forEach(q => {
      const idx = selectedAnswers[q.id] ?? 0;
      const opt = q.options[idx];
      if (opt.points >= 20) {
        strengths.push(`${q.category}: ${opt.insight}`);
      } else {
        criticalPriorities.push(`${q.category}: ${opt.insight}`);
      }
    });

    if (strengths.length === 0) {
      strengths.push('Early operational agility and founder dedication.');
    }
    if (criticalPriorities.length === 0) {
      criticalPriorities.push('Continuous moat defense against emerging market entrants and capital efficiency calibration.');
    }

    return {
      score: Math.min(100, Math.max(10, totalScore)),
      maturityTier,
      executiveSummary,
      identifiedStrengths: strengths,
      criticalPriorities,
      recommendedPracticeId
    };
  };

  const result = computeDiagnostic();
  const currentQuestion = DIAGNOSTIC_QUESTIONS[currentStep];
  const isCurrentAnswered = selectedAnswers[currentQuestion?.id] !== undefined;
  const recommendedPractice = PRACTICE_AREAS.find(p => p.id === result.recommendedPracticeId);

  return (
    <section id="diagnostic" className="py-16 px-4 sm:px-8 bg-slate-900 text-slate-100">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold mb-3">
            <Compass className="w-3.5 h-3.5 text-amber-400" />
            <span>Interactive Business Health Diagnostic</span>
          </div>
          <h2 className="font-cinzel text-2xl sm:text-4xl font-bold tracking-tight text-white mb-3">
            Enterprise Strategic Health Assessment
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Evaluate your enterprise maturity across commercial models, operating leverage, tech architecture, and governance. Receive an empirical readiness score and strategic recommendations.
          </p>
        </div>

        {/* Assessment Card */}
        <div className="bg-slate-950/80 rounded-2xl border border-slate-800 p-6 sm:p-10 shadow-2xl backdrop-blur-sm">
          {!showResults ? (
            <div>
              {/* Progress Indicator */}
              <div className="mb-8">
                <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                  <span className="font-medium text-amber-400">
                    Dimension {currentStep + 1} of {DIAGNOSTIC_QUESTIONS.length}: {currentQuestion.category}
                  </span>
                  <span>{Math.round(((currentStep + 1) / DIAGNOSTIC_QUESTIONS.length) * 100)}% Completed</span>
                </div>
                <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-amber-500 transition-all duration-300"
                    style={{ width: `${((currentStep + 1) / DIAGNOSTIC_QUESTIONS.length) * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* Question */}
              <div className="mb-8">
                <h3 className="font-cinzel text-lg sm:text-2xl font-bold text-white mb-2">
                  {currentQuestion.question}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400">
                  {currentQuestion.context}
                </p>
              </div>

              {/* Options */}
              <div className="space-y-3.5 mb-8">
                {currentQuestion.options.map((option, idx) => {
                  const isSelected = selectedAnswers[currentQuestion.id] === idx;
                  return (
                    <button
                      key={idx}
                      id={`diagnostic-q${currentQuestion.id}-opt${idx}`}
                      onClick={() => handleSelectOption(currentQuestion.id, idx)}
                      className={`w-full text-left p-4 sm:p-5 rounded-xl border transition-all cursor-pointer flex items-start gap-4 ${
                        isSelected
                          ? 'bg-amber-500/10 border-amber-500 text-white shadow-md'
                          : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-900'
                      }`}
                    >
                      <div
                        className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 mt-0.5 ${
                          isSelected
                            ? 'border-amber-400 bg-amber-500 text-slate-950 font-bold'
                            : 'border-slate-600'
                        }`}
                      >
                        {isSelected && <div className="w-2 h-2 rounded-full bg-slate-950"></div>}
                      </div>
                      <div className="space-y-1">
                        <div className="text-sm sm:text-base font-medium leading-snug">
                          {option.text}
                        </div>
                        {isSelected && (
                          <p className="text-xs text-amber-300/90 pt-1">
                            • Analytical context: {option.insight}
                          </p>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Navigation buttons */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                <button
                  onClick={handlePrev}
                  disabled={currentStep === 0}
                  className={`px-4 py-2 text-sm font-medium rounded-lg ${
                    currentStep === 0
                      ? 'text-slate-600 cursor-not-allowed'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800 cursor-pointer'
                  }`}
                >
                  Previous Dimension
                </button>

                <button
                  id="diagnostic-next-btn"
                  onClick={handleNext}
                  disabled={!isCurrentAnswered}
                  className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-bold transition-all ${
                    isCurrentAnswered
                      ? 'bg-amber-500 hover:bg-amber-400 text-slate-950 cursor-pointer shadow-md'
                      : 'bg-slate-800 text-slate-500 cursor-not-allowed'
                  }`}
                >
                  <span>{currentStep === DIAGNOSTIC_QUESTIONS.length - 1 ? 'Generate Executive Dossier' : 'Next Dimension'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ) : (
            /* Result Presentation */
            <div className="space-y-8 animate-fadeIn">
              {/* Score header */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6 pb-6 border-b border-slate-800">
                <div className="text-center sm:text-left space-y-1.5">
                  <div className="text-xs uppercase tracking-widest text-amber-400 font-semibold">
                    Empirical Assessment Output
                  </div>
                  <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-white">
                    {result.maturityTier}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 max-w-xl">
                    {result.executiveSummary}
                  </p>
                </div>

                {/* Score Dial */}
                <div className="flex flex-col items-center justify-center p-4 rounded-xl bg-slate-900 border border-slate-800 min-w-[140px]">
                  <div className="text-4xl sm:text-5xl font-extrabold font-cinzel text-amber-400">
                    {result.score}
                    <span className="text-xl text-slate-500 font-normal">/100</span>
                  </div>
                  <div className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider mt-1">
                    Health Index
                  </div>
                </div>
              </div>

              {/* Strengths & Critical Priorities Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Strengths */}
                <div className="bg-slate-900/70 p-5 rounded-xl border border-slate-800">
                  <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm mb-3">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Identified Competitive Strengths</span>
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                    {result.identifiedStrengths.map((s, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-emerald-400 font-bold">•</span>
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Critical Priorities */}
                <div className="bg-slate-900/70 p-5 rounded-xl border border-slate-800">
                  <div className="flex items-center gap-2 text-amber-400 font-semibold text-sm mb-3">
                    <AlertTriangle className="w-4 h-4" />
                    <span>Immediate Strategic Vulnerabilities</span>
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                    {result.criticalPriorities.map((p, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-amber-400 font-bold">•</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Recommended Advisory Solution */}
              {recommendedPractice && (
                <div className="p-5 rounded-xl bg-gradient-to-r from-amber-500/15 via-slate-900 to-slate-900 border border-amber-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div className="text-xs text-amber-400 font-bold uppercase tracking-wider">
                      Recommended Strategic Intervention
                    </div>
                    <div className="text-base font-bold text-white font-cinzel">
                      {recommendedPractice.title}
                    </div>
                    <p className="text-xs text-slate-300 max-w-xl">
                      {recommendedPractice.tagline} Typical engagement: {recommendedPractice.engagementLength}.
                    </p>
                  </div>
                  <div className="text-xs text-amber-300 font-medium px-3 py-1.5 rounded-lg bg-amber-500/20 border border-amber-500/40 whitespace-nowrap">
                    {recommendedPractice.keyMetric}
                  </div>
                </div>
              )}

              {/* Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-800">
                <button
                  onClick={handleReset}
                  className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Re-evaluate Assessment</span>
                </button>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    id="apply-diagnostic-to-briefing-btn"
                    onClick={() => onApplyDiagnosticToBooking(result)}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-md transition-all cursor-pointer"
                  >
                    <Calendar className="w-4 h-4 text-slate-950" />
                    <span>Attach Diagnostic to Executive Briefing</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
