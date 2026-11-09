import ProcessBand from '@/components/ProcessBand'

const STEPS = [
  {
    number: '01',
    icon: 'icon-phone-forward',
    title: 'Calls Are Forwarded',
    body: 'When your office closes, incoming calls are routed to our answering team. We work with your phone system or forwarding settings so the switch is seamless, and you control the hours and any conditional routing.',
  },
  {
    number: '02',
    icon: 'icon-headset',
    title: 'Calls Are Answered Professionally',
    body: 'A live receptionist answers using your business name and follows your instructions. We train agents on your scripts, tone, and escalation preferences, and confirm caller details to reduce errors.',
  },
  {
    number: '03',
    icon: 'icon-intake-list',
    title: 'Information Is Collected',
    body: 'The receptionist takes messages, captures lead information, schedules appointments, or handles basic questions, logging the caller name, contact details, reason for calling, and any qualifying details.',
  },
  {
    number: '04',
    icon: 'icon-call-transfer',
    title: 'Urgent Calls Are Escalated',
    body: 'If the situation is urgent, the call is forwarded to the right team member. We follow your triage protocols and notify on-call contacts through your chosen channels, documenting every escalation.',
  },
]

export default function HowItWorksSteps() {
  return (
    <ProcessBand
      headingId="how-it-works-heading"
      badge="Clear process that we follow"
      heading={
        <>
          How Does an After Hours{' '}
          <br />
          Answering Service Work?
        </>
      }
      intro="Tell us how you want us to attend and forward your calls."
      steps={STEPS}
      ctaLabel="Plan My After Hours Coverage Plan"
      footnote="Coverage hours and other details will be discussed during setup."
    />
  )
}
