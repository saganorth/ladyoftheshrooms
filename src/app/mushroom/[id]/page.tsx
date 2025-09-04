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
    <><meta name="viewport" content="width=device-width, initial-scale=1.0"></meta><main
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
        className="mx-auto w-36 h-36 sm:w-48 sm:h-48 md:w-56 md:h-56 object-contain rounded-full border-4 border-brand-gold mb-10 md:mb-16 p-5 md:p-6 bg-brand-cream" />

      <section
        className="max-w-md w-full flex flex-col items-center gap-5 relative px-6 py-8 sm:px-8 sm:py-10 mt-2 md:mt-4 rounded-3xl z-10 border-4 border-brand-gold bg-brand-cream/95 backdrop-blur-sm"
      >

        <h1
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-accent text-center py-2 sm:py-4 px-2 sm:px-6 tracking-wide"
        >
          {mushroom.name}
        </h1>

        <p
          className="text-sm sm:text-base md:text-lg text-brand-accent/90 text-center px-2 sm:px-6 py-2 sm:py-4 leading-relaxed"
        >
          {mushroom.description}
        </p>

        <div
          className="flex gap-4 mt-2 sm:mt-4 bg-brand-cream/80 p-4 sm:p-5 rounded-full border border-brand-gold/40"
        >
          <a
            href="https://www.instagram.com/ladyoftheshrooms"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-accent hover:text-brand-gold transition-colors duration-300 p-2"
            aria-label="Instagram"
          >
            <FontAwesomeIcon icon={faInstagram} className="w-10 h-10" />
          </a>
        </div>
      </section>
    </main></>
  );
}
