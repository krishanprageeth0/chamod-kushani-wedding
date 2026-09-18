import React, { useState } from 'react';
import { Phone, Sparkles } from 'lucide-react';
import { weddingConfig } from '../data/weddingConfig';
import GuestLinkGeneratorModal from './GuestLinkGeneratorModal';

export default function FooterSection() {
  const [isGeneratorOpen, setIsGeneratorOpen] = useState(false);

  return (
    <footer className="relative py-16 px-4 bg-gradient-to-b from-[#140409] via-[#1a080d] to-[#0e0406] border-t border-gold/25 text-center select-none overflow-hidden">
      {/* Top Gold Ambient Glow */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-16 bg-[#85182a]/15 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-md mx-auto flex flex-col items-center justify-center relative z-10">
        {/* Names & Date */}
        <p className="text-[11px] md:text-xs font-montserrat tracking-[0.35em] uppercase text-[#f0ebe0]/75 leading-relaxed font-semibold">
          CHAMOD &amp; KUSHANI • 17 OCTOBER 2026
        </p>

        {/* Small Gold Divider Line with Center Diamond */}
        <div className="flex items-center justify-center gap-2 my-4 opacity-70">
          <div className="h-[1px] w-10 bg-gradient-to-r from-transparent to-gold/60" />
          <div className="w-1.5 h-1.5 rotate-45 border border-gold bg-[#85182a]" />
          <div className="h-[1px] w-10 bg-gradient-to-l from-transparent to-gold/60" />
        </div>

        {/* VIP Guest Invite Link Generator for Couple / Client */}
        <div className="mb-6">
          <button
            onClick={() => setIsGeneratorOpen(true)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/40 bg-gradient-to-r from-[#2a0715] via-[#3d0a1e] to-[#2a0715] text-[10px] md:text-[11px] font-montserrat uppercase tracking-[0.2em] text-gold hover:border-gold hover:brightness-125 transition-all shadow-[0_4px_15px_rgba(0,0,0,0.6)] cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span>Generate Guest Link</span>
          </button>
        </div>

        {/* Powered by Knexa System */}
        <div className="flex flex-col items-center justify-center gap-1.5">
          <span className="text-[10px] md:text-[11px] font-montserrat tracking-[0.25em] uppercase font-semibold text-gold">
            POWERED BY KNEXA SYSTEM
          </span>
          <span className="text-[8px] md:text-[9px] font-montserrat tracking-[0.18em] uppercase text-[#f0ebe0]/40">
            CREATING NEXT-LEVEL DIGITAL EXPERIENCES
          </span>

          {/* Company Contact */}
          <a
            href="tel:0701379291"
            className="inline-flex items-center gap-1.5 mt-2 px-3 py-1 rounded-full border border-gold/20 bg-[#1f060f] text-[9px] md:text-[10px] font-montserrat tracking-[0.2em] text-gold/85 hover:text-gold hover:border-gold/50 transition-all"
          >
            <Phone className="w-2.5 h-2.5 text-gold" />
            <span>070 137 9291</span>
          </a>
        </div>
      </div>

      {/* Generator Modal */}
      <GuestLinkGeneratorModal 
        isOpen={isGeneratorOpen} 
        onClose={() => setIsGeneratorOpen(false)} 
      />
    </footer>
  );
}
