import Link from 'next/link'

// Deep green with a bloom out of the top-left, matching the other dark bands.
// Inline so no arbitrary-value class can fail to compile.
const SECTION_BACKGROUND = {
  backgroundImage: [
    'radial-gradient(60% 58% at 8% 0%, rgba(138,186,126,0.30) 0%, rgba(18,54,39,0) 58%)',
    'linear-gradient(155deg, #1a4836 0%, #163f2e 45%, #11321f 100%)',
  ].join(','),
}

const STEPS = [
  {
    number: '01',
    icon: 'icon-phone-ring',
    title: 'Answer the Call',
    body: 'A live receptionist greets the caller in your business name and finds out how they can help.',
    tag: 'Your business greeting',
  },
  {
    number: '02',
    icon: 'icon-intake-list',
    title: 'Capture the Details',
    body: 'We collect contact details, service needs, location, and the answers to your approved intake questions.',
    tag: 'Useful caller information',
  },
  {
    number: '03',
    icon: 'icon-check-search',
    title: 'Apply Your Criteria',
    body: 'Where included in your plan, we check the enquiry against your agreed qualification and priority rules.',
    tag: 'Your qualification rules',
  },
  {
    number: '04',
    icon: 'icon-doc-arrow',
    title: 'Deliver or Route',
    body: 'We send a clear lead summary or transfer the caller when your team is available. Otherwise, we follow your agreed callback process.',
    tag: 'A clear next step',
  },
]

const RULES = ['Intake questions', 'Service areas', 'Priority enquiries', 'Transfer contacts']

export default function LeadCaptureHowItWorks() {
  return (
    <section
      className="relative w-full overflow-hidden px-4 py-14 md:py-16 lg:px-[5%]"
      style={SECTION_BACKGROUND}
      aria-labelledby="lead-capture-how-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="icon-mask icon-bolt [--icon-size:1rem] inline-flex items-center gap-2 bg-white/10 text-[#a8c47d] rounded-full text-sm font-semibold px-4 py-1.5">
            From first call to follow-up
          </p>
          <h2
            id="lead-capture-how-heading"
            className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.14] tracking-tight text-white"
          >
            How Our Lead Capture
            <br />
            Answering Service Works
          </h2>
          <p className="mt-3 text-[0.95rem] leading-relaxed text-white/65">
            We agree your greeting, intake questions, and routing instructions before calls begin. Then each enquiry
            follows a clear process.
          </p>
        </div>

        <ol className="mt-12 grid list-none grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-7 lg:grid-cols-4 lg:gap-x-6">
          {STEPS.map((step, index) => (
            <li key={step.number} className="relative">
              <div className="relative flex h-full flex-col items-center rounded-xl bg-[#f7f7f0] px-5 pb-6 pt-12 text-center">
                <span
                  className="absolute -top-5 left-1/2 flex h-11 w-11 -translate-x-1/2 items-center border-2 border-white justify-center rounded-full bg-[#8CA365] text-[0.85rem] font-bold text-white"
                  aria-hidden="true"
                >
                  {step.number}
                </span>

                <span className={`icon-mask ${step.icon} [--icon-size:3.2rem] text-[#4f6630]`} aria-hidden="true"></span>

                <h3 className="mt-4 text-[1.1rem] font-bold text-[#1b4332]">{step.title}</h3>
                <p className="mt-2.5 flex-grow text-[0.86rem] leading-relaxed text-gray-600">{step.body}</p>

                <p className="mt-5 w-full rounded-full bg-[#e9efdd] px-3 py-2.5 text-[0.8rem] text-gray-700">
                  {step.tag}
                </p>
              </div>

              {index < STEPS.length - 1 && (
                <span
                  className="icon-mask icon-arrow-right [--icon-size:1.25rem] absolute left-full top-[32%] ml-3 hidden -translate-x-1/2 -translate-y-1/2 text-[#8CA365] lg:block"
                  aria-hidden="true"
                ></span>
              )}
            </li>
          ))}
        </ol>

        {/* Outlined rather than filled, so the bar reads as part of the dark band. */}
        <div className="mt-9 rounded-xl border border-[#8CA365]/50 px-6 py-5">
          <div className="grid grid-cols-1 items-center gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,19rem)] lg:gap-8">
            <div className="flex items-start gap-5">
              <span
                className="icon-mask icon-sliders [--icon-size:2rem] mt-1 flex-shrink-0 text-[#a8c47d]"
                aria-hidden="true"
              ></span>
              <div className="min-w-0">
                <p className="text-[1.15rem] font-extrabold text-white">
                  You set the rules. We follow your process.
                </p>
                <ul className="mt-2 flex list-none flex-wrap items-center gap-x-2 gap-y-1 text-[0.86rem] text-white/70">
                  {RULES.map((rule, index) => (
                    <li key={rule} className="flex items-center gap-2">
                      {rule}
                      {index < RULES.length - 1 && (
                        <span aria-hidden="true" className="text-[#8CA365]">
                          &bull;
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="text-[0.86rem] leading-relaxed text-white/70 lg:border-l lg:border-white/15 lg:pl-8">
              If a transfer is unavailable, your team receives the enquiry for follow-up.
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link
            prefetch={false}
            href="/contact-us"
            className="icon-mask icon-arrow-right [--icon-size:0.95rem] inline-flex flex-row-reverse items-center gap-3 rounded-lg bg-[#8CA365] px-8 py-3.5 text-[0.95rem] font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#9cb374]"
          >
            Plan My Lead Capture Setup
          </Link>
          <p className="mt-3 text-[0.78rem] text-white/50">
            Tell us what a useful lead looks like for your business.
          </p>
        </div>
      </div>
    </section>
  )
}
