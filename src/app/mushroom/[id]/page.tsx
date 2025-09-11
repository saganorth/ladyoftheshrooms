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
      className="min-h-screen flex items-center justify-center p-4 sm:px-6 sm:py-10"
      style={{
        backgroundImage: "url('/background/basket.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        filter: 'brightness(0.94) contrast(1.05)',
      }}
    >
      <section className="flex flex-col items-center w-full max-w-sm sm:max-w-md">
        <img
          src={mushroom.images && mushroom.images.length > 0 ? mushroom.images[0] : FALLBACK_IMAGE}
          alt={mushroom.name}
          className="w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 object-cover rounded-full border-4 mb-6 sm:mb-8"
          style={{ borderColor: '#e6d4a3', backgroundColor: '#f7f4eb' }}
        />
      
        <div className="flex flex-col items-center w-full rounded-3xl border-4 p-6 sm:p-8 md:p-10 shadow-lg"
          style={{ borderColor: '#e6d4a3', backgroundColor: '#f7f4eb' }}
        >   
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-4 sm:mb-6 md:mb-8">
            {mushroom.name}
          </h1>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 text-center leading-relaxed mb-4 sm:mb-6">
            {mushroom.description}
          </p>

          <div
            className="flex gap-4 sm:gap-6 p-3 sm:p-4 md:p-5 rounded-full border"
            style={{
              backgroundColor: 'rgba(247, 244, 235, 0.8)',
              borderColor: 'rgba(230, 212, 163, 0.4)',
            }}
          >
            <a
              href="https://www.instagram.com/ladyoftheshrooms"
              className="text-brand-accent hover:text-[#e6d4a3] transition-colors duration-300 p-2 sm:p-3"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FontAwesomeIcon icon={faInstagram} className="text-xl sm:text-2xl" />
            </a>
          </div>  
        </div>
      </section>
    </div>
  );
}