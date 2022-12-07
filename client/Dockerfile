FROM node:lts-alpine
WORKDIR /APP
ADD . .
RUN npm install
RUN npm run build


CMD ["npm", "run", "preview"]
