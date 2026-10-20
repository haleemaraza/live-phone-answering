import Link from 'next/link'

const AFTER_HOURS = [
  { icon: 'icon-sun', label: 'Evenings' },
  { icon: 'icon-calendar', label: 'Weekends' },
  { icon: 'icon-clock', label: 'Agreed hours' },
]

// Shared class strings, so the two light cards and the dark one stay in step.
const LIGHT = {
  card: 'bg-white border border-gray-200/70 shadow-md',
  eyebrow: 'text-gray-400',
  panel: 'bg-[#eef6e8]',
  title: 'text-[#34414A]',
  body: 'text-gray-600',
  rule: 'border-gray-100',
  idealLabel: 'text-[#34414A]',
  idealValue: 'text-gray-500',
}

const DARK = {
  card: 'bg-white border-2 border-[#8CA365] shadow-2xl',
  eyebrow: 'text-[#6b8a3e]',
  panel: 'bg-[#eef6e8]',
  title: 'text-[#34414A]',
  body: 'text-gray-600',
  rule: 'border-gray-100',
  idealLabel: 'text-[#34414A]',
  idealValue: 'text-gray-500',
}

function Card({ theme, eyebrow, title, body, idealFor, children }) {
  return (
    <li
      className={`flex flex-col rounded-3xl p-7 lg:p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#8CA365] hover:shadow-2xl ${theme.card}`}
    >
      <p className={`text-[10px] font-bold uppercase tracking-[0.18em] mb-5 ${theme.eyebrow}`}>{eyebrow}</p>

      <div className={`rounded-2xl px-5 py-6 mb-7 ${theme.panel}`} aria-hidden="true">
        {children}
      </div>

      <h3 className={`text-2xl font-extrabold mb-3 ${theme.title}`}>{title}</h3>
      <p className={`text-sm leading-relaxed flex-grow ${theme.body}`}>{body}</p>

      <p className={`text-xs font-bold mt-6 pt-5 border-t ${theme.rule} ${theme.idealLabel}`}>Ideal for</p>
      <p className={`text-xs mt-1 ${theme.idealValue}`}>{idealFor}</p>
    </li>
  )
}

export default function CoverageOptions() {
  return (
    <section className="w-full  py-20 md:py-24 px-4" aria-labelledby="coverage-heading">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-14">
          <p className="icon-mask icon-clock inline-flex items-center gap-2 bg-white text-[#4a7a3e] rounded-full text-sm font-semibold px-5 py-2 mb-6 shadow-sm border border-white/60">
            Flexible call coverage
          </p>
          <h2
            id="coverage-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#34414A] leading-tight tracking-tight mb-5"
          >
            Choose When Your
            <br className="hidden sm:block" /> Virtual Receptionist Answers
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Support for your whole day, your busiest moments, or the calls that come after closing.
          </p>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 list-none items-stretch">
          <Card
            theme={LIGHT}
            eyebrow="Your remote front desk"
            title="All Incoming Calls"
            body="Let receptionists handle your incoming calls during your agreed coverage hours."
            idealFor="Day-to-day reception support"
          >
            <div className="flex items-center justify-center gap-3">
              <span className="flex flex-col gap-1.5">
                {['JS', 'MK', 'DT'].map((initials) => (
                  <span
                    key={initials}
                    className="flex h-7 w-7 items-center justify-center rounded-full bg-white border border-gray-200 text-[9px] font-bold text-[#34414A]"
                  >
                    {initials}
                  </span>
                ))}
              </span>
              <span className="icon-mask icon-arrow-right [--icon-size:1rem] text-gray-300"></span>
              <span className="icon-mask icon-phone [--icon-size:1.25rem] flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#0f2925] text-white"></span>
              <span className="icon-mask icon-arrow-right [--icon-size:1rem] text-gray-300"></span>
              <span className="icon-mask icon-users [--icon-size:1.125rem] flex flex-col items-center gap-1 rounded-xl bg-white border border-gray-200 px-3 py-2.5 text-[9px] font-semibold text-[#34414A] before:text-[#8CA365]">
                Reception team
              </span>
            </div>
          </Card>

          <Card
            theme={DARK}
            eyebrow="Backup when you need it"
            title="Overflow Calls"
            body="Keep your team as the first point of contact, with backup when calls go unanswered."
            idealFor="Busy periods and staff breaks"
          >
            <div className="flex items-center justify-center gap-3">
              <span className="icon-mask icon-phone [--icon-size:1.5rem] flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-white text-[#0f2925]"></span>
              <span className="flex flex-col gap-2">
                <span className="rounded-full bg-white border border-gray-200 px-3 py-1.5 text-[10px] font-semibold text-[#34414A]">
                  Your team is busy
                </span>
                <span className="icon-mask icon-headset [--icon-size:0.875rem] flex items-center gap-1.5 rounded-full bg-[#8CA365] px-3 py-1.5 text-[10px] font-semibold text-white">
                  Receptionist picks up
                </span>
              </span>
            </div>
          </Card>

          <Card
            theme={LIGHT}
            eyebrow="Beyond business hours"
            title="After-Hours Calls"
            body="Arrange reception support outside your normal opening hours, based on your coverage plan."
            idealFor="Inquiries after your team signs off"
          >
            <div className="flex items-center justify-center gap-4">
              <span className="icon-mask icon-moon [--icon-size:1.75rem] flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-[#0f2925] text-white"></span>
              <span className="flex flex-col gap-1.5">
                {AFTER_HOURS.map((item) => (
                  <span
                    key={item.label}
                    className={`icon-mask ${item.icon} [--icon-size:0.875rem] flex items-center gap-2 rounded-lg bg-white border border-gray-200 px-3 py-1.5 text-[10px] font-semibold text-[#34414A] before:text-[#8CA365]`}
                  >
                    {item.label}
                  </span>
                ))}
              </span>
            </div>
          </Card>
        </ul>

        <div className="mt-6 flex flex-col bg-[#f6faf3] sm:flex-row sm:items-center gap-5 rounded-2xl bg-white border border-gray-200/70 px-6 py-6 sm:px-8">
          <span
            className="icon-mask icon-share [--icon-size:1.375rem] flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#eef6e8] text-[#295657]"
            aria-hidden="true"
          ></span>
          <span className="flex-grow">
            <span className="block text-sm font-bold text-[#34414A]">Your number. Your call-routing preferences.</span>
            <span className="block text-sm text-gray-500 mt-1">
              We&rsquo;ll help you plan when calls reach your team and when they reach a receptionist.
            </span>
          </span>
          <Link
            prefetch={false}
            href="/contact-us"
            className="inline-flex items-center gap-2 flex-shrink-0 text-sm font-semibold text-[#34414A] hover:text-[#8CA365] transition-colors"
          >
            Discuss coverage &rarr;
          </Link>
        </div>
      </div>
    </section>
  )
}
