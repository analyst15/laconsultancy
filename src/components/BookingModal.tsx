import React, { useState, useEffect } from 'react';
import { PRACTICE_AREAS, PARTNERS } from '../data/consultancyData';
import { ConsultationBooking } from '../types';
import {
  X,
  Calendar as CalendarIcon,
  Clock,
  User,
  Building,
  Mail,
  Phone,
  Shield,
  CheckCircle2,
  Download,
  AlertCircle,
  FileText
} from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPracticeId?: string;
  initialPartnerId?: string;
  initialNotes?: string;
  onBookingConfirmed: (booking: ConsultationBooking) => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialPracticeId,
  initialPartnerId,
  initialNotes,
  onBookingConfirmed
}) => {
  const [step, setStep] = useState<number>(1);
  const [practiceId, setPracticeId] = useState<string>(initialPracticeId || PRACTICE_AREAS[0].id);
  const [partnerId, setPartnerId] = useState<string>(initialPartnerId || PARTNERS[0].id);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('10:00 AM PST');
  
  // Form fields
  const [clientName, setClientName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [companyName, setCompanyName] = useState<string>('');
  const [companyRole, setCompanyRole] = useState<string>('Founder / C-Suite');
  const [companyStage, setCompanyStage] = useState<string>('$20M – $100M ARR');
  const [agendaSummary, setAgendaSummary] = useState<string>(initialNotes || '');
  const [hasNDA, setHasNDA] = useState<boolean>(true);
  const [errorMsg, setErrorMsg] = useState<string>('');
  
  // Confirmed booking state
  const [confirmedBooking, setConfirmedBooking] = useState<ConsultationBooking | null>(null);

  useEffect(() => {
    if (initialPracticeId) setPracticeId(initialPracticeId);
    if (initialPartnerId) setPartnerId(initialPartnerId);
    if (initialNotes) setAgendaSummary(initialNotes);
  }, [initialPracticeId, initialPartnerId, initialNotes]);

  // Set default date to next business day
  useEffect(() => {
    const today = new Date();
    const nextDay = new Date(today);
    nextDay.setDate(today.getDate() + 2);
    // Format YYYY-MM-DD
    const isoDate = nextDay.toISOString().split('T')[0];
    setSelectedDate(isoDate);
  }, []);

  if (!isOpen) return null;

  const timeSlots = [
    '09:00 AM PST',
    '10:30 AM PST',
    '01:30 PM PST',
    '03:00 PM PST',
    '04:30 PM PST'
  ];

  const handleNextToStep2 = () => {
    setStep(2);
  };

  const handleNextToStep3 = () => {
    if (!selectedDate || !selectedTime) {
      setErrorMsg('Please select a date and time slot.');
      return;
    }
    setErrorMsg('');
    setStep(3);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName.trim() || !email.trim() || !companyName.trim()) {
      setErrorMsg('Please fill in your name, executive email, and company.');
      return;
    }

    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const newBooking: ConsultationBooking = {
      id: `booking-${Date.now()}`,
      referenceNumber: `LAC-${randomSuffix}`,
      clientName,
      email,
      phone: phone || '+1 (310) 555-0199',
      companyName,
      companyRole,
      companyStage,
      practiceId,
      partnerId,
      selectedDate,
      selectedTime,
      agendaSummary: agendaSummary || 'Initial exploratory executive briefing and diagnostic evaluation.',
      hasNDA,
      status: 'Confirmed',
      createdAt: new Date().toISOString()
    };

    onBookingConfirmed(newBooking);
    setConfirmedBooking(newBooking);
    setStep(4);
  };

  const downloadCalendarFile = (b: ConsultationBooking) => {
    const partner = PARTNERS.find(p => p.id === b.partnerId)?.name || 'Managing Partner';
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//LA Consultancy//Executive Briefing//EN',
      'BEGIN:VEVENT',
      `UID:${b.referenceNumber}@laconsultancy.com`,
      `DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').split('.')[0]}Z`,
      `SUMMARY:LA Consultancy Briefing with ${partner} (${b.referenceNumber})`,
      `DESCRIPTION:Executive strategy consultation with ${partner} for ${b.companyName}. Protected by mutual NDA.`,
      'LOCATION:LA Consultancy Century City Flagship / Secure Video Conference',
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `LA-Consultancy-Briefing-${b.referenceNumber}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const selectedPractice = PRACTICE_AREAS.find(p => p.id === practiceId);
  const selectedPartner = PARTNERS.find(p => p.id === partnerId);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-sm overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-slate-200 relative my-auto">
        
        {/* Modal Close */}
        <button
          id="close-booking-modal-btn"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 cursor-pointer"
          aria-label="Close booking modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="p-6 sm:p-7 border-b border-slate-100 bg-slate-50/50">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-800 mb-1">
            <Shield className="w-3.5 h-3.5 text-amber-600" />
            <span>Executive Briefing Scheduling</span>
          </div>
          <h2 className="font-cinzel text-xl sm:text-2xl font-bold text-slate-900">
            {step === 4 ? 'Briefing Confirmed' : 'Schedule Confidential Consultation'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            {step === 4
              ? 'Your briefing dossier has been queued with our senior partners.'
              : 'Direct 45-minute diagnostic session with a designated Senior Practice Partner.'}
          </p>

          {/* Stepper indicator */}
          {step < 4 && (
            <div className="flex items-center gap-2 mt-4 pt-3 border-t border-slate-200/60">
              {[
                { s: 1, label: 'Practice & Lead' },
                { s: 2, label: 'Date & Time' },
                { s: 3, label: 'Organization Details' }
              ].map((item) => (
                <div key={item.s} className="flex items-center gap-1.5 text-xs">
                  <div
                    className={`w-5 h-5 rounded-full flex items-center justify-center text-[11px] font-bold ${
                      step === item.s
                        ? 'bg-slate-900 text-white'
                        : step > item.s
                        ? 'bg-amber-500 text-slate-950'
                        : 'bg-slate-200 text-slate-500'
                    }`}
                  >
                    {item.s}
                  </div>
                  <span className={step === item.s ? 'font-bold text-slate-900' : 'text-slate-500'}>
                    {item.label}
                  </span>
                  {item.s < 3 && <span className="text-slate-300 mx-1">/</span>}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Error message */}
        {errorMsg && (
          <div className="mx-6 mt-4 p-3 rounded-lg bg-red-50 border border-red-200 flex items-center gap-2 text-xs text-red-700">
            <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}

        {/* Modal Body */}
        <div className="p-6 sm:p-7">
          {/* STEP 1: Practice Area & Partner */}
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Select Primary Strategic Focus
                </label>
                <div className="space-y-2">
                  {PRACTICE_AREAS.map((p) => (
                    <button
                      key={p.id}
                      id={`booking-select-practice-${p.id}`}
                      type="button"
                      onClick={() => setPracticeId(p.id)}
                      className={`w-full text-left p-3.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                        practiceId === p.id
                          ? 'bg-amber-50/70 border-amber-500 text-slate-900 font-semibold'
                          : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                      }`}
                    >
                      <div>
                        <div className="text-sm font-bold">{p.title}</div>
                        <div className="text-xs text-slate-500">{p.tagline}</div>
                      </div>
                      <div className="text-xs font-bold text-amber-700 shrink-0 ml-3">
                        {p.engagementLength}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Designated Partner Lead
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {PARTNERS.map((partner) => (
                    <button
                      key={partner.id}
                      id={`booking-select-partner-${partner.id}`}
                      type="button"
                      onClick={() => setPartnerId(partner.id)}
                      className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                        partnerId === partner.id
                          ? 'bg-slate-900 border-slate-900 text-white shadow-sm'
                          : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                      }`}
                    >
                      <div className="text-xs font-bold">{partner.name}</div>
                      <div className={`text-[11px] mt-0.5 ${partnerId === partner.id ? 'text-amber-300' : 'text-slate-500'}`}>
                        {partner.role}
                      </div>
                      <div className={`text-[10px] mt-1 line-clamp-1 ${partnerId === partner.id ? 'text-slate-300' : 'text-slate-400'}`}>
                        {partner.education}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex justify-end pt-4 border-t border-slate-100">
                <button
                  id="booking-step1-next-btn"
                  onClick={handleNextToStep2}
                  className="px-6 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold shadow transition-all cursor-pointer"
                >
                  Continue to Date & Time
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: Date & Time Picker */}
          {step === 2 && (
            <div className="space-y-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Select Consultation Date (Pacific Standard Time)
                </label>
                <input
                  id="booking-date-input"
                  type="date"
                  value={selectedDate}
                  min={new Date().toISOString().split('T')[0]}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm font-medium text-slate-800 focus:outline-none focus:border-slate-900"
                />
                <p className="text-[11px] text-slate-500 mt-1">
                  Briefings conducted via encrypted video or at our Century City boardroom.
                </p>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Select Time Window
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setSelectedTime(slot)}
                      className={`py-2.5 px-3 rounded-lg border text-center text-xs font-semibold transition-all cursor-pointer ${
                        selectedTime === slot
                          ? 'bg-amber-500 border-amber-500 text-slate-950 font-bold shadow-sm'
                          : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-center justify-between">
                <div>
                  <span className="font-semibold text-slate-900">Summary: </span>
                  <span>{selectedDate} at {selectedTime}</span>
                </div>
                <span className="text-amber-800 font-medium">45 Min Duration</span>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="text-xs font-semibold text-slate-600 hover:text-slate-900 cursor-pointer"
                >
                  Back
                </button>
                <button
                  id="booking-step2-next-btn"
                  onClick={handleNextToStep3}
                  className="px-6 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold shadow transition-all cursor-pointer"
                >
                  Continue to Organization Details
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Client & Company Information */}
          {step === 3 && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    id="client-name-input"
                    type="text"
                    required
                    placeholder="e.g. Katherine Hayes"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="w-full px-3.5 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:border-slate-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Executive Corporate Email *
                  </label>
                  <input
                    id="client-email-input"
                    type="email"
                    required
                    placeholder="katherine@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:border-slate-900"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Company / Entity Name *
                  </label>
                  <input
                    id="client-company-input"
                    type="text"
                    required
                    placeholder="e.g. Solana Peak Enterprises"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    className="w-full px-3.5 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:border-slate-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Executive Role / Title
                  </label>
                  <select
                    id="client-role-select"
                    value={companyRole}
                    onChange={(e) => setCompanyRole(e.target.value)}
                    className="w-full px-3.5 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:border-slate-900 bg-white"
                  >
                    <option value="Chief Executive Officer (CEO)">Chief Executive Officer (CEO)</option>
                    <option value="Chief Financial Officer (CFO)">Chief Financial Officer (CFO)</option>
                    <option value="Chief Operating Officer (COO)">Chief Operating Officer (COO)</option>
                    <option value="Managing Director / General Partner">Managing Director / General Partner</option>
                    <option value="Board Member / Chair">Board Member / Chair</option>
                    <option value="VP Strategy / Corporate Development">VP Strategy / Corporate Development</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Annual Revenue Tier
                  </label>
                  <select
                    id="client-revenue-select"
                    value={companyStage}
                    onChange={(e) => setCompanyStage(e.target.value)}
                    className="w-full px-3.5 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:border-slate-900 bg-white"
                  >
                    <option value="<$10M ARR">Early Growth (&lt;$10M ARR)</option>
                    <option value="$10M – $50M ARR">$10M – $50M ARR</option>
                    <option value="$50M – $200M ARR">$50M – $200M ARR</option>
                    <option value="$200M+ Enterprise">$200M+ Enterprise / Global</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Contact Telephone (Optional)
                  </label>
                  <input
                    id="client-phone-input"
                    type="tel"
                    placeholder="+1 (310) 000-0000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:border-slate-900"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Primary Strategic Agenda / Key Challenges
                </label>
                <textarea
                  id="client-agenda-textarea"
                  rows={3}
                  placeholder="Outline your primary strategic bottlenecks, upcoming transactions, or target outcomes..."
                  value={agendaSummary}
                  onChange={(e) => setAgendaSummary(e.target.value)}
                  className="w-full px-3.5 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:border-slate-900"
                />
              </div>

              {/* NDA Checkbox */}
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <label className="flex items-start gap-2.5 cursor-pointer">
                  <input
                    id="client-nda-checkbox"
                    type="checkbox"
                    checked={hasNDA}
                    onChange={(e) => setHasNDA(e.target.checked)}
                    className="mt-0.5 rounded text-amber-600 focus:ring-amber-500"
                  />
                  <div className="text-xs text-slate-700">
                    <span className="font-semibold text-slate-900">
                      Mutual Non-Disclosure Agreement (NDA) Execution:
                    </span>{' '}
                    I request that LA Consultancy’s standard mutual NDA govern this exploratory session to protect proprietary business models and financials.
                  </div>
                </label>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="text-xs font-semibold text-slate-600 hover:text-slate-900 cursor-pointer"
                >
                  Back
                </button>
                <button
                  id="booking-confirm-submit-btn"
                  type="submit"
                  className="px-6 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold shadow transition-all cursor-pointer"
                >
                  Confirm & Lock in Briefing
                </button>
              </div>
            </form>
          )}

          {/* STEP 4: Confirmed State */}
          {step === 4 && confirmedBooking && (
            <div className="space-y-6 text-center animate-fadeIn">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-1">
                <div className="text-xs font-bold uppercase tracking-widest text-slate-500">
                  Reference Code: <span className="text-slate-900">{confirmedBooking.referenceNumber}</span>
                </div>
                <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-slate-900">
                  Briefing Scheduled Successfully
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                  A calendar invitation and encrypted briefing room link have been prepared for {confirmedBooking.clientName} ({confirmedBooking.companyName}).
                </p>
              </div>

              {/* Briefing summary card */}
              <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 text-left text-xs space-y-2.5 max-w-lg mx-auto">
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500">Consultant Lead:</span>
                  <span className="font-bold text-slate-900">{selectedPartner?.name}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500">Practice Discipline:</span>
                  <span className="font-bold text-slate-900">{selectedPractice?.title}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500">Scheduled Date & Time:</span>
                  <span className="font-bold text-slate-900">{confirmedBooking.selectedDate} at {confirmedBooking.selectedTime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Location / Format:</span>
                  <span className="font-bold text-slate-900">LA Consultancy Flagship Boardroom / Encrypted Video</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <button
                  id="download-calendar-invite-btn"
                  onClick={() => downloadCalendarFile(confirmedBooking)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold cursor-pointer transition-all"
                >
                  <Download className="w-4 h-4 text-amber-400" />
                  <span>Download Calendar Invite (.ics)</span>
                </button>

                <button
                  id="close-confirmed-modal-btn"
                  onClick={onClose}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-100 text-xs font-bold cursor-pointer transition-all"
                >
                  Return to Dashboard
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
