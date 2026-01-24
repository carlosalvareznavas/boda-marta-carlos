import React from 'react';
import { MapPin, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';
import { weddingData } from '../data/mockData';

export const LocationSection = () => {
  return (
    <section id="ubicacion" className="py-20 px-6 bg-olive-light">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl text-olive mb-4">
            Lugar
          </h2>
          <h3 className="text-3xl md:text-4xl font-serif text-terracota mb-4">
            {weddingData.venue.name}
          </h3>
          <p className="text-olive-dark text-lg font-light">
            {weddingData.venue.fullAddress}
          </p>
        </div>

        {/* Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          <div className="rounded-3xl overflow-hidden shadow-xl h-80">
            <img 
              src={weddingData.images.location}
              alt="La Chumbera"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="rounded-3xl overflow-hidden shadow-xl h-80">
            <img 
              src={weddingData.images.locationAlt}
              alt="Vistas de Granada"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Description */}
        <div className="text-center mb-10">
          <p className="text-olive text-lg md:text-xl font-light max-w-2xl mx-auto">
            Un lugar único en el Sacromonte, con unas vistas que hablan por sí solas.
          </p>
        </div>

        {/* Map Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            onClick={() => window.open(weddingData.venue.mapsUrl, '_blank')}
            className="bg-terracota hover:bg-terracota-dark text-white px-8 py-6 text-base rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3"
          >
            <MapPin className="w-5 h-5" />
            Abrir en Google Maps
            <ExternalLink className="w-4 h-4" />
          </Button>
          <Button 
            onClick={() => window.open(weddingData.venue.mapsUrl, '_blank')}
            variant="outline"
            className="bg-white hover:bg-cream text-olive border-2 border-olive px-8 py-6 text-base rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Cómo llegar
          </Button>
        </div>
      </div>
    </section>
  );
};
