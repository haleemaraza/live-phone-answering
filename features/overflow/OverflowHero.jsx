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

// Tells Google where this page sits in the site, which is what produces the
// Home > Services > Overflow Call Answering trail in search results.
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
      name: 'Overflow Call Answering',
      item: 'https://livephoneanswering.com/overflow-call-answering',
    },
  ],
}

export default function OverflowHero() {
  return (
    <section
      className="relative w-full overflow-hidden pt-8 pb-0"
      style={SECTION_BACKGROUND}
      aria-labelledby="overflow-hero-heading"
    >
      <div className="site-container relative z-10">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-600 list-none">
            {CRUMBS.map((crumb) => (
              <li key={crumb.href} className="flex items-center gap-2">
                <Link prefetch={false} href={crumb.href} className="transition-colors hover:text-[#34414A]">
                  {crumb.label}
                </Link>
                <span aria-hidden="true" className="text-gray-400">
                  /
                </span>
              </li>
            ))}
            <li className="font-semibold text-[#34414A]" aria-current="page">
              Overflow Call Answering
            </li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 items-center gap-10 pt-10 pb-16 lg:pt-[4rem] lg:pb-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:gap-14">
          <div>
            <p className="icon-mask icon-phone-forward inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm text-[#295657] rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider px-5 py-2 mb-6 shadow-sm border border-white/50">Live receptionist backup</p>

            <h1
              id="overflow-hero-heading"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1a2e35] leading-[1.1] tracking-tight"
            >
              Overflow Call
              <br />
              Answering Service
              <br />
              <span className="text-[#6b8a3e]">for Busy Teams</span>
            </h1>

            <p className="mt-4 text-[1.12rem] font-bold text-[#1a2e35] sm:text-[1.22rem]">
              Your team answers first. We handle the calls they can&rsquo;t reach.
            </p>

            <p className="mt-3.5 max-w-lg text-lg leading-relaxed text-gray-600">
              Give callers a helpful response when your staff are already on the phone, assisting customers, or away
              from their desks. Our overflow call answering service provides live receptionist support for calls your
              team cannot take, helping you capture inquiries and keep conversations moving.
            </p>

            <p className="mt-3.5 max-w-lg text-lg leading-relaxed text-gray-600">
              With your greeting, approved questions, and call-handling instructions, our receptionists become a
              familiar point of contact for your callers. Keep your team focused on the work in front of them while we
              collect the details they need for the next step.
            </p>

            <div className="mt-7 flex flex-col gap-4 sm:flex-row">
              <Link
                prefetch={false}
                href="/contact-us"
                className="icon-mask icon-arrow-right [--icon-size:1rem] inline-flex flex-row-reverse items-center justify-center gap-3 rounded-xl bg-[#8CA365] px-8 py-3.5 text-lg font-bold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-[#9cb374]"
              >
                Get My Overflow Quote
              </Link>
              <a
                href="tel:8574531055"
                className="icon-mask icon-phone [--icon-size:1.1rem] inline-flex items-center justify-center gap-3 rounded-xl border-2 border-[#1a2e35]/15 bg-white px-8 py-3.5 text-lg font-bold text-[#1a2e35] transition-all hover:-translate-y-0.5 hover:border-[#8CA365] before:text-[#295657]"
              >
                Call Our Team
              </a>
            </div>

            <p className="mt-6">
              <a
                href="#how-overflow-works"
                className="icon-mask icon-arrow-down [--icon-size:0.9rem] inline-flex flex-row-reverse items-center gap-2 text-lg font-semibold text-[#34414A] underline underline-offset-[6px] transition-colors hover:text-[#6b8a3e]"
              >
                See How Overflow Works
              </a>
            </p>
          </div>

          {/* The dark panel is offset behind the photo; the three cards are
              positioned against this wrapper so they stay pinned to the artwork. */}
          <div className="relative mx-auto w-full max-w-[540px]">
            <div
              className="absolute left-12 right-[-1.25rem] top-8 bottom-[-1.25rem] rounded-3xl bg-[#0f2925]"
              aria-hidden="true"
            ></div>

            <img
              src="/images/office-receptionists.webp"
              srcSet="/images/office-receptionists-640.webp 640w, /images/office-receptionists.webp 1024w"
              sizes="(max-width: 1024px) 90vw, 540px"
              alt="A live receptionist wearing a headset taking an overflow call while the client's own team is busy"
              width={1024}
              height={1024}
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="relative z-10 w-full rounded-2xl object-cover shadow-xl"
            />

            {/* Dotted link from the "team busy" card down to the receptionist. */}
            <svg
              className="absolute left-[22%] top-[26%] z-20 hidden h-24 w-40 sm:block"
              viewBox="0 0 160 96"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M4 8C40 8 60 44 100 56c20 6 40 10 56 12"
                stroke="#8CA365"
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray="1 9"
              />
            </svg>

            <p className="absolute left-0 top-[12%] z-20 flex items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-lg">
              <span
                className="icon-mask icon-phone [--icon-size:1.1rem] flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-[#eef3e4] text-[#295657]"
                aria-hidden="true"
              ></span>
              <span className="min-w-0">
                <span className="block text-lg font-bold leading-tight text-[#1a2e35]">Your office</span>
                <span className="mt-0.5 block text-base text-gray-600">Team busy</span>
              </span>
            </p>

            <p className="absolute right-0 top-[47%] z-20 flex items-center gap-3 rounded-xl bg-[#0f2925] px-4 py-3 shadow-xl">
              <span className="mt-1 h-2.5 w-2.5 flex-shrink-0 self-start rounded-full bg-[#8CA365]" aria-hidden="true"></span>
              <span className="min-w-0">
                <span className="block text-lg font-bold leading-tight text-white">Live receptionist</span>
                <span className="mt-0.5 block text-base text-white/60">Ready to help your caller</span>
              </span>
            </p>

            <p className="absolute bottom-[4%] left-[6%] z-20 flex items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-lg">
              <span
                className="icon-mask icon-report [--icon-size:1.05rem] flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-[#eef3e4] text-[#295657]"
                aria-hidden="true"
              ></span>
              <span className="text-lg font-bold text-[#1a2e35]">Your greeting. Your instructions.</span>
            </p>
          </div>
        </div>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </section>
  )
}
