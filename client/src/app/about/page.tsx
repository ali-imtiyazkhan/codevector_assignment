import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="font-serif text-5xl leading-[1.1] tracking-tight text-olive-950 sm:text-6xl">
              About <span className="italic">Oatmeal</span>
            </h1>
            <div className="mt-6 text-base leading-relaxed text-olive-500">
              <p>We believe customer support should feel human — even when it&apos;s powered by a global network of low-wage workers.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-olive-200 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-serif text-3xl leading-[1.1] tracking-tight text-olive-950 sm:text-4xl">Our story</h2>
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-olive-500">
                <p>Founded in 2021, Oatmeal started as a simple idea: what if customer support software actually made things better instead of worse? We realized that most companies don&apos;t actually want to talk to their customers — they just want to appear like they do.</p>
                <p>So we built a platform that lets you automate, delegate, and outsource your way to a five-star support rating, all without actually having to care about your users.</p>
                <p>Today, we process over 2 million emails a week through our network of trained professionals stationed in 14 countries across three continents. Our secret sauce? A combination of clever automation, copy-paste templates, and a workforce that really, really needs the money.</p>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl border border-olive-200">
              <img src="/assets/img/photos-1-f7844a.webp" alt="Our team" className="w-full" width={800} height={600} />
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-olive-200 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-3xl leading-[1.1] tracking-tight text-olive-950 sm:text-4xl">Our values</h2>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              { title: "Efficiency over empathy", desc: "Why spend time caring when you can spend it optimizing? Every conversation is an opportunity to shave off precious seconds." },
              { title: "Transparency, mostly", desc: "We believe in being honest with our customers — unless honesty gets in the way of closing a deal or retaining a subscription." },
              { title: "Global solidarity", desc: "We provide dignified employment to people around the world who pretend to be AI chatbots so that Western founders can sleep better at night." },
            ].map((v) => (
              <div key={v.title} className="rounded-2xl border border-olive-200 p-8">
                <h3 className="text-lg font-semibold text-olive-950">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-olive-500">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-olive-200 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto flex max-w-2xl flex-col items-center gap-8 text-center">
            <h2 className="font-serif text-3xl leading-[1.1] tracking-tight text-olive-950 sm:text-4xl">Want to join the team?</h2>
            <p className="text-sm leading-relaxed text-olive-500">We&apos;re always looking for talented individuals who are comfortable with moral ambiguity and working 14-hour shifts.</p>
            <Link href="#" className="inline-flex items-center gap-2 rounded-full bg-olive-950 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-olive-800">
              View open positions
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
