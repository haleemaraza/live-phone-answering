import { StarIcon } from './icons'

const GLOBE_PATH =
  'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9'
const BADGE_CHECK_PATH =
  'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z'

function Outline({ d }) {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d={d} />
    </svg>
  )
}

const NODES = [
  {
    title: 'US-based leadership sets every standard — training, scripts, quality control',
    body: 'Our US-based account managers work directly with you to build custom call flows, qualify leads for high-ticket services (from epoxy flooring to emergency repairs), and ensure our quality assurance constantly meets strict domestic standards.',
    icon: <StarIcon className="w-5 h-5 fill-current" />,
  },
  {
    title: 'Our global receptionist team enables true 24/7 coverage without quality compromise',
    body: 'To guarantee that a midnight emergency call or weekend inquiry is never missed, we utilize a highly vetted, dedicated global workforce. This structural advantage allows us to offer genuine 24/7/365 coverage while keeping your overhead costs aggressively low.',
    icon: <Outline d={GLOBE_PATH} />,
  },
  {
    title: 'Every receptionist passes our 40-hour training programme before answering a single call',
    body: 'We don’t believe in "on-the-job" learning at your expense. Every global agent undergoes an intensive, 40-hour certification process focusing on empathetic communication, dispatch software mastery, and exact adherence to your business scripts before ever picking up a live line.',
    icon: <Outline d={BADGE_CHECK_PATH} />,
  },
]

export default function ServiceModel() {
  return (
    <section
      id="team"
      className="bg-white py-14 sm:py-24 px-4 border-t border-gray-100 relative overflow-hidden"
      aria-labelledby="service-model-heading"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <h2
            id="service-model-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#34414A] leading-tight mb-6"
          >
            How We&apos;re Built: US-Led Management, 24/7 Global Receptionist Coverage
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
            Transparency is our standard. We combine stateside operational strategy with a dedicated global workforce to provide
            your business with uninterrupted, premium call handling at a scale that makes sense.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="relative w-full rounded-3xl overflow-hidden group flex items-center justify-center p-1 bg-gradient-to-br from-gray-100 to-gray-50 border border-gray-200 shadow-sm transition-all duration-500 hover:shadow-md">
            <img
              src="/images/customer-support-operations.webp"
              alt="Live Phone Answering customer support operations team at work"
              width={1200}
              height={1200}
              loading="lazy"
              decoding="async"
              className="w-full h-auto object-cover rounded-3xl shadow-lg border border-white/50 group-hover:scale-[1.02] group-hover:shadow-xl transition-all duration-700"
            />
          </div>

          <ol className="relative flex flex-col gap-10 list-none">
            <div
              className="absolute left-[1.15rem] top-8 bottom-8 w-0.5 bg-gradient-to-b from-[#8CA365] via-gray-200 to-gray-200 hidden md:block z-0"
              aria-hidden="true"
            ></div>

            {NODES.map((node) => (
              <li key={node.title} className="relative flex items-start gap-6 group">
                <span className="w-10 h-10 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center text-gray-400 flex-shrink-0 z-10 group-hover:border-[#8CA365] group-hover:bg-green-50 group-hover:text-[#8CA365] transition-all duration-300 shadow-sm">
                  {node.icon}
                </span>
                <div className="pt-1.5">
                  <h3 className="text-xl font-bold text-[#34414A] mb-3 leading-snug">{node.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{node.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
