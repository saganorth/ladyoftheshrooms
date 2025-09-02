

import MushroomGrid from '../app/components/MushroomGrid';

export default function HomePage() {


  return (
    <main className="min-h-screen"
     style={{
    backgroundImage: "url('/background/moss.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    filter: 'brightness(0.94) contrast(1.05)',
  }}>
  
  
        <MushroomGrid />
     
    </main>
  );
}