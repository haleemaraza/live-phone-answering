import Link from 'next/link'

const BENEFITS = [
  {
    icon: 'icon-clipboard-check',
    title: 'Better-Informed Follow-Up',
    body: "Start the next conversation with the caller's contact details, service needs, and preferred next step. Spend less time piecing together incomplete messages.",
  },
  {
    icon: 'icon-clock',
    title: 'Fewer Interruptions for Your Team',
    body: 'Let receptionists handle initial enquiries while your staff focus on customers and ongoing work. Route calls according to the instructions you approve.',
  },
  {
    icon: 'icon-filter-check',
    title: 'Clearer Priorities for New Enquiries',
    body: 'Where qualification is included, use agreed criteria to flag relevant enquiries and route them to the right person. Give your team context for deciding what to do next.',
  },
  {
    icon: 'icon-chat',
    title: 'A More Helpful First Impression',
    body: "Give prospective customers a real person to speak with. Capture their questions and explain the next step using your business's approved information.",
  },
]

export default function LeadCaptureBenefits() {
  return (
    <section
      className="w-full bg-[#f8f7f2] px-4 py-14 md:py-16 lg:px-[5%]"
      aria-labelledby="lead-capture-benefits-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="icon-mask icon-smile [--icon-size:1rem] inline-flex items-center gap-2 bg-[#8CA365]/10 text-[#5f7a3a] rounded-full text-sm font-semibold px-4 py-1.5">
            Benefits of lead capture answering
          </p>
          <h2
            id="lead-capture-benefits-heading"
            className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.14] tracking-tight text-[#1b4332]"
          >
            Turn Inbound Enquiries
            <br />
            Into Clear Next Steps
          </h2>
          <p className="mt-3 text-[0.95rem] leading-relaxed text-gray-600">
            Give your team useful caller details and more time to act on them. Help prospective customers move forward
            with a clear, professional first response.
          </p>
        </div>

        <div className="mt-9 grid grid-cols-1 items-stretch gap-8 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1fr)] lg:gap-11">
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
                  <span className="mt-1 block text-[0.84rem] leading-relaxed text-gray-600">{benefit.body}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 flex flex-col items-start gap-5 rounded-xl bg-[#eef0e6] px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[1.15rem] font-extrabold text-[#1b4332]">
            Make your next follow-up a better-informed conversation.
          </p>
          <Link
            prefetch={false}
            href="/contact-us"
            className="icon-mask icon-arrow-right [--icon-size:0.9rem] inline-flex flex-shrink-0 flex-row-reverse items-center gap-3 rounded-lg bg-[#1d4b37] px-6 py-3.5 text-[0.88rem] font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#164032]"
          >
            Get My Lead Capture Quote
          </Link>
        </div>
      </div>
    </section>
  )
}
