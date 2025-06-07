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
    <footer className="w-full bg-[#24411b] py-15 px-24 min-h-[300px]">
      <div className="flex items-center justify-between w-full h-full px-4 md:px-8 lg:px-12">
        <div className="flex items-center space-x-4">
          <span className={`text-[2em] mr-10 font-bold text-[#e6d4a3] ${playfair.className}`}>
        Lady <span className="text-7xl md:text-5xl align-top font-light italic mx-2">of the</span> Shrooms
          </span>
        </div>
        
       
        <div className="flex items-center gap-16">
            <Link
            href="/about"
            className="text-6xl md:text-7xl font-medium text-[#e6d4a3] hover:text-[#f0e5b8] transition-all duration-300 no-underline"
            >
            About us
            </Link>
            
          <a
            href="https://www.instagram.com/ladyoftheshrooms"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#e6d4a3] hover:text-[#f0e5b8] transition-all duration-300"
          >
            <FontAwesomeIcon icon={faInstagram} className="w-20 h-20 md:w-24 md:h-24" />
          </a>
        </div>
      </div>
    </footer>
  );
}