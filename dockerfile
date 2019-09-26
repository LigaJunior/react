# base image
FROM node:latest
# set working directory
RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package*.json /usr/src/app/

# install and cache app dependencies
RUN npm install --silent
RUN npm install react-scripts@3.0.1 -g --silent
RUN npm i array-merge-by-key
RUN npm i axios
RUN npm i bootstrap
RUN npm i jquery
RUN npm i mdbreact
RUN npm i react
RUN npm i react-bootstrap
RUN npm i react-dom
RUN npm i react-router-dom
RUN npm i react-scripts
RUN npm i reactstrap

ADD src /usr/src/app/src
ADD public /usr/src/app/public

RUN npm build

# start app
CMD ["npm", "start"]

