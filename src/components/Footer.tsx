import React, { useState } from 'react';
import { MapPin, Phone, Mail, ArrowUp, Send, CheckCircle2, Linkedin, Facebook, Twitter, MessageCircle } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !email.includes('@')) return;
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 5000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-[#012B2B] text-white overflow-hidden border-t border-teal-950">
      {/* Background glow accents */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none opacity-20 blur-3xl rounded-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#1C5D37] via-[#0C685E] to-transparent -mr-20 -mt-20"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 pt-16 sm:pt-20 pb-12">
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-teal-900/70">
          
          {/* Column 1: Brand & Newsletter (4 cols on lg) */}
          <div className="lg:col-span-4 space-y-6">
            {/* Logo */}
            <div className="flex items-center gap-3">
              {/* Teal 8-pointed starburst icon */}
              <div className="w-8 h-8 flex items-center justify-center text-[#7BF0D4]">
                <svg
                  className="w-8 h-8 text-[#7BF0D4]"
                  viewBox="0 0 48 48"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <rect x="21" y="4" width="6" height="40" rx="3" transform="rotate(0 24 24)" />
                  <rect x="21" y="4" width="6" height="40" rx="3" transform="rotate(60 24 24)" />
                  <rect x="21" y="4" width="6" height="40" rx="3" transform="rotate(120 24 24)" />
                  <circle cx="24" cy="24" r="5" fill="#7BF0D4" />
                </svg>
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white">
                Linda Aredo Consultancy
              </span>
            </div>

            {/* Description */}
            <p className="text-[#9CB3AD] text-sm leading-relaxed max-w-sm">
              Strategic advisory, executive coaching, and organizational transformation empowering leaders and institutions across Kenya and Africa.
            </p>

            {/* Newsletter Subscription Form */}
            <form onSubmit={handleSubscribe} className="space-y-4 pt-2 max-w-sm">
              <div className="relative">
                <input
                  id="footer-newsletter-input"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter E-Mail*"
                  required
                  className="w-full bg-transparent border-b border-teal-700/80 focus:border-[#7BF0D4] pb-2.5 text-sm text-white placeholder:text-teal-200/50 outline-none transition-colors"
                />
              </div>

              <div className="flex items-center justify-between">
                <button
                  id="footer-newsletter-submit-btn"
                  type="submit"
                  className="px-8 py-2.5 rounded-full bg-[#0C685E] hover:bg-[#0f7d72] text-white font-semibold text-sm shadow-md hover:shadow-teal-900/50 transition-all cursor-pointer flex items-center gap-2"
                >
                  <span>Subscribe</span>
                  <Send className="w-3.5 h-3.5" />
                </button>

                {subscribed && (
                  <span className="text-xs text-[#7BF0D4] flex items-center gap-1.5 animate-fadeIn">
                    <CheckCircle2 className="w-4 h-4 text-[#7BF0D4]" />
                    <span>Subscribed!</span>
                  </span>
                )}
              </div>
            </form>
          </div>

          {/* Column 2: Company Links (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-bold text-white text-lg tracking-tight">
              Company
            </h3>
            <ul className="space-y-3 text-sm text-[#9CB3AD]">
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="hover:text-[#7BF0D4] transition-colors cursor-pointer text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('founder')}
                  className="hover:text-[#7BF0D4] transition-colors cursor-pointer text-left"
                >
                  Our Leadership
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('practices')}
                  className="hover:text-[#7BF0D4] transition-colors cursor-pointer text-left"
                >
                  Practice Areas
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="hover:text-[#7BF0D4] transition-colors cursor-pointer text-left"
                >
                  Core Values
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="hover:text-[#7BF0D4] transition-colors cursor-pointer text-left"
                >
                  Schedule Advisory
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Services Links (3 cols on lg) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-bold text-white text-lg tracking-tight">
              Services
            </h3>
            <ul className="space-y-3 text-sm text-[#9CB3AD]">
              <li>
                <button
                  onClick={() => scrollToSection('practices')}
                  className="hover:text-[#7BF0D4] transition-colors cursor-pointer text-left"
                >
                  Management Consultancy
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('practices')}
                  className="hover:text-[#7BF0D4] transition-colors cursor-pointer text-left"
                >
                  Strategy Development
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('practices')}
                  className="hover:text-[#7BF0D4] transition-colors cursor-pointer text-left"
                >
                  Operational Improvement
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('practices')}
                  className="hover:text-[#7BF0D4] transition-colors cursor-pointer text-left"
                >
                  Executive Coaching
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('practices')}
                  className="hover:text-[#7BF0D4] transition-colors cursor-pointer text-left"
                >
                  Leadership Development
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact (3 cols on lg) */}
          <div className="lg:col-span-3 space-y-5">
            <h3 className="font-bold text-white text-lg tracking-tight">
              Contact
            </h3>

            {/* Address */}
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#0C685E]/30 border border-teal-500/30 flex items-center justify-center text-[#7BF0D4] shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">Our address:</h4>
                  <p className="text-[#9CB3AD] text-xs leading-relaxed mt-0.5">
                    Nairobi, Kenya
                  </p>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="border-b border-teal-900/60 border-dotted" />

            {/* Phone */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#0C685E]/30 border border-teal-500/30 flex items-center justify-center text-[#7BF0D4] shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <a
                href="tel:+254723821985"
                className="font-bold text-white text-sm hover:text-[#7BF0D4] transition-colors"
              >
                (+254) 723 821985
              </a>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#0C685E]/30 border border-teal-500/30 flex items-center justify-center text-[#7BF0D4] shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <a
                href="mailto:info@laconsultancy.co.ke"
                className="font-bold text-white text-sm hover:text-[#7BF0D4] transition-colors"
              >
                info@laconsultancy.co.ke
              </a>
            </div>

          </div>

        </div>

        {/* Sub-Footer / Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Copyright */}
          <div className="text-xs text-white">
            Copyright © {new Date().getFullYear()} Linda Aredo Consultancy. All rights reserved.
          </div>

          {/* Social Links Icons */}
          <div className="flex items-center gap-3 text-[#9CB3AD]">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-full bg-teal-900/40 hover:bg-[#0C685E] border border-teal-700/50 hover:border-[#7BF0D4] text-[#9CB3AD] hover:text-[#7BF0D4] flex items-center justify-center transition-all cursor-pointer shadow-sm group"
            >
              <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-9 h-9 rounded-full bg-teal-900/40 hover:bg-[#0C685E] border border-teal-700/50 hover:border-[#7BF0D4] text-[#9CB3AD] hover:text-[#7BF0D4] flex items-center justify-center transition-all cursor-pointer shadow-sm group"
            >
              <Facebook className="w-4 h-4 group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter / X"
              className="w-9 h-9 rounded-full bg-teal-900/40 hover:bg-[#0C685E] border border-teal-700/50 hover:border-[#7BF0D4] text-[#9CB3AD] hover:text-[#7BF0D4] flex items-center justify-center transition-all cursor-pointer shadow-sm group"
            >
              <Twitter className="w-4 h-4 group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://wa.me/254723821985"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-9 h-9 rounded-full bg-teal-900/40 hover:bg-[#0C685E] border border-teal-700/50 hover:border-[#7BF0D4] text-[#9CB3AD] hover:text-[#7BF0D4] flex items-center justify-center transition-all cursor-pointer shadow-sm group"
            >
              <MessageCircle className="w-4 h-4 group-hover:scale-110 transition-transform" />
            </a>
          </div>

          {/* Scroll To Top Button with Amber Border matching inspo */}
          <button
            id="footer-scroll-to-top-btn"
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="w-10 h-10 rounded-full border-2 border-amber-500 bg-transparent hover:bg-amber-500 text-white hover:text-slate-950 flex items-center justify-center transition-all shadow-lg cursor-pointer group shrink-0"
          >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
          </button>

        </div>

      </div>
    </footer>
  );
};
