import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, Check, Heart, User, Phone, Users, Utensils } from 'lucide-react';
import confetti from 'canvas-confetti';
import { RoyalDivider } from './KnexaElements';
import { weddingConfig } from '../data/weddingConfig';

export default function RsvpModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    attendance: 'Attending',
    guestsCount: '1',
    dietary: 'None',
    message: ''
  });

  const [status, setStatus] = useState('idle'); // idle | submitting | success

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const guest = params.get('guest') || params.get('to') || params.get('name') || params.get('n');
    if (guest && !formData.fullName) {
      try {
        setFormData(prev => ({ ...prev, fullName: decodeURIComponent(guest).replace(/\+/g, ' ') }));
      } catch (e) {
        setFormData(prev => ({ ...prev, fullName: guest.replace(/\+/g, ' ') }));
      }
    }
  }, []);

  const triggerConfetti = () => {
    try {
      const count = 180;
      const defaults = {
        origin: { y: 0.7 },
        colors: ['#85182a', '#d4af37', '#e8c87a', '#b87d6c', '#ffffff', '#580b18']
      };

      confetti({ ...defaults, particleCount: Math.floor(count * 0.35), spread: 60 });
      confetti({ ...defaults, particleCount: Math.floor(count * 0.4), spread: 100, decay: 0.91 });
      confetti({ ...defaults, particleCount: Math.floor(count * 0.25), spread: 120, startVelocity: 45 });
    } catch (e) {
      console.log("Confetti trigger:", e);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.phone.trim()) {
      alert("Please enter your Full Name and Phone Number.");
      return;
    }

    setStatus('submitting');

    const submission = {
      ...formData,
      submittedAt: new Date().toISOString()
    };

    localStorage.setItem('chamod_kushani_rsvp', JSON.stringify(submission));

    if (weddingConfig.googleSheetScriptUrl) {
      try {
        await fetch(weddingConfig.googleSheetScriptUrl, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(submission)
        });
      } catch (err) {
        console.warn("Google Sheet error:", err);
      }
    }

    setTimeout(() => {
      setStatus('success');
      triggerConfetti();
    }, 800);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 overflow-y-auto select-none">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-lg my-8 rounded-2xl bg-gradient-to-b from-[#220711] via-[#17040b] to-[#0e0306] border border-gold/35 p-6 md:p-10 shadow-[0_20px_60px_rgba(26,8,13,0.95)] text-[#fdfbf7]"
      >
        {/* Knexa 4 Gold Corner Brackets on Modal */}
        <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-gold/40" />
        <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-gold/40" />
        <div className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-gold/40" />
        <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-gold/40" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#240813] border border-gold/30 hover:border-gold text-[#fdfbf7]/70 hover:text-gold flex items-center justify-center transition-colors z-20"
        >
          <X className="w-4 h-4" />
        </button>

        {status === 'success' ? (
          /* Exact Knexa Success Screen */
          <div className="text-center py-6 flex flex-col items-center">
            {/* Glowing Icon */}
            <div className="relative mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-gold to-gold-dark flex items-center justify-center shadow-lg relative z-10 border border-gold-light/40">
                <Check className="w-8 h-8 text-[#0e0406] stroke-[3]" />
              </div>
              <div className="absolute inset-0 rounded-full bg-gold/20 animate-ping opacity-60" />
            </div>

            <h4 className="text-gold font-cormorant text-xs tracking-[0.3em] uppercase mb-2 font-semibold animate-pulse">
              RSVP Confirmed
            </h4>
            <h3 className="text-2xl md:text-3xl font-cinzel text-[#fdfbf7] tracking-wider mb-4 font-normal">
              Seat Secured!
            </h3>

            <div className="my-6 p-5 bg-[#120308]/90 rounded-xl border border-gold/20 w-full text-left shadow-inner">
              <p className="text-xs font-cormorant tracking-widest text-gold font-medium uppercase mb-1.5">
                Honored Guest
              </p>
              <p className="text-base md:text-lg text-gold-light font-cinzel leading-snug tracking-wide">
                {formData.fullName}
              </p>
              <p className="text-xs text-[#fdfbf7]/75 font-cormorant leading-relaxed mt-2">
                Thank you for confirming. Knexa System has successfully registered your response!
              </p>
              <p className="text-xs text-[#fdfbf7]/60 font-cormorant leading-relaxed mt-2">
                We look forward to celebrating this celestial union of Kushani &amp; Chamod with you on Saturday, October 17, 2026.
              </p>
            </div>

            <button
              onClick={onClose}
              className="px-8 py-2.5 rounded-full bg-gradient-to-r from-[#6e0f21] via-[#85182a] to-[#9e1c34] text-white text-xs font-montserrat tracking-[0.25em] uppercase font-semibold border border-gold/40 hover:scale-105 transition-transform"
            >
              Close &amp; Return
            </button>
          </div>
        ) : (
          /* Exact Knexa Form Screen */
          <div>
            <div className="text-center mb-8 flex flex-col items-center select-none">
              <span className="text-gold-light tracking-[0.3em] text-xs font-semibold uppercase font-cormorant block mb-2 animate-pulse">
                Knexa Smart Portal
              </span>
              <h2 className="text-3xl md:text-4xl font-cinzel font-normal text-[#fdfbf7] tracking-wider leading-tight">
                Smart RSVP Portal
              </h2>
              <RoyalDivider className="my-3 opacity-75" />
              <p className="text-xs text-[#fdfbf7]/65 font-cormorant mt-2 max-w-sm mx-auto leading-relaxed tracking-wider">
                Kindly respond by October 1, 2026, to help us curate your custom luxury experience.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-cormorant uppercase tracking-widest text-gold mb-1 font-medium">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-3 w-4 h-4 text-gold/60" />
                  <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-[#140308] border border-gold/25 text-[#fdfbf7] placeholder-white/25 text-xs font-montserrat focus:outline-none focus:border-gold transition-colors"
                  />
                </div>
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-xs font-cormorant uppercase tracking-widest text-gold mb-1 font-medium">
                  Phone Number *
                </label>
                <div className="relative">
                  <Phone className="absolute left-3.5 top-3 w-4 h-4 text-gold/60" />
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 077 123 4567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-[#140308] border border-gold/25 text-[#fdfbf7] placeholder-white/25 text-xs font-montserrat focus:outline-none focus:border-gold transition-colors"
                  />
                </div>
              </div>

              {/* Attendance Toggle */}
              <div>
                <label className="block text-xs font-cormorant uppercase tracking-widest text-gold mb-1 font-medium">
                  Will You Attend?
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, attendance: 'Attending' })}
                    className={`py-2.5 rounded-lg border text-xs font-montserrat font-medium flex items-center justify-center gap-2 transition-all ${
                      formData.attendance === 'Attending'
                        ? 'bg-gradient-to-r from-[#6e0f21] to-[#85182a] border-gold text-white shadow-md'
                        : 'bg-[#140308] border-gold/20 text-[#fdfbf7]/60 hover:border-gold/40'
                    }`}
                  >
                    <Heart className={`w-3.5 h-3.5 ${formData.attendance === 'Attending' ? 'fill-white' : ''}`} />
                    Attending
                  </button>

                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, attendance: 'Declined' })}
                    className={`py-2.5 rounded-lg border text-xs font-montserrat font-medium flex items-center justify-center gap-2 transition-all ${
                      formData.attendance === 'Declined'
                        ? 'bg-[#240813] border-gold text-white shadow-md'
                        : 'bg-[#140308] border-gold/20 text-[#fdfbf7]/60 hover:border-gold/40'
                    }`}
                  >
                    <X className="w-3.5 h-3.5" />
                    Declined
                  </button>
                </div>
              </div>

              {/* Conditional Fields if attending */}
              {formData.attendance === 'Attending' && (
                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div>
                    <label className="block text-xs font-cormorant uppercase tracking-widest text-gold mb-1 font-medium">
                      Total Guests
                    </label>
                    <div className="relative">
                      <Users className="absolute left-3.5 top-3 w-4 h-4 text-gold/60" />
                      <select
                        value={formData.guestsCount}
                        onChange={(e) => setFormData({ ...formData, guestsCount: e.target.value })}
                        className="w-full pl-10 pr-3 py-2.5 rounded-lg bg-[#140308] border border-gold/25 text-[#fdfbf7] text-xs font-montserrat focus:outline-none focus:border-gold appearance-none"
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8].map(n => (
                          <option key={n} value={n} className="bg-[#1a060e] text-white">
                            {n} {n === 1 ? 'Guest' : 'Guests'}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-cormorant uppercase tracking-widest text-gold mb-1 font-medium">
                      Dietary/Meal
                    </label>
                    <div className="relative">
                      <Utensils className="absolute left-3.5 top-3 w-4 h-4 text-gold/60" />
                      <select
                        value={formData.dietary}
                        onChange={(e) => setFormData({ ...formData, dietary: e.target.value })}
                        className="w-full pl-10 pr-3 py-2.5 rounded-lg bg-[#140308] border border-gold/25 text-[#fdfbf7] text-xs font-montserrat focus:outline-none focus:border-gold appearance-none"
                      >
                        <option value="None" className="bg-[#1a060e] text-white">None</option>
                        <option value="Vegetarian" className="bg-[#1a060e] text-white">Vegetarian</option>
                        <option value="Non-Vegetarian" className="bg-[#1a060e] text-white">Non-Vegetarian</option>
                        <option value="Gluten-Free" className="bg-[#1a060e] text-white">Gluten-Free</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full mt-4 py-3.5 rounded-full bg-gradient-to-r from-[#6e0f21] via-[#85182a] to-[#9e1c34] text-white text-xs font-montserrat tracking-[0.25em] uppercase font-semibold border border-gold/40 shadow-[0_4px_25px_rgba(133,24,42,0.6)] hover:scale-[1.02] transition-transform disabled:opacity-50"
              >
                {status === 'submitting' ? "Securing Your Seat..." : "Submit RSVP"}
              </button>
            </form>
          </div>
        )}
      </motion.div>
    </div>
  );
}
