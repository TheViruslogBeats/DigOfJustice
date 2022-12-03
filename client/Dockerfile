FROM node:16-alpine AS base

WORKDIR /client

FROM base AS dependencies

COPY package*.json ./

RUN npm install 

FROM dependencies AS build

WORKDIR /client

COPY . .

RUN npm i && npm run build

FROM node:16-alpine AS realese

WORKDIR /client

COPY --from=dependencies ./package.json ./

RUN npm i

COPY --from=build . .

EXPOSE 80

CMD [ "npm", "run", "start" ]

