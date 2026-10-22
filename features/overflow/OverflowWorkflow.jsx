import ProcessBand from '@/components/ProcessBand'

const STEPS = [
  {
    number: '01',
    icon: 'icon-phone',
    title: 'Customer Calls You',
    body: 'Customers dial your existing business number. Calls reach your team first through your agreed phone setup.',
  },
  {
    number: '02',
    icon: 'icon-phone-forward',
    title: 'Your Team Answers First',
    body: 'Your staff have the first opportunity to answer. If the call remains unanswered, your forwarding rule activates.',
  },
  {
    number: '03',
    icon: 'icon-headset',
    title: 'We Answer in Your Name',
    body: "A live receptionist uses your greeting, understands the caller's request, and follows your approved instructions.",
  },
  {
    number: '04',
    icon: 'icon-doc-check',
    title: 'You Receive the Details',
    body: 'Caller details and the next step reach your team through your agreed delivery method, ready for follow-up.',
  },
]

export default function OverflowWorkflow() {
  return (
    <ProcessBand
      headingId="overflow-workflow-heading"
      badge="Your team first. Backup when needed."
      badgeIcon="icon-refresh"
      heading={
        <>
          How Our Overflow Call
          <br />
          Answering Service Works
        </>
      }
      intro="Your number. Your greeting. A clear next step for every forwarded call."
      steps={STEPS}
      ctaLabel="Discuss My Call Flow"
      footnote="Forwarding options depend on your phone system and service plan."
    />
  )
}
