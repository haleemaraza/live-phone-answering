// Shared ratings / compliance strip. Same markup the overflow page introduced;
// only the left-hand label changes per page.
const BAND_BACKGROUND = {
  backgroundImage: 'linear-gradient(105deg, #e9f2dc 0%, #f4faee 32%, #fbfdf9 58%, #ffffff 100%)',
}

// Ratings are shown as plain text on purpose. They are claims about third-party
// platforms, so they are not marked up as AggregateRating — that schema must
// only describe reviews this site actually hosts.
const BADGES = [
  { stars: 5, starClass: 'text-[#d98500]', label: 'Google 4.9' },
  { stars: 5, starClass: 'text-[#1a7f5a]', label: 'Trustpilot 4.8' },
  { icon: 'icon-users', iconClass: 'text-[#566e34]', label: 'Clutch Top B2B Leader' },
  { icon: 'icon-shield-check', iconClass: 'text-[#1a2e35]', label: 'HIPAA & PCI Ready' },
]

export default function RatingsTrustBar({
  label = 'Trusted by 5,000+ high-volume local businesses & multi-line front desks',
}) {
  return (
    <section className="w-full px-4 py-8 md:py-9 lg:px-[5%]" style={BAND_BACKGROUND} aria-label="Ratings and compliance">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-6 lg:grid-cols-[minmax(0,20rem)_minmax(0,1fr)] lg:gap-10">
        <p className="text-[0.68rem] font-bold uppercase leading-relaxed tracking-[0.14em] text-[#5b6b72]">{label}</p>

        <ul className="flex list-none flex-wrap items-center gap-3 lg:justify-end">
          {BADGES.map((badge) => (
            <li key={badge.label} className="flex items-center gap-2 rounded-lg bg-white px-3.5 py-2 shadow">
              {badge.stars ? (
                <span className={`text-[0.75rem] leading-none tracking-[0.05em] ${badge.starClass}`} aria-hidden="true">
                  {'★'.repeat(badge.stars)}
                </span>
              ) : (
                <span className={`icon-mask ${badge.icon} [--icon-size:0.9rem] ${badge.iconClass}`} aria-hidden="true"></span>
              )}
              <span className="whitespace-nowrap text-[0.8rem] font-bold text-[#1a2e35]">
                {badge.label}
                {badge.stars ? '★' : ''}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
