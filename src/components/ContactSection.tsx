import React, { useState } from 'react';
import { OFFICE_LOCATIONS } from '../data/consultancyData';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Shield } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryEmail, setInquiryEmail] = useState('');
  const [inquiryCompany, setInquiryCompany] = useState('');
  const [inquiryMessage, setInquiryMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmitInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryName || !inquiryEmail) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-8 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold mb-3">
            <MapPin className="w-3.5 h-3.5 text-amber-600" />
            <span>Southern California Presence</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-3">
            Los Angeles Executive Offices & Inquiries
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Consultations held at our Los Angeles boardrooms or via secure private communications. All inquiries subject to preliminary conflicts check and non-disclosure agreement.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Office Locations */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
              Regional Boardrooms & Innovation Hubs
            </h3>

            {OFFICE_LOCATIONS.map((loc, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl border border-slate-200 bg-slate-50/70 hover:border-slate-300 transition-all space-y-2"
              >
                <div className="flex items-center justify-between">
                  <h4 className="font-cinzel text-base font-bold text-slate-900">
                    {loc.name}
                  </h4>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-200 text-slate-700">
                    Primary Practice
                  </span>
                </div>

                <div className="text-xs text-slate-600 space-y-1">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                    <span>{loc.address}, {loc.city}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <a href={`tel:${loc.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-slate-900 font-medium">
                      {loc.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-slate-500 text-[11px]">
                    <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>{loc.hours}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Confidential Inquiry Form */}
          <div className="lg:col-span-6 bg-slate-900 text-white rounded-2xl p-7 sm:p-8 shadow-xl border border-slate-800">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
              <Shield className="w-3.5 h-3.5" />
              <span>Direct Partner RFP & Inquiry Portal</span>
            </div>
            <h3 className="font-cinzel text-xl sm:text-2xl font-bold mb-2">
              Submit an Executive Brief
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              Our Senior Managing Partner reviews all confidential briefs within 4 business hours.
            </p>

            {submitted ? (
              <div className="p-6 rounded-xl bg-slate-950 border border-slate-800 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-cinzel text-lg font-bold text-white">
                  Brief Received in Confidence
                </h4>
                <p className="text-xs text-slate-300">
                  Thank you, {inquiryName}. An executive summary confirmation has been dispatched to {inquiryEmail}. A designated partner lead will connect directly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setInquiryName('');
                    setInquiryEmail('');
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
                      placeholder="e.g. Marcus Sterling"
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
                      placeholder="msterling@enterprise.com"
                      value={inquiryEmail}
                      onChange={(e) => setInquiryEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-300 font-medium mb-1">
                    Company / Fund Name
                  </label>
                  <input
                    id="inquiry-company"
                    type="text"
                    placeholder="e.g. Horizon Pacific Capital"
                    value={inquiryCompany}
                    onChange={(e) => setInquiryCompany(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-medium mb-1">
                    Executive Scope Summary / Inquiry *
                  </label>
                  <textarea
                    id="inquiry-message"
                    required
                    rows={4}
                    placeholder="Summarize the transaction, growth initiative, or operational restructuring scope..."
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
                    <span>Submit Confidential Brief</span>
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
