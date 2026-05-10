# -----------------------
# 1. Builder stage
# -----------------------
FROM node:20-alpine AS builder

WORKDIR /app

# Enable pnpm (stable version)
RUN corepack enable && corepack prepare pnpm@9.12.0 --activate

# Copy dependency files first
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy source code
COPY . .

# Build Next.js app
RUN pnpm run build


# -----------------------
# 2. Runner stage
# -----------------------
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

# Enable pnpm in runtime too (needed for start command)
RUN corepack enable && corepack prepare pnpm@9.12.0 --activate

# Copy only necessary output from builder
COPY --from=builder /app/package.json ./
COPY --from=builder /app/pnpm-lock.yaml ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.* ./

EXPOSE 3000

CMD ["pnpm", "run", "start"]