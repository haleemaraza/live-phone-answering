import Link from 'next/link'
import LogoMarquee from '@/components/LogoMarquee'

const GROUPS = [
  {
    title: 'CRM & Lead Management',
    body: 'Turn more inbound calls into useful business opportunities without adding extra work for your team. We collect caller details, record service inquiries, and add follow-up notes to your existing CRM, such as HubSpot or Notion, so lead tracking stays easy.',
    logos: [
      { slug: 'hubspot', name: 'HubSpot' },
      { slug: 'zoho', name: 'Zoho' },
      { slug: 'notion', name: 'Notion' },
    ],
  },
  {
    title: 'Scheduling & Calendar Tools',
    body: 'Make booking appointments easier for both your team and your callers. We work with tools like Google Calendar, Calendly, and Microsoft Outlook to check availability, schedule appointments, confirm bookings, and handle rescheduling requests.',
    logos: [
      { slug: 'calendly', name: 'Calendly' },
      { slug: 'googlecalendar', name: 'Google Calendar' },
      { slug: 'airtable', name: 'Airtable' },
    ],
  },
  {
    title: 'Messages & Support Requests',
    body: 'Make sure important customer requests reach the right person without delay. We can send urgent messages and call summaries through Slack, create support tickets in Zendesk, or use Zapier to trigger custom notifications and workflows.',
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
            Sync Every Call with{' '}
            <br />
            Your Existing Tech Stack
          </h2>
          <p className="mt-3 text-lg leading-relaxed text-gray-600">
            Automatically route lead data, calendar bookings, and detailed messages directly into the software your
            team already relies on.
          </p>
        </div>

        {/* Same scrolling strip as the homepage; fade matches this section's
            background so the edges dissolve into it. */}
        <LogoMarquee fade="#fafaf8" className="mt-8" />

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
              Using a custom setup or different software?
            </span>
            <span className="mt-1 block text-sm text-white/70">
              Let us know what CRM, calendar, or phone system you run, and we&rsquo;ll map out your integration.
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
