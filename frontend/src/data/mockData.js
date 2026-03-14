// Mock data para el formulario RSVP
export const mockRSVPData = {
  attending: '',
  numberOfGuests: 1,
  guests: [],
  phone: '',
  email: '',
  comments: '',
  privacyAccepted: false
};

// Opciones de categoría de edad
export const ageCategories = [
  { value: 'adulto', label: 'Adulto' },
  { value: 'adolescente', label: 'Adolescente' },
  { value: 'nino', label: 'Niño/a' }
];

// Datos de la boda
export const weddingData = {
  couple: {
    name1: 'Marta',
    name2: 'Carlos'
  },
  event: {
    date: '27 de junio',
    time: '19:30',
    year: '2025'
  },
  venue: {
    name: 'La Chumbera',
    shortLocation: 'Sacromonte (Granada)',
    fullAddress: 'Cam. del Sacromonte, 107, Albaicín, 18010 Granada',
    mapsUrl: 'https://maps.app.goo.gl/fVVcUixPy494YxpK9?g_st=com.google.maps.preview.copy'
  },
  contact: {
    whatsapp: '634585750',
    whatsapp2: '637213571'
  },
  images: {
    hero: 'https://images.unsplash.com/photo-1707009504668-dc68cf06765c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1ODR8MHwxfHNlYXJjaHwxfHxBbGhhbWJyYSUyMEdyYW5hZGElMjBzdW5zZXR8ZW58MHx8fHwxNzY5MjUzMzAwfDA&ixlib=rb-4.1.0&q=85',
    heroAlt: 'https://images.unsplash.com/photo-1609190327474-638f31d7a26e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1ODR8MHwxfHNlYXJjaHwyfHxBbGhhbWJyYSUyMEdyYW5hZGElMjBzdW5zZXR8ZW58MHx8fHwxNzY5MjUzMzAwfDA&ixlib=rb-4.1.0&q=85',
    location: 'https://images.unsplash.com/photo-1620677368158-32b1293fac36?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1ODR8MHwxfHNlYXJjaHw0fHxBbGhhbWJyYSUyMEdyYW5hZGElMjBzdW5zZXR8ZW58MHx8fHwxNzY5MjUzMzAwfDA&ixlib=rb-4.1.0&q=85',
    locationAlt: 'https://images.unsplash.com/photo-1764268176890-b3b00f54a00c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHw0fHxHcmFuYWRhJTIwU3BhaW4lMjBldmVuaW5nfGVufDB8fHx8MTc2OTI1MzMxMHww&ixlib=rb-4.1.0&q=85',
    emotional: 'https://images.unsplash.com/photo-1572127864981-009ceeb96fee?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwyfHxHcmFuYWRhJTIwU3BhaW4lMjBldmVuaW5nfGVufDB8fHx8MTc2OTI1MzMxMHww&ixlib=rb-4.1.0&q=85',
    decorPomegranate: 'https://customer-assets.emergentagent.com/job_granada-boho/artifacts/ikywckst_IMG_7863.png',
    decorCactus: 'https://customer-assets.emergentagent.com/job_granada-boho/artifacts/t18713nb_IMG_7855.png'
  }
};

// Mock función para simular envío de formulario
export const submitRSVP = async (formData) => {
  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
  const API = `${BACKEND_URL}/api`;
  
  try {
    const payload = {
      attending: formData.attending,
      number_of_guests: formData.numberOfGuests,
      guests: formData.guests,
      phone: formData.phone,
      email: formData.email || null,
      comments: formData.comments || null
    };
    
    // Add song_request only if it exists
    if (formData.songRequest) {
      payload.song_request = formData.songRequest;
    }
    
    console.log('Sending RSVP:', payload);
    
    const response = await fetch(`${API}/rsvp`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload)
    });
    
    if (!response.ok) {
      const error = await response.json();
      console.error('Backend error:', error);
      throw new Error(error.detail || 'Error al enviar confirmación');
    }
    
    const data = await response.json();
    console.log('RSVP response:', data);
    return { success: true, data, message: 'Confirmación enviada correctamente' };
  } catch (error) {
    console.error('Error submitting RSVP:', error);
    throw error;
  }
};
