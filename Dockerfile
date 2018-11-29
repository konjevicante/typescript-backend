FROM node:10

COPY . /app

WORKDIR /app

RUN npm install -g typescript ts-node nodemon

RUN yarn install

EXPOSE 4000

CMD ["yarn", "dev"]