# 🎯 Guía de Personalización - Chef Oscar Silva Website

## 📝 Pasos para Personalizar la Aplicación

### 1. Actualizar Información de Contacto

#### WhatsApp
**Archivo**: `src/components/WhatsAppFloat.tsx`
```typescript
const phoneNumber = "TU_NUMERO_AQUI"; // Formato: código país + número (sin + ni espacios)
// Ejemplo: "15551234567" para USA
```

**Archivo**: `src/components/ChatBot.tsx` (línea ~169)
```typescript
contact us at chef@oscarsilva.com or call +1 (555) 123-4567
```

#### Email y Teléfono
Actualizar en estos archivos:
- `src/components/ContactSection.tsx`
- `src/components/Footer.tsx`

```typescript
// Buscar y reemplazar:
"chef@oscarsilva.com" → "tu_email@dominio.com"
"+1 (555) 123-4567" → "tu_número_real"
```

### 2. Configurar Redes Sociales

#### Instagram, Facebook
**Archivos a actualizar**:
- `src/components/Header.tsx` (líneas del menú móvil)
- `src/components/Footer.tsx`
- `src/components/ContactSection.tsx`

```typescript
// Reemplazar "#" con tus URLs reales:
href="https://instagram.com/tu_usuario"
href="https://facebook.com/tu_pagina"
```

### 3. Integrar Chatbot Real (Tawk.to)

**Opción 1: Usar Tawk.to (Recomendado para chat en vivo)**

1. Crear cuenta gratuita en [Tawk.to](https://www.tawk.to/)
2. Obtener tu Property ID del dashboard
3. Descomentar en `src/app/page.tsx`:

```typescript
// Línea 32-35, descomentar:
document.body.appendChild(script);

// Y actualizar la línea 29:
script.src = 'https://embed.tawk.to/TU_PROPERTY_ID/default';
```

**Opción 2: Usar Chatbot AI incluido**
- Ya está activo por defecto
- Personalizar respuestas en `src/components/ChatBot.tsx` (líneas 20-35)

### 4. Agregar Imágenes Reales

#### Ubicación de imágenes
Colocar tus imágenes en la carpeta `/public/`:

```
/public/
  ├── oscarchef.jpg          # Hero image (Home)
  ├── chef-oscar-silva.jpg   # About section
  ├── foto1.jpg              # About - Training
  ├── foto2.jpg              # About - Experience
  └── contact-table.jpg      # Contact section
```

#### Galería
**Archivo**: `src/components/GallerySection.tsx`

Reemplazar las URLs de Unsplash con tus imágenes:
```typescript
const GALLERY_IMAGES = [
  {
    url: "/mi-imagen-1.jpg",  // Cambiar aquí
    title: "Mi Plato Especial",
    category: "Main Courses"
  },
  // ... más imágenes
];
```

### 5. Personalizar Servicios y Precios

**Archivo**: `src/components/BookOnlineSection.tsx`

```typescript
const SERVICES = [
  {
    title: "Tu Servicio",
    duration: "X hr",
    price: "Desde $XXX",
    image: "/tu-imagen.jpg",
    description: "Descripción del servicio",
    popular: true, // true/false para badge "Popular"
  },
  // ... más servicios
];
```

### 6. Actualizar Testimonios

**Archivo**: `src/components/TestimonialsSection.tsx`

```typescript
const TESTIMONIALS = [
  {
    name: "Nombre Cliente",
    event: "Tipo de Evento",
    rating: 5,
    image: "/foto-cliente.jpg", // o usar avatar generado
    text: "Testimonio del cliente...",
    date: "Mes Año"
  },
  // ... más testimonios
];
```

### 7. Configurar Backend (Opcional pero Recomendado)

Para recibir las reservas y mensajes reales, necesitas conectar un backend:

#### Opción 1: Formspree (Más Fácil)
1. Crear cuenta en [Formspree](https://formspree.io/)
2. Obtener endpoint
3. Actualizar formularios:

```typescript
// En ContactSection.tsx y BookingModal.tsx
const handleSubmit = async (e) => {
  e.preventDefault();
  
  const response = await fetch('https://formspree.io/f/TU_FORM_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  });
  
  // ... resto del código
};
```

#### Opción 2: EmailJS
1. Crear cuenta en [EmailJS](https://www.emailjs.com/)
2. Configurar servicio de email
3. Instalar: `npm install @emailjs/browser`
4. Implementar en los formularios

#### Opción 3: Backend Personalizado
Crear API endpoints para:
- `/api/bookings` - Reservas
- `/api/contact` - Mensajes de contacto
- `/api/newsletter` - Suscripciones

### 8. Optimización SEO

**Archivo**: `src/app/layout.tsx`

Actualizar metadata:
```typescript
export const metadata = {
  title: 'Chef Oscar Silva | Private Chef & Culinary Experiences',
  description: 'Chef internacional especializado en cenas privadas...',
  keywords: 'chef privado, cocina, eventos, Los Angeles',
  openGraph: {
    title: 'Chef Oscar Silva',
    description: 'Experiencias culinarias únicas...',
    images: ['/og-image.jpg'],
  }
}
```

### 9. Google Analytics (Opcional)

1. Crear propiedad en Google Analytics
2. Obtener Measurement ID
3. Agregar en `src/app/layout.tsx`:

```typescript
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `}
</Script>
```

### 10. Desplegar en Producción

#### Vercel (Recomendado - Gratis)
```bash
# Instalar Vercel CLI
npm i -g vercel

# Desplegar
vercel

# Para producción
vercel --prod
```

#### Netlify
```bash
# Construir
npm run build

# Subir carpeta .next a Netlify
```

## 🔍 Verificación Final

Antes de lanzar, verifica:

- [ ] Todas las imágenes cargan correctamente
- [ ] Formularios envían emails (si configurado)
- [ ] WhatsApp abre con número correcto
- [ ] Redes sociales tienen URLs correctas
- [ ] Chatbot responde apropiadamente
- [ ] Diseño responsive funciona en móvil
- [ ] No hay console errors
- [ ] Tiempos de carga son rápidos

## 📞 Soporte

Si necesitas ayuda con la personalización:
- Email: leonardo.mosquera@email.com
- LinkedIn: [Leonardo Mosquera](https://linkedin.com/in/leonardo-mosquera)

---

**¡Buena suerte con tu nuevo sitio web profesional! 🎉**
