# Chef Oscar Monorepo

Este repositorio contiene el frontend (Next.js + TypeScript), backend (Node.js + Express + TypeScript) y un directorio `shared` para tipos/utilidades comunes.

## Estructura

```
ChefOscar/
  frontend/    # Next.js (SSR, TypeScript, TailwindCSS)
  backend/     # Node.js + Express (TypeScript)
  shared/      # Tipos y utilidades compartidas
  README.md
  .gitignore
  docker-compose.yml
```

## Primeros pasos

1. Instala dependencias en cada paquete:
   - `cd frontend && npm install`
   - `cd ../backend && npm install`
2. Ejecuta el frontend:
   - `cd frontend && npm run dev`
3. Ejecuta el backend:
   - `cd backend && npx ts-node src/index.ts`

## Requisitos
- Node.js >= 18
- npm >= 8

## Despliegue sugerido
- Frontend: Vercel
- Backend: Render, Railway, Heroku
- Base de datos: MongoDB Atlas
