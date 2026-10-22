import Link from 'next/link'

const BENEFITS = [
  {
    icon: 'icon-devices',
    title: 'Keep Up With Peak Call Volumes',
    body: 'Give unanswered calls a backup route while your staff finish their current conversations. Capture new inquiries without pulling your team away from customers.',
  },
  {
    icon: 'icon-clock',
    title: 'Cover Lunch Breaks & Meetings',
    body: 'Arrange coverage around planned gaps, so callers can speak with a receptionist and leave useful details while your team is away from the desk.',
  },
  {
    icon: 'icon-users',
    title: 'Ease the Pressure of Staff Absences',
    body: 'Maintain call coverage during sickness, annual leave, and temporary staffing gaps, with receptionists following your agreed handling instructions.',
  },
  {
    icon: 'icon-calendar',
    title: 'Prepare for Seasonal & Campaign Demand',
    body: 'Plan extra answering support around promotions and busy seasons, helping more inquiries receive attention when demand increases.',
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
            How overflow answering helps
          </p>
          <h2
            id="overflow-benefits-heading"
            className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.12] tracking-tight text-[#1d4b37]"
          >
            Keep Calls Covered When
            <br />
            Your Team Gets Busy
          </h2>
          <p className="mt-3 text-lg leading-relaxed text-gray-600">
            From everyday interruptions to seasonal demand, overflow answering supports your team when calls need extra
            attention.
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
            Support for busy moments. Built around your team.
          </p>
          <Link
            prefetch={false}
            href="/contact-us"
            className="icon-mask icon-arrow-right [--icon-size:0.95rem] inline-flex flex-shrink-0 flex-row-reverse items-center gap-3 rounded-lg bg-[#8CA365] px-6 py-3 text-lg font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#9cb374]"
          >
            Find My Overflow Coverage
          </Link>
        </div>
      </div>
    </section>
  )
}
