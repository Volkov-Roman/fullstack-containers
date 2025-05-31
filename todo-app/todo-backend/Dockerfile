FROM node:20

WORKDIR /usr/src/app
COPY . .

RUN npm ci --only=production

ENV NODE_ENV=production

CMD ["node", "bin/www"]
