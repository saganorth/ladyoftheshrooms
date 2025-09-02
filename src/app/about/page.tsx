'use client';

import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function AboutPage() {

    return (
        <main
            className="min-h-screen flex flex-col items-center justify-start px-4 sm:px-6 pt-28 md:pt-36 pb-20"
            style={{
                background: 'linear-gradient(to bottom, #f7f4eb, #e8e3d5)',
                color: '#4a4a3a'
            }}
        >

                <section 
                    className="w-50 flex flex-col items-center gap-4 px-4 py-6 mt-4 rounded-2xl border-2"
                    style={{
                        borderColor: '#e6d4a3',
                        background: 'linear-gradient(145deg, #fff6e6, #f8f4e8)',
                    }}
                >
                    <img className='w-20 h-20 sm:w-24 sm:h-24 object-contain rounded-full border-2 border-[#e6d4a3] mb-4 p-2'
                        src='/background/lady.jpeg'
                        alt='About Us'
                    />
                    
                    <div className="text-center mb-4">
                        <h1 className="text-xl sm:text-2xl font-bold mb-2 text-[#8b6b40]">Lady of the Shrooms</h1>
                        <p className="text-sm mb-2">
                            Welcome to Lady of the Shrooms, where passion for mycology meets artisanal craftsmanship.
                        </p>
                        <p className="text-sm mb-2">
                            Founded in 2024, we specialize in cultivating and foraging the finest mushrooms in the Pacific Northwest, 
                            connecting people with fungi through sustainable practices.
                        </p>
                    </div>

                    <a
                        href="https://www.instagram.com/ladyoftheshrooms"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#8b6b40] hover:text-[#d1a45e] bg-[#f0e9d9] p-2 rounded-full"
                        aria-label="Instagram"
                    >
                        <FontAwesomeIcon icon={faInstagram} className="w-6 h-6" />
                    </a>
                </section>
        </main>
    );
}
