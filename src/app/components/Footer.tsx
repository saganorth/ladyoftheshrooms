"use client";
import Link from 'next/link';
import { Playfair_Display } from 'next/font/google';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

const playfair = Playfair_Display({ subsets: ['latin'], weight: ['400','500','600','700'] });

export default function Footer() {
  return (
    <footer className="bg-[#1d3b1a] text-[#e6d4a3] mt-auto pt-12 pb-8">
      <div className="max-w-5xl mx-auto px-5 md:px-8">
        <div className="flex flex-col items-center">
          <h2 className={`text-center text-[32px] xs:text-[40px] md:text-[70px] tracking-wide select-none leading-tight px-1 md:px-2 ${playfair.className}`}>
            <span className="mr-4">Lady</span>
            <span className="text-[0.34em] align-middle font-light italic mx-10">of the</span>
            <span className="ml-4">Shrooms</span>
          </h2>
          <nav aria-label="Footer navigation" className="mb-6">
            <ul className="flex flex-col items-center space-y-2 text-base md:text-lg font-medium list-none m-0 p-0">
              <li>
                <Link href="/about" className="no-underline text-[#e6d4a3]  hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#e6d4a3]/40 rounded-sm px-1">About</Link>
              </li>
            </ul>
          </nav>
            <div className="flex justify-center gap-6 text-2xl mb-8">
            <a
              href="https://instagram.com/ladyoftheshrooms"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="no-underline text-[#e6d4a3] transition-transform hover:scale-110"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            </div>
          <div className="text-center text-[11px] md:text-xs tracking-wide opacity-90">
            © {new Date().getFullYear()} Lady of the Shrooms
          </div>
        </div>
      </div>
    </footer>
  );
}
