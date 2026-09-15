/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { FounderProfileSection } from './components/FounderProfileSection';
import { PracticesSection } from './components/PracticesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { BookingsDrawer } from './components/BookingsDrawer';
import { ConsultationBooking } from './types';
import { CheckCircle2 } from 'lucide-react';

const STORAGE_KEY = 'la_consultancy_bookings';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [initialPracticeId, setInitialPracticeId] = useState<string | undefined>();
  const [initialPartnerId, setInitialPartnerId] = useState<string | undefined>();
  const [initialNotes, setInitialNotes] = useState<string | undefined>();
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Load bookings from localStorage or initialize with an illustrative initial briefing
  const [bookings, setBookings] = useState<ConsultationBooking[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error('Failed to parse saved bookings', e);
    }
    // Default demo session for immediate exploration
    return [
      {
        id: 'booking-demo-01',
        referenceNumber: 'LAC-7824',
        clientName: 'Julian Sterling',
        email: 'j.sterling@pacificcontent.com',
        phone: '+254 723 821985',
        companyName: 'Pacific Content Group',
        companyRole: 'Chief Strategy Officer',
        companyStage: '$50M – $200M ARR',
        practiceId: 'management-consultancy',
        partnerId: 'linda-aredo',
        selectedDate: '2026-09-18',
        selectedTime: '10:30 AM EAT',
        agendaSummary: 'Quarterly review on direct-to-platform licensing agreements and international IP syndication.',
        hasNDA: true,
        status: 'Confirmed',
        createdAt: '2026-09-12T08:00:00.000Z'
      }
    ];
  });

  // Save bookings to localStorage whenever they change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(bookings));
    } catch (e) {
      console.error('Failed to save bookings', e);
    }
  }, [bookings]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const handleOpenBooking = (practiceId?: string, partnerId?: string, notes?: string) => {
    setInitialPracticeId(practiceId);
    setInitialPartnerId(partnerId);
    setInitialNotes(notes);
    setIsBookingOpen(true);
  };

  const handleSelectPractice = (practiceId: string) => {
    handleOpenBooking(practiceId);
  };

  const handleBookingConfirmed = (newBooking: ConsultationBooking) => {
    setBookings(prev => [newBooking, ...prev]);
    showToast(`Briefing confirmed! Reference: ${newBooking.referenceNumber}`);
  };

  const handleCancelBooking = (bookingId: string) => {
    setBookings(prev => prev.filter(b => b.id !== bookingId));
    showToast('Briefing cancelled.');
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-amber-100 selection:text-amber-900 flex flex-col justify-between">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-5 right-5 z-50 bg-slate-900 text-white px-5 py-3 rounded-xl border border-amber-500/40 shadow-xl flex items-center gap-3 animate-fadeIn text-xs">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Navigation Header */}
      <Navbar
        onOpenBooking={() => handleOpenBooking()}
        bookings={bookings}
        onOpenBookingsDrawer={() => setIsDrawerOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* About Us Section */}
        <AboutSection
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* Founder & Consultant Profile Section */}
        <FounderProfileSection
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* Practice Areas ending with the Need a Customized Consulting or Coaching Program? CTA */}
        <PracticesSection
          onSelectPractice={handleSelectPractice}
        />

        {/* Contact Us Section */}
        <ContactSection
          onOpenBooking={() => handleOpenBooking()}
        />
      </main>

      {/* Footer matching inspiration */}
      <Footer />

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialPracticeId={initialPracticeId}
        initialPartnerId={initialPartnerId}
        initialNotes={initialNotes}
        onBookingConfirmed={handleBookingConfirmed}
      />

      {/* My Bookings Drawer */}
      <BookingsDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        bookings={bookings}
        onCancelBooking={handleCancelBooking}
      />

    </div>
  );
}
