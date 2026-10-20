import Link from 'next/link'

// A genuine comparison grid, so it is a real <table>: the three options are
// column headers and the three criteria are row headers. That pairing is what
// lets a screen reader say "24/7 Answering, A good fit when: ..." and is also
// the structure Google reads most reliably.
const OPTIONS = [
  {
    id: 'after-hours',
    icon: 'icon-moon',
    name: 'After-Hours',
    nameSecond: 'Answering',
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
    name: '24/7',
    nameSecond: 'Answering',
    cells: [
      'Across daytime and nighttime hours',
      'Can be handled by the answering service',
      'You want answering throughout the day and night',
    ],
  },
  {
    id: 'overflow',
    icon: 'icon-phone-forward',
    name: 'Overflow',
    nameSecond: 'Answering',
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
    <section className="w-full bg-[#f8f6ec] px-4 py-14 md:py-16 lg:px-[5%]" aria-labelledby="comparison-heading">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="icon-mask icon-check-circle [--icon-size:1rem] inline-flex items-center gap-2 bg-[#8CA365]/10 text-[#5f7a3a] rounded-full text-sm font-semibold px-4 py-1.5">Find the right coverage</p>
          <h2
            id="comparison-heading"
            className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight text-[#34414A]"
          >
            After-Hours, 24/7 or Overflow?
          </h2>
          <p className="mt-2 text-[0.95rem] leading-relaxed text-gray-600">
            Choose coverage based on when your business needs help answering calls.
          </p>
        </div>

        {/* Wide tables scroll rather than restack: keeping the real table layout
            preserves the header/cell relationships on small screens. */}
        <div className="mt-7 overflow-x-auto rounded-2xl border border-gray-300/60 bg-white">
          <table className="w-full min-w-[44rem] border-collapse text-left">
            <caption className="sr-only">
              After-hours, 24/7 and overflow answering compared by when each one answers, what happens to daytime
              calls, and which businesses each suits.
            </caption>

            <thead>
              <tr>
                <th
                  scope="col"
                  className="w-[19%] bg-[#eef3e4] px-5 py-4 align-middle text-[0.68rem] font-bold uppercase tracking-[0.16em] text-gray-600"
                >
                  Compare coverage
                </th>
                {OPTIONS.map((option) => (
                  <th
                    key={option.id}
                    scope="col"
                    className={`w-[27%] px-4 py-3 align-middle ${
                      option.featured
                        ? 'border-x-2 border-[#8CA365] bg-[#0f2925] text-white'
                        : 'bg-white text-[#1a2e35]'
                    }`}
                  >
                    {option.featured && (
                      <span className="mb-1.5 block text-center">
                        <span className="inline-block rounded-full bg-[#a8c47d] px-3 py-0.5 text-[0.6rem] font-bold uppercase tracking-[0.14em] text-[#0f2925]">
                          On this page
                        </span>
                      </span>
                    )}
                    <span className="flex items-center gap-3">
                      <span
                        className={`icon-mask ${option.icon} [--icon-size:1.6rem] flex-shrink-0 ${
                          option.featured ? 'text-[#a8c47d]' : 'text-[#566e34]'
                        }`}
                        aria-hidden="true"
                      ></span>
                      <span className="text-[1.05rem] font-bold leading-tight">
                        {option.name}
                        <br />
                        {option.nameSecond}
                      </span>
                    </span>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {CRITERIA.map((criterion, rowIndex) => (
                <tr key={criterion} className="border-t border-gray-300/50">
                  <th
                    scope="row"
                    className="bg-[#eef3e4] px-5 py-3.5 align-middle text-[0.95rem] font-bold text-[#295657]"
                  >
                    {criterion}
                  </th>
                  {OPTIONS.map((option) => (
                    <td
                      key={option.id}
                      className={`px-4 py-3.5 align-middle text-[0.9rem] leading-relaxed text-gray-600 ${
                        option.featured
                          ? `border-x-2 border-[#8CA365] bg-[#e9f2df] ${
                              rowIndex === CRITERIA.length - 1 ? 'border-b-2' : ''
                            }`
                          : ''
                      }`}
                    >
                      {option.cells[rowIndex]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 flex flex-col items-start gap-5 px-1 sm:flex-row sm:items-center sm:justify-between">
          <p className="flex items-start gap-4">
            <span
              className="icon-mask icon-overlap [--icon-size:2.1rem] mt-0.5 flex-shrink-0 text-[#566e34]"
              aria-hidden="true"
            ></span>
            <span className="min-w-0">
              <span className="block text-[1.05rem] font-bold text-[#1a2e35]">
                Need more than one type of coverage?
              </span>
              <span className="mt-1 block text-[0.9rem] text-gray-600">
                Discuss a setup that combines the support your business needs.
              </span>
            </span>
          </p>

          <Link
            prefetch={false}
            href="/contact-us"
            className="icon-mask icon-arrow-right [--icon-size:1rem] inline-flex flex-shrink-0 flex-row-reverse items-center gap-3 rounded-lg bg-[#8CA365] px-7 py-3 text-[0.92rem] font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#9cb374]"
          >
            Find My Coverage
          </Link>
        </div>
      </div>
    </section>
  )
}
