import Link from 'next/link'
import { notFound } from 'next/navigation'
import DarkCtaBanner from '@/components/DarkCtaBanner'
import { BLOG_POSTS, getPost, slugify } from '@/features/blog/posts'

const BASE_URL = 'https://livephoneanswering.com'

// Each network's own share endpoint, so no SDK or tracking script is needed.
const SHARE_LINKS = [
  {
    name: 'Facebook',
    href: (url) => `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    path: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z',
  },
  {
    name: 'X',
    href: (url, title) =>
      `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
    path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z',
  },
  {
    name: 'LinkedIn',
    href: (url) => `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    path: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z',
  },
  {
    name: 'Pinterest',
    href: (url, title) =>
      `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(url)}&description=${encodeURIComponent(title)}`,
    path: 'M12 2C6.477 2 2 6.477 2 12c0 4.237 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.182-.78 1.172-4.97 1.172-4.97s-.299-.6-.299-1.486c0-1.39.806-2.428 1.81-2.428.852 0 1.264.64 1.264 1.408 0 .858-.546 2.14-.828 3.33-.236.995.499 1.807 1.48 1.807 1.778 0 3.144-1.874 3.144-4.58 0-2.393-1.72-4.068-4.177-4.068-2.845 0-4.515 2.135-4.515 4.34 0 .859.331 1.781.744 2.282a.3.3 0 01.069.287c-.076.315-.245.994-.278 1.133-.44.183-.145.222-.334.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.051 6.607-6.051 3.47 0 6.166 2.472 6.166 5.775 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.966-.527-2.292-1.148l-.623 2.378c-.226.869-.835 1.957-1.243 2.621A10 10 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z',
  },
]

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

            {/* Plain share links rather than platform scripts: they work on a
                static export, cost no JavaScript, and load no third-party code
                that could track the reader. */}
            <div className="mt-12 border-t border-gray-200 pt-8">
              <h2 className="text-sm font-bold uppercase tracking-[0.12em] text-[#34414A]">Share this article</h2>
              <ul className="mt-4 flex list-none flex-wrap gap-3">
                {SHARE_LINKS.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href(url, post.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Share this article on ${item.name}`}
                      className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#8CA365] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#6b8a3e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4f6630] focus-visible:ring-offset-2"
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d={item.path} />
                      </svg>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            </div>
          </div>
        </div>
      </article>

      <section className="w-full bg-slate-50 py-16 md:py-20" aria-labelledby="related-heading">
        <div className="site-container">
          <h2 id="related-heading" className="mb-8 text-2xl sm:text-3xl font-bold text-[#34414A]">
            Keep reading
          </h2>
          {/* Same three-up grid as the blog index, so the cards match. */}
          <ul className="grid list-none grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
              <li key={item.slug} className="flex">
                <Link
                  prefetch={false}
                  href={`/blog/${item.slug}`}
                  className="group flex w-full flex-col rounded-2xl border border-gray-200/70 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#8CA365] hover:shadow-xl"
                >
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#6b8a3e]">{item.category}</p>
                  <p className="mt-2 text-lg font-bold leading-snug text-[#34414A] transition-colors group-hover:text-[#295657]">
                    {item.title}
                  </p>
                  <p className="mt-2 flex-grow text-sm leading-relaxed text-gray-600">{item.excerpt}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </main>
  )
}
