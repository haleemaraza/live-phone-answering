import Link from 'next/link'

const REASONS = [
  {
    icon: 'icon-sliders',
    title: 'Your Rules Come First',
    body: 'Define appointment types, booking windows, staff availability, and intake questions. Receptionists follow the instructions you approve.',
  },
  {
    icon: 'icon-headset-call',
    title: 'A Real Person for Every Conversation',
    body: 'Give callers a welcoming voice to discuss appointments, ask routine questions, and understand their next step.',
  },
  {
    icon: 'icon-calendar-check',
    title: 'Clear Booking Boundaries',
    body: "Set when receptionists can book directly and when a request needs your team's confirmation. Keep exceptions in your hands.",
  },
  {
    icon: 'icon-intake-list',
    title: 'Useful Details, Ready for Your Team',
    body: 'Capture contact information, service needs, and approved intake details so your team can prepare for the appointment.',
  },
  {
    icon: 'icon-layers',
    title: 'Tools Reviewed Before Setup',
    body: 'We check your calendar and scheduling requirements to confirm which connections and booking actions are supported.',
  },
  {
    icon: 'icon-refresh',
    title: 'A Process You Can Refine',
    body: 'Review your call instructions as your services or schedules change. Keep the booking experience aligned with your business.',
  },
]

export default function SchedulingWhyChooseUs() {
  return (
    <section className="w-full bg-[#1b4332] px-4 py-14 md:py-16 lg:px-[5%]" aria-labelledby="scheduling-why-heading">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:gap-14">
          <div>
            <p className="icon-mask icon-shield-check [--icon-size:1rem] inline-flex items-center gap-2 bg-white/10 text-[#a8c47d] rounded-full text-sm font-semibold px-4 py-1.5">
              Why choose us
            </p>
            <h2
              id="scheduling-why-heading"
              className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.12] tracking-tight text-white"
            >
              Appointment Scheduling
              <br />
              Support Built Around
              <br />
              Your Business
            </h2>
          </div>
          <p className="text-[0.95rem] leading-relaxed text-white/70 lg:pt-14">
            Keep control of your calendar while giving callers a helpful, professional response. We shape the
            scheduling process around your instructions, your team, and the tools you use.
          </p>
        </div>

        <ul className="mt-9 grid list-none grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((reason) => (
            <li key={reason.title} className="h-full rounded-xl bg-[#f7f7f0] p-6">
              <span
                className={`icon-mask ${reason.icon} [--icon-size:1.9rem] block text-[#4f6630]`}
                aria-hidden="true"
              ></span>
              <h3 className="mt-4 text-[1.02rem] font-bold leading-snug text-[#1b4332]">{reason.title}</h3>
              <p className="mt-2 text-[0.84rem] leading-relaxed text-gray-600">{reason.body}</p>
            </li>
          ))}
        </ul>

        <div className="mt-9 flex flex-col items-start gap-5 border-t border-white/15 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p>
            <span className="block text-[1.25rem] font-extrabold text-white">
              Let&rsquo;s build a better booking experience.
            </span>
            <span className="mt-1 block text-[0.88rem] text-white/70">
              Tell us how your team schedules appointments.
            </span>
          </p>

          <Link
            prefetch={false}
            href="/contact-us"
            className="icon-mask icon-arrow-right [--icon-size:0.95rem] inline-flex flex-shrink-0 flex-row-reverse items-center gap-3 rounded-lg bg-[#8CA365] px-7 py-3.5 text-[0.92rem] font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#9cb374]"
          >
            Discuss My Scheduling Needs
          </Link>
        </div>
      </div>
    </section>
  )
}
