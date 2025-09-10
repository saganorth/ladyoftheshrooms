
import MushroomGrid from '../app/components/MushroomGrid';
import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({ subsets: ['latin'], weight: ['400','500','600','700'] });

export default function HomePage() {
  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center relative"
      style={{
        backgroundImage: "url('/background/moss.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        filter: 'brightness(0.94) contrast(1.05)',
      }}>
      
     
      {/* Mushroom Grid */}
      <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 relative flex-1 flex items-center justify-center">
        <MushroomGrid />
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-brand-cream/70">
        <div className="flex flex-col items-center">
          <div className="w-px h-8 bg-brand-cream/50"></div>
        </div>
      </div>
    </div>
  );
}