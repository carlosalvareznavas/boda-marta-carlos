import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { Button } from './ui/button';
import { weddingData } from '../data/mockData';

export const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={weddingData.images.hero}
          alt="Vista de la Alhambra"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-8 right-8 w-24 h-24 opacity-30 z-10 hidden md:block">
        <img 
          src={weddingData.images.decorPomegranate}
          alt=""
          className="w-full h-full object-contain"
        />
      </div>
      
      <div className="absolute bottom-12 left-8 w-32 h-32 opacity-25 z-10 hidden md:block">
        <img 
          src={weddingData.images.decorCactus}
          alt=""
          className="w-full h-full object-contain"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-6 py-12 max-w-3xl mx-auto">
        {/* Names */}
        <div className="mb-8 animate-fade-in">
          <h1 className="font-serif text-6xl md:text-8xl text-white mb-2 tracking-wide">
            {weddingData.couple.name1} <span className="font-light">&</span> {weddingData.couple.name2}
          </h1>
          <p className="font-serif text-2xl md:text-3xl text-amber-100 mt-4">
            Nos casamos
          </p>
        </div>

        {/* Date & Time */}
        <div className="mb-8 space-y-3">
          <div className="flex items-center justify-center gap-3 text-white">
            <Calendar className="w-5 h-5 text-amber-200" />
            <p className="text-xl md:text-2xl font-light">
              {weddingData.event.date} · {weddingData.event.time}
            </p>
          </div>
          <div className="flex items-center justify-center gap-3 text-white">
            <MapPin className="w-5 h-5 text-amber-200" />
            <p className="text-lg md:text-xl font-light">
              {weddingData.venue.name} · {weddingData.venue.shortLocation}
            </p>
          </div>
        </div>

        {/* Message */}
        <div className="mb-10 max-w-xl mx-auto">
          <p className="text-white text-base md:text-lg leading-relaxed font-light">
            Nos hace muchísima ilusión compartir este día con vosotros. Venid con ganas de celebrar, de reír… y de vivir una noche muy nuestra.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            onClick={() => scrollToSection('rsvp')}
            className="bg-terracota hover:bg-terracota-dark text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Confirmar asistencia
          </Button>
          <Button 
            onClick={() => scrollToSection('ubicacion')}
            variant="outline"
            className="bg-white/90 hover:bg-white text-olive border-2 border-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Ver ubicación
          </Button>
        </div>

        {/* Privacy Notice */}
        <div className="mt-12">
          <p className="text-amber-100 text-xs md:text-sm font-light italic">
            Enlace privado. Por favor, no reenviar.
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
};
