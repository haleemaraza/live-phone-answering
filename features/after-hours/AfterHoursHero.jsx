import Link from 'next/link'

// Same mint gradient, 48px grid and diagonal hatch the other page heroes use,
// collapsed into one background so the section costs no extra elements.
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

// Tells Google where this page sits in the site, which is what produces the
// Home > Services > After-Hours Answering trail in search results.
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
      name: 'After-Hours Answering',
      item: 'https://livephoneanswering.com/after-hours-answering-service',
    },
  ],
}

export default function AfterHoursHero() {
  return (
    <section
      className="relative overflow-hidden px-4 lg:px-[5%] pt-8 pb-0"
      style={SECTION_BACKGROUND}
      aria-labelledby="after-hours-hero-heading"
    >
      <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto relative z-10">
        <ol className="flex flex-wrap items-center gap-2 text-sm text-[#5a6c6e] list-none">
          {CRUMBS.map((crumb) => (
            <li key={crumb.href} className="flex items-center gap-2">
              <Link prefetch={false} href={crumb.href} className="hover:text-[#34414A] transition-colors">
                {crumb.label}
              </Link>
              <span aria-hidden="true" className="text-[#5a6c6e]/50">
                /
              </span>
            </li>
          ))}
          <li className="font-semibold text-[#34414A]" aria-current="page">
            After-Hours Answering
          </li>
        </ol>
      </nav>

      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center pt-10 pb-16 lg:pt-[2rem] lg:pb-20">
        <div>
          <p className="icon-mask icon-moon inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm text-[#295657] rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider px-5 py-2 mb-6 shadow-sm border border-white/50">
            Live support after your office closes
          </p>

          <h1
            id="after-hours-hero-heading"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1a2e35] leading-[1.1] tracking-tight"
          >
            After-Hours Answering Service{' '}
            <span className="text-[#6b8a3e]">for Nights, Weekends &amp; Holidays</span>
          </h1>

          <p className="text-base sm:text-lg text-[#3d5c42] mt-6 max-w-xl leading-relaxed">
            Give callers a helpful human response when your team has signed off. Capture inquiries, take messages, and
            follow your call instructions while your office is closed.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link
              prefetch={false}
              href="/contact-us"
              className="inline-flex justify-center items-center bg-[#8CA365] hover:bg-[#9cb374] text-white font-bold py-3.5 px-9 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 text-center"
            >
              Get My After-Hours Plan &rarr;
            </Link>
            <Link
              prefetch={false}
              href="/how-it-works"
              className="icon-mask icon-play [--icon-size:1.25rem] inline-flex justify-center items-center gap-2.5 bg-white/80 backdrop-blur-sm border-2 border-[#34414A]/15 text-[#34414A] hover:bg-white font-bold py-3.5 px-9 rounded-xl transition-all hover:-translate-y-0.5 text-center shadow-sm before:text-[#295657]"
            >
              See How It Works
            </Link>
          </div>

          <p className="text-sm text-[#5a6c6e] mt-5">Your business name. Your call instructions. Your schedule.</p>
        </div>

        {/* Badge and summary card are part of the supplied artwork, so
            nothing is overlaid on top of it here. */}
        <div className="mx-auto w-full max-w-[560px]">
          <img
            src="/images/after-hours-hero.webp"
            srcSet="/images/after-hours-hero-560.webp 560w, /images/after-hours-hero.webp 992w"
            sizes="(max-width: 1024px) 90vw, 560px"
            alt="A receptionist wearing a headset taking an after-hours call, beside a captured message summary for a recurring appointment booking"
            width={992}
            height={1070}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="w-full h-auto rounded-3xl shadow-xl"
          />
        </div>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </section>
  )
}
