import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: 'Confirmación de Asistencia', id: 'rsvp' },
    { label: 'Cómo llegar', id: 'como-llegar' },
    { label: 'Nuestra Historia', id: 'nuestra-historia' },
    { label: 'Cambios o dudas', id: 'contacto' }
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-8 left-8 z-50 w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-light"
        aria-label="Menu"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-gray-darkest" />
        ) : (
          <Menu className="w-6 h-6 text-gray-darkest" />
        )}
      </button>

      {/* Full Screen Menu Overlay */}
      <div
        className={`fixed inset-0 bg-white z-40 transition-all duration-500 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full px-6">
          {/* Logo/Signatures */}
          <div className="mb-12">
            <img 
              src="/assets/firmas-manuscritas.png"
              alt="Marta & Carlos"
              className="h-16 md:h-20 w-auto opacity-90"
            />
          </div>

          {/* Menu Items */}
          <nav className="space-y-6 text-center">
            {menuItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block text-2xl md:text-4xl font-light text-gray-darkest hover:text-black transition-all duration-300 transform hover:scale-105 ${
                  isOpen ? 'animate-fade-in' : ''
                }`}
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Decorative emblem */}
          <div className="mt-12">
            <img 
              src="/assets/emblema-crest-decorativo-gris.png"
              alt=""
              className="h-12 w-auto opacity-60"
            />
          </div>
        </div>
      </div>
    </>
  );
};
