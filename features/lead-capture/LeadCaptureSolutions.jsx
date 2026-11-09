import Link from 'next/link'

// Section 9: the three intake problems businesses describe most, each paired
// with what we actually do about it.
const SOLUTIONS = [
  {
    icon: 'icon-phone-clock',
    title: 'Playing endless phone tag with interested callers',
    body: 'When a prospect calls, we do not just take a message and hope you connect later. Our team checks your availability and books the consultation or discovery call onto your calendar right then, so you lock in the opportunity while they are still on the line.',
  },
  {
    icon: 'icon-filter-check',
    title: 'Wasting valuable hours on unqualified leads',
    body: 'You should not have to spend your afternoon talking to price shoppers or callers outside your service area. We ask your exact screening questions during the initial greeting, filtering out poor fits so your team only spends time on serious prospects.',
  },
  {
    icon: 'icon-moon',
    title: 'Missing out on high-value after-hours opportunities',
    body: 'Sending late-night or weekend calls straight to voicemail usually means those prospects call a competitor instead. We provide around-the-clock live coverage so every caller meets a warm, friendly voice who takes down their details.',
  },
]

export default function LeadCaptureSolutions() {
  return (
    <section className="w-full bg-[#f7fbf5] py-14 md:py-16" aria-labelledby="lead-capture-solutions-heading">
      <div className="site-container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="icon-mask icon-bolt [--icon-size:1rem] inline-flex items-center gap-2 bg-white text-[#4a7a3e] rounded-full text-sm font-semibold px-5 py-2 shadow-sm border border-white/60">
            We have a solution to your problems
          </p>
          <h2
            id="lead-capture-solutions-heading"
            className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.14] tracking-tight text-[#1b4332]"
          >
            Simple Solutions to Your{' '}
            <br />
            Biggest Call Intake Headaches
          </h2>
          <p className="mt-3 text-lg leading-relaxed text-gray-600">
            Managing incoming calls shouldn&rsquo;t feel like a daily struggle. Here is how we turn your biggest
            front-desk frustrations into smooth, effortless conversations.
          </p>
        </div>

        <ul className="mt-10 grid list-none grid-cols-1 gap-6 md:grid-cols-3">
          {SOLUTIONS.map((solution) => (
            <li key={solution.title} className="flex">
              <div className="group flex w-full flex-col rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#8CA365] hover:shadow-xl">
                <span
                  className={`icon-mask ${solution.icon} [--icon-size:1.5rem] mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#8CA365]/10 text-[#4f6630] transition-transform duration-300 group-hover:scale-110`}
                  aria-hidden="true"
                ></span>
                <h3 className="text-xl font-bold leading-snug text-[#1a2e35]">{solution.title}</h3>
                <p className="mt-3 flex-grow text-base leading-relaxed text-gray-600">{solution.body}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
          <p className="text-lg font-bold text-[#1a2e35]">Ready to streamline your call intake?</p>
          <Link
            prefetch={false}
            href="/contact-us"
            className="icon-mask icon-arrow-right [--icon-size:1rem] inline-flex flex-row-reverse items-center gap-3 rounded-lg bg-[#8CA365] px-7 py-3 text-base font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#9cb374]"
          >
            Get Your Custom Setup Plan
          </Link>
        </div>
      </div>
    </section>
  )
}
