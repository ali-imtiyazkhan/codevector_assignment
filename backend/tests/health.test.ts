import { describe, it, expect } from "@jest/globals";
import { Hono } from "hono";

const app = new Hono();
app.get("/health", (c) => c.json({ status: "ok" }));

describe("health endpoint", () => {
  it("should return status ok", async () => {
    const res = await app.request("/health");
    expect(res.status).toBe(200);
    const body = await res.json();
    expect(body).toEqual({ status: "ok" });
  });
});
