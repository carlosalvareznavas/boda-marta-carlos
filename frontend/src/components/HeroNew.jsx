import React from 'react';
import { Button } from './ui/button';

export const HeroNew = () => {
  const scrollToRSVP = () => {
    const element = document.getElementById('rsvp');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="hero-new relative min-h-screen flex flex-col items-center justify-center bg-white overflow-hidden">
      {/* Hero Image - Full bleed, no margins */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src="/assets/Imagen-HERO.jpg"
          alt="Marta y Carlos"
          className="w-full h-full object-cover grayscale"
        />
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-white"></div>
      </div>

      {/* Content overlaid on image */}
      <div className="relative z-10 flex flex-col items-center justify-end h-full pb-16 px-6">
        {/* Names with handwritten signatures */}
        <div className="mb-6">
          <img 
            src="/assets/firmas-manuscritas.png"
            alt="Marta & Carlos"
            className="h-20 md:h-28 w-auto drop-shadow-lg"
          />
        </div>

        {/* Decorative emblem */}
        <div className="mb-6">
          <img 
            src="/assets/emblema-crest-decorativo-gris.png"
            alt=""
            className="h-16 md:h-20 w-auto opacity-90 drop-shadow-md"
          />
        </div>

        {/* Tagline */}
        <div className="text-center mb-8 max-w-2xl">
          <p className="text-xl md:text-2xl text-gray-darkest font-light leading-relaxed drop-shadow-sm">
            La vida, a nuestra manera.<br />
            ¡Y que suerte celebrarla contigo!
          </p>
        </div>

        {/* CTA Button */}
        <Button 
          onClick={scrollToRSVP}
          className="bg-gray-darkest hover:bg-black text-white px-10 py-6 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 font-normal"
        >
          Confirmar Asistencia
        </Button>
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
