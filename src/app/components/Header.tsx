'use client';

import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({ subsets: ['latin'] });

export default function Header() {
  return (
    
      <header 
        className="w-full flex items-center justify-center py-4 md:py-8 backdrop-blur-sm shadow-md"
        style={{ backgroundColor: '#1d3b1a' }}
      >
        <a href="/" className="no-underline block px-2 md:px-4">
          <h1
        className={`text-center text-[32px] xs:text-[40px] md:text-[70px] tracking-wide select-none leading-tight px-1 md:px-2 ${playfair.className}`}
        style={{ color: '#e6d4a3' }}
          >
        <span className="inline-block text-[1.3em] mr-2 md:mr-5">Lady</span>
        <span className="inline-block text-[0.4em] font-light italic align-middle">of the</span>
        <span className="inline-block text-[1.3em] ml-2 md:ml-5">Shrooms</span>
          </h1>
        </a>
      </header>
    
  );
}