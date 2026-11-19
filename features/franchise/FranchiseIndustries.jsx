import Link from 'next/link'

// Section 9. Five franchise categories, each with the business types it covers
// and the calls those locations typically receive.
const CATEGORIES = [
  {
    icon: 'icon-home',
    title: 'Home & Property',
    items: ['Plumbing', 'HVAC & Electrical', 'Cleaning', 'Restoration', 'Pest Control', 'Landscaping', 'Property Services'],
    typical: 'Service-area checks, estimate requests and local callbacks.',
  },
  {
    icon: 'icon-heart',
    title: 'Health & Wellbeing',
    items: ['Fitness Clubs', 'Wellness Centres', 'Physiotherapy', 'Allied Health', 'Dental Practices', 'Home Care'],
    typical: 'Membership enquiries, appointment requests and administrative messages.',
  },
  {
    icon: 'icon-gear',
    title: 'Automotive',
    items: ['Repair Centres', 'Tyre & Tire Services', 'Vehicle Detailing', 'Car Wash', 'Vehicle Maintenance'],
    typical: 'Booking requests, opening hours and service-team callbacks.',
  },
  {
    icon: 'icon-chats',
    title: 'Education & Family',
    items: ['Tutoring', 'Language Schools', "Children's Activities", 'Sports Coaching', 'Childcare Administration'],
    typical: 'Programme enquiries, trial-session requests and parent callbacks.',
  },
  {
    icon: 'icon-building',
    title: 'Retail & Business',
    items: ['Retail Networks', 'Food Service', 'Salons & Beauty', 'Pet Services', 'Print & Signage', 'Business Services'],
    typical: 'Local FAQs, reservation or appointment requests and customer messages.',
  },
]

export default function FranchiseIndustries() {
  return (
    <section className="w-full bg-[#f8f7f2] py-14 md:py-16" aria-labelledby="franchise-industries-heading">
      <div className="site-container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="icon-mask icon-buildings-arrow [--icon-size:1rem] inline-flex items-center gap-2 bg-[#8CA365]/10 text-[#5f7a3a] rounded-full text-sm font-semibold px-4 py-1.5">
            Franchise industries
          </p>
          <h2
            id="franchise-industries-heading"
            className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.14] tracking-tight text-[#1b4332]"
          >
            Call Support for Different Types{' '}
            <br />
            of Franchise Businesses
          </h2>
          <p className="mt-3 text-lg leading-relaxed text-gray-600">
            Adapt customer enquiries, appointment requests and local messages to the way your franchise operates.
          </p>
        </div>

        <ul className="mt-8 grid list-none grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {CATEGORIES.map((category) => (
            <li
              key={category.title}
              className="flex h-full flex-col rounded-xl border border-gray-300/50 bg-white p-5 sm:p-6"
            >
              <span
                className={`icon-mask ${category.icon} [--icon-size:1.8rem] flex h-14 w-14 items-center justify-center rounded-lg bg-[#eef2e6] text-[#1b4332]`}
                aria-hidden="true"
              ></span>
              <h3 className="mt-4 border-b border-gray-300/50 pb-3 text-[1.15rem] font-extrabold leading-snug text-[#1b4332]">
                {category.title}
              </h3>

              <ul className="mt-4 list-none space-y-2.5">
                {category.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span
                      className="icon-mask icon-check [--icon-size:0.7rem] mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#eef2e6] text-[#4f6630]"
                      aria-hidden="true"
                    ></span>
                    <span className="text-base text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-auto pt-5">
                <span className="block text-[0.62rem] font-bold uppercase tracking-[0.16em] text-[#5f7a3a]">
                  Typical calls
                </span>
                <span className="mt-1 block text-base leading-relaxed text-gray-600">{category.typical}</span>
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-col items-start gap-5 rounded-xl bg-[#1d4b37] px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
          <p>
            <span className="block text-[1.2rem] font-extrabold text-white">
              Your industry. Your brand. Your local call plan.
            </span>
            <span className="mt-1 block text-base text-white/70">
              Choose the call types and approved tasks your franchise needs.
            </span>
          </p>
          <Link
            prefetch={false}
            href="/contact-us"
            className="icon-mask icon-arrow-right [--icon-size:0.95rem] inline-flex flex-shrink-0 flex-row-reverse items-center gap-3 rounded-lg bg-[#8CA365] px-7 py-3.5 text-lg font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#9cb374]"
          >
            Discuss My Franchise Needs
          </Link>
        </div>

        <p className="mt-5 text-center text-sm text-gray-600">Call handling scope is agreed for each franchise.</p>
      </div>
    </section>
  )
}
