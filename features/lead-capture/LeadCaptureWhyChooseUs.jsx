import Link from 'next/link'

const REASONS = [
  {
    icon: 'icon-sliders',
    title: 'Intake Built Around Your Business',
    body: 'Choose the questions that matter to your services and customers. Your approved script guides each enquiry from the first greeting.',
  },
  {
    icon: 'icon-list-check',
    title: 'Qualification You Define',
    body: 'Where included, we check caller answers against your agreed criteria. Keep the definition of a suitable lead in your hands.',
  },
  {
    icon: 'icon-report',
    title: 'Clear, Consistent Lead Summaries',
    body: 'Receive contact details, service needs, and the next step in a consistent format. Give your team context for a useful follow-up.',
  },
  {
    icon: 'icon-phone-forward',
    title: 'An Agreed Handoff Process',
    body: 'Set who receives each enquiry and when a transfer should be attempted. Define the fallback when your team is unavailable.',
  },
  {
    icon: 'icon-layers',
    title: 'Delivery That Fits Your Workflow',
    body: 'Review your preferred delivery channels and tools during setup. Confirm supported options before calls begin.',
  },
  {
    icon: 'icon-pencil-circle',
    title: 'Instructions That Stay Relevant',
    body: 'Review your intake questions and routing details as your business changes. Keep the process aligned with what your team needs.',
  },
]

export default function LeadCaptureWhyChooseUs() {
  return (
    <section className="w-full bg-[#1b4332] px-4 py-14 md:py-16 lg:px-[5%]" aria-labelledby="lead-capture-why-heading">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-14">
          <div>
            <p className="icon-mask icon-shield-check [--icon-size:1rem] inline-flex items-center gap-2 bg-white/10 text-[#a8c47d] rounded-full text-sm font-semibold px-4 py-1.5">
              Why choose Live Phone Answering
            </p>
            <h2
              id="lead-capture-why-heading"
              className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.12] tracking-tight text-white"
            >
              Why Choose Us for
              <br />
              Lead Capture Answering?
            </h2>
          </div>
          <p className="text-[0.95rem] leading-relaxed text-white/70 lg:pt-14">
            Your business defines a useful enquiry. We build the intake and handoff process around those details, so
            your team knows what to do next.
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
              <p className="mt-2 text-[0.84rem] leading-relaxed text-gray-600">{reason.body}</p>
            </li>
          ))}
        </ul>

        <div className="mt-9 flex flex-col items-start gap-5 border-t border-[#8CA365]/60 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p>
            <span className="block text-[1.4rem] font-extrabold text-white">
              Give your team a clearer starting point.
            </span>
            <span className="mt-1 block text-[0.9rem] text-white/70">
              Let&rsquo;s define what happens when a new enquiry comes in.
            </span>
          </p>

          <Link
            prefetch={false}
            href="/contact-us"
            className="icon-mask icon-arrow-right [--icon-size:0.95rem] inline-flex flex-shrink-0 flex-row-reverse items-center gap-3 rounded-lg bg-[#8CA365] px-7 py-3.5 text-[0.92rem] font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#9cb374]"
          >
            Build My Lead Capture Plan
          </Link>
        </div>
      </div>
    </section>
  )
}
