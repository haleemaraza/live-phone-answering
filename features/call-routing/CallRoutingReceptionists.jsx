import Link from 'next/link'

const POINTS = [
  {
    icon: 'icon-chat',
    title: 'Understand the Caller Before Taking Action',
    body: "Every call starts with listening. Our receptionists ask for the caller's name, understand the reason for their call, and identify who they need to speak with, so each enquiry is directed appropriately.",
  },
  {
    icon: 'icon-phone-forward',
    title: 'Connect Every Caller to the Right Contact',
    body: "Once we understand the request, we use your approved contact list, transfer instructions, and your team's availability. Where supported, we introduce the caller before completing the transfer.",
  },
  {
    icon: 'icon-report',
    title: 'Keep Important Messages From Getting Lost',
    body: "When a transfer cannot be completed, we follow your backup instructions and record the caller's name, callback number, reason for calling, and any important message for your team.",
  },
]

export default function CallRoutingReceptionists() {
  return (
    <section
      className="w-full bg-[#f8f7f2] py-14 md:py-16"
      aria-labelledby="call-routing-receptionists-heading"
    >
      <div className="site-container grid grid-cols-1 items-stretch gap-9 lg:grid-cols-2 lg:gap-12">
        {/* Photo grows to match the column beside it, so the two stay level. */}
        <figure className="flex flex-col overflow-hidden rounded-xl">
          <span className="relative block min-h-[18rem] flex-grow">
            <img
              src="/images/re.png"
              alt="A live receptionist wearing a headset listening to a caller before transferring them"
              width={1200}
              height={1200}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </span>
          
        </figure>

        <div>
          <p className="icon-mask icon-headset [--icon-size:1rem] inline-flex items-center gap-2 bg-[#8CA365]/10 text-[#5f7a3a] rounded-full text-sm font-semibold px-4 py-1.5">
            Live virtual receptionist services
          </p>

          <h2
            id="call-routing-receptionists-heading"
            className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.12] tracking-tight text-[#1b4332]"
          >
            Professional Call Screening{' '}
            <br />
            and Transfers, Handled by{' '}
            <br />
            Real Receptionists
          </h2>

          <p className="mt-4 text-lg leading-relaxed text-gray-600">
            Make every incoming call easier to manage with a live receptionist who represents your business.
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

          <p className="mt-3 text-base text-gray-600">
            Your greetings, contact lists, transfer preferences, availability rules, and backup instructions are agreed
            upon during setup.
          </p>
        </div>
      </div>
    </section>
  )
}
