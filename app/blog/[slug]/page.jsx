import Link from 'next/link'
import { notFound } from 'next/navigation'
import DarkCtaBanner from '@/components/DarkCtaBanner'
import { BLOG_POSTS, getPost, slugify } from '@/features/blog/posts'

const BASE_URL = 'https://livephoneanswering.com'

const HEADER_BACKGROUND = {
  backgroundImage: [
    'linear-gradient(rgba(52,65,74,0.045) 1px, transparent 1px)',
    'linear-gradient(90deg, rgba(52,65,74,0.045) 1px, transparent 1px)',
    'repeating-linear-gradient(135deg, rgba(52,65,74,0.025), rgba(52,65,74,0.025) 1px, transparent 1px, transparent 40px)',
  ].join(','),
  backgroundSize: '48px 48px, 48px 48px, 600px 600px',
  backgroundPosition: '0 0, 0 0, 100% 0',
  backgroundRepeat: 'repeat, repeat, no-repeat',
}

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return {}

  const url = `/blog/${post.slug}`
  const image = {
    url: '/images/Phone Answering Services.webp',
    width: 1122,
    height: 1402,
    alt: 'Live Phone Answering Service',
  }

  return {
    title: `${post.title} | Live Phone Answering`,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      siteName: 'LivePhoneAnswering',
      locale: 'en_US',
      url,
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      images: [image],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [image.url],
    },
  }
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  const url = `${BASE_URL}/blog/${post.slug}`

  // Article, breadcrumb trail and the Q&A are all marked up, so the post is
  // eligible for article and FAQ rich results.
  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.description,
      datePublished: post.date,
      dateModified: post.date,
      url,
      mainEntityOfPage: { '@type': 'WebPage', '@id': url },
      author: { '@type': 'Organization', name: 'LivePhoneAnswering', url: BASE_URL },
      publisher: { '@type': 'Organization', name: 'LivePhoneAnswering', url: BASE_URL },
      image: `${BASE_URL}/images/Phone Answering Services.webp`,
      articleSection: post.category,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE_URL}/blog` },
        { '@type': 'ListItem', position: 3, name: post.title, item: url },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: post.faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: { '@type': 'Answer', text: faq.a },
      })),
    },
  ]

  const related = BLOG_POSTS.filter((item) => item.slug !== post.slug)

  return (
    <main className="w-full">
      <article>
        <header
          id="top"
          className="relative w-full scroll-mt-28 overflow-hidden bg-slate-50 px-4 pb-12 pt-10 md:pb-14 md:pt-12"
          style={HEADER_BACKGROUND}
        >
          <div className="relative z-10 mx-auto max-w-3xl">
            <nav aria-label="Breadcrumb">
              <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-500 list-none">
                <li className="flex items-center gap-2">
                  <Link prefetch={false} href="/" className="transition-colors hover:text-[#34414A]">
                    Home
                  </Link>
                  <span aria-hidden="true" className="text-gray-300">
                    /
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Link prefetch={false} href="/blog" className="transition-colors hover:text-[#34414A]">
                    Blog
                  </Link>
                  <span aria-hidden="true" className="text-gray-300">
                    /
                  </span>
                </li>
                <li className="font-semibold text-[#34414A]" aria-current="page">
                  {post.category}
                </li>
              </ol>
            </nav>

            <p className="mt-7 text-[11px] font-bold uppercase tracking-[0.18em] text-[#6b8a3e]">{post.category}</p>
            <h1 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-[#34414A] sm:text-4xl md:text-5xl">
              {post.title}
            </h1>
            <p className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-gray-500">
              <span>By LivePhoneAnswering</span>
              <span aria-hidden="true">&middot;</span>
              <time dateTime={post.date}>{post.dateLabel}</time>
              <span aria-hidden="true">&middot;</span>
              <span>{post.readTime}</span>
            </p>
          </div>
        </header>

        <div className="w-full bg-white px-4 py-12 md:py-16">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-14">
            {/* Sticky on desktop, a plain block above the article on mobile. */}
            <nav
              aria-labelledby="toc-heading"
              className="rounded-2xl border border-gray-200/70 bg-[#f7fbf5] p-6 lg:sticky lg:top-28 lg:self-start lg:rounded-none lg:border-0 lg:border-r lg:bg-transparent lg:p-0 lg:pr-8"
            >
              <h2 id="toc-heading" className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#6b8a3e]">
                On this page
              </h2>
              <ol className="mt-4 list-none space-y-3">
                {post.sections.map((section) => (
                  <li key={section.heading}>
                    <a
                      href={`#${slugify(section.heading)}`}
                      className="block text-sm leading-snug text-gray-500 underline-offset-4 transition-colors hover:text-[#8CA365] hover:underline"
                    >
                      {section.heading}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href="#faqs"
                    className="block text-sm leading-snug text-gray-500 underline-offset-4 transition-colors hover:text-[#8CA365] hover:underline"
                  >
                    Frequently asked questions
                  </a>
                </li>
              </ol>
              <p className="mt-5 border-t border-gray-200/70 pt-4">
                <a href="#top" className="text-sm text-gray-400 transition-colors hover:text-[#8CA365]">
                  &uarr; Back to top
                </a>
              </p>
            </nav>

            <div>
            {post.sections.map((section) => (
              <section key={section.heading} className="mt-10 first:mt-0 scroll-mt-28" id={slugify(section.heading)}>
                <h2 className="border-l-4 border-[#8CA365] pl-4 text-2xl sm:text-3xl font-bold leading-snug text-[#34414A]">
                  {section.heading}
                </h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)} className="mt-4 text-base leading-relaxed text-gray-600 sm:text-lg">
                    {paragraph}
                  </p>
                ))}
                {section.list && (
                  <div className="mt-6 rounded-2xl border border-gray-200/70 bg-[#f7fbf5] p-6 sm:p-7">
                    <p className="font-bold text-[#34414A]">{section.list.title}</p>
                    <ul className="mt-4 list-none space-y-3">
                      {section.list.items.map((item) => (
                        <li
                          key={item}
                          className="icon-mask icon-check [--icon-size:1.125rem] flex gap-3 leading-relaxed text-gray-600 before:mt-1 before:text-[#8CA365]"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </section>
            ))}

            <section className="mt-14 scroll-mt-28" id="faqs" aria-labelledby="faqs-heading">
              <h2 id="faqs-heading" className="border-l-4 border-[#8CA365] pl-4 text-2xl sm:text-3xl font-bold text-[#34414A]">
                Frequently asked questions
              </h2>
              <dl className="mt-6 divide-y divide-gray-100 border-y border-gray-100">
                {post.faqs.map((faq) => (
                  <div key={faq.q} className="py-6">
                    <dt className="text-lg font-bold text-[#34414A]">{faq.q}</dt>
                    <dd className="mt-2 leading-relaxed text-gray-600">{faq.a}</dd>
                  </div>
                ))}
              </dl>
            </section>

            <div className="mt-12 flex flex-col gap-5 rounded-2xl bg-[#f2f9ee] px-6 py-6 sm:flex-row sm:items-center sm:px-8">
              <span
                className="icon-mask icon-phone [--icon-size:1.375rem] flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-white text-[#295657]"
                aria-hidden="true"
              ></span>
              <span className="flex-grow">
                <span className="block text-base font-bold text-[#34414A]">Never miss another call</span>
                <span className="mt-1 block text-sm text-gray-500">
                  Real US-based receptionists answer in your business name, 24/7.
                </span>
              </span>
              <Link
                prefetch={false}
                href="/pricing"
                className="inline-flex flex-shrink-0 items-center justify-center rounded-xl bg-[#34414A] px-7 py-3 text-sm font-bold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-[#2a353c]"
              >
                See Pricing &rarr;
              </Link>
            </div>
            </div>
          </div>
        </div>
      </article>

      <section className="w-full bg-slate-50 px-4 py-16 md:py-20" aria-labelledby="related-heading">
        <div className="mx-auto max-w-3xl">
          <h2 id="related-heading" className="mb-8 text-2xl sm:text-3xl font-bold text-[#34414A]">
            Keep reading
          </h2>
          <ul className="flex list-none flex-col gap-5">
            {related.map((item) => (
              <li key={item.slug}>
                <Link
                  prefetch={false}
                  href={`/blog/${item.slug}`}
                  className="group block rounded-2xl border border-gray-200/70 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#8CA365] hover:shadow-xl"
                >
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#6b8a3e]">{item.category}</p>
                  <p className="mt-2 text-lg font-bold leading-snug text-[#34414A] transition-colors group-hover:text-[#295657]">
                    {item.title}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{item.excerpt}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <DarkCtaBanner
        headingId="post-cta-heading"
        heading="Ready to Stop Missing Calls & Start Growing?"
        body="Join 2,400+ US businesses who trust our professional receptionists. Setup takes less than 5 minutes — no contracts, no hidden fees."
        points={['No lock-in contracts', '100% US-based receptionists', '24/7/365 coverage', 'HIPAA compliant']}
        primary={{ href: '/contact-us', label: 'Get Started Today →' }}
        secondary={{ href: '/pricing', label: 'View Pricing Plans' }}
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </main>
  )
}
