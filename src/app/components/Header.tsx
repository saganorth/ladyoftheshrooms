'use client';

import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({ subsets: ['latin'] });

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full h-40 z-50 flex items-center justify-center pb-8">
      <a href="/" className="no-underline">
        <h1
          className={`text-center text-[64px] md:text-[80px] text-yellow-100 tracking-wide drop-shadow-[2px_2px_1px_rgba(0,0,0,0.5)] select-none leading-none ${playfair.className}`}
          style={{ color: '#e6d4a3' }}
        >
          <span className="text-[1.9em] mr-10">Lady</span>
          <span className="text-[0.5em] align-[0.3em] font-light italic px-20">of the</span>
          <span className="text-[1.9em] ml-12">Shrooms</span>
        </h1>
      </a>
    </header>
  );
}
