import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import WaxSealEnvelope from './components/WaxSealEnvelope';
import HeroSection from './components/HeroSection';
import CountdownTimer from './components/CountdownTimer';
import RomanticQuoteSection from './components/RomanticQuoteSection';
import TimelineSection from './components/TimelineSection';
import PhotoGallery from './components/PhotoGallery';
import VenueSection from './components/VenueSection';
import FooterSection from './components/FooterSection';
import AudioPlayer from './components/AudioPlayer';
import RsvpModal from './components/RsvpModal';
import { weddingConfig } from './data/weddingConfig';

export default function App() {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);
  const [audioPlayTrigger, setAudioPlayTrigger] = useState(false);
  const [isRsvpOpen, setIsRsvpOpen] = useState(false);

  const handleEnvelopeOpen = () => {
    setIsEnvelopeOpen(true);
    setAudioPlayTrigger(true);
  };

  return (
    <div className="min-h-screen bg-[#0e0406] text-[#fdfbf7] font-montserrat relative selection:bg-palette-crimson selection:text-white overflow-x-hidden">
      {/* 
        Signature Royal Frame Border with 4 Gold Corner Accents
      */}
      <div className="fixed inset-2.5 sm:inset-4 md:inset-6 border border-gold/20 pointer-events-none rounded-lg z-30 shadow-[0_0_25px_rgba(133,24,42,0.3)]">
        <div className="absolute top-2 left-2 sm:top-3 sm:left-3 w-4 h-4 sm:w-5 sm:h-5 border-t border-l border-gold/50" />
        <div className="absolute top-2 right-2 sm:top-3 sm:right-3 w-4 h-4 sm:w-5 sm:h-5 border-t border-r border-gold/50" />
        <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 w-4 h-4 sm:w-5 sm:h-5 border-b border-l border-gold/50" />
        <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 w-4 h-4 sm:w-5 sm:h-5 border-b border-r border-gold/50" />
      </div>

      {/* 
        Deep Crimson Maroon & Obsidian Luxury Backdrop (#0e0406 to #1a080d)
      */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Ambient velvet maroon radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#1a080d_0%,_#0e0406_75%)]" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#3d0916]/20 rounded-full blur-[120px]" />
        
        {/* Subtle Background Silhouette Photo */}
        <div 
          className="absolute inset-0 bg-cover bg-[center_20%] opacity-[0.15] filter brightness-[0.22] blur-[3px]"
          style={{ backgroundImage: `url(${weddingConfig.photos.hero})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0e0406]/80 via-[#1a080d]/60 to-[#0e0406]/95" />
      </div>

      {/* 1. Wax Seal Envelope Opening Screen */}
      <AnimatePresence>
        {!isEnvelopeOpen && (
          <WaxSealEnvelope onOpen={handleEnvelopeOpen} />
        )}
      </AnimatePresence>

      {/* 2. Main Invitation Content */}
      {isEnvelopeOpen && (
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="relative z-10"
        >
          {/* Hero Section */}
          <HeroSection onOpenRsvp={() => setIsRsvpOpen(true)} />

          {/* Countdown Timer */}
          <CountdownTimer />

          {/* Romantic Love Quote & Words */}
          <RomanticQuoteSection />

          {/* Celebration Timeline */}
          <TimelineSection />

          {/* Romantic Photo Gallery */}
          <PhotoGallery />

          {/* Venue & Location Map */}
          <VenueSection />

          {/* Footer */}
          <FooterSection onOpenRsvp={() => setIsRsvpOpen(true)} />

          {/* Floating Audio Controller */}
          <AudioPlayer autoPlayTrigger={audioPlayTrigger} />

          {/* Smart RSVP Modal */}
          <AnimatePresence>
            {isRsvpOpen && (
              <RsvpModal 
                isOpen={isRsvpOpen} 
                onClose={() => setIsRsvpOpen(false)} 
              />
            )}
          </AnimatePresence>
        </motion.main>
      )}
    </div>
  );
}
