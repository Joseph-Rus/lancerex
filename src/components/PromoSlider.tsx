'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Mock promotions data
const promotions = [
  {
    id: '1',
    title: 'End of Semester Sale',
    description: 'List your textbooks now and get featured placement!',
    buttonText: 'Start Selling',
    buttonLink: '/create-listing',
    bgColor: 'bg-gradient-to-r from-[#003366] to-[#0A4D8F]',
    textColor: 'text-white',
  },
  {
    id: '2',
    title: 'Free Course Notes Exchange',
    description: 'Trade your notes with fellow students for free this week!',
    buttonText: 'Learn More',
    buttonLink: '/notes-exchange',
    bgColor: 'bg-gradient-to-r from-[#FFD700] to-[#FFA500]',
    textColor: 'text-[#333333]',
  },
  {
    id: '3',
    title: 'Campus Book Drive',
    description: 'Donate your used textbooks to help incoming freshmen.',
    buttonText: 'Donate Now',
    buttonLink: '/book-drive',
    bgColor: 'bg-gradient-to-r from-[#228B22] to-[#32CD32]',
    textColor: 'text-white',
  },
];

export function PromoSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % promotions.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative rounded-lg overflow-hidden shadow-lg">
      {promotions.map((promo, index) => (
        <div 
          key={promo.id}
          className={`${promo.bgColor} ${promo.textColor} p-8 rounded-lg ${
            index === currentSlide ? 'block' : 'hidden'
          }`}
        >
          <div className="container mx-auto">
            <div className="md:flex items-center justify-between">
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold mb-3">{promo.title}</h3>
                <p className="mb-6">{promo.description}</p>
                <Link
                  href={promo.buttonLink}
                  className={`inline-block px-6 py-2 rounded-full font-medium ${
                    promo.textColor === 'text-white' 
                      ? 'bg-white text-[#003366]' 
                      : 'bg-[#003366] text-white'
                  } hover:opacity-90 transition-opacity`}
                >
                  {promo.buttonText}
                </Link>
              </div>
              <div className="md:w-1/3 mt-6 md:mt-0">
                <Image
                  src="/api/placeholder/300/200"
                  alt={promo.title}
                  width={300}
                  height={200}
                  className="rounded-lg mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation dots */}
      <div className="absolute bottom-4 left-0 right-0">
        <div className="flex justify-center space-x-2">
          {promotions.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}