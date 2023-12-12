FROM mhart/alpine-node

WORKDIR /usr/src/app

COPY package*  .

RUN npm install

COPY . .

EXPOSE 8081

CMD [ "npm", "start" ]