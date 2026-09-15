import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, MessageCircle, Calendar } from 'lucide-react';

interface ContactSectionProps {
  onOpenBooking?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenBooking }) => {
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryEmail, setInquiryEmail] = useState('');
  const [inquiryPhone, setInquiryPhone] = useState('');
  const [inquiryCompany, setInquiryCompany] = useState('');
  const [inquiryMessage, setInquiryMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmitInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryName || !inquiryEmail) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 px-4 sm:px-8 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="font-cinzel text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Contact Us
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Direct Channels */}
          <div className="lg:col-span-5 p-7 rounded-2xl bg-slate-900 text-white border border-slate-800 space-y-6">
            <div>
              <h3 className="font-cinzel text-xl font-bold text-white mb-2">
                Direct Executive Channels
              </h3>
              <p className="text-xs text-slate-400">
                Connect directly with our advisory office via encrypted WhatsApp messaging, corporate email, or schedule a formal strategic briefing.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3 text-xs">
              <a
                href="https://wa.me/254723821985"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3.5 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-200 hover:bg-emerald-900/60 transition-colors"
              >
                <MessageCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                <div>
                  <div className="font-semibold text-white text-sm">WhatsApp Chat</div>
                  <div className="text-xs text-emerald-300 mt-0.5">+254 723 821985</div>
                </div>
              </a>

              <a
                href="mailto:info@laconsultancy.co.ke"
                className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-800 border border-slate-700 text-slate-200 hover:bg-slate-750 transition-colors"
              >
                <Mail className="w-5 h-5 text-amber-400 shrink-0" />
                <div>
                  <div className="font-semibold text-white text-sm">Email Advisory</div>
                  <div className="text-xs text-slate-300 mt-0.5">info@laconsultancy.co.ke</div>
                </div>
              </a>
            </div>

            {onOpenBooking && (
              <div className="pt-4 border-t border-slate-800 space-y-2">
                <div className="text-xs text-slate-400">
                  Prefer to reserve a designated consultation slot?
                </div>
                <button
                  onClick={onOpenBooking}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold transition-all cursor-pointer shadow-sm"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Strategic Briefing</span>
                </button>
              </div>
            )}
          </div>

          {/* Confidential Inquiry Form */}
          <div className="lg:col-span-7 bg-slate-900 text-white rounded-2xl p-7 sm:p-8 shadow-xl border border-slate-800">
            <h3 className="font-cinzel text-xl sm:text-2xl font-bold mb-6">
              Submit an Executive Inquiry
            </h3>

            {submitted ? (
              <div className="p-6 rounded-xl bg-slate-950 border border-slate-800 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-cinzel text-lg font-bold text-white">
                  Inquiry Received in Confidence
                </h4>
                <p className="text-xs text-slate-300">
                  Thank you, {inquiryName}. Your brief has been received. Our advisory team will connect directly at {inquiryEmail} to discuss alignment and next steps.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setInquiryName('');
                    setInquiryEmail('');
                    setInquiryPhone('');
                    setInquiryCompany('');
                    setInquiryMessage('');
                  }}
                  className="mt-2 text-xs text-amber-400 hover:text-amber-300 underline cursor-pointer"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmitInquiry} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-300 font-medium mb-1">
                      Full Name *
                    </label>
                    <input
                      id="inquiry-name"
                      type="text"
                      required
                      placeholder="e.g. David Mutua"
                      value={inquiryName}
                      onChange={(e) => setInquiryName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-medium mb-1">
                      Corporate Email *
                    </label>
                    <input
                      id="inquiry-email"
                      type="email"
                      required
                      placeholder="dmutua@organization.co.ke"
                      value={inquiryEmail}
                      onChange={(e) => setInquiryEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-300 font-medium mb-1">
                      Telephone / WhatsApp
                    </label>
                    <input
                      id="inquiry-phone"
                      type="tel"
                      placeholder="+254 700 000000"
                      value={inquiryPhone}
                      onChange={(e) => setInquiryPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-medium mb-1">
                      Company / Institution Name
                    </label>
                    <input
                      id="inquiry-company"
                      type="text"
                      placeholder="e.g. Apex Holdings East Africa"
                      value={inquiryCompany}
                      onChange={(e) => setInquiryCompany(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-300 font-medium mb-1">
                    Strategic Scope Summary / Inquiry *
                  </label>
                  <textarea
                    id="inquiry-message"
                    required
                    rows={4}
                    placeholder="Describe your organization's focus (e.g., leadership alignment, executive coaching, governance advisory, operational optimization)..."
                    value={inquiryMessage}
                    onChange={(e) => setInquiryMessage(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div className="pt-2">
                  <button
                    id="submit-inquiry-btn"
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-md transition-all cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit</span>
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
