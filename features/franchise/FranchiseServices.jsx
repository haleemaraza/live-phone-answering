import Link from 'next/link'

// Section 3. Eight cards, four-up on large screens so both rows fill exactly.
const SERVICES = [
  {
    icon: 'icon-user-plus',
    title: 'New Customer Enquiries',
    body: 'Capture the requested service, service address and callback details for the appropriate franchise team.',
  },
  {
    icon: 'icon-calendar-refresh',
    title: 'Appointments & Changes',
    body: "Book, reschedule or record requests using the correct location's calendar and approved booking rules.",
  },
  {
    icon: 'icon-buildings-arrow',
    title: 'Location & Territory Routing',
    body: 'Check the service area or preferred branch, then follow the agreed route to the responsible location.',
  },
  {
    icon: 'icon-moon',
    title: 'After-Hours & Overflow Calls',
    body: 'Follow agreed call instructions when local teams are busy or closed, including approved backup contacts.',
  },
  {
    icon: 'icon-filter-check',
    title: 'Lead Capture & Qualification',
    body: 'Ask approved questions about customer needs, timing and service eligibility before passing on the enquiry.',
  },
  {
    icon: 'icon-doc-reply',
    title: 'Existing Customer Messages',
    body: 'Record job, booking and account questions, then send them to the team responsible for follow-up.',
  },
  {
    icon: 'icon-bell',
    title: 'Complaints & Escalation',
    body: 'Capture the concern and follow the approved local or head-office route, including backup instructions.',
  },
  {
    icon: 'icon-briefcase',
    title: 'Franchise Development Enquiries',
    body: 'Record prospective franchisee interest and pass the details to your franchise development team.',
  },
]

const AUDIENCES = ['Franchisors', 'Multi-unit owners', 'Franchisees', 'Local teams']

export default function FranchiseServices() {
  return (
    <section className="w-full bg-[#f8f7f2] py-14 md:py-16" aria-labelledby="franchise-services-heading">
      <div className="site-container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="icon-mask icon-headset [--icon-size:1rem] inline-flex items-center gap-2 bg-[#8CA365]/10 text-[#5f7a3a] rounded-full text-sm font-semibold px-4 py-1.5">
            Franchise answering services
          </p>
          <h2
            id="franchise-services-heading"
            className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.14] tracking-tight text-[#1b4332]"
          >
            Franchise Calls{' '}
            <br />
            We Can Handle
          </h2>
          <p className="mt-3 text-lg leading-relaxed text-gray-600">
            Give customer enquiries, appointment requests and local team messages a clear route through your
            franchise&rsquo;s approved call plan.
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

        <ul className="mt-8 grid list-none grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, index) => (
            <li
              key={service.title}
              className="relative flex h-full flex-col rounded-xl border border-gray-300/50 bg-[#fff] p-5 sm:p-6"
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
                Your brand. Your locations. A clear next step.
              </span>
              <span className="mt-1 block text-base text-white/70">
                Choose the call types and handling tasks your franchise network needs.
              </span>
            </span>
          </p>
          <Link
            prefetch={false}
            href="/contact-us"
            className="icon-mask icon-arrow-right [--icon-size:0.9rem] inline-flex flex-shrink-0 flex-row-reverse items-center gap-3 rounded-lg bg-[#8CA365] px-6 py-3.5 text-base font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#9cb374]"
          >
            Build My Franchise Call Plan
          </Link>
        </div>

        {/* What a given plan supports is agreed at setup, so the cards describe
            tasks rather than promise all of them. */}
        <p className="mt-5 text-center text-sm text-gray-600">
          Call handling follows your agreed brand and location instructions.
        </p>
      </div>
    </section>
  )
}
