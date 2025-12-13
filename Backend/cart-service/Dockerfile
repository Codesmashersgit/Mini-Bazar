# Use Node.js LTS version
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy application code
COPY . .

# Expose port
EXPOSE 4007

# Set environment to production
ENV NODE_ENV=production

# Start the service
CMD ["node", "server.js"]