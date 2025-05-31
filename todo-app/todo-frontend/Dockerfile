# test-stage
FROM node:20 AS test-stage

WORKDIR /app
COPY . .

RUN npm ci
RUN npm run test

# build-stage
FROM node:20 AS build-stage

WORKDIR /app
COPY . .

ENV VITE_BACKEND_URL=http://localhost:3000

RUN npm ci
RUN npm run build

# production-stage
FROM nginx:1.25-alpine

COPY --from=build-stage /app/dist /usr/share/nginx/html
