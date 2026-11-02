import ProcessBand from '@/components/ProcessBand'

const STEPS = [
  {
    number: '01',
    icon: 'icon-phone-forward',
    title: 'Set Up Your Call Forwarding',
    body: 'We help you set up call forwarding to match the way your business works. Choose when calls should come to us, whether your lines are busy, your team cannot answer, or you need extra coverage.',
  },
  {
    number: '02',
    icon: 'icon-headset',
    title: 'We Answer Your Overflow Calls',
    body: 'When a call is forwarded to us, our receptionists answer using your business name, preferred greeting, and specific instructions, so every caller feels welcome and heard.',
  },
  {
    number: '03',
    icon: 'icon-intake-list',
    title: 'We Handle Each Call',
    body: 'We answer common questions, take detailed messages, collect caller information, and follow your instructions for urgent requests, so callers get a helpful response rather than feeling passed around.',
  },
  {
    number: '04',
    icon: 'icon-doc-check',
    title: 'Your Team Gets the Details',
    body: 'We share the caller details, messages, and important information with the right person on your team, so you stay informed and your staff can focus without worrying about missed calls.',
  },
]

export default function OverflowWorkflow() {
  return (
    <ProcessBand
      headingId="overflow-workflow-heading"
      badge="How overflow answering works"
      badgeIcon="icon-refresh"
      heading={
        <>
          How do We Keep Your Business Calls
          <br />
          Covered When Things Get Busy?
        </>
      }
      intro="Your number. Your schedule. Your approved script."
      steps={STEPS}
      ctaLabel="See How We Will Handle Your Calls"
      footnote="Call forwarding options depend on your plan."
    />
  )
}
