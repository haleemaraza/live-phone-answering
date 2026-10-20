const BENEFITS = [
 {
  title: 'Never Miss a Customer Call',
  icon: '/icons/never-miss-new-leads.webp',
  variant: 'dark',
  span: 'lg:col-span-3',
  bg: 'bg-[#295657]',
  border: 'border-[#1E4344]',
  body: 'Customers want fast answers. A live phone answering service keeps you available during busy hours, breaks, evenings, and weekends so you miss fewer calls, connect with more people, and never lose leads to voicemail.',
},
  {
    title: 'Deliver Faster, Friendlier Customer Service',
    icon: '/icons/improve-customer-experience.webp',
    variant: 'mint',
    span: 'lg:col-span-3',
    body: 'People want quick, polite service. With live answering, callers reach a real person, not voicemail. Receptionists can answer questions, route urgent calls, and make customers feel heard. This creates a better first impression, improves trust, and turns more leads into clients.',
  },
  {
    title: 'Save Time for Core Business Tasks',
    icon: '/icons/book-more-appointments.webp',
    variant: 'plain',
    span: 'lg:col-span-2',
    body: 'Answering phones all day can interrupt your work and slow your team down. Live answering handles routine calls — messages, bookings, basic questions — so you can focus on clients, sales, and growth, helping small teams stay organized without extra pressure.',
  },
  {
    title: 'Cut Costs Without Losing Coverage',
    icon: '/icons/save-time-for-your-team.webp',
    variant: 'plain',
    span: 'lg:col-span-2',
    body: 'Full-time receptionists are expensive — salary, training, benefits, and space add up. A live answering service gives you professional coverage at a lower cost with more flexibility, including answering service pricing options like pay per call answering service and no contract answering service plans.',
  },
  {
    title: 'Build a More Professional Brand Image',
    icon: '/icons/custom-call-routing.webp',
    variant: 'plain',
    span: 'lg:col-span-2',
    body: 'A business that answers well feels more reliable. Live answering makes you sound organized, responsive, and trustworthy from the first call. Customers stay engaged with a friendly voice instead of voicemail, which helps small businesses look established and strengthens your brand.',
  },
]

const VARIANTS = {
  dark: {
    card: 'bg-[#295657] border-[#1E4344] shadow-xl',
    iconTile: 'bg-white/10 border-white/20',
    title: 'text-white',
    body: 'text-teal-50/80 text-lg max-w-md',
  },
  mint: {
    card: 'bg-gradient-to-br from-[#E6F0EE] to-[#D8E1D9] border-[#C2D0D4] shadow-sm',
    iconTile: 'bg-white/60 border-white/50 shadow-sm backdrop-blur-sm',
    title: 'text-[#34414A]',
    body: 'text-[#4E6074] text-lg',
  },
  plain: {
    card: 'bg-slate-50 border-slate-200 shadow-sm hover:border-[#8CA365]/40',
    iconTile: 'bg-white border-slate-100 shadow-sm',
    title: 'text-[#34414A]',
    body: 'text-gray-600',
  },
}

function BenefitCard({ benefit }) {
  const v = VARIANTS[benefit.variant]
  const isFeature = benefit.variant !== 'plain'

  return (
    <li className={benefit.span}>
      <article
        className={`group relative overflow-hidden rounded-[2rem] border p-8 sm:p-10 h-full flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${v.card}`}
      >
        {benefit.variant === 'dark' && (
          <div
            className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16 transition-transform duration-700 group-hover:scale-110"
            aria-hidden="true"
          ></div>
        )}

        <div className="relative z-10 h-full flex flex-col justify-between">
          <div
            className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 border transition-transform duration-300 group-hover:scale-105 ${v.iconTile}`}
          >
            {/* Decorative: the heading below names the benefit. */}
            <img
              src={benefit.icon}
              alt=""
              aria-hidden="true"
              width={256}
              height={256}
              loading="lazy"
              decoding="async"
              className="w-12 h-12 object-contain rounded-xl"
            />
          </div>

          <div>
            <h3 className={`${isFeature ? 'text-2xl' : 'text-xl'} font-bold mb-3 ${v.title}`}>{benefit.title}</h3>
            <p className={`leading-relaxed ${v.body}`}>{benefit.body}</p>
          </div>
        </div>
      </article>
    </li>
  )
}

export default function BenefitsGrid() {
  return (
    <section className="py-20 md:py-32 bg-white relative overflow-hidden" aria-labelledby="benefits-heading">
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40" aria-hidden="true">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-gradient-to-b from-[#E6F0EE] to-transparent blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24">
          <h2 id="benefits-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#34414A] tracking-tight mb-6 font-sans">
            Benefits of Live Phone
            <br className="hidden sm:block" />{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#295657] to-[#8CA365]">
              Answering Services
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-medium">
            Here are the reasons that make us the best option to handle your online phone answering services:
          </p>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 lg:gap-8 list-none">
          {BENEFITS.map((benefit) => (
            <BenefitCard key={benefit.title} benefit={benefit} />
          ))}
        </ul>
      </div>
    </section>
  )
}
