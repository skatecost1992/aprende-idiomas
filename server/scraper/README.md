# Scraper de tasas (Playwright) para el apartado Inversiones

Servicio Node que usa **Playwright** para extraer las tasas de CDT y de créditos
hipotecarios desde las páginas configuradas, y las expone como API. El botón
**Actualizar** del apartado Inversiones de Aprende consume esta API.

## Por qué un backend (y no Playwright en el navegador)

Playwright controla navegadores reales desde Node; **no puede ejecutarse dentro
de la pestaña** del usuario. Además, hacer scraping desde el navegador del cliente
está bloqueado por CORS. Por eso el scraping vive aquí, en el servidor, y el front
solo llama a la API por HTTP.

## Puesta en marcha

```bash
cd server/scraper
npm install            # instala Playwright y descarga Chromium (postinstall)
npm start              # levanta la API en http://localhost:4000
```

Luego, en la raíz del proyecto Aprende, crea un `.env` con:

```
VITE_RATES_API=http://localhost:4000/api/tasas
```

y reinicia `npm run dev`. El botón **Actualizar** ya traerá datos reales.

## Todo junto con Docker (recomendado)

Desde la raíz del proyecto, un solo comando levanta el frontend y el scraper ya
conectados entre sí:

```bash
docker compose up --build
```

- Frontend: http://localhost:8080
- Scraper:  http://localhost:4000/api/tasas

La imagen del scraper usa la base oficial de Playwright (Chromium ya incluido), y
el `docker-compose.yml` inyecta `VITE_RATES_API` en el build del frontend.

## Endpoints

| Método | Ruta | Devuelve |
|--------|------|----------|
| GET | `/api/tasas/cdt` | `{ lastUpdated, colombia:[...], mundo:[...] }` |
| GET | `/api/tasas/hipotecas` | igual estructura |

Cada fila: `{ entidad|pais, plazo, tasa, moneda?, fuente, error? }`.

## ⚠️ Debes verificar los selectores

`sources.js` contiene las URLs y la forma de extraer la tasa de cada página.
Como cada sitio tiene un HTML distinto (y cambia con el tiempo), debes:

1. Abrir cada página en el navegador, pulsar F12 e identificar el elemento con la tasa.
2. Poner su selector CSS en `selector`, o ajustar la `regex`.
3. Probar con `curl http://localhost:4000/api/tasas/cdt`.

Si una fuente falla o cambia, esa fila vuelve con `tasa: null` y un `error`, sin
afectar a las demás. Respeta los Términos de Servicio y el `robots.txt` de cada
sitio, e introduce pausas si haces muchas peticiones.
