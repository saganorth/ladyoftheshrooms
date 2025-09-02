'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

interface MushroomCarouselProps {
  images: string[];
  altBase: string;
  className?: string;
}

export default function MushroomCarousel({ images, altBase, className = '' }: MushroomCarouselProps) {
  const [photo, setPhoto] = useState(0);

  if (!images || images.length === 0) return null;

  return (
    <div className={`relative h-52 md:h-72 w-full max-w-xs md:max-w-md mx-auto bg-black flex items-center justify-center overflow-hidden rounded-lg mt-6 ${className}`}>
      <AnimatePresence initial={false}>
        <motion.img
          key={images[photo]}
          src={images[photo]}
          alt={`${altBase} photo ${photo + 1}`}
          className="w-full h-full object-contain"
          initial={{ opacity: 0, scale: 0.98, x: 60 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          exit={{ opacity: 0, scale: 0.98, x: -60 }}
          transition={{ duration: 0.4 }}
        />
      </AnimatePresence>
      ´
      {images.length > 1 && (
        <>
          <button
            className="absolute left-2 top-1/2 -translate-y-1/2 text-3xl text-[#e6d4a3] bg-[#26341b]/80 rounded-full px-3 py-1 hover:bg-[#e6d4a3] hover:text-[#24411b] transition"
            onClick={() => setPhoto((photo - 1 + images.length) % images.length)}
            aria-label="Previous photo"
          >&lt;</button>
          <button
            className="absolute right-2 top-1/2 -translate-y-1/2 text-3xl text-[#e6d4a3] bg-[#26341b]/80 rounded-full px-3 py-1 hover:bg-[#e6d4a3] hover:text-[#24411b] transition"
            onClick={() => setPhoto((photo + 1) % images.length)}
            aria-label="Next photo"
          >&gt;</button>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1">
            {images.map((_, i) => (
              <div key={i}
                className={`w-3 h-3 rounded-full ${i === photo ? 'bg-[#e6d4a3]' : 'bg-[#475a3a]'}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
