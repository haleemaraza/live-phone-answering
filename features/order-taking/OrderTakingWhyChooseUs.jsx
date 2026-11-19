import Link from 'next/link'

const REASONS = [
  {
    icon: 'icon-sliders',
    title: 'A Plan for Your Catalogue',
    body: 'Agree the product source, required fields and approved answers so order calls follow your business instructions.',
  },
  {
    icon: 'icon-list-check',
    title: 'Key Details Read Back',
    body: 'Confirm product choices, variants and quantities with the caller before following the agreed next step.',
  },
  {
    icon: 'icon-doc-check',
    title: 'Clear Order Status',
    body: 'Show what has been captured or submitted, and what still needs acceptance, payment or review.',
  },
  {
    icon: 'icon-phone-forward',
    title: 'Defined Exceptions & Handoffs',
    body: "Set the contact route for unavailable items, unclear prices and requests that need your team's approval.",
  },
  {
    icon: 'icon-layers',
    title: 'Setup Around Your Workflow',
    body: 'Review call forwarding, system access and order-record delivery. Test the agreed handling process before launch.',
  },
  {
    icon: 'icon-pencil-circle',
    title: 'Instructions Kept Current',
    body: 'Agree how product, price and campaign changes reach the answering team so the call plan stays aligned.',
  },
]

export default function OrderTakingWhyChooseUs() {
  return (
    <section className="w-full bg-[#1b4332] py-14 md:py-16" aria-labelledby="order-why-heading">
      <div className="site-container">
        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-14">
          <div>
            <p className="icon-mask icon-shield-check [--icon-size:1rem] inline-flex items-center gap-2 bg-white/10 text-[#a8c47d] rounded-full text-sm font-semibold px-4 py-1.5">
              Why choose Live Phone Answering
            </p>
            <h2
              id="order-why-heading"
              className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.12] tracking-tight text-white"
            >
              Why Choose Us for{' '}
              <br />
              Order Taking Answering?
            </h2>
          </div>
          <p className="text-lg leading-relaxed text-white/70 lg:pt-14">
            Your products, order rules and team workflows shape the call plan. We agree the details your callers and
            receiving team need.
          </p>
        </div>

        <ul className="mt-9 grid list-none grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((reason) => (
            <li key={reason.title} className="h-full rounded-xl bg-[#f7f7f0] p-6">
              <span
                className={`icon-mask ${reason.icon} [--icon-size:1.9rem] block text-[#4f6630]`}
                aria-hidden="true"
              ></span>
              <h3 className="mt-4 text-[1.02rem] font-bold leading-snug text-[#1b4332]">{reason.title}</h3>
              <p className="mt-2 text-base leading-relaxed text-gray-600">{reason.body}</p>
            </li>
          ))}
        </ul>

        <div className="mt-9 flex flex-col items-start gap-5 border-t border-[#8CA365]/60 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p>
            <span className="block text-[1.4rem] font-extrabold text-white">
              Your products. Your process. A clearer order handoff.
            </span>
            <span className="mt-1 block text-lg text-[#a8c47d]">
              Let&rsquo;s define how order requests reach your team.
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
