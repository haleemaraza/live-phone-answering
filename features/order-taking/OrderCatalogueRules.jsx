import Link from 'next/link'

// Section 6: what callers can be told, drawn from the sources the business
// approves, and where a question has to go back to the team.
const RULES = [
  {
    icon: 'icon-layers',
    title: 'Products & Quantities',
    body: 'Capture the item and the amount your customer actually needs.',
    checks: ['Product codes and variants', 'Units and pack sizes', 'Minimum order quantities'],
  },
  {
    icon: 'icon-price-tag',
    title: 'Prices & Promotions',
    body: "Use approved pricing and offer details for the customer's request.",
    checks: ['Your current price source', 'Campaign and discount terms', 'Quotes needing review'],
  },
  {
    icon: 'icon-calendar-clock',
    title: 'Availability & Delivery',
    body: 'Follow the stock and delivery information your team authorizes.',
    checks: ['Approved availability updates', 'Delivery or collection options', 'Cutoffs and relevant time zones'],
  },
  {
    icon: 'icon-split-arrows',
    title: 'Exceptions & Approvals',
    body: 'Give requests outside the agreed rules a defined next step.',
    checks: ['Missing or unclear information', 'Unavailable items or substitutions', 'Changes needing your approval'],
  },
]

export default function OrderCatalogueRules() {
  return (
    <section className="w-full bg-[#f8f7f2] py-14 md:py-16" aria-labelledby="order-rules-heading">
      <div className="site-container">
        <div className="grid grid-cols-1 items-start gap-7 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.6fr)] lg:gap-10">
          <div>
            <p className="text-[0.62rem] font-bold uppercase tracking-[0.16em] text-[#5f7a3a]">
              Your catalogue. Your call plan.
            </p>
            <h2
              id="order-rules-heading"
              className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.14] tracking-tight text-[#1b4332]"
            >
              Built Around{' '}
              <br />
              Your Catalogue{' '}
              <br />
              and Order Rules
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              Give callers consistent information from the sources your business approves, with a clear route for
              questions that need your team.
            </p>

            <div className="mt-6 rounded-xl bg-[#1d4b37] px-6 py-5">
              <p className="icon-mask icon-clipboard-check [--icon-size:1.4rem] flex items-center gap-3 text-[1.1rem] font-extrabold text-white before:flex-shrink-0 before:text-[#a8c47d]">
                Start With the Right Information
              </p>
              <p className="mt-2 text-base leading-relaxed text-white/70">
                Agree the product source, required fields and approval contacts before calls begin.
              </p>
            </div>

            <Link
              prefetch={false}
              href="/contact-us"
              className="icon-mask icon-arrow-right [--icon-size:0.9rem] mt-5 inline-flex flex-row-reverse items-center gap-3 rounded-lg bg-[#1d4b37] px-6 py-3.5 text-base font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#164032]"
            >
              Review My Order Taking Setup
            </Link>
          </div>

          <ul className="grid list-none grid-cols-1 gap-x-8 gap-y-7 sm:grid-cols-2">
            {RULES.map((rule) => (
              <li key={rule.title}>
                <span
                  className={`icon-mask ${rule.icon} [--icon-size:1.5rem] flex h-11 w-11 items-center justify-center rounded-lg bg-[#eef2e6] text-[#1b4332]`}
                  aria-hidden="true"
                ></span>
                <h3 className="mt-3 text-[1.05rem] font-bold leading-snug text-[#1b4332]">{rule.title}</h3>
                <p className="mt-2 text-base leading-relaxed text-gray-600">{rule.body}</p>

                <ul className="mt-3 list-none space-y-2 border-t border-gray-300/50 pt-3">
                  {rule.checks.map((check) => (
                    <li key={check} className="flex items-start gap-2.5">
                      <span
                        className="icon-mask icon-check [--icon-size:0.7rem] mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#eef2e6] text-[#4f6630]"
                        aria-hidden="true"
                      ></span>
                      <span className="text-base text-gray-700">{check}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 flex items-start gap-5 rounded-xl bg-[#eef0e6] px-6 py-5">
          <span
            className="icon-mask icon-split-arrows [--icon-size:1.8rem] mt-0.5 flex-shrink-0 text-[#4f6630]"
            aria-hidden="true"
          ></span>
          <div className="min-w-0">
            <h3 className="text-[1.15rem] font-extrabold text-[#1b4332]">When an Answer or Approval Is Needed</h3>
            <p className="mt-1 text-base leading-relaxed text-gray-600">
              Record the issue and follow your agreed handoff. If system submission is uncertain, check its status
              before any retry.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
