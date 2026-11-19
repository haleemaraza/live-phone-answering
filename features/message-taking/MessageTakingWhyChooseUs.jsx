import Link from 'next/link'

const REASONS = [
  {
    icon: 'icon-sliders',
    title: 'Your Greeting & Questions',
    body: 'Set the greeting and caller details your team needs. Give each message a useful, consistent structure.',
  },
  {
    icon: 'icon-phone-chat',
    title: 'Callback Details Checked',
    body: 'Confirm key contact information with the caller and note any details they cannot provide.',
  },
  {
    icon: 'icon-mail',
    title: 'An Agreed Delivery Route',
    body: 'Choose the destination and supported delivery method. Make it clear who receives each message.',
  },
  {
    icon: 'icon-clipboard-check',
    title: 'Clear Message-Taking Scope',
    body: 'Define what receptionists can capture, what they can answer and which requests need your team.',
  },
  {
    icon: 'icon-layers',
    title: 'Setup Around Your Workflow',
    body: 'Review forwarding, coverage hours and message delivery before launch. Test the agreed setup with your team.',
  },
  {
    icon: 'icon-pencil-circle',
    title: 'Instructions That Stay Current',
    body: 'Update recipients, coverage preferences and questions as your business changes. Keep the message plan aligned with your team.',
  },
]

export default function MessageTakingWhyChooseUs() {
  return (
    <section className="w-full bg-[#1b4332] py-14 md:py-16" aria-labelledby="message-taking-why-heading">
      <div className="site-container">
        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-14">
          <div>
            <p className="icon-mask icon-shield-check [--icon-size:1rem] inline-flex items-center gap-2 bg-white/10 text-[#a8c47d] rounded-full text-sm font-semibold px-4 py-1.5">
              Why choose Live Phone Answering
            </p>
            <h2
              id="message-taking-why-heading"
              className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.12] tracking-tight text-white"
            >
              Why Choose Us for{' '}
              <br />
              Message Taking?
            </h2>
          </div>
          <p className="text-lg leading-relaxed text-white/70 lg:pt-14">
            Your business has its own callers, contacts and ways of working. Build a message plan around the details
            your team needs and the next steps you approve.
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
              Your callers. Your instructions. A clear message.
            </span>
            <span className="mt-1 block text-lg text-[#a8c47d]">
              Let&rsquo;s define how enquiries and callback requests reach your team.
            </span>
          </p>

          <Link
            prefetch={false}
            href="/contact-us"
            className="icon-mask icon-arrow-right [--icon-size:0.95rem] inline-flex flex-shrink-0 flex-row-reverse items-center gap-3 rounded-lg bg-[#8CA365] px-7 py-3.5 text-lg font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#9cb374]"
          >
            Build My Message Taking Plan
          </Link>
        </div>
      </div>
    </section>
  )
}
