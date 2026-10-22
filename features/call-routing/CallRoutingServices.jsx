import Link from 'next/link'

const SERVICES = [
  {
    icon: 'icon-call-screen',
    title: 'Caller Screening',
    body: 'Find out who is calling, why they need help, and who they want to reach. Follow your instructions to separate relevant enquiries from other calls.',
  },
  {
    icon: 'icon-org-chart',
    title: 'Staff & Department Routing',
    body: 'Guide callers to the agreed person or team, including appointments, accounts, sales, or support. Use your contact directory to choose the next step.',
  },
  {
    icon: 'icon-phone-chat',
    title: 'Announced Call Transfers',
    body: 'Where supported, introduce the caller and explain the reason for the call before connecting. Check whether the recipient is available to accept it.',
  },
  {
    icon: 'icon-phone-clock',
    title: 'Availability-Based Routing',
    body: 'Follow your approved transfer windows, working hours, and availability instructions. Use the agreed alternative when someone cannot take a call.',
  },
  {
    icon: 'icon-buildings-arrow',
    title: 'Multi-Location Call Routing',
    body: "Direct enquiries to the appropriate branch or team using your agreed setup. Match the caller's request to the locations and contacts you specify.",
  },
  {
    icon: 'icon-doc-reply',
    title: 'Messages & Backup Contacts',
    body: 'When a connection cannot be completed, follow your backup instructions. Capture a clear message or try an approved alternate contact.',
  },
]

export default function CallRoutingServices() {
  return (
    <section
      className="w-full bg-[#f8f7f2] py-14 md:py-16"
      aria-labelledby="call-routing-services-heading"
    >
      <div className="site-container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="icon-mask icon-call-transfer [--icon-size:1rem] inline-flex items-center gap-2 bg-[#8CA365]/10 text-[#5f7a3a] rounded-full text-sm font-semibold px-4 py-1.5">
            Call routing support
          </p>
          <h2
            id="call-routing-services-heading"
            className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.14] tracking-tight text-[#1b4332]"
          >
            Call Screening, Routing and
            <br />
            Transfer Services We Handle
          </h2>
          <p className="mt-3 text-lg leading-relaxed text-gray-600">
            Give every caller a clear next step. Shape your call handling around your team, their availability, and the
            instructions you approve.
          </p>
        </div>

        <ul className="mt-8 grid list-none grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <li
              key={service.title}
              className="flex h-full flex-col rounded-xl border border-gray-300/50 bg-[#fff] p-5 sm:p-6"
            >
              {/* Icon sits on its own row with the title beneath, as in the
                  reference — not inline with it. */}
              <span
                className={`icon-mask ${service.icon} [--icon-size:1.7rem] flex h-12 w-12 items-center justify-center rounded-lg bg-[#eef2e6] text-[#1b4332]`}
                aria-hidden="true"
              ></span>

              <h3 className="mt-4 text-[1.02rem] font-bold leading-snug text-[#1b4332]">{service.title}</h3>
              <p className="mt-2 flex-grow text-base leading-relaxed text-gray-600">{service.body}</p>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-col items-start gap-5 rounded-xl bg-[#eef0e6] px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[1.15rem] font-extrabold text-[#1b4332]">
            Your team. Your destinations. Your routing rules.
          </p>
          <Link
            prefetch={false}
            href="/contact-us"
            className="icon-mask icon-arrow-right [--icon-size:0.9rem] inline-flex flex-shrink-0 flex-row-reverse items-center gap-3 rounded-lg bg-[#1d4b37] px-6 py-3.5 text-base font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#164032]"
          >
            Build My Call Routing Plan
          </Link>
        </div>

        {/* What a given plan supports is agreed at setup, so the cards describe
            tasks rather than promise all of them. */}
        <p className="mt-5 text-center text-sm text-gray-600">
          Transfer options, destinations, and backup handling are confirmed during setup.
        </p>
      </div>
    </section>
  )
}
