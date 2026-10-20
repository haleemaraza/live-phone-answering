import Link from 'next/link'

// Deep green with a soft bloom out of the top-left, matching the after-hours
// workflow band. Inline so no arbitrary-value class can fail to compile.
const SECTION_BACKGROUND = {
  backgroundImage: [
    'radial-gradient(60% 58% at 8% 0%, rgba(138,186,126,0.34) 0%, rgba(18,54,39,0) 58%)',
    'linear-gradient(155deg, #1a4836 0%, #163f2e 45%, #11321f 100%)',
  ].join(','),
}

const STEPS = [
  {
    number: '01',
    icon: 'icon-headset-call',
    title: 'We Answer Your Call',
    body: 'A live receptionist greets the caller in your business name and finds out which service or appointment they need.',
    tag: 'Your approved greeting',
  },
  {
    number: '02',
    icon: 'icon-intake-list',
    title: 'We Collect the Details',
    body: 'We gather contact information, service needs, and the questions you require before an appointment can be arranged.',
    tag: 'Your intake questions',
  },
  {
    number: '03',
    icon: 'icon-calendar-clock',
    title: 'We Check Availability',
    body: 'Using supported tools, we check available times against your appointment lengths, staff schedules, and booking rules.',
    tag: 'Your scheduling rules',
    featured: true,
  },
  {
    number: '04',
    icon: 'icon-calendar-check',
    title: 'We Arrange the Next Step',
    body: 'Where direct booking is supported, we reserve the appointment. Otherwise, we send a complete request for your team to confirm.',
    tag: 'Booking or request',
  },
]

const CONTROLS = [
  { icon: 'icon-gear', label: 'Appointment types' },
  { icon: 'icon-users', label: 'Staff availability' },
  { icon: 'icon-clock', label: 'Time buffers' },
  { icon: 'icon-report', label: 'Booking policies' },
]

export default function SchedulingHowItWorks() {
  return (
    <section
      className="relative w-full overflow-hidden px-4 py-14 md:py-16 lg:px-[5%]"
      style={SECTION_BACKGROUND}
      aria-labelledby="scheduling-how-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="icon-mask icon-bolt [--icon-size:1rem] inline-flex items-center gap-2 bg-white/10 text-[#a8c47d] rounded-full text-sm font-semibold px-4 py-1.5">
            From first hello to the next appointment
          </p>
          <h2
            id="scheduling-how-heading"
            className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.14] tracking-tight text-white"
          >
            How Our Appointment Scheduling
            <br />
            Answering Service Works
          </h2>
          <p className="mt-3 text-[0.95rem] leading-relaxed text-white/65">
            We answer your calls, collect the right details, and follow your booking rules to help callers take the
            next step.
          </p>
        </div>

        <ol className="mt-12 grid list-none grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-7 lg:grid-cols-4 lg:gap-x-6">
          {STEPS.map((step, index) => (
            <li key={step.number} className="relative">
              <div
                className={`relative flex h-full flex-col items-center rounded-xl px-5 pb-6 pt-12 text-center ${
                  step.featured ? 'border-4 border-[#8CA365] bg-[#F8F9F4]' : 'bg-[#F8F9F4]'
                }`}
              >
                <span
                  className="absolute -top-5 left-1/2 flex h-11 w-11 -translate-x-1/2 items-center justify-center rounded-full bg-[#8CA365] text-[0.85rem] font-bold text-white border-2 border-white "
                  aria-hidden="true"
                >
                  {step.number}
                </span>

                <span
                  className={`icon-mask ${step.icon} [--icon-size:3.4rem] text-[#4f6630]`}
                  aria-hidden="true"
                ></span>

                <h3 className="mt-4 text-[1.1rem] font-bold text-[#1b4332]">{step.title}</h3>
                <p className="mt-2.5 flex-grow text-[0.86rem] leading-relaxed text-gray-600">{step.body}</p>

                <p className="mt-5 w-full rounded-full bg-[#E5EBDA] px-3 py-2.5 text-[0.8rem] text-gray-900">
                  {step.tag}
                </p>
              </div>

              {index < STEPS.length - 1 && (
                <span
                  className="icon-mask icon-arrow-right [--icon-size:1.25rem] absolute left-full top-[32%] ml-3 hidden -translate-x-1/2 -translate-y-1/2 text-[#8CA365] lg:block"
                  aria-hidden="true"
                ></span>
              )}
            </li>
          ))}
        </ol>

        <div className="mt-9 rounded-2xl bg-[#E6ECDE] px-8 py-6">
          <div className="grid grid-cols-1 items-center gap-5 lg:grid-cols-[minmax(0,15rem)_minmax(0,1fr)] lg:gap-8">
            <p className="text-center text-[1.5rem] font-extrabold text-[#6b8a3e] lg:border-r lg:border-gray-400/40 lg:pr- lg:text-left">
              You Stay in Control
            </p>

            <div>
              <ul className="flex list-none flex-wrap items-center justify-center gap-3">
                {CONTROLS.map((item) => (
                  <li
                    key={item.label}
                    className="flex items-center gap-2.5 rounded-lg bg-[#EFF4E9] border border-gray-300 px-5 py-3 text-[0.86rem] font-medium text-gray-700"
                  >
                    <span
                      className={`icon-mask ${item.icon} [--icon-size:1.15rem] flex-shrink-0 text-[#4f6630]`}
                      aria-hidden="true"
                    ></span>
                    {item.label}
                  </li>
                ))}
              </ul>
              <p className="mt-3.5 text-center text-[0.84rem] text-gray-600">
                Set your preferences before coverage begins.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link
            prefetch={false}
            href="/contact-us"
            className="icon-mask icon-arrow-right [--icon-size:0.95rem] inline-flex flex-row-reverse items-center gap-3 rounded-lg bg-[#8CA365] px-8 py-3.5 text-[0.95rem] font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#9cb374]"
          >
            Plan My Scheduling Setup
          </Link>
          {/* Capabilities depend on the caller's own tools, so the claim is
              scoped rather than absolute. */}
          <p className="mt-3 text-[0.78rem] text-white/45">
            Calendar access and booking capabilities are confirmed during setup.
          </p>
        </div>
      </div>
    </section>
  )
}
