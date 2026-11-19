import ProcessBand from '@/components/ProcessBand'

const STEPS = [
  {
    number: '01',
    icon: 'icon-phone-ring',
    title: 'Answer the Call',
    body: 'A live receptionist answers in your business name and identifies the caller, property and reason for calling.',
    tag: 'Your business greeting',
  },
  {
    number: '02',
    icon: 'icon-intake-list',
    title: 'Capture the Details',
    body: 'We record contact details, the property or unit, and the rental enquiry or maintenance issue using your approved questions.',
    tag: 'Property-specific information',
  },
  {
    number: '03',
    icon: 'icon-check-search',
    title: 'Follow Your Call Rules',
    body: 'We follow your instructions for routine messages, viewing requests and issues that need your on-call team.',
    tag: 'Your routing and urgency rules',
  },
  {
    number: '04',
    icon: 'icon-doc-arrow',
    title: 'Deliver or Connect',
    body: 'We send a clear summary or attempt a transfer. If your first contact is unavailable, we follow your agreed backup route.',
    tag: 'A clear next step',
  },
]

const RULES = ['Property details', 'Approved answers', 'On-call contacts', 'Backup routes']

export default function PropertyHowItWorks() {
  return (
    <ProcessBand
      headingId="property-how-heading"
      badge="From property call to clear next step"
      heading={
        <>
          How Our Property Management{' '}
          <br />
          Answering Service Works
        </>
      }
      intro="We agree your greeting, property details and routing instructions before calls begin. Then each tenant, prospect or owner call follows a clear process."
      steps={STEPS}
      ctaLabel="Plan My Property Call Setup"
      footnote="Tell us what you manage and how you want calls handled."
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
                Your properties. Your rules. Our call handling.
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
            Your team receives the details and handoff status for follow-up.
          </p>
        </div>
      </div>
    </ProcessBand>
  )
}
