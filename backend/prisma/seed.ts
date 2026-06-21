import { PrismaClient } from "../src/generated/client.ts";
import { PrismaPg } from "@prisma/adapter-pg";
import { faker } from "@faker-js/faker";

const adapter = new PrismaPg({ connectionString: process.env["DATABASE_URL"] });
const prisma = new PrismaClient({ adapter });

const CATEGORIES = [
  "Electronics",
  "Clothing",
  "Books",
  "Home & Garden",
  "Sports",
  "Toys",
  "Automotive",
  "Health & Beauty",
  "Food & Grocery",
  "Jewelry",
];

const TOTAL = 200_000;
const BATCH_SIZE = 5_000;

async function main() {
  console.log(" Starting seed...");

  const batches = TOTAL / BATCH_SIZE;

  for (let i = 0; i < batches; i++) {
    const data = Array.from({ length: BATCH_SIZE }, () => ({
      name: faker.commerce.productName(),
      category: faker.helpers.arrayElement(CATEGORIES),
      price: Number(faker.commerce.price({ min: 1, max: 10000 })),
      createdAt: faker.date.between({
        from: "2023-01-01",
        to: "2024-12-31",
      }),
    }));

    await prisma.product.createMany({ data });

    console.log(` Batch ${i + 1}/${batches} inserted (${(i + 1) * BATCH_SIZE} rows)`);
  }

  console.log(" Seed complete. 200,000 products inserted.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
