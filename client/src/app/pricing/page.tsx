import Link from "next/link";

const plans = [
  {
    name: "Starter",
    price: "$12",
    desc: "Small teams getting started with shared inboxes",
    features: ["Shared inbox for up to 2 mailboxes", "Tagging & assignment", "Private notes", "Automatic replies", "Email support"],
    popular: false,
  },
  {
    name: "Growth",
    price: "$49",
    desc: "Growing teams needing collaboration and insights",
    features: ["Everything in Starter", "Inbox Agent", "Unlimited mailboxes", "Collision detection", "Snippets and templates", "Reporting dashboard", "Slack integration"],
    popular: true,
  },
  {
    name: "Pro",
    price: "$299",
    desc: "Support-focused organizations and larger teams",
    features: ["Everything in Growth", "Custom roles & permissions", "Automation engine", "API access", "SLA tracking", "SSO support", "SOC 2 compliance"],
    popular: false,
  },
  {
    name: "Enterprise",
    price: "Custom",
    desc: "For organizations that need dedicated support and custom SLAs",
    features: ["Everything in Pro", "Dedicated account manager", "Custom integrations", "On-premise deployment", "24/7 phone support", "SLA guarantees", "Volume discounts", "Quarterly business reviews"],
    popular: false,
  },
];

export default function PricingPage() {
  return (
    <>
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 pb-8 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="font-serif text-5xl leading-[1.1] tracking-tight text-olive-950 sm:text-6xl">
              Simple pricing, <span className="italic">no surprises</span>
            </h1>
            <div className="mt-6 text-base leading-relaxed text-olive-500">
              <p>All prices are in USD and will increase annually by at least 20%. We&apos;ll notify you via a support ticket that will be automatically marked as spam.</p>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-4">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`flex flex-col justify-between gap-8 rounded-2xl border p-8 shadow-sm ${
                  plan.popular ? "border-olive-950 bg-olive-950 text-white" : "border-olive-200 bg-white"
                }`}
              >
                <div className="space-y-4">
                  {plan.popular && <div className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white">Most popular</div>}
                  <h3 className={`text-lg font-semibold ${plan.popular ? "text-white" : "text-olive-950"}`}>{plan.name}</h3>
                  <p className={`text-3xl font-semibold ${plan.popular ? "text-white" : "text-olive-950"}`}>
                    {plan.price}
                    {plan.price !== "Custom" && <span className={`text-sm font-normal ${plan.popular ? "text-olive-300" : "text-olive-400"}`}>/mo</span>}
                  </p>
                  <div className={`text-sm leading-relaxed ${plan.popular ? "text-olive-300" : "text-olive-500"}`}>
                    <p>{plan.desc}</p>
                  </div>
                  <ul className={`space-y-3 text-sm ${plan.popular ? "text-olive-300" : "text-olive-500"}`}>
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-center gap-3">
                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth="1" className={`size-4 shrink-0 ${plan.popular ? "text-olive-300" : "text-olive-400"}`}>
                          <path d="M1.5 6.5L5.5 11.5L11.5 1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <p>{f}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  href="#"
                  className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors ${
                    plan.popular
                      ? "bg-white text-olive-950 hover:bg-olive-100"
                      : "bg-olive-950 text-white hover:bg-olive-800"
                  }`}
                >
                  {plan.price === "Custom" ? "Contact sales" : "Start free trial"}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-olive-200 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-3xl leading-[1.1] tracking-tight text-olive-950 sm:text-4xl">Frequently asked questions</h2>
          </div>
          <div className="mt-12 mx-auto max-w-2xl space-y-6">
            {[
              { q: "Can I cancel anytime?", a: "Technically yes, but we'll make you talk to three different retention specialists before processing your request. Each conversation will take approximately 45 minutes." },
              { q: "Is there a free trial?", a: "Yes! You get a 14-day free trial. Your credit card will be charged automatically on day 13 to ensure there are no service interruptions." },
              { q: "What happens if I exceed my plan limits?", a: "We'll automatically upgrade you to the next tier and send you a lovely email about it — after the charge has been processed." },
              { q: "Do you offer discounts for non-profits?", a: "We offer a 5% discount to non-profits with 501(c)(3) status. This discount only applies to the first month of your subscription." },
            ].map((faq, i) => (
              <div key={i}>
                <h3 className="text-base font-semibold text-olive-950">{faq.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-olive-500">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-olive-200 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto flex max-w-2xl flex-col items-center gap-8 text-center">
            <h2 className="font-serif text-3xl leading-[1.1] tracking-tight text-olive-950 sm:text-4xl">Still have questions?</h2>
            <p className="text-sm leading-relaxed text-olive-500">Our support team is available 24/7, though response times may vary between 2 minutes and 2 weeks depending on your plan.</p>
            <Link href="#" className="inline-flex items-center gap-2 rounded-full bg-olive-950 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-olive-800">
              Contact support
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
