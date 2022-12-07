FROM node:lts-alpine
WORKDIR /APP
COPY . .
RUN npm install
RUN npm run build
ENV NODE_ENV production
EXPOSE 4173

CMD ["npm", "run", "preview"]