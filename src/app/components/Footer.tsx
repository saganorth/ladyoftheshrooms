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
    <footer className="w-full bg-[#24411b] py-40 px-48 min-h-[500px]">
      <div className="flex items-center justify-between w-full h-full">
        {/* Left side - Title */}
        <div className="flex items-center">
          <span className={`text-5xl md:text-6xl font-bold text-[#e6d4a3] ${playfair.className}`}>
            Lady <span className="text-3xl md:text-4xl align-top font-light italic mx-2">of the</span> Shrooms
          </span>
        </div>
        
        {/* Right side - Navigation */}
        <div className="flex items-center gap-32">
          <Link
            href="/about"
            className="text-7xl md:text-8xl font-medium text-[#e6d4a3] hover:text-[#f0e5b8] transition-all duration-300 no-underline"
          >
            About us
          </Link>
          
          <a
            href="https://www.instagram.com/ladyoftheshrooms"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#e6d4a3] hover:text-[#f0e5b8] transition-all duration-300"
          >
            <FontAwesomeIcon icon={faInstagram} className="w-32 h-32 md:w-36 md:h-36" />
          </a>
        </div>
      </div>
    </footer>
  );
}