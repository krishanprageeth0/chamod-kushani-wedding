import React from 'react';
import { motion } from 'framer-motion';
import { RoyalDivider } from './KnexaElements';
import { weddingConfig } from '../data/weddingConfig';

export default function RomanticQuoteSection() {
  return (
    <section className="relative py-24 md:py-32 px-4 text-center select-none overflow-hidden flex flex-col items-center justify-center">
      {/* Top Gold Gradient Border Line */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      {/* Ambient Velvet Maroon Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] bg-[#85182a]/15 rounded-full blur-[100px] pointer-events-none" />

      {/* Floating Sparkles Accents */}
      <div className="absolute top-12 left-[12%] w-2 h-2 bg-gold/40 rounded-full animate-float pointer-events-none" />
      <div className="absolute bottom-16 right-[14%] w-2.5 h-2.5 bg-gold/35 rounded-full animate-float pointer-events-none" style={{ animationDelay: '2.5s' }} />
      <div className="absolute top-1/3 right-[8%] w-1.5 h-1.5 bg-gold/50 rounded-full animate-float pointer-events-none" style={{ animationDelay: '1.2s' }} />

      <div className="max-w-2xl w-full mx-auto relative z-10 flex flex-col items-center">
        {/* Animated Interlocking Rings SVG Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="mb-6 relative"
        >
          <div className="w-16 h-16 rounded-full bg-[#240813] border border-gold/40 flex items-center justify-center shadow-[0_0_25px_rgba(212,175,55,0.2)]">
            <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-9 h-9 text-gold">
              {/* Left Ring */}
              <circle cx="26" cy="34" r="14" stroke="currentColor" strokeWidth="2.5" strokeOpacity="0.85" />
              <circle cx="26" cy="34" r="11" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" strokeOpacity="0.5" />
              {/* Right Ring */}
              <circle cx="38" cy="30" r="14" stroke="currentColor" strokeWidth="2.5" strokeOpacity="0.95" />
              <circle cx="38" cy="30" r="11" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" strokeOpacity="0.5" />
              {/* Ring Solitaire Diamond Accent on Right Ring */}
              <path d="M38 12 L41 16 L38 20 L35 16 Z" fill="#fdfbf7" stroke="currentColor" strokeWidth="0.75" />
            </svg>
          </div>
          {/* Subtle ring aura glow */}
          <div className="absolute inset-0 rounded-full bg-gold/20 animate-ping opacity-40 pointer-events-none" style={{ animationDuration: '3s' }} />
        </motion.div>

        {/* Calligraphic Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.15 }}
          className="text-gold font-mea text-2xl md:text-3xl leading-none my-0"
        >
          our forever begins
        </motion.p>

        {/* Cinzel Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.25 }}
          className="text-[#f0ebe0] text-3xl md:text-4xl font-cinzel tracking-[0.22em] uppercase mt-2 mb-2"
        >
          Written in the Stars
        </motion.h2>

        {/* Royal Filigree Divider */}
        <RoyalDivider className="opacity-80 my-4" delay={0.35} />

        {/* Luxury Romantic Card with Gold L-Brackets */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, delay: 0.45 }}
          className="w-full relative p-8 md:p-12 rounded-2xl border border-gold/30 bg-gradient-to-b from-[#1e0711] via-[#260915] to-[#16040c] shadow-[0_20px_50px_rgba(14,4,6,0.9)] my-6 overflow-hidden"
        >
          {/* 4 Gold Corner L-brackets */}
          <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-gold/60" />
          <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-gold/60" />
          <div className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-gold/60" />
          <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-gold/60" />

          {/* Decorative subtle background watermark */}
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
            <span className="font-mea text-[140px] text-white">K &amp; C</span>
          </div>

          {/* Heartwarming Romantic Words */}
          <div className="relative z-10 flex flex-col items-center space-y-4">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.6 }}
              className="font-cormorant italic text-lg md:text-2xl text-[#f0ebe0] leading-relaxed max-w-lg font-normal"
            >
              &ldquo;In a sea of a million souls, our hearts found their home in each other. Two lives, two dreams, united forever under the warmth of love and grace.&rdquo;
            </motion.p>

            {/* Subtle Gold Dash */}
            <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent my-2 opacity-60" />

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.75 }}
              className="font-montserrat text-xs md:text-sm text-[#f0ebe0]/80 tracking-[0.18em] uppercase leading-relaxed max-w-md font-light"
            >
              We joyfully invite you to stand beside us, share our laughter, and celebrate the magical beginning of our lifelong journey together.
            </motion.p>

            {/* Couple Calligraphic Sign-off */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.9 }}
              className="pt-4 flex flex-col items-center"
            >
              <span className="font-mea text-4xl md:text-5xl text-gold drop-shadow-[0_2px_10px_rgba(212,175,55,0.4)]">
                {weddingConfig.bride.shortName} &amp; {weddingConfig.groom.shortName}
              </span>
              <span className="font-cormorant text-xs md:text-sm tracking-[0.3em] uppercase text-gold-light/70 mt-1 font-medium">
                17 • October • 2026
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Gold Gradient Border Line */}
      <div className="absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
    </section>
  );
}
