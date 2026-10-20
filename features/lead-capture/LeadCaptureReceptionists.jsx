import Link from 'next/link'

const POINTS = [
  {
    icon: 'icon-chats',
    title: 'Your Greeting. Your Business Voice.',
    body: 'Welcome callers with your business name and an approved greeting. Answer routine questions using the information you provide.',
  },
  {
    icon: 'icon-clipboard-check',
    title: 'Thoughtful Questions, Useful Details',
    body: 'Guide the conversation through your intake questions and check key contact details. Record service needs and agreed qualification answers clearly.',
  },
  {
    icon: 'icon-phone-forward',
    title: 'Clear Handoffs and Sensible Escalation',
    body: 'Follow your routing instructions for transfers and callbacks. Refer questions outside the agreed scope to your team with the relevant context.',
  },
]

export default function LeadCaptureReceptionists() {
  return (
    <section
      className="w-full bg-[#f8f7f1] px-4 py-14 md:py-16 lg:px-[5%]"
      aria-labelledby="lead-capture-receptionists-heading"
    >
      {/* Narrower photo column: the artwork is portrait, so an even split made
          it far taller than the list of points beside it. */}
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-9 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.75fr)] lg:gap-12">
        <div>
          <p className="icon-mask icon-headset [--icon-size:1rem] inline-flex items-center gap-2 bg-[#8CA365]/10 text-[#5f7a3a] rounded-full text-sm font-semibold px-4 py-1.5">
            A human voice for new enquiries
          </p>

          <h2
            id="lead-capture-receptionists-heading"
            className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.12] tracking-tight text-[#1b4332]"
          >
            Live Virtual Receptionists
            <br />
            for Lead Capture and Intake
          </h2>

          <p className="mt-4 text-[0.95rem] leading-relaxed text-gray-600">
            Give prospective customers a helpful person to speak with. Our receptionists represent your business, ask
            the questions you approve, and organize the details your team needs for the next conversation.
          </p>

          <ul className="mt-6 list-none divide-y divide-gray-300/50 border-t border-gray-300/50">
            {POINTS.map((point) => (
              <li key={point.title} className="flex items-start gap-4 py-4">
                <span
                  className={`icon-mask ${point.icon} [--icon-size:1.4rem] flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#eaf1dd] text-[#4f6630]`}
                  aria-hidden="true"
                ></span>
                <span className="min-w-0">
                  <span className="block text-[1rem] font-bold leading-snug text-[#1b4332]">{point.title}</span>
                  <span className="mt-1 block text-[0.84rem] leading-relaxed text-gray-600">{point.body}</span>
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-4">
            <Link
              prefetch={false}
              href="/contact-us"
              className="icon-mask icon-arrow-right [--icon-size:1rem] inline-flex flex-row-reverse items-center gap-3 rounded-lg bg-[#1d4b37] px-7 py-3.5 text-[0.98rem] font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#164032]"
            >
              Build My Receptionist Plan
            </Link>
            <Link
              prefetch={false}
              href="/pricing"
              className="text-[0.92rem] font-semibold text-[#1b4332] underline underline-offset-4 transition-colors hover:text-[#5f7a3a]"
            >
              View Plans &amp; Pricing
            </Link>
          </div>

          <p className="mt-4 text-[0.82rem] text-gray-600">
            Your greeting, intake questions, and handoff process are agreed during setup.
          </p>
        </div>

        {/* Photo grows to match the column beside it, so the two stay level. */}
        {/* The caption panel is part of the supplied artwork, so it is not
            drawn again in HTML and the photo is not cropped. */}
        <figure className="overflow-hidden rounded-xl">
          <img
            src="/images/lead-capture-receptionists.webp"
            alt="A receptionist wearing a headset working at her screen, above the line: A helpful first conversation. Clear details for the next one."
            width={848}
            height={1233}
            loading="lazy"
            decoding="async"
            className="block h-auto w-full"
          />
        </figure>
      </div>
    </section>
  )
}
