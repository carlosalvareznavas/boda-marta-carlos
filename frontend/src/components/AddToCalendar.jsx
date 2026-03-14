import React from 'react';
import { Calendar as CalendarIcon, Download } from 'lucide-react';

export const AddToCalendar = () => {
  const generateICS = () => {
    const eventDate = '20260627';
    const eventTime = '190000';
    const endTime = '040000';
    const eventDateEnd = '20260628';
    
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
    const startDate = '20260627T190000';
    const endDate = '20260628T040000';
    const title = encodeURIComponent('Boda Marta & Carlos');
    const details = encodeURIComponent('Ceremonia, celebración y banquete en La Chumbera, Sacromonte, Granada');
    const location = encodeURIComponent('La Chumbera, Cam. del Sacromonte, 107, Albaicín, 18010 Granada');
    
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startDate}/${endDate}&details=${details}&location=${location}&sf=true&output=xml`;
    
    window.open(googleCalendarUrl, '_blank');
  };

  return (
    <div className="add-to-calendar">
      <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
        <button 
          onClick={addToGoogleCalendar}
          className="text-gray-darkest hover:text-black underline underline-offset-4 transition-colors duration-300 flex items-center gap-2 text-sm"
        >
          <CalendarIcon className="w-4 h-4" />
          Google Calendar
        </button>
        
        <span className="text-gray-light hidden sm:inline">|</span>
        
        <button 
          onClick={generateICS}
          className="text-gray-darkest hover:text-black underline underline-offset-4 transition-colors duration-300 flex items-center gap-2 text-sm"
        >
          <Download className="w-4 h-4" />
          Descargar evento
        </button>
      </div>
    </div>
  );
};
