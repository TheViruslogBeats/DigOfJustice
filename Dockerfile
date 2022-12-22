FROM node:latest

COPY ./package.json .
COPY . .

RUN npm i

EXPOSE 5000

CMD ["npm","run","server"]
