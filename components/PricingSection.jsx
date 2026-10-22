import Link from 'next/link'

function CheckIcon() {
  return (
    <svg className="w-5 h-5 text-[#8CA365] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  )
}

function PlanCard({ plan }) {
  const featured = plan.featured
  return (
    <article
      className={`bg-white rounded-2xl p-7 flex flex-col transition-all duration-300 hover:-translate-y-1 ${
        featured ? 'shadow-2xl border-2 border-[#8CA365] relative' : 'shadow-lg border border-white/10 hover:shadow-2xl'
      }`}
    >
      {featured && (
        <p className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#8CA365] text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
          Best Value
        </p>
      )}

      <div className={featured ? 'mb-6 mt-2' : 'mb-6'}>
        <div className="flex items-center justify-between gap-3 mb-4">
          <span className="inline-block bg-[#f1f5ea] text-[#5f7042] text-xs font-bold px-3 py-1 rounded-full">{plan.leftTag}</span>
          <span className="inline-block bg-[#eef7f1] text-[#2f6b43] text-xs font-bold px-3 py-1 rounded-full">{plan.rightTag}</span>
        </div>
        <h3 className="text-xl font-bold text-[#34414A] mb-2">{plan.name}</h3>
        <p className="text-sm text-gray-500 leading-relaxed min-h-[40px]">{plan.description}</p>
      </div>

      <div className="mb-6">
        <p className="text-sm font-semibold text-gray-500 mb-1">{plan.pricePrefix}</p>
        <span className="text-5xl font-extrabold text-[#34414A]">{plan.price}</span>
        {plan.priceSuffix && <span className="text-gray-400 font-medium">{plan.priceSuffix}</span>}
      </div>

      <div className="border-b border-gray-100 mb-6"></div>

      <ul className="space-y-4 flex-1">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-center gap-3 text-gray-600 text-sm">
            <CheckIcon />
            {feature}
          </li>
        ))}
      </ul>

      <Link prefetch={false}
        href={plan.href}
        className={`w-full block text-center font-bold py-3 rounded-lg transition-colors mt-8 ${
          featured
            ? 'bg-[#8CA365] hover:bg-[#7a8f57] text-white'
            : 'bg-white border-2 border-[#34414A] text-[#34414A] hover:bg-slate-50'
        }`}
      >
        {plan.cta}
      </Link>
    </article>
  )
}

export default function PricingSection({ eyebrow, heading, intro, trustNote, plans, specialistTitle, specialistTags, footnote }) {
  return (
    <section className="relative bg-[#0f2925] py-14 sm:py-20 overflow-hidden" id="pricing" aria-labelledby="pricing-heading">
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-32 -left-32 w-[560px] h-[560px] bg-[#8CA365]/30 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 -right-24 w-[620px] h-[620px] bg-[#00cc7a]/12 rounded-full blur-[140px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[760px] h-[360px] bg-[#215153]/45 rounded-full blur-[120px]"></div>
      </div>

      <div className="site-container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <p className="inline-flex items-center bg-white/10 border border-white/15 text-[#dce8d0] text-sm font-semibold px-4 py-2 rounded-full mb-5">
            {eyebrow}
          </p>
          <h2 id="pricing-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            {heading}
          </h2>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">{intro}</p>
        </div>

        <div className="max-w-3xl mx-auto mb-10">
          <div className="flex items-center justify-center bg-white/10 border border-white/15 rounded-2xl p-4 backdrop-blur-sm">
            <p className="text-white text-sm font-medium">{trustNote}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-stretch">
          {plans.map((plan) => (
            <PlanCard key={plan.name} plan={plan} />
          ))}
        </div>

        <div className="mt-12 text-center max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-6">
          <p className="text-white text-sm font-semibold mb-4">{specialistTitle}</p>
          <ul className="flex flex-wrap justify-center gap-3 list-none">
            {specialistTags.map((tag) => (
              <li key={tag} className="bg-white/10 border border-white/15 text-white text-sm px-4 py-2 rounded-full">
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-5 text-center text-white/40 text-xs">{footnote}</p>
      </div>
    </section>
  )
}
