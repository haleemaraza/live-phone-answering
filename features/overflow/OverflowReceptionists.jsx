import Link from 'next/link'

const FEATURES = [
  {
    icon: 'icon-chat',
    title: 'A Greeting That Reflects Your Business',
    body: "Set the tone from the first hello. Share your preferred introduction, business-name pronunciation, and the questions that help us understand each caller's needs.",
  },
  {
    icon: 'icon-doc-check',
    title: 'Answers You Have Approved',
    body: 'Give receptionists a clear reference for your services, hours, and common questions. Requests outside that guidance are passed to your team for a response.',
  },
  {
    icon: 'icon-sliders',
    title: 'Clear Call-Handling Boundaries',
    body: 'Choose which calls to transfer, what information to collect, and when to take a message. Your instructions define the next step.',
  },
  {
    icon: 'icon-doc-refresh',
    title: 'Instructions That Stay Relevant',
    body: 'Keep greetings, service information, contact lists, and routing arrangements aligned with changes to your business.',
  },
]

export default function OverflowReceptionists() {
  return (
    <section
      className="w-full bg-[#f7f6f0] px-4 py-14 md:py-16 lg:px-[5%]"
      aria-labelledby="overflow-receptionists-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="icon-mask icon-headset [--icon-size:1rem] inline-flex items-center gap-2 bg-[#8CA365]/10 text-[#5f7a3a] rounded-full text-sm font-semibold px-4 py-1.5">
            Real people. Your business voice.
          </p>
          <h2
            id="overflow-receptionists-heading"
            className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.14] tracking-tight text-[#1d4b37]"
          >
            Live Virtual Receptionists
            <br />
            for Overflow Call Support
          </h2>
          <p className="mt-3 text-[0.95rem] leading-relaxed text-gray-600">
            Give callers a helpful conversation when your team is busy. Our receptionists answer in your business name
            and follow the instructions that make your service feel familiar.
          </p>
        </div>

        <div className="mt-7 grid grid-cols-1 items-start gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1fr)] lg:gap-10">
          <div className="relative">
            {/* Pale tile peeking out of the top-left corner, as in the reference. */}
            <div
              className="pointer-events-none absolute -left-3 -top-3 h-28 w-48 rounded-2xl bg-[#e4eed6]"
              aria-hidden="true"
            ></div>

            {/* Photo and caption bar share one clipped, rounded box. */}
            <figure className="relative overflow-hidden rounded-2xl">
              <img
                src="/images/zero-bot-frustration-live-answering-service.webp"
                alt="A live virtual receptionist wearing a headset answering an overflow call in an open-plan office"
                width={1200}
                height={1000}
                loading="lazy"
                decoding="async"
                className="aspect-[6/5] w-full object-cover"
              />
              <figcaption className="bg-[#1d4b37] px-5 py-3 text-center text-[0.84rem] text-white/90">
                A helpful voice, guided by your business.
              </figcaption>
            </figure>

            <p className="absolute -left-4 bottom-[13%] flex w-[64%] items-center gap-3.5 rounded-xl bg-white px-4 py-3 shadow-xl">
              <span
                className="icon-mask icon-phone [--icon-size:1.1rem] flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#eaf1dd] text-[#295657]"
                aria-hidden="true"
              ></span>
              <span className="min-w-0">
                <span className="block text-[0.58rem] font-bold uppercase tracking-[0.14em] text-gray-600">
                  Your approved greeting
                </span>
                <span className="mt-1 block text-[0.88rem] font-bold leading-snug text-[#1a2e35]">
                  &ldquo;Thank you for calling. How can I help?&rdquo;
                </span>
              </span>
            </p>
          </div>

          <div>
            <ul className="grid list-none grid-cols-1 gap-x-10 gap-y-9 sm:grid-cols-2">
              {FEATURES.map((feature) => (
                <li key={feature.title}>
                  <span
                    className={`icon-mask ${feature.icon} [--icon-size:1.3rem] flex h-11 w-11 items-center justify-center rounded-xl bg-[#eaf1dd] text-[#1d4b37]`}
                    aria-hidden="true"
                  ></span>
                  <h3 className="mt-3.5 text-[1.02rem] font-bold leading-snug text-[#1d4b37]">{feature.title}</h3>
                  <p className="mt-2 text-[0.84rem] leading-relaxed text-gray-600">{feature.body}</p>
                </li>
              ))}
            </ul>

            <div className="mt-8 border-t border-gray-300/60 pt-5 text-center">
              <p className="text-[1.02rem] font-bold text-[#1d4b37]">
                Your greeting. Your knowledge. Your call flow.
              </p>
              <Link
                prefetch={false}
                href="/contact-us"
                className="icon-mask icon-arrow-right [--icon-size:0.9rem] mt-4 inline-flex flex-row-reverse items-center gap-3 rounded-lg bg-[#8CA365] px-7 py-3 text-[0.88rem] font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#9cb374]"
              >
                Discuss My Receptionist Support
              </Link>
              <p className="mt-3 text-[0.78rem] text-gray-500">
                Tell us how you want your callers to be helped.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
