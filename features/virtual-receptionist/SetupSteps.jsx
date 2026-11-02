import ProcessBand from '@/components/ProcessBand'

const STEPS = [
  {
    number: '01',
    icon: 'icon-chats',
    title: 'Tell Us Your Needs',
    body: "Share your business details, call handling needs, and preferences. We'll learn how you work and what your customers expect so we can provide the right support from day one.",
  },
  {
    number: '02',
    icon: 'icon-sliders',
    title: 'Set Up Your Call Flow',
    body: 'We create a call handling plan for greetings, transfers, bookings, and messages. This ensures every call is handled smoothly and your team avoids unnecessary interruptions.',
  },
  {
    number: '03',
    icon: 'icon-headset-call',
    title: 'We Handle Your Calls',
    body: 'Our virtual receptionists answer incoming calls, handle customer questions, book appointments, and take messages while you focus on running your business.',
  },
  {
    number: '04',
    icon: 'icon-doc-arrow',
    title: 'Stay Informed',
    body: 'Receive call summaries, customer details, and important updates so you always know what needs attention and can follow up on leads.',
  },
]

export default function SetupSteps() {
  return (
    <ProcessBand
      headingId="setup-heading"
      badge="Designed around your business needs"
      heading={
        <>
          How Our Virtual Receptionist
          <br />
          Service Works
        </>
      }
      intro="You set the rules. Your dedicated virtual receptionist handles all the rest."
      steps={STEPS}
      ctaLabel="Tell Us What You Need"
      footnote="Before moving forward with your work, we'll plan next steps."
    />
  )
}
