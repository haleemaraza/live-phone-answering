import Link from 'next/link'

// Section 7. Phone systems on the left, the service in the middle, and the
// hotel systems a request may reach on the right.
const PHONE_SYSTEMS = [
  { name: 'RingCentral', logo: '/icons/logo/ringcentral.svg' },
  { name: 'Microsoft Teams Phone', logo: '/icons/logo/microsoft-teams.webp' },
  { name: 'Zoom Phone', logo: '/icons/logo/zoom-phone.webp' },
]

// Tools without a logo file fall back to their name set as text in the same
// card. Dropping a file in and adding `logo:` is enough to switch them.
const TOOL_GROUPS = [
  {
    eyebrow: 'Property management & reservations',
    note: 'Review room information, access and permitted booking actions.',
    tools: [{ name: 'Cloudbeds' }, { name: 'Mews' }],
  },
  {
    eyebrow: 'Booking & distribution tools',
    note: 'Confirm the booking route and source of rates and availability.',
    tools: [{ name: 'SiteMinder' }, { name: 'Little Hotelier' }],
  },
  {
    eyebrow: 'Guest messages & follow-up',
    note: 'Review where guest requests and reservation enquiries should go.',
    tools: [{ name: 'Microsoft 365' }, { name: 'HubSpot', logo: '/icons/logo/hubspot.webp' }],
  },
]

const FLOW = [
  { icon: 'icon-phone', label: 'Answer the call' },
  { icon: 'icon-clipboard-check', label: 'Follow the hotel call plan' },
  { icon: 'icon-doc-check', label: 'Record the next step' },
]

const NOTES = [
  {
    icon: 'icon-phone',
    title: 'Keep Number Handling Clear',
    body: 'Review your hotel number, forwarding settings and coverage preferences.',
  },
  {
    icon: 'icon-calendar',
    title: 'Confirm Reservation Permissions',
    body: 'Agree what can be checked or actioned and when your hotel confirms the booking.',
  },
  {
    icon: 'icon-gear',
    title: 'Define the Connection Method',
    body: 'Confirm a supported connector, authorised access or message-only handoff.',
  },
]

function ToolLogo({ tool }) {
  return tool.logo ? (
    <img
      src={tool.logo}
      alt={`${tool.name} logo`}
      width={120}
      height={28}
      loading="lazy"
      decoding="async"
      className="h-7 w-auto max-w-[9rem] object-contain"
    />
  ) : (
    <span className="text-[1.05rem] font-extrabold text-[#1a2e35]">{tool.name}</span>
  )
}

export default function HotelIntegrations() {
  return (
    <section className="w-full bg-[#f8f7f2] py-14 md:py-16" aria-labelledby="hotel-integrations-heading">
      <div className="site-container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="icon-mask icon-share [--icon-size:1rem] inline-flex items-center gap-2 bg-[#8CA365]/10 text-[#5f7a3a] rounded-full text-sm font-semibold px-4 py-1.5">
            Phone systems, tools &amp; workflows
          </p>
          <h2
            id="hotel-integrations-heading"
            className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.14] tracking-tight text-[#1b4332]"
          >
            Your Hotel Phone Numbers,{' '}
            <br />
            Reservation Tools and Guest Workflows
          </h2>
          <p className="mt-3 text-lg leading-relaxed text-gray-600">
            Plan call forwarding, reservation access and guest-message delivery around the systems your hotel uses.
          </p>
        </div>

        <p className="mt-8 flex items-center gap-4 text-[0.62rem] font-bold uppercase tracking-[0.18em] text-gray-600">
          <span className="h-px flex-grow bg-gray-300/70" aria-hidden="true"></span>
          Platforms to review
          <span className="h-px flex-grow bg-gray-300/70" aria-hidden="true"></span>
        </p>

        <div className="mt-6 grid grid-cols-1 items-stretch gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)] lg:gap-6">
          <div className="rounded-xl border border-gray-300/50 bg-white p-6">
            <h3 className="text-[1.3rem] font-extrabold text-[#1b4332]">Phone Systems</h3>
            <p className="mt-1 text-base text-gray-600">Review forwarding and transfer options.</p>
            <ul className="mt-5 list-none space-y-4">
              {PHONE_SYSTEMS.map((tool) => (
                <li
                  key={tool.name}
                  className="flex items-center justify-center rounded-lg border border-gray-300/60 px-4 py-3.5"
                >
                  <ToolLogo tool={tool} />
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col rounded-xl bg-[#1d4b37] p-6 text-center">
            <span
              className="icon-mask icon-headset-call [--icon-size:2.3rem] mx-auto block text-[#a8c47d]"
              aria-hidden="true"
            ></span>
            <p className="mt-3 text-[1.5rem] font-extrabold leading-tight text-white">Live Phone Answering</p>
            <p className="mt-2 text-base text-white/70">
              Your property.{' '}
              <br />
              Your approved instructions.
            </p>

            <ul className="mt-5 list-none space-y-3 border-t border-white/20 pt-5 text-left">
              {FLOW.map((step) => (
                <li
                  key={step.label}
                  className={`icon-mask ${step.icon} [--icon-size:1.15rem] flex items-center gap-3 text-base text-white/85 before:flex-shrink-0 before:text-[#a8c47d]`}
                >
                  {step.label}
                </li>
              ))}
            </ul>

            <p className="mt-auto pt-5 text-[0.62rem] font-bold uppercase tracking-[0.16em] text-[#a8c47d]">
              Property-specific handling
            </p>
          </div>

          <ul className="grid list-none grid-cols-1 gap-5">
            {TOOL_GROUPS.map((group) => (
              <li key={group.eyebrow} className="rounded-xl border border-gray-300/50 bg-white p-5">
                <h3 className="text-[0.62rem] font-bold uppercase tracking-[0.16em] text-[#5f7a3a]">{group.eyebrow}</h3>
                <ul className="mt-3 flex list-none flex-wrap items-center gap-3">
                  {group.tools.map((tool) => (
                    <li
                      key={tool.name}
                      className="flex min-h-[3rem] flex-1 items-center justify-center rounded-lg border border-gray-300/60 px-3 py-2.5"
                    >
                      <ToolLogo tool={tool} />
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-base text-gray-600">{group.note}</p>
              </li>
            ))}
          </ul>
        </div>

        <ul className="mt-8 grid list-none grid-cols-1 gap-6 border-t border-gray-300/50 pt-6 sm:grid-cols-3 sm:divide-x sm:divide-gray-300/50">
          {NOTES.map((note, index) => (
            <li key={note.title} className={`flex items-start gap-4 ${index > 0 ? 'sm:pl-6' : ''}`}>
              <span
                className={`icon-mask ${note.icon} [--icon-size:1.5rem] flex-shrink-0 text-[#4f6630]`}
                aria-hidden="true"
              ></span>
              <span className="min-w-0">
                <h3 className="text-[1.02rem] font-bold leading-snug text-[#1b4332]">{note.title}</h3>
                <span className="mt-1 block text-base leading-relaxed text-gray-600">{note.body}</span>
              </span>
            </li>
          ))}
        </ul>

        {/* Keeps the tool list honest: naming a product is not a promise that a
            direct integration exists. */}
        <div className="mt-8 flex flex-col items-start gap-5 rounded-xl bg-[#eef0e6] px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
          <p>
            <span className="block text-[1.15rem] font-extrabold text-[#1b4332]">Shown platforms are examples.</span>
            <span className="mt-1 block text-base text-gray-600">
              Supported tasks and connection methods are confirmed during setup.
            </span>
          </p>
          <Link
            prefetch={false}
            href="/contact-us"
            className="icon-mask icon-arrow-right [--icon-size:0.9rem] inline-flex flex-shrink-0 flex-row-reverse items-center gap-3 rounded-lg bg-[#1d4b37] px-6 py-3.5 text-base font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#164032]"
          >
            Review My Hotel Setup
          </Link>
        </div>
      </div>
    </section>
  )
}
