# 🧶 DoggyLoops - Amigurumis con Amor

## 📖 Idea del Proyecto

DoggyLoops es una plataforma web para una tienda de amigurumis (muñecos de crochet) que permite a los clientes:

- **Explorar el catálogo** de amigurumis disponibles
- **Realizar pedidos personalizados** con descripciones detalladas
- **Subir imágenes de referencia** para sus diseños únicos
- **Leer testimonios** de clientes satisfechos
- **Dejar sus propios testimonios** sobre la experiencia

La aplicación está diseñada con una interfaz moderna y acogedora que refleja la calidez y artesanía de los amigurumis, utilizando una paleta de colores cálidos y elementos visuales que transmiten la pasión por el crochet.

## 🛠️ Tecnologías Utilizadas

### Frontend

- **Next.js 15.2.4** - Framework de React con App Router
- **React 19** - Biblioteca de interfaz de usuario
- **TypeScript** - Tipado estático para mayor robustez
- **Tailwind CSS 4** - Framework de CSS utility-first
- **Radix UI** - Componentes de interfaz accesibles
- **Lucide React** - Iconografía moderna
- **Concurrently** - Ejecución simultánea de servicios

### Backend

- **NestJS 11** - Framework de Node.js para aplicaciones escalables
- **TypeORM** - ORM para TypeScript y JavaScript
- **PostgreSQL** - Base de datos relacional
- **Multer** - Middleware para manejo de archivos
- **Class Validator** - Validación de datos
- **CORS** - Configuración para peticiones cross-origin

### Base de Datos

- **PostgreSQL** - Sistema de gestión de base de datos
- **Entidades principales:**
  - Products (amigurumis)
  - Categories (categorías)
  - Orders (pedidos)
  - Testimonials (testimonios)

## 🤖 Uso de Inteligencia Artificial

Este proyecto fue desarrollado con la asistencia de **Cursor**, una IA avanzada que ayudó en:

1. **Arquitectura del Proyecto**

   - Diseño de la estructura de carpetas
   - Configuración de TypeScript y ESLint
   - Setup de Next.js y NestJS
   - Diseño de la pagina

2. **Documentación**
   - Generación de este README
   - Comentarios en el código
   - Instrucciones de deploy

### Características Implementadas con IA

- **Validación de datos** en tiempo real
- **Optimización de rendimiento** con lazy loading y caching

## 🚀 Instrucciones para Ejecutar el Proyecto

### Prerrequisitos

- Node.js 18+
- PostgreSQL 12+
- npm o yarn

### 1. Clonar el Repositorio

```bash
git clone <url-del-repositorio>
cd DoggyLoops
```

### 2. Configurar la Base de Datos

```bash
# Crear base de datos PostgreSQL
createdb doggyloops_db

# Ejecutar scripts de inicialización (opcional)
psql -d doggyloops_db -f scripts/create-database.sql
psql -d doggyloops_db -f scripts/seed-data.sql
```

### 3. Configurar Variables de Entorno

Crear archivo `.env` en la carpeta `backend/`:

```env
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=tu_username
DB_PASSWORD=tu_password
DB_NAME=doggyloops_db
```

### 4. Instalar Dependencias

```bash
# Instalar dependencias del frontend
npm install

# Instalar dependencias del backend
cd backend
npm install
cd ..
```

### 5. Ejecutar el Proyecto

```bash
# Ejecutar frontend y backend simultáneamente
npm run dev
```

El proyecto estará disponible en:

- **Frontend:** http://localhost:3000
- **Backend:** http://localhost:3001

### Scripts Disponibles

```bash
npm run dev              # Ejecuta frontend y backend
npm run dev:frontend     # Solo frontend
npm run dev:backend      # Solo backend
npm run build           # Build de producción
npm run start           # Iniciar en modo producción
```

## 🌐 Deploy en Vercel/Render

### Deploy en Vercel (Frontend)

1. **Preparar el Proyecto**

   ```bash
   # Asegurarse de que el build funciona
   npm run build
   ```

2. **Configurar Variables de Entorno en Vercel**

   - Ir a Settings > Environment Variables
   - Agregar: `NEXT_PUBLIC_API_URL=https://tu-backend.onrender.com`

3. **Deploy**

   ```bash
   # Instalar Vercel CLI
   npm i -g vercel

   # Deploy
   vercel
   ```

### Deploy en Render (Backend)

1. **Crear Nuevo Web Service**

   - Conectar repositorio de GitHub
   - Seleccionar carpeta `backend/`

2. **Configurar Build Command**

   ```bash
   npm install && npm run build
   ```

3. **Configurar Start Command**

   ```bash
   npm run start:prod
   ```

4. **Configurar Variables de Entorno**

   ```
   DB_HOST=tu-host-postgres
   DB_PORT=5432
   DB_USERNAME=tu_usuario
   DB_PASSWORD=tu_password
   DB_NAME=doggyloops_db
   NODE_ENV=production
   ```

5. **Configurar Base de Datos PostgreSQL**
   - Crear servicio PostgreSQL en Render
   - Usar las credenciales proporcionadas en las variables de entorno

### Deploy en Render (Base de Datos)

1. **Crear PostgreSQL Database**

   - Nuevo servicio > PostgreSQL
   - Seleccionar plan gratuito

2. **Ejecutar Scripts de Inicialización**

   ```bash
   # Conectar a la base de datos
   psql "postgresql://usuario:password@host:puerto/database"

   # Ejecutar scripts
   \i scripts/create-database.sql
   \i scripts/seed-data.sql
   ```

### Configuración Post-Deploy

1. **Actualizar URL de API**

   - En `app/lib/api.ts`, cambiar `API_BASE_URL` a la URL de producción

2. **Configurar CORS**

   - En el backend, actualizar origen permitido con la URL de Vercel

3. **Verificar Funcionalidad**
   - Probar creación de pedidos
   - Verificar subida de imágenes
   - Comprobar testimonios

## 📁 Estructura del Proyecto

```
DoggyLoops/
├── app/                    # Frontend Next.js
│   ├── lib/
│   │   └── api.ts         # Funciones de API
│   ├── page.tsx           # Página principal
│   └── layout.tsx         # Layout de la aplicación
├── backend/               # Backend NestJS
│   ├── src/
│   │   ├── products/      # Módulo de productos
│   │   ├── orders/        # Módulo de pedidos
│   │   ├── testimonials/  # Módulo de testimonios
│   │   └── categories/    # Módulo de categorías
│   └── uploads/           # Imágenes subidas
├── components/            # Componentes UI reutilizables
├── public/               # Archivos estáticos
└── scripts/              # Scripts SQL para la base de datos
```

## 🔧 Características Técnicas

- **Arquitectura Full-Stack** con separación clara de responsabilidades
- **API RESTful** con endpoints bien definidos
- **Manejo de archivos** con subida de imágenes
- **Validación de datos** en frontend y backend
- **Base de datos relacional** con relaciones entre entidades
- **Interfaz responsive** optimizada para móviles
- **Manejo de errores** robusto con fallbacks

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

---
