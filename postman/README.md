# Colecciones de Postman

Colección para probar y consumir la **API de vocabulario personalizado**
(`server/vocabulario`), la que alimenta la pestaña **➕ Mi vocabulario** de cada idioma.

| Archivo | Qué es |
|---------|--------|
| `Aprende-Vocabulario.postman_collection.json` | Colección con todos los endpoints y sus pruebas. |
| `Aprende-Local.postman_environment.json` | Entorno apuntando a `http://localhost:4100`. |

## Cómo usarla

1. Levanta el servicio:

   ```bash
   cd server/vocabulario
   npm install
   npm start
   ```

2. En Postman: **Import** → arrastra los dos archivos.
3. Selecciona el entorno *Aprende — Local* arriba a la derecha.
4. Ejecuta las peticiones en orden. **Crear palabra** guarda el `id` en la variable
   `wordId`, que reutilizan *Obtener*, *Actualizar* y *Eliminar*.

También puedes correr toda la colección de una vez con el **Collection Runner**, o
desde la terminal con [Newman](https://github.com/postmanlabs/newman):

```bash
npx newman run postman/Aprende-Vocabulario.postman_collection.json -e postman/Aprende-Local.postman_environment.json
```

## Variables

| Variable | Valor por defecto | Para qué |
|----------|-------------------|----------|
| `baseUrl` | `http://localhost:4100` | Raíz del servicio. |
| `lang` | `en` | Código del idioma. Cámbialo por `fr`, `de`, `ja`… (22 disponibles). |
| `wordId` | *(vacío)* | Id de la última palabra creada. Lo rellena la colección. |

## Endpoints incluidos

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/api/health` | Estado del servicio y conteo por idioma. |
| GET | `/api/vocabulario/idiomas` | Idiomas admitidos y niveles MCER válidos. |
| GET | `/api/vocabulario/{lang}` | Lista el vocabulario. Filtros: `level`, `categoria`, `q`. |
| GET | `/api/vocabulario/{lang}/{id}` | Una palabra. |
| POST | `/api/vocabulario/{lang}` | Crea una palabra. |
| POST | `/api/vocabulario/{lang}/lote` | Crea hasta 500 palabras de una vez. |
| PUT | `/api/vocabulario/{lang}/{id}` | Actualiza (parcial). |
| DELETE | `/api/vocabulario/{lang}/{id}` | Elimina. |

El detalle del modelo de datos y de los códigos de error está en
[`server/vocabulario/README.md`](../server/vocabulario/README.md).
