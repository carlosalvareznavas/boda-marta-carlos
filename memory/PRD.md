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

### Frontend (Mock Data)
- ✅ Hero section con imagen de la Alhambra
- ✅ Elementos decorativos (granada y cactus acuarela)
- ✅ Sección emocional "Un día para celebrar en serio"
- ✅ Sección "Todo en el mismo sitio"
- ✅ Sección ubicación con imágenes y mapa
- ✅ Formulario RSVP completo con lógica dinámica de asistentes (1-6)
- ✅ Sección "Cómo llegar"
- ✅ Sección contacto con WhatsApp
- ✅ Footer con aviso de privacidad
- ✅ Diseño responsive mobile-first
- ✅ Smooth scroll entre anclas
- ✅ Paleta de colores boho (terracota #C9704D, verde oliva #5A6B45, crema #F5F0E8)
- ✅ Tipografía serif elegante (Cormorant Garamond)
- ✅ Animaciones sutiles en hover y scroll
- ✅ Toast notifications con Sonner

### Componentes Creados
- `/app/frontend/src/components/Hero.jsx`
- `/app/frontend/src/components/EmotionalSection.jsx`
- `/app/frontend/src/components/CelebrationSection.jsx`
- `/app/frontend/src/components/LocationSection.jsx`
- `/app/frontend/src/components/RSVPSection.jsx`
- `/app/frontend/src/components/HowToGetSection.jsx`
- `/app/frontend/src/components/ContactSection.jsx`
- `/app/frontend/src/components/Footer.jsx`
- `/app/frontend/src/data/mockData.js`

### Datos de Contacto Configurados
- WhatsApp: 634585750 / 637213571
- Emails notificación: carlosalvareznavas@gmail.com, martarrz.mr@gmail.com

---

## 📊 Funcionalidad RSVP (Mock)

### Campos del Formulario
1. **¿Vas a venir?** (obligatorio)
   - Sí, allí estaré
   - Esta vez no podré

2. **Si asiste:**
   - Número de asistentes (1-6)
   - Por cada asistente:
     - Nombre y apellidos (obligatorio)
     - Alergias/intolerancias (opcional)

3. **Información de contacto:**
   - Teléfono (obligatorio)
   - Email (opcional)
   - Comentarios (opcional)

4. **Privacidad:**
   - Checkbox aceptación tratamiento datos (obligatorio)

### Lógica Implementada
- Campos dinámicos según número de asistentes
- Validación de campos obligatorios
- Mensajes diferenciados según respuesta (Sí/No)
- Opción de modificar respuesta
- Mock de envío a backend (consola)

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

### P0 - Backend & Integración (Siguiente fase)
1. **Backend API (FastAPI)**
   - Modelo MongoDB para RSVP
   - Endpoint POST `/api/rsvp` para recibir confirmaciones
   - Validación de datos
   - Estructura de datos por invitado y lista de asistentes

2. **Integración Google Sheets**
   - Configurar Google Sheets API
   - Crear hoja de cálculo compartida
   - Endpoint para escribir confirmaciones en tiempo real
   - Columnas: Timestamp, Asiste, Nº Asistentes, Nombres, Alergias, Teléfono, Email, Comentarios

3. **Notificaciones Email**
   - Configurar servicio de email (SendGrid/SMTP)
   - Template de notificación
   - Envío automático a carlosalvareznavas@gmail.com y martarrz.mr@gmail.com
   - Incluir detalles de la confirmación

4. **Integración Frontend-Backend**
   - Conectar formulario con endpoint POST `/api/rsvp`
   - Eliminar mock data de submitRSVP
   - Manejo de errores y estados de carga
   - Confirmación exitosa con datos reales

### P1 - Mejoras & Features
- Panel admin para ver confirmaciones (opcional)
- Exportar lista de asistentes a CSV
- Contador de días hasta la boda
- Galería de fotos del lugar (si se obtienen más imágenes)
- Música de fondo opcional (desactivada por defecto)

### P2 - Optimizaciones
- Lazy loading de imágenes
- Optimización de performance (Lighthouse)
- Analytics (Google Analytics)
- SEO meta tags
- Open Graph para compartir

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
