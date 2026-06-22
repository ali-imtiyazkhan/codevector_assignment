import Link from "next/link";

export default function PricingPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-12 lg:px-8">
      <h1 className="font-serif text-4xl leading-tight tracking-tight text-olive-950">Pricing</h1>
      <p className="mt-3 text-base text-olive-500">Browse our catalog for free. Premium plans for power users.</p>
      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        <div className="rounded-2xl border border-olive-200 p-6">
          <h3 className="text-lg font-semibold text-olive-950">Free</h3>
          <p className="mt-1 text-3xl font-semibold text-olive-950">$0</p>
          <p className="mt-4 text-sm text-olive-500">Browse all products, filter by category</p>
        </div>
        <div className="rounded-2xl border border-olive-950 bg-olive-950 p-6 text-white">
          <h3 className="text-lg font-semibold">Pro</h3>
          <p className="mt-1 text-3xl font-semibold">$29<span className="text-sm font-normal text-olive-300">/mo</span></p>
          <p className="mt-4 text-sm text-olive-300">Advanced filters, price history, API access</p>
        </div>
        <div className="rounded-2xl border border-olive-200 p-6">
          <h3 className="text-lg font-semibold text-olive-950">Enterprise</h3>
          <p className="mt-1 text-3xl font-semibold text-olive-950">$199<span className="text-sm font-normal text-olive-400">/mo</span></p>
          <p className="mt-4 text-sm text-olive-500">Unlimited API, bulk export, SSO</p>
        </div>
      </div>
    </div>
  );
}
