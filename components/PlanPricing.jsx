import Link from 'next/link'
import { PLANS } from '@/components/MinutePlans'

// One pricing block for every page that sells the same plans. Prices come from
// PLANS and are never retyped, so they cannot drift apart; only the wording
// around them varies per page.
export default function PlanPricing({
  heading = 'Live Phone Answering Pricing',
  intro = 'Choose the monthly receptionist minutes your business needs. Our live receptionists answer calls, take messages, route callers, and help you capture more opportunities without hiring in-house staff.',
  badge = 'Best Value',
  descriptions = {},
  customTitle = 'Need 1,000+ Minutes or Custom Coverage?',
  customBody = 'Discuss call volumes, coverage hours, and handling requirements with our team.',
  footnote = 'Plan features and supported workflows are confirmed during setup.',
  headingId = 'plan-pricing-heading',
}) {
  return (
    <section className="w-full bg-[#12382a] px-4 py-14 md:py-16 lg:px-[5%]" aria-labelledby={headingId}>
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center rounded-full border border-white/25 px-5 py-2 text-[0.72rem] font-bold uppercase tracking-[0.14em] text-white/80">
            Simple monthly minute plans
          </p>
          <h2
            id={headingId}
            className="mt-5 text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.14] tracking-tight text-white"
          >
            {heading}
          </h2>
          <p className="mt-4 text-[0.92rem] leading-relaxed text-white/70">
            {intro}
          </p>
        </div>

        <ul className="mt-10 grid list-none grid-cols-1 gap-6 lg:grid-cols-3">
          {PLANS.filter((plan) => plan.price !== 'Custom').map((plan) => (
            <li key={plan.name} className="relative h-full">
              {plan.featured && (
                <span className="absolute -top-3.5 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#8CA365] px-4 py-1.5 text-[0.8rem] font-semibold text-white">
                  {badge}
                </span>
              )}

              <div
                className={`flex h-full flex-col rounded-xl bg-white p-6 sm:p-7 ${
                  plan.featured ? 'border-2 border-[#8CA365]' : ''
                }`}
              >
                <p className="w-max rounded-full bg-[#eaf1dd] px-3.5 py-1 text-[0.78rem] font-semibold text-[#1b4332]">
                  {plan.minutes}
                </p>

                <h3 className="mt-4 text-[1.4rem] font-extrabold text-[#1a2e35]">{plan.name}</h3>
                <p className="mt-2 text-[0.84rem] leading-relaxed text-gray-600">
                  {descriptions[plan.name] || plan.description}
                </p>

                <p className="mt-5 text-[0.82rem] text-gray-600">Starting at</p>
                <p className="mt-0.5 flex flex-wrap items-baseline gap-x-2">
                  <span className="text-[2.6rem] font-extrabold leading-none text-[#1a2e35]">{plan.price}</span>
                  <span className="text-[0.95rem] text-gray-600">/month</span>
                </p>
                <p className="mt-2 text-[0.82rem] font-semibold text-[#5f7a3a]">{plan.overage}</p>

                <ul className="mt-5 list-none space-y-2.5 border-t border-gray-200 pt-5">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="icon-mask icon-check [--icon-size:1rem] flex items-start gap-3 text-[0.84rem] leading-relaxed text-gray-700 before:mt-0.5 before:text-[#5f7a3a]"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  prefetch={false}
                  href="/contact-us"
                  className={`mt-auto flex items-center justify-center rounded-lg px-6 py-3.5 text-[0.92rem] font-bold transition-all hover:-translate-y-0.5 ${
                    plan.featured
                      ? 'bg-[#8CA365] text-white hover:bg-[#9cb374]'
                      : 'border border-gray-300 text-[#1a2e35] hover:border-[#8CA365]'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-col items-start gap-5 rounded-xl bg-[#1d4a37] px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
          <p>
            <span className="block text-[1.2rem] font-extrabold text-white">
              {customTitle}
            </span>
            <span className="mt-1 block text-[0.85rem] text-white/70">
              {customBody}
            </span>
          </p>

          <Link
            prefetch={false}
            href="/contact-us"
            className="inline-flex flex-shrink-0 items-center justify-center rounded-lg bg-white px-6 py-3.5 text-[0.88rem] font-bold text-[#1a2e35] transition-all hover:-translate-y-0.5 hover:bg-gray-100"
          >
            Request Custom Quote
          </Link>
        </div>

        {/* What a plan covers depends on the caller's own tools, so the
            distinction between request handling and direct booking is stated. */}
        <p className="mt-5 text-center text-[0.78rem] text-white/60">
          {footnote}
        </p>
      </div>
    </section>
  )
}
