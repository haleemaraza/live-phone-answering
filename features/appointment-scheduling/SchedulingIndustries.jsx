import Link from 'next/link'

// Section 7: the same scheduling service, described per vertical.
const INDUSTRIES = [
  {
    icon: 'icon-medical-cross',
    title: 'Medical Appointment Scheduling Answering Service',
    body: 'We answer patient calls politely and help them book visits. We check your calendar and find a time that fits, and we can remind patients by text or call so they do not forget. If something urgent comes up, we let your staff know right away.',
  },
  {
    icon: 'icon-scale',
    title: 'Legal Appointment Scheduling Answering Service',
    body: 'We take client calls and schedule meetings with your lawyers. We note case names and preferred times, then confirm the appointment. We do not give legal advice; we just make bookings neat and correct, which frees your firm to prepare for cases.',
  },
  {
    icon: 'icon-smile',
    title: 'Salon Appointment Booking Answering Service',
    body: 'We greet callers warmly and find the best slot for haircuts or treatments. We ask about services, preferred stylists, and time, then book it on your calendar and send friendly reminders so clients arrive on time.',
  },
  {
    icon: 'icon-home',
    title: 'Contractor Appointment Scheduling Service',
    body: 'We set up site visits and estimate meetings. We ask about the job, the location, and when workers are available, then match the schedule and confirm with the client. This helps projects start on time and keeps crews busy.',
  },
  {
    icon: 'icon-building',
    title: 'Real Estate Appointment Scheduling Answering Service',
    body: 'We book showings and open-house visits for homes you list. We ask about the property, buyer preferences, and a good time for the agent, then lock it into the schedule and send reminders. That means fewer missed viewings.',
  },
  {
    icon: 'icon-dollar',
    title: 'Financial Advisor Appointment Scheduling Service',
    body: 'We organise meetings between advisors and clients clearly. We ask what kind of advice they need and how long the meeting should be, then schedule and send reminders so clients come prepared and advisors use their time wisely.',
  },
]

export default function SchedulingIndustries() {
  return (
    <section className="w-full bg-white py-14 md:py-16" aria-labelledby="scheduling-industries-heading">
      <div className="site-container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="icon-mask icon-shield-check [--icon-size:1rem] inline-flex items-center gap-2 bg-[#8CA365]/10 text-[#5f7a3a] rounded-full text-sm font-semibold px-4 py-1.5">
            Custom support for every business
          </p>
          <h2
            id="scheduling-industries-heading"
            className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.14] tracking-tight text-[#1d4b37]"
          >
            HIPAA Compliant Appointment Scheduling
            <br />
            Services Designed for Your Industry
          </h2>
          <p className="mt-3 text-lg leading-relaxed text-gray-600">
            Our team answers calls, picks the best times, and sends reminders so your customers show up.
          </p>
        </div>

        <ul className="mt-10 grid list-none grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((industry) => (
            <li key={industry.title} className="flex">
              <div className="group flex w-full flex-col rounded-2xl border border-gray-200 bg-[#fafaf8] p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#8CA365] hover:bg-white hover:shadow-xl">
                <span
                  className={`icon-mask ${industry.icon} [--icon-size:1.5rem] mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#8CA365]/10 text-[#4f6630] transition-transform duration-300 group-hover:scale-110`}
                  aria-hidden="true"
                ></span>
                <h3 className="text-xl font-bold leading-snug text-[#1a2e35]">{industry.title}</h3>
                <p className="mt-3 flex-grow text-base leading-relaxed text-gray-600">{industry.body}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-col items-start gap-5 rounded-2xl bg-[#f8f7f1] px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
          <p>
            <span className="block text-lg font-bold text-[#1a2e35]">Better booking experience for your business.</span>
            <span className="mt-1 block text-base text-gray-600">Tell us your schedule and we handle the rest.</span>
          </p>
          <Link
            prefetch={false}
            href="/contact-us"
            className="icon-mask icon-arrow-right [--icon-size:1rem] inline-flex flex-shrink-0 flex-row-reverse items-center gap-3 rounded-lg bg-[#8CA365] px-7 py-3 text-base font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#9cb374]"
          >
            Discuss My Appointment Scheduling Needs
          </Link>
        </div>
      </div>
    </section>
  )
}
