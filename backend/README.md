# CodeVector Product Catalog — Backend

A high-performance product catalog API with cursor-based pagination. Built with Hono, Prisma, and PostgreSQL (Neon).

## Tech Stack

- **Runtime:** Bun
- **Framework:** Hono
- **ORM:** Prisma 7 with `@prisma/adapter-pg`
- **Database:** PostgreSQL (Neon)
- **Validation:** Zod + `@hono/zod-validator`

## Getting Started

### 1. Install dependencies

```bash
bun install
```

### 2. Set up database

Create a `.env` file in the backend root:

```env
DATABASE_URL="postgresql://user:password@host/db?sslmode=require"
```

You can get a free PostgreSQL database from [Neon](https://neon.tech) or [Supabase](https://supabase.com).

### 3. Push schema and seed data

```bash
# Push the Prisma schema to your database
bun run db:push

# Seed 200,000 products (takes ~30-60 seconds)
bun run db:seed
```

### 4. Start the server

```bash
# Development with hot reload
bun run dev

# Production
bun run start
```

Server runs on `http://localhost:3000` by default (override with `PORT` env var).

## API

### `GET /health`

Returns `{ "status": "ok" }`.

### `GET /products`

Paginated product listing, newest first.

| Query Param | Type | Default | Description |
|---|---|---|---|
| `limit` | number | `20` | Products per page (1–100) |
| `cursor` | string | — | Base64-encoded cursor from previous response |
| `category` | string | — | Filter by exact category name |

**Response:**

```json
{
  "data": [
    {
      "id": "uuid",
      "name": "Product Name",
      "category": "Electronics",
      "price": "49.99",
      "createdAt": "2024-06-22T...",
      "updatedAt": "2024-06-22T..."
    }
  ],
  "nextCursor": "base64string...",
  "hasMore": true
}
```

**Categories:** Electronics, Clothing, Books, Home & Garden, Sports, Toys, Automotive, Health & Beauty, Food & Grocery, Jewelry

### Pagination behavior

Uses cursor-based pagination with `createdAt DESC, id DESC` ordering. This means:
- New items added during browsing won't cause duplicates or skipped pages
- Each page starts from the exact position of the previous page's last item
- Composite indexes on `[createdAt DESC, id DESC]` and `[category, createdAt DESC, id DESC]` ensure fast queries at any depth

## Scripts

| Script | Description |
|---|---|
| `bun run dev` | Dev server with hot reload |
| `bun run start` | Production start |
| `bun run db:push` | Push schema to database |
| `bun run db:seed` | Seed 200,000 products |
| `bun run db:studio` | Open Prisma Studio |

## Deploying to Render

1. Create a new **Web Service** on Render
2. Set **Runtime** to `Node` (Bun is detected via the lockfile)
3. Build command: `bun install && bunx prisma db push`
4. Start command: `bun run start`
5. Add environment variable: `DATABASE_URL` (your Neon/Supabase connection string)
