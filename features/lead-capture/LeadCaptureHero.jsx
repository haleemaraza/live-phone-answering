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

const CHECKS = ['Live receptionists', 'Your intake questions', 'Clear lead summaries']

// Tells Google where this page sits in the site, which is what produces the
// Home > Services > Lead Capture trail in search results.
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
      name: 'Lead Capture',
      item: 'https://livephoneanswering.com/lead-capture',
    },
  ],
}

export default function LeadCaptureHero() {
  return (
    <section
      className="relative w-full overflow-hidden pt-8 pb-0"
      style={SECTION_BACKGROUND}
      aria-labelledby="lead-capture-hero-heading"
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
              Lead Capture
            </li>
          </ol>
        </nav>

        {/* The photo is portrait, so its column is narrowed until its height
            lands near the copy beside it rather than towering over it. */}
        <div className="grid grid-cols-1 items-center gap-10 pt-10 pb-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.93fr)] lg:gap-14 lg:pt-14 lg:pb-20">
          <div>
            <p className="icon-mask icon-user-plus inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm text-[#295657] rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider px-5 py-2 mb-6 shadow-sm border border-white/50">
              Live receptionists. Useful lead details.
            </p>

            <h1
              id="lead-capture-hero-heading"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1a2e35] leading-[1.1] tracking-tight"
            >
              Lead Capture
              <br />
              Answering Service
              <br />
              <span className="text-[#6b8a3e]">for Your Business</span>
            </h1>

            <p className="mt-5 text-[1.12rem] font-bold text-[#1a2e35]">
              Give every new enquiry a clear next step.
            </p>

            <p className="mt-4 max-w-lg text-lg leading-relaxed text-gray-600">
              Give prospective customers a real person to speak with when they call. Our receptionists collect contact
              details, ask your approved intake questions, and capture what your team needs to follow up.
            </p>

            <p className="mt-4 max-w-lg text-lg leading-relaxed text-gray-600">
              Keep your team focused while we organize incoming enquiries around your instructions. With agreed
              qualification and routing rules, suitable callers reach the right person or leave a clear request for a
              callback.
            </p>

            <div className="mt-7 flex flex-col gap-4 sm:flex-row">
              <Link
                prefetch={false}
                href="/contact-us"
                className="icon-mask icon-arrow-right [--icon-size:0.95rem] inline-flex flex-row-reverse items-center justify-center gap-3 rounded-lg bg-[#8CA365] hover:bg-[#9cb374] px-7 py-3.5 text-lg font-bold text-white transition-all hover:-translate-y-0.5"
              >
                Get My Lead Capture Quote
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
          {/* The caption panel is part of the supplied artwork, so it is not
              drawn again in HTML and the photo is not cropped. */}
          <figure className="overflow-hidden rounded-xl">
            <img
              src="/images/lead-capture-hero.webp"
              srcSet="/images/lead-capture-hero-560.webp 560w, /images/lead-capture-hero.webp 928w"
              sizes="(max-width: 1024px) 90vw, 520px"
              alt="A receptionist wearing a headset writing in a notebook at her desk, above the line: From first hello to clear follow-up. Caller details. Service needs. Agreed next steps."
              width={928}
              height={1146}
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="block h-auto w-full"
            />
          </figure>
        </div>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </section>
  )
}
