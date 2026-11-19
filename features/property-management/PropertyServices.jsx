import Link from 'next/link'

// Same card design as the other pages' services sections. Eight cards, so the
// grid runs on six columns: the first six sit three-up and the last two split
// the final row instead of leaving an empty third.
const SERVICES = [
  {
    icon: 'icon-home',
    title: 'Rental & Leasing Enquiries',
    body: 'Capture the property of interest, move-in timeframe and callback details for your leasing team.',
  },
  {
    icon: 'icon-calendar',
    title: 'Viewing & Inspection Requests',
    body: 'Collect preferred times or book into your approved calendar when scheduling is included.',
  },
  {
    icon: 'icon-gear',
    title: 'Tenant Maintenance Requests',
    body: 'Record the property, unit, reported issue and contact details in a consistent format.',
  },
  {
    icon: 'icon-phone-forward',
    title: 'Urgent Maintenance Escalation',
    body: 'Follow your urgency rules and contact the designated team using the agreed escalation route.',
  },
  {
    icon: 'icon-question',
    title: 'Routine Tenant Questions',
    body: 'Answer approved questions and pass requests needing a decision to the right property manager.',
  },
  {
    icon: 'icon-user',
    title: 'Landlord & Owner Calls',
    body: 'Capture owner enquiries and route portfolio or account messages to the responsible team.',
  },
  {
    icon: 'icon-doc-reply',
    title: 'Contractor & Supplier Messages',
    body: 'Record job references, appointment updates and access questions for your coordinating team.',
  },
  {
    icon: 'icon-buildings-arrow',
    title: 'Multi-Property Call Routing',
    body: 'Match each property or building to its own contacts, call instructions and message recipients.',
  },
]

const AUDIENCES = ['Tenants', 'Rental prospects', 'Owners', 'Contractors']

export default function PropertyServices() {
  return (
    <section className="w-full bg-[#f8f7f2] py-14 md:py-16" aria-labelledby="property-services-heading">
      <div className="site-container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="icon-mask icon-headset [--icon-size:1rem] inline-flex items-center gap-2 bg-[#8CA365]/10 text-[#5f7a3a] rounded-full text-sm font-semibold px-4 py-1.5">
            Property call support
          </p>
          <h2
            id="property-services-heading"
            className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.14] tracking-tight text-[#1b4332]"
          >
            Property Management{' '}
            <br />
            Calls We Can Handle
          </h2>
          <p className="mt-3 text-lg leading-relaxed text-gray-600">
            From rental enquiries to maintenance requests, give every caller a clear next step with a call plan built
            around your properties.
          </p>

          <ul className="mt-5 flex list-none flex-wrap items-center justify-center gap-x-3 gap-y-2">
            {AUDIENCES.map((audience, index) => (
              <li
                key={audience}
                className="flex items-center gap-3 text-[0.62rem] font-bold uppercase tracking-[0.16em] text-gray-600"
              >
                {audience}
                {index < AUDIENCES.length - 1 && (
                  <span aria-hidden="true" className="text-gray-400">
                    /
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>

        <ul className="mt-8 grid list-none grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-6">
          {SERVICES.map((service, index) => (
            <li
              key={service.title}
              className={`relative flex h-full flex-col rounded-xl border border-gray-300/50 bg-[#fff] p-5 sm:p-6 ${
                index >= SERVICES.length - 2 ? 'lg:col-span-3' : 'lg:col-span-2'
              }`}
            >
              <span
                aria-hidden="true"
                className="absolute right-5 top-5 text-sm font-bold text-gray-600 sm:right-6 sm:top-6"
              >
                {String(index + 1).padStart(2, '0')}
              </span>

              <span
                className={`icon-mask ${service.icon} [--icon-size:1.7rem] flex h-12 w-12 items-center justify-center rounded-lg bg-[#eef2e6] text-[#1b4332]`}
                aria-hidden="true"
              ></span>

              <h3 className="mt-4 text-[1.02rem] font-bold leading-snug text-[#1b4332]">{service.title}</h3>
              <p className="mt-2 flex-grow text-base leading-relaxed text-gray-600">{service.body}</p>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-col items-start gap-5 rounded-xl bg-[#1d4b37] px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="flex items-start gap-4">
            <span
              className="icon-mask icon-headset [--icon-size:1.6rem] mt-0.5 flex-shrink-0 text-[#a8c47d]"
              aria-hidden="true"
            ></span>
            <span className="min-w-0">
              <span className="block text-[1.15rem] font-extrabold text-white">
                Your properties. Your call instructions.
              </span>
              <span className="mt-1 block text-base text-white/70">
                Choose the call types and handling steps your team needs.
              </span>
            </span>
          </p>
          <Link
            prefetch={false}
            href="/contact-us"
            className="icon-mask icon-arrow-right [--icon-size:0.9rem] inline-flex flex-shrink-0 flex-row-reverse items-center gap-3 rounded-lg bg-[#8CA365] px-6 py-3.5 text-base font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#9cb374]"
          >
            Build My Call Plan
          </Link>
        </div>
      </div>
    </section>
  )
}
