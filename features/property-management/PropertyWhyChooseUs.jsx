import Link from 'next/link'

const REASONS = [
  {
    icon: 'icon-sliders',
    title: 'A Call Plan for Your Portfolio',
    body: 'Set greetings, intake questions and contacts for each property. Give tenant, owner and rental enquiries a defined route from the first call.',
  },
  {
    icon: 'icon-list-check',
    title: 'Escalation Rules You Define',
    body: 'Agree what needs your on-call team, who to contact first and which backup route to follow. Your approved instructions guide each step.',
  },
  {
    icon: 'icon-report',
    title: 'Clear, Consistent Call Records',
    body: 'Receive property and unit details, the reason for calling and the action taken. See which contacts were attempted and the handoff status.',
  },
  {
    icon: 'icon-phone-forward',
    title: 'An Agreed Handoff Process',
    body: 'Define when to send a message or attempt a transfer. Set the fallback for unavailable contacts so the next step is clear.',
  },
  {
    icon: 'icon-layers',
    title: 'Setup Around Your Workflow',
    body: 'Review call forwarding, message destinations and any software tasks before launch. Confirm the supported options and test the agreed routes.',
  },
  {
    icon: 'icon-pencil-circle',
    title: 'Instructions That Stay Current',
    body: 'Review property details, approved answers and on-call contacts as your portfolio changes. Keep the call plan aligned with your team.',
  },
]

export default function PropertyWhyChooseUs() {
  return (
    <section className="w-full bg-[#1b4332] py-14 md:py-16" aria-labelledby="property-why-heading">
      <div className="site-container">
        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-14">
          <div>
            <p className="icon-mask icon-shield-check [--icon-size:1rem] inline-flex items-center gap-2 bg-white/10 text-[#a8c47d] rounded-full text-sm font-semibold px-4 py-1.5">
              Why choose Live Phone Answering
            </p>
            <h2
              id="property-why-heading"
              className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.12] tracking-tight text-white"
            >
              Why Choose Us for{' '}
              <br />
              Property Management{' '}
              <br />
              Answering?
            </h2>
          </div>
          <p className="text-lg leading-relaxed text-white/70 lg:pt-14">
            Your portfolio has its own properties, contacts and priorities. We build the call plan around those details
            so your team receives a useful handoff.
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
              Your portfolio. Your process. A clearer handoff.
            </span>
            <span className="mt-1 block text-lg text-white/70">
              Let&rsquo;s define how tenant, owner and rental calls reach your team.
            </span>
          </p>

          <Link
            prefetch={false}
            href="/contact-us"
            className="icon-mask icon-arrow-right [--icon-size:0.95rem] inline-flex flex-shrink-0 flex-row-reverse items-center gap-3 rounded-lg bg-[#8CA365] px-7 py-3.5 text-lg font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#9cb374]"
          >
            Build My Property Call Plan
          </Link>
        </div>
      </div>
    </section>
  )
}
