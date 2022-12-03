FROM node:16-alpine AS base

WORKDIR /app/conf-app/DigOfjustice/client

FROM base AS dependencies

COPY package*.json ./

RUN npm install 

FROM dependencies AS build

WORKDIR /app/conf-app/DigOfjustice/client

COPY . . 

RUN npm i && npm run build

FROM node:16-alpine AS realese

WORKDIR /app/conf-app/DigOfjustice/client

COPY --from=dependencies app/conf-app/DigOfjustice/client/package*.json ./

RUN npm i

COPY --from=build /app/conf-app/DigOfjustice/client ./

EXPOSE 80

CMD [ "npm", "run", "start" ]
