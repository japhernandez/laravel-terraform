FROM node:14.18.0-alpine

WORKDIR /app

COPY package*.json ./

COPY . .

RUN npm install --production

EXPOSE 3000

CMD ["npm", "start"]