FROM node:10.15.3-stretch

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .