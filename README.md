# 🌍 Aprende — Plataforma educativa

Plataforma web hecha con **React + Vite** para aprender **22 idiomas** (ruta MCER
A1–C2) y **6 áreas del conocimiento** profesionales. Incluye acceso con cuenta,
suscripción con pago PSE, perfil con skills y seguimiento de progreso.

## 🏗️ Arquitectura de software

**SPA de una sola página con el contenido como dato y servicios opcionales al lado.**
No hay framework de rutas ni gestor de estado: la vista se decide con un objeto
`view` en `App.jsx` y el estado vive en hooks. Los servicios de `server/` son
independientes entre sí y la app funciona aunque no estén levantados.

```
┌──────────────────────── Navegador ────────────────────────┐
│  React 18 + Vite                                          │
│                                                           │
│  App.jsx ── view {type: home | area | lang | inv}         │
│    ├── Sidebar.jsx        navegación (áreas, idiomas)     │
│    ├── LanguageStudy.jsx  pestañas de un idioma           │
│    ├── AreaStudy.jsx      módulos de un área              │
│    └── Investments.jsx    CDT, hipotecas, tasas           │
│                                                           │
│  src/data/*    contenido estático (vocabulario, gramática)│
│  src/utils/*   auth, progreso, voz  → localStorage        │
│  src/api/*     clientes HTTP (fetch)                      │
└───────────────┬───────────────────────┬───────────────────┘
                │                       │
     VITE_VOCAB_API             VITE_RATES_API
                │                       │
   ┌────────────▼──────────┐  ┌─────────▼──────────────┐
   │ server/vocabulario    │  │ server/scraper         │
   │ Express + JSON        │  │ Express + Playwright   │
   │ CRUD de vocabulario   │  │ tasas CDT/hipotecas    │
   └───────────────────────┘  └────────────────────────┘
                                        │
                             GitHub Actions publica
                             public/tasas/*.json (sin backend)
```

### Decisiones y por qué

| Capa | Cómo está resuelto | Motivo |
|------|--------------------|--------|
| **Contenido** | Módulos ES en `src/data/` (`vocabulary.js`, `grammar.js`, `lessons.js`, `knowledge.js`…) | El contenido cambia mucho más que el código; separarlo permite crecer sin tocar componentes. |
| **Navegación** | Un objeto `view` en el estado de `App.jsx` | La app tiene cuatro tipos de vista; un router sería más peso que valor. |
| **Estado** | Hooks propios (`useAuth`, `useProgress`) | Sin Redux ni Context global: cada pantalla pide lo que necesita. |
| **Persistencia** | `localStorage` por defecto, servicio HTTP si hay variable de entorno | La demo se despliega sola en Vercel/Netlify; el backend es opcional. |
| **Servicios** | Procesos Express separados en `server/`, uno por dominio | Se levantan y despliegan por separado; si uno cae, la app sigue. |
| **Estilos** | Un único `index.css` con variables CSS en `:root` | Sin dependencias de build extra ni CSS-in-JS. |

Los tres niveles de datos (servicio en vivo → JSON estático → valores de
referencia) están implementados en [`src/utils/rates.js`](src/utils/rates.js) y son
el patrón que sigue el resto de la app: **degradar, nunca romper**.

## 🆕 Funcionalidades nuevas

### ➕ Mi vocabulario (pestaña por idioma) + API

Cada idioma tiene ahora una pestaña **➕ Mi vocabulario** donde el estudiante añade,
edita y borra sus propias palabras, con traducción, pronunciación, categoría y nivel
MCER. Las palabras se agrupan por nivel igual que en *Explorar* y se pueden escuchar
con el botón 🔊.

Detrás hay un **servicio REST propio** ([`server/vocabulario`](server/vocabulario)):

| Método | Ruta | Para qué |
|--------|------|----------|
| GET | `/api/vocabulario/idiomas` | Idiomas admitidos y niveles válidos. |
| GET | `/api/vocabulario/:lang` | Lista, con filtros `level`, `categoria` y `q`. |
| GET | `/api/vocabulario/:lang/:id` | Una palabra. |
| POST | `/api/vocabulario/:lang` | Crea una palabra. |
| POST | `/api/vocabulario/:lang/lote` | Importa hasta 500 de una vez. |
| PUT | `/api/vocabulario/:lang/:id` | Actualiza (parcial). |
| DELETE | `/api/vocabulario/:lang/:id` | Elimina. |

Valida idioma (los 22), nivel (A1–C2) y campos obligatorios, y rechaza duplicados con
409. La colección de **Postman** para consumirlo está en [`postman/`](postman).

### Cómo activarla

```bash
cd server/vocabulario
npm install
npm start                    # http://localhost:4100
```

Y en la raíz del repo, un `.env` con:

```
VITE_VOCAB_API=http://localhost:4100/api/vocabulario
```

Sin esa variable la pestaña **sigue funcionando** guardando en el `localStorage` del
navegador; el aviso de la parte superior indica en cada momento dónde se están
guardando las palabras.

### Cómo añadir la siguiente funcionalidad

El patrón para una pestaña nueva dentro de un idioma es siempre el mismo:

1. **Contenido o servicio.** Si son datos fijos, un módulo en `src/data/`. Si el
   usuario los va a crear, un servicio en `server/` (copia `server/vocabulario` como
   plantilla: `server.js` con las rutas, `store.js` con la persistencia).
2. **Cliente.** Un archivo en `src/api/` que lea su variable `VITE_*` y **caiga a
   `localStorage`** si no está definida, como [`src/api/vocabulary.js`](src/api/vocabulary.js).
3. **Componente.** Uno nuevo en `src/components/`, reutilizando las clases de
   `index.css` (`word-row`, `browse-level`, `chip`, `empty-note`…).
4. **Pestaña.** Añade la entrada al arreglo `MODES` de
   [`src/components/LanguageStudy.jsx`](src/components/LanguageStudy.jsx) y su línea
   de render. Si la pestaña no usa el filtro de nivel, añádela a la condición que
   oculta los chips.
5. **Documentación.** Variable en `.env.example`, endpoints en el README del servicio
   y peticiones en la colección de Postman.

## 🔐 Acceso y suscripción (requerimientos 0–4)

- **Login / registro** con usuario y contraseña (persistidos en `localStorage`).
- **Muro de pago**: sin suscripción activa no se permite el ingreso; se paga con un **botón PSE** (flujo simulado en el cliente; en producción se integraría la pasarela PSE real).
- **Pantalla principal** con temas en cualquier idioma o área del conocimiento.
- **Perfil** (icono arriba a la derecha) con los datos del usuario y los **skills** obtenidos según los estudios y resultados en la plataforma.
- **Áreas del conocimiento**: cada área ofrece 5 módulos — *tiempos verbales, lenguaje formal, lenguaje no formal, vocabulario y lenguaje técnico* — y guarda el progreso, que suma a los skills del perfil.

> ⚠️ La autenticación, la suscripción y el pago PSE están **simulados en el navegador**
> (sin backend), apropiado para una demo desplegable. Para producción se conectarían a
> una API, una base de datos de usuarios y la pasarela de pagos real.

### 🧠 Áreas del conocimiento incluidas (10)

Medicina y Salud · Tecnología e Informática · Derecho · Negocios y Finanzas ·
Ingeniería y Construcción · Ciencias · Educación · Marketing y Publicidad ·
Psicología · Gastronomía.

Cada área incluye una **introducción**, sus **especialidades** y los 5 módulos de
lenguaje con contenido real. El vocabulario y el lenguaje técnico muestran además
su **equivalente en inglés** 🇬🇧, para estudiar la terminología profesional en otro idioma.

### 🔌 Backend y PSE real

La autenticación, suscripción y pago están simulados en el navegador. Para conectar
un backend real (API + base de datos + pasarela PSE), consulta **[BACKEND.md](BACKEND.md)**,
el cliente de API en [`src/api/client.js`](src/api/client.js), el servidor de referencia
en [`server/index.example.js`](server/index.example.js) y las variables en [`.env.example`](.env.example).

---

## 🌍 Aprendizaje de idiomas

Aprende vocabulario y gramática en **22 idiomas** desde el español.

## ✨ Funciones

- **🧭 Ruta A1 → C2** — una progresión basada en el **Marco Común Europeo de Referencia (MCER)**. Cada nivel (A1, A2, B1, B2, C1, C2) muestra su descriptor "puede hacer", el temario de gramática/estructuras y las destrezas a practicar, desde la comprensión básica hasta una comprensión equivalente a la de un nativo culto.
- **Filtro por nivel** — explora, repasa y haz quizzes filtrando el vocabulario por nivel.
- **Explorar** — vocabulario agrupado por nivel y categoría con traducción y pronunciación.
- **➕ Mi vocabulario** — añade tus propias palabras a cualquier idioma, con nivel y categoría. Se guardan en el servicio de `server/vocabulario` si está configurado, o en el navegador si no.
- **Tarjetas (flashcards)** — voltea la tarjeta para ver la traducción; mezcla y avanza a tu ritmo.
- **Quiz** — 10 preguntas de opción múltiple con puntuación final.
- **Pronunciación en voz alta** 🔊 usando la Web Speech API del navegador.
- Diseño responsive (móvil y escritorio) y soporte para idiomas de derecha a izquierda (árabe, hebreo).

## 🎯 Progresión A1 → C2

La app sigue los 6 niveles del MCER. La dificultad sube de forma gradual: en
**A1–A2** el foco es el vocabulario y las estructuras básicas (incluido en la app);
en **B1** se introducen pasados, condicional y subjuntivo; y de **B2 a C2** el
avance depende cada vez menos de listas y más de la **exposición a contenido real**
(noticias, series, podcasts, libros) hasta llegar al dominio idiomático y los matices
de un hablante nativo. La pestaña *Ruta* funciona como mapa de estudio de cada escalón.

> **Nota realista:** ninguna app de datos estáticos enseña por sí sola hasta el nivel
> nativo (C2) en 22 idiomas; eso requiere miles de horas de inmersión. Lo que esta app
> aporta es la **estructura, el temario y el vocabulario base** para guiarte en el camino.

## 🗣️ Idiomas incluidos (22)

Inglés, Francés, Alemán, Neerlandés, Sueco, Noruego, Danés, Italiano, Portugués,
Catalán, Rumano, Ruso, Ucraniano, Polaco, Griego, Turco, Japonés, Chino, Coreano,
Hindi, Árabe y Hebreo.

## 🚀 Cómo ejecutar

```bash
npm install      # instalar dependencias
npm run dev      # servidor de desarrollo (abre el navegador)
npm run build    # compilar para producción
npm run preview  # previsualizar la build
```

Servicios opcionales, cada uno con su propio `npm install`:

```bash
cd server/vocabulario && npm start   # API de "Mi vocabulario" (puerto 4100)
cd server/scraper     && npm start   # API de tasas para Inversiones (puerto 4000)
```

Copia `.env.example` a `.env` para apuntar el front a los servicios que levantes.

## 📁 Estructura

```
src/
  data/              # todo el contenido, como módulos ES
    languages.js       # los 22 idiomas
    vocabulary.js      # vocabulario y traducciones
    levels.js          # niveles MCER (A1–C2)
    grammar.js         # gramática por nivel
    verbTenses.js      # tiempos verbales
    a1Course.js        # curso A1 guiado
    lessons.js         # guías de las áreas
    knowledge.js       # áreas del conocimiento
  components/
    Sidebar.jsx        # navegación (áreas e idiomas)
    LanguageStudy.jsx  # pestañas de un idioma
    Browse.jsx         # explorar vocabulario
    MyVocabulary.jsx   # ➕ alta de vocabulario propio
    Flashcards.jsx     # tarjetas de memoria
    Quiz.jsx           # cuestionario
    AreaStudy.jsx      # módulos de un área
    Investments.jsx    # CDT, hipotecas y tasas
  api/
    client.js          # cliente del backend (auth, pagos, progreso)
    vocabulary.js      # cliente de "Mi vocabulario" (con fallback local)
  utils/
    auth.js            # sesión y suscripción
    progress.js        # progreso y skills
    rates.js           # consulta de tasas
    speak.js           # síntesis de voz
  App.jsx              # decide la vista según el objeto `view`
  main.jsx
  index.css            # estilos, con variables CSS en :root

server/
  vocabulario/       # API REST de vocabulario propio (Express + JSON)
  scraper/           # API de tasas (Express + Playwright)
  index.example.js   # esqueleto del backend de auth/pagos

postman/             # colección para consumir la API de vocabulario
```

## ➕ Añadir más palabras o idiomas

- **Desde la app:** usa la pestaña **➕ Mi vocabulario** del idioma. No requiere tocar código.
- **Nuevo idioma:** agrégalo en `src/data/languages.js`, añade su clave (`code`) a cada
  palabra en `src/data/vocabulary.js` y también a
  [`server/vocabulario/idiomas.js`](server/vocabulario/idiomas.js) para que el servicio lo acepte.
- **Nueva palabra/categoría en el contenido base:** edita `src/data/vocabulary.js` siguiendo el mismo formato.
- **Carga masiva:** `POST /api/vocabulario/:lang/lote` acepta hasta 500 palabras por petición.
