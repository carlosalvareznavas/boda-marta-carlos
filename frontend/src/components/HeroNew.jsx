import React from 'react';
import { Button } from './ui/button';
import { AddToCalendar } from './AddToCalendar';

export const HeroNew = () => {
  const scrollToRSVP = () => {
    const element = document.getElementById('rsvp');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="hero-new relative bg-white overflow-hidden">
      {/* Hero Image - Full bleed */}
      <div className="relative w-full h-screen">
        <img 
          src="/assets/Imagen-HERO.jpg"
          alt="Marta y Carlos"
          className="w-full h-full object-cover grayscale"
        />
        {/* Subtle gradient at bottom for text transition */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      </div>

      {/* Vertical text on the side */}
      <div className="absolute left-8 top-1/2 transform -translate-y-1/2 -rotate-90 origin-center z-20">
        <p className="text-sm md:text-base text-gray-darkest font-light tracking-widest whitespace-nowrap">
          La Chumbera, Sacromonte, Granada · 27 junio 2026
        </p>
      </div>

      {/* Content below image - starts right after hero */}
      <div className="relative bg-white px-6 py-12 flex flex-col items-center">
        {/* Names with handwritten signatures */}
        <div className="mb-6">
          <img 
            src="/assets/firmas-manuscritas.png"
            alt="Marta & Carlos"
            className="h-20 md:h-28 w-auto"
          />
        </div>

        {/* Decorative emblem */}
        <div className="mb-6">
          <img 
            src="/assets/emblema-crest-decorativo-gris.png"
            alt=""
            className="h-16 md:h-20 w-auto opacity-90"
          />
        </div>

        {/* Tagline */}
        <div className="text-center mb-8 max-w-2xl">
          <p className="text-xl md:text-2xl text-gray-darkest font-light leading-relaxed">
            La vida, a nuestra manera.<br />
            ¡Y que suerte celebrarla contigo!
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col items-center gap-4">
          <Button 
            onClick={scrollToRSVP}
            className="bg-gray-darkest hover:bg-black text-white px-10 py-6 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 font-normal"
          >
            Confirmar Asistencia
          </Button>
          
          {/* Add to Calendar */}
          <AddToCalendar />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <img 
          src="/assets/scroll.png"
          alt=""
          className="h-12 w-auto opacity-60 drop-shadow-md"
        />
      </div>
    </section>
  );
};
