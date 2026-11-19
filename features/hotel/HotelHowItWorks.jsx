import Link from 'next/link'
import ProcessBand from '@/components/ProcessBand'

const STEPS = [
  {
    number: '01',
    icon: 'icon-building',
    title: 'Brief Us on Your Property',
    body: 'Agree your greeting, property information, coverage hours, permitted actions and staff contacts.',
  },
  {
    number: '02',
    icon: 'icon-phone-forward',
    title: 'Forward the Selected Calls',
    body: 'Set up and test the forwarding options your phone provider supports for busy or unanswered calls.',
  },
  {
    number: '03',
    icon: 'icon-clipboard-check',
    title: 'Follow the Hotel Call Plan',
    body: 'We answer approved questions, capture enquiries and follow the actions agreed for each call type.',
  },
  {
    number: '04',
    icon: 'icon-doc-arrow',
    title: 'Record and Hand Off',
    body: 'Send details to the designated team, making the request, action taken and next step clear.',
  },
]

const CONFIRMATIONS = ['Approved property details', 'Permitted actions', 'Coverage hours', 'Duty and backup contacts']

export default function HotelHowItWorks() {
  return (
    <ProcessBand
      headingId="hotel-how-heading"
      badge="How hotel answering works"
      heading={
        <>
          From the First Ring{' '}
          <br />
          to the Right Next Step
        </>
      }
      intro="Agree how hotel calls should be answered, what information can be shared and when your team should take over."
      steps={STEPS}
    >
      {/* The pre-launch checklist, then the closing bar with its own CTA. */}
      <div className="mt-9 rounded-xl bg-[#f7f7f0] px-6 py-5">
        <div className="grid grid-cols-1 items-center gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] lg:gap-8">
          <div>
            <p className="text-[1.2rem] font-extrabold text-[#1b4332]">Before Your First Guest Call</p>
            <p className="mt-1 text-base text-gray-600">
              Confirm the details that guide your hotel&rsquo;s call handling.
            </p>
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
        <p className="text-[1.15rem] font-extrabold text-white">Your hotel. Your call plan. A clear handoff.</p>
        <Link
          prefetch={false}
          href="/contact-us"
          className="icon-mask icon-arrow-right [--icon-size:0.9rem] inline-flex flex-shrink-0 flex-row-reverse items-center gap-3 rounded-lg bg-[#8CA365] px-6 py-3.5 text-base font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#9cb374]"
        >
          Build My Hotel Call Plan
        </Link>
      </div>
    </ProcessBand>
  )
}
