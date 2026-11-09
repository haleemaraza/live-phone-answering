import Link from 'next/link'

const REASONS = [
  {
    icon: 'icon-sliders',
    title: 'Real People Answer Every Call',
    body: 'Instead of a robotic machine, a friendly person answers every single call. This real human connection builds trust right away and keeps callers happy, because they never get stuck waiting for a late callback or leaving a voicemail.',
  },
  {
    icon: 'icon-headset-call',
    title: 'Available 24/7, Including Weekends and Holidays',
    body: 'Our team answers the phone all day and all night. We capture late-night callers so you never lose a booking just because your office is closed.',
  },
  {
    icon: 'icon-calendar-check',
    title: 'Fast, Accurate Appointment Booking',
    body: 'Our agents book, change, or cancel appointments quickly and correctly. Your customers get help instantly, and your main team can focus entirely on their daily work without distractions.',
  },
  {
    icon: 'icon-intake-list',
    title: 'Customized Call Scripts That Match Your Brand',
    body: 'We use custom talking plans made just for your company. We learn your specific words and values so we sound like your real office staff, keeping things simple and friendly so callers feel comfortable.',
  },
  {
    icon: 'icon-layers',
    title: 'Secure Calendar Management and Scheduling Processes',
    body: 'Our system connects to your online calendar and updates it in real time. This tracking stops people from booking the same slot twice and keeps your business data private, safe and neat.',
  },
  {
    icon: 'icon-refresh',
    title: 'Reduce Administrative Work for Your Team',
    body: 'We take over bookings, confirmations, and simple changes so your team can focus on higher-value work. Fewer emails and scheduling headaches frees your staff to serve clients better.',
  },
]

export default function SchedulingWhyChooseUs() {
  return (
    <section className="w-full bg-[#1b4332] py-14 md:py-16" aria-labelledby="scheduling-why-heading">
      <div className="site-container">
        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:gap-14">
          <div>
            <p className="icon-mask icon-shield-check [--icon-size:1rem] inline-flex items-center gap-2 bg-white/10 text-[#a8c47d] rounded-full text-sm font-semibold px-4 py-1.5">
              Why choose us
            </p>
            <h2
              id="scheduling-why-heading"
              className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.12] tracking-tight text-white"
            >
              Why Choose Our Appointment{' '}
              <br />
              Scheduling Answering Service?
            </h2>
          </div>
          <p className="text-lg leading-relaxed text-white/70 lg:pt-14">
            We handle your phone calls so you can focus on making your business better.
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
              <p className="mt-2 text-base leading-relaxed text-gray-600">{reason.body}</p>
            </li>
          ))}
        </ul>

        <div className="mt-9 flex flex-col items-start gap-5 border-t border-white/15 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p>
            <span className="block text-[1.25rem] font-extrabold text-white">
              Let&rsquo;s build a better booking experience.
            </span>
            <span className="mt-1 block text-base text-white/70">
              Tell us how your team schedules appointments.
            </span>
          </p>

          <Link
            prefetch={false}
            href="/contact-us"
            className="icon-mask icon-arrow-right [--icon-size:0.95rem] inline-flex flex-shrink-0 flex-row-reverse items-center gap-3 rounded-lg bg-[#8CA365] px-7 py-3.5 text-lg font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#9cb374]"
          >
            Discuss My Scheduling Needs
          </Link>
        </div>
      </div>
    </section>
  )
}
