'use client';

import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({ subsets: ['latin'] });

export default function Header() {
  return (
    <header className="w-full flex items-center justify-center py-6 md:py-8 bg-green-500">
      <a href="/" className="no-underline block px-4">
        <h1
          className={`text-center text-[40px] xs:text-[48px] md:text-[72px] tracking-wide select-none leading-none ${playfair.className}`}
          style={{ color: '#e6d4a3' }}
        >
          <span className="inline-block text-[1.5em] mr-3 md:mr-6">Lady</span>
          <span className="inline-block text-[0.45em] md:text-[0.5em] font-light italic mx-4 md:mx-10 align-middle">of the</span>
          <span className="inline-block text-[1.5em] ml-3 md:ml-6">Shrooms</span>
        </h1>
      </a>
    </header>
  );
}