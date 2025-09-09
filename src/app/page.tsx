

import MushroomGrid from '../app/components/MushroomGrid';


export default function HomePage() {


  return (
    
      <div className="min-h-screen pt-8 md:pt-12 pb-10"
        style={{
          backgroundImage: "url('/background/moss.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          filter: 'brightness(0.94) contrast(1.05)',
        }}>
        <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 relative">
          <MushroomGrid />
        </div>
     
      </div>
    
  );
}