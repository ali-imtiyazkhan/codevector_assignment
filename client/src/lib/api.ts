export interface Product {
  id: string;
  name: string;
  category: string;
  price: string;
  createdAt: string;
  updatedAt: string;
}

export interface ProductsResponse {
  data: Product[];
  nextCursor: string | null;
  hasMore: boolean;
}

const BASE_URL = "/api";

export async function fetchProducts(params?: {
  limit?: number;
  cursor?: string;
  category?: string;
}): Promise<ProductsResponse> {
  const searchParams = new URLSearchParams();
  if (params?.limit) searchParams.set("limit", String(params.limit));
  if (params?.cursor) searchParams.set("cursor", params.cursor);
  if (params?.category) searchParams.set("category", params.category);

  const res = await fetch(`${BASE_URL}/products?${searchParams}`);
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
}

export async function fetchHealth(): Promise<{ status: string }> {
  const res = await fetch(`${BASE_URL}/health`);
  if (!res.ok) throw new Error("Failed to fetch health");
  return res.json();
}

export const CATEGORIES = [
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
] as const;
