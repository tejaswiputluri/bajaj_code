FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci

# Copy application files
COPY server.js ./
COPY public ./public

# Expose port
EXPOSE 7860

# Set environment variable for Hugging Face Spaces
ENV PORT=7860

# Start the server
CMD ["node", "server.js"]
