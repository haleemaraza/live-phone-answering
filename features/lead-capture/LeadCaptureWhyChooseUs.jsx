import Link from 'next/link'

const REASONS = [
  {
    icon: 'icon-sliders',
    title: 'Custom call scripts for every business',
    body: 'Every question we ask is shaped around your specific services and offer. Your callers enjoy a smooth, friendly initial conversation that feels like a natural extension of your own team, building trust from the very first hello.',
  },
  {
    icon: 'icon-list-check',
    title: 'Smart lead screening as per your criteria',
    body: 'You set the exact criteria for what makes a great lead. We vet every incoming caller so your team only spends time talking to genuine, ready-to-buy prospects, and your sales team can focus where it generates revenue.',
  },
  {
    icon: 'icon-report',
    title: 'Instant lead summaries for better reach',
    body: 'Say goodbye to lost contact details and messy handwriting. You get clean, structured summaries for every call so you can jump into follow-ups fully prepared, with the context needed to guide the next conversation.',
  },
  {
    icon: 'icon-phone-forward',
    title: 'Reliable handoffs to help your busy team',
    body: 'Set up clear paths for live transfers and urgent messages. If your team is busy or unavailable, our backup process makes sure every caller is taken care of without delay, so no important inquiry falls through the cracks.',
  },
  {
    icon: 'icon-layers',
    title: 'Easy integrations with your existing tools',
    body: 'No need to learn complicated new software or change how you operate. We push incoming lead details, caller notes, and follow-up requests straight into the tools your team already relies on every day.',
  },
  {
    icon: 'icon-pencil-circle',
    title: 'Flexible adjustments based on your requirements',
    body: 'As your business changes, your call handling can too. Update your screening questions, availability schedules, or routing rules whenever you launch a new service, run a promotion, or adjust your working hours.',
  },
]

export default function LeadCaptureWhyChooseUs() {
  return (
    <section className="w-full bg-[#1b4332] py-14 md:py-16" aria-labelledby="lead-capture-why-heading">
      <div className="site-container">
        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-14">
          <div>
            <p className="icon-mask icon-shield-check [--icon-size:1rem] inline-flex items-center gap-2 bg-white/10 text-[#a8c47d] rounded-full text-sm font-semibold px-4 py-1.5">
              Reasons to choose Live Phone Answering
            </p>
            <h2
              id="lead-capture-why-heading"
              className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.12] tracking-tight text-white"
            >
              Why Work with Us for Your{' '}
              <br />
              Lead Capture Answering?
            </h2>
          </div>
          <p className="text-lg leading-relaxed text-white/70 lg:pt-14">
            We design your intake around your exact service offerings so every conversation represents your brand
            accurately.
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
              Let us help your team get a better starting point.
            </span>
            <span className="mt-1 block text-lg text-white/70">
              Make your next follow-up a better-informed conversation.
            </span>
          </p>

          <Link
            prefetch={false}
            href="/contact-us"
            className="icon-mask icon-arrow-right [--icon-size:0.95rem] inline-flex flex-shrink-0 flex-row-reverse items-center gap-3 rounded-lg bg-[#8CA365] px-7 py-3.5 text-lg font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#9cb374]"
          >
            Build My Lead Capture Plan
          </Link>
        </div>
      </div>
    </section>
  )
}
