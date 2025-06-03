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
    <footer className="relative left-1/2 right-1/2 w-screen -translate-x-1/2 bg-[#24411b] border-t border-[#475a3a]">
      <div className="flex flex-row items-center justify-between py-14 px-0">
        {/* LOGO: left side */}
        <h1
          className={`text-left text-[38px] md:text-[64px] font-bold tracking-wide ${playfair.className}`}
          style={{ color: '#e6d4a3', margin: 0, padding: 0 }}
        >
          Lady <span className="text-[0.4em] font-light italic align-top px-4">of the</span> Shrooms
        </h1>
        {/* LINKS: right side */}
        <div className="flex items-center gap-10">
          <Link
            href="/about"
            className={`text-[24px] md:text-[32px] font-normal ${playfair.className} text-[#d6b85c] hover:text-[#e6d4a3] transition`}
          >
            About us
          </Link>
          <a
            href="https://www.instagram.com/ladyoftheshrooms"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className={`text-[24px] md:text-[32px] font-normal ${playfair.className} text-[#d6b85c] hover:text-[#e6d4a3] transition flex items-center`}
          >
            <FontAwesomeIcon icon={faInstagram} className="w-7 h-7 md:w-9 md:h-9" />
          </a>
        </div>
      </div>
    </footer>
  );
}
