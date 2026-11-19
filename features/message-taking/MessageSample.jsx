import Link from 'next/link'

// Section 6. The hero's "See a Sample Message" link targets this section.
const POINTS = [
  {
    icon: 'icon-chat',
    title: 'Who Called and Why',
    body: "See the caller's name and the reason for their call.",
  },
  {
    icon: 'icon-phone-chat',
    title: 'Details for the Callback',
    body: 'Review the callback number and any agreed reference details.',
  },
  {
    icon: 'icon-doc-arrow',
    title: 'A Clear Next Step',
    body: 'Know who the message is for and what follow-up was requested.',
  },
]

// A worked example, labelled as fictional on screen.
const MESSAGE_ROWS = [
  { label: 'Caller', value: 'Jordan Taylor' },
  { label: 'Callback number', value: '+1 202 555 0146' },
  { label: 'Reason for calling', value: 'Requested a callback about a service quote.' },
  { label: 'Preferred callback', value: "Today, after 2 pm — caller's request" },
  { label: 'Message recipient', value: 'Sales team' },
]

export default function MessageSample() {
  return (
    <section
      id="sample-message"
      className="w-full scroll-mt-28 bg-[#f8f7f2] py-14 md:py-16"
      aria-labelledby="message-sample-heading"
    >
      <div className="site-container">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-12">
          <div>
            <p className="icon-mask icon-mail [--icon-size:1rem] inline-flex items-center gap-2 bg-[#8CA365]/10 text-[#5f7a3a] rounded-full text-sm font-semibold px-4 py-1.5">
              What your message contains
            </p>
            <h2
              id="message-sample-heading"
              className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.12] tracking-tight text-[#1b4332]"
            >
              See the Details{' '}
              <br />
              Your Team{' '}
              <br />
              Receives
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              A structured message gives your team the context they need before returning the call.
            </p>

            <ul className="mt-6 list-none space-y-5">
              {POINTS.map((point) => (
                <li key={point.title} className="flex items-start gap-4">
                  <span
                    className={`icon-mask ${point.icon} [--icon-size:1.4rem] flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-[#eef2e6] text-[#4f6630]`}
                    aria-hidden="true"
                  ></span>
                  <span className="min-w-0">
                    <h3 className="text-[1.02rem] font-bold leading-snug text-[#1b4332]">{point.title}</h3>
                    <span className="mt-1 block text-base leading-relaxed text-gray-600">{point.body}</span>
                  </span>
                </li>
              ))}
            </ul>

            <Link
              prefetch={false}
              href="/contact-us"
              className="icon-mask icon-arrow-right [--icon-size:0.9rem] mt-7 inline-flex flex-row-reverse items-center gap-3 rounded-lg bg-[#8CA365] px-6 py-3.5 text-base font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#9cb374]"
            >
              Build My Message Taking Plan
            </Link>
          </div>

          <div>
            <div className="overflow-hidden rounded-xl border border-gray-300/50 bg-white">
              <p className="flex items-center gap-4 bg-[#1d4b37] px-5 py-4 sm:px-6">
                <span
                  className="icon-mask icon-mail [--icon-size:1.6rem] flex-shrink-0 border-r border-white/20 pr-4 text-[#a8c47d]"
                  aria-hidden="true"
                ></span>
                <span className="min-w-0">
                  <span className="block text-[0.62rem] font-bold uppercase tracking-[0.16em] text-[#a8c47d]">
                    Sample call message
                  </span>
                  <span className="mt-0.5 block text-[1.3rem] font-extrabold leading-snug text-white">
                    New quote enquiry
                  </span>
                </span>
              </p>

              <dl className="grid grid-cols-[minmax(0,10rem)_minmax(0,1fr)]">
                {MESSAGE_ROWS.map((row) => (
                  <div key={row.label} className="contents">
                    <dt className="border-b border-gray-200 px-5 py-3.5 text-base font-bold text-[#1a2e35] sm:px-6">
                      {row.label}
                    </dt>
                    <dd className="border-b border-gray-200 px-5 py-3.5 text-base text-gray-600 sm:px-6">
                      {row.value}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="m-4 rounded-lg bg-[#eef2e6] px-5 py-4">
                <p className="text-[0.62rem] font-bold uppercase tracking-[0.16em] text-[#5f7a3a]">Next step</p>
                <p className="mt-1 text-base text-gray-700">Your team reviews the request and returns the call.</p>
              </div>
            </div>

            {/* The message is an example, so it is labelled as one rather than
                read as a record of a real caller. */}
            <p className="mt-2.5 text-[0.76rem] text-gray-500">
              Fictional example. Message fields are agreed during setup.
            </p>
          </div>
        </div>

        <p className="mt-8 border-t border-gray-300/50 pt-6 text-[1.05rem] font-bold text-[#1b4332]">
          Choose the questions that help your team follow up.
        </p>
      </div>
    </section>
  )
}
