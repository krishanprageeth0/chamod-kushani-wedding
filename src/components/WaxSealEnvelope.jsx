import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { BotanicalCorner } from './KnexaElements';
import { weddingConfig } from '../data/weddingConfig';

export default function WaxSealEnvelope({ onOpen }) {
  const [isOpening, setIsOpening] = useState(false);
  const [isClosed, setIsClosed] = useState(false);
  const [guestName, setGuestName] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const name = params.get('guest') || params.get('to');
    if (name) {
      setGuestName(decodeURIComponent(name));
    }
  }, []);

  const handleEnvelopeClick = () => {
    if (isOpening) return;
    setIsOpening(true);

    // Exact Knexa Confetti Cannon at 400ms
    setTimeout(() => {
      const endTime = Date.now() + 1000;
      const colors = ["#85182a", "#c9a96e", "#e8c87a", "#b87d6c", "#ffffff", "#550b18"];
      (function frame() {
        confetti({
          particleCount: 6,
          angle: 60,
          spread: 60,
          origin: { x: 0, y: 0.8 },
          colors: colors
        });
        confetti({
          particleCount: 6,
          angle: 120,
          spread: 60,
          origin: { x: 1, y: 0.8 },
          colors: colors
        });
        if (Date.now() < endTime) {
          requestAnimationFrame(frame);
        }
      })();
    }, 400);

    // Smooth exit and reveal main invitation at 2000ms
    setTimeout(() => {
      setIsClosed(true);
      onOpen();
    }, 2000);
  };

  return (
    <AnimatePresence>
      {!isClosed && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05, filter: "blur(8px)" }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0d0d0d] px-4 overflow-hidden select-none"
        >
          {/* Botanical Corners */}
          <BotanicalCorner position="top-left" delay={0.2} className="opacity-75" />
          <BotanicalCorner position="top-right" delay={0.4} className="opacity-75" />

          {/* Atmospheric Background Photo with Maroon Velvet Overlay */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-45 filter brightness-[0.25]"
              style={{ backgroundImage: `url(${weddingConfig.photos.hero})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-[#18040a]/50 to-black/90" />
          </div>

          {/* Sparkles */}
          {[
            { left: "8%", bottom: "22%", size: "3px", delay: "0s", duration: "2.8s" },
            { left: "14%", bottom: "18%", size: "2px", delay: "0.6s", duration: "2.3s" },
            { left: "5%", bottom: "15%", size: "4px", delay: "1.1s", duration: "3.1s" },
            { left: "85%", bottom: "25%", size: "2px", delay: "0.3s", duration: "2.6s" },
            { left: "90%", bottom: "12%", size: "3px", delay: "1.5s", duration: "2.4s" },
            { left: "78%", bottom: "20%", size: "2px", delay: "0.8s", duration: "2.9s" }
          ].map((sparkle, idx) => (
            <div
              key={idx}
              style={{
                left: sparkle.left,
                bottom: sparkle.bottom,
                width: sparkle.size,
                height: sparkle.size,
                animation: `sparkle ${sparkle.duration} ease-in-out ${sparkle.delay} infinite`
              }}
              className="absolute rounded-full bg-gold pointer-events-none z-10"
            />
          ))}

          {/* Header Texts */}
          <div className="relative z-10 flex flex-col items-center text-center max-w-sm mb-8 mt-12">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 1 }}
              className="text-[#f0ebe0]/75 font-cormorant tracking-[0.32em] text-[10px] md:text-[11px] uppercase mb-4"
            >
              {guestName ? `Special Invitation For ${guestName}` : "You Have an Invitation From"}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 1.1 }}
              className="text-[#f0ebe0] text-5xl md:text-6xl font-mea font-normal leading-[0.85] my-0 drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]"
            >
              {weddingConfig.groom.shortName}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="text-gold font-mea text-2xl md:text-3xl my-0.5 ml-14 italic"
            >
              and
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 1.1 }}
              className="text-[#f0ebe0] text-5xl md:text-6xl font-mea font-normal leading-[0.85] my-0 drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]"
            >
              {weddingConfig.bride.shortName}
            </motion.h1>
          </div>

          {/* 
            Exact 3D SVG Envelope with Maroon Body and 3D Golden Wax Seal
          */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.75, duration: 1.2, ease: "easeOut" }}
            onClick={handleEnvelopeClick}
            className="relative w-full max-w-[310px] md:max-w-[340px] aspect-[1.6] cursor-pointer group z-10"
            style={{ filter: "drop-shadow(0 20px 45px rgba(0,0,0,0.85))" }}
          >
            <svg 
              viewBox="0 0 300 190" 
              style={{ overflow: "visible" }}
              className={`w-full h-full transform transition-transform duration-1000 ease-[cubic-bezier(0.25,0,0.35,1)] ${
                isOpening ? "scale-105" : "hover:scale-[1.02]"
              }`}
            >
              <defs>
                {/* Velvet Maroon & Obsidian Envelope Gradients */}
                <linearGradient id="envBody" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#250811" />
                  <stop offset="100%" stopColor="#110307" />
                </linearGradient>

                <linearGradient id="envBack" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#160309" />
                  <stop offset="100%" stopColor="#0c0205" />
                </linearGradient>

                <linearGradient id="envSideLeft" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#280913" />
                  <stop offset="100%" stopColor="#160309" />
                </linearGradient>

                <linearGradient id="envSideRight" x1="1" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#280913" />
                  <stop offset="100%" stopColor="#160309" />
                </linearGradient>

                <linearGradient id="envBottom" x1="0" y1="1" x2="0" y2="0">
                  <stop offset="0%" stopColor="#300a18" />
                  <stop offset="100%" stopColor="#18040c" />
                </linearGradient>

                <linearGradient id="flapFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#380e1a" />
                  <stop offset="100%" stopColor="#20060f" />
                </linearGradient>

                <linearGradient id="flapInside" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#260812" />
                  <stop offset="100%" stopColor="#160309" />
                </linearGradient>

                <linearGradient id="flapShadow" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="rgba(0,0,0,0.65)" />
                  <stop offset="100%" stopColor="rgba(0,0,0,0)" />
                </linearGradient>

                {/* Card Parchment Gradient */}
                <linearGradient id="cardParchment" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#fdfcf9" />
                  <stop offset="100%" stopColor="#f4ece1" />
                </linearGradient>

                {/* 3D Gold Wax Seal Gradients */}
                <radialGradient id="sealGold" cx="32%" cy="28%" r="68%">
                  <stop offset="0%" stopColor="#F3E5AB" />
                  <stop offset="35%" stopColor="#D4AF37" />
                  <stop offset="100%" stopColor="#8c6206" />
                </radialGradient>

                <radialGradient id="sealShine" cx="30%" cy="25%" r="50%">
                  <stop offset="0%" stopColor="rgba(255,220,100,0.4)" />
                  <stop offset="100%" stopColor="rgba(0,0,0,0)" />
                </radialGradient>

                <clipPath id="envClip">
                  <rect x="0" y="0" width="300" height="190" rx="4" />
                </clipPath>
              </defs>

              {/* 1. Envelope Back Interior */}
              <rect x="0" y="0" width="300" height="190" rx="4" fill="url(#envBack)" stroke="#450e1c" strokeWidth="0.8" />

              {/* 2. Top Flap Unfolded Upwards (Revealed & swings up on open) */}
              <motion.polygon
                points="0,0 300,0 150,-95"
                fill="url(#flapInside)"
                stroke="#450e1c"
                strokeWidth="0.6"
                initial={{ scaleY: 0, opacity: 0 }}
                animate={isOpening ? { scaleY: 1, opacity: 1 } : { scaleY: 0, opacity: 0 }}
                style={{ originY: 0 }}
                transition={{ duration: 0.55, ease: [0.33, 1, 0.68, 1] }}
              />

              {/* 3. Invitation Letter Card - Smoothly emerges & unfolds upwards out of pocket */}
              <motion.g
                initial={{ y: 0, opacity: 0 }}
                animate={isOpening ? { y: -80, opacity: 1 } : { y: 0, opacity: 0 }}
                transition={{ duration: 1.1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                style={{ filter: "drop-shadow(0 4px 14px rgba(0,0,0,0.7))" }}
              >
                {/* Card Base */}
                <rect x="18" y="10" width="264" height="168" rx="4" fill="url(#cardParchment)" stroke="#d4af37" strokeWidth="1" />
                {/* Card Inset Dashed Gold Filigree */}
                <rect x="23" y="15" width="254" height="158" rx="2" fill="none" stroke="#d4af37" strokeWidth="0.6" strokeDasharray="3 3" opacity="0.6" />
                
                {/* Card Header & Monogram */}
                <text x="150" y="42" textAnchor="middle" fill="#85182a" fontFamily="'Mea Culpa', cursive" fontSize="24">
                  Chamod &amp; Kushani
                </text>
                <text x="150" y="58" textAnchor="middle" fill="#785918" fontFamily="'Cinzel', serif" fontSize="6.5" letterSpacing="0.25em" fontWeight="bold">
                  TOGETHER WITH THEIR FAMILIES
                </text>
                <text x="150" y="70" textAnchor="middle" fill="#85182a" fontFamily="'Cinzel', serif" fontSize="7" letterSpacing="0.2em" fontWeight="bold">
                  INVITE YOU TO CELEBRATE
                </text>
                <line x1="105" y1="78" x2="195" y2="78" stroke="#d4af37" strokeWidth="0.6" opacity="0.6" />
                <text x="150" y="90" textAnchor="middle" fill="#3a1e26" fontFamily="'Montserrat', sans-serif" fontSize="6" letterSpacing="0.2em" fontWeight="600">
                  SATURDAY • 17 OCT 2026 • 06:00 PM
                </text>
              </motion.g>

              {/* 4. Envelope Front Pocket Flaps */}
              <polygon points="0,0 0,190 145,100" fill="url(#envSideLeft)" stroke="#3a0c18" strokeWidth="0.4" />
              <polygon points="300,0 300,190 155,100" fill="url(#envSideRight)" stroke="#3a0c18" strokeWidth="0.4" />
              <polygon points="0,190 300,190 150,90" fill="url(#envBottom)" stroke="#450e1d" strokeWidth="0.6" />
              <polygon points="0,190 300,190 150,90" fill="rgba(0,0,0,0.18)" />

              {/* 5. Closed Front Flap (Folds down over pocket, folds up/away on open) */}
              <motion.polygon
                points="0,0 300,0 150,100"
                fill="url(#flapFill)"
                stroke="#551222"
                strokeWidth="0.8"
                animate={isOpening ? { scaleY: 0, opacity: 0 } : { scaleY: 1, opacity: 1 }}
                style={{ originY: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />

              {/* Flap Shadow */}
              <motion.polygon
                points="0,0 300,0 150,114 150,100"
                fill="url(#flapShadow)"
                opacity="0.8"
                animate={isOpening ? { scaleY: 0, opacity: 0 } : { scaleY: 1, opacity: 1 }}
                style={{ originY: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />

              {/* 6. 3D Wax Seal with "C&K" Monogram */}
              <motion.g
                animate={isOpening ? { scale: 0, opacity: 0, y: -25, rotate: -20 } : { scale: 1, opacity: 1, y: 0, rotate: 0 }}
                transition={{ duration: 0.4, ease: "backIn" }}
                className="origin-[150px_100px]"
              >
                {/* Wax Drop Shadow */}
                <rect x="123" y="77" width="54" height="54" rx="14" fill="rgba(0,0,0,0.65)" transform="rotate(-8,150,103)" />
                {/* Wax Base */}
                <rect x="125" y="75" width="50" height="50" rx="13" fill="url(#sealGold)" transform="rotate(-8,150,100)" />
                {/* Wax Shine */}
                <rect x="125" y="75" width="50" height="50" rx="13" fill="url(#sealShine)" transform="rotate(-8,150,100)" />
                {/* Inner Ring */}
                <rect x="131" y="81" width="38" height="38" rx="10" fill="none" stroke="rgba(50,25,0,0.35)" strokeWidth="1" transform="rotate(-8,150,100)" />
                {/* C&K Monogram Text */}
                <text
                  x="149"
                  y="106"
                  textAnchor="middle"
                  fontSize="11"
                  fill="rgba(40,18,0,0.95)"
                  fontFamily="'Cinzel Decorative', serif"
                  letterSpacing="0.05em"
                  fontWeight="bold"
                >
                  C&amp;K
                </text>
              </motion.g>
            </svg>
          </motion.div>

          {/* Tap Prompt */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.4, 0.9, 0.4] }}
            transition={{ repeat: Infinity, duration: 2.2 }}
            className="mt-8 text-center z-10"
          >
            <p className="text-gold tracking-[0.32em] text-[10px] uppercase font-semibold font-cormorant">
              {isOpening ? "Opening Invitation..." : "Tap Envelope to Open"}
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
