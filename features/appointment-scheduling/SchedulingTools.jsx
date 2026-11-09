import Link from 'next/link'

// Section 4. Scheduling-specific, so it is its own component rather than a
// change to the shared homepage integrations section.
const TOOLS = [
  {
    icon: 'icon-calendar',
    title: 'Google Calendar Answering Service Sync',
    body: 'We connect our team to your Google Calendar so we see when you are free. We add the event, include notes, and invite the right people, and we remove or update slots if plans change. This helps stop double bookings and keeps your day organized.',
  },
  {
    icon: 'icon-calendar-check',
    title: 'Calendly Answering Service Integration',
    body: 'We link with Calendly to manage bookings the way you set them up. Callers can ask us to schedule through your Calendly rules. We pick options that match your availability and your meeting lengths, then confirm the booking and send the invite.',
  },
  {
    icon: 'icon-calendar-clock',
    title: 'Acuity Scheduling Answering Service',
    body: 'We follow your appointment types, buffers, and staff assignments. We add client details and send confirmations. If someone cancels or reschedules, we update Acuity right away, so your bookings stay tidy and your team stays ready.',
  },
  {
    icon: 'icon-calendar-plus',
    title: 'Setmore Answering Service Integration',
    body: 'We follow your service list and preferred staff members. We book the right slot and enter contact info, then send reminders to clients so they remember. This means fewer no-shows and smoother days for your business.',
  },
  {
    icon: 'icon-sliders',
    title: 'Custom Calendar and CRM Integrations',
    body: 'We build connections for the tools you use, even if they are unique or in-house. We match fields like name, time, service, and notes so data flows into your CRM, and we can push updates, tags, and reminders automatically.',
  },
]

export default function SchedulingTools() {
  return (
    <section className="w-full bg-[#fafaf8] py-14 md:py-16" aria-labelledby="scheduling-tools-heading">
      <div className="site-container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="icon-mask icon-share [--icon-size:1rem] inline-flex items-center gap-2 bg-[#8CA365]/10 text-[#5f7a3a] rounded-full text-sm font-semibold px-4 py-1.5">
            Work with your existing tools
          </p>
          <h2
            id="scheduling-tools-heading"
            className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.14] tracking-tight text-[#1d4b37]"
          >
            We Work With the Scheduling{' '}
            <br />
            Tools You Already Use
          </h2>
          <p className="mt-3 text-lg leading-relaxed text-gray-600">
            You don&rsquo;t need to change your system. We make everything fit so your day runs smoothly.
          </p>
        </div>

        {/* Six columns so the first three sit three-up and the last two split
            the final row in half rather than leaving an empty third. */}
        <ul className="mt-10 grid list-none grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-6">
          {TOOLS.map((tool, index) => (
            <li
              key={tool.title}
              className={`flex ${index >= TOOLS.length - 2 ? 'lg:col-span-3' : 'lg:col-span-2'}`}
            >
              <div className="group flex w-full flex-col rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#8CA365] hover:shadow-xl">
                <span
                  className={`icon-mask ${tool.icon} [--icon-size:1.5rem] mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#8CA365]/10 text-[#4f6630] transition-transform duration-300 group-hover:scale-110`}
                  aria-hidden="true"
                ></span>
                <h3 className="text-xl font-bold leading-snug text-[#1a2e35]">{tool.title}</h3>
                <p className="mt-3 flex-grow text-base leading-relaxed text-gray-600">{tool.body}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-col items-start gap-5 rounded-2xl bg-white px-6 py-5 shadow-sm sm:flex-row sm:items-center sm:justify-between">
          <p className="text-lg font-bold text-[#1a2e35]">
            Looking for something else?{' '}
            <span className="font-normal text-gray-600">We connect with over 100 apps via Zapier.</span>
          </p>
          <Link
            prefetch={false}
            href="/contact-us"
            className="icon-mask icon-arrow-right [--icon-size:1rem] inline-flex flex-shrink-0 flex-row-reverse items-center gap-3 rounded-lg bg-[#8CA365] px-7 py-3 text-base font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#9cb374]"
          >
            View All Integrations
          </Link>
        </div>
      </div>
    </section>
  )
}
