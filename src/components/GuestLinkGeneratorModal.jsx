import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Copy, Check, Share2, ExternalLink, Sparkles, UserCheck } from 'lucide-react';

export default function GuestLinkGeneratorModal({ isOpen, onClose }) {
  const [guestName, setGuestName] = useState('');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const baseUrl = typeof window !== 'undefined' 
    ? `${window.location.origin}${window.location.pathname}` 
    : 'https://chamod-kushani-wedding.vercel.app';

  const cleanName = guestName.trim();
  const generatedUrl = cleanName
    ? `${baseUrl}?to=${encodeURIComponent(cleanName).replace(/%20/g, '+')}`
    : baseUrl;

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const whatsappMessage = `Dear ${cleanName || 'Friend'},\n\nWe cordially invite you to celebrate the wedding union of Kushani & Chamod on Saturday, 17th October 2026 at Summerfield Hotel.\n\nPlease open your personalized invitation card below:\n${generatedUrl}`;
  const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(whatsappMessage)}`;

  const applyPreset = (tag) => {
    if (tag === 'Family') {
      if (!guestName.trim()) {
        setGuestName('Family ');
      } else if (!guestName.toLowerCase().includes('family')) {
        setGuestName(`${guestName.trim()} & Family`);
      }
    } else {
      const cleanExisting = guestName
        .replace(/^(Mr\s*&\s*Miss|Mr\s*&\s*Mrs|Mr|Miss|Mrs)\s*/i, '')
        .trim();
      setGuestName(cleanExisting ? `${tag} ${cleanExisting}` : `${tag} `);
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md select-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 15 }}
          className="relative w-full max-w-lg bg-gradient-to-b from-[#1c060d] via-[#140409] to-[#0c0205] border border-gold/40 rounded-2xl p-6 md:p-8 text-[#f0ebe0] shadow-[0_20px_50px_rgba(0,0,0,0.95)]"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-gold/70 hover:text-gold hover:bg-gold/10 rounded-full transition-all"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gold/10 border border-gold/30 mb-3 text-gold">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="font-cinzel text-xl md:text-2xl text-gold font-bold tracking-wider">
              Guest Link Generator
            </h3>
            <p className="font-cormorant text-xs md:text-sm text-[#f0ebe0]/70 mt-1">
              Create a personalized WhatsApp link for each guest or family
            </p>
          </div>

          {/* Input field */}
          <div className="mb-4">
            <label className="block text-[11px] font-montserrat uppercase tracking-[0.2em] text-gold/90 mb-2 font-semibold">
              Guest / Family Name:
            </label>
            <div className="relative">
              <input
                type="text"
                value={guestName}
                onChange={(e) => setGuestName(e.target.value)}
                placeholder="e.g. Mr Kasun OR Mr & Miss Perera"
                className="w-full bg-[#270814] border border-gold/40 rounded-xl px-4 py-3 text-[#fdfbf7] placeholder-[#f0ebe0]/30 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold text-sm font-montserrat"
              />
              {guestName && (
                <button 
                  onClick={() => setGuestName('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gold/50 hover:text-gold"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Quick Presets */}
            <div className="flex flex-wrap gap-1.5 mt-2.5">
              <span className="text-[10px] font-montserrat text-gold/60 mr-1 self-center">Presets:</span>
              {['Mr', 'Miss', 'Mr & Miss', 'Family'].map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => applyPreset(tag)}
                  className="text-[10px] font-montserrat px-2.5 py-1 rounded-full border border-gold/25 bg-[#1b050d] text-gold/85 hover:border-gold hover:text-gold hover:bg-gold/10 transition-colors cursor-pointer"
                >
                  +{tag}
                </button>
              ))}
            </div>
          </div>

          {/* Generated Link Preview Card */}
          <div className="bg-[#120307] border border-gold/25 rounded-xl p-3.5 mb-5">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[10px] font-montserrat uppercase tracking-[0.18em] text-gold/75">
                Generated Link Preview:
              </span>
              {cleanName && (
                <span className="text-[10px] font-montserrat text-emerald-400 flex items-center gap-1">
                  <UserCheck className="w-3 h-3" /> Personalized
                </span>
              )}
            </div>
            <p className="text-xs font-mono text-[#f0ebe0]/85 break-all bg-black/40 p-2.5 rounded-lg border border-gold/15 select-all">
              {generatedUrl}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            {/* Copy Button */}
            <button
              onClick={handleCopy}
              className={`flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl font-montserrat text-xs font-semibold tracking-wider transition-all shadow-md ${
                copied
                  ? 'bg-emerald-600 text-white border border-emerald-400'
                  : 'bg-gradient-to-r from-[#d4af37] to-[#b8932b] text-[#140409] hover:brightness-110 active:scale-95'
              }`}
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copy Link</span>
                </>
              )}
            </button>

            {/* WhatsApp Share Button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl font-montserrat text-xs font-semibold tracking-wider bg-[#25D366] text-black hover:bg-[#22bf5b] transition-all shadow-md active:scale-95"
            >
              <Share2 className="w-4 h-4 text-black" />
              <span>WhatsApp</span>
            </a>

            {/* Test Preview Button */}
            <a
              href={generatedUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl font-montserrat text-xs font-semibold tracking-wider border border-gold/40 bg-[#250813] text-gold hover:bg-[#380b1b] transition-all active:scale-95"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Preview</span>
            </a>
          </div>

          <div className="mt-5 text-center">
            <p className="text-[10px] text-[#f0ebe0]/45 font-montserrat">
              Tip: When sending on WhatsApp, the guest will see their name in the envelope and invitation automatically!
            </p>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
