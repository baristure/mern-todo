FROM node:14-alpine as build

WORKDIR /frontend

COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# production environment
FROM nginx:stable-alpine
 
COPY --from=build /frontend/build /usr/share/nginx/html

COPY --from=build /frontend/nginx.conf /etc/nginx/conf.d/default.conf 

#COPY ./nginx.conf /etc/nginx/conf.d/default.conf
#COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]