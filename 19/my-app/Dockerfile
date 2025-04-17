# Dockerfile for local development

FROM node:22-slim

WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm install

COPY . .

EXPOSE 5173
EXPOSE 24678

CMD ["npm", "run", "dev"]
