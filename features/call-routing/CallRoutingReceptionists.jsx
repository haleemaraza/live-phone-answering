import Link from 'next/link'

const POINTS = [
  {
    icon: 'icon-chat',
    title: 'Listen before routing',
    body: "Capture the caller's name, reason for calling, and requested contact so the next step fits their enquiry.",
  },
  {
    icon: 'icon-phone-forward',
    title: 'Handle transfers thoughtfully',
    body: 'Follow your approved contact list and availability instructions. Where supported, introduce the caller before connecting.',
  },
  {
    icon: 'icon-report',
    title: 'Make messages useful',
    body: 'If a contact is unavailable, follow your backup plan and capture clear details for your team to follow up.',
  },
]

export default function CallRoutingReceptionists() {
  return (
    <section
      className="w-full bg-[#f8f7f2] px-4 py-14 md:py-16 lg:px-[5%]"
      aria-labelledby="call-routing-receptionists-heading"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-stretch gap-9 lg:grid-cols-2 lg:gap-12">
        {/* Photo grows to match the column beside it, so the two stay level. */}
        <figure className="flex flex-col overflow-hidden rounded-xl">
          <span className="relative block min-h-[18rem] flex-grow">
            <img
              src="/images/zero-bot-frustration-live-answering-service.webp"
              alt="A live receptionist wearing a headset listening to a caller before transferring them"
              width={1200}
              height={1200}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </span>
          <figcaption className="bg-[#1d4b37] px-6 py-6">
            <span className="block text-[1.15rem] font-bold text-white">A real person. A considered next step.</span>
            <span className="mt-4 block h-px w-16 bg-[#a8c47d]" aria-hidden="true"></span>
            <span className="mt-4 block text-[0.86rem] leading-relaxed text-white/70">
              Listening to your callers. Following your instructions.
            </span>
          </figcaption>
        </figure>

        <div>
          <p className="icon-mask icon-headset [--icon-size:1rem] inline-flex items-center gap-2 bg-[#8CA365]/10 text-[#5f7a3a] rounded-full text-sm font-semibold px-4 py-1.5">
            Live virtual receptionists
          </p>

          <h2
            id="call-routing-receptionists-heading"
            className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.12] tracking-tight text-[#1b4332]"
          >
            Live Virtual Receptionists
            <br />
            for Call Screening and
            <br />
            Transfers
          </h2>

          <p className="mt-4 text-[0.95rem] leading-relaxed text-gray-600">
            Give callers a helpful first point of contact. Our receptionists answer in your business name, understand
            why someone is calling, and follow your instructions for the next step.
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
                  <span className="mt-1 block text-[0.84rem] leading-relaxed text-gray-600">{point.body}</span>
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

          <p className="mt-3 text-[0.82rem] text-gray-600">
            Greetings, transfer options, and backup steps are agreed during setup.
          </p>
        </div>
      </div>
    </section>
  )
}
