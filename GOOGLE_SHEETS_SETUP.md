# Configuración de Google Sheets API para RSVP

## 📋 Pasos para configurar Google Sheets

Tu hoja de cálculo: https://docs.google.com/spreadsheets/d/1-E7eEKuFLivTEPPo8gHOM1e5385py0YQQGM39suqS_M/edit

### 1. Crear un Proyecto en Google Cloud Console

1. Ve a [Google Cloud Console](https://console.cloud.google.com/)
2. Haz clic en el selector de proyectos (arriba a la izquierda)
3. Click en "Nuevo Proyecto"
4. Nombre: "Wedding RSVP" (o el que prefieras)
5. Organización: Selecciona tu Google Workspace
6. Haz clic en "Crear"

### 2. Habilitar Google Sheets API

1. En el panel de navegación (menú hamburguesa ☰), ve a: **APIs y servicios > Biblioteca**
2. Busca "Google Sheets API"
3. Haz clic en "Google Sheets API"
4. Haz clic en "HABILITAR"

### 3. Crear una Service Account (Cuenta de Servicio)

1. Ve a: **APIs y servicios > Credenciales**
2. Haz clic en "Crear credenciales" → "Cuenta de servicio"
3. Configuración:
   - **Nombre de la cuenta de servicio:** wedding-rsvp-service
   - **ID de la cuenta de servicio:** (se genera automáticamente)
   - **Descripción:** Service account para guardar RSVPs de la boda
4. Haz clic en "Crear y continuar"
5. En "Otorgar acceso a este proyecto":
   - Rol: **Editor** (o puedes dejarlo sin rol)
   - Haz clic en "Continuar"
6. Haz clic en "Listo"

### 4. Crear y descargar la clave JSON

1. En la lista de cuentas de servicio, busca la que acabas de crear
2. Haz clic en el email de la cuenta de servicio
3. Ve a la pestaña "Claves"
4. Haz clic en "Agregar clave" → "Crear clave nueva"
5. Selecciona formato: **JSON**
6. Haz clic en "Crear"
7. Se descargará un archivo JSON automáticamente (guárdalo en un lugar seguro)

### 5. Compartir tu Google Sheet con la Service Account

1. Abre el archivo JSON que descargaste
2. Busca el campo `"client_email"` - se verá algo así:
   ```
   "client_email": "wedding-rsvp-service@tu-proyecto.iam.gserviceaccount.com"
   ```
3. Copia ese email completo
4. Ve a tu Google Sheet: https://docs.google.com/spreadsheets/d/1-E7eEKuFLivTEPPo8gHOM1e5385py0YQQGM39suqS_M/edit
5. Haz clic en el botón "Compartir" (arriba a la derecha)
6. Pega el email de la service account
7. Asegúrate de darle permisos de **Editor**
8. Desmarca "Notificar a las personas" (no hace falta notificar a un bot)
9. Haz clic en "Compartir" o "Enviar"

### 6. Configurar el backend

#### Opción A: Subir el archivo JSON completo (más fácil)

1. Sube el archivo JSON que descargaste
2. Yo lo guardaré como `/app/backend/google-credentials.json`
3. Proporciónalo usando el chat o cualquier método seguro

#### Opción B: Configurar variables de entorno (más seguro para producción)

Si prefieres no compartir el archivo completo, puedes proporcionarme:
- El contenido del archivo JSON completo
- O los campos individuales que necesito

### 7. Configurar variables de entorno

Una vez tengas el archivo JSON, necesito que agregues estas variables al archivo `.env` del backend:

```bash
# Google Sheets Configuration
GOOGLE_SHEETS_ID=1-E7eEKuFLivTEPPo8gHOM1e5385py0YQQGM39suqS_M
GOOGLE_CREDENTIALS_PATH=/app/backend/google-credentials.json
```

El `GOOGLE_SHEETS_ID` es el ID de tu hoja (ya lo tengo del enlace que me diste).

---

## ✅ Verificación

Una vez configurado, puedo verificar que todo funciona:

1. El backend intentará escribir encabezados en tu sheet al iniciar
2. Cada vez que alguien confirme asistencia, se guardará automáticamente en:
   - MongoDB (base de datos)
   - Google Sheets (para que lo veas en tiempo real)

## 📊 Estructura de la hoja

La hoja tendrá estas columnas automáticamente:

| Fecha y Hora | Asiste | Nº Asistentes | Nombres | Categorías | Alergias | Teléfono | Email | Comentarios | ID |
|--------------|--------|---------------|---------|------------|----------|----------|-------|-------------|-----|

---

## 🆘 ¿Necesitas ayuda?

Si te atascas en algún paso, dime en cuál y te guío más específicamente.

Una vez tengas el archivo JSON, compártelo conmigo y configuraré todo automáticamente.
