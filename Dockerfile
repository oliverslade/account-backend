FROM node:9
WORKDIR /account-backend
COPY package.json /account-backend
RUN npm install
COPY . /account-backend
CMD node server.js
EXPOSE 8070
