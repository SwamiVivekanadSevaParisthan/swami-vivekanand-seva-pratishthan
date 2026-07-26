import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface ImageSlideshowProps {
  images: string[];
  alt: string;
  className?: string;
  intervalMs?: number; // defaults to 1500ms for "15 microseconds" user intent
}

export const ImageSlideshow: React.FC<ImageSlideshowProps> = ({
  images,
  alt,
  className = '',
  intervalMs = 10000, // 10000 milliseconds (10 seconds)
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (images.length <= 1) return;

    if (!isPaused) {
      timerRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, intervalMs);
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [images.length, isPaused, intervalMs]);

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div
      className={`relative w-full h-full overflow-hidden select-none ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <AnimatePresence initial={false}>
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`${alt} - Slide ${currentIndex + 1}`}
          referrerPolicy="no-referrer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.0, ease: 'easeInOut' }}
          className="absolute inset-0 w-full h-full object-cover rounded-2xl"
        />
      </AnimatePresence>

      {/* Slide Indicators / Dots */}
      {images.length > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10 bg-black/35 backdrop-blur-xs px-2.5 py-1 rounded-full">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIndex(idx);
              }}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === currentIndex
                  ? 'w-4 bg-teal-400'
                  : 'w-1.5 bg-white/60 hover:bg-white'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      )}

      {/* Subtle indicator showing if paused on hover */}
      {isPaused && (
        <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-xs text-white/90 text-[9px] font-mono tracking-widest px-1.5 py-0.5 rounded-sm uppercase pointer-events-none">
          Paused
        </div>
      )}
    </div>
  );
};
