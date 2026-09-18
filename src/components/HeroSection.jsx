import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CalendarPlus, Heart } from 'lucide-react';
import { BotanicalCorner, RoyalDivider, ArchPhotoFrame } from './KnexaElements';
import { weddingConfig } from '../data/weddingConfig';

export default function HeroSection({ onOpenRsvp }) {
  const [guestName, setGuestName] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const name = params.get('guest') || params.get('to');
    if (name) {
      setGuestName(decodeURIComponent(name));
    }
  }, []);

  const getGoogleCalendarUrl = () => {
    const title = encodeURIComponent("Wedding of Chamod & Kushani");
    const details = encodeURIComponent("Celebrating the wedding union of Chamod Pathegama Widanagamage & Kushani Amarasinghe at Summerfield Hotel.");
    const location = encodeURIComponent(weddingConfig.venue.address);
    const dates = "20261017T123000Z/20261017T183000Z";
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}&location=${location}`;
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center py-24 px-6 text-center overflow-hidden bg-gradient-to-b from-[#0e0406] via-[#1a080d] to-[#0e0406] select-none">
      {/* Botanical Corner Ornaments */}
      <BotanicalCorner position="top-left" delay={0.2} className="opacity-80" />
      <BotanicalCorner position="top-right" delay={0.4} className="opacity-80" />

      {/* Atmospheric Silhouette Background Photo with Deep Crimson Tint */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div 
          className="absolute inset-0 bg-cover bg-[center_20%] opacity-[0.16] filter brightness-[0.25] blur-[4px]"
          style={{ backgroundImage: `url(${weddingConfig.photos.hero})` }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_10%,rgba(14,4,6,0.96)_80%)]" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#0e0406] to-transparent" />
      </div>

      {/* Signature Knexa 1px Gold Screen Frame with L-brackets */}
      <div className="absolute inset-3 md:inset-6 border border-gold/15 pointer-events-none rounded-lg z-10">
        <div className="absolute top-3 left-3 w-5 h-5 border-t border-l border-gold/30" />
        <div className="absolute top-3 right-3 w-5 h-5 border-t border-r border-gold/30" />
        <div className="absolute bottom-3 left-3 w-5 h-5 border-b border-l border-gold/30" />
        <div className="absolute bottom-3 right-3 w-5 h-5 border-b border-r border-gold/30" />
      </div>

      {/* Main Content Column */}
      <div className="max-w-md mx-auto flex flex-col items-center relative z-20 w-full pt-6">
        {/* Guest Personalized Greeting */}
        {guestName && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 px-5 py-1.5 rounded-full border border-gold/40 bg-[#240813] shadow-md"
          >
            <p className="text-gold text-xs font-montserrat uppercase tracking-[0.25em]">
              Special Invitation For <span className="font-semibold text-white">{guestName}</span>
            </p>
          </motion.div>
        )}

        {/* Ceremonial Line */}
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 0.75, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="text-gold font-cormorant tracking-[0.32em] text-[10px] md:text-xs uppercase font-medium mb-5"
        >
          Together with their families
        </motion.p>

        {/* Couple Names in signature Knexa calligraphy */}
        <div className="flex flex-col items-center w-full mb-4">
          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.4, ease: "easeOut", delay: 0.35 }}
            className="text-[#f0ebe0] text-7xl md:text-8xl font-mea font-normal leading-[0.8] my-0 drop-shadow-[0_4px_12px_rgba(0,0,0,0.7)]"
          >
            {weddingConfig.groom.shortName}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.7 }}
            className="text-gold font-mea text-2xl md:text-3xl my-1 ml-14 italic"
          >
            and
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.4, ease: "easeOut", delay: 0.5 }}
            className="text-[#f0ebe0] text-7xl md:text-8xl font-mea font-normal leading-[0.8] my-0 drop-shadow-[0_4px_12px_rgba(0,0,0,0.7)]"
          >
            {weddingConfig.bride.shortName}
          </motion.h1>
        </div>

        {/* Royal Filigree Divider */}
        <RoyalDivider className="opacity-90 my-4" delay={0.8} />

        {/* 
          Central Cathedral Arch Photo Frame
          Framed portrait of Chamod & Kushani with gold botanical arch & velvet maroon backing
        */}
        <div className="w-[210px] h-[280px] md:w-[240px] md:h-[320px] my-4 relative drop-shadow-[0_15px_35px_rgba(0,0,0,0.85)] group">
          <ArchPhotoFrame delay={0.9} className="w-full h-full border border-gold/40">
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10 pointer-events-none" />
            <motion.img
              src={weddingConfig.photos.hero}
              alt="Chamod & Kushani"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.8 }}
              className="w-full h-full object-cover object-top filter brightness-[0.98]"
            />
          </ArchPhotoFrame>

          {/* Floating Gold Bubble Accents */}
          <div className="absolute -top-3 -left-3 w-3 h-3 bg-gold/30 rounded-full animate-float pointer-events-none" />
          <div className="absolute -bottom-3 -right-3 w-2.5 h-2.5 bg-gold/40 rounded-full animate-float pointer-events-none" style={{ animationDelay: "2s" }} />
        </div>

        {/* Invitation Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.65 }}
          transition={{ duration: 1.2, delay: 1.2 }}
          className="text-[#f0ebe0] tracking-[0.28em] text-[10px] uppercase font-semibold font-cormorant mt-2"
        >
          Invite You To Their Wedding
        </motion.p>

        {/* Date & Time in Deep Crimson & Gold Pill Card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="my-3 py-3 px-6 rounded-xl border border-gold/30 bg-[#220710] shadow-[0_8px_25px_rgba(26,8,13,0.7)] flex flex-col items-center"
        >
          <div className="flex items-center gap-3 text-[#fdfbf7] font-cinzel text-sm md:text-base font-semibold tracking-[0.2em] uppercase">
            <span>SATURDAY</span>
            <span className="w-1.5 h-1.5 rounded-full bg-gold" />
            <span>17 OCT 2026</span>
          </div>
          <p className="text-gold font-cormorant tracking-[0.25em] text-xs uppercase mt-1">
            Starts at 06:00 PM Onwards
          </p>
          <div className="w-12 h-[1px] bg-gold/30 my-2" />
          <p className="text-gold-light text-xs font-cinzel font-medium">
            {weddingConfig.venue.name}
          </p>
          <p className="text-[#fdfbf7]/60 text-[10px] tracking-wider font-montserrat mt-0.5">
            Banquet &amp; Reception Hall
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.45 }}
          className="flex flex-wrap items-center justify-center gap-3 mt-4"
        >
          <button
            onClick={onOpenRsvp}
            className="px-8 py-3 rounded-full bg-gradient-to-r from-[#6e0f21] via-[#85182a] to-[#9e1c34] text-white text-xs font-montserrat tracking-[0.25em] uppercase font-semibold border border-gold/40 shadow-[0_4px_25px_rgba(133,24,42,0.6)] hover:scale-105 transition-transform flex items-center gap-2"
          >
            <Heart className="w-3.5 h-3.5 fill-white" />
            Confirm RSVP
          </button>

          <a
            href={getGoogleCalendarUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full bg-[#20060f] hover:bg-[#2c0915] text-gold text-xs font-montserrat tracking-[0.2em] uppercase font-medium border border-gold/30 hover:scale-105 transition-transform flex items-center gap-2"
          >
            <CalendarPlus className="w-3.5 h-3.5 text-gold" />
            Add to Calendar
          </a>
        </motion.div>
      </div>
    </section>
  );
}
