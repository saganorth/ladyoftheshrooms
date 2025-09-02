"use client";
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function AboutPage() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-start px-4 sm:px-6 pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-14 sm:pb-20 bg-gradient-to-b from-brand-cream to-[#e8e3d5] text-brand-accent">
            <section className="w-full max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-3xl flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10 px-5 sm:px-6 md:px-10 py-6 sm:py-8 md:py-10 mt-2 sm:mt-4 rounded-2xl border-4 border-brand-gold bg-brand-cream">
                <div className="max-w-screen-xl mx-auto">
                    <div className="flex">
                        <div className="shrink-0">
                            <img
                                className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 object-cover rounded-full border-2 border-brand-gold p-0.5 sm:p-1"
                                src="/lady.jpeg"
                                alt="Lady of the Shrooms portrait"
                            />
                        </div>
                        {/* Other content */}
                    </div>
                </div>
                <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2 md:gap-3 max-w-prose">
                    <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-brand-accent tracking-wide">Lady of the Shrooms</h1>
                    <p className="text-xs sm:text-sm md:text-base leading-relaxed">
                        Welcome to Lady of the Shrooms, where passion for mycology meets artisanal craftsmanship.
                    </p>
                    <p className="text-xs sm:text-sm md:text-base leading-relaxed">
                        Founded in 2024, we specialize in cultivating and foraging the finest mushrooms in the Pacific Northwest, connecting people with fungi through sustainable practices.
                    </p>
                    <div className="pt-2">
                        <a
                            href="https://www.instagram.com/ladyoftheshrooms"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-brand-accent hover:text-brand-gold bg-brand-cream/70 hover:bg-brand-cream p-2 rounded-full border border-brand-gold/40 transition-colors"
                            aria-label="Instagram"
                        >
                            <FontAwesomeIcon icon={faInstagram} className="w-5 h-5 sm:w-6 sm:h-6" />
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}
