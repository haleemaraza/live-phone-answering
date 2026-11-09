import Link from 'next/link'

const BENEFITS = [
  {
    icon: 'icon-devices',
    title: 'Keep Up With High Call Volumes',
    body: 'When several calls come in at once, our call overflow service answers the extra calls your team cannot reach. Capture new inquiries without keeping customers waiting.',
  },
  {
    icon: 'icon-clock',
    title: 'Coverage for Lunch Breaks & Meetings',
    body: 'Keep calls covered during lunch breaks, meetings, and busy work hours. Our overflow reception service gives callers someone to speak with when your staff are away from their desks.',
  },
  {
    icon: 'icon-users',
    title: 'Manage Staff Absences',
    body: 'Maintain reliable call coverage during sick days, annual leave, and staff shortages. Our overflow call handling solution helps prevent missed calls when fewer team members are available.',
  },
  {
    icon: 'icon-calendar',
    title: 'Prepare for Peak Seasons & Campaigns',
    body: 'Handle sudden increases in calls during promotions, holidays, and busy seasons. Give more callers a timely response when demand increases.',
  },
]

export default function OverflowBenefits() {
  return (
    <section
      id="how-overflow-works"
      className="w-full scroll-mt-28 bg-[#f8f8f1] py-14 md:py-16"
      aria-labelledby="overflow-benefits-heading"
    >
      <div className="site-container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="icon-mask icon-bolt [--icon-size:1rem] inline-flex items-center gap-2 bg-[#8CA365]/10 text-[#5f7a3a] rounded-full text-sm font-semibold px-4 py-1.5">
            How Overflow Answering Helps
          </p>
          <h2
            id="overflow-benefits-heading"
            className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.12] tracking-tight text-[#1d4b37]"
          >
            Never Miss a Call When{' '}
            <br />
            Your Team Gets Busy
          </h2>
          <p className="mt-3 text-lg leading-relaxed text-gray-600">
            When your team can&rsquo;t answer, we step in. Our overflow call handling solution keeps calls covered
            without interrupting your team&rsquo;s work.
          </p>
        </div>

        <div className="mt-9 grid grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,1.18fr)_minmax(0,1fr)] lg:gap-11">
          {/* The caption panel is part of the supplied artwork, so it is not
              drawn again in HTML. The photo keeps its own aspect ratio rather
              than being cropped, and the column ratio above is what lines its
              bottom edge up with the benefits list beside it. */}
          <figure className="overflow-hidden rounded-2xl">
            <img
              src="/images/overflow-benefits.webp"
              alt="A shop owner showing material samples to a customer at the counter, above the line: Stay focused on the customer in front of you. Give incoming callers a helpful response when your team is occupied."
              width={1100}
              height={848}
              loading="lazy"
              decoding="async"
              className="block h-auto w-full"
            />
          </figure>

          <ul className="list-none divide-y divide-gray-300/50">
            {BENEFITS.map((benefit, index) => (
              <li
                key={benefit.title}
                className={`flex items-start gap-4 py-4 ${index === 0 ? 'lg:pt-0' : ''}`}
              >
                <span
                  className={`icon-mask ${benefit.icon} [--icon-size:1.85rem] mt-0.5 flex-shrink-0 text-[#6b8a3e]`}
                  aria-hidden="true"
                ></span>
                <span className="min-w-0">
                  <span className="block text-lg font-bold leading-snug text-[#1d4b37]">{benefit.title}</span>
                  <span className="mt-1 block text-base leading-relaxed text-gray-600">{benefit.body}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-9 flex flex-col items-start gap-5 border-t border-gray-300/50 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-lg font-bold text-[#1d4b37]">
            Simple call forwarding. Reliable live answering. No missed opportunities.
          </p>
          <Link
            prefetch={false}
            href="/contact-us"
            className="icon-mask icon-arrow-right [--icon-size:0.95rem] inline-flex flex-shrink-0 flex-row-reverse items-center gap-3 rounded-lg bg-[#8CA365] px-6 py-3 text-lg font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#9cb374]"
          >
            Set Up My Overflow Coverage
          </Link>
        </div>
      </div>
    </section>
  )
}
