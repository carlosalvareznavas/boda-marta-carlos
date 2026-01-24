import React from 'react';
import { Car, Bus } from 'lucide-react';

export const HowToGetSection = () => {
  return (
    <section className="py-20 px-6 bg-cream">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl text-olive mb-6">
            Cómo llegar
          </h2>
          <p className="text-olive-dark text-lg">
            Para ir cómodos, estas son las opciones más sencillas:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Taxi/Uber */}
          <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-full bg-terracota/20 flex items-center justify-center">
                <Car className="w-7 h-7 text-terracota" />
              </div>
              <h3 className="text-2xl font-medium text-olive">Taxi / Uber</h3>
            </div>
            <p className="text-olive-dark leading-relaxed">
              La forma más cómoda y directa. Puedes indicar "La Chumbera, Sacromonte" o la dirección completa.
            </p>
          </div>

          {/* Bus */}
          <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-full bg-olive/20 flex items-center justify-center">
                <Bus className="w-7 h-7 text-olive" />
              </div>
              <h3 className="text-2xl font-medium text-olive">Autobús urbano</h3>
            </div>
            <p className="text-olive-dark leading-relaxed">
              <span className="font-medium text-olive">Línea C34:</span> Sacromonte – Centro
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
