# 🌍 Aprende — Plataforma educativa

Plataforma web hecha con **React + Vite** para aprender **22 idiomas** (ruta MCER
A1–C2) y **6 áreas del conocimiento** profesionales. Incluye acceso con cuenta,
suscripción con pago PSE, perfil con skills y seguimiento de progreso.

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

## 📁 Estructura

```
src/
  data/
    languages.js     # lista de idiomas
    vocabulary.js    # vocabulario y traducciones
  components/
    LanguageGrid.jsx # selección de idioma
    Browse.jsx       # explorar vocabulario
    Flashcards.jsx   # tarjetas de memoria
    Quiz.jsx         # cuestionario
  utils/
    speak.js         # síntesis de voz
  App.jsx
  main.jsx
  index.css
```

## ➕ Añadir más palabras o idiomas

- **Nuevo idioma:** agrégalo en `src/data/languages.js` y añade su clave (`code`) a cada palabra en `src/data/vocabulary.js`.
- **Nueva palabra/categoría:** edita `src/data/vocabulary.js` siguiendo el mismo formato.
