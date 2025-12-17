# Chef Oscar Silva - Professional Website

Una aplicación web moderna y profesional para Chef Oscar Silva, especializada en cenas privadas, eventos exclusivos y experiencias culinarias personalizadas.

## 🌟 Características Principales

### 1. **Diseño Responsive Completo**
- ✅ Mobile-first design
- ✅ Hamburger menu para dispositivos móviles
- ✅ Optimizado para tablets y desktop
- ✅ Navegación fluida y accesible

### 2. **Sistema de Reservas Avanzado**
- ✅ Modal interactivo con formulario completo
- ✅ Validación de datos en tiempo real
- ✅ Selector de fecha, hora y número de invitados
- ✅ Mensajes de confirmación animados

### 3. **Chatbot AI Integrado**
- ✅ Asistente virtual inteligente
- ✅ Respuestas automáticas a preguntas frecuentes
- ✅ Respuestas rápidas predefinidas
- ✅ Interfaz moderna y animada

### 4. **Galería Interactiva**
- ✅ Grid responsive de imágenes
- ✅ Lightbox con navegación
- ✅ Filtros por categoría
- ✅ Zoom y transiciones suaves

### 5. **Sistema de Testimonios**
- ✅ Carrusel de reseñas de clientes
- ✅ Calificaciones con estrellas
- ✅ Thumbnails navegables
- ✅ Animaciones fluidas

### 6. **Formulario de Contacto Profesional**
- ✅ Validación completa de campos
- ✅ Mensajes de error específicos
- ✅ Diseño split-screen
- ✅ Información de contacto integrada

### 7. **Integraciones de Comunicación**
- ✅ Botón flotante de WhatsApp con tooltip
- ✅ Enlaces a redes sociales
- ✅ Chatbot AI personalizado
- ✅ Integración lista para Tawk.to

### 8. **Animaciones y Transiciones**
- ✅ Fade in/out effects
- ✅ Slide animations
- ✅ Hover effects
- ✅ Loading states
- ✅ Smooth scrolling

### 9. **Optimización de UX/UI**
- ✅ Colores consistentes con la marca
- ✅ Tipografía profesional
- ✅ Espaciado y layout optimizados
- ✅ Accesibilidad mejorada

## 🎨 Paleta de Colores

- **Verde Principal**: `#1a4d3a` (Profesional, elegante)
- **Verde Secundario**: `#2d6a4f` (Acentos, hover)
- **Naranja Acento**: `#e95a2a` (Llamadas a la acción)
- **Fondo Oscuro**: `#23281a` (Secciones especiales)

## 📱 Secciones de la Aplicación

1. **Home** - Hero section con imagen de impacto y CTA principal
2. **About** - Historia y credenciales del chef con estadísticas
3. **Gallery** - Portafolio visual de platos y eventos
4. **Services** - Catálogo de servicios con sistema de reservas
5. **Testimonials** - Reseñas y calificaciones de clientes
6. **Contact** - Formulario de contacto con validación

## 🚀 Tecnologías Utilizadas

- **Next.js 15.3.5** - Framework React
- **React 19** - Biblioteca UI
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Estilos utility-first
- **React Icons** - Iconografía moderna

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Iniciar servidor de producción
npm start
```

## 🔧 Configuración

### Integrar Tawk.to (Chatbot Real)

1. Crear cuenta en [Tawk.to](https://www.tawk.to/)
2. Obtener el Property ID
3. En `src/app/page.tsx`, descomentar el script de Tawk.to y agregar tu Property ID:

```typescript
script.src = 'https://embed.tawk.to/TU_PROPERTY_ID/default';
```

### Configurar WhatsApp

En `src/components/WhatsAppFloat.tsx`, actualizar el número de teléfono:

```typescript
const phoneNumber = "15551234567"; // Cambiar por tu número real
```

### Personalizar Redes Sociales

Actualizar los enlaces en:
- `src/components/Header.tsx`
- `src/components/Footer.tsx`
- `src/components/ContactSection.tsx`

## 🌐 Estructura del Proyecto

```
frontend/
├── src/
│   ├── app/
│   │   ├── globals.css       # Estilos globales y animaciones
│   │   ├── layout.tsx         # Layout principal
│   │   └── page.tsx           # Página principal
│   └── components/
│       ├── Header.tsx         # Navegación responsive
│       ├── Footer.tsx         # Footer profesional
│       ├── HomeSection.tsx    # Hero section
│       ├── AboutSection.tsx   # Sobre el chef
│       ├── GallerySection.tsx # Galería de imágenes
│       ├── BookOnlineSection.tsx    # Servicios y reservas
│       ├── BookingModal.tsx   # Modal de reserva
│       ├── TestimonialsSection.tsx  # Reseñas de clientes
│       ├── ContactSection.tsx # Formulario de contacto
│       ├── WhatsAppFloat.tsx  # Botón flotante WhatsApp
│       └── ChatBot.tsx        # Chatbot AI personalizado
├── public/
│   └── [imágenes del sitio]
└── package.json
```

## 🎯 Próximas Mejoras Sugeridas

1. **Backend API**
   - Sistema de autenticación
   - Base de datos para reservas
   - Panel de administración
   - Sistema de pagos (Stripe)

2. **Email Integration**
   - SendGrid o Mailgun
   - Confirmaciones automáticas
   - Recordatorios de reservas

3. **Blog/News**
   - Sección de recetas
   - Artículos de cocina
   - Eventos próximos

4. **Multi-idioma**
   - i18n integration
   - Español/Inglés

5. **SEO Optimization**
   - Meta tags
   - Schema markup
   - Sitemap XML

## 📄 Licencia

© 2025 Chef Oscar Silva. Todos los derechos reservados.

## 👨‍💻 Desarrollador

**Leonardo Mosquera**
- LinkedIn: [leonardo-mosquera](https://www.linkedin.com/in/leonardo-mosquera)
- Email: contacto@leonardomosquera.com

---

**Nota**: Esta es una aplicación profesional lista para producción. Para conectar con un backend real, actualizar las llamadas API en los componentes de formulario y chatbot.
