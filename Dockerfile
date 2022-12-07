FROM node:latest

WORKDIR /app/digofjustice

COPY ./package.json .
COPY . .

RUN npm i

EXPOSE 5000

CMD ["npm","run","serverDev"]
