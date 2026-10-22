import ProcessBand from '@/components/ProcessBand'

const STEPS = [
  {
    number: '01',
    icon: 'icon-chats',
    title: 'Tell us about your business',
    body: 'Share your services, opening hours, and the questions callers ask most often. We use this to build the brief your receptionists work from.',
  },
  {
    number: '02',
    icon: 'icon-sliders',
    title: 'Set your call-handling rules',
    body: 'Choose your greeting, the details to collect on every call, and who to transfer to. You decide what happens when nobody is available.',
  },
  {
    number: '03',
    icon: 'icon-phone-ring',
    title: 'Connect and test your calls',
    body: 'Set up call forwarding from your existing number, then place a test call and hear the experience for yourself before you go live.',
  },
  {
    number: '04',
    icon: 'icon-doc-arrow',
    title: 'Start receiving calls and updates',
    body: 'Caller details and messages reach your team the way you chose. Request changes to your greeting, questions or routing at any time.',
  },
]

export default function SetupSteps() {
  return (
    <ProcessBand
      headingId="setup-heading"
      badge="Set up around your business"
      heading={
        <>
          How Our Virtual Receptionist
          <br />
          Service Works
        </>
      }
      intro="You set the instructions. We help put the right call-handling process in place."
      steps={STEPS}
      ctaLabel="Plan My Setup"
      footnote="Agree on backup contacts and next steps before your calls go live."
    />
  )
}
