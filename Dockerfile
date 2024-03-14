FROM node:21.1-alpine3.18

WORKDIR /app

COPY package.json .

RUN npm install

EXPOSE 5173

COPY . .

CMD ["npm", "run", "dev"]