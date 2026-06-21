# CodeVector Assignment

A cursor-based pagination API built with [Bun](https://bun.sh), [Hono](https://hono.dev), and [Prisma 7](https://prisma.io).

## Structure

```
backend/
├── prisma/
│   ├── schema.prisma     # Database schema (Product model)
│   ├── seed.ts           # Seed 200K products with faker
│   └── migrations/       # Database migrations
├── src/
│   ├── index.ts          # App entry point
│   ├── config.ts         # Environment config
│   ├── lib/
│   │   ├── prisma.ts     # Prisma client singleton
│   │   └── cursor.ts     # Cursor encode/decode helpers
│   ├── routes/
│   │   └── products.route.ts  # GET /products endpoint
│   └── schemas/
│       └── product.schema.ts  # Zod validation schemas
├── prisma.config.ts      # Prisma config (datasource, seed)
├── tsconfig.json
└── package.json
```

## Getting Started

### Prerequisites

- [Bun](https://bun.sh) >= 1.3
- PostgreSQL database

### Setup

```bash
cd backend
bun install
```

Copy `.env` and set your `DATABASE_URL`:

```bash
cp .env.example .env   # or use existing .env
```

Push the schema and generate the client:

```bash
bunx prisma db push
bunx prisma generate
```

Seed 200,000 products:

```bash
bun run prisma/seed.ts
```

### Development

```bash
bun run dev
```

Server starts on `http://localhost:3000`.

## API

### `GET /products`

Query parameters:

| Param    | Type   | Default | Description |
| -------- | ------ | ------- | ----------- |
| `limit`  | number | 20      | Page size (1–100) |
| `cursor` | string | —       | Opaque cursor from previous response |
| `category` | string | —     | Filter by category |

Response:

```json
{
  "data": [ { "id": "uuid", "name": "...", "category": "...", "price": 99.99, "createdAt": "...", "updatedAt": "..." } ],
  "nextCursor": "base64-encoded-string",
  "hasMore": true
}
```

### `GET /health`

Returns `{ "status": "ok" }`.

## Tech Stack

| Tool        | Purpose          |
| ----------- | ---------------- |
| Bun         | Runtime & bundler |
| Hono        | HTTP framework    |
| Prisma 7    | ORM + migrations  |
| PostgreSQL  | Database          |
| Zod         | Request validation|
| @prisma/adapter-pg | PG driver adapter |
