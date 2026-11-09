// Section 8: what the service actually changes for a business, as six
// numbered outcomes.
const OUTCOMES = [
  {
    icon: 'icon-phone-ring',
    title: 'Never Miss Important Calls',
    body: 'Our overflow call answering service makes sure callers always reach a live receptionist, even when your team is busy, handling other customers, or unavailable. We answer promptly, understand what callers need, and make sure no important request goes unanswered.',
  },
  {
    icon: 'icon-user-plus',
    title: 'Capture More Business Leads',
    body: 'Every unanswered call could mean a missed business opportunity. We help you capture more leads by collecting caller details, answering basic questions, and recording service inquiries, so your team has what it needs to follow up.',
  },
  {
    icon: 'icon-smile',
    title: 'Give Customers a Better Experience',
    body: "Nobody likes calling a business and getting no answer. With our overflow call handling, customers don't wait endlessly or rely on voicemail. They get a friendly, helpful response from a live receptionist who guides them on what to do next.",
  },
  {
    icon: 'icon-calendar',
    title: 'Handle Seasonal Call Spikes',
    body: 'Busy seasons, promotions, and unexpected increases in call volume put extra pressure on your team. Our seasonal overflow answering helps you manage these periods by answering additional calls and capturing requests.',
  },
  {
    icon: 'icon-users',
    title: 'Keep Your Team Focused',
    body: 'Your staff should be able to focus on their work without constantly stopping to answer the phone. We take care of extra calls, customer questions, and incoming requests so your team stays productive.',
  },
  {
    icon: 'icon-clock',
    title: 'Get Call Coverage When You Need It',
    body: 'Whether your team is on a lunch break, handling peak-hour calls, or away after business hours, we provide flexible call coverage when you need extra support, without the cost of hiring additional staff.',
  },
]

export default function OverflowOutcomes() {
  return (
    <section className="w-full bg-[#f8f8f1] py-14 md:py-16" aria-labelledby="overflow-outcomes-heading">
      <div className="site-container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="icon-mask icon-bolt [--icon-size:1rem] inline-flex items-center gap-2 bg-[#8CA365]/10 text-[#5f7a3a] rounded-full text-sm font-semibold px-4 py-1.5">
            Results for your business
          </p>
          <h2
            id="overflow-outcomes-heading"
            className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.14] tracking-tight text-[#1d4b37]"
          >
            What Businesses Achieve with{' '}
            <br />
            Our Overflow Answering Service
          </h2>
        </div>

        <ol className="mt-10 grid list-none grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {OUTCOMES.map((outcome, index) => (
            <li key={outcome.title} className="flex">
              <div className="group flex w-full flex-col rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#8CA365] hover:shadow-xl">
                <div className="mb-5 flex items-center gap-4">
                  <span
                    className={`icon-mask ${outcome.icon} [--icon-size:1.4rem] flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-[#8CA365]/10 text-[#4f6630] transition-transform duration-300 group-hover:scale-110`}
                    aria-hidden="true"
                  ></span>
                  
                </div>
                <h3 className="text-xl font-bold leading-snug text-[#1a2e35]">{outcome.title}</h3>
                <p className="mt-3 flex-grow text-base leading-relaxed text-gray-600">{outcome.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
