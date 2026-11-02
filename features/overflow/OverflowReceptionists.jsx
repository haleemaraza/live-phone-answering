import Link from 'next/link'

const FEATURES = [
  {
    icon: 'icon-chat',
    title: 'A Greeting That Fits Your Practice',
    body: 'Set a professional and welcoming tone with your preferred greeting, clinic name, and questions for callers. Make every patient feel welcome from the first call.',
  },
  {
    icon: 'icon-doc-check',
    title: 'Approved Answers & Guidelines',
    body: 'Help receptionists answer common questions about your services, office hours, appointment availability, and clinic policies. Calls requiring medical advice are directed to your clinical team.',
  },
  {
    icon: 'icon-sliders',
    title: 'Secure Call Handling',
    body: 'Set clear rules for call transfers, message-taking, and patient information. Our HIPAA-compliant call handling process is designed to protect patient confidentiality and follow your approved instructions.',
  },
  {
    icon: 'icon-doc-refresh',
    title: 'Updated Practice Information',
    body: 'Keep greetings, contact details, office hours, and call-handling instructions up to date so patients always receive accurate information. This helps avoid misunderstandings and delays.',
  },
]

export default function OverflowReceptionists() {
  return (
    <section
      className="w-full bg-[#f7f6f0] py-14 md:py-16"
      aria-labelledby="overflow-receptionists-heading"
    >
      <div className="site-container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="icon-mask icon-headset [--icon-size:1rem] inline-flex items-center gap-2 bg-[#8CA365]/10 text-[#5f7a3a] rounded-full text-sm font-semibold px-4 py-1.5">
            Healthcare call support
          </p>
          <h2
            id="overflow-receptionists-heading"
            className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.14] tracking-tight text-[#1d4b37]"
          >
            HIPAA-Compliant Live Answering
            <br />
            for Healthcare Practices
          </h2>
          <p className="mt-3 text-lg leading-relaxed text-gray-600">
            Give patients a helpful and confidential response, even when your clinic team is busy. Our virtual
            receptionists answer in your practice name, handle patient inquiries, schedule appointments, and follow
            your instructions for calls and messages.
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
              <figcaption className="bg-[#1d4b37] px-5 py-3 text-center text-base text-white/90">
                Your practice&rsquo;s voice. Confidential patient support.
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
                <span className="mt-1 block text-base font-bold leading-snug text-[#1a2e35]">
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
                  <p className="mt-2 text-base leading-relaxed text-gray-600">{feature.body}</p>
                </li>
              ))}
            </ul>

            <div className="mt-8 border-t border-gray-300/60 pt-5 text-center">
              <p className="text-[1.02rem] font-bold text-[#1d4b37]">
                Tell us how you want your patients&rsquo; calls handled.
              </p>
              <Link
                prefetch={false}
                href="/contact-us"
                className="icon-mask icon-arrow-right [--icon-size:0.9rem] mt-4 inline-flex flex-row-reverse items-center gap-3 rounded-lg bg-[#8CA365] px-7 py-3 text-base font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#9cb374]"
              >
                Discuss My Healthcare Support
              </Link>
              <p className="mt-3 text-sm text-gray-500">
                Tell us how you want your callers to be helped.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
