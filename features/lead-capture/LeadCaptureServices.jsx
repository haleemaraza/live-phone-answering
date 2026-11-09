import Link from 'next/link'

const SERVICES = [
  {
    icon: 'icon-id-card',
    title: 'Inbound Lead Intake',
    body: 'We welcome new callers, find out what they are looking for, and collect their contact details. Your team gets the information they need to pick up the conversation without asking customers to repeat themselves.',
  },
  {
    icon: 'icon-intake-list',
    title: 'Custom Qualification Questions',
    body: 'Not every enquiry is the right fit, and that is okay. We ask the questions you have approved to understand what the caller needs, where they are located, and when they are looking to get started.',
  },
  {
    icon: 'icon-call-screen',
    title: 'Sales Enquiry Screening',
    body: 'We help your team separate new sales opportunities from existing customer calls and general enquiries. Each caller is guided to the right next step, so your sales team can spend more time talking to potential customers.',
  },
  {
    icon: 'icon-share',
    title: 'Priority Lead Routing',
    body: 'When someone is ready to move forward, we help make sure their enquiry reaches the right person. If your team is not available, we take their details and follow your instructions for a callback.',
  },
  {
    icon: 'icon-report',
    title: 'Structured Lead Summaries',
    body: 'We turn each conversation into a clear summary your team can quickly understand and act on. You will know who called, what they need, and what needs to happen next without going through lengthy call notes.',
  },
  {
    icon: 'icon-calendar-chat',
    title: 'Appointment Request Capture',
    body: 'When a caller wants to book a consultation, estimate, or service visit, we collect their preferred date and time. Your team receives the request and can confirm the appointment based on their availability.',
    cta: { href: '/appointment-scheduling', label: 'Explore appointment scheduling' },
  },
]

export default function LeadCaptureServices() {
  return (
    <section
      className="w-full bg-[#f7f6f1] py-14 md:py-16"
      aria-labelledby="lead-capture-services-heading"
    >
      <div className="site-container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="icon-mask icon-user-plus [--icon-size:1rem] inline-flex items-center gap-2 bg-[#8CA365]/10 text-[#5f7a3a] rounded-full text-sm font-semibold px-4 py-1.5">
            We help you with lead capturing
          </p>
          <h2
            id="lead-capture-services-heading"
            className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.14] tracking-tight text-[#1b4332]"
          >
            What Lead Capture and Intake{' '}
            <br />
            Services Do We Offer?
          </h2>
          <p className="mt-3 text-lg leading-relaxed text-gray-600">
            Give every potential customer a helpful first response. From collecting their details to identifying
            promising leads, we make sure each enquiry gets the attention and follow-up it needs.
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

              <p className="mt-4 flex-grow text-base leading-relaxed text-gray-600">{service.body}</p>

              {service.cta && (
                <Link
                  prefetch={false}
                  href={service.cta.href}
                  className="icon-mask icon-arrow-right [--icon-size:0.8rem] mt-3 inline-flex flex-row-reverse items-center gap-2 self-start text-base font-semibold text-[#5f7a3a] underline underline-offset-4 transition-colors hover:text-[#1b4332]"
                >
                  {service.cta.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-col items-start gap-5 rounded-xl bg-[#eaf0e0] px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[1.15rem] font-extrabold text-[#1b4332]">
            Let&rsquo;s make sure no promising lead slips through the cracks.
          </p>
          <Link
            prefetch={false}
            href="/contact-us"
            className="icon-mask icon-arrow-right [--icon-size:0.9rem] inline-flex flex-shrink-0 flex-row-reverse items-center gap-3 rounded-lg bg-[#1d4b37] px-6 py-3.5 text-base font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#164032]"
          >
            Build My Lead Capture Plan
          </Link>
        </div>

        {/* What a given plan covers is agreed at setup, so the cards describe
            tasks rather than promise all of them. */}
        <p className="mt-5 text-center text-sm text-gray-600">
          We&rsquo;ll agree on the questions to ask, how to prioritize enquiries, and where your team&rsquo;s lead
          details should be sent during setup.
        </p>
      </div>
    </section>
  )
}
