FROM node:16-alpine 
WORKDIR /app
COPY . .
RUN npm ci 
RUN npm install

ENV NODE_ENV development
EXPOSE 5000
CMD ["npm", "run", "dev"]