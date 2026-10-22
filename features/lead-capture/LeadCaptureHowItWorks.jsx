import ProcessBand from '@/components/ProcessBand'

const STEPS = [
  {
    number: '01',
    icon: 'icon-phone-ring',
    title: 'Answer the Call',
    body: 'A live receptionist greets the caller in your business name and finds out how they can help.',
  },
  {
    number: '02',
    icon: 'icon-intake-list',
    title: 'Capture the Details',
    body: 'We collect contact details, service needs, location, and the answers to your approved intake questions.',
  },
  {
    number: '03',
    icon: 'icon-check-search',
    title: 'Apply Your Criteria',
    body: 'Where included in your plan, we check the enquiry against your agreed qualification and priority rules.',
  },
  {
    number: '04',
    icon: 'icon-doc-arrow',
    title: 'Deliver or Route',
    body: 'We send a clear lead summary or transfer the caller when your team is available, otherwise we follow your agreed callback process.',
  },
]

const RULES = ['Intake questions', 'Service areas', 'Priority enquiries', 'Transfer contacts']

export default function LeadCaptureHowItWorks() {
  return (
    <ProcessBand
      headingId="lead-capture-how-heading"
      badge="From first call to follow-up"
      heading={
        <>
          How Our Lead Capture
          <br />
          Answering Service Works
        </>
      }
      intro="We agree your greeting, intake questions, and routing instructions before calls begin. Then each enquiry follows a clear process."
      steps={STEPS}
      ctaLabel="Plan My Lead Capture Setup"
      footnote="Tell us what a useful lead looks like for your business."
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
                You set the rules. We follow your process.
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
            If a transfer is unavailable, your team receives the enquiry for follow-up.
          </p>
        </div>
      </div>
    </ProcessBand>
  )
}
