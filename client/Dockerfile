FROM node:lts-alpine
WORKDIR /APP
COPY package.json .
RUN npm install
COPY . .

CMD ["npm", "run", "dev"]