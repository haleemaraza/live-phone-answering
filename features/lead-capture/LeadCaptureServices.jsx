import Link from 'next/link'

const SERVICES = [
  {
    icon: 'icon-id-card',
    title: 'Inbound Lead Intake',
    body: "Capture each caller's name, contact details, service needs, and preferred next step. Give your team useful information for a well-prepared follow-up.",
  },
  {
    icon: 'icon-intake-list',
    title: 'Custom Qualification Questions',
    body: 'Ask your approved questions about location, service requirements, and timeframe. Check enquiry details against the criteria agreed for your plan.',
  },
  {
    icon: 'icon-call-screen',
    title: 'Sales Enquiry Screening',
    body: 'Distinguish new prospects from existing customers and other callers. Follow your instructions to guide each enquiry to the appropriate next step.',
  },
  {
    icon: 'icon-share',
    title: 'Priority Lead Routing',
    body: 'Flag suitable enquiries and transfer callers when your team is available. When a transfer is unavailable, follow your agreed callback process.',
  },
  {
    icon: 'icon-report',
    title: 'Structured Lead Summaries',
    body: 'Organize captured details into clear, consistent summaries. Send the enquiry to your agreed contact through the delivery method set up for your business.',
  },
  {
    icon: 'icon-calendar-chat',
    title: 'Appointment Request Capture',
    body: 'Record requests for consultations, estimates, or service visits, including preferred times. Pass them to your team for confirmation.',
    cta: { href: '/appointment-scheduling', label: 'Explore appointment scheduling' },
  },
]

export default function LeadCaptureServices() {
  return (
    <section
      className="w-full bg-[#f7f6f1] px-4 py-14 md:py-16 lg:px-[5%]"
      aria-labelledby="lead-capture-services-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="icon-mask icon-user-plus [--icon-size:1rem] inline-flex items-center gap-2 bg-[#8CA365]/10 text-[#5f7a3a] rounded-full text-sm font-semibold px-4 py-1.5">
            Lead capture support
          </p>
          <h2
            id="lead-capture-services-heading"
            className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.14] tracking-tight text-[#1b4332]"
          >
            Lead Capture and Intake
            <br />
            Services We Handle
          </h2>
          <p className="mt-3 text-[0.95rem] leading-relaxed text-gray-600">
            Give every enquiry a consistent first response. Choose the intake, screening, and handoff support that fits
            your business.
          </p>
        </div>

        <ul className="mt-8 grid list-none grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <li
              key={service.title}
              className="flex h-full flex-col rounded-xl border border-gray-300/50 bg-[#fff] p-5 sm:p-6"
            >
              {/* Icon and title share a row, as in the reference; the body sits
                  below at full card width rather than indented under the title. */}
              <div className="flex items-center gap-4">
                <span
                  className={`icon-mask ${service.icon} [--icon-size:1.6rem] flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-[#eef2e6] text-[#1b4332]`}
                  aria-hidden="true"
                ></span>
                <h3 className="text-[1.02rem] font-bold leading-snug text-[#1b4332]">{service.title}</h3>
              </div>

              <p className="mt-4 flex-grow text-[0.84rem] leading-relaxed text-gray-600">{service.body}</p>

              {service.cta && (
                <Link
                  prefetch={false}
                  href={service.cta.href}
                  className="icon-mask icon-arrow-right [--icon-size:0.8rem] mt-3 inline-flex flex-row-reverse items-center gap-2 self-start text-[0.82rem] font-semibold text-[#5f7a3a] underline underline-offset-4 transition-colors hover:text-[#1b4332]"
                >
                  {service.cta.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-col items-start gap-5 rounded-xl bg-[#eaf0e0] px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[1.15rem] font-extrabold text-[#1b4332]">
            Let&rsquo;s plan what happens when a new prospect calls.
          </p>
          <Link
            prefetch={false}
            href="/contact-us"
            className="icon-mask icon-arrow-right [--icon-size:0.9rem] inline-flex flex-shrink-0 flex-row-reverse items-center gap-3 rounded-lg bg-[#1d4b37] px-6 py-3.5 text-[0.88rem] font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#164032]"
          >
            Build My Lead Capture Plan
          </Link>
        </div>

        {/* What a given plan covers is agreed at setup, so the cards describe
            tasks rather than promise all of them. */}
        <p className="mt-5 text-center text-[0.78rem] text-gray-600">
          Intake questions, routing rules, and delivery options are agreed during setup.
        </p>
      </div>
    </section>
  )
}
