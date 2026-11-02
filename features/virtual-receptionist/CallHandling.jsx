import Link from 'next/link'

// Each card links to the page that covers that capability in full, so the
// section works as a way into the rest of the site rather than a dead end.
const CAPABILITIES = [
  {
    icon: 'icon-headset',
    title: 'Personalized Call Answering',
    body: 'Greet callers warmly using your business name and with a custom script. This makes every caller feel welcomed and this builds a positive first impression of your business.',
    note: 'A consistent first impression',
    href: '/services',
  },
  {
    icon: 'icon-phone-forward',
    title: 'Call Screening & Transfers',
    body: "Calls screened and directed to the right team member based on your instructions. This saves your team time and ensures callers reach the right person without being passed around.",
    note: 'The right calls to the right people',
    href: '/call-routing',
  },
  {
    icon: 'icon-calendar',
    title: 'Appointment Scheduling',
    body: 'Appointments booked according to your availability and scheduling preferences. We make booking easy for your customers while helping you keep your schedule organized.',
    note: 'Booking support that fits your workflow',
    href: '/appointment-scheduling',
  },
  {
    icon: 'icon-user-plus',
    title: 'Lead Capture & Client Intake',
    body: 'Caller details and important information collected to help your team follow up. This way, you can keep track of potential customers and make sure valuable leads do not slip through the cracks.',
    note: 'Useful details from the first call',
    href: '/lead-capture',
  },
  {
    icon: 'icon-report',
    title: 'Messages & Call Summaries',
    body: 'Clear messages capture caller details, requests, and required next steps. With these details, you will always know who called, what they needed, and whether any action is required.',
    note: 'Clear information for follow-up',
    href: '/how-it-works',
  },
  {
    icon: 'icon-question',
    title: 'Answers to Common Questions',
    body: 'Callers get accurate answers about your services, business hours, and policies. This gives customers the information they need without interrupting your workday.',
    note: 'Helpful answers in your business voice',
    href: '/after-hours-answering-service',
  },
]

export default function CallHandling() {
  return (
    <section className="w-full bg-[#f2f9ee] py-20 md:py-24" aria-labelledby="call-handling-heading">
      <div className="site-container">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-14">
          <p className="icon-mask icon-phone inline-flex items-center gap-2 bg-white text-[#4a7a3e] rounded-full text-sm font-semibold px-5 py-2 mb-6 shadow-sm border border-white/60">
            All Your Calls, Handled By Professionals

          </p>
          <h2
            id="call-handling-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#34414A] leading-tight tracking-tight mb-5"
          >
            What can Our Virtual Receptionist 
            <br className="hidden sm:block" /> do for Your Business
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
From picking the call to taking the message, booking an appointment, and transferring the call, we do it all.          </p>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 list-none">
          {CAPABILITIES.map((item) => (
            <li key={item.title} className="flex">
              {/* The whole card is the link. No aria-label here: a shorter name
                  than the visible text fails the label-in-name rule, so the
                  card's own text is the accessible name. */}
              <Link
                prefetch={false}
                href={item.href}
                className="group flex w-full flex-col bg-white rounded-2xl border border-gray-100 shadow-sm p-7 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-[#8CA365]/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6b8a3e] focus-visible:ring-offset-2"
              >
                <span
                  className={`icon-mask ${item.icon} [--icon-size:1.5rem] w-12 h-12 rounded-xl bg-[#8CA365]/10 text-[#8CA365] flex items-center justify-center mb-5`}
                  aria-hidden="true"
                ></span>
                <h3 className="text-lg font-bold text-[#34414A] leading-snug mb-3">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed flex-grow">{item.body}</p>
                <p className="icon-mask icon-arrow-right [--icon-size:0.85rem] flex flex-row-reverse items-center justify-end gap-2 text-sm font-semibold text-[#6b8a3e] mt-5 pt-4 border-t border-gray-100 before:transition-transform before:duration-300 group-hover:before:translate-x-1">
                  {item.note}
                </p>
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-12">
          <p className="text-gray-600">Tell us what you need.</p>
          <Link
            prefetch={false}
            href="/contact-us"
            className="inline-flex justify-center items-center bg-[#34414A] hover:bg-[#2a353c] text-white font-bold py-3.5 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 text-center"
          >
            Discuss Your Call Flow &rarr;
          </Link>
        </div>
      </div>
    </section>
  )
}
