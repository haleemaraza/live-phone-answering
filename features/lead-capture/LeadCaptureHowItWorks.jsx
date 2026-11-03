import ProcessBand from '@/components/ProcessBand'

const STEPS = [
  {
    number: '01',
    icon: 'icon-phone-ring',
    title: 'Answer the Call',
    body: 'A friendly receptionist answers using your business name and preferred greeting. We make callers feel welcome and ask how we can help, just as someone from your own team would.',
  },
  {
    number: '02',
    icon: 'icon-intake-list',
    title: 'Get to Know the Caller',
    body: 'We ask a few questions to understand what the caller is looking for. From contact details to service requirements and location, we collect the information your team needs to get back to them.',
  },
  {
    number: '03',
    icon: 'icon-check-search',
    title: 'Identify the Right Enquiries',
    body: 'We follow your guidelines to understand which enquiries need priority attention and which require a different response, so your team can focus on relevant sales opportunities.',
  },
  {
    number: '04',
    icon: 'icon-doc-arrow',
    title: 'Send the Details or Connect the Call',
    body: 'We pass the caller details and a clear summary to your team through your preferred channel. If a team member is available we can transfer the call, otherwise we follow your callback instructions.',
  },
]

const RULES = ['Intake questions tailored to your services', 'Service areas and coverage requirements', 'Priority leads and urgent enquiries', 'Approved transfer contacts and callback instructions']

export default function LeadCaptureHowItWorks() {
  return (
    <ProcessBand
      headingId="lead-capture-how-heading"
      badge="From the first call to the right follow-up"
      heading={
        <>
          How Our Lead Capture
          <br />
          Answering Service Works
        </>
      }
      intro="Every new enquiry is an opportunity to connect with a potential customer. We make sure callers are welcomed, their needs are understood, and their details reach your team."
      steps={STEPS}
      ctaLabel="Plan My Lead Capture Setup"
      footnote="Tell us about your business, the enquiries you receive, and how you’d like us to handle them."
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
                You Set the Guidelines. We Take Care of the Calls.
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
            If your team can&rsquo;t take a call, we&rsquo;ll make sure the enquiry is recorded and sent to the right person for follow-up.
          </p>
        </div>
      </div>
    </ProcessBand>
  )
}
