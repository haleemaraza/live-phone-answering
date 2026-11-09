import Link from 'next/link'

// Section 5. Lead-capture specific, so it is its own component rather than a
// change to the shared homepage integrations section.
const CONNECTIONS = [
  {
    icon: 'icon-check-search',
    title: 'Prospect Identification & Enrichment',
    body: 'Match incoming caller numbers with B2B database intelligence to surface fuller profile details. Tools like Apollo.io and ZoomInfo can enrich a record before your sales reps make the callback.',
  },
  {
    icon: 'icon-users',
    title: 'Lead Management & Pipeline Tracking',
    body: 'Sync caller notes and lead qualification status to your central CRM once the call concludes. Platforms like HubSpot and Pipedrive help make sure no prospect drops out of your conversion pipeline.',
  },
  {
    icon: 'icon-mail',
    title: 'Outreach & Sequence Automation',
    body: 'Trigger tailored email sequences based on the outcome of each phone call. Connecting with Instantly.ai or Lemlist means warm leads receive relevant follow-ups without delay.',
  },
  {
    icon: 'icon-calendar-check',
    title: 'Meeting Acceleration & Booking',
    body: 'Lock in discovery meetings while the lead is warm by scheduling onto your sales team calendars. Applications like Calendly and Chili Piper confirm appointments on the spot.',
  },
]

export default function LeadCaptureIntegrations() {
  return (
    <section className="w-full bg-[#fafaf8] py-14 md:py-16" aria-labelledby="lead-capture-integrations-heading">
      <div className="site-container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="icon-mask icon-share [--icon-size:1rem] inline-flex items-center gap-2 bg-[#8CA365]/10 text-[#5f7a3a] rounded-full text-sm font-semibold px-4 py-1.5">
            Platform and integrations
          </p>
          <h2
            id="lead-capture-integrations-heading"
            className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.14] tracking-tight text-[#1b4332]"
          >
            Seamlessly Syncs With{' '}
            <br />
            Your Growth Stack
          </h2>
          <p className="mt-3 text-lg leading-relaxed text-gray-600">
          Eliminate manual data entry and streamline your sales pipeline. Our call-handling platform captures prospect details and pushes lead data straight to your revenue software.
</p>
        </div>

        <ul className="mt-10 grid list-none grid-cols-1 gap-6 md:grid-cols-2">
          {CONNECTIONS.map((item) => (
            <li key={item.title} className="flex">
              <div className="group flex w-full flex-col rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#8CA365] hover:shadow-xl">
                <span
                  className={`icon-mask ${item.icon} [--icon-size:1.5rem] mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#8CA365]/10 text-[#4f6630] transition-transform duration-300 group-hover:scale-110`}
                  aria-hidden="true"
                ></span>
                <h3 className="text-xl font-bold leading-snug text-[#1a2e35]">{item.title}</h3>
                <p className="mt-3 flex-grow text-base leading-relaxed text-gray-600">{item.body}</p>
              </div>
            </li>
          ))}
        </ul>

        {/* Naming a product is not a promise that a direct integration exists. */}
        <p className="mt-5 text-center text-sm text-gray-600">
          Example tools &mdash; compatibility and connection methods are confirmed during setup.
        </p>

        <div className="mt-6 flex flex-col items-start gap-5 rounded-2xl bg-white px-6 py-5 shadow-sm sm:flex-row sm:items-center sm:justify-between">
          <p className="text-lg text-gray-600">
            Using a custom software setup?{' '}
            <span className="font-bold text-[#1a2e35]">Connect through Zapier &amp; Make.</span>
          </p>
          <Link
            prefetch={false}
            href="/contact-us"
            className="icon-mask icon-arrow-right [--icon-size:1rem] inline-flex flex-shrink-0 flex-row-reverse items-center gap-3 rounded-lg bg-[#8CA365] px-7 py-3 text-base font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#9cb374]"
          >
            Explore Integration Directory
          </Link>
        </div>
      </div>
    </section>
  )
}
