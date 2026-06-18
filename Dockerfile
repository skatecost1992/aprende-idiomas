# --- Etapa 1: compilar la app con Vite ---
FROM node:20-alpine AS build
WORKDIR /app

COPY package.json ./
RUN npm install

COPY . .

# La URL del scraper se inyecta en tiempo de compilación (variables VITE_*).
ARG VITE_RATES_API
ENV VITE_RATES_API=$VITE_RATES_API
RUN npm run build

# --- Etapa 2: servir los archivos estáticos con Nginx ---
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
