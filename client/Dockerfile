FROM node:16-alpine 
WORKDIR /app
COPY . .
RUN npm ci 
RUN npm install

EXPOSE 5000
CMD ["npx", "serve", "build"]