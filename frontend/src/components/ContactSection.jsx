import React from 'react';
import { MessageCircle } from 'lucide-react';
import { Button } from './ui/button';
import { weddingData } from '../data/mockData';

export const ContactSection = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Hola, tengo una consulta sobre la boda de Marta y Carlos');
    window.open(`https://wa.me/${weddingData.contact.whatsapp}?text=${message}`, '_blank');
  };

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <div className="mb-8">
          <h2 className="font-serif text-4xl md:text-5xl text-olive mb-6">
            Cambios o dudas
          </h2>
          <p className="text-olive-dark text-lg leading-relaxed max-w-2xl mx-auto">
            Si te equivocas al confirmar, si cambia el número de asistentes o surge cualquier cosa, no pasa nada: escríbenos y lo dejamos actualizado.
          </p>
        </div>

        <Button 
          onClick={handleWhatsAppClick}
          className="bg-[#25D366] hover:bg-[#20BA5A] text-white px-10 py-7 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-3 mx-auto"
        >
          <MessageCircle className="w-6 h-6" />
          Contactar por WhatsApp
        </Button>

        <p className="mt-6 text-sm text-olive-dark">
          También puedes contactar al {weddingData.contact.whatsapp2}
        </p>
      </div>
    </section>
  );
};
