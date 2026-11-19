import Link from 'next/link'

// Section 6: the brief on the left, the approved answer areas on the right.
const BRIEF = [
  {
    title: 'Approved by Your Hotel',
    body: 'Confirm the property facts and answers your callers should receive.',
  },
  {
    title: 'Updated as Things Change',
    body: 'Share changes to opening times, facilities, policies and contacts.',
  },
  {
    title: 'Referred When Needed',
    body: 'Pass unanswered questions and individual requests to your hotel team.',
  },
]

const TOPICS = [
  {
    icon: 'icon-calendar-clock',
    title: 'Check-In & Check-Out',
    body: 'Explain approved arrival times, departure times and related request procedures.',
  },
  {
    icon: 'icon-home',
    title: 'Parking & Directions',
    body: 'Share your approved parking arrangements, location details and arrival guidance.',
  },
  {
    icon: 'icon-sun',
    title: 'Breakfast & Dining',
    body: 'Explain approved breakfast hours and the dining arrangements guests can expect.',
  },
  {
    icon: 'icon-layers',
    title: 'Facilities & Services',
    body: 'Answer approved questions about Wi-Fi, pools and other guest facilities.',
  },
  {
    icon: 'icon-heart',
    title: 'Pet Policies',
    body: "Share your hotel's agreed pet rules and refer exception requests to staff.",
  },
  {
    icon: 'icon-building',
    title: 'Room Information',
    body: 'Describe approved room types and features. Check availability through the agreed process.',
  },
  {
    icon: 'icon-user-plus',
    title: 'Accessibility Enquiries',
    body: 'Share approved facility details and refer individual requirements to your hotel team.',
  },
  {
    icon: 'icon-users',
    title: 'Hotel Team Contacts',
    body: 'Use your agreed contact routes for reception, reservations and duty staff.',
  },
]

export default function HotelPropertyDetails() {
  return (
    <section className="w-full bg-[#f8f7f2] py-14 md:py-16" aria-labelledby="hotel-property-heading">
      <div className="site-container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="icon-mask icon-doc-check [--icon-size:1rem] inline-flex items-center gap-2 bg-[#8CA365]/10 text-[#5f7a3a] rounded-full text-sm font-semibold px-4 py-1.5">
            Property information &amp; approved answers
          </p>
          <h2
            id="hotel-property-heading"
            className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.14] tracking-tight text-[#1b4332]"
          >
            Your Property Details.{' '}
            <br />
            Consistent Guest Answers.
          </h2>
          <p className="mt-3 text-lg leading-relaxed text-gray-600">
            Give callers clear information about your hotel, using the details and wording your team approves.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 items-stretch gap-5 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.7fr)] lg:gap-7">
          <div className="rounded-xl bg-[#1d4b37] p-7">
            <span className="icon-mask icon-building [--icon-size:2.3rem] block text-[#a8c47d]" aria-hidden="true"></span>
            <p className="mt-6 text-[1.5rem] font-extrabold leading-tight text-white">
              A Clear Brief{' '}
              <br />
              for Your Property
            </p>
            <p className="mt-3 text-base leading-relaxed text-white/70">
              Agree the facts, keep changes current and give new questions a clear route.
            </p>

            <ul className="mt-6 list-none divide-y divide-white/15 border-t border-white/15">
              {BRIEF.map((item) => (
                <li key={item.title} className="py-4">
                  <h3 className="text-[1rem] font-bold text-[#a8c47d]">{item.title}</h3>
                  <p className="mt-1 text-base leading-relaxed text-white/70">{item.body}</p>
                </li>
              ))}
            </ul>
          </div>

          <ul className="grid list-none grid-cols-1 gap-x-7 gap-y-5 sm:grid-cols-2">
            {TOPICS.map((topic) => (
              <li key={topic.title} className="flex items-start gap-4">
                <span
                  className={`icon-mask ${topic.icon} [--icon-size:1.4rem] flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-[#eef2e6] text-[#4f6630]`}
                  aria-hidden="true"
                ></span>
                <span className="min-w-0">
                  <h3 className="text-[1rem] font-bold leading-snug text-[#1b4332]">{topic.title}</h3>
                  <span className="mt-1 block text-base leading-relaxed text-gray-600">{topic.body}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 flex flex-col items-start gap-5 rounded-xl bg-[#eef0e6] px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[1.15rem] font-extrabold text-[#1b4332]">
            Your information. Your approval. Consistent answers.
          </p>
          <Link
            prefetch={false}
            href="/contact-us"
            className="icon-mask icon-arrow-right [--icon-size:0.9rem] inline-flex flex-shrink-0 flex-row-reverse items-center gap-3 rounded-lg bg-[#8CA365] px-6 py-3.5 text-base font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#9cb374]"
          >
            Build My Hotel Call Plan
          </Link>
        </div>
      </div>
    </section>
  )
}
