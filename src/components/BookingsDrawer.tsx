import React from 'react';
import { ConsultationBooking } from '../types';
import { PARTNERS, PRACTICE_AREAS } from '../data/consultancyData';
import { X, Calendar, Clock, Download, Trash2, Shield, Building } from 'lucide-react';

interface BookingsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  bookings: ConsultationBooking[];
  onCancelBooking: (id: string) => void;
}

export const BookingsDrawer: React.FC<BookingsDrawerProps> = ({
  isOpen,
  onClose,
  bookings,
  onCancelBooking
}) => {
  if (!isOpen) return null;

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

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-950/60 backdrop-blur-sm animate-fadeIn">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl border-l border-slate-200 flex flex-col justify-between">
          
          {/* Header */}
          <div className="p-6 border-b border-slate-200 flex items-center justify-between bg-slate-50">
            <div>
              <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-800">
                <Shield className="w-3.5 h-3.5 text-amber-600" />
                <span>Executive Portal</span>
              </div>
              <h3 className="font-cinzel text-lg font-bold text-slate-900 mt-1">
                My Scheduled Briefings
              </h3>
            </div>
            <button
              id="close-bookings-drawer-btn"
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-200/60 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Bookings List */}
          <div className="p-6 overflow-y-auto flex-1 space-y-4">
            {bookings.length === 0 ? (
              <div className="text-center py-12 text-slate-500 text-xs">
                <Calendar className="w-10 h-10 text-slate-300 mx-auto mb-3" />
                <p className="font-semibold text-slate-700">No Scheduled Briefings</p>
                <p className="mt-1">Use the schedule button to book a consultation with our senior partners.</p>
              </div>
            ) : (
              bookings.map((b) => {
                const partner = PARTNERS.find(p => p.id === b.partnerId);
                const practice = PRACTICE_AREAS.find(p => p.id === b.practiceId);

                return (
                  <div
                    key={b.id}
                    id={`booking-card-${b.referenceNumber}`}
                    className="p-4 rounded-xl border border-slate-200 bg-slate-50/70 space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold text-slate-500 font-mono">
                        {b.referenceNumber}
                      </span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                        {b.status}
                      </span>
                    </div>

                    <div>
                      <div className="text-xs font-bold text-slate-900">
                        {practice?.title || 'General Strategic Advisory'}
                      </div>
                      <div className="text-[11px] text-slate-500 mt-0.5">
                        Lead: {partner?.name || 'Managing Partner'}
                      </div>
                    </div>

                    <div className="text-xs text-slate-600 space-y-1 bg-white p-2.5 rounded-lg border border-slate-200">
                      <div className="flex items-center gap-1.5 font-medium text-slate-900">
                        <Clock className="w-3.5 h-3.5 text-amber-600" />
                        <span>{b.selectedDate} at {b.selectedTime}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-500 text-[11px]">
                        <Building className="w-3.5 h-3.5 text-slate-400" />
                        <span>{b.companyName} ({b.companyRole})</span>
                      </div>
                    </div>

                    {b.agendaSummary && (
                      <div className="text-[11px] text-slate-500 italic line-clamp-2">
                        "{b.agendaSummary}"
                      </div>
                    )}

                    <div className="flex items-center justify-between pt-2 border-t border-slate-200 text-xs">
                      <button
                        onClick={() => downloadCalendarFile(b)}
                        className="inline-flex items-center gap-1 text-slate-700 hover:text-slate-950 font-medium cursor-pointer"
                      >
                        <Download className="w-3 h-3 text-amber-600" />
                        <span>Add to iCal/Google</span>
                      </button>

                      <button
                        onClick={() => onCancelBooking(b.id)}
                        className="inline-flex items-center gap-1 text-red-600 hover:text-red-800 cursor-pointer"
                      >
                        <Trash2 className="w-3 h-3" />
                        <span>Cancel</span>
                      </button>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-slate-200 bg-slate-50 text-center">
            <p className="text-[11px] text-slate-500">
              Need immediate assistance? Call our Century City concierge at (310) 844-3200.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};
