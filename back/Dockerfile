FROM node:latest
WORKDIR /app
COPY ./express-gen-ts/ .
RUN npm install
EXPOSE 3000
ENTRYPOINT npm run dev