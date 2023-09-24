#stage 1
FROM node:18 as builder
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
#EXPOSE 80
#CMD ["npm", "start"]
RUN npm install -g @angular/cli
RUN ng build

#stage 2
FROM nginx:1.19.0
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /app/dist/myportfolio .
ENTRYPOINT [ "nginx","-g","daemon off;"]
