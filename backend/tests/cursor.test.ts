import { describe, it, expect } from "@jest/globals";
import { encodeCursor, decodeCursor } from "../src/lib/cursor";

describe("cursor", () => {
  it("should encode and decode a cursor", () => {
    const date = new Date("2024-06-22T12:00:00.000Z");
    const id = "123e4567-e89b-12d3-a456-426614174000";

    const encoded = encodeCursor(date, id);
    expect(typeof encoded).toBe("string");
    expect(encoded.length).toBeGreaterThan(0);

    const decoded = decodeCursor(encoded);
    expect(decoded.createdAt).toBe(date.toISOString());
    expect(decoded.id).toBe(id);
  });

  it("should produce unique cursors for different inputs", () => {
    const a = encodeCursor(new Date("2024-01-01"), "id-1");
    const b = encodeCursor(new Date("2024-06-22"), "id-2");
    expect(a).not.toBe(b);
  });
});
