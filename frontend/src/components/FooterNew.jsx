import React from 'react';

export const FooterNew = () => {
  return (
    <footer className="py-16 px-6 bg-gray-darkest text-white">
      <div className="max-w-4xl mx-auto">
        {/* Handwritten signatures */}
        <div className="flex justify-center mb-8">
          <img 
            src="/assets/firmas-manuscritas-footer.png"
            alt="Marta & Carlos"
            className="h-16 md:h-20 w-auto opacity-90"
          />
        </div>

        {/* Decorative emblem */}
        <div className="flex justify-center mb-8">
          <img 
            src="/assets/emblema-crest-decorativo-blanco-footer.png"
            alt=""
            className="h-12 w-auto opacity-80"
          />
        </div>

        {/* Privacy Notice */}
        <div className="text-center mb-8">
          <p className="text-gray-light font-light mb-4 text-lg">
            Enlace privado. Por favor, no reenviar.
          </p>
          <div className="w-24 h-px bg-gray-light/30 mx-auto mb-6"></div>
          <p className="text-sm text-gray-light leading-relaxed max-w-2xl mx-auto">
            Los datos facilitados se utilizarán únicamente para la gestión de asistencia y organización del evento. No se cederán a terceros.
          </p>
        </div>
      </div>
    </footer>
  );
};
