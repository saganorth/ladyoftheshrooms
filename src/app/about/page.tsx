"use client";
import Image from 'next/image';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function AboutPage() {
    const instagramButtonClass = "inline-flex items-center gap-2 text-brand-accent hover:text-white bg-white hover:bg-brand-gold border border-brand-gold/60 px-5 py-2.5 transition-colors rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-gold/40";
    return (
        <>
        <main className="min-h-screen w-full flex flex-col items-center py-14 md:py-18 px-5 sm:px-8 bg-gradient-to-b from-brand-cream to-[#e8e3d5]">
            <div className="w-full max-w-2xl bg-white rounded-2xl shadow-md border border-brand-gold/30 p-8 sm:p-10 flex flex-col items-center gap-8">
                <Image
                    src="/lady.jpeg"
                    alt="Portrait of Lady of the Shrooms"
                    width={140}
                    height={140}
                    className="rounded-full border-4 border-brand-gold object-cover w-50 h-50"
                    priority
                />
                <header className="text-center space-y-2">
                    <p className="text-xs uppercase tracking-widest text-brand-accent/60">Est. 2024 • Hand‑crafted Myco Art</p>
                </header>
                <div className="space-y-5 text-center">
                    <p className="text-sm sm:text-base leading-relaxed">
                        Welcome to Lady of the Shrooms, where passion for mycology meets artisanal craftsmanship.
                    </p>
                    <p className="text-sm sm:text-base leading-relaxed">
                        Founded in 2024, we create handmade sculptures inspired by the forest. Want to order or collaborate? Reach out via Instagram.
                    </p>
                </div>
                <a
                    href="https://www.instagram.com/ladyoftheshrooms"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={instagramButtonClass}
                    aria-label="Instagram profile"
                >
                    <FontAwesomeIcon icon={faInstagram} className="w-5 h-5" />
                    <span className="font-medium">@ladyoftheshrooms</span>
                </a>
            </div>
        </main>
        </>
    );
}
