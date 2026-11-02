import Link from 'next/link'

// Section 4. Overflow-specific, so it is its own component rather than a
// change to the shared homepage services grid.
const INDUSTRIES = [
  {
    icon: 'icon-medical-cross',
    title: 'Medical Office Call Answering',
    body: 'Help patients reach you even when your front desk is busy. Our medical overflow call handling service answers calls, takes messages, schedules appointments, and forwards requests as per your instructions.',
  },
  {
    icon: 'icon-scale',
    title: 'Legal Overflow Answering Service',
    body: 'Never let a potential client go unanswered. Our legal overflow answering service captures new client inquiries, collects case details, takes messages, and forwards urgent calls to your team.',
  },
  {
    icon: 'icon-sun',
    title: 'HVAC Overflow Call Answering',
    body: 'Keep up with customer calls during busy seasons and service emergencies. Our HVAC overflow answering service captures service requests, collects job details, and forwards urgent calls to your team.',
  },
  {
    icon: 'icon-price-tag',
    title: 'Retail Overflow Call Answering',
    body: 'Give customers a helpful response even when your staff are busy serving people in store. We handle product inquiries, store information, order questions, and customer messages.',
  },
  {
    icon: 'icon-home',
    title: 'Overflow Call Handling for Contractors',
    body: 'Stay focused on the job while we answer incoming calls. Our receptionists collect customer details, service requests, and job information, and follow your instructions for urgent calls.',
  },
  {
    icon: 'icon-calendar',
    title: 'Seasonal Overflow Answering Service',
    body: 'Handle more calls during holidays, promotions, peak seasons, and busy periods. Our seasonal overflow answering service gives your team extra support when call volumes increase.',
  },
  {
    icon: 'icon-moon',
    title: 'Overflow Call Handling After Hours',
    body: 'Keep your business available even when your office is closed. Our after-hours overflow answering service handles evening, weekend, and holiday calls, takes messages, and forwards urgent requests.',
  },
  {
    icon: 'icon-bell',
    title: 'Emergency Overflow Call Answering',
    body: 'Make sure urgent calls reach the right person. Our receptionists follow your emergency call-handling instructions, collect important details, and contact your designated team members.',
  },
]

export default function OverflowIndustries() {
  return (
    <section className="w-full bg-white py-14 md:py-16" aria-labelledby="overflow-industries-heading">
      <div className="site-container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="icon-mask icon-buildings-arrow [--icon-size:1rem] inline-flex items-center gap-2 bg-[#8CA365]/10 text-[#5f7a3a] rounded-full text-sm font-semibold px-4 py-1.5">
            Industries and business needs
          </p>
          <h2
            id="overflow-industries-heading"
            className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.14] tracking-tight text-[#1d4b37]"
          >
            Live Phone Answering for Different
            <br />
            Industries &amp; Business Needs
          </h2>
          <p className="mt-3 text-lg leading-relaxed text-gray-600">
            From everyday call spikes to after-hours requests and seasonal demand, our overflow answering service
            helps you handle more calls without hiring additional in-house staff.
          </p>
        </div>

        <ul className="mt-10 grid list-none grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {INDUSTRIES.map((industry) => (
            <li key={industry.title} className="flex">
              <div className="group flex w-full flex-col rounded-2xl border border-gray-200 bg-[#fafaf8] p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#8CA365] hover:bg-white hover:shadow-xl">
                <span
                  className={`icon-mask ${industry.icon} [--icon-size:1.4rem] mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#8CA365]/10 text-[#4f6630] transition-transform duration-300 group-hover:scale-110`}
                  aria-hidden="true"
                ></span>
                <h3 className="text-lg font-bold leading-snug text-[#1a2e35]">{industry.title}</h3>
                <p className="mt-2.5 flex-grow text-base leading-relaxed text-gray-600">{industry.body}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-col items-start gap-5 rounded-2xl bg-[#f8f7f1] px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
          <p>
            <span className="block text-lg font-bold text-[#1a2e35]">Ready to keep your business calls covered?</span>
            <span className="mt-1 block text-base text-gray-600">
              Keep every call covered with reliable answering support when your team needs it.
            </span>
          </p>
          <div className="flex flex-shrink-0 flex-col gap-3 sm:flex-row">
            <Link
              prefetch={false}
              href="/contact-us"
              className="inline-flex items-center justify-center rounded-lg bg-[#8CA365] px-7 py-3 text-base font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#9cb374]"
            >
              Get Started Today
            </Link>
            <Link
              prefetch={false}
              href="/pricing"
              className="inline-flex items-center justify-center rounded-lg border border-[#8CA365] px-7 py-3 text-base font-bold text-[#4f6630] transition-all hover:-translate-y-0.5 hover:bg-[#8CA365]/10"
            >
              View Plans
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
