import Link from 'next/link'

const BENEFITS = [
  {
    icon: 'icon-user-clock',
    title: 'Minimal Schedule Disruptions',
    body: 'Constant phone rings disrupt your flow and take you away from meaningful work. By letting our dedicated agents manage everyday calls and appointment requests, you preserve your energy, protect your focus, and give in-person clients the seamless care they deserve.',
  },
  {
    icon: 'icon-chats',
    title: 'Smarter Call Handling',
    body: 'Playing phone tag is frustrating for both you and your clients. We gather essential details and match callers with real-time openings right away, giving them instant clarity while keeping your schedule organized without the hassle.',
  },
  {
    icon: 'icon-intake-list',
    title: 'Upfront Client Intake',
    body: 'Stepping into a meeting unprepared creates unnecessary stress. We gather the necessary background information and customer preferences ahead of time, so you feel prepared and confident before every appointment begins.',
  },
  {
    icon: 'icon-calendar-heart',
    title: 'Seamless Booking Support',
    body: 'Your callers want to feel heard and valued, not lost in an automated menu. We connect them with a friendly, real person who listens patiently, handles reschedules smoothly, and leaves a warm impression that reflects the care of your business.',
  },
]

export default function SchedulingBenefits() {
  return (
    <section
      className="w-full bg-[#faf9f4] py-14 md:py-16"
      aria-labelledby="scheduling-benefits-heading"
    >
      <div className="site-container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="icon-mask icon-smile [--icon-size:1rem] inline-flex items-center gap-2 bg-[#8CA365]/10 text-[#5f7a3a] rounded-full text-sm font-semibold px-4 py-1.5">
            Less distractions, more focus on your clients
          </p>
          <h2
            id="scheduling-benefits-heading"
            className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.14] tracking-tight text-[#1b4332]"
          >
            Cut Down Phone Distractions{' '}
            <br />
            to Focus on Client Care
          </h2>
          <p className="mt-3 text-lg leading-relaxed text-gray-600">
            Provide seamless booking support over the phone while your team gives full attention to active client
            meetings, projects, and site visits.
          </p>
        </div>

        {/* 0.75fr is what makes the uncropped photo's height land on the
            benefits list beside it, so the two columns end level. */}
        <div className="mt-9 grid grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,1.14fr)_minmax(0,1fr)] lg:gap-11">
          {/* The caption panel is part of the supplied artwork, so it is not
              drawn again in HTML and the photo is not cropped. */}
          <figure className="overflow-hidden rounded-2xl">
            <img
              src="/images/scheduling-benefits.webp"
              alt="A receptionist in a green blazer smiling as she takes notes for a visitor at a front desk, above the line: Be present for the people you serve. Let your receptionists handle the first enquiry."
              width={1100}
              height={892}
              loading="lazy"
              decoding="async"
              className="block h-auto w-full"
            />
          </figure>

          <ul className="list-none divide-y divide-gray-300/50">
            {BENEFITS.map((benefit, index) => (
              <li key={benefit.title} className={`flex items-start gap-4 py-4 ${index === 0 ? 'lg:pt-0' : ''}`}>
                <span
                  className={`icon-mask ${benefit.icon} [--icon-size:2.1rem] mt-0.5 flex-shrink-0 text-[#6b8a3e]`}
                  aria-hidden="true"
                ></span>
                <span className="min-w-0">
                  <span className="block text-lg font-bold leading-snug text-[#1b4332]">{benefit.title}</span>
                  <span className="mt-1 block text-base leading-relaxed text-gray-600">{benefit.body}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-9 flex flex-col items-start gap-5 border-t border-gray-300/50 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[1.15rem] font-extrabold text-[#1a2e35]">Clear your schedule and focus on what you do best.</p>
          <Link
            prefetch={false}
            href="/contact-us"
            className="icon-mask icon-arrow-right [--icon-size:0.95rem] inline-flex flex-shrink-0 flex-row-reverse items-center gap-3 rounded-lg bg-[#8CA365] px-6 py-3 text-lg font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#9cb374]"
          >
            Get My Scheduling Quote
          </Link>
        </div>
      </div>
    </section>
  )
}
