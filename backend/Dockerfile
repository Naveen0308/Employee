FROM node:18-alpine

WORKDIR /usr/src/app

COPY package*  .

RUN npm install

RUN npm install -g nodemon

COPY . .

EXPOSE 8081

CMD [ "npm", "start" ]