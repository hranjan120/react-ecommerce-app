### STAGE 1: Build ###
FROM node:22.6.0-alpine3.19 AS build
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build
### STAGE 2: Run ###
FROM nginx:1.27.0-alpine3.19
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/dist/admin-panel /usr/share/nginx/html