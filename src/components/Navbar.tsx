import React, { useState } from 'react';
import { Shield, Phone, Mail, Menu, X, ChevronRight, MessageCircle } from 'lucide-react';
import { ConsultationBooking } from '../types';

interface NavbarProps {
  onOpenBooking: (practiceId?: string, partnerId?: string) => void;
  onOpenDiagnostic?: () => void;
  bookings: ConsultationBooking[];
  onOpenBookingsDrawer: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenBooking,
  onOpenDiagnostic,
  bookings,
  onOpenBookingsDrawer
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      {/* Executive Hotline & Office banner */}
      <div className="bg-slate-900 text-slate-300 text-xs py-1.5 px-4 sm:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-amber-400 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Linda Aredo Consultancy
            </span>
          </div>
          <div className="flex items-center gap-5 text-slate-300">
            <a href="tel:+254723821985" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone className="w-3 h-3 text-amber-400" />
              <span>(+254) 723 821985</span>
            </a>
            <a href="mailto:info@laconsultancy.co.ke" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Mail className="w-3 h-3 text-amber-400" />
              <span>info@laconsultancy.co.ke</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3.5 flex items-center justify-between">
        {/* Brand identity */}
        <button
          id="brand-logo-btn"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-3 text-left group cursor-pointer focus:outline-none"
        >
          <div className="w-10 h-10 rounded-lg bg-slate-900 border border-amber-500/40 flex items-center justify-center text-amber-400 shadow-sm group-hover:border-amber-400 transition-colors">
            <Shield className="w-5 h-5 text-amber-400" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-cinzel text-lg sm:text-xl font-bold tracking-wider text-slate-900">
                LA CONSULTANCY
              </span>
            </div>
            <p className="text-[10px] tracking-widest text-slate-500 uppercase font-semibold">
              Strategic Advisory & Solutions
            </p>
          </div>
        </button>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-700">
          <button
            id="nav-home-btn"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="hover:text-slate-950 transition-colors cursor-pointer py-1 font-semibold text-slate-900"
          >
            Home
          </button>
          <button
            id="nav-about-btn"
            onClick={() => scrollToSection('about')}
            className="hover:text-slate-950 transition-colors cursor-pointer py-1"
          >
            About Us
          </button>
          <button
            id="nav-leadership-btn"
            onClick={() => scrollToSection('founder')}
            className="hover:text-slate-950 transition-colors cursor-pointer py-1"
          >
            Leadership
          </button>
          <button
            id="nav-services-btn"
            onClick={() => scrollToSection('practices')}
            className="hover:text-slate-950 transition-colors cursor-pointer py-1"
          >
            Our Services
          </button>
          <button
            id="nav-contact-btn"
            onClick={() => scrollToSection('contact')}
            className="hover:text-slate-950 transition-colors cursor-pointer py-1"
          >
            Contact Us
          </button>
        </nav>

        {/* Action Button & Mobile toggle */}
        <div className="flex items-center gap-3">
          <a
            id="whatsapp-header-nav-btn"
            href="https://wa.me/254723821985"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-700 hover:bg-emerald-600 text-white text-sm font-semibold shadow-sm hover:shadow transition-all cursor-pointer border border-emerald-600 group"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-200"></span>
            </span>
            <MessageCircle className="w-4 h-4 text-emerald-200 fill-emerald-200/20 group-hover:scale-110 transition-transform" />
            <span>Chat with an Advisor</span>
          </a>

          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-5 py-4 space-y-3">
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="block w-full text-left py-2 text-base font-semibold text-slate-900 hover:text-amber-600"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="block w-full text-left py-2 text-base font-medium text-slate-800 hover:text-amber-600"
          >
            About Us
          </button>
          <button
            onClick={() => scrollToSection('founder')}
            className="block w-full text-left py-2 text-base font-medium text-slate-800 hover:text-amber-600"
          >
            Leadership
          </button>
          <button
            onClick={() => scrollToSection('practices')}
            className="block w-full text-left py-2 text-base font-medium text-slate-800 hover:text-amber-600"
          >
            Our Services
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="block w-full text-left py-2 text-base font-medium text-slate-800 hover:text-amber-600"
          >
            Contact Us
          </button>

          <div className="pt-2 border-t border-slate-100 space-y-2">
            <a
              href="https://wa.me/254723821985"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 rounded-lg bg-emerald-700 hover:bg-emerald-600 text-white font-semibold flex items-center justify-center gap-2 shadow-sm"
            >
              <MessageCircle className="w-4 h-4 text-emerald-200" />
              <span>Chat with an Advisor</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
