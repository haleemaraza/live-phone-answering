import Link from 'next/link'

// Section 10. The figure leads each card, with the full claim kept inside the
// heading so it reads as one phrase to search engines and screen readers.
const METRICS = [
  {
    icon: 'icon-phone-ring',
    stat: '44%',
    label: 'Of inbound business calls go unanswered',
    body: 'Every unanswered call could be a potential customer looking for your services. Our live receptionists make sure incoming calls are answered, callers are heard, and enquiries are directed to the right person. This helps your business stay accessible even when your team is busy.',
  },
  {
    icon: 'icon-bolt',
    stat: '38%',
    label: 'Of calls from digital marketing are leads',
    body: 'When someone calls after visiting your website or seeing your advertisement, they may already be interested in your services. We answer these calls, understand what the caller needs, and connect them with the right team member, so you make the most of the interest your marketing generates.',
  },
  {
    icon: 'icon-call-transfer',
    stat: '19%',
    label: 'Of contact center calls are transferred again',
    body: "Callers don't want to be passed from one person to another without getting the help they need. Our receptionists first ask why they're calling and then follow your instructions to connect them with the right person or department. This makes the transfer process clearer and easier for everyone.",
  },
  {
    icon: 'icon-clock',
    stat: '7 min',
    label: 'Average call, including talk and follow-up work',
    body: 'Answering calls throughout the day can interrupt meetings, delay tasks, and make it difficult for your team to concentrate. Our receptionists handle initial calls, screen enquiries, and manage transfers so your employees can spend more time on their actual responsibilities.',
  },
  {
    icon: 'icon-check-circle',
    stat: '71%',
    label: 'Of calls are resolved on the first interaction',
    body: 'Customers appreciate speaking to someone who listens and understands what they need. Our receptionists gather the right information before transferring calls and follow your preferred instructions. This helps callers avoid repeating themselves and makes their experience more pleasant.',
  },
  {
    icon: 'icon-report',
    stat: '69%',
    label: 'Of missed calls get no callback within 48 hours',
    body: "When the person a caller needs is unavailable, the enquiry shouldn't end there. Our receptionists collect the caller's name, contact details, and reason for calling, then pass the message to your team. This gives you a clearer record of enquiries and prevents follow-ups from being overlooked.",
  },
]

export default function CallRoutingPerformance() {
  return (
    <section className="w-full bg-[#f8f8f1] py-14 md:py-16" aria-labelledby="call-routing-performance-heading">
      <div className="site-container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="icon-mask icon-bolt [--icon-size:1rem] inline-flex items-center gap-2 bg-[#8CA365]/10 text-[#5f7a3a] rounded-full text-sm font-semibold px-4 py-1.5">
            Why call handling matters
          </p>
          <h2
            id="call-routing-performance-heading"
            className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.14] tracking-tight text-[#1b4332]"
          >
            Better Call Management Starts{' '}
            <br />
            With the Right Support
          </h2>
          <p className="mt-3 text-lg leading-relaxed text-gray-600">
            Discover how professional call routing and transfers help your business handle enquiries, connect callers
            faster, and give your team more time to focus on daily operations.
          </p>
        </div>

        <ul className="mt-10 grid list-none grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {METRICS.map((metric) => (
            <li key={metric.label} className="flex">
              <div className="group flex w-full flex-col rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#8CA365] hover:shadow-xl">
                <span
                  className={`icon-mask ${metric.icon} [--icon-size:1.5rem] mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#8CA365]/10 text-[#4f6630] transition-transform duration-300 group-hover:scale-110`}
                  aria-hidden="true"
                ></span>

                <h3 className="leading-tight text-[#1a2e35]">
                  {/* The space keeps the stat and label from running together
                      when the heading is read as plain text. */}
                  <span className="block text-4xl font-extrabold tracking-tight text-[#4f6630]">{metric.stat}</span>{' '}
                  <span className="mt-1.5 block text-lg font-bold">{metric.label}</span>
                </h3>

                <p className="mt-3 flex-grow text-base leading-relaxed text-gray-600">{metric.body}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
          <p className="text-lg font-bold text-[#1a2e35]">Ready to get every call to the right person?</p>
          <Link
            prefetch={false}
            href="/contact-us"
            className="icon-mask icon-arrow-right [--icon-size:1rem] inline-flex flex-row-reverse items-center gap-3 rounded-lg bg-[#8CA365] px-7 py-3 text-base font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#9cb374]"
          >
            Get My Call Routing Quote
          </Link>
        </div>
      </div>
    </section>
  )
}
