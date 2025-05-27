'use client';
export default function Footer() {
    const currentYear = new Date().getFullYear();
    
    return (
        <footer className="w-full mt-24 border-t border-yellow-900 bg-black backdrop-blur-sm text-center py-6 text-yellow-700 text-sm font-serif italic">
            <p className="mb-1">© {currentYear} Lady of the Shrooms</p>
            <p className="opacity-70">Handcrafted from moss and magic.</p>
            <a
                href="https://www.instagram.com/ladyoftheshrooms"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 hover:text-yellow-600 transition-colors"
                aria-label="Follow us on Instagram"
            >
                Follow us on Instagram
            </a>
        </footer>
    );
}
