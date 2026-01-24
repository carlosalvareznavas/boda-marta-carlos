import React from 'react';

export const Footer = () => {
  return (
    <footer className="py-12 px-6 bg-olive text-white">
      <div className="max-w-4xl mx-auto">
        {/* Privacy Notice */}
        <div className="text-center mb-8">
          <p className="text-amber-100 font-light mb-4 text-lg">
            Enlace privado. Por favor, no reenviar.
          </p>
          <div className="w-24 h-px bg-amber-200/30 mx-auto mb-6"></div>
          <p className="text-sm text-white/80 leading-relaxed max-w-2xl mx-auto">
            Los datos facilitados se utilizarán únicamente para la gestión de asistencia y organización del evento. No se cederán a terceros.
          </p>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-white/10">
          <p className="font-serif text-amber-100">
            Marta & Carlos · 27 de junio 2025
          </p>
        </div>
      </div>
    </footer>
  );
};
