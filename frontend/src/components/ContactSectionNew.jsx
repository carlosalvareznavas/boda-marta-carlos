import React from 'react';
import { MessageCircle } from 'lucide-react';
import { Button } from './ui/button';

export const ContactSectionNew = () => {
  const handleWhatsAppMarta = () => {
    const message = encodeURIComponent('Hola Marta, tengo una consulta sobre vuestra boda');
    window.open(`https://wa.me/637213571?text=${message}`, '_blank');
  };

  const handleWhatsAppCarlos = () => {
    const message = encodeURIComponent('Hola Carlos, tengo una consulta sobre vuestra boda');
    window.open(`https://wa.me/634585750?text=${message}`, '_blank');
  };

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <div className="mb-8">
          <h2 className="text-4xl md:text-5xl text-gray-darkest mb-6 font-light">
            Cambio o dudas
          </h2>
          <p className="text-gray-dark text-lg leading-relaxed max-w-2xl mx-auto">
            Si te equivocas al confirmar, si cambia el número de asistentes o surge cualquier cosa, no pasa nada: escríbenos y lo dejamos actualizado.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            onClick={handleWhatsAppMarta}
            className="bg-[#25D366] hover:bg-[#20BA5A] text-white px-10 py-7 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-3 min-w-[200px]"
          >
            <MessageCircle className="w-6 h-6" />
            Whatsapp Marta
          </Button>

          <Button 
            onClick={handleWhatsAppCarlos}
            className="bg-[#25D366] hover:bg-[#20BA5A] text-white px-10 py-7 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-3 min-w-[200px]"
          >
            <MessageCircle className="w-6 h-6" />
            Whatsapp Carlos
          </Button>
        </div>
      </div>
    </section>
  );
};
