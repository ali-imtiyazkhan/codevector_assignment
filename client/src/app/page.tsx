"use client";

import { useState, useEffect } from "react";
import { fetchProducts, type Product, CATEGORIES } from "@/lib/api";

export default function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("");
  const [nextCursor, setNextCursor] = useState<string | null>(null);

  useEffect(() => {
    loadProducts();
  }, [activeCategory]);

  async function loadProducts() {
    setLoading(true);
    try {
      const res = await fetchProducts({ limit: 12, category: activeCategory || undefined });
      setProducts(res.data);
      setNextCursor(res.nextCursor);
    } catch {
      setProducts([]);
    } finally {
      setLoading(false);
    }
  }

  async function loadMore() {
    if (!nextCursor) return;
    try {
      const res = await fetchProducts({ limit: 12, cursor: nextCursor, category: activeCategory || undefined });
      setProducts((prev) => [...prev, ...res.data]);
      setNextCursor(res.nextCursor);
    } catch {}
  }

  return (
    <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
      <div className="mb-10 text-center">
        <h1 className="font-serif text-4xl leading-tight tracking-tight text-olive-950 sm:text-5xl">
          Product Catalog
        </h1>
        <p className="mt-3 text-base text-olive-500">Browse our curated selection of products.</p>
      </div>

      <div className="mb-8 flex flex-wrap justify-center gap-2">
        <button
          onClick={() => setActiveCategory("")}
          className={`rounded-full border px-4 py-1.5 text-xs font-medium transition-colors ${
            activeCategory === ""
              ? "border-olive-950 bg-olive-950 text-white"
              : "border-olive-200 text-olive-700 hover:bg-olive-100"
          }`}
        >
          All
        </button>
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`rounded-full border px-4 py-1.5 text-xs font-medium transition-colors ${
              activeCategory === cat
                ? "border-olive-950 bg-olive-950 text-white"
                : "border-olive-200 text-olive-700 hover:bg-olive-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="animate-pulse rounded-2xl border border-olive-200 p-6">
              <div className="mb-4 h-40 rounded-lg bg-olive-100" />
              <div className="mb-2 h-4 w-3/4 rounded bg-olive-100" />
              <div className="mb-2 h-3 w-1/2 rounded bg-olive-100" />
              <div className="h-5 w-1/4 rounded bg-olive-100" />
            </div>
          ))}
        </div>
      ) : products.length === 0 ? (
        <p className="py-20 text-center text-olive-500">No products found in this category.</p>
      ) : (
        <>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product) => (
              <div key={product.id} className="rounded-2xl border border-olive-200 p-6 shadow-sm transition-shadow hover:shadow-md">
                <div className="flex h-40 items-center justify-center rounded-lg bg-gradient-to-br from-olive-50 to-olive-100">
                  <span className="text-4xl text-olive-300">
                    {product.category === "Electronics" && "⚡"}
                    {product.category === "Clothing" && "👕"}
                    {product.category === "Books" && "📚"}
                    {product.category === "Home & Garden" && "🏡"}
                    {product.category === "Sports" && "⚽"}
                    {product.category === "Toys" && "🧸"}
                    {product.category === "Automotive" && "🚗"}
                    {product.category === "Health & Beauty" && "💄"}
                    {product.category === "Food & Grocery" && "🛒"}
                    {product.category === "Jewelry" && "💎"}
                  </span>
                </div>
                <div className="mt-4">
                  <p className="text-xs font-medium text-olive-500">{product.category}</p>
                  <h3 className="mt-1 text-sm font-semibold text-olive-950 line-clamp-2">{product.name}</h3>
                  <p className="mt-2 text-lg font-semibold text-olive-950">${product.price}</p>
                </div>
              </div>
            ))}
          </div>
          {nextCursor && (
            <div className="mt-10 text-center">
              <button
                onClick={loadMore}
                className="rounded-full border border-olive-200 px-6 py-3 text-sm font-semibold text-olive-950 transition-colors hover:bg-olive-100"
              >
                Load more
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
