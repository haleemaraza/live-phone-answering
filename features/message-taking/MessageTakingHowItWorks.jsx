import Link from 'next/link'
import ProcessBand from '@/components/ProcessBand'

const STEPS = [
  {
    number: '01',
    icon: 'icon-sliders',
    title: 'Set Your Instructions',
    body: 'Agree your greeting, questions, coverage hours and message recipient. Set up and test call forwarding.',
  },
  {
    number: '02',
    icon: 'icon-phone-ring',
    title: 'We Answer for You',
    body: 'When a call reaches our team, we answer in your business name using your approved greeting.',
  },
  {
    number: '03',
    icon: 'icon-doc-check',
    title: 'We Capture the Details',
    body: 'We record the reason for calling and the agreed callback information, checking key details with the caller.',
  },
  {
    number: '04',
    icon: 'icon-mail',
    title: 'Your Team Receives the Message',
    body: 'We send the message through your chosen delivery method so the designated contact can follow up.',
  },
]

const CONFIRMATIONS = ['Approved greeting', 'Coverage hours', 'Agreed questions', 'Recipient and delivery method']

export default function MessageTakingHowItWorks() {
  return (
    <ProcessBand
      headingId="message-taking-how-heading"
      badge="How message taking works"
      heading={
        <>
          From Incoming Call{' '}
          <br />
          to a Clear Message
        </>
      }
      intro="Agree the instructions once. Give each forwarded call a clear process for answering, capturing details and passing the message on."
      steps={STEPS}
    >
      {/* The pre-launch checklist, then the closing bar with its own CTA. */}
      <div className="mt-9 rounded-xl bg-[#f7f7f0] px-6 py-5">
        <div className="grid grid-cols-1 items-center gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] lg:gap-8">
          <div>
            <p className="text-[1.2rem] font-extrabold text-[#1b4332]">Before Your First Call</p>
            <p className="mt-1 text-base text-gray-600">Confirm the details that guide every message.</p>
          </div>

          <ul className="grid list-none grid-cols-1 gap-3 sm:grid-cols-2">
            {CONFIRMATIONS.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span
                  className="icon-mask icon-check [--icon-size:0.7rem] flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#8CA365] text-white"
                  aria-hidden="true"
                ></span>
                <span className="text-base text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-6 flex flex-col items-start gap-5 border-t border-white/15 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[1.15rem] font-extrabold text-white">
          A clear message. An agreed destination. Your team&rsquo;s next step.
        </p>
        <Link
          prefetch={false}
          href="/contact-us"
          className="icon-mask icon-arrow-right [--icon-size:0.9rem] inline-flex flex-shrink-0 flex-row-reverse items-center gap-3 rounded-lg bg-[#8CA365] px-6 py-3.5 text-base font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#9cb374]"
        >
          Build My Message Taking Plan
        </Link>
      </div>
    </ProcessBand>
  )
}
