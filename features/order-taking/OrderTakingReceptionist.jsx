import Link from 'next/link'

// Section 10. Dark band, as in the design.
const POINTS = [
  {
    icon: 'icon-chat',
    title: 'Answer Approved Product Questions',
    body: 'Use your catalogue and agreed answers to help callers understand product choices.',
  },
  {
    icon: 'icon-clipboard-check',
    title: 'Capture Order-Specific Details',
    body: 'Record product codes, variants, quantities and delivery preferences using your required fields.',
  },
  {
    icon: 'icon-phone-forward',
    title: 'Route Requests to the Right Person',
    body: 'Follow your contact plan when a caller needs advice, an exception or a decision from your team.',
  },
]

export default function OrderTakingReceptionist() {
  return (
    <section className="w-full bg-[#1b4332] py-14 md:py-16" aria-labelledby="order-receptionist-heading">
      <div className="site-container">
        <div className="grid grid-cols-1 items-start gap-9 lg:grid-cols-2 lg:gap-12">
          <div>
            <p className="text-[0.62rem] font-bold uppercase tracking-[0.16em] text-[#a8c47d]">
              Virtual receptionist support
            </p>

            <h2
              id="order-receptionist-heading"
              className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.12] tracking-tight text-white"
            >
              A Virtual Receptionist{' '}
              <br />
              for Your Order Calls
            </h2>

            <p className="mt-4 text-lg leading-relaxed text-white/70">
              Give callers a helpful response, capture the details that matter and follow the route your business
              approves.
            </p>

            <ul className="mt-6 list-none divide-y divide-white/15 border-t border-white/15">
              {POINTS.map((point) => (
                <li key={point.title} className="flex items-start gap-4 py-4">
                  <span
                    className={`icon-mask ${point.icon} [--icon-size:1.4rem] flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-white/10 text-[#a8c47d]`}
                    aria-hidden="true"
                  ></span>
                  <span className="min-w-0">
                    <h3 className="text-[1.02rem] font-bold leading-snug text-white">{point.title}</h3>
                    <span className="mt-1 block text-base leading-relaxed text-white/70">{point.body}</span>
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-7 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6">
              <Link
                prefetch={false}
                href="/contact-us"
                className="icon-mask icon-arrow-right [--icon-size:0.9rem] inline-flex flex-row-reverse items-center gap-3 rounded-lg bg-[#8CA365] px-6 py-3.5 text-base font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#9cb374]"
              >
                Build My Order Taking Plan
              </Link>

              <Link
                prefetch={false}
                href="/virtual-receptionist"
                className="icon-mask icon-arrow-right [--icon-size:0.85rem] inline-flex flex-row-reverse items-center gap-2 text-base font-bold text-[#a8c47d] underline-offset-4 transition-colors hover:text-white hover:underline"
              >
                Explore Virtual Receptionist Support
              </Link>
            </div>
          </div>

          <div>
            <figure className="overflow-hidden rounded-xl">
              <img
                src="/images/zero-bot-frustration-live-answering-service.webp"
                alt="A virtual receptionist wearing a headset taking an order call"
                width={1200}
                height={1200}
                loading="lazy"
                decoding="async"
                className="h-full min-h-[18rem] w-full object-cover"
              />
            </figure>

            <div className="mt-4 flex items-start gap-4 rounded-xl bg-[#c9dfb0] px-6 py-5">
              <span
                className="icon-mask icon-clipboard-check [--icon-size:1.6rem] mt-0.5 flex-shrink-0 text-[#1d4b37]"
                aria-hidden="true"
              ></span>
              <span className="min-w-0">
                <span className="block text-[1.15rem] font-extrabold text-[#1a2e35]">
                  Your Team Keeps the Decisions
                </span>
                <span className="mt-1 block text-base leading-relaxed text-[#1a2e35]/80">
                  Prices, exceptions and order acceptance follow your approved instructions.
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
