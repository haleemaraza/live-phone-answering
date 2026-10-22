import Link from 'next/link'

const SERVICES = [
  {
    icon: 'new-appointment-booking',
    title: 'New Appointment Booking',
    body: "Collect the caller's details, check approved availability, and reserve a suitable appointment through supported tools. Give customers a clear next step while your team stays focused.",
  },
  {
    icon: 'appointment-rescheduling',
    title: 'Appointment Rescheduling',
    body: 'Help callers move an existing appointment using your notice periods and availability rules. Update the booking through the agreed process and clarify the revised details.',
  },
  {
    icon: 'cancellation-handling',
    title: 'Cancellation Handling',
    body: 'Handle cancellation requests according to your policy. Record the change and update the appointment through the supported workflow so your team knows what has changed.',
  },
  {
    icon: 'new-client-intake',
    title: 'New Client Intake',
    body: 'Capture contact information, service needs, location, and other approved details before booking. Help your team prepare for the appointment with useful caller information.',
  },
  {
    icon: 'appointment-confirmations',
    title: 'Appointment Confirmations',
    body: 'Review the appointment date, time, location, and approved preparation details with the caller. Use the confirmation channels supported by your service and booking tools.',
  },
  {
    icon: 'multi-staff-location-scheduling',
    title: 'Multi-Staff & Location Scheduling',
    body: 'Where supported, match callers with the right staff member, service, or location. Follow the availability and booking rules agreed for each calendar.',
  },
]

export default function SchedulingServices() {
  return (
    <section
      className="w-full bg-[#faf9f3] py-14 md:py-16"
      aria-labelledby="scheduling-services-heading"
    >
      <div className="site-container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="icon-mask icon-calendar [--icon-size:1rem] inline-flex items-center gap-2 bg-[#8CA365]/10 text-[#5f7a3a] rounded-full text-sm font-semibold px-4 py-1.5">
            Appointment scheduling services
          </p>
          <h2
            id="scheduling-services-heading"
            className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.14] tracking-tight text-[#1d4b37]"
          >
            Appointment Booking and
            <br />
            Scheduling Services We Handle
          </h2>
          <p className="mt-3 text-lg leading-relaxed text-gray-600">
            Help callers book, change, and manage appointments with live receptionist support built around your
            scheduling rules.
          </p>
        </div>

        <ul className="mt-8 grid list-none grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <li key={service.title} className="h-full rounded-xl border border-gray-200/80 bg-white p-6">
              {/* Decorative: the card's own heading already names the service. */}
              <img
                src={`/icons/card/${service.icon}.webp`}
                alt=""
                width={56}
                height={56}
                loading="lazy"
                decoding="async"
                className="h-14 w-14 rounded-lg bg-[#eaf1dd] p-2 object-contain"
              />
              <h3 className="mt-4 text-[1.05rem] font-bold leading-snug text-[#1d4b37]">{service.title}</h3>
              <p className="mt-2 text-base leading-relaxed text-gray-600">{service.body}</p>
            </li>
          ))}
        </ul>

        {/* Keeps the list honest: what a given plan actually covers is agreed
            at setup, so the cards describe tasks rather than promise them all. */}
        <p className="mt-6 text-center text-sm text-gray-600">
          Your service plan defines the booking tasks, calendar access, and confirmation options available.
        </p>

        <div className="mt-4 text-center">
          <Link
            prefetch={false}
            href="/contact-us"
            className="icon-mask icon-arrow-right [--icon-size:0.9rem] inline-flex flex-row-reverse items-center gap-3 rounded-lg bg-[#8CA365] px-7 py-3 text-lg font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#9cb374]"
          >
            Build My Scheduling Plan
          </Link>
        </div>
      </div>
    </section>
  )
}
