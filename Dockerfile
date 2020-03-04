FROM node:10
WORKDIR /usr/src/app
COPY package*.json ./ 
RUN npm install
COPY . . 

# start app 
EXPOSE 3000
CMD npm start