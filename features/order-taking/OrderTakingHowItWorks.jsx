import Link from 'next/link'
import ProcessBand from '@/components/ProcessBand'

const STEPS = [
  {
    number: '01',
    icon: 'icon-sliders',
    title: 'Agree the Order Process',
    body: 'Review your catalogue, required details, coverage and handling rules before calls begin.',
  },
  {
    number: '02',
    icon: 'icon-phone-ring',
    title: 'Answer in Your Business Name',
    body: 'Welcome the caller, identify their order or enquiry and follow your approved call flow.',
  },
  {
    number: '03',
    icon: 'icon-list-check',
    title: 'Capture and Check Details',
    body: 'Record products, variants and quantities, then confirm the key details with the caller.',
  },
  {
    number: '04',
    icon: 'icon-doc-arrow',
    title: 'Follow the Agreed Route',
    body: 'Send the order record or use your approved system where included. Flag anything needing review.',
  },
]

export default function OrderTakingHowItWorks() {
  return (
    <ProcessBand
      headingId="order-taking-how-heading"
      badge="How order taking works"
      heading={
        <>
          From Incoming Call to a{' '}
          <br />
          Clear Order Handoff
        </>
      }
      intro="An agreed process helps callers understand the next step and gives your team the details it needs."
      steps={STEPS}
    >
      {/* The status note, then the closing bar with its own CTA. */}
      <div className="mt-9 flex items-start gap-5 rounded-xl bg-[#f7f7f0] px-6 py-5">
        <span
          className="icon-mask icon-doc-check [--icon-size:2rem] mt-0.5 flex-shrink-0 text-[#4f6630]"
          aria-hidden="true"
        ></span>
        <div className="min-w-0">
          <p className="text-[1.2rem] font-extrabold text-[#1b4332]">Keep the Order Status Clear</p>
          <p className="mt-1 text-base leading-relaxed text-gray-600">
            Show whether the request is captured, submitted or awaiting your team&rsquo;s action.
          </p>
        </div>
      </div>

      <div className="mt-6 flex flex-col items-start gap-5 border-t border-white/15 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[1.15rem] font-extrabold text-white">Your catalogue. Your call plan. A clearer next step.</p>
        <Link
          prefetch={false}
          href="/contact-us"
          className="icon-mask icon-arrow-right [--icon-size:0.9rem] inline-flex flex-shrink-0 flex-row-reverse items-center gap-3 rounded-lg bg-[#8CA365] px-6 py-3.5 text-base font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#9cb374]"
        >
          Build My Order Taking Plan
        </Link>
      </div>
    </ProcessBand>
  )
}
