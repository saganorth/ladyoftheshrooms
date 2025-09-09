'use client';

import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({ subsets: ['latin'] });

export default function Header() {
  return (
    <>
      <header className="w-full flex items-center justify-center py-6 md:py-8 bg-green-900/90 backdrop-blur-sm shadow-md">
        <a href="/" className="no-underline block px-4">
          <h1
            className={`text-center text-[40px] xs:text-[48px] md:text-[70px] tracking-wide select-none leading-tight px-2 ${playfair.className}`}
            style={{ color: '#e6d4a3' }}
          >
            <span className="inline-block text-[1.4em] mr-3 md:mr-5">Lady</span>
            <span className="inline-block text-[0.42em] md:text-[0.48em] font-light italic mx-4 md:mx-8 align-middle">of the</span>
            <span className="inline-block text-[1.4em] ml-3 md:ml-5">Shrooms</span>
          </h1>
        </a>
      </header>
    </>
  );
}