FROM node:lts-alpine as node
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build:ssr

FROM node:lts-alpine
LABEL maintainer="julien.sie@kiam.fr"
WORKDIR /app
COPY --from=node /app/dist/ /app/dist/
EXPOSE 9000
CMD ["node", "dist/kiam-welcome/server/main.js"]