"use client";
import Image from 'next/image';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function AboutPage() {
    return (
        <div
            className="min-h-screen flex items-center justify-center px-6 py-10"
            style={{ backgroundColor: "#132612" }}
        >
            <div className="flex flex-col items-center max-w-md w-100 rounded-3xl border-4  p-6 sm:p-8 backdrop-blur-sm shadow-lg bg-brand-cream" style={{ borderColor: '#e6d4a3', backgroundColor: '#f7f4eb' }}>
                <Image
                    src="/lady.jpeg"
                    alt="Portrait of Lady of the Shrooms"
                    width={140}
                    height={140}
                    className="w-50 h-50 sm:w-50 sm:h-50 md:w-90 md:h-90 object-cover rounded-full border-4 border-brand-gold mb-6"
                    style={{ borderColor: '#e6d4a3', backgroundColor: '#f7f4eb' }}
                    priority
                />
                
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 text-center mb-2 p-2">
                    Lady of the Shrooms
                </h1>
                
                <p className="text-base sm:text-xlg md:text-xl text-gray-700 mt-2 mb-4">Est. 2024 • Hand‑crafted Myco Art</p>
                
                <p className="text-sm sm:text-base md:text-lg text-gray-800 text-center leading-relaxed mb-4 mx-2">
                    Welcome to Lady of the Shrooms, where passion for mycology meets artisanal craftsmanship.
                </p>
                
                <p className="text-sm sm:text-base md:text-lg text-gray-800 text-center leading-relaxed mb-6 mx-2">
                    Founded in 2024, we create handmade sculptures inspired by the forest. Want to order or collaborate? Reach out via Instagram.
                </p>

                <div
                    className="flex gap-4 p-4 rounded-full  bg-brand-cream/80"
                >
                    <a
                        href="https://www.instagram.com/ladyoftheshrooms"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors duration-300 p-2 text-brand-accent"
                        aria-label="Instagram profile"
                    >
                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </a>
                </div>
            </div>
        </div>
    );
}





   