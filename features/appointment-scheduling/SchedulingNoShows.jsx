import Link from 'next/link'

// Section 9: confirmations and reminders, the part of the service that keeps
// booked appointments from quietly disappearing.
const METHODS = [
  {
    icon: 'icon-chats',
    title: 'Two-way appointment confirmation SMS',
    body: "Managing confirmations shouldn't feel like a full-time job or leave you guessing who will actually show up. With interactive text confirmations, your clients can reply to confirm or reschedule in seconds, and your calendar updates in real time.",
  },
  {
    icon: 'icon-bell',
    title: 'Custom Reminders and Notifications',
    body: "Every client journey is unique, and a generic reminder often isn't enough to get people through the door prepared. By sending tailored notifications at the moments you choose, you can include setup instructions, intake links, or directions so your clients arrive ready for their session.",
  },
  {
    icon: 'icon-mail',
    title: 'Text and Email Confirmations',
    body: "People absorb information differently, and meeting your clients on their preferred channel builds trust. By pairing text and email confirmations, you make sure your message lands where they are most likely to see it, with a clear reference point for the meeting time, location, and preparation notes.",
  },
]

export default function SchedulingNoShows() {
  return (
    <section className="w-full bg-[#f8f7f1] py-14 md:py-16" aria-labelledby="scheduling-noshows-heading">
      <div className="site-container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="icon-mask icon-check-circle [--icon-size:1rem] inline-flex items-center gap-2 bg-[#8CA365]/10 text-[#5f7a3a] rounded-full text-sm font-semibold px-4 py-1.5">
            Fewer missed calls and opportunities
          </p>
          <h2
            id="scheduling-noshows-heading"
            className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.14] tracking-tight text-[#1d4b37]"
          >
            Reduce No-Show Appointments
            <br />
             Cut no-shows by up to 80% 
          </h2>
          <p className="mt-3 text-lg leading-relaxed text-gray-600">
            With smart confirmations and instant calendar updates that keep your schedule full and predictable.
          </p>
        </div>

        <ul className="mt-10 grid list-none grid-cols-1 gap-6 md:grid-cols-3">
          {METHODS.map((method) => (
            <li key={method.title} className="flex">
              <div className="group flex w-full flex-col rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#8CA365] hover:shadow-xl">
                <span
                  className={`icon-mask ${method.icon} [--icon-size:1.5rem] mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#8CA365]/10 text-[#4f6630] transition-transform duration-300 group-hover:scale-110`}
                  aria-hidden="true"
                ></span>
                <h3 className="text-xl font-bold leading-snug text-[#1a2e35]">{method.title}</h3>
                <p className="mt-3 flex-grow text-base leading-relaxed text-gray-600">{method.body}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-col items-start gap-5 rounded-2xl bg-white px-6 py-5 shadow-sm sm:flex-row sm:items-center sm:justify-between">
          <p className="text-lg text-gray-600">
            Tell us how you want us to handle your appointments. We&rsquo;ll do the rest.
          </p>
          <Link
            prefetch={false}
            href="/contact-us"
            className="icon-mask icon-arrow-right [--icon-size:1rem] inline-flex flex-shrink-0 flex-row-reverse items-center gap-3 rounded-lg bg-[#8CA365] px-7 py-3 text-base font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#9cb374]"
          >
            Help Me Book More Appointments
          </Link>
        </div>
      </div>
    </section>
  )
}
