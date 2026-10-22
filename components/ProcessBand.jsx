import Link from 'next/link'

// The dark-green "how it works" band: four numbered cards with arrows between
// them. Shared by every service page so the sections stay identical — each
// page passes its own badge, heading, steps and call to action.
//
// Deep green with a bloom out of the top-left, matching the other dark bands.
// Inline so no arbitrary-value class can fail to compile.
const SECTION_BACKGROUND = {
  backgroundImage: [
    'radial-gradient(60% 58% at 8% 0%, rgba(138,186,126,0.30) 0%, rgba(18,54,39,0) 58%)',
    'linear-gradient(155deg, #1a4836 0%, #163f2e 45%, #11321f 100%)',
  ].join(','),
}

export default function ProcessBand({
  headingId,
  badge,
  badgeIcon = 'icon-bolt',
  heading,
  intro,
  steps,
  ctaLabel,
  ctaHref = '/contact-us',
  footnote,
  // anything a page wants between the cards and the call to action
  children,
}) {
  return (
    <section
      className="relative w-full overflow-hidden py-14 md:py-16"
      style={SECTION_BACKGROUND}
      aria-labelledby={headingId}
    >
      <div className="site-container">
        <div className="mx-auto max-w-3xl text-center">
          <p
            className={`icon-mask ${badgeIcon} [--icon-size:1rem] inline-flex items-center gap-2 bg-white/10 text-[#a8c47d] rounded-full text-sm font-semibold px-4 py-1.5`}
          >
            {badge}
          </p>
          <h2
            id={headingId}
            className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.14] tracking-tight text-white"
          >
            {heading}
          </h2>
          <p className="mt-3 text-lg leading-relaxed text-white/65">{intro}</p>
        </div>

        <ol className="mt-12 grid list-none grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-7 lg:grid-cols-4 lg:gap-x-6">
          {steps.map((step, index) => (
            <li key={step.number} className="relative">
              {/* The card lifts and its icon grows on hover; the number badge
                  keeps its place so the row of numbers stays steady. */}
              <div className="group relative flex h-full flex-col items-center rounded-xl bg-[#f7f7f0] px-5 pb-6 pt-12 text-center shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:bg-white hover:shadow-xl">
                <span
                  className="absolute -top-5 left-1/2 flex h-11 w-11 -translate-x-1/2 items-center border-2 border-white justify-center rounded-full bg-[#8CA365] text-[0.85rem] font-bold text-white transition-colors duration-300 group-hover:bg-[#4f6630]"
                  aria-hidden="true"
                >
                  {step.number}
                </span>

                <span
                  className={`icon-mask ${step.icon} [--icon-size:3.2rem] text-[#4f6630] transition-transform duration-300 group-hover:scale-110`}
                  aria-hidden="true"
                ></span>

                <h3 className="mt-4 text-[1.1rem] font-bold text-[#1b4332]">{step.title}</h3>
                <p className="mt-2.5 flex-grow text-base leading-relaxed text-gray-600">{step.body}</p>
              </div>

              {index < steps.length - 1 && (
                <span
                  className="icon-mask icon-arrow-right [--icon-size:1.25rem] absolute left-full top-1/2 ml-3 hidden -translate-x-1/2 -translate-y-1/2 text-[#8CA365] lg:block"
                  aria-hidden="true"
                ></span>
              )}
            </li>
          ))}
        </ol>

        {children}

        {ctaLabel && (
          <div className="mt-10 text-center">
            <Link
              prefetch={false}
              href={ctaHref}
              className="icon-mask icon-arrow-right [--icon-size:0.95rem] inline-flex flex-row-reverse items-center gap-3 rounded-lg bg-[#8CA365] px-7 py-3.5 text-base font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#9cb374]"
            >
              {ctaLabel}
            </Link>
            {footnote && <p className="mt-3 text-sm text-white/45">{footnote}</p>}
          </div>
        )}
      </div>
    </section>
  )
}
