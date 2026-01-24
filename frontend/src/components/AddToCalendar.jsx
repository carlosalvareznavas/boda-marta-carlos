import React from 'react';
import { Calendar as CalendarIcon, Download } from 'lucide-react';
import { Button } from './ui/button';
import { weddingData } from '../data/mockData';

export const AddToCalendar = () => {
  const generateICS = () => {
    // Wedding date: 27 de junio 2025, 19:30
    const eventDate = '20250627';
    const eventTime = '193000';
    const endTime = '040000'; // Asumiendo que termina a las 4:00 AM del día siguiente
    const eventDateEnd = '20250628';
    
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Boda Marta & Carlos//ES
CALSCALE:GREGORIAN
METHOD:PUBLISH
BEGIN:VEVENT
DTSTART:${eventDate}T${eventTime}
DTEND:${eventDateEnd}T${endTime}
DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').split('.')[0]}Z
UID:boda-marta-carlos-${Date.now()}@wedding.com
SUMMARY:Boda Marta & Carlos
DESCRIPTION:Ceremonia, celebración y banquete en La Chumbera, Sacromonte, Granada. ¡Nos casamos!
LOCATION:La Chumbera, Cam. del Sacromonte\\, 107\\, Albaicín\\, 18010 Granada
STATUS:CONFIRMED
SEQUENCE:0
BEGIN:VALARM
TRIGGER:-P1D
ACTION:DISPLAY
DESCRIPTION:Recordatorio: Boda Marta & Carlos mañana
END:VALARM
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', 'boda-marta-carlos.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const addToGoogleCalendar = () => {
    const startDate = '20250627T193000';
    const endDate = '20250628T040000';
    const title = encodeURIComponent('Boda Marta & Carlos');
    const details = encodeURIComponent('Ceremonia, celebración y banquete en La Chumbera, Sacromonte, Granada');
    const location = encodeURIComponent('La Chumbera, Cam. del Sacromonte, 107, Albaicín, 18010 Granada');
    
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startDate}/${endDate}&details=${details}&location=${location}&sf=true&output=xml`;
    
    window.open(googleCalendarUrl, '_blank');
  };

  return (
    <div className="add-to-calendar mt-8">
      <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
        <Button 
          onClick={addToGoogleCalendar}
          variant="outline"
          className="bg-white/90 hover:bg-white text-olive border-2 border-white px-6 py-5 text-base rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
        >
          <CalendarIcon className="w-5 h-5" />
          Google Calendar
        </Button>
        
        <Button 
          onClick={generateICS}
          variant="outline"
          className="bg-white/90 hover:bg-white text-olive border-2 border-white px-6 py-5 text-base rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
        >
          <Download className="w-5 h-5" />
          Descargar evento
        </Button>
      </div>
      <p className="text-center text-amber-100 text-xs mt-3 font-light">
        Compatible con Apple Calendar, Outlook y otros
      </p>
    </div>
  );
};
