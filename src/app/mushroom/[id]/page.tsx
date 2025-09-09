'use client';
import { useParams } from 'next/navigation';
import { mushrooms } from '../../components/data/mushroom';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FALLBACK_IMAGE = '/fallback-image.png';

export default function MushroomDetailPage() {
  const params = useParams();
  const id = typeof params.id === 'string' ? params.id : '';
  const mushroom = mushrooms.find(m => m.id === id);

  if (!mushroom) return <div className="text-white text-xl p-6">Not found</div>;

  return (
    <div
      className="min-h-screen flex items-center justify-center px-6 py-10"
      style={{
        backgroundImage: "url('/background/basket.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        filter: 'brightness(0.94) contrast(1.05)',
      }}
    >
      <section className="flex flex-col items-center mb-10 sm:mb-0 mr-0 sm:mr-10">
        <img
          src={mushroom.images && mushroom.images.length > 0 ? mushroom.images[0] : FALLBACK_IMAGE}
          alt={mushroom.name}
          className="w-44 h-44 sm:w-44 sm:h-44 md:w-79 md:h-79 object-cover rounded-full border-4 mb-6"
          style={{ borderColor: '#e6d4a3', backgroundColor: '#f7f4eb' }}
        />
      
      <div className="flex flex-col items-center max-w-md w-100 rounded-3xl border-4 p-6 sm:p-8 backdrop-blur-sm shadow-lg"
        style={{ borderColor: '#e6d4a3', backgroundColor: '#f7f4eb' }}
      >   
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
          {mushroom.name}
        </h1>

        <p className="text-sm sm:text-base md:text-lg text-gray-800 text-center leading-relaxed mb-6">
          {mushroom.description}
        </p>

        <div
          className="flex gap-4 p-4 rounded-full border"
          style={{
        backgroundColor: 'rgba(247, 244, 235, 0.8)',
        borderColor: 'rgba(230, 212, 163, 0.4)',
          }}
        >
          <a
        href="https://www.instagram.com/ladyoftheshrooms"
        className="text-brand-accent hover:text-[#e6d4a3] transition-colors duration-300 p-2"
        rel="noopener noreferrer"
        aria-label="Instagram"
          >
        <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
        </div>  
      </div>
        </section>
    </div>
  );
}