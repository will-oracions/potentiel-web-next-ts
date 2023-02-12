FROM node:19-alpine

WORKDIR /app

COPY package.json .

RUN yarn install

COPY . /app

RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]