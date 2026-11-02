import ProcessBand from '@/components/ProcessBand'

const STEPS = [
  {
    number: '01',
    icon: 'icon-phone-forward',
    title: 'Your Phone Sends the Call to Us',
    body: 'When you are too busy to answer, your line passes the call to our team. Instead of a voicemail machine, your customer talks to a real person right away.',
  },
  {
    number: '02',
    icon: 'icon-headset-call',
    title: 'We Talk Just Like Your Office Team',
    body: 'You tell us how you greet people. When a customer calls, your notes appear on our screens, so we use your business name and sound like your own office team.',
  },
  {
    number: '03',
    icon: 'icon-calendar-clock',
    title: 'We Check Your Online Calendar Live',
    body: 'While we are on the phone we look at your calendar, see which times are open, help the customer pick a slot, and enter their details into the system.',
  },
  {
    number: '04',
    icon: 'icon-calendar-check',
    title: 'Your Schedule Updates Instantly',
    body: 'The moment the appointment is booked, your calendar updates. Because it happens in real time, two people cannot accidentally book the same slot.',
  },
]

export default function SchedulingHowItWorks() {
  return (
    <ProcessBand
      headingId="scheduling-how-heading"
      badge="From picking the call to booking an appointment"
      heading={
        <>
          How Does Our Appointment 
          <br />
         Scheduling Answering Service Work?
        </>
      }
      intro="No waiting for ages. We answer your calls and book the meeting while the caller is still on the line."
      steps={STEPS}
      ctaLabel="Plan My Scheduling Setup"
      // Capabilities depend on the caller's own tools, so the claim is scoped.
      footnote="Calendar access and booking capabilities are confirmed during setup."
    />
  )
}
