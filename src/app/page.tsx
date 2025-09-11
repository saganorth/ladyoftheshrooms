
import MushroomGrid from '../app/components/MushroomGrid';
import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({ subsets: ['latin'], weight: ['400','500','600','700'] });

export default function HomePage() {
  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center relative p-4 sm:p-6"
      style={{
        backgroundImage: "url('/background/moss.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        filter: 'brightness(0.94) contrast(1.05)',
      }}>
      

      {/* Mushroom Grid */}
      <div className="w-full max-w-4xl sm:max-w-5xl md:max-w-6xl mx-auto px-2 sm:px-4 md:px-6 relative flex-1 flex items-center justify-center">
        <MushroomGrid />
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 text-brand-cream/70">
        <div className="flex flex-col items-center">
          <span className="text-xs sm:text-sm mb-1 sm:mb-2 font-medium">Explore Collection</span>
          <div className="w-px h-6 sm:h-8 bg-brand-cream/50"></div>
        </div>
      </div>
    </div>
  );
}