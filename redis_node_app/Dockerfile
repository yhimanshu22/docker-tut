# Use official Node.js image as base
FROM node:latest

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to container
COPY . .

# Expose port 9000 (or the port your Node.js application listens on)
EXPOSE 9000

# Command to run the Node.js application
CMD ["node", "app.js"]
