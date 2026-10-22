const PLATFORMS = {
  google: {
    name: 'Google',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" role="img" aria-label="Google review">
        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
      </svg>
    ),
  },
  trustpilot: {
    name: 'Trustpilot',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 512 512" role="img" aria-label="Trustpilot review">
        <path fill="#00B67A" d="M256 0c141.385 0 256 114.615 256 256S397.385 512 256 512 0 397.385 0 256 114.615 0 256 0z" />
        <path fill="#FFF" d="M346.066 208.572h-74.872l-23.018-71.18c-1.39-4.298-7.362-4.298-8.752 0l-23.018 71.18h-74.872c-4.52 0-6.398 5.8-2.742 8.468l60.575 44.17-23.14 71.558c-1.396 4.318 3.82 8.125 7.482 5.466l60.672-44.24 60.672 44.24c3.662 2.66 8.878-1.148 7.482-5.466l-23.14-71.558 60.575-44.17c3.655-2.668 1.777-8.468-2.742-8.468z" />
      </svg>
    ),
  },
  yelp: {
    name: 'Yelp',
    icon: (
      <img
        src="/icons/yelp.webp"
        alt="Yelp review"
        width={64}
        height={64}
        loading="lazy"
        decoding="async"
        className="w-6 h-6 object-contain"
      />
    ),
  },
  facebook: {
    name: 'Facebook',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" role="img" aria-label="Facebook review">
        <path fill="#1877F2" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
}

const TESTIMONIALS = [
  {
    name: 'Mark S.',
    date: '2 days ago',
    platform: 'google',
    initials: { text: 'MS', className: 'bg-blue-100 text-blue-600' },
    quote:
      '"As a trade pro, I used to miss 50% of my calls while on job sites. These receptionists didn\'t just answer—they qualified the leak calls from the tire-kickers. Now I wake up to a booked calendar of high-value service appointments."',
  },
  {
    name: 'Sarah J.',
    date: '1 week ago',
    platform: 'trustpilot',
    avatar: '/images/testimonial-sarah-j.webp',
    quote:
      '"Confidentiality and empathy are crucial for our clients. The bilingual live intake team treats every caller with absolute professionalism. We haven\'t missed an urgent case intake since we started, after-hours included."',
  },
  {
    name: 'Dr. Emily R.',
    date: '3 weeks ago',
    platform: 'yelp',
    initials: { text: 'ER', className: 'bg-red-100 text-red-600' },
    quote:
      '"Our front desk is constantly busy with patients in the office. Handing off our overflow calls ensures we never miss a new patient inquiry. Our appointment volume skyrocketed without needing to hire an extra receptionist."',
  },
  {
    name: 'James L.',
    date: '1 month ago',
    platform: 'facebook',
    avatar: '/images/testimonial-james-l.webp',
    quote:
      '"In real estate, speed to lead is everything. Having a 24/7 live person answer our property inquiries means we secure tenants faster than our competitors. The immediate text alerts are incredible."',
  },
  {
    name: 'Amanda P.',
    date: '2 months ago',
    platform: 'google',
    initials: { text: 'AP', className: 'bg-purple-100 text-purple-600' },
    quote:
      '"The integrations are seamless. Every support call is logged directly into our CRM as a ticket with detailed notes. It\'s cut our triage time in half and drastically improved our customer satisfaction score."',
  },
  {
    name: 'David M.',
    date: '3 months ago',
    platform: 'trustpilot',
    avatar: '/images/testimonial-david-m.webp',
    quote:
      '"Absolutely incredible service. Setting up the call flows was surprisingly easy and the agents sound like they sit right in our office. Highly recommended!"',
  },
]

function TestimonialCard({ item }) {
  const platform = PLATFORMS[item.platform]

  return (
    <figure className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between hover:shadow-md transition-shadow break-inside-avoid">
      <div>
        <figcaption className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-3">
            {item.avatar ? (
              <img
                src={item.avatar}
                alt=""
                width={96}
                height={96}
                loading="lazy"
                decoding="async"
                className="w-10 h-10 rounded-full object-cover"
              />
            ) : (
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${item.initials.className}`}
                aria-hidden="true"
              >
                {item.initials.text}
              </div>
            )}
            <div>
              <cite className="not-italic font-semibold text-gray-900 text-sm block">{item.name}</cite>
              <div className="text-xs text-gray-500">{item.date}</div>
            </div>
          </div>
          {platform.icon}
        </figcaption>

        <blockquote className="text-gray-700 text-sm leading-relaxed mb-3">{item.quote}</blockquote>
      </div>

     
    </figure>
  )
}

export default function Testimonials({ id }) {
  return (
    <section className="bg-slate-50 py-14 sm:py-24 relative" id={id} aria-labelledby="testimonials-heading">
      <div className="site-container">
        <h2
          id="testimonials-heading"
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#34414A] text-center mb-6 max-w-4xl mx-auto leading-tight"
        >
          What Real Business Owners Achieve With Our Live Phone Answering Service
        </h2>

        <div className="flex items-center justify-center gap-2 mb-16">
          <h3 className="text-lg font-semibold text-gray-700">Rated 4.9/5 Stars for Service &amp; Reliability</h3>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {TESTIMONIALS.map((item) => (
            <TestimonialCard key={item.name} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
