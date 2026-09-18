import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';
import { weddingConfig } from '../data/weddingConfig';

export default function AudioPlayer({ autoPlayTrigger = false }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (autoPlayTrigger && audioRef.current) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch((err) => {
            console.log("Autoplay prevented by browser policy:", err);
            setIsPlaying(false);
          });
      }
    }
  }, [autoPlayTrigger]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(err => {
        console.error("Audio playback error:", err);
      });
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <audio
        ref={audioRef}
        src={weddingConfig.audio.src}
        loop
        preload="auto"
      />

      <button
        onClick={togglePlay}
        aria-label={isPlaying ? "Pause music" : "Play music"}
        className="group relative flex items-center gap-2.5 px-3 py-2.5 rounded-full bg-maroon-900/80 hover:bg-maroon-800 border border-gold/40 shadow-[0_4px_20px_rgba(0,0,0,0.6)] backdrop-blur-md transition-all duration-300 hover:scale-105 active:scale-95"
      >
        {/* Animated Soundwaves or Vinyl */}
        <div className={`relative w-7 h-7 rounded-full flex items-center justify-center bg-gradient-to-tr from-maroon-700 to-gold/30 ${isPlaying ? 'animate-spin-slow' : ''}`}>
          <Music className="w-3.5 h-3.5 text-gold-light" />
        </div>

        {/* Music Bars / Status */}
        <div className="flex items-end gap-0.5 h-3 px-1">
          <span className={`w-0.5 bg-gold rounded-full transition-all duration-300 ${isPlaying ? 'h-3 animate-pulse' : 'h-1'}`} />
          <span className={`w-0.5 bg-gold rounded-full transition-all duration-300 delay-75 ${isPlaying ? 'h-2 animate-pulse' : 'h-1'}`} />
          <span className={`w-0.5 bg-gold rounded-full transition-all duration-300 delay-150 ${isPlaying ? 'h-3.5 animate-pulse' : 'h-1'}`} />
        </div>

        {/* Icon */}
        <div className="text-gold pr-1">
          {isPlaying ? (
            <Volume2 className="w-4 h-4 text-gold-shimmer" />
          ) : (
            <VolumeX className="w-4 h-4 text-ivory/50" />
          )}
        </div>

        {/* Floating Tooltip */}
        <span className="absolute -top-8 right-0 text-[10px] whitespace-nowrap bg-black/80 text-gold-light px-2 py-0.5 rounded border border-gold/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none font-montserrat">
          {isPlaying ? 'Pause Music' : 'Play Music'}
        </span>
      </button>
    </div>
  );
}
