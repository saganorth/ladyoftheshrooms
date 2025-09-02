'use client';
import { useParams } from 'next/navigation';
import { mushrooms } from '../../components/data/mushroom';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function MushroomDetailPage() {
  const params = useParams();
  const mushroom = mushrooms.find(m => m.id === params.id);

  if (!mushroom) return <div className="text-white text-xl p-6">Not found</div>;

  return (
    <main
      className="min-h-screen flex flex-col items-center justify-start px-4 sm:px-6 pt-32 md:pt-40 pb-24"
      style={{
        backgroundImage: "url('/background/basket.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        filter: 'brightness(0.94) contrast(1.05)',
      }}
    >
      <div className="absolute top-10 left-10 text-4xl p-4"></div>
      <div className="absolute bottom-10 right-10 text-4xl p-4"></div>
      
      <img
        src={mushroom.images[0]}
        alt={mushroom.name}
        className="mx-auto w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 object-contain rounded-full shadow-xl border-4 border-[#e6d4a3] mb-12 md:mb-20 p-6 md:p-8"
        style={{
          background: 'linear-gradient(145deg, #fff6e6, #f8f4e8)'
        }}
      />

        <section 
          className="max-w-md w-full flex flex-col items-center gap-6 relative px-6 py-8 sm:px-8 sm:py-10 mt-2 md:mt-4 rounded-3xl z-10"
          style={{
            border: '3px solid #e6d4a3',
            background: 'linear-gradient(145deg, #fff6e6, #f8f4e8)',
            boxShadow: '0 8px 32px rgba(150, 100, 60, 0.2)',
            overflow: 'hidden'
          }}
        >
    
          <h1 
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#5d4425] text-center py-2 sm:py-4 px-2 sm:px-6"
            style={{ fontFamily: "'Poppins', 'Raleway', sans-serif" }}
          >
            {mushroom.name}
          </h1>
          
          <div 
            className="text-sm sm:text-base md:text-lg text-[#5d4425] text-center px-2 sm:px-6 py-4 sm:py-6 rounded-3xl"
          >
            ✨ {mushroom.description} ✨
          </div>
          
          <div 
            className="flex gap-4 mt-4 sm:mt-6 bg-[#f0e9d9] p-4 sm:p-6 rounded-full"
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
