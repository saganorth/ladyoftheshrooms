import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white flex flex-col min-h-screen overflow-x-hidden">
        <Header />

        <main className="flex-grow px-4 sm:px-8 pt-40 pb-24">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
