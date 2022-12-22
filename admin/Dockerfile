FROM node:latest

COPY ./package.json .
COPY . .

RUN npm i
RUN npm run build

EXPOSE 4000

CMD ["npm","run","start"]
