import React from 'react';
import { motion } from 'framer-motion';
import { RoyalDivider } from './KnexaElements';
import { weddingConfig } from '../data/weddingConfig';

export default function TimelineSection() {
  return (
    <section className="relative py-28 px-4 bg-gradient-to-b from-[#0e0406] via-[#1a080d] to-[#0e0406] text-[#fdfbf7] overflow-hidden select-none">
      {/* Top Gold Gradient Border Line */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="max-w-xl mx-auto relative z-10 flex flex-col pt-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="mb-20 text-center flex flex-col items-center select-none"
        >
          <span className="text-gold font-cormorant text-xs md:text-sm tracking-[0.3em] uppercase mb-3 block">
            The Celebration Sequence
          </span>
          <h2 className="text-[#fdfbf7] text-4xl md:text-5xl font-cinzel font-normal tracking-[0.15em] uppercase leading-tight">
            Order
          </h2>
          <span className="text-gold font-mea text-4xl my-1 block">
            of the
          </span>
          <h2 className="text-[#fdfbf7] text-4xl md:text-5xl font-cinzel font-normal tracking-[0.15em] uppercase leading-tight">
            Day
          </h2>
          <RoyalDivider className="mt-6 opacity-80" delay={0.3} />
        </motion.div>

        {/* Timeline Container */}
        <div className="relative pl-4 pr-2 md:pl-8">
          {/* Continuous Center Gold Line */}
          <div 
            className="absolute top-2 bottom-8 w-[1px] bg-gradient-to-b from-gold/10 via-gold/45 to-gold/10 pointer-events-none"
            style={{ left: "calc(5.5rem + 16px)" }}
          />

          <div className="flex flex-col gap-12">
            {weddingConfig.timeline.map((item, idx) => (
              <motion.div
                key={item.time}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="flex items-start gap-4 md:gap-6 relative group"
              >
                {/* Time Display on Left */}
                <div className="w-20 md:w-24 shrink-0 text-right pt-0.5">
                  <span className="font-cinzel text-xs md:text-sm text-gold font-bold tracking-wider">
                    {item.time}
                  </span>
                </div>

                {/* Glowing Node on Center Line */}
                <div className="relative flex items-center justify-center shrink-0 mt-1">
                  <div className="w-3.5 h-3.5 rounded-full bg-gold shadow-[0_0_12px_rgba(212,175,55,0.7)] group-hover:scale-125 transition-transform" />
                  <div className="absolute inset-0 rounded-full bg-gold/30 animate-ping opacity-50 pointer-events-none" />
                </div>

                {/* Event Details on Right */}
                <div className="flex-1 pb-2">
                  <h3 className="font-cinzel text-base md:text-lg text-[#f0ebe0] font-bold tracking-wide group-hover:text-gold transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs md:text-sm text-[#f0ebe0]/70 font-cormorant leading-relaxed mt-1">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
