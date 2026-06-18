# Integración de Backend y Pago PSE

La app funciona hoy **100 % en el navegador** con datos simulados en `localStorage`
(autenticación, suscripción y pago PSE). Esto permite desplegarla como demo, pero
**un pago real no puede confirmarse en el front-end**: requiere un servidor. Este
documento describe cómo conectar un backend real.

## Arquitectura objetivo

```
React (este repo)  ──HTTPS──►  API (Node/Express)  ──►  Base de datos (PostgreSQL)
        │                            │
        │                            └──►  Pasarela de pago (Wompi / ePayco / PayU)
        │                                        │
        └──────────  redirección al banco PSE ◄──┘
                                                 │
                       webhook firmado ──────────┘  (confirma el pago en el servidor)
```

- **Front-end:** ya incluye el cliente [`src/api/client.js`](src/api/client.js). Solo hay que
  definir `VITE_API_URL` en `.env` y sustituir, en `utils/auth.js` y `utils/progress.js`,
  las operaciones de `localStorage` por las llamadas de `api`.
- **Backend:** esqueleto de referencia en [`server/index.example.js`](server/index.example.js).
- **Variables de entorno:** ver [`.env.example`](.env.example).

## Endpoints de la API

| Método | Ruta | Descripción |
|--------|------|-------------|
| POST | `/api/auth/register` | Crear cuenta. Devuelve JWT. |
| POST | `/api/auth/login` | Iniciar sesión. Devuelve JWT. |
| GET | `/api/auth/me` | Datos del usuario autenticado. |
| GET | `/api/subscription` | Estado de la suscripción. |
| POST | `/api/payments/pse` | Inicia un pago PSE; devuelve la URL del banco. |
| POST | `/api/payments/webhook` | La pasarela confirma el pago (firmado). |
| GET/PUT | `/api/progress` | Leer/guardar progreso y skills. |

## Flujo de pago PSE (Colombia)

PSE (Pagos Seguros en Línea) se integra a través de una pasarela autorizada como
**Wompi**, **ePayco** o **PayU**. El flujo correcto es:

1. El usuario pulsa **Pagar con PSE** en `Paywall.jsx`.
2. El front llama a `POST /api/payments/pse` con banco, tipo de persona y documento.
3. El backend crea la transacción en la pasarela y devuelve la `redirectUrl` del banco.
4. El usuario completa el pago en su banco y vuelve a la app.
5. La pasarela envía un **webhook firmado** a `POST /api/payments/webhook`; el backend
   verifica la firma y, si el estado es `APPROVED`, **activa la suscripción**.
6. La app consulta `GET /api/subscription` y da acceso.

> ⚠️ Nunca actives la suscripción solo con la respuesta del navegador: un usuario podría
> falsearla. La fuente de verdad es el webhook validado en el servidor.

## Esquema de base de datos (mínimo)

```sql
CREATE TABLE users (
  id            UUID PRIMARY KEY,
  name          TEXT,
  email         TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  subscription_until TIMESTAMPTZ
);

CREATE TABLE payments (
  id         TEXT PRIMARY KEY,         -- id de la transacción en la pasarela
  user_id    UUID REFERENCES users(id),
  amount     INTEGER NOT NULL,         -- en centavos (COP)
  status     TEXT NOT NULL,            -- PENDING | APPROVED | DECLINED
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE progress (
  user_id    UUID PRIMARY KEY REFERENCES users(id),
  data       JSONB NOT NULL            -- mismo formato que utils/progress.js
);
```

## Pasos para activar el backend

1. `cd server`, instalar dependencias (ver cabecera de `index.example.js`) y renombrar a `index.js`.
2. Implementar el acceso a la base de datos y el SDK de la pasarela elegida.
3. Configurar el `.env` del backend (DB, JWT, llaves de la pasarela).
4. En el front, crear `.env` con `VITE_API_URL` y conmutar `auth.js`/`progress.js` al `api`.
5. Registrar la URL del webhook en el panel de la pasarela.
