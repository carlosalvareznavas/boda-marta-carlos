import React from 'react';
import { Check } from 'lucide-react';

export const CelebrationSection = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <div className="mb-8">
          <h2 className="font-serif text-4xl md:text-5xl text-olive mb-6">
            Todo en el mismo sitio
          </h2>
        </div>

        <p className="text-olive-dark text-lg md:text-xl leading-relaxed font-light mb-10">
          Ceremonia, celebración y banquete serán en La Chumbera. Sin traslados, sin líos: venir, brindar y disfrutar.
        </p>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto mt-12">
          <div className="flex flex-col items-center p-6 rounded-2xl bg-cream/50 hover:bg-cream transition-colors duration-300">
            <div className="w-12 h-12 rounded-full bg-terracota/20 flex items-center justify-center mb-4">
              <Check className="w-6 h-6 text-terracota" />
            </div>
            <p className="text-olive font-medium">Ceremonia</p>
          </div>
          <div className="flex flex-col items-center p-6 rounded-2xl bg-cream/50 hover:bg-cream transition-colors duration-300">
            <div className="w-12 h-12 rounded-full bg-terracota/20 flex items-center justify-center mb-4">
              <Check className="w-6 h-6 text-terracota" />
            </div>
            <p className="text-olive font-medium">Celebración</p>
          </div>
          <div className="flex flex-col items-center p-6 rounded-2xl bg-cream/50 hover:bg-cream transition-colors duration-300">
            <div className="w-12 h-12 rounded-full bg-terracota/20 flex items-center justify-center mb-4">
              <Check className="w-6 h-6 text-terracota" />
            </div>
            <p className="text-olive font-medium">Banquete</p>
          </div>
        </div>
      </div>
    </section>
  );
};
