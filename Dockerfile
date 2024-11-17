# syntax = docker/dockerfile:1

# Adjust NODE_VERSION as desired
ARG NODE_VERSION=20.18.0
FROM node:${NODE_VERSION}-slim as base

LABEL fly_launch_runtime="Node.js"

# Set working directory
WORKDIR /app

# Set production environment
ENV NODE_ENV="production"

# Install pnpm
ARG PNPM_VERSION=latest
RUN npm install -g pnpm@$PNPM_VERSION

# Throw-away build stage to reduce size of final image
FROM base as build

# Install necessary packages for building dependencies
RUN apt-get update -qq && \
    apt-get install --no-install-recommends -y build-essential node-gyp pkg-config python-is-python3 && \
    rm -rf /var/lib/apt/lists/*

# Copy workspace root files (e.g., package.json, pnpm-lock.yaml)
COPY package.json pnpm-lock.yaml ./

# Install workspace dependencies without hoisting to a global level
RUN pnpm install --frozen-lockfile

# Set working directory to the `web` folder (specific to the Next.js app)
WORKDIR /app/web

# Install and build the `web` app
RUN pnpm install --frozen-lockfile
RUN pnpm build

# Final stage for running the app
FROM base

# Copy only the built application from the build stage
COPY --from=build /app /app

# Set working directory to the `web` folder for serving the app
WORKDIR /app/web

# Expose the port Next.js server runs on
EXPOSE 3000

# Start the Next.js server
CMD ["pnpm", "start"]
