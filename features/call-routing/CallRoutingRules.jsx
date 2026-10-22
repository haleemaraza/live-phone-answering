import Link from 'next/link'

const STEPS = [
  {
    icon: 'icon-users',
    title: 'Choose the right destination',
    body: 'Match enquiries to an agreed staff member, department, or location.',
  },
  {
    icon: 'icon-clock',
    title: 'Set contact windows',
    body: 'Define when to attempt transfers and which availability instructions to follow.',
  },
  {
    icon: 'icon-report',
    title: 'Plan the next step',
    body: 'Specify an alternate contact or the details to capture for a callback.',
  },
]

// A worked example, labelled as one on screen.
const PLAN_ROWS = [
  {
    icon: 'icon-calendar',
    title: 'Appointment enquiry',
    first: 'Booking team',
    fallback: 'Capture a callback request',
  },
  {
    icon: 'icon-report',
    title: 'Billing question',
    first: 'Accounts contact',
    fallback: 'Send an administrative message',
  },
  {
    icon: 'icon-user',
    title: 'Named staff request',
    first: 'Listed contact during agreed hours',
    fallback: 'Try an approved alternate or take a message',
  },
]

export default function CallRoutingRules() {
  return (
    <section className="w-full bg-[#f8f7f2] py-14 md:py-16" aria-labelledby="call-routing-rules-heading">
      <div className="site-container">
        <div className="grid grid-cols-1 items-start gap-9 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] lg:gap-12">
          <div>
            <p className="icon-mask icon-sliders [--icon-size:1rem] inline-flex items-center gap-2 bg-[#8CA365]/10 text-[#5f7a3a] rounded-full text-sm font-semibold px-4 py-1.5">
              Routing rules &amp; backup handling
            </p>

            <h2
              id="call-routing-rules-heading"
              className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.14] tracking-tight text-[#1b4332]"
            >
              Your Call Routing Rules,
              <br />
              From First Contact to
              <br />
              Backup Plan
            </h2>

            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              Tell us who should receive each type of call, when to try them, and what to do if they cannot answer. Our
              receptionists follow the instructions you approve.
            </p>

            <ul className="mt-7 list-none space-y-6">
              {STEPS.map((step) => (
                <li key={step.title} className="flex items-start gap-4">
                  <span
                    className={`icon-mask ${step.icon} [--icon-size:1.3rem] flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-[#eef2e6] text-[#4f6630]`}
                    aria-hidden="true"
                  ></span>
                  <span className="min-w-0">
                    <span className="block text-[1rem] font-bold leading-snug text-[#1a2e35]">{step.title}</span>
                    <span className="mt-1 block text-base leading-relaxed text-gray-600">{step.body}</span>
                  </span>
                </li>
              ))}
            </ul>

            <Link
              prefetch={false}
              href="/contact-us"
              className="icon-mask icon-arrow-right [--icon-size:0.95rem] mt-7 inline-flex flex-row-reverse items-center gap-3 rounded-lg bg-[#1d4b37] px-7 py-3.5 text-lg font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#164032]"
            >
              Build My Routing Plan
            </Link>
          </div>

          <div>
            <div className="overflow-hidden rounded-xl bg-white shadow-lg">
              <div className="bg-[#1d4b37] px-6 py-5">
                <p className="text-[0.62rem] font-bold uppercase tracking-[0.16em] text-white/60">
                  Illustrative routing plan
                </p>
                <p className="mt-1 text-[1.45rem] font-extrabold leading-tight text-white">Medical Practice</p>
                <p className="mt-1 text-base font-semibold text-[#a8c47d]">
                  Administrative calls &bull; Approved contacts
                </p>
              </div>

              <div className="divide-y divide-gray-200">
                {PLAN_ROWS.map((row) => (
                  <div key={row.title} className="flex items-start gap-4 px-6 py-4">
                    <span
                      className={`icon-mask ${row.icon} [--icon-size:1.2rem] flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[#eef2e6] text-[#4f6630]`}
                      aria-hidden="true"
                    ></span>
                    <span className="min-w-0 flex-grow">
                      <span className="block text-[1rem] font-bold text-[#1a2e35]">{row.title}</span>
                      <span className="mt-2 grid grid-cols-[minmax(0,7.5rem)_minmax(0,1fr)] gap-x-3 gap-y-1.5">
                        <span className="text-[0.62rem] font-bold uppercase tracking-[0.12em] text-gray-500">
                          First contact
                        </span>
                        <span className="text-base text-gray-700">{row.first}</span>
                        <span className="text-[0.62rem] font-bold uppercase tracking-[0.12em] text-gray-500">
                          If unavailable
                        </span>
                        <span className="text-base text-gray-700">{row.fallback}</span>
                      </span>
                    </span>
                  </div>
                ))}
              </div>

              <div className="m-4 flex items-center gap-4 rounded-lg bg-[#eef2e6] px-5 py-4">
                <span
                  className="icon-mask icon-report [--icon-size:1.3rem] flex-shrink-0 border-r border-gray-400/40 pr-4 text-[#4f6630]"
                  aria-hidden="true"
                ></span>
                <span className="min-w-0">
                  <span className="block text-lg font-bold text-[#1a2e35]">Useful callback details</span>
                  <span className="mt-0.5 block text-base text-gray-600">
                    Caller name &bull; Callback number &bull; Reason for calling
                  </span>
                </span>
              </div>
            </div>

            {/* The example is a medical practice, so it is explicitly scoped to
                administrative handling and not advice or a booking. */}
            <p className="mt-2.5 text-[0.76rem] text-gray-500">
              Example only. Administrative call handling; no medical advice or appointment confirmation.
            </p>
          </div>
        </div>

        <p className="icon-mask icon-check-circle [--icon-size:1.25rem] mt-9 flex items-center gap-3 border-t border-gray-300/50 pt-6 text-base text-gray-600 before:text-[#5f7a3a]">
          Your contact list, transfer options, and backup instructions are confirmed during setup.
        </p>
      </div>
    </section>
  )
}
