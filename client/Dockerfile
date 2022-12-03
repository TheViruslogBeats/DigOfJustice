FROM node:latest

WORKDIR /app/digofjustice

COPY ./package.json .
COPY . .

RUN npm i
RUN npm run build

EXPOSE 80

CMD ["npm","run","start"]
