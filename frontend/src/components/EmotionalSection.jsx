import React from 'react';
import { weddingData } from '../data/mockData';

export const EmotionalSection = () => {
  return (
    <section className="py-20 px-6 relative overflow-hidden bg-cream">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 opacity-20">
        <img 
          src={weddingData.images.emotional}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* Decorative Line */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent to-terracota"></div>

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <div className="mb-8">
          <span className="inline-block w-16 h-px bg-terracota mb-6"></span>
          <h2 className="font-serif text-4xl md:text-5xl text-olive mb-6">
            Un día para celebrar en serio
          </h2>
          <span className="inline-block w-16 h-px bg-terracota mt-6"></span>
        </div>

        <p className="text-olive-dark text-lg md:text-xl leading-relaxed font-light max-w-2xl mx-auto">
          Hemos elegido el Sacromonte porque tiene algo especial: es Granada en estado puro, con su magia y su carácter. Queremos que sea una noche para disfrutar sin prisas, con buen ambiente y con esa energía que solo tiene este lugar.
        </p>

        {/* Decorative Element */}
        <div className="mt-12 flex justify-center">
          <div className="w-20 h-20 opacity-40">
            <img 
              src={weddingData.images.decorPomegranate}
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>

      {/* Decorative Line Bottom */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-px h-16 bg-gradient-to-t from-transparent to-terracota"></div>
    </section>
  );
};
