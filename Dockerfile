FROM node:16-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build \
    && npm prune --production

ENV NODE_ENV=production

CMD ["node", "dist/main.js"]

EXPOSE 3001
