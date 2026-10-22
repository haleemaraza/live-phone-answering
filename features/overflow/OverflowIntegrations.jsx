import Link from 'next/link'

const TOOLS = [
  { slug: 'hubspot', name: 'HubSpot' },
  { slug: 'notion', name: 'Notion' },
  { slug: 'calendly', name: 'Calendly' },
  { slug: 'googlecalendar', name: 'Google Calendar' },
  { slug: 'zendesk', name: 'Zendesk' },
  { slug: 'zapier', name: 'Zapier' },
]

const GROUPS = [
  {
    title: 'CRM & Lead Capture',
    body: 'Capture caller details, service needs, and follow-up notes. Where supported, add inquiries to your CRM or deliver them through your agreed process so your team knows where to find each lead.',
    logos: [
      { slug: 'hubspot', name: 'HubSpot' },
      { slug: 'zoho', name: 'Zoho' },
      { slug: 'notion', name: 'Notion' },
    ],
  },
  {
    title: 'Scheduling & Calendar Tools',
    body: "Use supported calendars and your availability rules to arrange appointments. When direct booking is unavailable, pass the caller's preferred dates and times to your team for confirmation.",
    logos: [
      { slug: 'calendly', name: 'Calendly' },
      { slug: 'googlecalendar', name: 'Google Calendar' },
      { slug: 'airtable', name: 'Airtable' },
    ],
  },
  {
    title: 'Messages & Support Requests',
    body: 'Send useful call details to the right people through supported delivery channels. Define how customer questions and priority requests should be recorded and passed to your team.',
    logos: [
      { slug: 'zendesk', name: 'Zendesk' },
      { slug: 'intercom', name: 'Intercom' },
      { slug: 'helpscout', name: 'Help Scout' },
    ],
  },
]

// Same card and hover treatment as the homepage integrations section, so the
// two read as one design: the panel glows, the dashed line sends a dot across
// to the logo stack, and the border picks up the brand green.
function IntegrationCard({ group }) {
  return (
    <li className="group flex flex-col rounded-3xl border border-gray-200 bg-white/80 p-8 shadow-sm backdrop-blur-md transition-all duration-300 hover:border-[#8CA365] hover:shadow-xl">
      <div className="relative mb-6 flex h-32 items-center justify-center gap-4 overflow-hidden rounded-2xl bg-slate-50">
        <div
          className="absolute inset-0 bg-[#8CA365]/5 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100"
          aria-hidden="true"
        ></div>

        <span
          className="icon-mask icon-phone [--icon-size:1.25rem] z-10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#1d4b37] text-white shadow-md"
          aria-hidden="true"
        ></span>

        <span className="relative z-0 block h-0 w-12 border-t-2 border-dashed border-gray-300" aria-hidden="true">
          <span className="absolute -top-1 left-0 block h-2 w-2 rounded-full bg-[#8CA365] opacity-0 group-hover:animate-[dashFlow_1.5s_linear_infinite]"></span>
        </span>

        <span className="z-10 flex -space-x-3">
          {group.logos.map((logo) => (
            <span
              key={logo.slug}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-100 bg-white p-2 shadow-sm"
            >
              <img
                src={`/logos/${logo.slug}.svg`}
                alt={`${logo.name} logo`}
                width={24}
                height={24}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-contain"
              />
            </span>
          ))}
        </span>
      </div>

      <h3 className="mb-3 text-xl font-bold text-[#1a2e35]">{group.title}</h3>
      <p className="flex-grow text-sm leading-relaxed text-gray-600">{group.body}</p>
    </li>
  )
}

export default function OverflowIntegrations() {
  return (
    <section
      className="w-full bg-[#fafaf8] py-14 md:py-16"
      aria-labelledby="overflow-integrations-heading"
    >
      <div className="site-container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="icon-mask icon-share [--icon-size:1rem] inline-flex items-center gap-2 bg-[#8CA365]/10 text-[#5f7a3a] rounded-full text-sm font-semibold px-4 py-1.5">Platform and integrations</p>
          <h2
            id="overflow-integrations-heading"
            className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.14] tracking-tight text-[#1d4b37]"
          >
            Connect Overflow Calls
            <br />
            With Your Everyday Business Tools
          </h2>
          <p className="mt-3 text-lg leading-relaxed text-gray-600">
            Keep caller information moving through your business. Plan lead capture, appointment requests, and message
            delivery around the tools your team uses.
          </p>
        </div>

        <ul className="mt-8 flex list-none flex-wrap items-center justify-center gap-x-10 gap-y-5 sm:gap-x-14">
          {TOOLS.map((tool) => (
            <li key={tool.slug} className="flex h-10 items-center">
              <img
                src={`/logos/${tool.slug}.svg`}
                alt={`${tool.name} integration`}
                width={40}
                height={40}
                loading="lazy"
                decoding="async"
                className="h-9 w-auto transition-transform hover:scale-110"
              />
            </li>
          ))}
        </ul>

        {/* Keeps the tool list honest: naming a product is not a promise that a
            direct integration exists. */}
        <p className="mt-5 text-center text-[0.7rem] text-gray-600">
          Example tools &mdash; compatibility and connection methods confirmed during setup.
        </p>

        <ul className="mt-8 grid list-none grid-cols-1 gap-6 md:grid-cols-3">
          {GROUPS.map((group) => (
            <IntegrationCard key={group.title} group={group} />
          ))}
        </ul>

        <div className="mt-5 flex flex-col items-start gap-5 rounded-xl bg-[#1d4b37] px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
          <p>
            <span className="block text-lg font-bold text-white">
              Have a specific tool in mind? Let&rsquo;s check your setup.
            </span>
            <span className="mt-1 block text-sm text-white/70">
              Tell us which phone system and business tools you use.
            </span>
          </p>

          <Link
            prefetch={false}
            href="/contact-us"
            className="icon-mask icon-arrow-right [--icon-size:0.85rem] inline-flex flex-shrink-0 flex-row-reverse items-center gap-2.5 rounded-lg bg-[#8CA365] px-6 py-3 text-base font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#9cb374]"
          >
            Check My Integrations
          </Link>
        </div>
      </div>
    </section>
  )
}
