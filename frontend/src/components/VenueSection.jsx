import React from 'react';
import { MapPin, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';

export const VenueSection = () => {
  const openGoogleMaps = () => {
    window.open('https://maps.app.goo.gl/fVVcUixPy494YxpK9?g_st=com.google.maps.preview.copy', '_blank');
  };

  return (
    <section className="py-20 px-6 bg-gray-lightest">
      <div className="max-w-4xl mx-auto">
        {/* Decorative emblem */}
        <div className="flex justify-center mb-8">
          <img 
            src="/assets/emblema-crest-decorativo-gris.png"
            alt=""
            className="h-12 w-auto opacity-70"
          />
        </div>

        {/* Venue Name */}
        <div className="text-center mb-6">
          <h2 className="text-5xl md:text-6xl font-light text-gray-darkest mb-4 tracking-wide">
            La Chumbera
          </h2>
        </div>

        {/* Date & Time */}
        <div className="text-center mb-4">
          <p className="text-xl md:text-2xl text-gray-dark font-light">
            27 de junio de 2026 · 19:00
          </p>
        </div>

        {/* Address */}
        <div className="text-center mb-8">
          <p className="text-base md:text-lg text-gray-dark font-light">
            Cam. del Sacromonte, 107, Albaicín, 18010 Granada
          </p>
        </div>

        {/* Google Maps Link */}
        <div className="flex justify-center items-center gap-2 mb-6">
          <MapPin className="w-5 h-5 text-gray-dark" />
          <button
            onClick={openGoogleMaps}
            className="text-gray-darkest hover:text-black underline underline-offset-4 transition-colors duration-300 flex items-center gap-2"
          >
            Abrir en Google Maps
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <Button 
            onClick={openGoogleMaps}
            className="bg-gray-darkest hover:bg-black text-white px-8 py-5 text-base rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Cómo llegar
          </Button>
        </div>
      </div>
    </section>
  );
};
