FROM node:20

WORKDIR /app
COPY . .
RUN npm install --production

ENV NODE_ENV=production

CMD ["node", "index.js"]
