import React, { useState, useEffect, useRef } from 'react';

export const OurStory = () => {
  const [visibleItems, setVisibleItems] = useState([]);
  const timelineRef = useRef(null);

  const timelineEvents = [
    { year: '2012', location: 'Tánger', description: 'Nos cruzamos sin saber que aquello iba a tener segunda temporada.' },
    { year: 'Diciembre 2020', location: 'Cumpleaños de Marta', description: 'Nos reconocimos... y ya no hubo marcha atrás.' },
    { year: '2021', location: 'Nos vamos a vivir juntos', description: 'El primer gran "proyecto" compartido (con convivencia incluida).' },
    { year: '2022', location: 'Nos hipotecamos juntos', description: 'Porque lo nuestro iba en serio... y con firma.' },
    { year: '2025', location: 'Vietnam', description: 'La gran pregunta, el gran sí y una historia que se nos quedó para siempre.' },
    { year: '2026', location: 'La Chumbera', description: 'Nos casamos y lo celebramos como somos -a nuestra manera.' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleItems(prev => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.2 }
    );

    const items = timelineRef.current?.querySelectorAll('.timeline-item');
    items?.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 px-6 bg-gray-lightest" id="nuestra-historia">
      <div className="max-w-5xl mx-auto">
        {/* Decorative emblem */}
        <div className="flex justify-center mb-8">
          <img 
            src="/assets/emblema-crest-decorativo-gris.png"
            alt=""
            className="h-12 w-auto opacity-70"
          />
        </div>

        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl text-gray-darkest mb-6 font-light">
            Nuestra Historia
          </h2>
        </div>

        {/* Story text - divided into columns on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 text-gray-dark leading-relaxed">
          <div className="space-y-4">
            <p>
              La vida, a nuestra manera, empezó mucho antes de que lo supiéramos. En 2012, nos cruzamos de forma casual en Tánger. Fue uno de esos encuentros que pasan sin hacer ruido… pero que el tiempo se encarga de poner en su sitio.
            </p>
            <p>
              Años después, en diciembre de 2020, nos volvimos a ver en el cumpleaños de Marta y entonces sí: nos reconocimos de verdad. Y ahí empezó lo bueno. <span className="italic">(Margarita, la hermana de Carlos, siempre dirá que ella ya lo veía venir.)</span>
            </p>
            <p>
              Nos unieron el mundo del marketing y la empresa, los planes que se convierten en proyectos y, entre "plan de acción" y "plan de acción", también una afición muy seria: invertir en comer bien. Entre canción y canción, viajes, sobremesas y pequeñas aventuras, fuimos construyendo una historia con ritmo propio.
            </p>
          </div>
          
          <div className="space-y-4">
            <p>
              Granada nos atraviesa. Nuestra primera foto fue en la Alhambra, y por eso vuelve a estar presente en el día de nuestra boda. A Marta le enamoran las velas y la música. A Carlos, los libros de historia (especialmente los romanos). Y a los dos, recorrer el mundo juntos -en pareja y en familia- con esa mezcla perfecta de curiosidad, ganas y celebración.
            </p>
            <p>
              Hemos vivido Grecia, Austria, Eslovaquia, Italia, Inglaterra, Rumanía, Hungría y Vietnam, y dentro de España, mil destinos que nos han ido haciendo más "nosotros": Cádiz, Bilbao, Las Palmas, Madrid… y tantos otros. Hemos hecho paracaidismo, buceo, submarinismo y hasta paseo en globo. Y lo mejor es que seguimos sumando.
            </p>
            <p>
              Marta llegó a nuestras vidas cuando Paula y Sofía apenas tenían cuatro años, y desde entonces hemos creado una familia preciosa, cariñosa y muy nuestra, de esas que se construyen a base de paciencia, humor, abrazos y mucha verdad. Celebrar esta boda también es celebrar todo eso.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative" ref={timelineRef}>
          {/* Vertical line - now visible on mobile too */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-px bg-gray-light"></div>

          {/* Timeline events */}
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div
                key={index}
                data-index={index}
                className={`timeline-item relative transition-all duration-700 ${
                  visibleItems.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <div className={`flex flex-col md:flex-row items-start md:items-center gap-6 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}>
                  {/* Content */}
                  <div className={`flex-1 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} text-left`}>
                    <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-light">
                      <h3 className="text-xl md:text-2xl font-normal text-gray-darkest mb-2">
                        {event.year}
                      </h3>
                      <p className="text-base font-medium text-gray-darker mb-2">
                        {event.location}
                      </p>
                      <p className="text-sm text-gray-dark leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </div>

                  {/* Center dot - visible on mobile (left side) and desktop (center) */}
                  <div className="absolute left-6 md:left-auto md:relative w-4 h-4 rounded-full bg-gray-darkest border-4 border-gray-lightest flex-shrink-0 z-10"></div>

                  {/* Spacer for alternating layout */}
                  <div className="flex-1 hidden md:block"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
