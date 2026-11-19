import ProcessBand from '@/components/ProcessBand'

// Section 3. The page previously borrowed the lead-capture band, which named
// the wrong service in its heading; these are the call-routing steps.
const STEPS = [
  {
    number: '01',
    icon: 'icon-phone-ring',
    title: 'Answer the Call',
    body: 'A friendly, live receptionist answers using your company name, making a great first impression while asking the caller who they need to reach. We treat every caller with care, ensuring your business sounds professional, welcoming, and organized right from the start.',
  },
  {
    number: '02',
    icon: 'icon-check-search',
    title: 'Identify the Destination',
    body: 'We gather key details, like the reason for the call, customer account type, or requested branch, so we know exactly where to direct them. By asking a few quick intake questions, we eliminate any confusion and make sure the call gets pointed to the exact department or specialist equipped to help.',
  },
  {
    number: '03',
    icon: 'icon-sliders',
    title: 'Apply Your Routing Rules',
    body: 'We filter the call through your custom availability, department guidelines, and schedule parameters to determine the best available recipient. Whether you want calls split by region, team role, or working hours, our screeners strictly follow your approved instructions.',
  },
  {
    number: '04',
    icon: 'icon-phone-forward',
    title: 'Transfer or Take a Message',
    body: "If your team member is available, we transfer the caller seamlessly with a warm introduction. If they're busy or away, we collect a detailed message and send it directly to your team so you can handle follow-ups on your own time without losing a lead.",
  },
]

const RULES = ['Custom schedules', 'Department directories', 'Priority routing', 'Backup contacts']

export default function CallRoutingHowItWorks() {
  return (
    <ProcessBand
      headingId="call-routing-how-heading"
      badge="From first call to follow-up"
      heading={
        <>
          How Our Call Routing{' '}
          <br />
          Service Works
        </>
      }
      intro="We set up your custom greeting, routing rules, and department preferences before we take our first call. Every incoming call then follows a smooth, predictable path."
      steps={STEPS}
      ctaLabel="Plan My Call Routing Setup"
      footnote="Tell us how your team handles incoming calls, and we'll take care of the rest."
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
              <p className="text-[1.15rem] font-extrabold text-white">You set the rules. We follow your process.</p>
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
            If a direct transfer can&rsquo;t be completed, your team instantly gets a clear recap for quick follow-up.
          </p>
        </div>
      </div>
    </ProcessBand>
  )
}
