import Link from 'next/link'

// Section 10: the headline figure leads each card, with the full claim kept in
// the heading so it reads as one phrase to search engines and screen readers.
const METRICS = [
  {
    icon: 'icon-calendar-check',
    stat: '35%',
    label: 'Increase in Booked Appointments',
    body: 'Every caller speaks to a friendly voice right away instead of getting sent to voicemail, keeping high-paying jobs from going to your competitors. We book service calls directly onto your calendar while the customer is still on the line and eager to hire.',
  },
  {
    icon: 'icon-phone-ring',
    stat: 'Under 3',
    label: 'Rings Average Call Pickup Time',
    body: 'We pick up every call within seconds so prospective clients instantly know their repair is our top priority. Fast responses build immediate trust and stop frustrated homeowners from hanging up and calling the next contractor on their list.',
  },
  {
    icon: 'icon-clipboard-check',
    stat: '98%',
    label: 'Lead Accuracy on Custom Intake Forms',
    body: 'We follow your exact checklist so you get complete, accurate details on every job before heading out. Clean summaries land straight in your inbox, giving your team full context so you can step onto the job site completely prepared.',
  },
  {
    icon: 'icon-clock',
    stat: '24/7/365',
    label: 'Live Receptionist Coverage',
    body: 'Emergencies happen at all hours, and having a live person ready to answer means you capture every urgent repair job. We handle evenings, weekends, and holidays so your pipeline stays full without burning out your internal team.',
  },
  {
    icon: 'icon-filter-check',
    stat: '80%',
    label: 'Reduction in Unqualified Calls',
    body: 'We screen out price shoppers, spam, and callers outside your service area so you only spend time on serious prospects. You define the ideal job size and location, and we make sure only high-value opportunities reach your schedule.',
  },
  {
    icon: 'icon-share',
    stat: '100%',
    label: 'Seamless Workflow Integration',
    body: 'We link into the scheduling software, CRM, and calendar apps you already use every day. Call details and new bookings drop into your system automatically, keeping your dispatchers organized without adding extra steps.',
  },
]

export default function LeadCapturePerformance() {
  return (
    <section className="w-full bg-[#f8f8f1] py-14 md:py-16" aria-labelledby="lead-capture-performance-heading">
      <div className="site-container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="icon-mask icon-bolt [--icon-size:1rem] inline-flex items-center gap-2 bg-[#8CA365]/10 text-[#5f7a3a] rounded-full text-sm font-semibold px-4 py-1.5">
            Results you can measure
          </p>
          <h2
            id="lead-capture-performance-heading"
            className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.14] tracking-tight text-[#1b4332]"
          >
            Proven Performance
            <br />
            Across Every Call
          </h2>
          <p className="mt-3 text-lg leading-relaxed text-gray-600">
            Here is how our live intake team boosts your revenue, protects your time, and keeps your schedule full.
          </p>
        </div>

        <ul className="mt-10 grid list-none grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {METRICS.map((metric) => (
            <li key={metric.label} className="flex">
              <div className="group flex w-full flex-col rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#8CA365] hover:shadow-xl">
                <span
                  className={`icon-mask ${metric.icon} [--icon-size:1.5rem] mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#8CA365]/10 text-[#4f6630] transition-transform duration-300 group-hover:scale-110`}
                  aria-hidden="true"
                ></span>

                {/* Stat and label are one heading so the full claim reads as a
                    single phrase, with the figure sized up visually. */}
                <h3 className="leading-tight text-[#1a2e35]">
                  <span className="block text-4xl font-extrabold tracking-tight text-[#4f6630]">{metric.stat}</span>
                  <span className="mt-1.5 block text-lg font-bold">{metric.label}</span>
                </h3>

                <p className="mt-3 flex-grow text-base leading-relaxed text-gray-600">{metric.body}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
          <p className="text-lg font-bold text-[#1a2e35]">Ready to see these results in your business?</p>
          <Link
            prefetch={false}
            href="/contact-us"
            className="icon-mask icon-arrow-right [--icon-size:1rem] inline-flex flex-row-reverse items-center gap-3 rounded-lg bg-[#8CA365] px-7 py-3 text-base font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#9cb374]"
          >
            Get My Lead Capture Quote
          </Link>
        </div>
      </div>
    </section>
  )
}
