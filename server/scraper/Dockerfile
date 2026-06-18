# Imagen oficial de Playwright: ya incluye Chromium y sus dependencias.
FROM mcr.microsoft.com/playwright:v1.45.0-jammy

WORKDIR /app

# Evita re-descargar navegadores en npm install (ya vienen en la imagen).
ENV PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1

COPY package.json ./
RUN npm install --omit=dev --ignore-scripts

COPY . .

EXPOSE 4000
CMD ["node", "server.js"]
