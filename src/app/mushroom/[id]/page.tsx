'use client';
import { useParams, useRouter } from 'next/navigation';
import { Playfair_Display } from 'next/font/google';
import MushroomCarousel from '../../components/MushroomCarousel';
import { mushrooms } from '../../components/data/mushroom';

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
});

export default function MushroomDetailPage() {
  const params = useParams();
  const router = useRouter();
  const mushroom = mushrooms.find(m => m.id === params.id);

  if (!mushroom) return <div className="text-white text-xl">Not found</div>;

  return (
    <main
  className="min-h-screen flex flex-col items-center justify-center px-4 py-20"
  style={{
    backgroundImage: "url('/background/basket.png')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    filter: 'brightness(0.94) contrast(1.05)',
  }}
>
  {/* Svampbild */}
  <div className="mb-8 z-10">
    <img
      src={mushroom.images[0]}
      alt={mushroom.name}
      className="mx-auto w-44 h-44 md:w-60 md:h-60 object-contain rounded-xl shadow-2xl"
      style={{
        background: 'rgba(255,255,255,0.06)',
        boxShadow: '0 8px 32px 0 rgba(30,30,20,0.16)'
      }}
    />
  </div>

  {/* Svävande text och knappar */}
  <section className="w-full max-w-lg flex flex-col items-center gap-5">
    <h1 className="text-3xl md:text-4xl font-bold text-[#fffbe6] drop-shadow-[0_4px_16px_rgba(0,0,0,0.36)] text-center">
      {mushroom.name}
    </h1>
    <div className="text-base md:text-lg text-[#fffbe6] text-center px-4 py-2 rounded-2xl bg-[#222]/50 shadow-md backdrop-blur-sm">
      {mushroom.description}
    </div>
    <div className="flex gap-4 mt-4">
      <a
        href="https://www.instagram.com/ladyoftheshrooms"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-[#fffbe6]/90 text-[#28421c] px-6 py-2 rounded-full font-semibold shadow hover:bg-[#f1c75b]/90 hover:text-[#222] transition-all"
      >
        Instagram
      </a>
      <button
        onClick={() => router.back()}
        className="inline-flex items-center gap-2 border border-[#fffbe6] text-[#fffbe6] px-6 py-2 rounded-full font-semibold hover:bg-[#24411b]/80 hover:text-[#fffbe6] transition-all"
      >
        ← Tillbaka
      </button>
    </div>
  </section>
</main>


  );
}
