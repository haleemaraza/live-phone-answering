import Link from 'next/link'

const STEPS = [
  {
    icon: 'icon-users',
    title: 'Select the destination',
    body: 'Direct every incoming call straight to a specific team member, department, or office.',
  },
  {
    icon: 'icon-clock',
    title: 'Set call availability',
    body: "Establish custom timeframes for live transfers based on your team's schedule.",
  },
  {
    icon: 'icon-report',
    title: 'Define the backup',
    body: 'Choose secondary contacts or specify exact message details to collect when someone is away.',
  },
]

// A worked example, labelled as one on screen.
const PLAN_ROWS = [
  {
    icon: 'icon-home',
    title: 'Property Buying Enquiry',
    first: 'Sales & Acquisitions Team',
    fallback: 'Collect client preferences for a fast callback',
  },
  {
    icon: 'icon-gear',
    title: 'Property Management & Repairs',
    first: 'Maintenance Operations',
    fallback: 'Log an urgent service note for the duty manager',
  },
  {
    icon: 'icon-user',
    title: 'Direct Agent Request',
    first: 'Assigned agent during active hours',
    fallback: 'Forward to partner agent or take a message',
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
              Customizing Your Routing{' '}
              <br />
              Rules &amp; Fallback Plans
            </h2>

            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              You decide who takes each call, when transfers should happen, and how to handle missed connections. We
              simply carry out your exact plan.
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
                  Sample routing setup
                </p>
                <p className="mt-1 text-[1.45rem] font-extrabold leading-tight text-white">Real Estate Agency</p>
                <p className="mt-1 text-base font-semibold text-[#a8c47d]">Client calls &bull; Approved contacts</p>
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
                  <span className="block text-lg font-bold text-[#1a2e35]">Standard details captured</span>
                  <span className="mt-0.5 block text-base text-gray-600">
                    Caller name &bull; Best contact number &bull; Property address / ID &bull; Reason for calling
                  </span>
                </span>
              </div>
            </div>

            {/* The plan is a worked example, so it is labelled as one rather
                than read as the setup a customer will receive. */}
            <p className="mt-2.5 text-[0.76rem] text-gray-500">
              Illustrative setup only. Customized to your agency&rsquo;s operating hours and workflow.
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
