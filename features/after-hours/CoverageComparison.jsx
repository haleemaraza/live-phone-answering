import Link from 'next/link'

// Three coverage options as cards. Each card repeats the same three labelled
// facts in the same order, so the options stay comparable the way the old
// table was — the labels are <dt> and the answers <dd>, which keeps the
// pairing readable for screen readers and for Google.
const OPTIONS = [
  {
    id: 'after-hours',
    icon: 'icon-moon',
    name: 'After-Hours Answering',
    featured: true,
    cells: [
      'Outside your agreed business hours',
      'Stay with your in-house team',
      'You want support after closing',
    ],
  },
  {
    id: 'always-on',
    icon: 'icon-clock',
    name: '24/7 Answering',
    cells: [
      'Across daytime and nighttime hours',
      'Can be handled by the answering service',
      'You want answering throughout the day and night',
    ],
  },
  {
    id: 'overflow',
    icon: 'icon-phone-forward',
    name: 'Overflow Answering',
    cells: [
      'When your team is busy or a call goes unanswered',
      'Reach your team first, with backup when needed',
      'You need extra help during busy periods',
    ],
  },
]

const CRITERIA = ['When it answers', 'Your daytime calls', 'A good fit when']

export default function CoverageComparison() {
  return (
    <section className="w-full bg-[#f8f6ec] py-14 md:py-16" aria-labelledby="comparison-heading">
      <div className="site-container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="icon-mask icon-check-circle [--icon-size:1rem] inline-flex items-center gap-2 bg-[#8CA365]/10 text-[#5f7a3a] rounded-full text-sm font-semibold px-4 py-1.5">
            Find the right coverage
          </p>
          <h2
            id="comparison-heading"
            className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight text-[#34414A]"
          >
            After-Hours, 24/7 or Overflow?
          </h2>
          <p className="mt-3 text-lg leading-relaxed text-gray-600">
            Choose coverage based on when your business needs help answering calls.
          </p>
        </div>

        <ul className="mt-10 grid list-none grid-cols-1 gap-6 md:grid-cols-3">
          {OPTIONS.map((option) => (
            <li key={option.id} className="flex">
              <div
                className={`group flex w-full flex-col rounded-2xl border bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${
                  option.featured ? 'border-[#8CA365] ring-1 ring-[#8CA365]/40' : 'border-gray-200 hover:border-[#8CA365]'
                }`}
              >
                <span
                  className={`icon-mask ${option.icon} [--icon-size:1.6rem] mb-5 flex h-14 w-14 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110 ${
                    option.featured ? 'bg-[#8CA365] text-white' : 'bg-[#8CA365]/10 text-[#4f6630]'
                  }`}
                  aria-hidden="true"
                ></span>

                <h3 className="text-xl font-bold text-[#1a2e35]">{option.name}</h3>
                {option.featured && (
                  <p className="mt-2 inline-flex w-fit rounded-full bg-[#8CA365]/15 px-3 py-1 text-sm font-bold text-[#4f6630]">
                    This page
                  </p>
                )}

                <dl className="mt-5 flex-grow divide-y divide-gray-100 border-t border-gray-100">
                  {CRITERIA.map((label, index) => (
                    <div key={label} className="py-3.5">
                      <dt className="text-sm font-bold uppercase tracking-wide text-gray-500">{label}</dt>
                      <dd className="mt-1 text-base leading-relaxed text-[#34414A]">{option.cells[index]}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-col items-start gap-5 rounded-2xl bg-white px-6 py-5 shadow-sm sm:flex-row sm:items-center sm:justify-between">
          <p className="flex items-start gap-4">
            <span
              className="icon-mask icon-layers [--icon-size:1.6rem] mt-0.5 flex-shrink-0 text-[#4f6630]"
              aria-hidden="true"
            ></span>
            <span className="min-w-0">
              <span className="block text-[1.05rem] font-bold text-[#1a2e35]">
                Need more than one type of coverage?
              </span>
              <span className="mt-1 block text-lg text-gray-600">
                Discuss a setup that combines the support your business needs.
              </span>
            </span>
          </p>

          <Link
            prefetch={false}
            href="/contact-us"
            className="icon-mask icon-arrow-right [--icon-size:1rem] inline-flex flex-shrink-0 flex-row-reverse items-center gap-3 rounded-lg bg-[#8CA365] px-7 py-3 text-lg font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#9cb374]"
          >
            Find My Coverage
          </Link>
        </div>
      </div>
    </section>
  )
}
