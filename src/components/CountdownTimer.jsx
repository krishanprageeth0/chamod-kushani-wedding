import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BotanicalCorner, RoyalDivider } from './KnexaElements';
import { weddingConfig } from '../data/weddingConfig';

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(null);

  useEffect(() => {
    const target = new Date(weddingConfig.eventTimestamp).getTime();

    const calculate = () => {
      const now = new Date().getTime();
      const diff = target - now;

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((diff % (1000 * 60)) / 1000),
        });
      }
    };

    calculate();
    const interval = setInterval(calculate, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!timeLeft) return null;

  const units = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds }
  ];

  return (
    <section id="countdown" className="relative py-28 px-4 bg-gradient-to-b from-[#0e0406] via-[#1a080d] to-[#0e0406] text-[#fdfbf7] overflow-hidden flex flex-col items-center select-none">
      {/* Top Gold Gradient Border Line */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      {/* Botanical Corner Accents */}
      <BotanicalCorner position="top-left" className="opacity-20 scale-75" />
      <BotanicalCorner position="bottom-right" className="opacity-20 scale-75" />

      {/* Subtle Central Maroon Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#420a16]/20 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-xl w-full mx-auto flex flex-col items-center relative z-10 text-center">
        {/* "the" script */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-gold font-mea text-3xl leading-none my-0"
        >
          the
        </motion.p>

        {/* "Countdown" */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.15 }}
          className="text-[#fdfbf7] text-4xl md:text-5xl font-cinzel font-normal tracking-[0.2em] uppercase mt-2 mb-2 leading-none"
        >
          Countdown
        </motion.h2>

        {/* "To forever and beyond" */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-xs text-gold-light/85 leading-relaxed font-cormorant tracking-[0.3em] uppercase mt-2"
        >
          To forever and beyond
        </motion.p>

        {/* Royal Divider */}
        <RoyalDivider className="my-8 opacity-70" delay={0.4} />

        {/* Countdown Units in Deep Crimson Obsidian Cards */}
        <div className="flex items-center justify-center gap-2 sm:gap-4 w-full max-w-md select-none mt-2">
          {units.map((unit, idx) => (
            <React.Fragment key={unit.label}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 15 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * idx, duration: 0.8 }}
                className="flex-1 p-3 sm:p-4 rounded-xl border border-gold/30 bg-gradient-to-b from-[#240812] to-[#120308] shadow-[0_10px_30px_rgba(26,8,13,0.85)] text-center flex flex-col items-center justify-center hover:border-gold/60 transition-colors"
              >
                <span className="font-cinzel text-2xl sm:text-4xl md:text-5xl font-bold text-gold">
                  {String(unit.value).padStart(2, '0')}
                </span>
                <span className="font-cormorant text-[9px] sm:text-[11px] uppercase tracking-[0.25em] text-[#f0ebe0]/75 mt-1 font-medium">
                  {unit.label}
                </span>
              </motion.div>

              {idx < units.length - 1 && (
                <span className="text-gold font-cinzel text-lg sm:text-2xl font-light opacity-60">
                  :
                </span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
