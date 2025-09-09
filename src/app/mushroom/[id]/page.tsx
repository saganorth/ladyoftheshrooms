'use client';
import { useParams } from 'next/navigation';
import { mushrooms } from '../../components/data/mushroom';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function MushroomDetailPage() {
  const params = useParams();
  const id = typeof params.id === 'string' ? params.id : '';
  const mushroom = mushrooms.find(m => m.id === id);

  if (!mushroom) return <div className="text-white text-xl p-6">Not found</div>;

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-start px-10 sm:px-6 pt-32 md:pt-40 pb-24"
      style={{
      backgroundImage: "url('/background/basket.png')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      filter: 'brightness(0.94) contrast(1.05)',
      }}
    >
      <img
      src={mushroom.images && mushroom.images.length > 0 ? mushroom.images[0] : '/fallback-image.png'}
      alt={mushroom.images && mushroom.images.length > 0 ? mushroom.name : 'No image available'}
      className="mx-auto w-36 h-36 sm:w-48 sm:h-48 md:w-56 md:h-56 object-contain rounded-full border-4 mb-10 md:mb-16 p-5 md:p-6" 
      style={{ borderColor: '#e6d4a3', backgroundColor: '#f7f4eb' }} />
    
      <section
      className="max-w-md w-100 flex flex-col items-center gap-5 relative px-6 py-8 sm:px-8 sm:py-10 mt-2 md:mt-4 rounded-3xl z-10 border-4 backdrop-blur-sm shadow-lg"
      style={{ borderColor: '#e6d4a3', backgroundColor: '#f7f4eb' }}
      >

      <h1
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 text-center py-2 sm:py-4 px-2 sm:px-6 mt-4 mb-2 tracking-wide"
      >
        {mushroom.name}
      </h1>

      <p
        className="text-sm sm:text-base md:text-lg text-gray-800 text-center px-2 sm:px-6 py-2 sm:py-4 leading-relaxed"
      >
        {mushroom.description}
      </p>

      <div
        className="flex gap-4 mt-2 sm:mt-4 p-4 sm:p-5 rounded-full border"
        style={{ backgroundColor: 'rgba(247, 244, 235, 0.8)', borderColor: 'rgba(230, 212, 163, 0.4)' }}
      >
      <a
        href="https://www.instagram.com/ladyoftheshrooms"
        target="_blank"
        rel="noopener noreferrer"
        className="text-brand-accent hover:text-#e6d4a3 transition-colors duration-300 p-2"
        aria-label="Instagram"
      >
        <FontAwesomeIcon icon={faInstagram} className="w-10 h-10" />
      </a>
      </div>
    </section>
    </div>
);
}
