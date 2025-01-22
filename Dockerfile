# Use the official Ubuntu base image
FROM ubuntu:focal

# Install dependencies in a single RUN statement to minimize layers and improve caching
RUN apt-get update && \
    apt-get install -y curl nodejs ffmpeg && \
    curl -sL https://deb.nodesource.com/setup_18.x | bash - && \
    apt-get install -y nodejs && \
    apt-get clean

# Set the working directory for the application
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json first for better caching during builds
COPY package*.json ./

# Install npm dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Set the default command to start the application
CMD ["npm", "start"]
