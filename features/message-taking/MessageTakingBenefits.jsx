import Link from 'next/link'

// Section 4: photo on the left, four benefits in a 2x2 beside it.
const BENEFITS = [
  {
    icon: 'icon-filter-check',
    title: 'Fewer Interruptions',
    body: 'Keep focused work moving while calls needing a callback are handled through your agreed message-taking process.',
  },
  {
    icon: 'icon-check-search',
    title: 'Clearer Callback Preparation',
    body: 'Review who called and what they need before your team returns the call.',
  },
  {
    icon: 'icon-chat',
    title: 'A Consistent First Response',
    body: 'Give callers your approved greeting and message questions when your team is unavailable.',
  },
  {
    icon: 'icon-users',
    title: 'Easier Internal Follow-Up',
    body: 'Use a consistent message format and agreed recipient so your team knows where to begin.',
  },
]

export default function MessageTakingBenefits() {
  return (
    <section className="w-full bg-[#f8f7f2] py-14 md:py-16" aria-labelledby="message-taking-benefits-heading">
      <div className="site-container">
        <p className="icon-mask icon-smile [--icon-size:1rem] inline-flex items-center gap-2 bg-[#8CA365]/10 text-[#5f7a3a] rounded-full text-sm font-semibold px-4 py-1.5">
          Benefits of message taking
        </p>
        <h2
          id="message-taking-benefits-heading"
          className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.14] tracking-tight text-[#1b4332]"
        >
          Less Time Taking Messages.{' '}
          <br />
          More Context for Follow-Up.
        </h2>
        <p className="mt-3 text-lg leading-relaxed text-gray-600">
          Give your team space to focus while keeping caller requests clear and ready to review.
        </p>

        <div className="mt-8 grid grid-cols-1 items-stretch gap-7 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.4fr)] lg:gap-10">
          <figure className="overflow-hidden rounded-xl">
            <img
              src="/images/real-human-empathy-live-phone-answering-service.webp"
              alt="A business owner working at a laptop without being interrupted by the phone"
              width={1200}
              height={1200}
              loading="lazy"
              decoding="async"
              className="h-full min-h-[18rem] w-full object-cover"
            />
          </figure>

          <ul className="grid list-none grid-cols-1 gap-x-8 gap-y-7 sm:grid-cols-2">
            {BENEFITS.map((benefit) => (
              <li key={benefit.title}>
                <span
                  className={`icon-mask ${benefit.icon} [--icon-size:1.5rem] flex h-11 w-11 items-center justify-center rounded-lg bg-[#eef2e6] text-[#1b4332]`}
                  aria-hidden="true"
                ></span>
                <h3 className="mt-3 text-[1.05rem] font-bold leading-snug text-[#1b4332]">{benefit.title}</h3>
                <p className="mt-2 text-base leading-relaxed text-gray-600">{benefit.body}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 flex flex-col items-start gap-5 border-t border-gray-300/50 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[1.15rem] font-extrabold text-[#1b4332]">
            More focus for your team. A clear next step for your callers.
          </p>
          <Link
            prefetch={false}
            href="/contact-us"
            className="icon-mask icon-arrow-right [--icon-size:0.9rem] inline-flex flex-shrink-0 flex-row-reverse items-center gap-3 rounded-lg bg-[#8CA365] px-6 py-3.5 text-base font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#9cb374]"
          >
            Build My Message Taking Plan
          </Link>
        </div>
      </div>
    </section>
  )
}
