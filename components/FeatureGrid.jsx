// Shared 3-column feature grid. Every class string is supplied by the calling
// page exactly as it appeared in that page's original markup, so the two users
// of this component keep their own colours, tile sizes and section padding.
export default function FeatureGrid({
  eyebrow,
  eyebrowClassName,
  heading,
  headingId,
  intro,
  features,
  sectionClassName,
  tileClassName,
  iconSizeClassName,
}) {
  return (
    <section className={sectionClassName} aria-labelledby={headingId}>
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-[#8CA365]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 -left-20 w-96 h-96 bg-[#295657]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="site-container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <p className={eyebrowClassName}>{eyebrow}</p>
          <h2 id={headingId} className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#34414A] tracking-tight mb-4">
            {heading}
          </h2>
          <p className="text-lg text-gray-600">{intro}</p>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 list-none">
          {features.map((feature) => (
            <li
              key={feature.title}
              className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 reveal"
            >
              <span
                className={`icon-mask ${feature.icon} ${iconSizeClassName} ${tileClassName} rounded-2xl flex items-center justify-center mb-6 transition-colors ${feature.tone}`}
                aria-hidden="true"
              ></span>
              <h3 className="text-xl font-bold text-[#34414A] mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
