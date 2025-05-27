import "./globals.css";
import Header from "../app/components/Header";
import Footer from "../app/components/Footer";
import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair'
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={playfair.variable}>
      <body
        className="flex flex-col min-h-screen bg-neutral-900 text-white min-h-screen relative overflow-hidden"
        style={{
          backgroundImage: 'url("/background/moss.jpg")',
          backgroundSize: '120%',
          backgroundPosition: 'top center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          filter: 'brightness(0.9) contrast(1.1)',
        }}
      >
        <Header />
        <main className="flex-grow relative z-10 pt-36 px-4 sm:px-8 pb-24">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}