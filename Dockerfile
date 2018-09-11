FROM node:8-alpine
WORKDIR /app

COPY . /app

RUN apk update && apk add yarn 
RUN yarn install

EXPOSE 8080

CMD ["node", "--harmony", "/app/app.js"]
