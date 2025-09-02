'use client';

import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function AboutPage() {

  return (
    <main
      className="min-h-screen flex flex-col items-center justify-start px-4 sm:px-6 pt-28 md:pt-36 pb-20"
      style={{
        background: 'linear-gradient(to bottom, #f7f4eb, #e8e3d5)',
        color: '#4a4a3a'
      }}
    >

        <section 
          className="max-w-md w-full flex flex-col items-center gap-6 relative px-6 py-8 sm:px-8 sm:py-10 mt-4 md:mt-6 rounded-3xl z-10"
          style={{
            border: '3px solid #e6d4a3',
            background: 'linear-gradient(145deg, #fff6e6, #f8f4e8)',
            boxShadow: '0 8px 32px rgba(150, 100, 60, 0.2)',
            overflow: 'hidden'
          }}
        >
    
      
          
          <div 
            className="flex gap-4 mt-6 bg-[#f0e9d9] p-6 rounded-full"
          >
            <a
              href="https://www.instagram.com/ladyoftheshrooms"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8b6b40] hover:text-[#d1a45e] transition-colors duration-300 p-2"
              aria-label="Instagram"
            >
              <FontAwesomeIcon icon={faInstagram} className="w-10 h-10" />
            </a>
          </div>
        </section>
    </main>
  );
}
