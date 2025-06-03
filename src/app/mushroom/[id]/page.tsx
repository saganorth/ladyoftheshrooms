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
    filter: 'brightness(0.93) contrast(1.08)',
  }}

>
  {/* Mushroom Image */}
  <div className="z-10 mb-8">
    <img
      src={mushroom.images[0]}
      alt={mushroom.name}
      className="mx-auto w-56 h-56 md:w-72 md:h-72 object-contain rounded-2xl shadow-2xl border-4 border-[#e6d4a3]/70"
      style={{ background: 'rgba(30, 50, 20, 0.12)' }}
    />
  </div>

  {/* Card for Details */}
  <section className="
    relative z-20
    max-w-lg w-full
    bg-[#26341b]/70
    border border-[#e6d4a3]/70
    rounded-3xl
    shadow-2xl
    px-8 py-8
    flex flex-col gap-5
    items-center
    backdrop-blur-xl
  ">
    <h1 className="text-3xl md:text-4xl font-bold text-[#e6d4a3] tracking-tight drop-shadow-lg">
      {mushroom.name}
    </h1>
    <div className="text-base md:text-lg text-[#f1e9d0] text-center">
      {mushroom.description}
    </div>

    <div className="mt-4 flex gap-4">
      <a
        href="https://www.instagram.com/ladyoftheshrooms"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-[#e6d4a3] text-[#24411b] px-5 py-2 rounded-lg font-semibold hover:bg-[#d6b85c] transition"
      >
        Instagram
      </a>
      <button
        onClick={() => router.back()}
        className="inline-flex items-center gap-2 border border-[#e6d4a3] text-[#e6d4a3] px-5 py-2 rounded-lg font-semibold hover:bg-[#2c5130] transition"
      >
        ← Tillbaka
      </button>
    </div>
  </section>
</main>

  );
}
