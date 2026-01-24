# Landing Page Invitación Boda - Marta & Carlos
## Product Requirements Document

---

## 📋 Información General

**Fecha de inicio:** 24 Enero 2025  
**Tipo de proyecto:** Landing page one-page (invitación digital de boda)  
**Stack:** React + FastAPI + MongoDB + Google Sheets (RSVP)

---

## 🎯 Problema Original

Crear una landing page one-page móvil-first que funcione como invitación digital de boda con:
- Estética boho con colores terracota y verde oliva
- Formulario RSVP funcional (confirmación + asistentes + alergias)
- Información clara del evento (La Chumbera, Sacromonte, Granada)
- Diseño cálido y cariñoso que transmita la esencia del lugar

---

## 👥 Usuarios & Personas

**Usuario principal:** Invitados a la boda de Marta & Carlos
- Edad: 25-65 años
- Acceso: Principalmente móvil
- Necesidad: Confirmar asistencia fácilmente y obtener información del evento

---

## ✅ Implementado (24 Enero 2025)

### Frontend (Actualizado - Backend Integrado)
- ✅ Hero section con imagen de la Alhambra
- ✅ **NUEVO: Contador en tiempo real hasta la fecha de la boda**
- ✅ **NUEVO: Botones "Añadir a calendario" (Google Calendar + descarga .ics)**
- ✅ Elementos decorativos (granada y cactus acuarela)
- ✅ Sección emocional "Un día para celebrar en serio"
- ✅ Sección "Todo en el mismo sitio"
- ✅ Sección ubicación con imágenes y mapa
- ✅ Formulario RSVP completo con lógica dinámica de asistentes (1-6)
  - ✅ **NUEVO: Campo categoría (Adulto/Adolescente/Niño) obligatorio por asistente**
- ✅ Sección "Cómo llegar"
- ✅ Sección contacto con WhatsApp
- ✅ Footer con aviso de privacidad
- ✅ Diseño responsive mobile-first
- ✅ Smooth scroll entre anclas
- ✅ Paleta de colores boho (terracota #C9704D, verde oliva #5A6B45, crema #F5F0E8)
- ✅ Tipografía serif elegante (Cormorant Garamond)
- ✅ Animaciones sutiles en hover y scroll
- ✅ Toast notifications con Sonner
- ✅ **NUEVO: Integrado con backend real (no mock)**

### Backend (Completado)
- ✅ API REST con FastAPI
- ✅ Modelo MongoDB para RSVP con campos:
  - attending, number_of_guests, guests[], phone, email, comments, submitted_at
  - Guest model: name, age_category, allergies
- ✅ Endpoint POST `/api/rsvp` - Crear confirmación
- ✅ Endpoint GET `/api/rsvp/stats` - Estadísticas (total, asistentes, categorías)
- ✅ Endpoint GET `/api/rsvp/list` - Listar todas las confirmaciones
- ✅ Endpoint GET `/api/health` - Health check
- ✅ Validación de datos con Pydantic
- ✅ Logging configurado
- ✅ **Integración Google Sheets preparada (pendiente credenciales)**

### Integración Google Sheets (Preparada)
- ✅ Código implementado para escritura automática
- ✅ Service configurado con columnas:
  - Fecha y Hora, Asiste, Nº Asistentes, Nombres, Categorías, Alergias, Teléfono, Email, Comentarios, ID
- ⏳ **PENDIENTE: Configurar credenciales (ver GOOGLE_SHEETS_SETUP.md)**

### Componentes Creados
**Frontend:**
- `/app/frontend/src/components/Hero.jsx` (actualizado con countdown y calendario)
- `/app/frontend/src/components/CountdownTimer.jsx` (nuevo)
- `/app/frontend/src/components/AddToCalendar.jsx` (nuevo)
- `/app/frontend/src/components/EmotionalSection.jsx`
- `/app/frontend/src/components/CelebrationSection.jsx`
- `/app/frontend/src/components/LocationSection.jsx`
- `/app/frontend/src/components/RSVPSection.jsx` (actualizado con campo edad)
- `/app/frontend/src/components/HowToGetSection.jsx`
- `/app/frontend/src/components/ContactSection.jsx`
- `/app/frontend/src/components/Footer.jsx`
- `/app/frontend/src/data/mockData.js` (actualizado con backend real)

**Backend:**
- `/app/backend/server.py`
- `/app/backend/database.py`
- `/app/backend/models/rsvp.py`
- `/app/backend/routes/rsvp.py`
- `/app/backend/services/google_sheets.py`

### Datos de Contacto Configurados
- WhatsApp: 634585750 / 637213571
- Emails notificación: carlosalvareznavas@gmail.com, martarrz.mr@gmail.com
- Google Sheet ID: 1-E7eEKuFLivTEPPo8gHOM1e5385py0YQQGM39suqS_M

---

## 📊 Funcionalidad RSVP (Completado - Backend Real)

### Campos del Formulario
1. **¿Vas a venir?** (obligatorio)
   - Sí, allí estaré
   - Esta vez no podré

2. **Si asiste:**
   - Número de asistentes (1-6)
   - Por cada asistente:
     - Nombre y apellidos (obligatorio)
     - **Categoría (obligatorio): Adulto / Adolescente / Niño**
     - Alergias/intolerancias (opcional)

3. **Información de contacto:**
   - Teléfono (obligatorio)
   - Email (opcional)
   - Comentarios (opcional)

4. **Privacidad:**
   - Checkbox aceptación tratamiento datos (obligatorio)

### Lógica Implementada
- Campos dinámicos según número de asistentes
- Validación de campos obligatorios (incluyendo categoría de edad)
- Mensajes diferenciados según respuesta (Sí/No)
- Opción de modificar respuesta
- **Envío real a backend FastAPI**
- **Guardado en MongoDB**
- **Preparado para Google Sheets (pendiente credenciales)**

---

## 🎨 Diseño & Estilo

### Paleta de Colores
- **Terracota:** `hsl(16 72% 55%)` - Botones principales, acentos
- **Terracota dark:** `hsl(16 72% 45%)` - Hover states
- **Olive:** `hsl(85 30% 28%)` - Textos principales, headers
- **Olive dark:** `hsl(85 35% 20%)` - Textos secundarios
- **Olive light:** `hsl(85 25% 92%)` - Fondos sección
- **Cream:** `hsl(35 30% 94%)` - Fondos alternos
- **Gold:** `hsl(43 85% 58%)` - Detalles sutiles

### Tipografía
- **Serif (Headings):** Cormorant Garamond (300, 400, 500, 600, 700)
- **Sans (Body):** Inter (300, 400, 500, 600)

### Componentes de Diseño
- Botones con border-radius: 9999px (rounded-full)
- Cards con border-radius: 1.5rem (rounded-3xl)
- Sombras suaves para profundidad
- Transiciones de 300ms en elementos interactivos
- Hover effects con scale y shadow

---

## 📱 Imágenes

### Imágenes de Unsplash (Placeholders)
- Hero: Vista Alhambra golden hour
- Ubicación: 2 imágenes de Granada/Alhambra
- Emocional: Vista Granada atardecer

### Imágenes Proporcionadas por Cliente
- Granada acuarela (decorativa)
- Cactus acuarela (decorativa)

---

## 🔄 Próximos Pasos (Backlog Priorizado)

### P0 - Google Sheets Integration (En progreso)
1. **Configurar credenciales de Google Cloud** ⏳
   - Crear Service Account en Google Cloud Console
   - Descargar archivo JSON de credenciales
   - Compartir Google Sheet con el email de la service account
   - Ver instrucciones detalladas en: `/app/GOOGLE_SHEETS_SETUP.md`
   
2. **Una vez configurado, las confirmaciones se guardarán automáticamente en:**
   - MongoDB (funcionando ✅)
   - Google Sheets (listo, solo falta credenciales ⏳)

### P1 - Mejoras & Features
- Panel admin para ver confirmaciones con gráficas
- Exportar lista de asistentes a CSV desde MongoDB
- Optimizar imágenes (lazy loading)
- SEO meta tags y Open Graph
- Analytics (Google Analytics opcional)

### P2 - Opciones Adicionales
- Sistema de autenticación para panel admin
- Envío de recordatorio por WhatsApp días antes
- Galería de fotos del lugar
- Música de fondo opcional
- Modo oscuro

---

## 🔐 Privacidad & Seguridad

- Enlace privado (no indexable)
- Datos solo para gestión de asistencia
- No se ceden a terceros
- Almacenamiento seguro en MongoDB + Google Sheets
- HTTPS en producción

---

## 📞 Información de Contacto del Evento

**Lugar:** La Chumbera  
**Dirección:** Cam. del Sacromonte, 107, Albaicín, 18010 Granada  
**Fecha:** 27 de junio 2025  
**Hora:** 19:30  
**Google Maps:** https://maps.app.goo.gl/fVVcUixPy494YxpK9

**Cómo llegar:**
- Taxi/Uber
- Autobús urbano: Línea C34 (Sacromonte – Centro)

---

## 🎯 Objetivos de Conversión

- **Tasa de respuesta:** >80% de invitados confirman
- **Claridad:** 0 consultas sobre ubicación o horario
- **UX:** Tiempo de confirmación <2 minutos
- **Mobile:** >70% de confirmaciones desde móvil

---

**Última actualización:** 24 Enero 2025
