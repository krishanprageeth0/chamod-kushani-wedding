import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Palette, Shirt } from 'lucide-react';
import { weddingConfig } from '../data/weddingConfig';

export default function ColorPaletteGuide() {
  return (
    <section className="relative py-20 px-4 max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center mb-14">
        <div className="inline-flex items-center gap-2 text-gold mb-2">
          <Palette className="w-3.5 h-3.5 text-gold" />
          <span className="text-[11px] font-montserrat uppercase tracking-[0.35em] text-gold font-semibold">
            Wedding Palette &amp; Attire
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl font-cormorant italic text-ivory">
          Tones of Celebration
        </h2>
        <p className="text-ivory-dark/70 text-xs font-montserrat tracking-[0.2em] uppercase mt-2">
          Deep Crimson &amp; Sunset Blooms
        </p>
        <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-4" />
      </div>

      {/* Main Color Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3.5 sm:gap-4 mb-10">
        {weddingConfig.colors.map((color, idx) => (
          <motion.div
            key={color.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            className={`p-4 rounded-2xl border ${
              idx === 0 
                ? 'border-gold shadow-[0_0_20px_rgba(212,175,55,0.35)] bg-maroon-900/90 sm:col-span-1 col-span-2' 
                : 'border-gold/20 bg-maroon-900/50'
            } backdrop-blur-md flex flex-col items-center text-center`}
          >
            {/* Swatch Circle */}
            <div
              className="w-14 h-14 rounded-full border-2 border-white/20 shadow-md mb-3 transition-transform duration-300 hover:scale-110 flex items-center justify-center relative"
              style={{ backgroundColor: color.hex }}
            >
              {idx === 0 && (
                <span className="text-[9px] font-montserrat uppercase tracking-wider text-white font-bold bg-black/40 px-1.5 py-0.5 rounded-full">
                  Main
                </span>
              )}
            </div>

            <span className="font-cinzel text-xs font-bold text-ivory">
              {color.name}
            </span>
            <span className="font-montserrat text-[10px] text-gold mt-0.5 font-medium">
              {color.role}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Dress Code & Inspiration Box */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="p-6 md:p-8 rounded-3xl border border-gold/30 bg-gradient-to-br from-maroon-900/80 via-maroon-950/90 to-maroon-900/80 shadow-[0_10px_35px_rgba(0,0,0,0.6)] backdrop-blur-md grid grid-cols-1 md:grid-cols-3 gap-6 items-center"
      >
        {/* Color inspiration image thumbnail */}
        <div className="relative rounded-2xl overflow-hidden aspect-[3/4] border border-gold/30 shadow-lg md:col-span-1">
          <img
            src={weddingConfig.photos.palette}
            alt="Wedding color palette inspiration"
            className="w-full h-full object-cover filter saturate-110 brightness-95"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-maroon-950/80 via-transparent to-transparent flex items-end p-3">
            <span className="text-[10px] font-montserrat uppercase tracking-[0.2em] text-gold-light">
              Inspiration Moodboard
            </span>
          </div>
        </div>

        {/* Attire Guidance Text */}
        <div className="md:col-span-2 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-maroon-800/60 border border-gold/30 text-gold-light text-xs font-montserrat tracking-widest uppercase">
            <Shirt className="w-3.5 h-3.5 text-gold" />
            Dress Code: Evening Elegance
          </div>

          <h3 className="font-cormorant italic text-2xl md:text-3xl text-ivory">
            Dress in Our Celebration Palette
          </h3>

          <p className="text-ivory-dark/80 text-xs md:text-sm font-montserrat leading-relaxed">
            We kindly invite our guests to embrace the richness of our wedding colors. 
            <strong> Deep Maroon &amp; Crimson</strong> takes center stage, accompanied by warm coral, 
            sunset pink, and rose accents. Formal suits, sarees, or elegant evening wear are warmly encouraged.
          </p>

          <div className="pt-2 flex items-center gap-3">
            <span className="text-[11px] font-montserrat uppercase tracking-[0.2em] text-gold font-semibold">
              Primary Theme:
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-maroon-800 border border-palette-crimson text-xs font-montserrat text-ivory">
              <span className="w-2.5 h-2.5 rounded-full bg-[#85182a]" />
              Deep Crimson Maroon
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
