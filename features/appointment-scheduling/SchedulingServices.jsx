import Link from 'next/link'

const SERVICES = [
  {
    img: 'new-appointment-booking',
    title: 'Live Appointment Booking Service',
    body: 'Our friendly agents answer live calls and book appointments for your customers right away. This stops people from getting lost in voicemail, turning everyday callers into happy customers who love how simple it is to get help.',
  },
  {
    img: 'appointment-rescheduling',
    title: 'Appointment Rescheduling Answering Service',
    body: 'When plans change, our real agents help your clients pick a new time smoothly. We handle everything on the phone instantly so your customers stay happy, and your internal staff never has to waste precious time doing it manually.',
  },
  {
    img: 'cancellation-handling',
    title: 'Appointment Cancellation Answering Service',
    body: 'If someone needs to cancel a visit, our team handles it gently and professionally. We open up the free spot immediately so another waiting customer can book it, keeping your business day fully packed and active.',
  },
  {
    icon: 'icon-bell',
    title: 'Appointment Reminder Answering Service',
    body: 'Our live team calls your clients to remind them about their upcoming visits. This personal touch builds a strong emotional bond, ensures people actually show up on time, and keeps your daily schedule running completely on track.',
  },
  {
    icon: 'icon-refresh',
    title: 'Automated Appointment Reminder Service',
    body: 'Our automated system sends out quick reminders to your clients without you lifting a finger. This regular tracking saves you money and gives your busy team more time to focus on their main projects.',
  },
  {
    icon: 'icon-chats',
    title: 'Two-Way Appointment Confirmation SMS',
    body: 'We send text reminders that let your customers reply directly to confirm or change their time slot. This quick cross-channel messaging makes your booking process simple for everyone involved.',
  },
  {
    icon: 'icon-moon',
    title: 'After-Hours Appointment Scheduling Service',
    body: 'Our team answers your phone lines through the night. We capture those late-night buyers so you can stay competitive and never miss a chance to grow your revenue.',
  },
  {
    icon: 'icon-calendar-refresh',
    title: 'Real-Time Calendar Updates and Booking Management',
    body: 'The moment an agent books or changes a slot, your online calendar updates. This live tracking stops double-bookings, removes administrative lag, and keeps your business data neat and ready.',
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
            Custom appointment scheduling service
          </p>
          <h2
            id="scheduling-services-heading"
            className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.14] tracking-tight text-[#1d4b37]"
          >
            What Can Our Appointment 
            <br />
            Scheduling Answering Service Do for You?
          </h2>
          <p className="mt-3 text-lg leading-relaxed text-gray-600">
            We take care of your schedule so you never have to worry about missing an appointment.
          </p>
        </div>

        <ul className="mt-8 grid list-none grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <li key={service.title} className="h-full rounded-xl border border-gray-200/80 bg-white p-6">
              {/* Decorative: the card's own heading already names the service. */}
              {service.img ? (
                <img
                  src={`/icons/card/${service.img}.webp`}
                  alt=""
                  width={56}
                  height={56}
                  loading="lazy"
                  decoding="async"
                  className="h-14 w-14 rounded-lg bg-[#eaf1dd] p-2 object-contain"
                />
              ) : (
                <span
                  className={`icon-mask ${service.icon} [--icon-size:1.6rem] flex h-14 w-14 items-center justify-center rounded-lg bg-[#eaf1dd] text-[#1d4b37]`}
                  aria-hidden="true"
                ></span>
              )}
              <h3 className="mt-4 text-[1.05rem] font-bold leading-snug text-[#1d4b37]">{service.title}</h3>
              <p className="mt-2 text-base leading-relaxed text-gray-600">{service.body}</p>
            </li>
          ))}
        </ul>

        {/* Keeps the list honest: what a given plan actually covers is agreed
            at setup, so the cards describe tasks rather than promise them all. */}
        <p className="mt-6 text-center text-sm text-gray-600">
          Tasks, calendar integration, and appointment scheduling depend on your plan.
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
