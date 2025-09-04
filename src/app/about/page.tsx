"use client";
import React from 'react';
import Image from 'next/image';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function AboutPage() {
    return (
        <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <main className="min-h-screen w-full flex flex-col items-center pt-24 sm:pt-32 pb-32 px-6 sm:px-10 bg-gradient-to-b from-brand-cream to-[#e8e3d5] text-brand-accent">
            <section className="w-400 max-w-4xl flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-16 bg-white/70 backdrop-blur-sm p-8 sm:p-12 rounded-2xl shadow-lg mt-16 mb-8 mx-auto">
                <div className="shrink-0 flex flex-col items-center mb-6 md:mb-0">
                    <div className="mt-12 rounded-full border-6 border-brand-gold bg-brand-cream p-4 sm:p-5 shadow-md">
                        <Image
                            src="/lady.jpeg"
                            alt="Portrait of Lady of the Shrooms"
                            width={220}
                            height={220}
                            priority
                            className="w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 object-cover rounded-full"
                        />
                    </div>
                </div>
                
                <article className="bg-white/50 rounded-xl p-8 shadow-inner flex-1">
                    <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left gap-8">
                        <p className="text-sm sm:text-base leading-relaxed max-w-prose font-medium mt-4">
                            Welcome to Lady of the Shrooms, where passion for mycology meets artisanal craftsmanship.
                        </p>
                        <p className="text-sm sm:text-base leading-relaxed max-w-prose mb-4">
                            Founded in 2024, we specialize in making handmade sculptures out of air-dried clay,
                             Want to order or collaborate? Reach out via Instagram.
                        </p>
                        <div className="mt-6 mb-4">
                            <a
                                href="https://www.instagram.com/ladyoftheshrooms"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 text-brand-accent hover:text-white bg-white hover:bg-brand-gold px-6 py-3.5 transition-all duration-300 rounded-full shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-brand-gold/40"
                                aria-label="Instagram profile"
                            >
                                <FontAwesomeIcon icon={faInstagram} className="w-6 h-6" />
                                <span className="font-medium">@ladyoftheshrooms</span>
                            </a>
                        </div>
                    </div>
                </article>
            </section>
        </main>
        </>
    );
}
