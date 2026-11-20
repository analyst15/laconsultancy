import React, { useState } from 'react';
import { BookOpen, CheckCircle2, MessageCircle, Minus, Plus, ArrowUpRight } from 'lucide-react';

const JOURNAL_IMAGE_URL =
  'https://firebasestorage.googleapis.com/v0/b/keiyian-farm.firebasestorage.app/o/LA%20Consultancy%2FIMG_9288.jpeg?alt=media&token=72c42b58-51a9-4119-bcc8-07a4dc92a3fd';

const WHATSAPP_NUMBER = '254723821985';

export const FinancialJournalSection: React.FC = () => {
  const [quantity, setQuantity] = useState<number>(1);
  const [imgError, setImgError] = useState<boolean>(false);

  const handleDecrement = () => {
    setQuantity((prev) => Math.max(1, prev - 1));
  };

  const handleIncrement = () => {
    setQuantity((prev) => Math.min(50, prev + 1));
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Linda Aredo Consultancy, I would like to order ${quantity} ${
      quantity === 1 ? 'copy' : 'copies'
    } of the Financial Wellness Journal.`
  );
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

  const highlights = [
    'Guided monthly cash-flow, savings, and budgeting templates',
    'Structured goal-setting and personal net worth reflection pages',
    'Designed for individuals, professionals, and corporate wellness cohorts'
  ];

  return (
    <section
      id="financial-journal"
      className="relative bg-slate-50 py-20 sm:py-24 px-4 sm:px-8 lg:px-12 border-b border-slate-200 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-3xl border border-slate-200 shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Left Column: Product Photography */}
            <div className="lg:col-span-6 relative bg-[#012B2B] min-h-[340px] sm:min-h-[420px] lg:min-h-[480px] overflow-hidden">
              {!imgError ? (
                <img
                  src={JOURNAL_IMAGE_URL}
                  alt="Financial Wellness Journal by Linda Aredo Consultancy"
                  className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
                  referrerPolicy="no-referrer"
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-10 text-center bg-gradient-to-br from-[#012B2B] via-[#043333] to-slate-900 text-white">
                  <div className="w-16 h-16 rounded-2xl bg-[#0C685E]/40 border border-[#7BF0D4]/30 flex items-center justify-center mb-4">
                    <BookOpen className="w-8 h-8 text-[#7BF0D4]" />
                  </div>
                  <p className="font-cinzel text-xl font-bold text-white">
                    Financial Wellness Journal
                  </p>
                  <p className="text-xs text-[#9CB3AD] mt-1">
                    Linda Aredo Consultancy Edition
                  </p>
                </div>
              )}
              <div
                className="absolute inset-0 bg-gradient-to-t from-[#012B2B]/40 via-transparent to-transparent pointer-events-none"
                aria-hidden="true"
              />
            </div>

            {/* Right Column: Editorial Copy & WhatsApp Order Action */}
            <div className="lg:col-span-6 p-7 sm:p-10 lg:p-12 flex flex-col justify-between space-y-8">
              <div className="space-y-5">
                <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#0C685E]">
                  <span>Featured Publication</span>
                  <span aria-hidden="true" className="text-slate-300">
                    ·
                  </span>
                  <span>Financial Literacy</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-[1.18] text-balance">
                  Financial Wellness Journals
                </h2>

                <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
                  Financial Wellness Journals are now available for sale. Order a copy via WhatsApp and connect directly with our office at{' '}
                  <span className="font-semibold text-slate-900 tabular-nums whitespace-nowrap">
                    +254 723 821985
                  </span>
                  .
                </p>

                <div className="pt-4 border-t border-slate-200 space-y-3">
                  {highlights.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 text-sm text-slate-600 leading-relaxed"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#0C685E] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Order Controls & Primary WhatsApp CTA */}
              <div className="pt-6 border-t border-slate-200 space-y-4">
                <div className="flex flex-wrap items-center gap-4">
                  {/* Quantity Stepper */}
                  <div className="inline-flex items-center rounded-xl border border-slate-300 bg-slate-50 px-1.5 py-1">
                    <button
                      type="button"
                      onClick={handleDecrement}
                      disabled={quantity <= 1}
                      aria-label="Decrease copy quantity"
                      className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 hover:bg-white hover:text-slate-900 disabled:opacity-40 disabled:pointer-events-none transition-colors cursor-pointer"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="px-4 text-sm font-semibold text-slate-900 tabular-nums select-none">
                      {quantity} {quantity === 1 ? 'Copy' : 'Copies'}
                    </span>
                    <button
                      type="button"
                      onClick={handleIncrement}
                      disabled={quantity >= 50}
                      aria-label="Increase copy quantity"
                      className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 hover:bg-white hover:text-slate-900 disabled:opacity-40 disabled:pointer-events-none transition-colors cursor-pointer"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Direct WhatsApp Redirect Button */}
                  <a
                    id="order-financial-journal-whatsapp-btn"
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl bg-[#0C685E] hover:bg-[#09534b] text-white text-sm font-semibold shadow-sm hover:shadow transition-all whitespace-nowrap shrink-0"
                  >
                    <MessageCircle className="w-4 h-4 text-[#7BF0D4]" />
                    <span>Order via WhatsApp</span>
                    <ArrowUpRight className="w-4 h-4 text-[#7BF0D4]" />
                  </a>
                </div>

                <p className="text-xs text-slate-500">
                  Direct WhatsApp order line: +254723821985 · Individual &amp; bulk corporate orders available
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
