import ProcessBand from '@/components/ProcessBand'

const STEPS = [
  {
    number: '01',
    icon: 'icon-phone-ring',
    title: 'Answer in Your Practice Name',
    body: 'A live receptionist uses your approved greeting and identifies why the person is calling.',
    tag: 'Your practice greeting',
  },
  {
    number: '02',
    icon: 'icon-intake-list',
    title: 'Capture the Agreed Details',
    body: "Record the relevant information and confirm callback details using your practice's approved questions.",
    tag: 'Useful details for your team',
  },
  {
    number: '03',
    icon: 'icon-list-check',
    title: 'Follow Your Call Instructions',
    body: 'Appointment requests, routine messages and on-call enquiries follow their agreed handling routes.',
    tag: 'Your booking and routing rules',
  },
  {
    number: '04',
    icon: 'icon-doc-arrow',
    title: 'Deliver or Connect',
    body: 'Send the message through the approved channel or attempt a transfer, following backup steps when needed.',
    tag: 'A clear handoff',
  },
]

const RULES = ['Approved questions', 'Appointment rules', 'On-call contacts', 'Backup routes']

export default function MedicalHowItWorks() {
  return (
    <ProcessBand
      headingId="medical-how-heading"
      badge="From patient call to clear next step"
      heading={
        <>
          How Our Medical{' '}
          <br />
          Answering Service Works
        </>
      }
      intro="We agree your greeting, appointment rules and contact instructions before calls begin. Then each patient or professional enquiry follows a clear process."
      steps={STEPS}
      ctaLabel="Plan My Medical Call Setup"
      footnote="Clinical decisions remain with your healthcare team."
    >
      {/* Outlined rather than filled, so the bar reads as part of the dark band. */}
      <div className="mt-9 rounded-xl border border-[#8CA365]/50 px-6 py-5">
        <div className="grid grid-cols-1 items-center gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,19rem)] lg:gap-8">
          <div className="flex items-start gap-5">
            <span
              className="icon-mask icon-sliders [--icon-size:2rem] mt-1 flex-shrink-0 text-[#a8c47d]"
              aria-hidden="true"
            ></span>
            <div className="min-w-0">
              <p className="text-[1.15rem] font-extrabold text-white">
                Your practice. Your procedures. A clear handoff.
              </p>
              <ul className="mt-2 flex list-none flex-wrap items-center gap-x-2 gap-y-1 text-base text-white/70">
                {RULES.map((rule, index) => (
                  <li key={rule} className="flex items-center gap-2">
                    {rule}
                    {index < RULES.length - 1 && (
                      <span aria-hidden="true" className="text-[#8CA365]">
                        &bull;
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="text-base leading-relaxed text-white/70 lg:border-l lg:border-white/15 lg:pl-8">
            Requests and confirmed bookings stay clearly distinguished.
          </p>
        </div>
      </div>
    </ProcessBand>
  )
}
