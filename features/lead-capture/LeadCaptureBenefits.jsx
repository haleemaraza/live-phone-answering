import Link from 'next/link'

const BENEFITS = [
  {
    icon: 'icon-clipboard-check',
    title: 'Reach Back Out with Confidence',
    body: 'No more guessing or chasing down missing information. Your team gets complete details, like who called, what they need, and their timeline, so you can start every call ready to help right away.',
  },
  {
    icon: 'icon-clock',
    title: 'Keep Your Day Distraction-Free',
    body: 'Stop losing your momentum to constant phone interruptions. We handle the initial intake so your staff can stay focused on serving current clients and finishing important work uninterrupted.',
  },
  {
    icon: 'icon-filter-check',
    title: 'Focus Only on Your Best Leads',
    body: 'We organize incoming calls using your specific criteria. High-priority opportunities get flagged and sent directly to the right person, so your team can reach the potential client before a competitor does.',
  },
  {
    icon: 'icon-chat',
    title: 'Create a Great First Impression',
    body: 'Ditch automated voice menus and give callers a real human touch. A helpful voice greets your potential clients right away, answers basic questions, and makes them feel cared for immediately.',
  },
]

export default function LeadCaptureBenefits() {
  return (
    <section
      className="w-full bg-[#f8f7f2] py-14 md:py-16"
      aria-labelledby="lead-capture-benefits-heading"
    >
      <div className="site-container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="icon-mask icon-smile [--icon-size:1rem] inline-flex items-center gap-2 bg-[#8CA365]/10 text-[#5f7a3a] rounded-full text-sm font-semibold px-4 py-1.5">
            Why smart lead capture works for you
          </p>
          <h2
            id="lead-capture-benefits-heading"
            className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.14] tracking-tight text-[#1b4332]"
          >
            Turn Incoming Calls into
            <br />
            Ready-to-Buy Clients
          </h2>
          <p className="mt-3 text-lg leading-relaxed text-gray-600">
            Give your team the right details so they can close deals faster, while giving your callers a warm,
            professional welcome from the first second.
          </p>
        </div>

        <div className="mt-9 grid grid-cols-1 items-stretch gap-8 lg:grid-cols-[minmax(0,1.22fr)_minmax(0,1fr)] lg:gap-11">
          {/* The photo absorbs the height difference so both columns stay level. */}
          {/* The caption panel is part of the supplied artwork, so it is not
              drawn again in HTML and the photo is not cropped. */}
          <figure className="overflow-hidden rounded-xl">
            <img
              src="/images/lead-capture-benefits.webp"
              alt="A receptionist in a green blazer smiling as she takes notes for a visitor at a front desk, above the line: Be present for the people you serve. Let your receptionists handle the first enquiry."
              width={1100}
              height={892}
              loading="lazy"
              decoding="async"
              className="block h-auto w-full"
            />
          </figure>

          <ul className="flex h-full list-none flex-col divide-y divide-gray-300/50">
            {BENEFITS.map((benefit, index) => (
              <li
                key={benefit.title}
                className={`flex flex-1 items-center gap-4 py-4 ${index === 0 ? 'lg:pt-0' : ''}`}
              >
                <span
                  className={`icon-mask ${benefit.icon} [--icon-size:1.4rem] flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#eaf1dd] text-[#1b4332]`}
                  aria-hidden="true"
                ></span>
                <span className="min-w-0">
                  <span className="block text-[1rem] font-bold leading-snug text-[#1a2e35]">{benefit.title}</span>
                  <span className="mt-1 block text-base leading-relaxed text-gray-600">{benefit.body}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 flex flex-col items-start gap-5 rounded-xl bg-[#eef0e6] px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[1.15rem] font-extrabold text-[#1b4332]">
            Give your team the context they need to turn calls into customers.
          </p>
          <Link
            prefetch={false}
            href="/contact-us"
            className="icon-mask icon-arrow-right [--icon-size:0.9rem] inline-flex flex-shrink-0 flex-row-reverse items-center gap-3 rounded-lg bg-[#1d4b37] px-6 py-3.5 text-base font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#164032]"
          >
            Get My Lead Capture Quote
          </Link>
        </div>
      </div>
    </section>
  )
}
