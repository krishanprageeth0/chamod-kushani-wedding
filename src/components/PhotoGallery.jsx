import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import { RoyalDivider, ArchPhotoFrame } from './KnexaElements';
import { weddingConfig } from '../data/weddingConfig';

export default function PhotoGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const galleryItems = [
    {
      src: weddingConfig.photos.hero,
      title: "Sealed with a Kiss",
      subtitle: "The beginning of our forever",
    },
    {
      src: weddingConfig.photos.portrait,
      title: "A Love in Full Bloom",
      subtitle: "Surrounded by nature & endless joy",
    }
  ];

  return (
    <section className="relative py-28 px-4 bg-gradient-to-b from-[#0e0406] via-[#1a080d] to-[#0e0406] text-[#fdfbf7] overflow-hidden flex flex-col items-center select-none text-center">
      {/* Top Gold Gradient Border Line */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="max-w-3xl w-full mx-auto flex flex-col items-center relative z-10">
        {/* "the" script */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-gold font-mea text-2xl md:text-3xl leading-none my-0"
        >
          our
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.15 }}
          className="text-[#f0ebe0] text-3xl md:text-4xl font-cinzel tracking-[0.2em] uppercase mt-2 mb-2"
        >
          Moments in Time
        </motion.h2>

        {/* Royal Divider */}
        <RoyalDivider className="opacity-80 my-4" delay={0.3} />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-xs text-gold-light/75 font-cormorant tracking-[0.25em] uppercase mb-10"
        >
          Chamod &amp; Kushani
        </motion.p>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-2xl px-4">
          {galleryItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className="group relative cursor-pointer flex flex-col items-center"
              onClick={() => setSelectedPhoto(item)}
            >
              <div className="w-[210px] h-[280px] md:w-[240px] md:h-[320px] relative drop-shadow-[0_15px_35px_rgba(26,8,13,0.9)]">
                <ArchPhotoFrame delay={0.2 * idx} className="w-full h-full border border-gold/40">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10 pointer-events-none" />
                  <motion.img
                    src={item.src}
                    alt={item.title}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.8 }}
                    className="w-full h-full object-cover object-top filter brightness-[0.98]"
                  />
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#240813] border border-gold/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20">
                    <ZoomIn className="w-4 h-4 text-gold" />
                  </div>
                </ArchPhotoFrame>
              </div>

              <div className="mt-4">
                <h3 className="font-cinzel text-sm md:text-base font-bold text-[#f0ebe0]">
                  {item.title}
                </h3>
                <p className="font-cormorant italic text-xs text-gold mt-0.5">
                  {item.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Romantic Quote */}
        <div className="mt-14 max-w-md p-6 rounded-xl border border-gold/25 bg-[#200710] text-center shadow-lg">
          <p className="font-cormorant italic text-base md:text-lg text-[#f0ebe0]/90 leading-relaxed">
            &ldquo;{weddingConfig.quotes.hero}&rdquo;
          </p>
          <span className="block mt-2 font-montserrat text-[10px] tracking-[0.25em] uppercase text-gold font-medium">
            {weddingConfig.quotes.stars}
          </span>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-2xl w-full max-h-[90vh] flex flex-col items-center p-3 rounded-2xl border border-gold/50 bg-[#1a060d]"
            >
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#280913] border border-gold/50 flex items-center justify-center text-white hover:text-gold z-20"
              >
                <X className="w-5 h-5" />
              </button>
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.title}
                className="max-h-[75vh] w-auto object-contain rounded-lg"
              />
              <div className="text-center mt-3">
                <h4 className="font-cinzel text-lg text-[#f0ebe0]">{selectedPhoto.title}</h4>
                <p className="font-cormorant italic text-gold text-sm">{selectedPhoto.subtitle}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
