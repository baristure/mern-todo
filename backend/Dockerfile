FROM node:14-alpine

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .
## show files to checkout the copy command
RUN ls -l

EXPOSE 5000

CMD [ "node", "server.js" ]