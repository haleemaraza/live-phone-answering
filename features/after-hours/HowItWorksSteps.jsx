import ProcessBand from '@/components/ProcessBand'

const STEPS = [
  {
    number: '01',
    icon: 'icon-sliders',
    title: 'Set your instructions',
    body: 'Tell us when you close, how to greet callers, and what information to collect, plus which requests reach your on-call contact.',
  },
  {
    number: '02',
    icon: 'icon-phone-forward',
    title: 'Forward and test',
    body: 'Forward your number when you close, then run a test call so you can hear the greeting and check how messages arrive.',
  },
  {
    number: '03',
    icon: 'icon-headset',
    title: 'We answer your calls',
    body: 'After closing, a receptionist answers in your business name, follows your instructions, and captures the details your team needs.',
  },
  {
    number: '04',
    icon: 'icon-doc-arrow',
    title: 'Receive the handoff',
    body: 'Each call arrives as a written summary through the channel you choose, so your team can pick up where the caller left off.',
  },
]

export default function HowItWorksSteps() {
  return (
    <ProcessBand
      headingId="how-it-works-heading"
      badge="A clear process. A confident handoff."
      heading={
        <>
          How After-Hours
          <br />
          Call Answering Works
        </>
      }
      intro="Set your instructions, connect your line, and give your callers a clear next step."
      steps={STEPS}
      ctaLabel="Plan My After-Hours Cover"
      footnote="Coverage hours and routing are confirmed during setup."
    />
  )
}
