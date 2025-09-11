"use client";

import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function AboutPage() {
    return (
        <div className="min-h-screen flex items-center justify-center p-4 sm:px-6 sm:py-10 bg-[#132612]">
            <div className="flex flex-col items-center w-full max-w-md sm:max-w-lg md:max-w-xl rounded-3xl border-4 p-8 sm:p-10 md:p-12 shadow-lg bg-[#f7f4eb] border-[#e6d4a3]">
                
                <img
                    src="/lady.jpeg"
                    alt="Portrait of Lady of the Shrooms"
                    width={200}
                    height={200}
                    className="w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 lg:w-56 lg:h-56 object-cover rounded-full border-4 border-[#e6d4a3] bg-[#f7f4eb] mb-6 sm:mb-8"
                />
                
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-2 mt-4">
                    Lady of the Shrooms
                </h1>
                
                <p className="text-xs sm:text-sm md:text-base text-gray-600 text-center m-4 sm:mb-6 uppercase tracking-widest">
                    Est. 2024 • Hand‑crafted Myco Art
                </p>
                
                <p className="text-sm sm:text-base md:text-lg text-gray-800 text-center leading-relaxed m-3 sm:mb-4">
                    Welcome to Lady of the Shrooms, where passion for mycology meets artisanal craftsmanship.
                </p>
                
                <p className="text-sm sm:text-base md:text-lg text-gray-800 text-center leading-relaxed m-3 sm:mb-6">
                    Founded in 2024, we create handmade sculptures inspired by the forest. Want to order or collaborate? Reach out via Instagram.
                </p>

                <div className="flex gap-3 sm:gap-4 p-3 sm:p-4 m-3 rounded-full border border-[#e6d4a3] bg-[#f7f4eb]/80">
                    <a
                        href="https://www.instagram.com/ladyoftheshrooms"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors duration-300 p-2 text-brand-accent"
                        aria-label="Instagram profile"
                    >
                        <FontAwesomeIcon icon={faInstagram} className="text-xl sm:text-2xl" />
                    </a>
                </div>
            </div>
        </div>
    );
}
