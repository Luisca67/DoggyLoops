# Despliegue en Render

Este proyecto está configurado para desplegarse en Render usando Blueprint con dos servicios separados: backend y frontend.

## Estructura del Despliegue

- **Base de datos**: PostgreSQL en Render
- **Backend**: API NestJS en el puerto 3001
- **Frontend**: Aplicación Next.js en el puerto 3000

## Pasos para Desplegar

### 1. Preparar el Repositorio

Asegúrate de que tu código esté en un repositorio de GitHub con la siguiente estructura:

```
DoggyLoops/
├── render.yaml          # Archivo de configuración de Render
├── package.json         # Dependencias del frontend
├── app/                 # Código del frontend (Next.js)
├── backend/             # Código del backend (NestJS)
│   ├── package.json
│   └── src/
└── scripts/             # Scripts SQL
```

### 2. Conectar con Render

1. Ve a [Render Dashboard](https://dashboard.render.com)
2. Haz clic en "New" → "Blueprint"
3. Conecta tu repositorio de GitHub
4. Render detectará automáticamente el archivo `render.yaml`

### 3. Configurar Variables de Entorno

El archivo `render.yaml` ya está configurado para:

- Crear automáticamente una base de datos PostgreSQL
- Conectar el backend a la base de datos usando las variables de entorno
- Configurar el frontend para comunicarse con el backend

### 4. Desplegar

1. Render creará automáticamente:

   - Una base de datos PostgreSQL
   - Un servicio web para el backend
   - Un servicio web para el frontend

2. Los servicios se desplegarán automáticamente cuando hagas push a la rama principal

## URLs de los Servicios

Después del despliegue, tendrás URLs como:

- **Frontend**: `https://doggyloops-frontend.onrender.com`
- **Backend**: `https://doggyloops-backend.onrender.com`
- **Base de datos**: Configurada automáticamente

## Variables de Entorno

### Backend

- `DB_HOST`, `DB_PORT`, `DB_USERNAME`, `DB_PASSWORD`, `DB_NAME`: Configuradas automáticamente desde la base de datos
- `NODE_ENV`: production
- `PORT`: 3001

### Frontend

- `NEXT_PUBLIC_API_URL`: URL del backend (configurada automáticamente)
- `NODE_ENV`: production
- `PORT`: 3000

## Health Checks

- **Backend**: `https://doggyloops-backend.onrender.com/api/health`
- **Frontend**: `https://doggyloops-frontend.onrender.com/`

## Notas Importantes

1. **Plan Gratuito**: Los servicios están configurados para el plan gratuito de Render
2. **Auto-deploy**: Los servicios se actualizan automáticamente con cada push
3. **Base de datos**: Se crea automáticamente y se conecta al backend
4. **CORS**: Asegúrate de que el backend permita requests desde el dominio del frontend

## Solución de Problemas

### Si el backend no se conecta a la base de datos:

- Verifica que las variables de entorno estén configuradas correctamente
- Revisa los logs del servicio en Render Dashboard

### Si el frontend no puede comunicarse con el backend:

- Verifica que `NEXT_PUBLIC_API_URL` esté configurada correctamente
- Asegúrate de que el backend esté funcionando

### Para ejecutar scripts SQL en la base de datos:

```bash
# Conectar a la base de datos de Render
psql -h [DB_HOST] -U [DB_USERNAME] -d [DB_NAME] -f scripts/create-database.sql
psql -h [DB_HOST] -U [DB_USERNAME] -d [DB_NAME] -f scripts/seed-data.sql
```
