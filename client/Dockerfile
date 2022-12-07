FROM node:lts-alpine
WORKDIR /APP
COPY . .
RUN npm install
RUN npm run build


CMD ["npm", "run", "preview"]
