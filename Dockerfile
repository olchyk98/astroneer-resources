# syntax = docker/dockerfile:1

ARG NODE_VERSION=20
FROM node:${NODE_VERSION}-slim as base

LABEL fly_launch_runtime="Next.js"

WORKDIR /app

ENV NODE_ENV="production"

FROM base as build

RUN apt-get update -qq && \
    apt-get install --no-install-recommends -y build-essential pkg-config python-is-python3

RUN corepack enable && corepack prepare pnpm@latest --activate

# Copy .npmrc file
COPY .npmrc ./

COPY pnpm-workspace.yaml ./
COPY package.json ./
COPY pnpm-lock.yaml ./
COPY types ./types
COPY scrapper ./scrapper
COPY web ./web

# Install dependencies with the new node-linker setting
RUN pnpm install --force

# Build all workspace packages
WORKDIR /app/web

RUN pnpm run build

RUN pnpm prune --prod

FROM base

COPY --from=build /app/web/.next/standalone /app
COPY --from=build /app/web/.next/static /app/web/.next/static
COPY --from=build /app/web/public /app/web/public

EXPOSE 3000
CMD [ "node", "/app/web/server.js" ]
