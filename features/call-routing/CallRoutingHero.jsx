import Link from 'next/link'

// Same mint gradient, 48px grid and diagonal hatch the other service heroes
// use, so every service page opens the same way.
const SECTION_BACKGROUND = {
  backgroundImage: [
    'linear-gradient(rgba(41,86,87,0.04) 1px, transparent 1px)',
    'linear-gradient(90deg, rgba(41,86,87,0.04) 1px, transparent 1px)',
    'repeating-linear-gradient(135deg, rgba(41,86,87,0.03), rgba(41,86,87,0.03) 1px, transparent 1px, transparent 40px)',
    'linear-gradient(160deg, #c6ecb5 0%, #d4f1c4 20%, #e2f5d8 40%, #eef8e8 60%, #f5fbf2 80%, #ffffff 100%)',
  ].join(','),
  backgroundSize: '48px 48px, 48px 48px, 600px 600px, auto',
  backgroundPosition: '0 0, 0 0, 100% 0, 0 0',
  backgroundRepeat: 'repeat, repeat, no-repeat, no-repeat',
}

const CRUMBS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
]

const CHECKS = ['Live receptionists', 'Your routing rules', 'Clear backup steps']

// Tells Google where this page sits in the site, which is what produces the
// Home > Services > Call Routing trail in search results.
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    ...CRUMBS.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.label,
      item: `https://livephoneanswering.com${crumb.href === '/' ? '' : crumb.href}`,
    })),
    {
      '@type': 'ListItem',
      position: CRUMBS.length + 1,
      name: 'Call Routing',
      item: 'https://livephoneanswering.com/call-routing',
    },
  ],
}

export default function CallRoutingHero() {
  return (
    <section
      className="relative w-full overflow-hidden pt-8 pb-0"
      style={SECTION_BACKGROUND}
      aria-labelledby="call-routing-hero-heading"
    >
      <div className="site-container relative z-10">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-600 list-none">
            {CRUMBS.map((crumb) => (
              <li key={crumb.href} className="flex items-center gap-2">
                <Link prefetch={false} href={crumb.href} className="transition-colors hover:text-[#1b4332]">
                  {crumb.label}
                </Link>
                <span aria-hidden="true" className="text-gray-400">
                  /
                </span>
              </li>
            ))}
            <li className="font-semibold text-[#1a2e35]" aria-current="page">
              Call Routing
            </li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 items-center gap-10 pt-10 pb-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-14 lg:pt-14 lg:pb-20">
          <div>
            <p className="icon-mask icon-call-transfer inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm text-[#295657] rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider px-5 py-2 mb-6 shadow-sm border border-white/50">
              Live call screening &amp; transfers
            </p>

            <h1
              id="call-routing-hero-heading"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1a2e35] leading-[1.1] tracking-tight"
            >
              Call Routing &amp; Transfer
              <br />
              <span className="text-[#6b8a3e]">Answering Service</span>
            </h1>

            <p className="mt-5 text-[1.12rem] font-bold text-[#1a2e35]">
              A helpful first answer. A clear path to the right person.
            </p>

            <p className="mt-4 max-w-lg text-lg leading-relaxed text-gray-600">
              Give callers a real person who understands why they are calling. Our receptionists screen enquiries and
              follow your routing instructions to connect suitable calls with your agreed staff or department
              contacts.
            </p>

            <p className="mt-4 max-w-lg text-lg leading-relaxed text-gray-600">
              When someone is unavailable, the next step is already planned. We follow your approved backup
              instructions, capture useful details, and pass a clear message to the right person for follow-up.
            </p>

            <div className="mt-7 flex flex-col gap-4 sm:flex-row">
              <Link
                prefetch={false}
                href="/contact-us"
                className="icon-mask icon-arrow-right [--icon-size:0.95rem] inline-flex flex-row-reverse items-center justify-center gap-3 rounded-lg bg-[#8CA365] hover:bg-[#9cb374] px-7 py-3.5 text-lg font-bold text-white transition-all hover:-translate-y-0.5"
              >
                Get My Call Routing Quote
              </Link>
              <Link
                prefetch={false}
                href="/pricing"
                className="inline-flex items-center justify-center rounded-lg border-2 border-[#1a2e35] bg-white px-7 py-3.5 text-lg font-bold text-[#1a2e35] transition-all hover:-translate-y-0.5 hover:bg-[#f3f4f1]"
              >
                View Plans &amp; Pricing
              </Link>
            </div>

            <ul className="mt-6 flex list-none flex-wrap items-center gap-x-7 gap-y-3">
              {CHECKS.map((check) => (
                <li key={check} className="flex items-center gap-2.5">
                  <span
                    className="icon-mask icon-check [--icon-size:0.7rem] flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#8CA365] text-white"
                    aria-hidden="true"
                  ></span>
                  <span className="text-base text-[#1a2e35]">{check}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Photo grows to match the copy beside it so the two stay level. */}
          <figure className="flex h-full flex-col overflow-hidden rounded-xl">
            <span className="relative block min-h-[20rem] flex-grow">
              <img
                src="/images/zero-bot-frustration-live-answering-service.webp"
                alt="A live receptionist wearing a headset screening a call before transferring it"
                width={1200}
                height={1200}
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </span>
            <figcaption className="flex items-center gap-5 bg-[#1d4b37] px-6 py-5">
              <span
                className="icon-mask icon-call-transfer [--icon-size:2.1rem] flex-shrink-0 border-r border-white/20 pr-5 text-[#a8c47d]"
                aria-hidden="true"
              ></span>
              <span className="min-w-0">
                <span className="block text-[1.05rem] font-bold text-white">The right contact. A clear next step.</span>
                <span className="mt-1 block text-base leading-relaxed text-white/70">
                  Screen the call. Follow your rules. Keep your team informed.
                </span>
              </span>
            </figcaption>
          </figure>
        </div>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </section>
  )
}
