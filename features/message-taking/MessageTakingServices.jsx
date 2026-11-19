import Link from 'next/link'

// Section 3. Eight cards, four-up on large screens so both rows fill exactly.
const SERVICES = [
  {
    icon: 'icon-user-plus',
    title: 'New Customer Enquiries',
    body: "Capture the service requested and the caller's contact details for your team to follow up.",
  },
  {
    icon: 'icon-user',
    title: 'Existing Customer Messages',
    body: 'Record why the customer called and any agreed reference details for the relevant contact.',
  },
  {
    icon: 'icon-price-tag',
    title: 'Quote & Estimate Requests',
    body: 'Note the requested work and callback preference so your team can review the enquiry.',
  },
  {
    icon: 'icon-calendar-chat',
    title: 'Appointment Requests',
    body: 'Take booking, rescheduling or cancellation requests for your scheduling team to review.',
  },
  {
    icon: 'icon-briefcase',
    title: 'Supplier & Partner Calls',
    body: "Capture the caller's company, reason for calling and the person they wish to reach.",
  },
  {
    icon: 'icon-report',
    title: 'Billing & Account Enquiries',
    body: 'Record account-related questions and pass the message to your designated business contact.',
  },
  {
    icon: 'icon-phone-forward',
    title: 'Service Follow-Up Requests',
    body: 'Capture requests for an update and the details your team needs to return the call.',
  },
  {
    icon: 'icon-users',
    title: 'Staff & Department Messages',
    body: 'Note who the caller wants to reach and send their message to the agreed recipient.',
  },
]

const AUDIENCES = ['New customers', 'Existing customers', 'Partners', 'Your team']

export default function MessageTakingServices() {
  return (
    <section className="w-full bg-[#f8f7f2] py-14 md:py-16" aria-labelledby="message-taking-services-heading">
      <div className="site-container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="icon-mask icon-doc-reply [--icon-size:1rem] inline-flex items-center gap-2 bg-[#8CA365]/10 text-[#5f7a3a] rounded-full text-sm font-semibold px-4 py-1.5">
            Message taking services
          </p>
          <h2
            id="message-taking-services-heading"
            className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.14] tracking-tight text-[#1b4332]"
          >
            Business Calls We Can{' '}
            <br />
            Take a Message For
          </h2>
          <p className="mt-3 text-lg leading-relaxed text-gray-600">
            Capture enquiries, callback requests and business messages with the details your team needs to follow up.
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
          <p>
            <span className="block text-[1.15rem] font-extrabold text-white">
              Your callers. Your questions. A clear message.
            </span>
            <span className="mt-1 block text-base text-white/70">
              Choose the details your team needs for follow-up.
            </span>
          </p>
          <Link
            prefetch={false}
            href="/contact-us"
            className="icon-mask icon-arrow-right [--icon-size:0.9rem] inline-flex flex-shrink-0 flex-row-reverse items-center gap-3 rounded-lg bg-[#8CA365] px-6 py-3.5 text-base font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#9cb374]"
          >
            Build My Message Taking Plan
          </Link>
        </div>

        {/* Keeps the scope honest: a request recorded is not a confirmed
            booking or an answered account question. */}
        <p className="mt-5 text-center text-sm text-gray-600">
          Appointment requests and account enquiries are recorded for your team to review.
        </p>
      </div>
    </section>
  )
}
