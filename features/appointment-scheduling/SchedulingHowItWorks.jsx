import ProcessBand from '@/components/ProcessBand'

const STEPS = [
  {
    number: '01',
    icon: 'icon-headset-call',
    title: 'We Answer Your Call',
    body: 'A live receptionist greets the caller in your business name and finds out which service or appointment they need.',
  },
  {
    number: '02',
    icon: 'icon-intake-list',
    title: 'We Collect the Details',
    body: 'We gather contact information, service needs, and the questions you require before an appointment can be arranged.',
  },
  {
    number: '03',
    icon: 'icon-calendar-clock',
    title: 'We Check Availability',
    body: 'Using supported tools, we check available times against your appointment lengths, staff schedules, and booking rules.',
  },
  {
    number: '04',
    icon: 'icon-calendar-check',
    title: 'We Arrange the Next Step',
    body: 'Where direct booking is supported, we reserve the appointment. Otherwise we send a complete request for your team.',
  },
]

export default function SchedulingHowItWorks() {
  return (
    <ProcessBand
      headingId="scheduling-how-heading"
      badge="From first hello to the next appointment"
      heading={
        <>
          How Our Appointment Scheduling
          <br />
          Answering Service Works
        </>
      }
      intro="We answer your calls, collect the right details, and follow your booking rules to help callers take the next step."
      steps={STEPS}
      ctaLabel="Plan My Scheduling Setup"
      // Capabilities depend on the caller's own tools, so the claim is scoped.
      footnote="Calendar access and booking capabilities are confirmed during setup."
    />
  )
}
