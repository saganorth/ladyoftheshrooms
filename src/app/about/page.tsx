'use client';

import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function AboutPage() {

  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center px-8 py-24"
      style={{
        background: 'linear-gradient(to bottom, #f7f4eb, #e8e3d5)',
        color: '#4a4a3a'
      }}
    >

        <section 
          className="max-w-lg flex flex-col items-center gap-8 relative p-10 mt-6 md:mt-4 rounded-3xl z-10"
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
