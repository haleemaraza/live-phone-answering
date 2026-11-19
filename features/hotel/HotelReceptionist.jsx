import Link from 'next/link'

const POINTS = [
  {
    icon: 'icon-phone-chat',
    title: "Your Hotel's Greeting",
    body: "Welcome callers in your hotel's name using the introduction and tone you approve.",
  },
  {
    icon: 'icon-building',
    title: 'Approved Property Knowledge',
    body: 'Use your agreed information to answer guest questions and refer anything that needs your team.',
  },
  {
    icon: 'icon-doc-arrow',
    title: 'A Clear Next Step',
    body: 'Capture the request, explain the agreed action and pass details to the designated hotel contact.',
  },
]

export default function HotelReceptionist() {
  return (
    <section className="w-full bg-[#f8f7f2] py-14 md:py-16" aria-labelledby="hotel-receptionist-heading">
      <div className="site-container">
        <div className="grid grid-cols-1 items-stretch gap-9 lg:grid-cols-2 lg:gap-12">
          <div>
            <p className="icon-mask icon-headset [--icon-size:1rem] inline-flex items-center gap-2 bg-[#8CA365]/10 text-[#5f7a3a] rounded-full text-sm font-semibold px-4 py-1.5">
              Hotel virtual receptionist
            </p>

            <h2
              id="hotel-receptionist-heading"
              className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.12] tracking-tight text-[#1b4332]"
            >
              A Welcoming Voice,{' '}
              <br />
              Following Your{' '}
              <br />
              Property&rsquo;s Instructions
            </h2>

            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              Our virtual receptionists use your hotel&rsquo;s greeting, approved property details and call plan to
              support guests when your team needs phone cover.
            </p>

            <ul className="mt-6 list-none divide-y divide-gray-300/50 border-t border-gray-300/50">
              {POINTS.map((point) => (
                <li key={point.title} className="flex items-start gap-4 py-4">
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
          </div>

          {/* Photo grows to match the column beside it, so the two stay level. */}
          <figure className="overflow-hidden rounded-xl">
            <img
              src="/images/zero-bot-frustration-live-answering-service.webp"
              alt="A virtual receptionist wearing a headset taking a guest call for a hotel"
              width={1200}
              height={1200}
              loading="lazy"
              decoding="async"
              className="h-full min-h-[20rem] w-full object-cover"
            />
          </figure>
        </div>

        <div className="mt-8 flex flex-col items-start gap-5 rounded-xl bg-[#1d4b37] px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
          <p>
            <span className="block text-[1.2rem] font-extrabold text-white">
              Built Around Your Hotel&rsquo;s Call Plan
            </span>
            <span className="mt-1 block text-base text-white/70">
              Agree the call types, coverage, permitted actions and staff contact routes before calls begin.
            </span>
          </p>
          <Link
            prefetch={false}
            href="/contact-us"
            className="icon-mask icon-arrow-right [--icon-size:0.95rem] inline-flex flex-shrink-0 flex-row-reverse items-center gap-3 rounded-lg bg-[#8CA365] px-7 py-3.5 text-lg font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#9cb374]"
          >
            Build My Hotel Call Plan
          </Link>
        </div>
      </div>
    </section>
  )
}
