import Link from 'next/link'
import DarkCtaBanner from '@/components/DarkCtaBanner'
import { BLOG_POSTS } from '@/features/blog/posts'

export const metadata = {
  title: 'Blog | Live Phone Answering',
  description:
    'Practical guides on live answering services, missed calls, and virtual receptionists for US businesses. Written for owners who answer their own phones.',
  alternates: { canonical: '/blog' },
  openGraph: {
    type: 'website',
    siteName: 'LivePhoneAnswering',
    locale: 'en_US',
    url: '/blog',
    title: 'Blog | Live Phone Answering',
    description:
      'Practical guides on live answering services, missed calls, and virtual receptionists for US businesses.',
    images: [
      {
        url: '/images/Phone Answering Services.webp',
        width: 1122,
        height: 1402,
        alt: 'Live Phone Answering Service',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | Live Phone Answering',
    description:
      'Practical guides on live answering services, missed calls, and virtual receptionists for US businesses.',
    images: ['/images/Phone Answering Services.webp'],
  },
}

// Tells search engines this page is a blog and which posts it lists.
const blogSchema = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'Live Phone Answering Blog',
  url: 'https://livephoneanswering.com/blog',
  publisher: { '@type': 'Organization', name: 'LivePhoneAnswering' },
  blogPost: BLOG_POSTS.map((post) => ({
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    url: `https://livephoneanswering.com/blog/${post.slug}`,
  })),
}

// Same morphing blobs, grid, hatch and fade-up timings as the pricing hero.
const BLOBS = [
  {
    className: '-top-20 -left-16 w-[350px] h-[350px] bg-[#8CA365]/15 opacity-70',
    style: { animation: 'blobMorph 12s ease-in-out infinite', borderRadius: '42% 58% 55% 45% / 56% 42% 58% 44%' },
  },
  {
    className: 'top-1/3 -right-20 w-[280px] h-[280px] bg-[#295657]/10 opacity-60',
    style: { animation: 'blobMorph 15s ease-in-out infinite 3s', borderRadius: '55% 45% 42% 58% / 44% 56% 44% 56%' },
  },
  {
    className: '-bottom-16 left-1/3 w-[320px] h-[320px] bg-[#8CA365]/10 opacity-50',
    style: { animation: 'blobMorph 18s ease-in-out infinite 6s', borderRadius: '45% 55% 58% 42% / 58% 44% 42% 58%' },
  },
]

const SECTION_BACKGROUND = {
  backgroundImage: [
    'linear-gradient(rgba(41,86,87,0.04) 1px, transparent 1px)',
    'linear-gradient(90deg, rgba(41,86,87,0.04) 1px, transparent 1px)',
    'repeating-linear-gradient(135deg, rgba(41,86,87,0.03), rgba(41,86,87,0.03) 1px, transparent 1px, transparent 40px)',
    'linear-gradient(160deg, #c6ecb5 0%, #d4f1c4 20%, #e2f5d8 40%, #eef8e8 60%, #f5fbf2 80%, #ffffff 100%)',
  ].join(','),
  backgroundSize: '48px 48px, 48px 48px, 600px 600px, auto',
  backgroundPosition: '0 0, 0 0, 100% 0, 0 0',
  backgroundRepeat: 'repeat, repeat, no-repeat, no-repeat',
}

const rise = (delay) => ({ animation: `blobFadeUp 0.7s cubic-bezier(0.16,1,0.3,1) ${delay} both` })

export default function BlogIndexPage() {
  return (
    <main className="w-full">
      <section
        className="relative overflow-hidden py-16 sm:py-20 lg:py-24 px-4 lg:px-[5%]"
        style={SECTION_BACKGROUND}
        aria-labelledby="blog-heading"
      >
        {BLOBS.map((blob) => (
          <div
            key={blob.className}
            className={`absolute pointer-events-none z-[1] ${blob.className}`}
            style={blob.style}
            aria-hidden="true"
          ></div>
        ))}

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <p
            className="icon-mask icon-report inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm text-[#4a7a3e] rounded-full text-sm font-semibold px-5 py-2 mb-6 shadow-sm border border-white/50"
            style={rise('0s')}
          >
            From the LivePhoneAnswering team
          </p>

          <h1
            id="blog-heading"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.6rem] font-extrabold text-[#1a2e35] leading-[1.1] tracking-tight"
            style={rise('0.1s')}
          >
            Answer More Calls.
            <br className="hidden sm:block" /> Win More Customers.
          </h1>

          <p
            className="text-base sm:text-lg text-[#3d5c42] mt-5 max-w-2xl mx-auto leading-relaxed"
            style={rise('0.2s')}
          >
            Practical guides on live answering, missed calls, and virtual receptionists &mdash; written for owners who
            still answer their own phones.
          </p>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-16 md:py-20" aria-label="Articles">
        <ul className="mx-auto grid max-w-6xl list-none grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BLOG_POSTS.map((post) => (
            <li key={post.slug} className="h-full">
              <article className="h-full">
                <Link
                  prefetch={false}
                  href={`/blog/${post.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-gray-200/70 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#8CA365] hover:shadow-xl sm:p-7"
                >
                  <p className="w-max rounded-md bg-[#8CA365]/10 px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-[#6b8a3e]">
                    {post.category}
                  </p>
                  <h2 className="mt-4 text-lg font-bold leading-snug text-[#34414A] transition-colors group-hover:text-[#295657] sm:text-xl">
                    {post.title}
                  </h2>
                  <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-gray-600">{post.excerpt}</p>

                  <p className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-1 border-t border-gray-100 pt-4 text-xs text-gray-500">
                    <time
                      dateTime={post.date}
                      className="icon-mask icon-calendar [--icon-size:0.875rem] flex items-center gap-1.5 before:text-gray-400"
                    >
                      {post.dateLabel}
                    </time>
                    <span className="icon-mask icon-clock [--icon-size:0.875rem] flex items-center gap-1.5 before:text-gray-400">
                      {post.readTime}
                    </span>
                    <span
                      className="icon-mask icon-arrow-right [--icon-size:1rem] ml-auto text-[#8CA365] opacity-0 transition-opacity group-hover:opacity-100"
                      aria-hidden="true"
                    ></span>
                  </p>
                </Link>
              </article>
            </li>
          ))}
        </ul>
      </section>

      <DarkCtaBanner
        headingId="blog-cta-heading"
        heading="Stop Letting Calls Go to Voicemail"
        body="Join 2,400+ US businesses whose calls are answered by a real person. Setup takes less than 5 minutes."
        points={['No lock-in contracts', '100% US-based receptionists', '24/7/365 coverage', 'HIPAA compliant']}
        primary={{ href: '/contact-us', label: 'Get Started Today →' }}
        secondary={{ href: '/pricing', label: 'View Pricing Plans' }}
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }} />
    </main>
  )
}
