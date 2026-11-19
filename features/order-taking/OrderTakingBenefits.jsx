import Link from 'next/link'

const BENEFITS = [
  {
    icon: 'icon-chat',
    title: 'Give Phone Buyers a Helpful Answer',
    body: 'Help customers explain what they want to order, ask product questions and understand the next step.',
  },
  {
    icon: 'icon-clock',
    title: 'Reduce Interruptions During Busy Periods',
    body: 'Let your team focus on serving customers and daily work while order calls follow your agreed plan.',
  },
  {
    icon: 'icon-list-check',
    title: 'Pass On Clearer Order Details',
    body: 'Capture product codes, variants and quantities, with key details checked back with the caller.',
  },
  {
    icon: 'icon-doc-arrow',
    title: 'Make Follow-Up Easier to Identify',
    body: 'Show what was requested, what has happened and which action your team needs to take next.',
  },
]

export default function OrderTakingBenefits() {
  return (
    <section className="w-full bg-[#f8f7f2] py-14 md:py-16" aria-labelledby="order-benefits-heading">
      <div className="site-container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="icon-mask icon-smile [--icon-size:1rem] inline-flex items-center gap-2 bg-[#8CA365]/10 text-[#5f7a3a] rounded-full text-sm font-semibold px-4 py-1.5">
            The benefits of order taking support
          </p>
          <h2
            id="order-benefits-heading"
            className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.14] tracking-tight text-[#1b4332]"
          >
            Keep Order Calls Moving{' '}
            <br />
            While Your Team Works
          </h2>
          <p className="mt-3 text-lg leading-relaxed text-gray-600">
            Give callers helpful support and give your team clearer order details to work with.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.4fr)] lg:gap-12">
          <figure>
            {/* Placeholder: swap for a photo of your own packing bench or
                counter when one is available. */}
            <img
              src="/images/higher-close-rates-live-phone-answering-service.webp"
              alt="A small business owner packing customer orders"
              width={1200}
              height={1200}
              loading="lazy"
              decoding="async"
              className="h-full min-h-[18rem] w-full rounded-xl object-cover"
            />
            <figcaption className="mt-2.5 text-sm text-gray-600">More room to focus on your business.</figcaption>
          </figure>

          <ul className="list-none divide-y divide-gray-300/50 border-t border-gray-300/50">
            {BENEFITS.map((benefit) => (
              <li key={benefit.title} className="flex items-start gap-4 py-5">
                <span
                  className={`icon-mask ${benefit.icon} [--icon-size:1.5rem] flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-[#eef2e6] text-[#1b4332]`}
                  aria-hidden="true"
                ></span>
                <span className="min-w-0">
                  <h3 className="text-[1.05rem] font-bold leading-snug text-[#1b4332]">{benefit.title}</h3>
                  <span className="mt-1 block text-base leading-relaxed text-gray-600">{benefit.body}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 flex flex-col items-start gap-5 rounded-xl bg-[#1d4b37] px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
          <p>
            <span className="block text-[1.2rem] font-extrabold text-white">
              Helpful calls. Clear details. A defined next step.
            </span>
            <span className="mt-1 block text-base text-white/70">
              Build order support around the way your team works.
            </span>
          </p>
          <Link
            prefetch={false}
            href="/contact-us"
            className="icon-mask icon-arrow-right [--icon-size:0.95rem] inline-flex flex-shrink-0 flex-row-reverse items-center gap-3 rounded-lg bg-[#8CA365] px-7 py-3.5 text-lg font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#9cb374]"
          >
            Build My Order Taking Plan
          </Link>
        </div>
      </div>
    </section>
  )
}
