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
    <section className="hero-new relative min-h-screen flex flex-col items-center justify-center bg-white px-6 py-12">
      {/* Hero Image */}
      <div className="w-full max-w-4xl mb-8">
        <div className="relative w-full aspect-[16/10] overflow-hidden rounded-lg shadow-2xl">
          <img 
            src="/assets/Imagen-HERO.jpg"
            alt="Marta y Carlos"
            className="w-full h-full object-cover grayscale"
          />
          {/* Subtle overlay for contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30"></div>
        </div>
      </div>

      {/* Names with handwritten signatures */}
      <div className="mb-6">
        <img 
          src="/assets/firmas-manuscritas.png"
          alt="Marta & Carlos"
          className="h-20 md:h-24 w-auto opacity-90"
        />
      </div>

      {/* Decorative emblem */}
      <div className="mb-6">
        <img 
          src="/assets/emblema-crest-decorativo-gris.png"
          alt=""
          className="h-16 w-auto opacity-80"
        />
      </div>

      {/* Tagline */}
      <div className="text-center mb-8 max-w-2xl">
        <p className="text-xl md:text-2xl text-gray-darkest font-light leading-relaxed">
          La vida, a nuestra manera.<br />
          ¡Y que suerte celebrarla contigo!
        </p>
      </div>

      {/* CTA Button */}
      <Button 
        onClick={scrollToRSVP}
        className="bg-gray-darkest hover:bg-black text-white px-10 py-6 text-lg rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 font-normal"
      >
        Confirmar Asistencia
      </Button>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <img 
          src="/assets/scroll.png"
          alt=""
          className="h-12 w-auto opacity-60"
        />
      </div>
    </section>
  );
};
