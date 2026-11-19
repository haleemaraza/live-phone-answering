import ProcessBand from '@/components/ProcessBand'

const STEPS = [
  {
    number: '01',
    icon: 'icon-headset',
    title: 'Answer in Your Brand Name',
    body: 'A receptionist uses your approved greeting and establishes why the customer is calling.',
    tag: 'Your approved greeting',
  },
  {
    number: '02',
    icon: 'icon-id-card',
    title: 'Confirm the Location and Details',
    body: 'Identify the relevant branch or service address and capture the information your team needs.',
    tag: 'The right local details',
  },
  {
    number: '03',
    icon: 'icon-list-check',
    title: 'Follow Your Call Instructions',
    body: 'Handle the appointment, message or transfer request using the agreed brand and location rules.',
    tag: 'Your permitted tasks',
  },
  {
    number: '04',
    icon: 'icon-doc-check',
    title: 'Deliver a Clear Next Step',
    body: 'Send the enquiry to the designated team and record whether a message, transfer or booking was completed.',
    tag: 'A clearly recorded outcome',
  },
]

export default function FranchiseHowItWorks() {
  return (
    <ProcessBand
      headingId="franchise-how-heading"
      badge="How it works"
      heading={
        <>
          How Our Franchise Answering{' '}
          <br />
          Service Works
        </>
      }
      intro="From your approved greeting to a clear handoff, each call follows the plan agreed for your franchise network."
      steps={STEPS}
      ctaLabel="Plan My Franchise Call Setup"
    >
      {/* Outlined rather than filled, so the bar reads as part of the dark band. */}
      <div className="mt-9 rounded-xl border border-[#8CA365]/50 px-6 py-5">
        <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="min-w-0">
            <span className="block text-[1.3rem] font-extrabold text-white">
              One brand. Local instructions. A clear handoff.
            </span>
            <span className="mt-1 block text-base text-white/70">
              Build a call plan around your locations, opening hours and follow-up procedures.
            </span>
          </p>
        </div>
      </div>
    </ProcessBand>
  )
}
