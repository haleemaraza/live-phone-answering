import Link from 'next/link'

const POINTS = [
  {
    icon: 'icon-chat',
    title: 'Your greeting, naturally delivered',
    body: 'Answer in your business name with the tone and wording you approve.',
  },
  {
    icon: 'icon-building',
    title: 'Property details that add context',
    body: 'Identify the building or unit and capture what the caller needs.',
  },
  {
    icon: 'icon-doc-check',
    title: 'Answers from approved information',
    body: 'Use your current guidance for routine questions and viewing requests.',
  },
  {
    icon: 'icon-phone-forward',
    title: 'A clear route to your team',
    body: 'Record a useful message or attempt a transfer using your call plan.',
  },
]

const FOOTER_ITEMS = [
  { icon: 'icon-mail', label: 'Tenant & owner messages' },
  { icon: 'icon-calendar', label: 'Rental enquiries' },
  { icon: 'icon-home', label: 'Property-specific call handling' },
]

export default function PropertyReceptionist() {
  return (
    <section className="w-full bg-[#f8f7f2] py-14 md:py-16" aria-labelledby="property-receptionist-heading">
      <div className="site-container">
        <div className="grid grid-cols-1 items-stretch gap-9 lg:grid-cols-2 lg:gap-12">
          {/* Photo grows to match the column beside it, so the two stay level. */}
          <figure className="relative flex flex-col overflow-hidden rounded-xl">
            <span className="relative block min-h-[20rem] flex-grow">
              <img
                src="/images/zero-bot-frustration-live-answering-service.webp"
                alt="A virtual receptionist wearing a headset answering a call for a property business"
                width={1200}
                height={1200}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <span className="absolute left-4 top-4 rounded-full bg-[#c9dfb0] px-4 py-2 text-[0.62rem] font-bold uppercase tracking-[0.14em] text-[#1a2e35] shadow-sm">
                Your business name. Your approved greeting.
              </span>
            </span>

            <figcaption className="bg-[#1d4b37] px-6 py-6">
              <span className="block rounded-lg bg-white px-5 py-4">
                <span className="block text-[0.62rem] font-bold uppercase tracking-[0.16em] text-[#5f7a3a]">
                  Example call
                </span>
                <span className="mt-2 block text-base leading-relaxed text-gray-700">
                  <span className="font-bold text-[#1a2e35]">Tenant:</span> &ldquo;I need to report a repair at Oak
                  Court.&rdquo;
                </span>
                <span className="mt-2 block text-base leading-relaxed text-gray-700">
                  <span className="font-bold text-[#1a2e35]">Receptionist:</span> &ldquo;Of course. Which unit are you
                  calling about, and what&rsquo;s the issue?&rdquo;
                </span>
                <span className="mt-2 block text-sm italic text-gray-600">Illustrative conversation</span>
              </span>
            </figcaption>
          </figure>

          <div>
            <p className="icon-mask icon-headset [--icon-size:1rem] inline-flex items-center gap-2 bg-[#8CA365]/10 text-[#5f7a3a] rounded-full text-sm font-semibold px-4 py-1.5">
              Virtual receptionist for property teams
            </p>

            <h2
              id="property-receptionist-heading"
              className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.12] tracking-tight text-[#1b4332]"
            >
              A Professional Receptionist{' '}
              <br />
              for Your Property Business
            </h2>

            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              Give tenants, owners and prospective renters a helpful first conversation. Your virtual receptionist
              follows your greeting, asks the right property questions and explains the approved next step.
            </p>

            <ul className="mt-6 list-none divide-y divide-gray-300/50 border-t border-gray-300/50">
              {POINTS.map((point) => (
                <li key={point.title} className="flex items-start gap-4 py-4">
                  <span
                    className={`icon-mask ${point.icon} [--icon-size:1.3rem] flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-[#eef2e6] text-[#4f6630]`}
                    aria-hidden="true"
                  ></span>
                  <span className="min-w-0">
                    <span className="block text-[1rem] font-bold leading-snug text-[#1b4332]">{point.title}</span>
                    <span className="mt-1 block text-base leading-relaxed text-gray-600">{point.body}</span>
                  </span>
                </li>
              ))}
            </ul>

            <Link
              prefetch={false}
              href="/contact-us"
              className="icon-mask icon-arrow-right [--icon-size:1rem] mt-6 flex w-full flex-row-reverse items-center justify-center gap-3 rounded-lg bg-[#1d4b37] px-7 py-4 text-[1rem] font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#164032]"
            >
              Plan My Receptionist Support
            </Link>

            <p className="mt-3 text-base text-[#5f7a3a]">
              Your greeting. Your instructions. A consistent first response.
            </p>
          </div>
        </div>

        <ul className="mt-9 grid list-none grid-cols-1 gap-4 border-t border-gray-300/50 pt-6 sm:grid-cols-3">
          {FOOTER_ITEMS.map((item) => (
            <li key={item.label} className="flex items-center justify-center gap-3">
              <span
                className={`icon-mask ${item.icon} [--icon-size:1.25rem] flex-shrink-0 text-[#4f6630]`}
                aria-hidden="true"
              ></span>
              <span className="text-base font-semibold text-[#1a2e35]">{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
