# Servicio de vocabulario personalizado

API REST que guarda las palabras que el estudiante añade en la pestaña
**➕ Mi vocabulario** de cada idioma de Aprende.

```bash
cd server/vocabulario
npm install
npm start        # http://localhost:4100/api/vocabulario
```

Para que el front lo use, crea un `.env` en la raíz del repo con:

```
VITE_VOCAB_API=http://localhost:4100/api/vocabulario
```

Sin esa variable la pestaña sigue funcionando, pero guarda las palabras en el
`localStorage` del navegador (igual que el resto de la demo).

## Variables de entorno

| Variable | Por defecto | Descripción |
|----------|-------------|-------------|
| `PORT` | `4100` | Puerto del servicio (4000 lo ocupa el scraper de tasas). |
| `VOCAB_FILE` | `data/vocabulario.json` | Ruta del archivo JSON donde se persiste. |

## Modelo de datos

```json
{
  "id": "vc_2f1a...",
  "es": "Manzana",
  "w": "Apple",
  "p": "ápel",
  "level": "A1",
  "category": "Comida",
  "createdAt": "2026-09-09T14:02:11.310Z",
  "updatedAt": "2026-09-09T14:02:11.310Z"
}
```

- `es` y `w` son obligatorios; `p` (pronunciación) y `category` son opcionales.
- `level` debe ser un nivel MCER: `A1`, `A2`, `B1`, `B2`, `C1` o `C2`. Por defecto `A1`.
- El idioma no va en el cuerpo sino en la ruta, y debe ser uno de los 22 de
  [`idiomas.js`](idiomas.js) (los mismos de `src/data/languages.js`).

## Endpoints

| Método | Ruta | Respuesta |
|--------|------|-----------|
| GET | `/api/health` | `{ status, archivo, palabras }` |
| GET | `/api/vocabulario/idiomas` | `{ idiomas, niveles }` |
| GET | `/api/vocabulario/:lang` | `{ lang, total, items }` |
| GET | `/api/vocabulario/:lang/:id` | La palabra |
| POST | `/api/vocabulario/:lang` | 201 + la palabra creada |
| POST | `/api/vocabulario/:lang/lote` | 201 + `{ creadas, rechazadas, items }` |
| PUT | `/api/vocabulario/:lang/:id` | La palabra actualizada |
| DELETE | `/api/vocabulario/:lang/:id` | 204 sin cuerpo |

`GET /api/vocabulario/:lang` acepta tres filtros opcionales y combinables:
`level=A1`, `categoria=Comida` y `q=man` (busca en el español y en la traducción).

## Errores

Todos devuelven `{ "message": "..." }`.

| Código | Cuándo |
|--------|--------|
| 400 | Falta `es` o `w`, un campo se pasa de largo, el nivel no es MCER o el JSON está mal formado. |
| 404 | El idioma de la ruta no está entre los 22, o el `id` no existe. |
| 409 | Ya hay una palabra con ese mismo término en español para ese idioma. |

## Persistencia

Todo vive en un único JSON (`data/vocabulario.json`) indexado por idioma. Se carga
en memoria al arrancar y se reescribe en cada cambio, encadenando las escrituras y
usando un archivo temporal para no corromperlo. Es suficiente para uso personal;
para producción, sustituye [`store.js`](store.js) por PostgreSQL —el resto del
servicio no cambia— y añade autenticación por usuario como describe
[`BACKEND.md`](../../BACKEND.md).

## Probarlo

La colección de Postman está en [`postman/`](../../postman) en la raíz del repo.
