import React from 'react';
import { Car, Bus } from 'lucide-react';

export const HowToGetThereNew = () => {
  return (
    <section className="py-20 px-6 bg-gray-lightest" id="como-llegar">
      {/* Background image - Bloque-como-llegar.jpg */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/assets/Bloque-como-llegar.jpg"
          alt=""
          className="w-full h-full object-cover grayscale opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-lightest via-gray-lightest/90 to-gray-lightest"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl text-gray-darkest mb-6 font-light">
            Cómo llegar
          </h2>
          <p className="text-gray-dark text-lg">
            Para ir cómodos, estas son las opciones más sencillas:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Taxi/Uber */}
          <div className="p-8 hover:bg-white/50 rounded-lg transition-all duration-300">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-full bg-gray-lightest flex items-center justify-center">
                <Car className="w-7 h-7 text-gray-darkest" />
              </div>
              <h3 className="text-2xl font-normal text-gray-darkest">Taxi / Uber</h3>
            </div>
            <p className="text-gray-dark leading-relaxed">
              La forma más cómoda y directa. Puedes poner "La Chumbera, Sacromonte" o la dirección completa.
            </p>
          </div>

          {/* Bus */}
          <div className="p-8 hover:bg-white/50 rounded-lg transition-all duration-300">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-full bg-gray-lightest flex items-center justify-center">
                <Bus className="w-7 h-7 text-gray-darkest" />
              </div>
              <h3 className="text-2xl font-normal text-gray-darkest">Autobús urbano</h3>
            </div>
            <div className="space-y-3 text-gray-dark leading-relaxed">
              <div>
                <p className="font-medium text-gray-darkest">Línea C34 (Albaicín – Sacromonte)</p>
                <p className="text-sm">Sale desde Plaza Nueva y te deja a pocos metros de la Chumbera.</p>
              </div>
              <div>
                <p className="font-medium text-gray-darkest">Línea C32 (Albaicín – Alhambra)</p>
                <p className="text-sm">Menos directo, debes andar un poco.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
