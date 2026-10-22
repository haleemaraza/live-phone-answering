import Link from 'next/link'
import LogoMarquee from '@/components/LogoMarquee'

const BENTO_CARDS = [
  {
    title: 'CRM Integrations',
    body: 'Never lose a lead in the shuffle. We push new caller data, notes, and call outcomes directly into your CRM the second the call ends.',
    logos: [
      { slug: 'hubspot', name: 'HubSpot' },
      { slug: 'zoho', name: 'Zoho' },
      { slug: 'notion', name: 'Notion' },
    ],
  },
  {
    title: 'Scheduling Tools',
    body: 'Wake up to a full calendar. We securely access your real-time availability and book appointments directly on your schedule.',
    logos: [
      { slug: 'calendly', name: 'Calendly' },
      { slug: 'googlecalendar', name: 'Google Calendar' },
      { slug: 'airtable', name: 'Airtable' },
    ],
  },
  {
    title: 'Helpdesk & Ticketing',
    body: 'Keep your customers happy. We log support requests, screen issues, and route urgent tickets to the right department instantly.',
    logos: [
      { slug: 'zendesk', name: 'Zendesk' },
      { slug: 'intercom', name: 'Intercom' },
      { slug: 'helpscout', name: 'Help Scout' },
    ],
  },
]

function HeadsetIcon() {
  return (
    <div className="w-10 h-10 bg-[#34414A] rounded-full flex items-center justify-center z-10 shadow-md">
      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
    </div>
  )
}

function BentoCard({ card }) {
  return (
    <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 border border-gray-200 shadow-sm hover:shadow-xl hover:border-[#8CA365] transition-all duration-300 group flex flex-col">
      <div className="h-32 bg-slate-50 rounded-2xl mb-6 flex items-center justify-center gap-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#8CA365]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>

        <HeadsetIcon />

        <div className="w-12 h-0 border-t-2 border-dashed border-gray-300 relative z-0">
          <div className="absolute -top-1 left-0 w-2 h-2 bg-[#8CA365] rounded-full opacity-0 group-hover:animate-[dashFlow_1.5s_linear_infinite]"></div>
        </div>

        <div className="flex -space-x-3 z-10">
          {card.logos.map((logo) => (
            <div
              key={logo.slug}
              className="w-10 h-10 rounded-full bg-white border border-gray-100 shadow-sm flex items-center justify-center p-2"
            >
              <img
                src={`/logos/${logo.slug}.svg`}
                alt={`${logo.name} logo`}
                width={24}
                height={24}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      <h3 className="text-xl font-bold text-[#34414A] mb-3">{card.title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">{card.body}</p>
    </div>
  )
}

export default function IntegrationsSection() {
  return (
    <section className="bg-white py-24 relative overflow-hidden" aria-labelledby="integrations-heading">
      <div className="bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-50 absolute inset-0 -z-10"></div>

      <div className="site-container">
        <h2 id="integrations-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#34414A] text-center mb-6 max-w-4xl mx-auto">
          Works With the Tools You Already Use — 1,000+ Integrations
        </h2>
        <p className="text-lg text-gray-600 text-center mb-10 max-w-2xl mx-auto">
          Stop wasting time on manual data entry. Our receptionists instantly log calls, push leads, and book appointments directly
          into your existing tech stack.
        </p>

        <LogoMarquee fade="#ffffff" className="max-w-6xl mx-auto mb-16" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {BENTO_CARDS.map((card) => (
            <BentoCard key={card.title} card={card} />
          ))}
        </div>

        <div className="mt-10 bg-[#34414A] rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between shadow-lg">
          <p className="text-white font-medium text-lg text-center md:text-left">
            Need something else? We connect to 1,000+ apps via Zapier.
          </p>
          <Link prefetch={false}
            href="/services"
            className="bg-[#8CA365] hover:bg-[#7a8f57] text-white px-6 py-2 rounded-lg font-bold transition-colors mt-4 md:mt-0 whitespace-nowrap"
          >
            View All Integrations
          </Link>
        </div>
      </div>
    </section>
  )
}
