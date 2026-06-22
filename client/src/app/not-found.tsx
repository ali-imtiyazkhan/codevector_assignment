import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex grow flex-col items-center justify-center px-6 py-24 text-center">
      <div className="font-serif text-8xl leading-none text-olive-200">404</div>
      <h1 className="mt-6 font-serif text-4xl leading-[1.1] tracking-tight text-olive-950 sm:text-5xl">
        Page not <span className="italic">found</span>
      </h1>
      <p className="mt-4 max-w-md text-base leading-relaxed text-olive-500">
        Sorry, the page you&apos;re looking for doesn&apos;t exist. It may have been moved, deleted, or never existed in the first place.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-olive-950 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-olive-800"
      >
        Go back home
      </Link>
    </section>
  );
}
