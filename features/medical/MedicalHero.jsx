import Link from 'next/link'

// Same mint gradient, 48px grid and diagonal hatch the other heroes use, so
// every page opens the same way.
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
  { label: 'Industries', href: '/industries-served' },
]

const CHECKS = [
  'Patient enquiries and appointment requests',
  'Your practice greeting and approved answers',
  'On-call routing and backup instructions',
]

// A worked example of the summary a practice receives, labelled as one.
const SUMMARY_ROWS = [
  { label: 'Practice', value: 'Example Medical Centre' },
  { label: 'Request', value: 'New patient appointment' },
  { label: 'Next step', value: 'Reception team to follow up' },
]

const STRIP = [
  { icon: 'icon-phone', label: 'Patient call intake' },
  { icon: 'icon-calendar', label: 'Appointment requests' },
  { icon: 'icon-org-chart', label: 'Practice-specific routing' },
]

// Tells Google where this page sits in the site, which is what produces the
// Home > Industries > Healthcare trail in search results.
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
      name: 'Healthcare',
      item: 'https://livephoneanswering.com/medical-answering-service',
    },
  ],
}

export default function MedicalHero() {
  return (
    <section
      className="relative w-full overflow-hidden pt-8 pb-0"
      style={SECTION_BACKGROUND}
      aria-labelledby="medical-hero-heading"
    >
      <div className="site-container relative z-10">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-600 list-none">
            {CRUMBS.map((crumb) => (
              <li key={crumb.label} className="flex items-center gap-2">
                <Link prefetch={false} href={crumb.href} className="transition-colors hover:text-[#1b4332]">
                  {crumb.label}
                </Link>
                <span aria-hidden="true" className="text-gray-400">
                  /
                </span>
              </li>
            ))}
            <li className="font-semibold text-[#1a2e35]" aria-current="page">
              Healthcare
            </li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 items-center gap-10 pt-10 pb-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-14 lg:pt-14 lg:pb-16">
          <div>
            <p className="icon-mask icon-medical-cross inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm text-[#295657] rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider px-5 py-2 mb-6 shadow-sm border border-white/50">
              Live answering for healthcare teams
            </p>

            <h1
              id="medical-hero-heading"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1a2e35] leading-[1.1] tracking-tight"
            >
              Medical Answering Service{' '}
              <br />
              <span className="text-[#6b8a3e]">for Healthcare Practices</span>
            </h1>

            <p className="mt-5 text-[1.12rem] font-bold text-[#1a2e35]">
              A helpful first response. A clear route to your practice.
            </p>

            <p className="mt-4 max-w-lg text-lg leading-relaxed text-gray-600">
              Support patient enquiries, appointment requests and practice messages when your reception team is busy or
              away. We follow your approved questions and contact instructions so your team receives a clear handoff.
            </p>

            <ul className="mt-6 list-none space-y-3">
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

            <div className="mt-7 flex flex-col gap-4 sm:flex-row">
              <Link
                prefetch={false}
                href="/contact-us"
                className="icon-mask icon-arrow-right [--icon-size:0.95rem] inline-flex flex-row-reverse items-center justify-center gap-3 rounded-lg bg-[#1d4b37] hover:bg-[#164032] px-7 py-3.5 text-lg font-bold text-white transition-all hover:-translate-y-0.5"
              >
                Get My Medical Call Plan
              </Link>
              <Link
                prefetch={false}
                href="/how-it-works"
                className="icon-mask icon-play [--icon-size:0.8rem] inline-flex items-center justify-center gap-3 rounded-lg border-2 border-[#1a2e35] bg-white px-7 py-3.5 text-lg font-bold text-[#1a2e35] transition-all hover:-translate-y-0.5 hover:bg-[#f3f4f1]"
              >
                See How It Works
              </Link>
            </div>

            <p className="mt-6 text-base text-gray-600">
              Your practice. Your procedures. A consistent first response.
            </p>
          </div>

          {/* Photo grows to match the copy beside it so the two stay level. */}
          <figure className="relative flex h-full flex-col overflow-hidden rounded-xl">
            <span className="relative block min-h-[22rem] flex-grow">
              <img
                src="/images/office-receptionists.webp"
                alt="A live receptionist taking a patient call for a medical practice"
                width={1200}
                height={1200}
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </span>

            <figcaption className="bg-[#1d4b37] px-6 py-5">
              <span className="block rounded-lg bg-white px-5 py-4">
                <span className="block text-[0.62rem] font-bold uppercase tracking-[0.16em] text-[#5f7a3a]">
                  Illustrative call summary
                </span>
                <span className="mt-1 block text-[1.15rem] font-extrabold text-[#1a2e35]">Appointment request</span>
                <span className="mt-3 grid grid-cols-[minmax(0,5.5rem)_minmax(0,1fr)] gap-x-4 gap-y-2 border-t border-gray-200 pt-3">
                  {SUMMARY_ROWS.map((row) => (
                    <span key={row.label} className="contents">
                      <span className="text-base font-bold text-[#1a2e35]">{row.label}</span>
                      <span className="text-base text-gray-600">{row.value}</span>
                    </span>
                  ))}
                </span>
                <span className="mt-3 inline-block rounded bg-[#eef2e6] px-3 py-1.5 text-sm font-semibold text-[#4f6630]">
                  Request captured &middot; Not yet booked
                </span>
              </span>
            </figcaption>
          </figure>
        </div>
      </div>

      {/* Full-width strip closing the hero, as in the design. */}
      <div className="w-full bg-[#1d4b37]">
        <ul className="site-container flex list-none flex-col divide-y divide-white/15 py-2 sm:flex-row sm:divide-x sm:divide-y-0">
          {STRIP.map((item) => (
            <li key={item.label} className="flex flex-1 items-center justify-center gap-3 px-4 py-4">
              <span
                className={`icon-mask ${item.icon} [--icon-size:1.35rem] flex-shrink-0 text-[#a8c47d]`}
                aria-hidden="true"
              ></span>
              <span className="text-[1.05rem] font-bold text-white">{item.label}</span>
            </li>
          ))}
        </ul>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </section>
  )
}
