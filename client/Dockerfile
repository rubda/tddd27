# Using node as base image
FROM node

# Declaring myself as the maintainer of this Dockerfile
MAINTAINER Ruben Das <rubendas.rd@gmail.com>

# Creating a directory where the app will be placed
RUN mkdir -p /usr/src/app

# Moving into that directory
WORKDIR /usr/src/app

# Copying dependency structure
COPY package.json /usr/src/app

# Install dependecies
RUN npm install

# Copying needed code
COPY . /usr/src/app

# Expose React port
EXPOSE 3001

# Serve the app
CMD ["npm", "start"]
