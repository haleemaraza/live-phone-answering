// Exported so other pages can present the same plans in their own layout —
// prices must never be duplicated into a second file.
export const PLANS = [
  {
    tag: 'Starter',
    minutes: '100 Minutes',
    name: 'Starter Answering',
    description:
      'For small businesses that need professional live answering for overflow calls, missed calls, or light monthly call volume.',
    price: '$199',
    overage: 'Extra minutes: $1.99/min',
    features: [
      '100 receptionist minutes included',
      'Live call answering',
      'Message taking and call notes',
      'Basic call screening',
      'Email call summaries',
    ],
    cta: 'Start Starter Plan',
  },
  {
    tag: 'Growth',
    minutes: '250 Minutes',
    name: 'Growth Answering',
    description:
      'For growing businesses that need consistent call answering, lead capture, call routing, and customer support throughout the month.',
    price: '$497.50',
    overage: 'Extra minutes: $1.99/min',
    features: [
      '250 receptionist minutes included',
      'Everything in Starter',
      'Custom call script',
      'Lead intake questions',
      'Appointment request handling',
      'Daily call summaries',
    ],
    cta: 'Get Growth Plan',
    featured: true,
    badge: 'Best Value',
  },
  {
    tag: 'Business',
    minutes: '500 Minutes',
    name: 'Business Answering',
    description:
      'For busy businesses that receive higher call volume and need reliable live answering support without hiring a full-time receptionist.',
    price: '$995',
    overage: 'Extra minutes: $1.99/min',
    features: [
      '500 receptionist minutes included',
      'Everything in Growth',
      'Priority call handling',
      'Advanced routing instructions',
      'Multiple call scenarios',
      'Weekly performance summary',
    ],
    cta: 'Choose Business Plan',
  },
]

const CUSTOM_TAGS = [
  '24/7 Answering',
  'After-Hours Support',
  'Call Overflow',
  'Bilingual Answering',
  'Appointment Scheduling',
  'CRM Entry',
]

const BILLING_NOTES = [
  {
    title: 'How Minutes Are Calculated',
    body: 'Minutes are based on receptionist handling time, including live talk time, message taking, call notes, and required after-call work.',
  },
  {
    title: 'Additional Minutes',
    body: "If your monthly included minutes are used, extra minutes are billed at your plan's additional-minute rate.",
  },
  {
    title: 'Upgrade Anytime',
    body: 'Start with a smaller plan and move to a larger minute package as your call volume grows.',
  },
]

function PlanCard({ plan, theme, ctaHref }) {
  return (
    <article
      className={`relative flex h-full flex-col rounded-3xl bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-1 ${
        plan.featured ? 'border-2 border-[#8fa762] lg:-mt-4' : ''
      }`}
    >
      {plan.badge && (
        <p className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#8fa762] px-4 py-1 text-xs font-bold text-white shadow-md">
          {plan.badge}
        </p>
      )}

      <div className="flex items-center justify-between">
        <span className="rounded-full bg-[#f2f5ea] px-4 py-1 text-xs font-bold text-[#6f8750]">{plan.tag}</span>
        <span className="rounded-full bg-[#eef8f0] px-4 py-1 text-xs font-bold text-[#4f8a63]">{plan.minutes}</span>
      </div>

      <h3 className="mt-6 text-2xl font-bold text-[#26333d]">{plan.name}</h3>
      <p className="mt-3 min-h-[72px] text-sm leading-7 text-slate-500">{plan.description}</p>

      <div className="mt-8">
        <p className="text-sm font-semibold text-slate-500">Starting at</p>
        <p className="mt-1 flex items-end gap-1">
          <span className={`text-5xl font-extrabold tracking-tight ${theme.price}`}>{plan.price}</span>
          <span className="pb-2 text-sm font-semibold text-slate-500">/month</span>
        </p>
        <p className="mt-3 text-sm font-semibold text-[#6f8750]">{plan.overage}</p>
      </div>

      <div className={`my-7 h-px ${theme.divider}`}></div>

      <ul className="flex-1 space-y-4 text-sm font-medium text-slate-600">
        {plan.features.map((feature) => (
          <li key={feature} className="flex gap-3">
            <span className="text-[#8fa762]" aria-hidden="true">
              ✓
            </span>
            {feature}
          </li>
        ))}
      </ul>

      <a
        href={ctaHref}
        className={`mt-9 flex w-full items-center justify-center rounded-lg px-5 py-4 text-sm font-bold transition ${
          plan.featured ? theme.planCtaFeatured : theme.planCtaPlain
        }`}
      >
        {plan.cta}
      </a>
    </article>
  )
}

const THEMES = {
  dark: {
    section: 'bg-[#092f28] py-20 px-4 sm:px-6 lg:px-8',
    price: 'text-[#26333d]',
    eyebrow: 'border-white/15 bg-white/10 text-white',
    heading: 'text-white',
    intro: 'text-white/75',
    panel: 'border-white/10 bg-white/10 text-white backdrop-blur',
    panelBody: 'text-white/70',
    customBody: 'text-white/75',
    tag: 'border-white/15 bg-white/10 text-white',
    divider: 'bg-slate-200',
    orb: 'bg-[#1f5d4f]/30',
    planCtaFeatured: 'bg-[#8fa762] text-white hover:bg-[#7f9657]',
    planCtaPlain: 'border border-[#26333d] text-[#26333d] hover:bg-[#26333d] hover:text-white',
    customCta: 'bg-white text-[#26333d] hover:bg-[#f2f5ea]',
  },
  light: {
    section: 'bg-white py-14 sm:py-20 px-4 border-t border-gray-100',
    price: 'text-[#34414A]',
    eyebrow: 'bg-[#8CA365]/10 text-[#6b8a3e] border-transparent',
    heading: 'text-[#34414A]',
    intro: 'text-gray-600',
    panel: 'border-gray-200 bg-slate-50 text-[#34414A] shadow-sm',
    panelBody: 'text-gray-600',
    customBody: 'text-gray-600',
    tag: 'border-gray-200 bg-white text-[#34414A] shadow-sm',
    divider: 'bg-gray-100',
    orb: 'bg-[#E6F0EE]/100',
    planCtaFeatured: 'bg-[#8CA365] text-white hover:bg-[#7a8f57] shadow-lg',
    planCtaPlain: 'border-2 border-[#34414A] text-[#34414A] hover:bg-[#34414A] hover:text-white',
    customCta: 'bg-[#34414A] text-white hover:bg-[#2a353d]',
  },
}

export default function MinutePlans({ theme = 'dark', ctaHref = '#contact' }) {
  const t = THEMES[theme]

  return (
    <section
      className={`relative overflow-hidden ${t.section}`}
      id="pricing"
      aria-labelledby="minute-plans-heading"
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-[#8fa762]/20 blur-3xl"></div>
        <div className={`absolute bottom-0 right-0 h-96 w-96 rounded-full blur-3xl ${t.orb}`}></div>
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className={`inline-flex items-center rounded-full border px-5 py-2 text-sm font-semibold shadow-sm ${t.eyebrow}`}>
            Simple Monthly Minute Plans • Live Receptionists • No Long-Term Contract
          </p>
          <h2 id="minute-plans-heading" className={`mt-6 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight ${t.heading}`}>
            Live Phone Answering Pricing
          </h2>
          <p className={`mt-5 text-lg leading-8 ${t.intro}`}>
            Choose the monthly minutes your business needs. Our live receptionists answer calls, take messages, route callers, and
            help you capture more opportunities without hiring in-house staff.
          </p>
        </div>

        <div className={`mx-auto mt-10 max-w-4xl rounded-2xl border px-6 py-5 text-center shadow-md ${t.panel}`}>
          <p className="text-sm font-semibold">
            Start with the minutes you need. Upgrade anytime as your call volume grows.
          </p>
        </div>

        <ul className="mt-12 grid gap-8 lg:grid-cols-3 list-none">
          {PLANS.map((plan) => (
            <li key={plan.name}>
              <PlanCard plan={plan} theme={t} ctaHref={ctaHref} />
            </li>
          ))}
        </ul>

        <div className={`mx-auto mt-10 max-w-5xl rounded-3xl border p-8 text-center shadow-md ${t.panel}`}>
          <h3 className="text-2xl font-bold">Need 1,000+ Minutes or Special Coverage?</h3>
          <p className={`mx-auto mt-3 max-w-3xl text-sm leading-7 ${t.customBody}`}>
            Custom volume plans are available for high-call-volume businesses, after-hours answering, weekend coverage, bilingual
            answering, medical workflows, legal intake, dispatch support, and multi-location businesses.
          </p>
          <ul className="mt-6 flex flex-wrap justify-center gap-3 list-none">
            {CUSTOM_TAGS.map((tag) => (
              <li
                key={tag}
                className={`rounded-full border px-4 py-2 text-sm font-semibold ${t.tag}`}
              >
                {tag}
              </li>
            ))}
          </ul>
          <a
            href={ctaHref}
            className={`mt-8 inline-flex items-center justify-center rounded-lg px-6 py-4 text-sm font-bold transition ${t.customCta}`}
          >
            Request Custom Quote
          </a>
        </div>

        <ul className="mt-10 grid gap-5 md:grid-cols-3 list-none">
          {BILLING_NOTES.map((note) => (
            <li key={note.title} className={`rounded-2xl border p-6 ${t.panel}`}>
              <h3 className="text-lg font-bold">{note.title}</h3>
              <p className={`mt-3 text-sm leading-7 ${t.panelBody}`}>{note.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
