import Link from 'next/link'

// Section 4: the routing steps on the left, a worked call example on the
// right, then the exception handling underneath.
const STEPS = [
  {
    number: '01',
    icon: 'icon-home',
    title: 'Confirm the Service Address',
    body: 'Ask where the service is needed and what the customer is requesting.',
  },
  {
    number: '02',
    icon: 'icon-check-search',
    title: 'Check the Approved Territory',
    body: 'Match the address and service type against your franchise directory.',
  },
  {
    number: '03',
    icon: 'icon-phone-forward',
    title: 'Follow the Local Call Plan',
    body: 'Attempt the approved transfer or capture a callback request.',
  },
  {
    number: '04',
    icon: 'icon-clipboard-check',
    title: 'Record the Next Step',
    body: 'Identify the receiving team and clearly state the outcome.',
  },
]

const EXAMPLE_ROWS = [
  { label: 'Call type', value: 'New customer enquiry' },
  { label: 'Service area', value: 'North territory' },
  { label: 'Assigned to', value: 'Local franchise team' },
  { label: 'Action taken', value: 'Callback request sent' },
]

const EXCEPTIONS = [
  {
    icon: 'icon-overlap',
    title: 'Overlapping Territories',
    body: 'Send uncertain matches to your nominated review contact before assigning the enquiry.',
  },
  {
    icon: 'icon-split-arrows',
    title: 'Outside Coverage',
    body: 'Use your approved response and record the request for the designated team to review.',
  },
  {
    icon: 'icon-phone-forward',
    title: 'Location Unavailable',
    body: 'Follow the agreed backup or callback route while keeping the enquiry with its assigned territory.',
  },
]

export default function FranchiseRouting() {
  return (
    <section className="w-full bg-[#f8f7f2] py-14 md:py-16" aria-labelledby="franchise-routing-heading">
      <div className="site-container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="icon-mask icon-buildings-arrow [--icon-size:1rem] inline-flex items-center gap-2 bg-[#8CA365]/10 text-[#5f7a3a] rounded-full text-sm font-semibold px-4 py-1.5">
            Location &amp; territory routing
          </p>
          <h2
            id="franchise-routing-heading"
            className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.14] tracking-tight text-[#1b4332]"
          >
            Help Every Enquiry Reach{' '}
            <br />
            the Right Franchise Location
          </h2>
          <p className="mt-3 text-lg leading-relaxed text-gray-600">
            Use your approved service areas and local instructions to give each enquiry a clear destination.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 items-stretch gap-5 lg:grid-cols-2 lg:gap-7">
          <ol className="list-none rounded-xl border border-gray-300/50 bg-white p-6 sm:p-7">
            {STEPS.map((step, index) => (
              <li key={step.number} className={`flex items-start gap-4 ${index > 0 ? 'mt-6' : ''}`}>
                <span
                  className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border-2 border-[#8CA365] text-sm font-bold text-[#4f6630]"
                  aria-hidden="true"
                >
                  {step.number}
                </span>
                <span
                  className={`icon-mask ${step.icon} [--icon-size:1.4rem] flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-[#eef2e6] text-[#4f6630]`}
                  aria-hidden="true"
                ></span>
                <span className="min-w-0">
                  <h3 className="text-[1.02rem] font-bold leading-snug text-[#1b4332]">{step.title}</h3>
                  <span className="mt-1 block text-base leading-relaxed text-gray-600">{step.body}</span>
                </span>
              </li>
            ))}
          </ol>

          <div className="rounded-xl bg-[#1d4b37] p-6 sm:p-7">
            <p className="flex items-start gap-4">
              <span
                className="icon-mask icon-phone-chat [--icon-size:1.6rem] flex-shrink-0 border-r border-white/20 pr-4 text-[#a8c47d]"
                aria-hidden="true"
              ></span>
              <span className="min-w-0">
                <span className="block text-[0.62rem] font-bold uppercase tracking-[0.16em] text-[#a8c47d]">
                  Illustrative call example
                </span>
                <span className="mt-1 block text-[1.2rem] font-extrabold leading-snug text-white">
                  An enquiry with a clear destination.
                </span>
              </span>
            </p>

            <dl className="mt-5 grid grid-cols-[minmax(0,8rem)_minmax(0,1fr)] border-t border-white/15">
              {EXAMPLE_ROWS.map((row) => (
                <div key={row.label} className="contents">
                  <dt className="border-b border-white/10 py-3 text-base font-bold text-white">{row.label}</dt>
                  <dd className="border-b border-white/10 py-3 text-base text-white/75">{row.value}</dd>
                </div>
              ))}
            </dl>

            <p className="mt-5 rounded-lg bg-[#c9dfb0] px-5 py-3.5 text-center text-[1.05rem] font-bold text-[#1a2e35]">
              Awaiting local follow-up
            </p>
          </div>
        </div>

        <h3 className="mt-9 text-[1.3rem] font-extrabold text-[#1b4332]">Clear instructions for the exceptions, too.</h3>

        <ul className="mt-4 grid list-none grid-cols-1 gap-6 border-t border-gray-300/50 pt-6 sm:grid-cols-3 sm:divide-x sm:divide-gray-300/50">
          {EXCEPTIONS.map((exception, index) => (
            <li key={exception.title} className={index > 0 ? 'sm:pl-6' : ''}>
              <span
                className={`icon-mask ${exception.icon} [--icon-size:1.6rem] block text-[#4f6630]`}
                aria-hidden="true"
              ></span>
              <h4 className="mt-3 text-[1.02rem] font-bold leading-snug text-[#1b4332]">{exception.title}</h4>
              <p className="mt-1.5 text-base leading-relaxed text-gray-600">{exception.body}</p>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-col items-start gap-5 border-t border-gray-300/50 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[1.15rem] font-extrabold text-[#1b4332]">
            Your territories. Your routing rules. A clear handoff.
          </p>
          <Link
            prefetch={false}
            href="/contact-us"
            className="icon-mask icon-arrow-right [--icon-size:0.9rem] inline-flex flex-shrink-0 flex-row-reverse items-center gap-3 rounded-lg bg-[#1d4b37] px-6 py-3.5 text-base font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#164032]"
          >
            Plan My Franchise Call Routing
          </Link>
        </div>
      </div>
    </section>
  )
}
