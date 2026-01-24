import React, { useState, useEffect } from 'react';
import { Calendar } from 'lucide-react';

export const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const target = new Date(targetDate).getTime();
      const now = new Date().getTime();
      const difference = target - now;
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="countdown-timer mt-8 mb-6">
      <div className="flex items-center justify-center gap-2 mb-4">
        <Calendar className="w-5 h-5 text-amber-200" />
        <p className="text-amber-100 text-sm font-light uppercase tracking-wider">
          Faltan
        </p>
      </div>
      
      <div className="flex justify-center gap-3 md:gap-6">
        <div className="countdown-item flex flex-col items-center bg-white/10 backdrop-blur-sm rounded-2xl p-3 md:p-4 min-w-[70px] md:min-w-[90px]">
          <span className="text-3xl md:text-5xl font-serif font-bold text-white">
            {String(timeLeft.days).padStart(2, '0')}
          </span>
          <span className="text-xs md:text-sm text-amber-100 mt-1 uppercase tracking-wide">
            Días
          </span>
        </div>
        
        <div className="countdown-item flex flex-col items-center bg-white/10 backdrop-blur-sm rounded-2xl p-3 md:p-4 min-w-[70px] md:min-w-[90px]">
          <span className="text-3xl md:text-5xl font-serif font-bold text-white">
            {String(timeLeft.hours).padStart(2, '0')}
          </span>
          <span className="text-xs md:text-sm text-amber-100 mt-1 uppercase tracking-wide">
            Horas
          </span>
        </div>
        
        <div className="countdown-item flex flex-col items-center bg-white/10 backdrop-blur-sm rounded-2xl p-3 md:p-4 min-w-[70px] md:min-w-[90px]">
          <span className="text-3xl md:text-5xl font-serif font-bold text-white">
            {String(timeLeft.minutes).padStart(2, '0')}
          </span>
          <span className="text-xs md:text-sm text-amber-100 mt-1 uppercase tracking-wide">
            Min
          </span>
        </div>
        
        <div className="countdown-item flex flex-col items-center bg-white/10 backdrop-blur-sm rounded-2xl p-3 md:p-4 min-w-[70px] md:min-w-[90px]">
          <span className="text-3xl md:text-5xl font-serif font-bold text-white">
            {String(timeLeft.seconds).padStart(2, '0')}
          </span>
          <span className="text-xs md:text-sm text-amber-100 mt-1 uppercase tracking-wide">
            Seg
          </span>
        </div>
      </div>
    </div>
  );
};
