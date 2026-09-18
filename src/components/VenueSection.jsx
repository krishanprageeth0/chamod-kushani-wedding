import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, ExternalLink, Building2 } from 'lucide-react';
import { RoyalDivider } from './KnexaElements';
import { weddingConfig } from '../data/weddingConfig';

export default function VenueSection() {
  return (
    <section className="relative py-28 px-4 bg-gradient-to-b from-[#0e0406] via-[#1a080d] to-[#0e0406] text-[#fdfbf7] overflow-hidden flex flex-col items-center select-none text-center">
      {/* Top Gold Gradient Border Line */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="max-w-xl w-full mx-auto flex flex-col items-center relative z-10">
        {/* "the" script */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-gold font-mea text-2xl md:text-3xl leading-none my-0"
        >
          the
        </motion.p>

        {/* "Venue" */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.15 }}
          className="text-[#f0ebe0] text-3xl md:text-4xl font-cinzel tracking-[0.2em] uppercase mt-2 mb-2"
        >
          Venue
        </motion.h2>

        {/* Royal Divider */}
        <RoyalDivider className="opacity-80 my-4" delay={0.3} />

        {/* Summerfield Hotel Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="w-full p-8 md:p-10 rounded-2xl border border-gold/30 bg-[#1c060e] shadow-[0_15px_40px_rgba(26,8,13,0.9)] my-6 flex flex-col items-center relative overflow-hidden"
        >
          {/* Subtle Ambient Gold Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-24 bg-gold/10 rounded-full blur-2xl pointer-events-none" />

          {/* Building Icon Badge */}
          <div className="w-14 h-14 rounded-full bg-[#240813] border border-gold/40 flex items-center justify-center mb-6 shadow-md">
            <Building2 className="w-7 h-7 text-gold" />
          </div>

          <h3 className="font-cinzel text-2xl md:text-3xl font-bold tracking-[0.1em] text-[#f0ebe0] uppercase mb-2">
            {weddingConfig.venue.name}
          </h3>

          <p className="font-cormorant italic text-sm md:text-base text-gold font-medium mb-6">
            {weddingConfig.venue.subName}
          </p>

          <div className="flex items-center justify-center gap-2 text-xs md:text-sm text-[#f0ebe0]/80 font-montserrat max-w-md leading-relaxed">
            <MapPin className="w-4 h-4 text-gold shrink-0" />
            <span>{weddingConfig.venue.address}</span>
          </div>
        </motion.div>

        {/* Get Directions Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <a
            href={weddingConfig.venue.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#6e0f21] via-[#85182a] to-[#9e1c34] text-white text-xs font-montserrat tracking-[0.25em] uppercase font-semibold border border-gold/40 shadow-[0_4px_25px_rgba(133,24,42,0.6)] hover:scale-105 transition-transform inline-flex items-center gap-2"
          >
            <Navigation className="w-4 h-4 text-white" />
            Get Directions
            <ExternalLink className="w-3.5 h-3.5 opacity-80" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
