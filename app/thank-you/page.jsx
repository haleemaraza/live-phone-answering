import Link from 'next/link'

export const metadata = {
  title: "Thank You | Live Phone Answering Services",
  description: "Live Phone Answering helps businesses stay reachable, capture more leads, and deliver professional customer support with trusted live phone answering services.",
  alternates: { canonical: "/thank-you" },
  openGraph: {
    type: 'website',
    siteName: 'LivePhoneAnswering',
    locale: 'en_US',
    images: [{ url: '/images/Phone Answering Services.webp', width: 1122, height: 1402, alt: 'Live Phone Answering Service' }],
    title: "Thank You | Live Phone Answering Services",
    description: "Live Phone Answering helps businesses stay reachable, capture more leads, and deliver professional customer support with trusted live phone answering services.",
    url: "/thank-you",
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/Phone Answering Services.webp'],
    title: "Thank You | Live Phone Answering Services",
    description: "Live Phone Answering helps businesses stay reachable, capture more leads, and deliver professional customer support with trusted live phone answering services.",
  },
  robots: { index: false, follow: true },
}

export default function ThankYouPage() {
  return (
    <>
      {/* 404 SECTION */}
      <section
        className="relative overflow-hidden bg-white min-h-[70vh] flex flex-col justify-center items-center px-4 pt-20 pb-40 text-center z-10"
        aria-label="404 Not Found"
      >
        {/* Decorative blurred background elements */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#8CA365]/10 rounded-full filter blur-3xl opacity-70 animate-[pulse_6s_ease-in-out_infinite]"
          >
          </div>
        </div>
        <div className="relative z-10 flex flex-col items-center max-w-2xl mx-auto py-12 md:py-24">
          <div
            className="inline-flex items-center justify-center w-24 h-24 bg-green-100 text-green-600 rounded-full mb-12 shadow-sm relative z-20"
          >
            <svg
              className="w-12 h-12"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <div className="relative w-full flex flex-col items-center justify-center">
            <h1
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[60%] text-[8rem] sm:text-[12rem] font-black text-navy leading-none tracking-tighter opacity-5 select-none z-0 whitespace-nowrap"
            >
              SUCCESS
            </h1>
            <div className="relative z-10 flex flex-col items-center w-full">
              <h2
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#34414A] leading-tight mb-4 text-center"
              >
                Thank You!
              </h2>
              <p className="text-lg text-gray-500 mb-10 max-w-lg text-center">
                Your message has been successfully sent. One of our specialists will be in touch with you shortly.
              </p>
              <Link prefetch={false}
                href="/"
                className="inline-flex justify-center items-center bg-[#8CA365] hover:bg-[#7a8f57] text-white font-bold py-3.5 px-8 rounded-lg shadow-[0_8px_32px_rgba(140,163,101,0.3)] transition-all hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(140,163,101,0.4)]"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                Return to Homepage
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* EmailJS Integration */}
    </>
  )
}
