import Link from 'next/link'

// Each row is a real internal link to the page that covers that service.
// (The original markup pointed five of the six cards at href="#".)
const SERVICES = [
  {
    eyebrow: 'Front Desk',
    title: 'Virtual Receptionist',
    body: 'Professional remote receptionists who handle your calls just like an in-house employee.',
    href: '/virtual-receptionist',
  },
  {
    eyebrow: 'Healthcare',
    title: 'Medical Answering',
    body: 'Compassionate, accurate message taking for medical practices and healthcare providers.',
    href: '/medical-answering-service',
  },
  {
    eyebrow: 'Compliance & Security',
    title: 'HIPAA Compliant',
    body: 'Secure, compliant answering services that protect patient health information (PHI).',
    href: '/hipaa-compliant-answering-service',
  },
  {
    eyebrow: 'Calendar Management',
    title: 'Appointment Scheduling',
    body: 'We book appointments directly into your calendar, reducing back-and-forth communication.',
    href: '/appointment-scheduling',
  },
  {
    eyebrow: '24/7 Coverage',
    title: 'After-Hours Answering',
    body: "Extend your business hours. We cover evenings, weekends, and holidays so you don't have to.",
    href: '/after-hours-answering-service',
  },
  {
    eyebrow: 'English & Spanish',
    title: 'Bilingual Answering',
    body: 'Support your diverse customer base with fluent English and Spanish speaking agents.',
    href: '/virtual-receptionist',
  },
]

// Tells search engines this page is the hub that lists the six services and
// which URL covers each one.
const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Live Phone Answering Services',
  itemListElement: SERVICES.map((service, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: service.title,
    description: service.body,
    url: `https://livephoneanswering.com${service.href}`,
  })),
}

export default function ServicesList() {
  return (
    <section
      className="py-20 md:py-28 bg-white relative overflow-hidden font-sans"
      aria-labelledby="services-list-heading"
    >
      <div className="site-container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-14">
          <p className="icon-mask icon-bolt inline-flex items-center gap-2 bg-[#8CA365]/10 text-[#6b8a3e] rounded-full text-sm font-semibold px-4 py-1.5 mb-5">
            What We Do
          </p>
          <h2
            id="services-list-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#34414A] tracking-tight mb-4"
          >
            Every Answering Service Your Business Needs
          </h2>
          <p className="text-lg text-gray-600">
            One trained, US-based team covers all of it — live answering, appointment booking, after-hours calls and
            bilingual support, all following your script.
          </p>
        </div>

        <ul className="flex flex-col gap-4 list-none">
          {SERVICES.map((service) => (
            <li key={service.title}>
              <Link prefetch={false}
                href={service.href}
                className="group grid gap-x-8 rounded-2xl border border-gray-100 bg-white p-7 sm:p-8 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#295657] hover:bg-[#295657] hover:shadow-xl md:grid-cols-[1fr_auto]"
              >
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#8CA365] transition-colors group-hover:text-white/75 md:col-start-1 md:row-start-1">
                  {service.eyebrow}
                </p>
                <h3 className="mt-2 text-xl sm:text-2xl font-bold text-[#34414A] transition-colors group-hover:text-white md:col-start-1 md:row-start-2">
                  {service.title}
                </h3>
                <p className="mt-2 max-w-2xl leading-relaxed text-gray-600 transition-colors group-hover:text-white/85 md:col-start-1 md:row-start-3">
                  {service.body}
                </p>
                <span className="mt-4 text-[11px] font-bold uppercase tracking-[0.18em] text-[#8CA365] transition-all group-hover:translate-x-1 group-hover:text-white md:col-start-2 md:row-start-1 md:row-span-3 md:mt-0 md:self-start">
                  Learn More &rarr;
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
    </section>
  )
}
