FROM node:argon

# install express-generator and webpack
RUN npm install -g express-generator webpack


# Create app directory
RUN mkdir -p /usr/src/fitfab
WORKDIR /usr/src/fitfab

# Install app dependencies
# Bundle app source
COPY . /usr/src/fitfab
RUN npm install

#EXPOSE 3000

# default command, but this command can be overwiting
# by docker-compose command
#CMD [ "npm", "start" ]