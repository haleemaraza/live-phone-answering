import Link from 'next/link'

const REASONS = [
  {
    icon: 'icon-sliders',
    title: 'A Call Plan for Your Franchise',
    body: 'Set greetings, enquiry questions and contact rules around your brand and locations. Give customer calls a defined route.',
  },
  {
    icon: 'icon-phone-forward',
    title: 'Defined Local & Backup Routes',
    body: 'Agree local contacts, retry steps and final fallback. Follow the approved route when the first contact is unavailable.',
  },
  {
    icon: 'icon-doc-check',
    title: 'Clear, Consistent Call Records',
    body: 'Receive agreed enquiry details, the assigned location and action taken. Keep attempted transfers and message outcomes clear.',
  },
  {
    icon: 'icon-shield-check',
    title: 'Brand Standards with Local Detail',
    body: 'Keep the core greeting and approved answers consistent while using the right service areas, hours and booking rules for each location.',
  },
  {
    icon: 'icon-layers',
    title: 'Setup Around Your Workflow',
    body: 'Review forwarding, booking access and message delivery before launch. Test the agreed local routes and exception scenarios.',
  },
  {
    icon: 'icon-pencil-circle',
    title: 'Instructions That Stay Current',
    body: 'Review contacts, schedules and local details as your network changes. Agree who requests and approves updates.',
  },
]

export default function FranchiseWhyChooseUs() {
  return (
    <section className="w-full bg-[#1b4332] py-14 md:py-16" aria-labelledby="franchise-why-heading">
      <div className="site-container">
        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-14">
          <div>
            <p className="icon-mask icon-shield-check [--icon-size:1rem] inline-flex items-center gap-2 bg-white/10 text-[#a8c47d] rounded-full text-sm font-semibold px-4 py-1.5">
              Why choose Live Phone Answering
            </p>
            <h2
              id="franchise-why-heading"
              className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.12] tracking-tight text-white"
            >
              Why Choose Us for{' '}
              <br />
              Franchise Answering?
            </h2>
          </div>
          <p className="text-lg leading-relaxed text-white/70 lg:pt-14">
            Your franchise has its own brand standards, territories and local teams. We build the call plan around
            those details for a clear, consistent handoff.
          </p>
        </div>

        <ul className="mt-9 grid list-none grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((reason) => (
            <li key={reason.title} className="h-full rounded-xl bg-[#f7f7f0] p-6">
              <span
                className={`icon-mask ${reason.icon} [--icon-size:1.9rem] block text-[#4f6630]`}
                aria-hidden="true"
              ></span>
              <h3 className="mt-4 text-[1.02rem] font-bold leading-snug text-[#1b4332]">{reason.title}</h3>
              <p className="mt-2 text-base leading-relaxed text-gray-600">{reason.body}</p>
            </li>
          ))}
        </ul>

        <div className="mt-9 flex flex-col items-start gap-5 border-t border-[#8CA365]/60 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p>
            <span className="block text-[1.4rem] font-extrabold text-white">
              Your brand. Your locations. A clear handoff.
            </span>
            <span className="mt-1 block text-lg text-white/70">
              Let&rsquo;s define how customer enquiries reach the right franchise team.
            </span>
          </p>

          <Link
            prefetch={false}
            href="/contact-us"
            className="icon-mask icon-arrow-right [--icon-size:0.95rem] inline-flex flex-shrink-0 flex-row-reverse items-center gap-3 rounded-lg bg-[#8CA365] px-7 py-3.5 text-lg font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#9cb374]"
          >
            Build My Franchise Call Plan
          </Link>
        </div>
      </div>
    </section>
  )
}
