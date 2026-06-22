import { describe, it, expect } from "@jest/globals";
import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { getProductSchema } from "../src/schemas/product.schema";

describe("products schema validation", () => {
  it("should default limit to 20", async () => {
    const app = new Hono();
    app.get("/test", zValidator("query", getProductSchema), (c) => {
      const { limit } = c.req.valid("query");
      return c.json({ limit });
    });

    const res = await app.request("/test");
    const body = await res.json() as Record<string, unknown>;
    expect(body.limit).toBe(20);
  });

  it("should accept valid limit", async () => {
    const app = new Hono();
    app.get("/test", zValidator("query", getProductSchema), (c) => {
      const { limit } = c.req.valid("query");
      return c.json({ limit });
    });

    const res = await app.request("/test?limit=5");
    const body = await res.json() as Record<string, unknown>;
    expect(body.limit).toBe(5);
  });

  it("should reject limit over 100", async () => {
    const app = new Hono();
    app.get("/test", zValidator("query", getProductSchema), (c) => {
      const { limit } = c.req.valid("query");
      return c.json({ limit });
    });

    const res = await app.request("/test?limit=200");
    expect(res.status).toBe(400);
  });

  it("should accept valid category", async () => {
    const app = new Hono();
    app.get("/test", zValidator("query", getProductSchema), (c) => {
      const { category } = c.req.valid("query");
      return c.json({ category });
    });

    const res = await app.request("/test?category=Electronics");
    const body = await res.json() as Record<string, unknown>;
    expect(body.category).toBe("Electronics");
  });

  it("should accept optional cursor", async () => {
    const app = new Hono();
    app.get("/test", zValidator("query", getProductSchema), (c) => {
      const { cursor } = c.req.valid("query");
      return c.json({ cursor });
    });

    const res = await app.request("/test?cursor=abcd");
    const body = await res.json() as Record<string, unknown>;
    expect(body.cursor).toBe("abcd");
  });
});
