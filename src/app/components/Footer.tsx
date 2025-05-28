'use client';

import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
});

export default function Footer() {
  return (
    <footer className="w-full bg-[#24411b] border-t border-[#475a3a]">
      <div className="max-w-7xl mx-auto flex flex-row items-center justify-between px-8 md:px-16 py-14">
        {/* Logo/Brand left */}
        <div className="flex-shrink-0">
          <h1
            className={`text-left text-[40px] md:text-[76px] tracking-wide drop-shadow-[2px_2px_1px_rgba(0,0,0,0.5)] select-none leading-none ${playfair.className}`}
            style={{ color: '#e6d4a3', letterSpacing: '.04em' }}
          >
            <span className="mr-6">Lady</span>
            <span className="text-[0.3em] align-top font-light italic px-8">of the</span>
            <span className="ml-6">Shrooms</span>
          </h1>
        </div>
        {/* Links right */}
        <div className="flex items-center gap-12">
          <Link
            href="/about"
            className={`text-[28px] md:text-[36px] font-normal tracking-wide ${playfair.className} text-[#d6b85c] hover:text-[#e6d4a3] transition-all`}
            style={{ lineHeight: 1.1 }}
          >
            About us
          </Link>
          <a
            href="https://www.instagram.com/ladyoftheshrooms"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className={`text-[28px] md:text-[36px] font-normal tracking-wide ${playfair.className} text-[#d6b85c] hover:text-[#e6d4a3] transition-all flex items-center`}
            style={{ lineHeight: 1.1 }}
          >
            <FontAwesomeIcon icon={faInstagram} className="w-8 h-8 md:w-10 md:h-10" />
          </a>
        </div>
      </div>
    </footer>
  );
}
