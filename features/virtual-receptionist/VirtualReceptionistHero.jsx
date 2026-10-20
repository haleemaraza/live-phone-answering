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

const CHECKS = ['Custom greetings', 'Call screening & transfers', 'Appointment booking']

const WORKFLOW = [
  { icon: 'icon-phone', title: 'Greet the caller', body: 'Your business name and welcome' },
  { icon: 'icon-report', title: 'Understand their needs', body: 'Capture the right details' },
  { icon: 'icon-calendar', title: 'Arrange the next step', body: 'Book, transfer, or take a message' },
]

const PILLARS = [
  { icon: 'icon-users', label: 'A consistent brand voice' },
  { icon: 'icon-clock', label: 'More time for your customers' },
  { icon: 'icon-report', label: 'Clear details after each call' },
]

const CRUMBS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
]

// Tells Google where this page sits in the site, which is what produces the
// Home > Services > Virtual Receptionist trail in search results.
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
      name: 'Virtual Receptionist',
      item: 'https://livephoneanswering.com/virtual-receptionist',
    },
  ],
}

export default function VirtualReceptionistHero() {
  return (
    <section
      className="relative overflow-hidden px-4 lg:px-[5%] pt-8 pb-0"
      style={SECTION_BACKGROUND}
      aria-labelledby="vr-hero-heading"
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
            Virtual Receptionist
          </li>
        </ol>
      </nav>

      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center pt-10 pb-16 lg:pt-14 lg:pb-20">
        <div>
          <p className="icon-mask icon-headset inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm text-[#295657] rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider px-5 py-2 mb-6 shadow-sm border border-white/50">
            Real people. A professional first impression.
          </p>

          <h1
            id="vr-hero-heading"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1a2e35] leading-[1.1] tracking-tight"
          >
            Virtual Receptionist Service That Keeps Your Business Moving
          </h1>

          <p className="text-base sm:text-lg text-[#3d5c42] mt-6 max-w-xl leading-relaxed">
            Give callers a friendly welcome with a live virtual receptionist who answers in your business name,
            schedules appointments, and captures leads &mdash; while you focus on your customers.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link
              prefetch={false}
              href="/contact-us"
              className="inline-flex justify-center items-center bg-[#8CA365] hover:bg-[#9cb374] text-white font-bold py-3.5 px-9 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 text-center"
            >
              Get a Custom Quote &rarr;
            </Link>
            <Link
              prefetch={false}
              href="/pricing"
              className="inline-flex justify-center items-center bg-white/80 backdrop-blur-sm border-2 border-[#34414A]/20 text-[#34414A] hover:bg-white font-bold py-3.5 px-9 rounded-xl transition-all hover:-translate-y-0.5 text-center shadow-sm"
            >
              Explore Pricing
            </Link>
          </div>

          <p className="text-sm text-[#5a6c6e] mt-4">Reception support tailored to your business.</p>

          <ul className="flex flex-wrap gap-x-6 gap-y-3 mt-8 list-none">
            {CHECKS.map((check) => (
              <li
                key={check}
                className="icon-mask icon-check [--icon-size:1.125rem] flex items-center gap-2 text-sm font-semibold text-[#34414A] before:text-[#8CA365]"
              >
                {check}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <img
            src="/images/virtual-receptionist-hero-800.webp"
            srcSet="/images/virtual-receptionist-hero-560.webp 560w, /images/virtual-receptionist-hero-800.webp 800w"
            sizes="(max-width: 1024px) 90vw, 520px"
            alt="Smiling US-based virtual receptionist wearing a headset answering a business call at a reception desk"
            width={800}
            height={800}
            loading="eager"
            fetchPriority="high"
            decoding="sync"
            className="w-full h-auto rounded-3xl shadow-xl border border-white/60"
          />

          <p className="hidden sm:flex absolute top-5 right-0 lg:-right-6 items-center gap-2 bg-white rounded-full px-4 py-2 shadow-lg text-sm font-semibold text-[#34414A]">
            <span className="w-2 h-2 rounded-full bg-[#8CA365]" aria-hidden="true"></span>
            Your business. Your greeting.
          </p>

          <div className="mt-6 lg:mt-0 lg:absolute lg:-bottom-10 lg:-left-10 bg-white rounded-2xl p-6 shadow-xl border border-gray-100 lg:w-80">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#8CA365] mb-1">
              Example call workflow
            </p>
            <p className="text-lg font-bold text-[#34414A] mb-5">From first hello to next step</p>
            <ol className="space-y-4 list-none">
              {WORKFLOW.map((step) => (
                <li key={step.title} className="flex items-start gap-3">
                  <span
                    className={`icon-mask ${step.icon} [--icon-size:1.125rem] w-9 h-9 rounded-full bg-[#8CA365]/10 text-[#8CA365] flex items-center justify-center flex-shrink-0`}
                    aria-hidden="true"
                  ></span>
                  <span className="min-w-0">
                    <span className="block text-sm font-bold text-[#34414A]">{step.title}</span>
                    <span className="block text-xs text-gray-500 mt-0.5">{step.body}</span>
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>

      <div className="relative z-10 border-t border-[#8CA365]/20 bg-white/50">
        <ul className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 py-6 list-none">
          {PILLARS.map((pillar) => (
            <li
              key={pillar.label}
              className={`icon-mask ${pillar.icon} [--icon-size:1.375rem] flex items-center justify-center gap-3 text-sm font-semibold text-[#34414A] before:text-[#295657]`}
            >
              {pillar.label}
            </li>
          ))}
        </ul>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </section>
  )
}
