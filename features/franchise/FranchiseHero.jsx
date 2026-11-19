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

const CHECKS = ['Brand-approved greetings', 'Location-specific routing', 'Clear follow-up']

// Placeholder photography: swap for real franchise location shots when they
// are available — the labels below each image stay the same.
const LOCATIONS = [
  {
    label: 'Franchise location 01',
    src: '/images/recognition-handshake.webp',
    alt: 'A franchise team member greeting a customer at a local branch',
  },
  {
    label: 'Franchise location 02',
    src: '/images/customer-support-operations.webp',
    alt: 'A franchise team member helping a customer at a second location',
  },
]

// Tells Google where this page sits in the site, which is what produces the
// Home > Industries > Franchise Answering trail in search results.
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
      name: 'Franchise Answering',
      item: 'https://livephoneanswering.com/franchise-answering-service',
    },
  ],
}

export default function FranchiseHero() {
  return (
    <section
      className="relative w-full overflow-hidden pt-8 pb-0"
      style={SECTION_BACKGROUND}
      aria-labelledby="franchise-hero-heading"
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
              Franchise Answering
            </li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 items-center gap-10 pt-10 pb-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-12 lg:pt-14 lg:pb-20">
          <div>
            <p className="icon-mask icon-buildings-arrow inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm text-[#295657] rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider px-5 py-2 mb-6 shadow-sm border border-white/50">
              Live call support for franchise networks
            </p>

            <h1
              id="franchise-hero-heading"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1a2e35] leading-[1.1] tracking-tight"
            >
              {/* Explicit line breaks: letting this wrap on its own changes the
                  heading's height when the brand font swaps in, which shifts
                  everything below it (measured 0.083 CLS before this). */}
              Franchise{' '}
              <br />
              Answering Service{' '}
              <br />
              for <span className="text-[#6b8a3e]">Multi-Location</span>{' '}
              <br />
              <span className="text-[#6b8a3e]">Brands</span>
            </h1>

            <p className="mt-5 text-[1.12rem] font-bold text-[#1a2e35]">
              One brand voice. Every location connected.
            </p>

            <p className="mt-4 max-w-lg text-lg leading-relaxed text-gray-600">
              Keep your local teams focused on customers. We answer in your brand name, capture enquiries and route
              each request to the appropriate franchise location.
            </p>

            <p className="mt-4 max-w-lg text-lg leading-relaxed text-gray-600">
              From one franchise to a growing network, build a call plan around your locations, opening hours and
              approved instructions.
            </p>

            <div className="mt-7 flex flex-col gap-4 sm:flex-row">
              <Link
                prefetch={false}
                href="/contact-us"
                className="icon-mask icon-arrow-right [--icon-size:0.95rem] inline-flex flex-row-reverse items-center justify-center gap-3 rounded-lg bg-[#1d4b37] hover:bg-[#164032] px-7 py-3.5 text-lg font-bold text-white transition-all hover:-translate-y-0.5"
              >
                Get My Franchise Call Plan
              </Link>
              <Link
                prefetch={false}
                href="/how-it-works"
                className="inline-flex items-center justify-center rounded-lg border-2 border-[#1a2e35] bg-white px-7 py-3.5 text-lg font-bold text-[#1a2e35] transition-all hover:-translate-y-0.5 hover:bg-[#f3f4f1]"
              >
                See How It Works
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

          {/* The answering team on the left, two locations stacked beside it,
              with the connecting line drawn between them. */}
          <div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)]">
              <figure className="relative overflow-hidden rounded-xl">
                <img
                  src="/images/office-receptionists.webp"
                  alt="A live receptionist answering calls for a franchise network"
                  width={1200}
                  height={1200}
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  className="h-full min-h-[18rem] w-full object-cover"
                />
                <figcaption className="absolute bottom-3 left-3 rounded-lg bg-white/95 px-4 py-2 text-sm font-bold text-[#1a2e35] shadow-sm">
                  Your answering team
                </figcaption>
              </figure>

              <ul className="grid list-none grid-cols-1 gap-4">
                {LOCATIONS.map((location) => (
                  <li key={location.label} className="relative">
                    {/* The link back to the answering team, drawn only where
                        the two columns sit side by side. */}
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute left-0 top-1/2 hidden h-px w-4 -translate-x-4 bg-[#8CA365] sm:block"
                    ></span>
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute left-0 top-1/2 hidden h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-[#8CA365] sm:block"
                    ></span>

                    <figure className="relative overflow-hidden rounded-xl">
                      <img
                        src={location.src}
                        alt={location.alt}
                        width={800}
                        height={600}
                        loading="eager"
                        fetchPriority="low"
                        decoding="async"
                        className="h-full min-h-[8.5rem] w-full object-cover"
                      />
                      <figcaption className="absolute bottom-3 left-3 rounded-lg bg-white/95 px-3.5 py-1.5 text-sm font-bold text-[#1a2e35] shadow-sm">
                        {location.label}
                      </figcaption>
                    </figure>
                  </li>
                ))}
              </ul>
            </div>

            <p className="mt-4 rounded-xl bg-[#1d4b37] px-6 py-4 text-center text-[1.15rem] font-extrabold text-white">
              Your calls answered. Your locations connected.
            </p>
          </div>
        </div>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </section>
  )
}
