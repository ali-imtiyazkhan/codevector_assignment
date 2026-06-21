import { PrismaClient } from "../generated/client.ts";
import { PrismaPg } from "@prisma/adapter-pg";

const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };

const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    adapter: new PrismaPg({ connectionString: process.env["DATABASE_URL"] }),
  });

globalForPrisma.prisma = prisma;

export default prisma;