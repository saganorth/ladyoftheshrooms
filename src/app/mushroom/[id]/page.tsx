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
          className="w-52 h-52 sm:w-56 sm:h-56 md:w-80 md:h-80 object-cover rounded-full border-4 mb-8"
          style={{ borderColor: '#e6d4a3', backgroundColor: '#f7f4eb' }}
        />
      
        <div className="flex flex-col items-center max-w-md w-140 rounded-3xl border-4 p-10 sm:p-12 shadow-lg"
          style={{ borderColor: '#e6d4a3', backgroundColor: '#f7f4eb' }}
        >   
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 text-center mb-8">
            {mushroom.name}
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-700">
            {mushroom.description}
          </p>

          <div
            className="flex gap-6 p-5 rounded-full border mt-2"
            style={{
              backgroundColor: 'rgba(247, 244, 235, 0.8)',
              borderColor: 'rgba(230, 212, 163, 0.4)',
            }}
          >
            <a
              href="https://www.instagram.com/ladyoftheshrooms"
              className="text-brand-accent hover:text-[#e6d4a3] transition-colors duration-300 p-3"
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