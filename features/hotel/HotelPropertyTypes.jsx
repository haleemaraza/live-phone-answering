import Link from 'next/link'

// Section 9. Seven property types, so the grid runs on twelve columns: four
// across the first row and three across the second, both rows filling.
const TYPES = [
  {
    icon: 'icon-building',
    title: 'Independent Hotels',
    body: 'Support reservation enquiries and guest calls around your front-desk availability.',
  },
  {
    icon: 'icon-home',
    title: 'Boutique Hotels',
    body: "Use property-specific details and approved wording that reflect your hotel's character.",
  },
  {
    icon: 'icon-heart',
    title: 'Inns & B&Bs',
    body: 'Arrange phone cover while owners welcome guests and manage daily tasks.',
  },
  {
    icon: 'icon-id-card',
    title: 'Motels',
    body: 'Handle arrival questions, stay enquiries and messages through your agreed call plan.',
  },
  {
    icon: 'icon-sun',
    title: 'Resorts',
    body: 'Direct enquiries and guest requests to reservations, reception or the agreed department.',
  },
  {
    icon: 'icon-buildings-arrow',
    title: 'Serviced Apartments',
    body: 'Capture stay enquiries and guest requests using approved arrival and contact instructions.',
  },
  {
    icon: 'icon-overlap',
    title: 'Small Hotel Groups',
    body: 'Keep greetings, property details and staff contacts distinct for each location.',
  },
]

export default function HotelPropertyTypes() {
  return (
    <section className="w-full bg-[#f8f7f2] py-14 md:py-16" aria-labelledby="hotel-types-heading">
      <div className="site-container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="icon-mask icon-buildings-arrow [--icon-size:1rem] inline-flex items-center gap-2 bg-[#8CA365]/10 text-[#5f7a3a] rounded-full text-sm font-semibold px-4 py-1.5">
            Hotels &amp; accommodation types
          </p>
          <h2
            id="hotel-types-heading"
            className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.14] tracking-tight text-[#1b4332]"
          >
            Call Support for Different{' '}
            <br />
            Hotel Operations
          </h2>
          <p className="mt-3 text-lg leading-relaxed text-gray-600">
            Build call handling around your property, your front-desk availability and the guest requests your team
            receives.
          </p>
        </div>

        <ul className="mt-8 grid list-none grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-12">
          {TYPES.map((type, index) => (
            <li
              key={type.title}
              className={`flex h-full flex-col items-center rounded-xl border border-gray-300/50 bg-white p-6 text-center ${
                index < 4 ? 'lg:col-span-3' : 'lg:col-span-4'
              }`}
            >
              <span
                className={`icon-mask ${type.icon} [--icon-size:1.9rem] flex h-16 w-16 items-center justify-center rounded-full bg-[#eef2e6] text-[#1b4332]`}
                aria-hidden="true"
              ></span>
              <h3 className="mt-4 text-[1.1rem] font-extrabold leading-snug text-[#1b4332]">{type.title}</h3>
              <p className="mt-2 text-base leading-relaxed text-gray-600">{type.body}</p>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-col items-start gap-5 rounded-xl bg-[#1d4b37] px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
          <p>
            <span className="block text-[1.2rem] font-extrabold text-white">
              One Property or Several. Instructions That Fit.
            </span>
            <span className="mt-1 block text-base text-white/70">
              Agree the greeting, guest information, coverage and contact routes for your property.
            </span>
          </p>
          <Link
            prefetch={false}
            href="/contact-us"
            className="icon-mask icon-arrow-right [--icon-size:0.95rem] inline-flex flex-shrink-0 flex-row-reverse items-center gap-3 rounded-lg bg-[#8CA365] px-7 py-3.5 text-lg font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#9cb374]"
          >
            Build My Hotel Call Plan
          </Link>
        </div>
      </div>
    </section>
  )
}
