import Link from "next/link";

const CATEGORIES = ["Electronics", "Clothing", "Books", "Home & Garden", "Sports", "Toys", "Automotive", "Health & Beauty", "Food & Grocery", "Jewelry"];

const testimonials = [
  { quote: "Oatmeal has completely transformed our customer support operations. To be fair, we weren't doing any customer support at all so the bar was pretty low.", name: "Jordan Rogers", role: "Founder at Anomaly", avatar: "avatars-10-size-160-69e1fe.webp" },
  { quote: "We use Oatmeal's automation features to make cancellation requests disappear into a black hole, improving our retention rates by over 300%.", name: "Lynn Marshall", role: "Founder at Pine Labs", avatar: "avatars-15-size-160-ae9cb1.webp" },
  { quote: "I've been using the spare time that Oatmeal has freed up to work not just one, but two other jobs, all while hitting my core KPIs. My bosses have no idea.", name: "Rajat Singh", role: "Head of Support at Concise", avatar: "avatars-13-size-160-9a9095.webp" },
  { quote: "Oatmeal has given us key insights into how much our customers absolutely hate using our product and how we can improve it to stop them from leaving us.", name: "John Walters", role: "CPO at Orbital", avatar: "avatars-12-size-160-74c870.webp" },
  { quote: "As a solo founder, Oatmeal has been a lifesaver. It makes it look like Looply is an actual company with multiple employees, when in reality it's just me and an AI.", name: "Noah Gold", role: "CEO at Looply", avatar: "avatars-11-size-160-b06429.webp" },
  { quote: "Thanks to Oatmeal, we've managed to cut our support costs in half by laying off dozens of employees, while still improving response times and customer satisfaction.", name: "Mark Levinson", role: "COO at Quirk", avatar: "avatars-14-size-160-c3c35c.webp" },
];

const faqs = [
  { q: "Do I need a credit card to start the free trial?", a: "Yes, but don't worry, you won't be charged until the trial period is over. We won't send you an email reminding you when this happens because we are really hoping you'll forget and we can keep charging you until your cards expire." },
  { q: "Can my whole team use the same inbox?", a: "Yes, the more the merrier! Oatmeal works best when your entire company has access. We will charge you per additional seat, but we won't tell you about this until you get your invoice." },
  { q: "Is the AI agent actually a bunch of people in India?", a: "Not just India! We have people in lots of countries around the world pretending to be an AI, including some that are currently under sanctions, so we can't legally mention them here." },
  { q: "Does Oatmeal replace my email client?", a: "Absolutely. The idea is that we transition you away from email entirely, so you become completely dependent on our service. Like a parasite living off a host." },
];

const logos = [
  { dark: "logos-9-color-black_height-32-f75701.svg", light: "logos-9-color-white_height-32-e4c54c.svg", w: 51 },
  { dark: "logos-10-color-black_height-32-a98c64.svg", light: "logos-10-color-white_height-32-c9724f.svg", w: 70 },
  { dark: "logos-11-color-black_height-32-2e30f4.svg", light: "logos-11-color-white_height-32-f5218b.svg", w: 100 },
  { dark: "logos-12-color-black_height-32-c76fd4.svg", light: "logos-12-color-white_height-32-022e02.svg", w: 85 },
  { dark: "logos-13-color-black_height-32-3544f9.svg", light: "logos-13-color-white_height-32-bd7efa.svg", w: 75 },
  { dark: "logos-8-color-black_height-32-33cded.svg", light: "logos-8-color-white_height-32-eeb29c.svg", w: 85 },
];

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <StatsSection />
      <TestimonialsSection />
      <FAQsSection />
      <PricingSection />
      <CTASection />
    </>
  );
}

function HeroSection() {
  return (
    <section className="overflow-hidden" id="hero">
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-8 sm:pb-32 lg:flex lg:px-8 lg:py-16">
        <div className="flex flex-col gap-10 lg:max-w-lg xl:max-w-xl">
          <div className="flex flex-col gap-6">
            <a href="#" className="inline-flex w-fit items-center gap-1.5 rounded-full border border-olive-200 bg-white px-4 py-1.5 text-xs font-medium text-olive-700 shadow-sm transition-colors hover:bg-olive-100">
              <span className="rounded-full bg-olive-950 px-1.5 py-0.5 text-[10px] font-semibold text-white">New</span>
              Oatmeal raises 80M Series A funding
              <svg width="5" height="8" viewBox="0 0 5 8" fill="currentColor" className="size-3">
                <path fillRule="evenodd" clipRule="evenodd" d="M.22.22a.75.75 0 011.06 0l3.25 3.25a.75.75 0 010 1.06L1.28 7.78A.75.75 0 01.22 6.72L2.94 4 .22 1.28a.75.75 0 010-1.06z" />
              </svg>
            </a>
            <h1 className="font-serif text-5xl leading-[1.1] tracking-tight text-olive-950 sm:text-6xl">
              Customer support that feels like a <span className="italic">conversation.</span>
            </h1>
            <div className="max-w-md text-base leading-relaxed text-olive-600">
              <p>Simplify your shared inbox, collaborate effortlessly, and give every customer a reply that feels personal — even if it was generated by a bot.</p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="#" className="inline-flex items-center gap-2 rounded-full bg-olive-950 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-olive-800">
                Start free trial
              </Link>
              <Link href="#" className="inline-flex items-center gap-2 rounded-full border border-olive-200 px-6 py-3 text-sm font-semibold text-olive-950 transition-colors hover:bg-olive-100">
                See how it works
                <svg width="13" height="7" viewBox="0 0 13 7" fill="none" strokeWidth="1" className="size-4">
                  <path d="M12.5049 3.49512L0.504883 3.49512" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M9.5 6.5L12.5 3.5L9.5 0.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-16 lg:mt-0 lg:ml-16 lg:flex-1">
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-b from-olive-100/50 to-transparent" />
            <div className="relative overflow-hidden rounded-2xl border border-olive-200 shadow-xl">
              <img src="/assets/img/screenshots-1-38d99f.webp" alt="Screenshot" className="w-full" width={3440} height={1990} />
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-12 gap-y-8 px-6 pb-16 lg:px-8">
        {logos.map((logo) => (
          <span key={logo.w} className="flex shrink-0 items-center">
            <img src={`/assets/img/${logo.dark}`} alt="" className="h-8 w-auto" style={{ width: logo.w }} height={32} />
          </span>
        ))}
      </div>
    </section>
  );
}

function FeaturesSection() {
  return (
    <section className="overflow-hidden py-24" id="features">
      <div className="mx-auto max-w-7xl px-6 pb-8 lg:px-8">
        <div className="mx-auto flex max-w-2xl flex-col gap-6 text-center">
          <div className="flex flex-col gap-6">
            <div className="text-sm font-semibold text-olive-500">Powerful features</div>
            <h2 className="font-serif text-4xl leading-[1.1] tracking-tight text-olive-950 sm:text-5xl">
              Everything you need to deliver personal, organized, and delightful support.
            </h2>
          </div>
          <div className="mx-auto max-w-md text-base leading-relaxed text-olive-500">
            <p>Work smarter, reply faster, and keep every customer conversation right where it belongs — in one simple inbox.</p>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="flex flex-col gap-8" data-reveal>
            <div className="overflow-hidden rounded-2xl border border-olive-200 shadow-lg">
              <img src="/assets/img/screenshots-1-left-1670_top-1408-4cdeaf.webp" alt="" className="w-full" width={1670} height={1408} />
            </div>
            <div className="flex flex-col gap-4">
              <div>
                <h3 className="text-xl font-semibold text-olive-950">Shared Inbox</h3>
                <div className="mt-2 max-w-md text-sm leading-relaxed text-olive-500">
                  <p>Keep every customer conversation in one clean, collaborative inbox. A single source of truth is much easier to ignore.</p>
                </div>
              </div>
              <a href="#" className="inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-olive-950 transition-colors hover:text-olive-600">
                See how it works
                <svg width="13" height="7" viewBox="0 0 13 7" fill="none" strokeWidth="1" className="size-4">
                  <path d="M12.5049 3.49512L0.504883 3.49512" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M9.5 6.5L12.5 3.5L9.5 0.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-8" data-reveal>
            <div className="overflow-hidden rounded-2xl border border-olive-200 shadow-lg">
              <img src="/assets/img/screenshots-1-right-1000_top-800-674dae.webp" alt="" className="w-full" width={1000} height={800} />
            </div>
            <div className="flex flex-col gap-4">
              <div>
                <h3 className="text-xl font-semibold text-olive-950">Inbox Agent</h3>
                <div className="mt-2 max-w-md text-sm leading-relaxed text-olive-500">
                  <p>Get valuable context without having to read through your customer&apos;s long, angry email thread.</p>
                </div>
              </div>
              <a href="#" className="inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-olive-950 transition-colors hover:text-olive-600">
                See how it works
                <svg width="13" height="7" viewBox="0 0 13 7" fill="none" strokeWidth="1" className="size-4">
                  <path d="M12.5049 3.49512L0.504883 3.49512" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M9.5 6.5L12.5 3.5L9.5 0.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  return (
    <section className="overflow-hidden py-24" id="stats">
      <div className="mx-auto max-w-7xl px-6 pb-8 lg:px-8">
        <div className="mx-auto flex max-w-2xl flex-col gap-6 text-center">
          <div className="flex flex-col gap-6">
            <div className="text-sm font-semibold text-olive-500">Built for scale</div>
            <h2 className="font-serif text-4xl leading-[1.1] tracking-tight text-olive-950 sm:text-5xl">
              The inbox powering customer conversations everywhere.
            </h2>
          </div>
          <div className="mx-auto max-w-md text-base leading-relaxed text-olive-500">
            <p>Oatmeal helps teams deliver personal, organized, and fast customer support across the world. From small startups to enterprise teams, we process millions of messages each month — using a massive network of low wage workers stationed around the globe.</p>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-olive-200 p-8">
              <div className="font-serif text-5xl text-olive-950">2M+</div>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-olive-500">Emails manually processed every week across thousands of teams.</p>
            </div>
            <div className="rounded-2xl border border-olive-200 p-8">
              <div className="font-serif text-5xl text-olive-950">99.98%</div>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-olive-500">Uptime — because your customers never stop complaining.</p>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl border border-olive-200 p-8">
            <svg className="h-full w-full" viewBox="0 0 1200 400" preserveAspectRatio="none">
              <defs>
                <clipPath id="path">
                  <path d="M 0 400 L 0 383 C 396 362.7936732276819, 804 264.31672304481856, 1200 60 L 1200 60 L 1200 400 Z" />
                </clipPath>
              </defs>
              <path d="M 0 400 L 0 383 C 396 362.7936732276819, 804 264.31672304481856, 1200 60 L 1200 60 L 1200 400 Z" fill="oklch(46.6% 0.025 107.3 / 0.05)" />
              <g stroke="oklch(73.7% 0.021 106.9)" strokeWidth="1" strokeDasharray="4 3" clipPath="url(#path)">
                <line x1="0.5" y1="400" x2="0.5" y2="0" vectorEffect="non-scaling-stroke" />
                <line x1="92.3" y1="400" x2="92.3" y2="0" vectorEffect="non-scaling-stroke" />
                <line x1="184.6" y1="400" x2="184.6" y2="0" vectorEffect="non-scaling-stroke" />
                <line x1="276.9" y1="400" x2="276.9" y2="0" vectorEffect="non-scaling-stroke" />
                <line x1="369.2" y1="400" x2="369.2" y2="0" vectorEffect="non-scaling-stroke" />
                <line x1="461.5" y1="400" x2="461.5" y2="0" vectorEffect="non-scaling-stroke" />
                <line x1="553.8" y1="400" x2="553.8" y2="0" vectorEffect="non-scaling-stroke" />
                <line x1="646.2" y1="400" x2="646.2" y2="0" vectorEffect="non-scaling-stroke" />
                <line x1="738.5" y1="400" x2="738.5" y2="0" vectorEffect="non-scaling-stroke" />
                <line x1="830.8" y1="400" x2="830.8" y2="0" vectorEffect="non-scaling-stroke" />
                <line x1="923.1" y1="400" x2="923.1" y2="0" vectorEffect="non-scaling-stroke" />
                <line x1="1015.4" y1="400" x2="1015.4" y2="0" vectorEffect="non-scaling-stroke" />
                <line x1="1107.7" y1="400" x2="1107.7" y2="0" vectorEffect="non-scaling-stroke" />
                <line x1="1199.5" y1="400" x2="1199.5" y2="0" vectorEffect="non-scaling-stroke" />
              </g>
              <path d="M 0 383 C 396 362.7936732276819, 804 264.31672304481856, 1200 60" fill="none" stroke="oklch(73.7% 0.021 106.9)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="overflow-hidden py-24" id="testimonial">
      <div className="mx-auto max-w-7xl px-6 pb-8 lg:px-8">
        <div className="mx-auto flex max-w-2xl flex-col gap-6 text-center">
          <div className="flex flex-col gap-6">
            <h2 className="font-serif text-4xl leading-[1.1] tracking-tight text-olive-950 sm:text-5xl">What our customers are saying</h2>
          </div>
          <div className="mx-auto max-w-md text-base leading-relaxed text-olive-500">
            <p>We&apos;ve given these customers a significant discount in exchange for their honest reviews.</p>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure key={i} className="flex flex-col justify-between gap-6 rounded-2xl border border-olive-200 p-6 shadow-sm transition-shadow hover:shadow-md" data-reveal>
              <blockquote className="flex flex-col gap-4">
                <p className="text-sm leading-relaxed text-olive-700">&ldquo;{t.quote}&rdquo;</p>
              </blockquote>
              <figcaption className="flex items-center gap-3">
                <div className="size-10 overflow-hidden rounded-full bg-olive-200">
                  <img src={`/assets/img/${t.avatar}`} alt="" className="size-full object-cover" width={160} height={160} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-olive-950">{t.name}</p>
                  <p className="text-xs text-olive-500">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQsSection() {
  return (
    <section className="overflow-hidden py-24" id="faqs">
      <div className="mx-auto max-w-7xl px-6 pb-8 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <div className="text-center">
            <h2 className="font-serif text-4xl leading-[1.1] tracking-tight text-olive-950 sm:text-5xl">Questions &amp; Answers</h2>
          </div>
          <div className="mt-12 space-y-0 divide-y divide-olive-200">
            {faqs.map((faq, i) => (
              <div key={i} id={`faq-${i}`} className="py-4">
                <button
                  type="button"
                  data-command="--toggle"
                  data-commandfor={`faq-${i}-answer`}
                  className="flex w-full items-center justify-between gap-4 py-2 text-left text-base font-medium text-olive-950 transition-colors hover:text-olive-600"
                  aria-expanded="false"
                  aria-controls={`faq-${i}-answer`}
                >
                  <span>{faq.q}</span>
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth="1" className="size-4 shrink-0 transition-transform duration-200">
                    <path d="M6.5 0.5V12.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12.5049 6.49512L0.504883 6.49512" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <div id={`faq-${i}-answer`} hidden className="pb-2 text-sm leading-relaxed text-olive-500">
                  {faq.a}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  return (
    <section className="overflow-hidden py-24" id="pricing">
      <div className="mx-auto max-w-7xl px-6 pb-8 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-4xl leading-[1.1] tracking-tight text-olive-950 sm:text-5xl">Pricing to fit your business needs.</h2>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3">
          <PricingCard
            name="Starter"
            price="$12"
            desc="Small teams getting started with shared inboxes"
            features={["Shared inbox for up to 2 mailboxes", "Tagging & assignment", "Private notes", "Automatic replies", "Email support"]}
            popular={false}
          />
          <PricingCard
            name="Growth"
            price="$49"
            desc="Growing teams needing collaboration and insights"
            features={["Everything in Starter", "Inbox Agent", "Unlimited mailboxes", "Collision detection", "Snippets and templates", "Reporting dashboard", "Slack integration"]}
            popular={true}
          />
          <PricingCard
            name="Pro"
            price="$299"
            desc="Support-focused organizations and larger teams"
            features={["Everything in Growth", "Custom roles & permissions", "Automation engine", "API access", "SLA tracking", "SSO support", "SOC 2 compliance"]}
            popular={false}
          />
        </div>
      </div>
    </section>
  );
}

function PricingCard({ name, price, desc, features, popular }: { name: string; price: string; desc: string; features: string[]; popular: boolean }) {
  return (
    <div className={`flex flex-col justify-between gap-8 rounded-2xl border p-8 shadow-sm ${popular ? "border-olive-950 bg-olive-950 text-white" : "border-olive-200 bg-white"}`}>
      <div className="space-y-4">
        {popular && <div className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white">Most popular</div>}
        <h3 className={`text-lg font-semibold ${popular ? "text-white" : "text-olive-950"}`}>{name}</h3>
        <p className={`text-3xl font-semibold ${popular ? "text-white" : "text-olive-950"}`}>
          {price}
          <span className={`text-sm font-normal ${popular ? "text-olive-300" : "text-olive-400"}`}>/mo</span>
        </p>
        <div className={`text-sm leading-relaxed ${popular ? "text-olive-300" : "text-olive-500"}`}>
          <p>{desc}</p>
        </div>
        <ul className={`space-y-3 text-sm ${popular ? "text-olive-300" : "text-olive-500"}`}>
          {features.map((f) => (
            <li key={f} className="flex items-center gap-3">
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth="1" className={`size-4 shrink-0 ${popular ? "text-olive-300" : "text-olive-400"}`}>
                <path d="M1.5 6.5L5.5 11.5L11.5 1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <p>{f}</p>
            </li>
          ))}
        </ul>
      </div>
      <a
        href="#"
        className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors ${
          popular
            ? "bg-white text-olive-950 hover:bg-olive-100"
            : "bg-olive-950 text-white hover:bg-olive-800"
        }`}
      >
        Start free trial
      </a>
    </div>
  );
}

function CTASection() {
  return (
    <section className="overflow-hidden py-24" id="call-to-action">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-8 text-center">
          <div className="flex flex-col gap-6">
            <h2 className="font-serif text-4xl leading-[1.1] tracking-tight text-olive-950 sm:text-5xl">
              Ready to make customer support feel simple again?
            </h2>
            <div className="mx-auto max-w-md text-base leading-relaxed text-olive-500">
              <p>Join hundreds of teams using Oatmeal to deliver faster, friendlier email support — using a massive network of low wage workers stationed around the globe</p>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="#" className="inline-flex items-center gap-2 rounded-full bg-olive-950 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-olive-800">
              Start free trial
            </Link>
            <Link href="#" className="inline-flex items-center gap-2 rounded-full border border-olive-200 px-6 py-3 text-sm font-semibold text-olive-950 transition-colors hover:bg-olive-100">
              Book a demo
              <svg width="5" height="8" viewBox="0 0 5 8" fill="currentColor" className="size-4">
                <path fillRule="evenodd" clipRule="evenodd" d="M.22.22a.75.75 0 011.06 0l3.25 3.25a.75.75 0 010 1.06L1.28 7.78A.75.75 0 01.22 6.72L2.94 4 .22 1.28a.75.75 0 010-1.06z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
