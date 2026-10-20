import Link from 'next/link'

const BENEFITS = [
  {
    icon: 'icon-split-arrows',
    title: 'A clearer path for callers',
    body: 'Help people reach the appropriate staff member or department using the reason for their call and your agreed contact list.',
  },
  {
    icon: 'icon-report',
    title: 'Easier follow-up',
    body: "Capture the caller's name, callback number, and reason for calling when a connection cannot be completed.",
  },
  {
    icon: 'icon-chat',
    title: 'A personal first impression',
    body: 'Give callers a real person who listens, explains the next step, and represents your business with your approved greeting.',
  },
  {
    icon: 'icon-sliders',
    title: 'More control over call handling',
    body: 'Set contact windows, transfer instructions, and backup steps around the way your team works.',
  },
]

export default function CallRoutingBenefits() {
  return (
    <section
      className="w-full bg-[#f8f7f2] px-4 py-14 md:py-16 lg:px-[5%]"
      aria-labelledby="call-routing-benefits-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="icon-mask icon-smile [--icon-size:1rem] inline-flex items-center gap-2 bg-[#8CA365]/10 text-[#5f7a3a] rounded-full text-sm font-semibold px-4 py-1.5">
            Benefits of call routing
          </p>
          <h2
            id="call-routing-benefits-heading"
            className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.14] tracking-tight text-[#1b4332]"
          >
            Fewer Interruptions. Clearer Connections.
            <br />
            Better Call Handling.
          </h2>
          <p className="mt-3 text-[0.95rem] leading-relaxed text-gray-600">
            Give callers a helpful first response while your team stays focused on the work that needs them.
          </p>
        </div>

        {/* The photo card spans both rows beside the 2x2 of benefits. */}
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)_minmax(0,1fr)]">
          <figure className="flex flex-col overflow-hidden rounded-xl sm:col-span-2 lg:col-span-1 lg:row-span-2">
            <span className="relative block min-h-[14rem] flex-grow">
              <img
                src="/images/real-human-empathy-live-phone-answering-service.webp"
                alt="A business owner working at a laptop without being interrupted by the phone"
                width={1200}
                height={1200}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </span>
            <figcaption className="bg-[#1d4b37] px-6 py-6">
              <span className="block text-[1.35rem] font-extrabold leading-tight text-white">
                More time for
                <br />
                focused work
              </span>
              <span className="mt-2 block text-[0.86rem] leading-relaxed text-white/70">
                Let receptionists screen incoming enquiries and follow your contact rules, so your team can give
                attention to relevant calls.
              </span>
              <span className="mt-5 flex items-center gap-4 border-t border-white/15 pt-4">
                <span
                  className="icon-mask icon-clock [--icon-size:1.6rem] flex-shrink-0 border-r border-white/20 pr-4 text-[#a8c47d]"
                  aria-hidden="true"
                ></span>
                <span className="text-[0.62rem] font-bold uppercase tracking-[0.16em] text-[#a8c47d]">
                  Support for your working day
                </span>
              </span>
            </figcaption>
          </figure>

          {BENEFITS.map((benefit) => (
            <div
              key={benefit.title}
              className="flex h-full flex-col rounded-xl border border-gray-300/50 bg-[#fbfaf6] p-5 sm:p-6"
            >
              <div className="flex items-center gap-4">
                <span
                  className={`icon-mask ${benefit.icon} [--icon-size:1.5rem] flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-[#eef2e6] text-[#1b4332]`}
                  aria-hidden="true"
                ></span>
                <h3 className="text-[1.05rem] font-bold leading-snug text-[#1b4332]">{benefit.title}</h3>
              </div>
              <p className="mt-4 flex-grow text-[0.84rem] leading-relaxed text-gray-600">{benefit.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-5 flex flex-col items-start gap-5 rounded-xl bg-[#eef0e6] px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[1.15rem] font-extrabold text-[#1b4332]">
            Keep your team focused. Keep callers informed.
          </p>
          <Link
            prefetch={false}
            href="/contact-us"
            className="icon-mask icon-arrow-right [--icon-size:0.9rem] inline-flex flex-shrink-0 flex-row-reverse items-center gap-3 rounded-lg bg-[#1d4b37] px-6 py-3.5 text-[0.88rem] font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#164032]"
          >
            Plan My Call Routing
          </Link>
        </div>
      </div>
    </section>
  )
}
