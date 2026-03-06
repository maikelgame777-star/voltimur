# Voltimur - Web Oficial

Sitio web oficial de **Voltimur**, empresa de instalaciones eléctricas y de telecomunicaciones en Murcia.

## Tecnologías

- React 19 + TypeScript
- Vite
- Tailwind CSS v4
- Motion (animaciones)
- Lucide React (iconos)
- ElevenLabs AI Agent (asistente de voz)

## Instalación local

**Requisitos:** Node.js 18+

1. Instala las dependencias:
   ```bash
   npm install
   ```

2. Copia el archivo de variables de entorno:
   ```bash
   cp .env.example .env.local
   ```

3. Configura tu `GEMINI_API_KEY` en `.env.local`

4. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

La aplicación estará disponible en `http://localhost:3000`

## Scripts disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia el servidor de desarrollo |
| `npm run build` | Genera la build de producción |
| `npm run preview` | Previsualiza la build de producción |
| `npm run lint` | Comprueba errores de TypeScript |

## Secciones

- **Hero** - Presentación principal con animaciones
- **Servicios** - Servicios eléctricos y de telecomunicaciones
- **Sobre nosotros** - Información de la empresa
- **Testimonios** - Opiniones de clientes
- **Contacto** - Formulario de contacto
