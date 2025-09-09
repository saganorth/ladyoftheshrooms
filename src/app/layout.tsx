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
  <body className="min-h-screen flex flex-col ">
  <Header />
  <main className="flex-grow pt-4 md:pt-6 pb-8 md:pb-12">{children}</main>
        <Footer />
      </body>
    </html>
  );
}