import "dotenv/config"
import { defineConfig, env } from "@prisma/config";
export default defineConfig({
  migrations: {
    seed: 'bun ./prisma/seed.ts',
  },
  schema: "./prisma/schema.prisma",
  datasource: {
    url: env("DATABASE_URL")
  }
})