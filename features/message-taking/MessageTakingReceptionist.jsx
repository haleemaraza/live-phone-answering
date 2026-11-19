import Link from 'next/link'

const POINTS = [
  {
    icon: 'icon-phone-chat',
    title: 'Your Business Greeting',
    body: 'Give callers a consistent introduction using the greeting you approve.',
  },
  {
    icon: 'icon-doc-check',
    title: 'Your Agreed Questions',
    body: "Capture the caller's reason, callback details and any other agreed information.",
  },
  {
    icon: 'icon-doc-arrow',
    title: 'Your Approved Next Step',
    body: 'Explain what happens next without promising a callback time you have not agreed.',
  },
]

export default function MessageTakingReceptionist() {
  return (
    <section className="w-full bg-[#f8f7f2] py-14 md:py-16" aria-labelledby="message-taking-receptionist-heading">
      <div className="site-container">
        <div className="grid grid-cols-1 items-stretch gap-9 lg:grid-cols-2 lg:gap-12">
          <div>
            <p className="icon-mask icon-headset [--icon-size:1rem] inline-flex items-center gap-2 bg-[#8CA365]/10 text-[#5f7a3a] rounded-full text-sm font-semibold px-4 py-1.5">
              Virtual receptionists for message taking
            </p>

            <h2
              id="message-taking-receptionist-heading"
              className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.12] tracking-tight text-[#1b4332]"
            >
              A Helpful Voice,{' '}
              <br />
              Following Your{' '}
              <br />
              Instructions
            </h2>

            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              Our virtual receptionists answer in your business name, capture the agreed message details and explain
              the next step using your approved wording.
            </p>

            <ul className="mt-6 list-none space-y-5">
              {POINTS.map((point) => (
                <li key={point.title} className="flex items-start gap-4">
                  <span
                    className={`icon-mask ${point.icon} [--icon-size:1.4rem] flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-[#eef2e6] text-[#4f6630]`}
                    aria-hidden="true"
                  ></span>
                  <span className="min-w-0">
                    <h3 className="text-[1.02rem] font-bold leading-snug text-[#1b4332]">{point.title}</h3>
                    <span className="mt-1 block text-base leading-relaxed text-gray-600">{point.body}</span>
                  </span>
                </li>
              ))}
            </ul>

            <Link
              prefetch={false}
              href="/contact-us"
              className="icon-mask icon-arrow-right [--icon-size:0.9rem] mt-7 inline-flex flex-row-reverse items-center gap-3 rounded-lg bg-[#8CA365] px-6 py-3.5 text-base font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#9cb374]"
            >
              Build My Message Taking Plan
            </Link>
          </div>

          {/* Photo grows to match the column beside it, so the two stay level. */}
          <figure className="overflow-hidden rounded-xl">
            <img
              src="/images/office-receptionists.webp"
              alt="A virtual receptionist wearing a headset taking a message in a business owner's name"
              width={1200}
              height={1200}
              loading="lazy"
              decoding="async"
              className="h-full min-h-[20rem] w-full object-cover"
            />
          </figure>
        </div>

        {/* Internal link out to the broader service, as in the design. */}
        <div className="mt-8 flex flex-col items-start gap-5 rounded-xl bg-[#1d4b37] px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="border-l-4 border-[#a8c47d] pl-5">
            <span className="block text-[1.2rem] font-extrabold text-white">Need More Than Message Taking?</span>
            <span className="mt-1 block text-base text-white/70">
              Explore broader reception support for your business.
            </span>
          </p>
          <Link
            prefetch={false}
            href="/virtual-receptionist"
            className="icon-mask icon-arrow-right [--icon-size:0.9rem] inline-flex flex-shrink-0 flex-row-reverse items-center gap-3 text-base font-bold text-[#a8c47d] underline-offset-4 transition-colors hover:text-white hover:underline"
          >
            View Virtual Receptionist Services
          </Link>
        </div>
      </div>
    </section>
  )
}
