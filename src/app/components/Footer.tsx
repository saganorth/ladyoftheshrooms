"use client";
import Link from 'next/link';
import { Playfair_Display } from 'next/font/google';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

const playfair = Playfair_Display({ subsets: ['latin'], weight: ['400','500','600','700'] });

export default function Footer() {
  return (
    <footer className="bg-[#1d3b1a] text-[#e6d4a3] mt-auto pt-14 pb-10 ">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Top row: always horizontal */}
        <div className="flex items-start justify-between gap-8">
          {/* Brand */}
          <div className="pl-2 md:pl-4 flex-shrink-0">
            <h3
              className={`text-[40px] md:text-[54px] font-semibold tracking-wide leading-none ${playfair.className}`}
            >
          <span className="text-[1.0em] mr-10">Lady</span>
          <span className="text-[0.3em] align-[0.3em] font-light italic px-20">of the </span>
          <span className="text-[1.0em] ml-12">Shrooms</span>
            </h3>
           
          </div>
          {/* Links */}
          <div className="flex-1 flex items-start justify-end pr-2 md:pr-4">
            <div className="flex flex-col items-end">
                <nav>
                <div className="flex flex-col space-y-2 text-base md:text-lg font-medium text-right">
                  <Link href="/" className="transition-colors hover:text-white">Home</Link>
                  <Link href="/about" className="transition-colors hover:text-white">About</Link>
                </div>
                </nav>
              <div className="mt-4 flex justify-end gap-5 text-xl md:text-2xl">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="transition-transform hover:scale-110"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom line */}
        <div className="text-center text-[11px] md:text-xs tracking-wide mt-12 pt-6">
          © {new Date().getFullYear()} Lady of the Shrooms
        </div>
      </div>
    </footer>
  );
}
