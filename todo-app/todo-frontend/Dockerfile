# build-stage
FROM node:20 AS build-stage

WORKDIR /app
COPY . .

ENV VITE_BACKEND_URL=http://localhost:8080/api

RUN npm ci
RUN npm run build

# production-stage
FROM nginx:1.25-alpine

COPY --from=build-stage /app/dist /usr/share/nginx/html
