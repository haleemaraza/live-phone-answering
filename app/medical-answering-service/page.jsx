import Link from 'next/link'

export const metadata = {
  title: "Medical Answering Service | Live Phone Answering",
  description: "Professional HIPAA-compliant medical answering service. Secure, 24/7 call handling for healthcare providers, clinics, and practices.",
  alternates: { canonical: "/medical-answering-service" },
  openGraph: {
    type: 'website',
    siteName: 'LivePhoneAnswering',
    locale: 'en_US',
    images: [{ url: '/images/Phone Answering Services.webp', width: 1122, height: 1402, alt: 'Live Phone Answering Service' }],
    title: "Medical Answering Service | Live Phone Answering",
    description: "Professional HIPAA-compliant medical answering service. Secure, 24/7 call handling for healthcare providers, clinics, and practices.",
    url: "/medical-answering-service",
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/Phone Answering Services.webp'],
    title: "Medical Answering Service | Live Phone Answering",
    description: "Professional HIPAA-compliant medical answering service. Secure, 24/7 call handling for healthcare providers, clinics, and practices.",
  },
}

const pageSchema = [
  {
    "@context": "https://schema.org/",
    "@type": "WebPage",
    "name": "Medical Answering Service Definitions and Comparisons",
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": [
        "#definition-text",
        "#compare-regular",
        "#compare-inhouse",
        "#compare-ai"
      ]
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Set Up a Medical Answering Service",
    "description": "A HIPAA-compliant medical answering service can be set up for your practice in under 24 hours by following these 4 steps.",
    "totalTime": "PT24H",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Sign your HIPAA Business Associate Agreement",
        "text": "Execute a fully compliant BAA digitally in under 5 minutes. This legally protects your practice and establishes HIPAA obligations before any patient calls are handled.",
        "url": "https://livephoneanswering.com/medical-answering-service#step-1"
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Configure your medical call script and on-call routing protocols",
        "text": "Our onboarding team builds a custom call script using your practice's terminology, greetings, and tiered on-call escalation rules.",
        "url": "https://livephoneanswering.com/medical-answering-service#step-2"
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Forward your practice phone number",
        "text": "A simple call forward from your existing number is all it takes. Receptionists answer using your practice name and follow your exact protocols.",
        "url": "https://livephoneanswering.com/medical-answering-service#step-3"
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Receive encrypted HIPAA-compliant message summaries after every patient call",
        "text": "After each call, a full encrypted summary is delivered to your secure portal including caller name, reason for contact, urgency, and action items.",
        "url": "https://livephoneanswering.com/medical-answering-service#step-4"
      }
    ]
  },
  {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": "Medical Answering Service",
    "description": "HIPAA-compliant live medical answering service for clinics, physicians, and healthcare practices.",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "2145"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Sarah Chen",
          "honorificSuffix": "MD"
        },
        "datePublished": "2026-03-15",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "reviewBody": "We reduced after-hours call interruptions by 80% in the first month. Our next HIPAA audit passed with zero findings related to call handling."
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Rachel Dominguez",
          "honorificSuffix": "MHA"
        },
        "datePublished": "2026-02-20",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "reviewBody": "Their team signed a BAA before day one, every message comes through an encrypted portal, and we've had zero compliance violations in 18 months."
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "James Whitfield",
          "honorificSuffix": "DDS"
        },
        "datePublished": "2026-01-10",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "reviewBody": "We're capturing an average of 35 new patient inquiries per month that previously went to voicemail after 5 PM. The bilingual answering has been a game-changer."
      }
    ]
  }
]

export default function MedicalAnsweringServicePage() {
  return (
    <>
      <main>
        {/* AFTER HOURS HERO SECTION */}
        <section
          className="bg-white min-h-[90vh] flex items-center relative overflow-hidden pt-24 lg:pt-0"
        >
          {/* Subtle SaaS Texture Background */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Premium Full-Width Dot Pattern */}
            <div
              className="absolute inset-0"
              style={{ backgroundImage: "radial-gradient(#cbd5e1 2px, transparent 2px)", backgroundSize: "32px 32px" }}
            >
            </div>
            {/* Linear Fade at Bottom to blend into next section */}
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent">
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-4 py-20 lg:py-0 w-full relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left Column (Authority & SEO Content) */}
              <div className="lg:col-span-7 flex flex-col reveal">
                {/* H1 The Core Anchor */}
                <h1
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#34414A] leading-tight mb-6 tracking-tight"
                >
                  Medical Answering Service — HIPAA-Certified Live Receptionists for Clinics, Physicians & Healthcare Practices
                </h1>
                {/* H3 Emotional Hook */}
                <h3 className="text-xl text-gray-600 leading-relaxed mb-10 max-w-2xl">
                  HIPAA-trained receptionists answer every patient call — day, night, and after hours — so your practice never misses an appointment, an emergency, or a new patient inquiry.
                </h3>
                {/* 5 Credential Badges */}
                <div className="flex flex-wrap gap-3 mb-10">
                  {/* Badge 1 */}
                  <span
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-green-50 text-green-700 font-semibold text-sm border border-green-200"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                    HIPAA Certified
                  </span>
                  {/* Badge 2 */}
                  <span
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-slate-100 text-slate-700 font-semibold text-sm border border-slate-200"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                    BBB Accredited
                  </span>
                  {/* Badge 3 */}
                  <span
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-slate-100 text-slate-700 font-semibold text-sm border border-slate-200"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                    BAA Available
                  </span>
                  {/* Badge 4 */}
                  <span
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-slate-100 text-slate-700 font-semibold text-sm border border-slate-200"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                    24/7 Live Answering
                  </span>
                  {/* Badge 5 */}
                  <span
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-slate-100 text-slate-700 font-semibold text-sm border border-slate-200"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                    Bilingual English/Spanish
                  </span>
                </div>
                {/* Dual CTAs */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    className="flex justify-center items-center bg-[#8CA365] hover:bg-[#7a8f57] text-white font-bold text-lg py-4 px-8 rounded-xl shadow-[0_8px_20px_rgba(140,163,101,0.3)] transition-transform hover:-translate-y-1 text-center"
                    href="#hero-form"
                  >
                    Get Started Now
                  </a>
                  <Link prefetch={false}
                    className="flex justify-center items-center bg-white hover:bg-slate-50 border-2 border-slate-200 text-slate-700 font-bold text-lg py-4 px-8 rounded-xl transition-all text-center"
                    href="/contact-us"
                  >
                    Get a Custom Quote for Your Practice
                  </Link>
                </div>
              </div>
              {/* Right Column (Lead Capture Form) */}
              <div className="lg:col-span-5 flex justify-center lg:justify-end w-full reveal reveal-delay-2">
                <div
                  className="w-full max-w-md bg-white p-6 md:p-8 rounded-3xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.15)] border border-gray-100 flex flex-col relative z-20"
                >
                  {/* Card Header (Live Proof) */}
                  <div
                    className="bg-slate-50 border border-gray-200 rounded-xl p-3 flex flex-wrap items-center justify-between gap-2 mb-5"
                  >
                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-widest">
                      Live Operational Status
                    </span>
                    <div className="flex items-center gap-2 text-green-600 font-bold text-sm">
                      <div
                        className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]"
                      >
                      </div>
                      <svg
                        className="w-4 h-4 opacity-70"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        />
                      </svg>
                      <span id="live-time-est">
                        Online & Answering
                      </span>
                    </div>
                  </div>
                  {/* Form Content */}
                  <h4 className="text-2xl font-black text-[#34414A] mb-2 tracking-tight">
                    Get Started with Answering
                  </h4>
                  <p className="text-sm text-gray-500 mb-5">
                    Secure, 24/7 HIPAA-compliant patient answering.
                  </p>
                  {/* Form Fields */}
                  <form
                    action="#"
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4"
                    id="hero-form"
                    method="POST"
                  >
                    <div className="col-span-1 md:col-span-2">
                      <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="fullName">
                        Full Name
                      </label>
                      <input
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#8CA365] focus:bg-white transition-all"
                        id="fullName"
                        name="fullName"
                        placeholder="John Doe"
                        required
                        type="text"
                      />
                    </div>
                    <div className="col-span-1">
                      <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="email">
                        Work Email
                      </label>
                      <input
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#8CA365] focus:bg-white transition-all"
                        id="email"
                        name="email"
                        placeholder="john@clinic.com"
                        required
                        type="email"
                      />
                    </div>
                    <div className="col-span-1">
                      <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="phone">
                        Phone Number
                      </label>
                      <input
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#8CA365] focus:bg-white transition-all"
                        id="phone"
                        name="phone"
                        placeholder="(555) 000-0000"
                        required
                        type="tel"
                      />
                    </div>
                    <div className="col-span-1 md:col-span-2">
                      <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="industry">
                        Your Industry
                      </label>
                      <select
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#8CA365] focus:bg-white transition-all"
                        id="industry"
                        name="industry"
                        required
                        defaultValue=""
                      >
                        <option disabled value="">
                          Select Industry
                        </option>
                        <option value="medical">
                          Medical & Healthcare
                        </option>
                        <option value="dental">
                          Dental
                        </option>
                        <option value="legal">
                          Legal
                        </option>
                        <option value="other">
                          Other
                        </option>
                      </select>
                    </div>
                    <div className="col-span-1 md:col-span-2">
                      <button
                        className="w-full bg-[#8CA365] hover:bg-[#7a8f57] text-white font-bold text-lg py-3 rounded-xl shadow-lg transition-transform hover:-translate-y-1 mt-4"
                        type="submit"
                      >
                        Get Started Now
                      </button>
                    </div>
                    <div className="col-span-1 md:col-span-2">
                      <p className="text-xs text-gray-400 mt-2 text-center">
                        By submitting, you agree to our Terms of Service and Privacy Policy. We maintain strict HIPAA compliance.
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Trust Bar & Credibility Strip */}
        <section
          className="w-full bg-white border-t border-b border-gray-200 py-6 md:py-8 shadow-sm relative z-20 reveal reveal-delay-2"
        >
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            {/* Screen Reader Accessibility */}
            <h4 className="sr-only">
              10,000+ businesses trust our after hours answering service · Rated 4.9/5 · $4.6B industry · HIPAA Certified
            </h4>
            {/* The Flex Layout */}
            <div
              className="flex flex-wrap justify-center md:justify-between items-center gap-y-8 md:gap-y-0 md:divide-x md:divide-gray-200"
            >
              {/* Pillar 1 (Google Reviews) */}
              <div className="flex items-center justify-center gap-3 px-4 xl:px-6 w-full sm:w-1/2 md:w-auto">
                <div className="flex items-center gap-1.5">
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      fill="#EA4335"
                    />
                  </svg>
                  <div className="flex text-yellow-400">
                    <svg
                      className="w-3 h-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                    <svg
                      className="w-3 h-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                    <svg
                      className="w-3 h-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                    <svg
                      className="w-3 h-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                    <svg
                      className="w-3 h-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                  </div>
                </div>
                <span
                  className="text-xs lg:text-sm font-bold text-gray-600 uppercase tracking-wide whitespace-nowrap"
                >
                  4.9/5 Rating
                </span>
              </div>
              {/* Pillar 2 (HIPAA) */}
              <div className="flex items-center justify-center gap-3 px-4 xl:px-6 w-full sm:w-1/2 md:w-auto">
                <svg
                  className="text-[#8CA365] w-6 h-6 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
                <span
                  className="text-xs lg:text-sm font-bold text-gray-600 uppercase tracking-wide whitespace-nowrap"
                >
                  HIPAA Certified
                </span>
              </div>
              {/* Pillar 3 (US-Based) */}
              <div className="flex items-center justify-center gap-3 px-4 xl:px-6 w-full sm:w-1/2 md:w-auto">
                <span className="text-2xl leading-none">
                  🇺🇸
                </span>
                <span
                  className="text-xs lg:text-sm font-bold text-gray-600 uppercase tracking-wide whitespace-nowrap"
                >
                  100% US-Based
                </span>
              </div>
              {/* Pillar 4 (BBB Accreditation) */}
              <div className="flex items-center justify-center gap-3 px-4 xl:px-6 w-full sm:w-1/2 md:w-auto">
                <svg
                  className="grayscale opacity-70 w-6 h-6 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z"
                  />
                </svg>
                <span
                  className="text-xs lg:text-sm font-bold text-gray-600 uppercase tracking-wide whitespace-nowrap"
                >
                  A+ Accredited
                </span>
              </div>
              {/* Pillar 5 (Industry Authority) */}
              <div className="flex items-center justify-center gap-3 px-4 xl:px-6 w-full sm:w-1/2 md:w-auto">
                <svg
                  className="text-[#8CA365] w-6 h-6 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
                <span
                  className="text-xs lg:text-sm font-bold text-gray-600 uppercase tracking-wide whitespace-nowrap"
                >
                  Leading the $4.6B+ Industry
                </span>
              </div>
            </div>
          </div>
        </section>
        {/* FEATURED SNIPPET & COMPARISON SECTION */}
        <section className="bg-slate-50 py-24 px-4 border-y border-gray-200 relative z-10">
          <div className="max-w-7xl mx-auto flex flex-col gap-16">
            {/* Block 1: The Featured Snippet Box (Top) */}
            <div
              className="bg-white rounded-3xl p-8 md:p-12 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] border-l-8 border-[#8CA365] max-w-4xl mx-auto w-full relative reveal"
            >
              {/* Subtle quote/definition SVG watermark */}
              <svg
                className="absolute top-6 right-6 w-16 h-16 text-slate-100 pointer-events-none"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"
                />
              </svg>
              <h2
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#34414A] mb-6 leading-tight relative z-10"
              >
                What Is a Medical Answering Service — And Why Every Healthcare Practice Needs One
              </h2>
              <p
                className="text-gray-700 text-lg leading-relaxed font-medium relative z-10"
                id="definition-text"
              >
                A medical answering service is a specialized, HIPAA-compliant call handling solution designed specifically for healthcare providers. Highly trained receptionists securely manage patient inquiries, schedule appointments, and dispatch urgent medical emergencies to on-call physicians 24/7. By utilizing encrypted communication channels, these services protect sensitive PHI while ensuring clinics never miss a new patient opportunity or critical after-hours call.
              </p>
            </div>
            {/* Block 3: The 3-Way Comparison Grid (Bottom) */}
            <div className="reveal reveal-delay-2">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
                {/* Card 1 (Medical vs Regular) */}
                <div
                  className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-shadow flex flex-col relative"
                >
                  <h3 className="text-xl font-bold text-[#34414A] mb-4" id="compare-regular">
                    Medical answering service vs. regular answering service — what makes one HIPAA-safe
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed font-medium">
                    Using a generic answering service for patient calls creates severe HIPAA liability. Regular services route messages via unencrypted SMS or email, risking massive fines. A true medical answering service utilizes encrypted messaging portals, BAA agreements, and operators specifically trained in PHI compliance, ensuring total data security.
                  </p>
                </div>
                {/* Card 2 (Medical vs In-House) */}
                <div
                  className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-shadow flex flex-col relative"
                >
                  <h3 className="text-xl font-bold text-[#34414A] mb-4" id="compare-inhouse">
                    Medical answering service vs. in-house receptionist — the true cost comparison
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed font-medium">
                    A full-time in-house medical receptionist averages over $42,000 per year in salary, not including benefits, PTO, and training costs. In contrast, a 24/7 medical answering service starts at just a fraction of that cost per month. You get round-the-clock coverage without the overhead of additional W2 employees.
                  </p>
                </div>
                {/* Card 3 (Medical vs AI) */}
                <div
                  className="bg-gradient-to-b from-[#8CA365]/10 to-white rounded-2xl p-8 border-2 border-[#8CA365] shadow-lg transform lg:-translate-y-2 flex flex-col relative overflow-hidden"
                >
                  <div
                    className="absolute top-0 right-0 bg-[#8CA365] text-white text-[10px] font-bold px-3 py-1 uppercase rounded-bl-lg"
                  >
                    Patient Preference
                  </div>
                  <h3 className="text-xl font-bold text-[#34414A] mb-4" id="compare-ai">
                    Medical answering service vs. AI bot — why 71% of patients still want a human voice
                  </h3>
                  <p className="text-gray-800 text-sm leading-relaxed font-medium">
                    While automation is trendy, healthcare is personal. According to recent industry surveys (like those cited by WellReceived), 71% of patients strongly prefer speaking to a real person, and 29% would immediately hang up on an AI bot. Live human empathy secures patient trust and prevents them from calling a competitor.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* DUAL PERSONA SECTION */}
        <section className="w-full bg-[#0f2925] py-24 px-4 relative overflow-hidden">
          {/* Premium Colorful Mesh Gradient Background */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            {/* Glowing Orb 1 (Brand Green) */}
            <div
              className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-[#8CA365]/40 rounded-full blur-[120px] pointer-events-none"
            >
            </div>
            {/* Glowing Orb 2 (Bright Mint) */}
            <div
              className="absolute bottom-0 -right-20 w-[700px] h-[700px] bg-[#00cc7a]/20 rounded-full blur-[150px] pointer-events-none"
            >
            </div>
            {/* Glowing Orb 3 (Deep Teal) */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#215153]/60 rounded-full blur-[120px] pointer-events-none"
            >
            </div>
          </div>
          <div className="max-w-7xl mx-auto relative z-10">
            {/* Header Section */}
            <h2
              className="block text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-16 max-w-4xl mx-auto leading-tight reveal"
            >
              Why Doctors, Nurses, and Practice Managers Choose Our Medical Answering Service
            </h2>
            {/* 3-Persona Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 reveal reveal-delay-1">
              {/* Persona 1: Physicians */}
              <div
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors flex flex-col"
              >
                <div
                  className="w-14 h-14 rounded-2xl bg-[#8CA365]/20 flex items-center justify-center text-[#8CA365] mb-6"
                >
                  <svg
                    className="w-7 h-7"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 leading-snug">
                  For physicians and clinical staff — no more urgent calls interrupting patient care
                </h3>
                <p className="text-blue-100/80 text-base leading-relaxed flex-grow font-medium">
                  The primary pain point for any physician is being interrupted during an appointment by a call that could have waited. Our medical answering service expertly screens and triages every caller, ensuring you only receive immediate escalations for true clinical emergencies, while routine inquiries are logged securely for later review.
                </p>
              </div>
              {/* Persona 2: Practice Managers */}
              <div
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors flex flex-col"
              >
                <div
                  className="w-14 h-14 rounded-2xl bg-[#8CA365]/20 flex items-center justify-center text-[#8CA365] mb-6"
                >
                  <svg
                    className="w-7 h-7"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 leading-snug">
                  For practice managers and administrators — zero compliance risk, full call visibility
                </h3>
                <p className="text-blue-100/80 text-base leading-relaxed flex-grow font-medium">
                  Administrators need to protect the practice from HIPAA liability while maintaining total oversight of after-hours activity. We provide 100% HIPAA-compliant message routing via encrypted portals, backed by a Business Associate Agreement (BAA), giving you complete, secure visibility into every patient interaction without the administrative headache.
                </p>
              </div>
              {/* Persona 3: Patients */}
              <div
                className="bg-[#8CA365] border border-[#8CA365] rounded-3xl p-8 shadow-[0_15px_40px_-10px_rgba(140,163,101,0.5)] transform lg:-translate-y-4 flex flex-col relative overflow-hidden"
              >
                <div
                  className="absolute top-0 right-0 bg-white text-[#8CA365] text-[10px] font-bold px-3 py-1 uppercase rounded-bl-lg"
                >
                  Patient Experience
                </div>
                <div
                  className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center text-white mb-6"
                >
                  <svg
                    className="w-7 h-7"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 leading-snug">
                  For patients — always a real person, never a voicemail, on every call
                </h3>
                <p className="text-green-50 text-base leading-relaxed flex-grow font-medium">
                  When a patient calls your office with a health concern, the last thing they want is a confusing AI menu or a cold voicemail machine. We guarantee they are greeted by a warm, empathetic, live human being 24/7. This dramatically increases patient satisfaction, reduces anxiety, and builds unwavering trust in your healthcare practice.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* CORE FEATURES — MEDICAL-SPECIFIC SERVICE GRID */}
        <section className="w-full bg-[#8CA365] py-24 px-4 relative overflow-hidden">
          {/* Subtle dot pattern overlay */}
          <div
            className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"
          >
          </div>
          <div className="max-w-7xl mx-auto relative z-10">
            {/* Header Section */}
            <h2
              className="block text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-6 max-w-4xl mx-auto leading-tight reveal drop-shadow-md"
            >
              Medical Answering Service Features — HIPAA-Compliant from the Very First Call
            </h2>
            <p
              className="text-green-50/90 text-center mb-16 max-w-2xl mx-auto text-lg leading-relaxed reveal reveal-delay-1"
            >
              Every feature is purpose-built for healthcare. No generic call center add-ons — just compliant, clinical-grade call management designed around how medical practices actually operate.
            </p>
            {/* The 4x2 Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 reveal reveal-delay-2">
              {/* Feature 1 */}
              <div
                className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 relative overflow-hidden group hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div
                  className="absolute top-0 left-0 w-full h-1 bg-[#8CA365] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"
                >
                </div>
                <div
                  className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center text-[#8CA365] mb-5 group-hover:-translate-y-1 transition-transform duration-300"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <h3 className="text-base font-bold text-[#34414A] mb-3 leading-snug">
                  24/7 live HIPAA-trained receptionist answering — nights, weekends, holidays
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm flex-grow">
                  Your patients reach a live, HIPAA-certified receptionist on every call — including overnight, weekends, and all federal holidays. No voicemail, no AI gatekeepers, ever.
                </p>
              </div>
              {/* Feature 2 */}
              <div
                className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 relative overflow-hidden group hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div
                  className="absolute top-0 left-0 w-full h-1 bg-[#8CA365] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"
                >
                </div>
                <div
                  className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center text-red-500 mb-5 group-hover:-translate-y-1 transition-transform duration-300"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <div
                  className="absolute top-5 right-5 bg-red-50 text-red-600 text-[9px] font-bold px-2 py-0.5 uppercase rounded tracking-wider border border-red-100"
                >
                  Critical
                </div>
                <h3 className="text-base font-bold text-[#34414A] mb-3 leading-snug">
                  After-hours physician on-call routing with urgency triage protocols
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm flex-grow">
                  True emergencies are instantly routed to the on-call physician via your preferred method. Routine calls are held securely until the next business day — no unnecessary midnight wake-ups.
                </p>
              </div>
              {/* Feature 3 */}
              <div
                className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 relative overflow-hidden group hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div
                  className="absolute top-0 left-0 w-full h-1 bg-[#8CA365] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"
                >
                </div>
                <div
                  className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center text-[#8CA365] mb-5 group-hover:-translate-y-1 transition-transform duration-300"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <h3 className="text-base font-bold text-[#34414A] mb-3 leading-snug">
                  New patient intake — secure PHI collection compliant with HIPAA Privacy Rule
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm flex-grow">
                  We capture new patient demographics, insurance information, and chief complaints securely — so your front desk starts each morning with intake records already in queue.
                </p>
              </div>
              {/* Feature 4 */}
              <div
                className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 relative overflow-hidden group hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div
                  className="absolute top-0 left-0 w-full h-1 bg-[#8CA365] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"
                >
                </div>
                <div
                  className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center text-[#8CA365] mb-5 group-hover:-translate-y-1 transition-transform duration-300"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <h3 className="text-base font-bold text-[#34414A] mb-3 leading-snug">
                  Appointment scheduling integrated with your practice management system
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm flex-grow">
                  Direct integration with your existing PMS or EHR platform means appointments are booked in real-time — eliminating double-bookings and manual data entry for your staff.
                </p>
              </div>
              {/* Feature 5 */}
              <div
                className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 relative overflow-hidden group hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div
                  className="absolute top-0 left-0 w-full h-1 bg-[#8CA365] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"
                >
                </div>
                <div
                  className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center text-[#8CA365] mb-5 group-hover:-translate-y-1 transition-transform duration-300"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <h3 className="text-base font-bold text-[#34414A] mb-3 leading-snug">
                  Encrypted secure message delivery — no standard email, no unencrypted SMS
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm flex-grow">
                  Every patient message is delivered through HIPAA-compliant encrypted portals — never via standard email or unprotected text. Your practice stays in full regulatory compliance.
                </p>
              </div>
              {/* Feature 6 */}
              <div
                className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 relative overflow-hidden group hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div
                  className="absolute top-0 left-0 w-full h-1 bg-[#8CA365] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"
                >
                </div>
                <div
                  className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center text-[#8CA365] mb-5 group-hover:-translate-y-1 transition-transform duration-300"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <h3 className="text-base font-bold text-[#34414A] mb-3 leading-snug">
                  Bilingual medical answering — English and Spanish for diverse patient populations
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm flex-grow">
                  Serve your entire patient base without language barriers. Our bilingual receptionists communicate fluently in English and Spanish, ensuring every caller feels heard and understood.
                </p>
              </div>
              {/* Feature 7 */}
              <div
                className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 relative overflow-hidden group hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div
                  className="absolute top-0 left-0 w-full h-1 bg-[#8CA365] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"
                >
                </div>
                <div
                  className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center text-amber-500 mb-5 group-hover:-translate-y-1 transition-transform duration-300"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <h3 className="text-base font-bold text-[#34414A] mb-3 leading-snug">
                  Daytime call overflow answering for busy clinic hours
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm flex-grow">
                  Don't just use us after hours. During peak clinic hours when your front desk is overwhelmed, our overflow answering seamlessly catches every call your staff can't pick up.
                </p>
              </div>
              {/* Feature 8 */}
              <div
                className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 relative overflow-hidden group hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div
                  className="absolute top-0 left-0 w-full h-1 bg-[#8CA365] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"
                >
                </div>
                <div
                  className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center text-[#8CA365] mb-5 group-hover:-translate-y-1 transition-transform duration-300"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <h3 className="text-base font-bold text-[#34414A] mb-3 leading-snug">
                  Full HIPAA-compliant audit trail — every patient interaction logged for compliance review
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm flex-grow">
                  Every call, message, and escalation is time-stamped and securely logged. When auditors come knocking, you'll have a complete, exportable record of every patient interaction.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* HOW IT WORKS — MEDICAL SETUP PROCESS */}
        <section className="bg-gray-50 py-24 md:py-32 px-4 relative overflow-hidden">
          {/* Subtle dot background */}
          <div
            className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-60 pointer-events-none"
          >
          </div>
          <div className="max-w-7xl mx-auto relative z-10">
            {/* Section Header */}
            <div className="text-center mb-16 reveal">
              <span
                className="inline-flex items-center gap-2 bg-[#8CA365]/10 text-[#8CA365] text-xs font-bold px-4 py-2 rounded-full border border-[#8CA365]/20 uppercase tracking-widest mb-5"
              >
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
                Setup in 24 Hours
              </span>
              <h2
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#34414A] mb-6 leading-tight max-w-4xl mx-auto"
              >
                How Our Medical Answering Service Works — HIPAA-Compliant Setup in 24 Hours
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
                No complex IT integration. No lengthy onboarding. Your practice is live and fully covered in under a day.
              </p>
            </div>
            {/* 4-Step Process */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16 reveal reveal-delay-1">
              {/* Step 1 */}
              <div
                className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex gap-6 items-start group"
              >
                <div
                  className="flex-shrink-0 w-14 h-14 rounded-2xl bg-[#8CA365] text-white font-black text-xl flex items-center justify-center shadow-[0_8px_20px_rgba(140,163,101,0.35)] group-hover:scale-105 transition-transform duration-300"
                >
                  01
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#34414A] mb-3 leading-snug">
                    Sign your HIPAA Business Associate Agreement — legally binding, takes 5 minutes
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Before a single call is answered, you receive and execute a fully compliant BAA. This legally protects your practice and establishes our obligations as a HIPAA-covered business associate. Digital signature — done in 5 minutes.
                  </p>
                </div>
              </div>
              {/* Step 2 */}
              <div
                className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex gap-6 items-start group"
              >
                <div
                  className="flex-shrink-0 w-14 h-14 rounded-2xl bg-[#34414A] text-white font-black text-xl flex items-center justify-center shadow-[0_8px_20px_rgba(52,65,74,0.25)] group-hover:scale-105 transition-transform duration-300"
                >
                  02
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#34414A] mb-3 leading-snug">
                    We configure your medical call script and on-call routing protocols
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Our onboarding team works with you to build a custom call script using your practice's exact terminology, preferred greetings, and tiered on-call escalation rules — so receptionists sound like a natural extension of your staff from day one.
                  </p>
                </div>
              </div>
              {/* Step 3 */}
              <div
                className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex gap-6 items-start group"
              >
                <div
                  className="flex-shrink-0 w-14 h-14 rounded-2xl bg-[#34414A] text-white font-black text-xl flex items-center justify-center shadow-[0_8px_20px_rgba(52,65,74,0.25)] group-hover:scale-105 transition-transform duration-300"
                >
                  03
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#34414A] mb-3 leading-snug">
                    Forward your practice number — our receptionists answer as your medical office
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    A simple call forward from your existing number is all it takes. Your patients will never know the difference — our receptionists answer using your practice's name, following your exact protocols, seamlessly and professionally.
                  </p>
                </div>
              </div>
              {/* Step 4 */}
              <div
                className="bg-gradient-to-br from-[#8CA365]/10 to-white rounded-2xl p-8 border-2 border-[#8CA365] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex gap-6 items-start group relative overflow-hidden"
              >
                <div
                  className="absolute top-0 right-0 bg-[#8CA365] text-white text-[9px] font-bold px-3 py-1 uppercase rounded-bl-lg tracking-wider"
                >
                  You're Live!
                </div>
                <div
                  className="flex-shrink-0 w-14 h-14 rounded-2xl bg-[#8CA365] text-white font-black text-xl flex items-center justify-center shadow-[0_8px_20px_rgba(140,163,101,0.35)] group-hover:scale-105 transition-transform duration-300"
                >
                  04
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#34414A] mb-3 leading-snug">
                    Receive encrypted, HIPAA-compliant message summaries after every patient call
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    The moment a call concludes, a full encrypted summary arrives in your secure portal — caller name, reason for contact, urgency level, and any action items. Complete patient interaction history available 24/7 for compliance review.
                  </p>
                </div>
              </div>
            </div>
            {/* Audio Call Sample Block */}
            <div
              className="max-w-3xl mx-auto bg-[#0B1F3A] rounded-2xl p-8 flex flex-col md:flex-row gap-6 items-center shadow-xl reveal reveal-delay-2"
            >
              <div
                className="flex-shrink-0 w-16 h-16 rounded-full bg-[#8CA365] flex items-center justify-center shadow-[0_0_0_6px_rgba(140,163,101,0.2)]"
              >
                <svg
                  className="w-7 h-7 text-white translate-x-0.5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <div className="flex-grow text-center md:text-left">
                <p className="text-white font-bold text-lg mb-1">
                  🎧 Listen to a Medical Call Sample
                </p>
                <p className="text-blue-200/80 text-sm mb-4">
                  Hear exactly how our HIPAA-trained receptionist greets and handles a patient call on behalf of your medical practice.
                </p>
                <audio
                  className="w-full max-w-md rounded-lg accent-[#8CA365]"
                  controls
                  style={{ height: "40px" }}
                >
                  <source src="#" type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              </div>
              <div className="hidden md:block flex-shrink-0 text-right">
                <span
                  className="inline-block bg-white/10 text-white text-xs font-semibold px-3 py-1.5 rounded-lg border border-white/20"
                >
                  Real Call · No Actors
                </span>
              </div>
            </div>
          </div>
        </section>
        {/* MEDICAL SPECIALTIES SERVED — VERTICAL SEO SILO */}
        <section className="w-full bg-[#0f2925] py-24 px-4 relative overflow-hidden">
          {/* Premium Colorful Mesh Gradient Background */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            {/* Glowing Orb 1 (Brand Green) */}
            <div
              className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-[#8CA365]/40 rounded-full blur-[120px] pointer-events-none"
            >
            </div>
            {/* Glowing Orb 2 (Bright Mint) */}
            <div
              className="absolute bottom-0 -right-20 w-[700px] h-[700px] bg-[#00cc7a]/20 rounded-full blur-[150px] pointer-events-none"
            >
            </div>
            {/* Glowing Orb 3 (Deep Teal) */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#215153]/60 rounded-full blur-[120px] pointer-events-none"
            >
            </div>
          </div>
          {/* Ambient glow accents */}
          <div
            className="absolute top-0 left-1/4 w-96 h-96 bg-[#8CA365]/10 rounded-full blur-3xl pointer-events-none"
          >
          </div>
          <div
            className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#8CA365]/8 rounded-full blur-3xl pointer-events-none"
          >
          </div>
          <div className="max-w-7xl mx-auto relative z-10">
            {/* Section Header */}
            <div className="text-center mb-16 reveal">
              <span
                className="inline-flex items-center gap-2 bg-[#8CA365]/20 text-[#8CA365] text-xs font-bold px-4 py-2 rounded-full border border-[#8CA365]/30 uppercase tracking-widest mb-5"
              >
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
                All Specialties Covered
              </span>
              <h2
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight max-w-4xl mx-auto"
              >
                Medical Answering Service for Every Specialty — Trained for Your Practice Type
              </h2>
              <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
                Our receptionists aren't generalists. They're trained in the specific terminology, patient needs, and escalation protocols of your exact medical specialty.
              </p>
            </div>
            {/* Specialties Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 reveal reveal-delay-1">
              {/* Specialty 1: Primary Care */}
              <Link prefetch={false}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-7 hover:bg-white/10 hover:border-[#8CA365]/50 hover:-translate-y-1 transition-all duration-300 flex gap-5 items-start"
                href="/medical-answering-service"
              >
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#8CA365]/20 flex items-center justify-center text-[#8CA365] group-hover:bg-[#8CA365]/30 transition-colors duration-300"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <div>
                  <h3
                    className="text-base font-bold text-white mb-2 leading-snug group-hover:text-[#8CA365] transition-colors duration-200"
                  >
                    Medical answering service for primary care physicians & family medicine
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Same-day appointment booking, prescription refill message routing, and 24/7 after-hours coverage for high-volume family practices.
                  </p>
                  <span
                    className="inline-flex items-center gap-1 text-[#8CA365] text-xs font-semibold mt-3 group-hover:gap-2 transition-all duration-200"
                  >
                    Learn more
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9 5l7 7-7 7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                  </span>
                </div>
              </Link>
              {/* Specialty 2: Mental Health */}
              <Link prefetch={false}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-7 hover:bg-white/10 hover:border-[#8CA365]/50 hover:-translate-y-1 transition-all duration-300 flex gap-5 items-start"
                href="/medical-answering-service"
              >
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#8CA365]/20 flex items-center justify-center text-[#8CA365] group-hover:bg-[#8CA365]/30 transition-colors duration-300"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <div>
                  <h3
                    className="text-base font-bold text-white mb-2 leading-snug group-hover:text-[#8CA365] transition-colors duration-200"
                  >
                    Medical answering service for mental health & behavioral health practices
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Empathetic, trauma-informed call handling with crisis escalation protocols. Protecting patient privacy for therapists, psychiatrists, and counselors.
                  </p>
                  <span
                    className="inline-flex items-center gap-1 text-[#8CA365] text-xs font-semibold mt-3 group-hover:gap-2 transition-all duration-200"
                  >
                    Learn more
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9 5l7 7-7 7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                  </span>
                </div>
              </Link>
              {/* Specialty 3: Dental */}
              <Link prefetch={false}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-7 hover:bg-white/10 hover:border-[#8CA365]/50 hover:-translate-y-1 transition-all duration-300 flex gap-5 items-start"
                href="/medical-answering-service"
              >
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#8CA365]/20 flex items-center justify-center text-[#8CA365] group-hover:bg-[#8CA365]/30 transition-colors duration-300"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <div>
                  <h3
                    className="text-base font-bold text-white mb-2 leading-snug group-hover:text-[#8CA365] transition-colors duration-200"
                  >
                    Medical answering service for dentists & dental practices
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Dental emergency triage, appointment scheduling, and patient recall management. Capture every new patient inquiry — even after the office closes.
                  </p>
                  <span
                    className="inline-flex items-center gap-1 text-[#8CA365] text-xs font-semibold mt-3 group-hover:gap-2 transition-all duration-200"
                  >
                    Learn more
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9 5l7 7-7 7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                  </span>
                </div>
              </Link>
              {/* Specialty 4: Urgent Care */}
              <Link prefetch={false}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-7 hover:bg-white/10 hover:border-red-400/40 hover:-translate-y-1 transition-all duration-300 flex gap-5 items-start relative"
                href="/medical-answering-service"
              >
                <div
                  className="absolute top-4 right-4 bg-red-500/20 text-red-400 text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-wider border border-red-400/20"
                >
                  High Volume
                </div>
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center text-red-400 group-hover:bg-red-500/30 transition-colors duration-300"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <div>
                  <h3
                    className="text-base font-bold text-white mb-2 leading-snug group-hover:text-[#8CA365] transition-colors duration-200"
                  >
                    Medical answering service for urgent care & emergency clinics
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    High-volume overflow answering, wait-time communication, and after-hours symptom triage routing — keeping your urgent care lines moving efficiently.
                  </p>
                  <span
                    className="inline-flex items-center gap-1 text-[#8CA365] text-xs font-semibold mt-3 group-hover:gap-2 transition-all duration-200"
                  >
                    Learn more
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9 5l7 7-7 7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                  </span>
                </div>
              </Link>
              {/* Specialty 5: OB-GYN / Cardiology / Specialists */}
              <Link prefetch={false}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-7 hover:bg-white/10 hover:border-[#8CA365]/50 hover:-translate-y-1 transition-all duration-300 flex gap-5 items-start"
                href="/medical-answering-service"
              >
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#8CA365]/20 flex items-center justify-center text-[#8CA365] group-hover:bg-[#8CA365]/30 transition-colors duration-300"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <div>
                  <h3
                    className="text-base font-bold text-white mb-2 leading-snug group-hover:text-[#8CA365] transition-colors duration-200"
                  >
                    Medical answering service for OB-GYN, cardiology & specialist practices
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Specialists demand precise, clinically literate call handling. Our receptionists are trained in your specialty's terminology, urgency thresholds, and referral workflows.
                  </p>
                  <span
                    className="inline-flex items-center gap-1 text-[#8CA365] text-xs font-semibold mt-3 group-hover:gap-2 transition-all duration-200"
                  >
                    Learn more
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9 5l7 7-7 7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                  </span>
                </div>
              </Link>
              {/* Specialty 6: Hospitals & Health Groups */}
              <Link prefetch={false}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-7 hover:bg-white/10 hover:border-[#8CA365]/50 hover:-translate-y-1 transition-all duration-300 flex gap-5 items-start"
                href="/medical-answering-service"
              >
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#8CA365]/20 flex items-center justify-center text-[#8CA365] group-hover:bg-[#8CA365]/30 transition-colors duration-300"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <div>
                  <h3
                    className="text-base font-bold text-white mb-2 leading-snug group-hover:text-[#8CA365] transition-colors duration-200"
                  >
                    Medical answering service for hospitals & multi-provider health groups
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Enterprise-grade call routing across multiple departments and physician groups. Centralized overflow management for hospital networks and large health organizations.
                  </p>
                  <span
                    className="inline-flex items-center gap-1 text-[#8CA365] text-xs font-semibold mt-3 group-hover:gap-2 transition-all duration-200"
                  >
                    Learn more
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9 5l7 7-7 7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                  </span>
                </div>
              </Link>
              {/* Specialty 7: Chiro / PT / Allied Health — Full width on last row */}
              <Link prefetch={false}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-7 hover:bg-white/10 hover:border-[#8CA365]/50 hover:-translate-y-1 transition-all duration-300 flex gap-5 items-start md:col-span-2 lg:col-span-1"
                href="/medical-answering-service"
              >
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#8CA365]/20 flex items-center justify-center text-[#8CA365] group-hover:bg-[#8CA365]/30 transition-colors duration-300"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <div>
                  <h3
                    className="text-base font-bold text-white mb-2 leading-snug group-hover:text-[#8CA365] transition-colors duration-200"
                  >
                    Medical answering service for chiropractors, physical therapists & allied health
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    New patient intake, appointment reminders, insurance verification calls, and cancellation management — purpose-built for high-schedule allied health clinics.
                  </p>
                  <span
                    className="inline-flex items-center gap-1 text-[#8CA365] text-xs font-semibold mt-3 group-hover:gap-2 transition-all duration-200"
                  >
                    Learn more
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9 5l7 7-7 7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                  </span>
                </div>
              </Link>
            </div>
            {/* Bottom CTA strip */}
            <div className="mt-12 text-center reveal reveal-delay-2">
              <p className="text-slate-400 text-sm mb-4">
                Don't see your specialty? We cover
                <span className="text-white font-semibold">
                  all licensed medical practices
                </span>
                across the United States.
              </p>
              <a
                className="inline-flex items-center gap-2 bg-[#8CA365] hover:bg-[#7a8f57] text-white font-bold px-7 py-3.5 rounded-xl shadow-[0_8px_20px_rgba(140,163,101,0.3)] transition-all hover:-translate-y-0.5"
                href="#hero-form"
              >
                Check if We Serve Your Specialty →
              </a>
            </div>
          </div>
        </section>
        {/* MEASURABLE OUTCOMES — ROI & RESULTS SECTION */}
        <section className="bg-white py-24 md:py-32 px-4 relative overflow-hidden">
          {/* Subtle background texture */}
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute inset-0"
              style={{ backgroundImage: "radial-gradient(#e5e7eb 1.5px, transparent 1.5px)", backgroundSize: "28px 28px" }}
            >
            </div>
            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white to-transparent">
            </div>
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent">
            </div>
          </div>
          <div className="max-w-7xl mx-auto relative z-10">
            {/* Section Header */}
            <div className="text-center mb-16 reveal">
              <span
                className="inline-flex items-center gap-2 bg-amber-50 text-amber-700 text-xs font-bold px-4 py-2 rounded-full border border-amber-200 uppercase tracking-widest mb-5"
              >
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
                Proven ROI
              </span>
              <h2
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#34414A] mb-6 leading-tight max-w-4xl mx-auto"
              >
                Measurable Outcomes for Your Medical Practice — What Changes When You Switch
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
                These aren't projections. These are the measurable, data-backed results medical practices experience after switching to our HIPAA-compliant answering service.
              </p>
            </div>
            {/* 3-Stat Outcome Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 reveal reveal-delay-1">
              {/* Outcome 1: Zero Missed Calls */}
              <div
                className="bg-gradient-to-br from-[#8CA365]/5 to-white rounded-3xl p-8 md:p-10 border border-[#8CA365]/20 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col text-center relative overflow-hidden group"
              >
                {/* Animated ring accent */}
                <div
                  className="absolute -top-12 -right-12 w-40 h-40 rounded-full border-[20px] border-[#8CA365]/5 group-hover:border-[#8CA365]/10 transition-colors duration-500 pointer-events-none"
                >
                </div>
                <div className="relative z-10">
                  <div
                    className="text-6xl md:text-7xl font-black text-[#8CA365] mb-2 tracking-tighter leading-none"
                  >
                    0
                  </div>
                  <p className="text-sm font-bold text-[#8CA365] uppercase tracking-widest mb-6">
                    Missed Patient Calls
                  </p>
                  <h3 className="text-lg font-bold text-[#34414A] mb-4 leading-snug">
                    Zero missed patient calls — what that means for appointment volume and revenue
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Every unanswered patient call is a lost appointment worth an average of $150–$400 to your practice. With 24/7 live answering, you capture 100% of inbound calls — converting after-hours inquiries into booked appointments and protecting your revenue stream around the clock.
                  </p>
                </div>
              </div>
              {/* Outcome 2: $38K Savings */}
              <div
                className="bg-gradient-to-br from-amber-50/50 to-white rounded-3xl p-8 md:p-10 border border-amber-200/50 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col text-center relative overflow-hidden group"
              >
                {/* Animated ring accent */}
                <div
                  className="absolute -top-12 -right-12 w-40 h-40 rounded-full border-[20px] border-amber-100/50 group-hover:border-amber-200/50 transition-colors duration-500 pointer-events-none"
                >
                </div>
                <div className="relative z-10">
                  <div
                    className="text-5xl md:text-6xl font-black text-amber-600 mb-2 tracking-tighter leading-none"
                  >
                    $38K
                  </div>
                  <p className="text-sm font-bold text-amber-600 uppercase tracking-widest mb-6">
                    Average Annual Savings
                  </p>
                  <h3 className="text-lg font-bold text-[#34414A] mb-4 leading-snug">
                    Average cost saving: $38,000/year vs. a full-time in-house medical receptionist
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    A full-time in-house medical receptionist averages $42,000/year in salary alone — before benefits, PTO, training, and turnover costs. Our medical answering service delivers superior 24/7 coverage at a fraction of that overhead, saving the average practice over $38,000 annually.
                  </p>
                </div>
              </div>
              {/* Outcome 3: 71% Patient Preference */}
              <div
                className="bg-gradient-to-br from-[#0B1F3A]/5 to-white rounded-3xl p-8 md:p-10 border border-[#34414A]/10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col text-center relative overflow-hidden group"
              >
                {/* Animated ring accent */}
                <div
                  className="absolute -top-12 -right-12 w-40 h-40 rounded-full border-[20px] border-[#34414A]/5 group-hover:border-[#34414A]/10 transition-colors duration-500 pointer-events-none"
                >
                </div>
                <div className="relative z-10">
                  <div
                    className="text-6xl md:text-7xl font-black text-[#34414A] mb-2 tracking-tighter leading-none"
                  >
                    71%
                  </div>
                  <p className="text-sm font-bold text-[#34414A] uppercase tracking-widest mb-6">
                    Prefer a Human Voice
                  </p>
                  <h3 className="text-lg font-bold text-[#34414A] mb-4 leading-snug">
                    Patient satisfaction: 71% of patients prefer a live human on their first call — not a bot
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    According to patient-preference research (as cited by WellReceived), 71% of patients strongly prefer speaking to a real person when calling a medical office, and 29% would hang up immediately on an AI bot. Live human answering directly drives higher patient retention, satisfaction scores, and first-call resolution rates.
                  </p>
                </div>
              </div>
            </div>
            {/* Bottom conversion strip */}
            <div
              className="mt-14 bg-[#0B1F3A] rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 reveal reveal-delay-2"
            >
              <div className="flex-grow text-center md:text-left">
                <p className="text-white font-bold text-xl mb-2">
                  See what your practice could save
                </p>
                <p className="text-blue-200/70 text-sm">
                  Get a personalized ROI estimate based on your call volume, specialty, and hours of coverage needed.
                </p>
              </div>
              <a
                className="flex-shrink-0 bg-[#8CA365] hover:bg-[#7a8f57] text-white font-bold px-8 py-4 rounded-xl shadow-[0_8px_20px_rgba(140,163,101,0.3)] transition-all hover:-translate-y-0.5 whitespace-nowrap"
                href="#hero-form"
              >
                Calculate My Savings →
              </a>
            </div>
          </div>
        </section>
        {/* HIPAA COMPLIANCE & SECURITY CROSS-REFERENCE */}
        <section className="w-full bg-[#0f2925] py-24 md:py-32 px-4 relative overflow-hidden">
          {/* Premium Colorful Mesh Gradient Background */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            {/* Glowing Orb 1 (Brand Green) */}
            <div
              className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-[#8CA365]/40 rounded-full blur-[120px] pointer-events-none"
            >
            </div>
            {/* Glowing Orb 2 (Bright Mint) */}
            <div
              className="absolute bottom-0 -right-20 w-[700px] h-[700px] bg-[#00cc7a]/20 rounded-full blur-[150px] pointer-events-none"
            >
            </div>
            {/* Glowing Orb 3 (Deep Teal) */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#215153]/60 rounded-full blur-[120px] pointer-events-none"
            >
            </div>
          </div>
          {/* Security grid pattern overlay */}
          <div
            className="absolute inset-0 bg-[linear-gradient(rgba(140,163,101,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(140,163,101,0.03)_1px,transparent_1px)] [background-size:48px_48px] pointer-events-none"
          >
          </div>
          {/* Ambient glow */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#8CA365]/5 rounded-full blur-[120px] pointer-events-none"
          >
          </div>
          <div className="max-w-7xl mx-auto relative z-10">
            {/* Section Header */}
            <div className="text-center mb-16 reveal">
              <span
                className="inline-flex items-center gap-2 bg-green-500/10 text-green-400 text-xs font-bold px-4 py-2 rounded-full border border-green-500/20 uppercase tracking-widest mb-5"
              >
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
                HIPAA Secured
              </span>
              <h2
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight max-w-4xl mx-auto"
              >
                HIPAA-Compliant Medical Answering — What Every Practice Should Know Before Choosing a Service
              </h2>
              <p className="text-blue-200/60 text-lg max-w-2xl mx-auto leading-relaxed">
                Compliance isn't a feature we bolt on — it's the foundation we build on. Here's exactly how we protect your patients, your practice, and your license.
              </p>
            </div>
            {/* 3-Pillar Compliance Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-14 reveal reveal-delay-1">
              {/* Pillar 1: Certifications */}
              <div
                className="bg-white/[0.04] backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-10 hover:bg-white/[0.07] transition-all duration-300 flex flex-col relative group"
              >
                {/* Animated top bar */}
                <div
                  className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-[#8CA365] rounded-t-3xl scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"
                >
                </div>
                <div
                  className="w-14 h-14 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center mb-6"
                >
                  <svg
                    className="w-7 h-7 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 leading-snug">
                  Our HIPAA certifications and what they mean for your practice's compliance
                </h3>
                <p className="text-blue-100/60 text-base leading-relaxed flex-grow">
                  We maintain active HIPAA certification through rigorous annual training and third-party audits. This means every receptionist who answers your patient calls has been individually certified in PHI handling, minimum necessary standards, and breach notification protocols — ensuring your practice meets federal compliance requirements at every point of patient contact.
                </p>
                {/* Inline trust signals */}
                <div className="mt-6 pt-5 border-t border-white/10 flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-1.5 text-green-400/80 text-xs font-semibold">
                    <svg
                      className="w-3.5 h-3.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        clipRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        fillRule="evenodd"
                      />
                    </svg>
                    Annual recertification
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-green-400/80 text-xs font-semibold">
                    <svg
                      className="w-3.5 h-3.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        clipRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        fillRule="evenodd"
                      />
                    </svg>
                    Third-party audited
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-green-400/80 text-xs font-semibold">
                    <svg
                      className="w-3.5 h-3.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        clipRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        fillRule="evenodd"
                      />
                    </svg>
                    Individual-level training
                  </span>
                </div>
              </div>
              {/* Pillar 2: BAA */}
              <div
                className="bg-white/[0.04] backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-10 hover:bg-white/[0.07] transition-all duration-300 flex flex-col relative group"
              >
                <div
                  className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 to-amber-500 rounded-t-3xl scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"
                >
                </div>
                <div
                  className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-6"
                >
                  <svg
                    className="w-7 h-7 text-amber-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 leading-snug">
                  Business Associate Agreement (BAA) — signed before we answer your first patient call
                </h3>
                <p className="text-blue-100/60 text-base leading-relaxed flex-grow">
                  A signed BAA is not optional — it's a legal requirement under HIPAA for any third party handling PHI. We execute a fully compliant Business Associate Agreement before onboarding begins, formally establishing our legal obligations to safeguard your patient data. Any answering service that starts handling calls before signing a BAA is putting your practice at risk.
                </p>
                <div className="mt-6 pt-5 border-t border-white/10 flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-1.5 text-amber-400/80 text-xs font-semibold">
                    <svg
                      className="w-3.5 h-3.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        clipRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        fillRule="evenodd"
                      />
                    </svg>
                    Executed pre-onboarding
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-amber-400/80 text-xs font-semibold">
                    <svg
                      className="w-3.5 h-3.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        clipRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        fillRule="evenodd"
                      />
                    </svg>
                    Legally binding
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-amber-400/80 text-xs font-semibold">
                    <svg
                      className="w-3.5 h-3.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        clipRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        fillRule="evenodd"
                      />
                    </svg>
                    Digital signature
                  </span>
                </div>
              </div>
              {/* Pillar 3: Encrypted PHI */}
              <div
                className="bg-white/[0.04] backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-10 hover:bg-white/[0.07] transition-all duration-300 flex flex-col relative group"
              >
                <div
                  className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-t-3xl scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"
                >
                </div>
                <div
                  className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-6"
                >
                  <svg
                    className="w-7 h-7 text-cyan-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 leading-snug">
                  End-to-end encrypted PHI delivery — the technical standard behind every message
                </h3>
                <p className="text-blue-100/60 text-base leading-relaxed flex-grow">
                  Every patient message is transmitted through AES-256 encrypted channels — never via standard email, unprotected SMS, or shared fax lines. Our secure messaging portal ensures that protected health information remains fully encrypted at rest and in transit, meeting and exceeding the HIPAA Security Rule's technical safeguard requirements.
                </p>
                <div className="mt-6 pt-5 border-t border-white/10 flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-1.5 text-cyan-400/80 text-xs font-semibold">
                    <svg
                      className="w-3.5 h-3.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        clipRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        fillRule="evenodd"
                      />
                    </svg>
                    AES-256 encryption
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-cyan-400/80 text-xs font-semibold">
                    <svg
                      className="w-3.5 h-3.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        clipRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        fillRule="evenodd"
                      />
                    </svg>
                    Encrypted at rest + transit
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-cyan-400/80 text-xs font-semibold">
                    <svg
                      className="w-3.5 h-3.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        clipRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        fillRule="evenodd"
                      />
                    </svg>
                    Zero unencrypted SMS
                  </span>
                </div>
              </div>
            </div>
            {/* Cross-Reference CTA to HIPAA Page */}
            <div className="max-w-3xl mx-auto text-center reveal reveal-delay-2">
              <div
                className="bg-white/[0.04] border border-white/10 rounded-2xl p-8 md:p-10 backdrop-blur-sm"
              >
                <div className="flex justify-center mb-5">
                  <div className="w-12 h-12 rounded-full bg-[#8CA365]/20 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-[#8CA365]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                </div>
                <p className="text-white font-bold text-xl mb-3">
                  Want the full compliance deep-dive?
                </p>
                <p className="text-blue-200/60 text-sm mb-6 max-w-xl mx-auto">
                  Read our complete HIPAA compliance documentation — including our security architecture, audit procedures, and compliance certifications in full detail.
                </p>
                <Link prefetch={false}
                  className="inline-flex items-center gap-2 bg-[#8CA365] hover:bg-[#7a8f57] text-white font-bold px-8 py-4 rounded-xl shadow-[0_8px_20px_rgba(140,163,101,0.3)] transition-all hover:-translate-y-0.5"
                  href="/hipaa-compliant-answering-service"
                >
                  Read Our Full HIPAA Compliance Documentation →
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* SOCIAL PROOF — MEDICAL PROFESSIONAL TESTIMONIALS */}
        <section className="bg-stone-50 py-24 md:py-32 px-4 border-t border-gray-200">
          <div className="max-w-7xl mx-auto">
            {/* Header Section */}
            <h2
              className="block text-3xl sm:text-4xl md:text-5xl font-bold text-[#34414A] text-center mb-4 max-w-4xl mx-auto leading-tight reveal"
            >
              What Medical Practices Say After Switching to Our Answering Service
            </h2>
            <h3
              className="flex flex-col md:flex-row justify-center items-center gap-2 text-lg font-bold text-gray-600 text-center mb-16 reveal reveal-delay-1"
            >
              Rated 4.9/5 by doctors, practice managers, and healthcare administrators across the US
              <span className="flex text-yellow-400 mt-2 md:mt-0">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
              </span>
            </h3>
            {/* The 3-Column Proof Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 reveal reveal-delay-2">
              {/* Card 1 */}
              <div
                className="bg-white rounded-2xl shadow-sm border border-gray-200 flex flex-col h-full overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="p-8 lg:p-10 flex-grow relative">
                  {/* Quote Icon Watermark */}
                  <svg
                    className="absolute top-8 right-8 w-16 h-16 text-gray-50 opacity-60 z-0 pointer-events-none"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"
                    />
                  </svg>
                  <div
                    className="inline-block bg-[#8CA365]/10 text-[#8CA365] text-xs font-bold px-4 py-2 rounded-lg mb-6 uppercase tracking-wider border border-[#8CA365]/20 relative z-10"
                  >
                    Reduced after-hours interruptions by 80%
                  </div>
                  <div className="flex gap-1 text-yellow-400 mb-6 relative z-10">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-700 text-base leading-relaxed italic relative z-10">
                    "We reduced after-hours call interruptions by 80% in the first month. Before switching, I was personally fielding patient calls during dinner and on weekends. Now their HIPAA-trained team handles triage seamlessly — only true emergencies reach my on-call line. Our next HIPAA audit passed with zero findings related to call handling."
                  </p>
                </div>
                <div
                  className="bg-slate-50 border-t border-gray-100 p-6 lg:px-10 lg:py-8 flex flex-col gap-2 relative z-10"
                >
                  <span className="text-[#34414A] font-bold text-sm">
                    Dr. Sarah Chen, MD
                  </span>
                  <span className="text-gray-500 text-xs">
                    Family Medicine, 12-Provider Practice · 2 years with us
                  </span>
                  <span
                    className="inline-block bg-green-50 border border-green-200 text-green-700 text-[10px] font-bold px-2 py-1 rounded mt-2 w-max uppercase tracking-wider"
                  >
                    Family Medicine
                  </span>
                </div>
              </div>
              {/* Card 2 */}
              <div
                className="bg-white rounded-2xl shadow-sm border border-gray-200 flex flex-col h-full overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="p-8 lg:p-10 flex-grow relative">
                  {/* Quote Icon Watermark */}
                  <svg
                    className="absolute top-8 right-8 w-16 h-16 text-gray-50 opacity-60 z-0 pointer-events-none"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"
                    />
                  </svg>
                  <div
                    className="inline-block bg-[#8CA365]/10 text-[#8CA365] text-xs font-bold px-4 py-2 rounded-lg mb-6 uppercase tracking-wider border border-[#8CA365]/20 relative z-10"
                  >
                    HIPAA compliance — zero violations
                  </div>
                  <div className="flex gap-1 text-yellow-400 mb-6 relative z-10">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-700 text-base leading-relaxed italic relative z-10">
                    "As practice manager for a multi-location orthopedic group, HIPAA compliance was my biggest concern with outsourcing calls. Their team signed a BAA before day one, every message comes through an encrypted portal, and we've had zero compliance violations in 18 months. It's the most secure third-party service we use."
                  </p>
                </div>
                <div
                  className="bg-slate-50 border-t border-gray-100 p-6 lg:px-10 lg:py-8 flex flex-col gap-2 relative z-10"
                >
                  <span className="text-[#34414A] font-bold text-sm">
                    Rachel Dominguez, MHA
                  </span>
                  <span className="text-gray-500 text-xs">
                    Practice Manager, Summit Orthopedic Associates · 18 months
                  </span>
                  <span
                    className="inline-block bg-green-50 border border-green-200 text-green-700 text-[10px] font-bold px-2 py-1 rounded mt-2 w-max uppercase tracking-wider"
                  >
                    Orthopedics
                  </span>
                </div>
              </div>
              {/* Card 3 */}
              <div
                className="bg-white rounded-2xl shadow-sm border border-gray-200 flex flex-col h-full overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="p-8 lg:p-10 flex-grow relative">
                  {/* Quote Icon Watermark */}
                  <svg
                    className="absolute top-8 right-8 w-16 h-16 text-gray-50 opacity-60 z-0 pointer-events-none"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"
                    />
                  </svg>
                  <div
                    className="inline-block bg-[#8CA365]/10 text-[#8CA365] text-xs font-bold px-4 py-2 rounded-lg mb-6 uppercase tracking-wider border border-[#8CA365]/20 relative z-10"
                  >
                    35 new patients/month from after-hours calls
                  </div>
                  <div className="flex gap-1 text-yellow-400 mb-6 relative z-10">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-700 text-base leading-relaxed italic relative z-10">
                    "Since switching, we're capturing an average of 35 new patient inquiries per month that previously went to voicemail after 5 PM. The bilingual answering has been a game-changer for our diverse patient base — our Spanish-speaking patients finally feel heard. The ROI paid for the service within the first two weeks."
                  </p>
                </div>
                <div
                  className="bg-slate-50 border-t border-gray-100 p-6 lg:px-10 lg:py-8 flex flex-col gap-2 relative z-10"
                >
                  <span className="text-[#34414A] font-bold text-sm">
                    Dr. James Whitfield, DDS
                  </span>
                  <span className="text-gray-500 text-xs">
                    Owner, Whitfield Family Dentistry · 10 months with us
                  </span>
                  <span
                    className="inline-block bg-green-50 border border-green-200 text-green-700 text-[10px] font-bold px-2 py-1 rounded mt-2 w-max uppercase tracking-wider"
                  >
                    Dental Practice
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* SEO AggregateRating & Review Schema */}
        </section>
        {/* FAQ — MEDICAL ANSWERING FEATURED SNIPPETS */}
        {/* FAQ SECTION (SPLIT-PANE STYLE) */}
        <section className="bg-white py-14 sm:py-24 px-4 border-t border-gray-100" id="faq">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              <div className="lg:col-span-4 lg:sticky lg:top-24">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#34414A] leading-tight mb-6">
                  Frequently Asked Questions About Medical Answering Services
                </h2>
                <p className="text-gray-600 mb-8">
                  Everything you need to know about getting started, pricing, and how our receptionists act as an extension of your business.
                </p>
                <div className="bg-slate-50 border border-gray-200 rounded-2xl p-6">
                  <h4 className="font-bold text-[#34414A] mb-2">
                    Have a specific question?
                  </h4>
                  <p className="text-sm text-gray-600 mb-4">
                    Our team is here to help you build the perfect custom call flow.
                  </p>
                  <Link prefetch={false}
                    className="text-sm font-bold text-[#8CA365] hover:text-[#7a8f57] flex items-center gap-2"
                    href="/contact-us"
                  >
                    Contact Support
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
              {/* Right Column (The Accordion List) */}
              <div className="lg:col-span-8 flex flex-col gap-4">
              </div>
            </div>
          </div>
        </section>
        {/* FINAL CTA — PRACTICE-READY CONVERSION (3 PATHS) */}
        <section className="bg-[#0B1120] py-24 md:py-32 px-4 relative overflow-hidden">
          {/* Ambient glow */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[450px] bg-[#8CA365]/15 rounded-full blur-[160px] pointer-events-none"
          >
          </div>
          {/* Grid pattern */}
          <div
            className="absolute inset-0 bg-[linear-gradient(rgba(140,163,101,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(140,163,101,0.03)_1px,transparent_1px)] [background-size:56px_56px] pointer-events-none"
          >
          </div>
          <div className="max-w-5xl mx-auto relative z-10 flex flex-col items-center">
            {/* Section Header */}
            <div className="text-center mb-4 reveal">
              <span
                className="inline-flex items-center gap-2 bg-green-500/10 text-green-400 text-xs font-bold px-4 py-2 rounded-full border border-green-500/20 uppercase tracking-widest mb-6"
              >
                <svg
                  className="w-3.5 h-3.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    clipRule="evenodd"
                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    fillRule="evenodd"
                  />
                </svg>
                HIPAA-Ready in 24 Hours
              </span>
              <h2
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-6 leading-tight tracking-tight"
              >
                Ready to Give Your Patients a Better Experience?
                <br className="hidden md:block" />
                <span className="text-[#8CA365]">
                  Start Your Medical Answering Service Today
                </span>
              </h2>
              <h3 className="text-lg md:text-xl text-slate-300 text-center font-medium max-w-2xl mx-auto">
                HIPAA-ready in 24 hours. BAA signed before we answer your first patient call.
              </h3>
            </div>
            {/* 3-Path CTA Cards */}
            <div
              className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full mt-14 mb-10 reveal reveal-delay-1"
            >
              {/* Path 1: Get Started (Primary) */}
              <div
                className="bg-[#8CA365] rounded-3xl p-8 md:p-9 shadow-[0_10px_40px_rgba(140,163,101,0.35)] flex flex-col items-center text-center transform md:scale-105 z-10 hover:shadow-[0_16px_50px_rgba(140,163,101,0.5)] transition-all duration-300 relative"
              >
                {/* "Most Popular" badge */}
                <span
                  className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-white text-[#8CA365] text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest whitespace-nowrap shadow-md"
                >
                  Most Popular
                </span>
                <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center mb-5">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <span className="block text-xl font-extrabold text-white mb-2">
                  Get Started Now
                </span>
                <p className="text-white/80 text-sm mb-6 leading-relaxed">
                  Instant access. No credit card. BAA executed before your first call. Full HIPAA compliance from day one.
                </p>
                <div className="flex flex-col gap-3 mb-7 w-full text-left">
                  <div className="flex items-center gap-2.5 text-white font-medium text-sm">
                    <svg
                      className="w-4 h-4 shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        clipRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        fillRule="evenodd"
                      />
                    </svg>
                    No credit card required
                  </div>
                  <div className="flex items-center gap-2.5 text-white font-medium text-sm">
                    <svg
                      className="w-4 h-4 shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        clipRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        fillRule="evenodd"
                      />
                    </svg>
                    Live within 24 hours
                  </div>
                  <div className="flex items-center gap-2.5 text-white font-medium text-sm">
                    <svg
                      className="w-4 h-4 shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        clipRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        fillRule="evenodd"
                      />
                    </svg>
                    Cancel anytime, no contract
                  </div>
                </div>
                <a
                  className="w-full bg-white text-[#8CA365] hover:bg-slate-50 font-black text-base py-4 px-6 rounded-xl transition-all duration-300 shadow-md inline-block"
                  href="#hero-form"
                >
                  Get Started Now →
                </a>
              </div>
              {/* Path 2: Custom Quote */}
              <div
                className="bg-slate-800/60 backdrop-blur-md border border-slate-700 rounded-3xl p-8 md:p-9 flex flex-col items-center text-center hover:border-[#8CA365]/40 transition-all duration-300 group"
              >
                <div
                  className="w-12 h-12 rounded-2xl bg-[#8CA365]/10 border border-[#8CA365]/20 flex items-center justify-center mb-5 group-hover:bg-[#8CA365]/20 transition-colors"
                >
                  <svg
                    className="w-6 h-6 text-[#8CA365]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <span className="block text-xl font-extrabold text-white mb-2">
                  Get a Custom Quote for Your Practice
                </span>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                  See our custom triage scripts, hear a live sample call, review your PMS integration options, and ask our medical compliance team anything.
                </p>
                <div className="flex flex-col gap-3 mb-7 w-full text-left">
                  <div className="flex items-center gap-2.5 text-slate-300 font-medium text-sm">
                    <svg
                      className="w-4 h-4 shrink-0 text-[#8CA365]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        clipRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        fillRule="evenodd"
                      />
                    </svg>
                    15-minute practice walkthrough
                  </div>
                  <div className="flex items-center gap-2.5 text-slate-300 font-medium text-sm">
                    <svg
                      className="w-4 h-4 shrink-0 text-[#8CA365]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        clipRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        fillRule="evenodd"
                      />
                    </svg>
                    Live call sample included
                  </div>
                  <div className="flex items-center gap-2.5 text-slate-300 font-medium text-sm">
                    <svg
                      className="w-4 h-4 shrink-0 text-[#8CA365]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        clipRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        fillRule="evenodd"
                      />
                    </svg>
                    No obligation to purchase
                  </div>
                </div>
                <Link prefetch={false}
                  className="w-full bg-transparent border border-[#8CA365]/50 text-[#8CA365] hover:bg-[#8CA365] hover:text-white font-bold text-base py-4 px-6 rounded-xl transition-all duration-300 mt-auto inline-block"
                  href="/contact-us"
                >
                  Get a Custom Quote →
                </Link>
              </div>
              {/* Path 3: Direct Phone */}
              <div
                className="bg-slate-800/60 backdrop-blur-md border border-slate-700 rounded-3xl p-8 md:p-9 flex flex-col items-center text-center hover:border-slate-500 transition-all duration-300 group"
              >
                <div
                  className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-5 group-hover:bg-blue-500/20 transition-colors"
                >
                  <svg
                    className="w-6 h-6 text-blue-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
                    />
                  </svg>
                </div>
                <span className="block text-xl font-extrabold text-white mb-2">
                  Talk to Our Medical Team
                </span>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                  For multi-provider groups, hospital accounts, or complex enterprise setups — speak directly with a medical compliance specialist right now.
                </p>
                <div className="flex flex-col gap-3 mb-7 w-full text-left">
                  <div className="flex items-center gap-2.5 text-slate-300 font-medium text-sm">
                    <svg
                      className="w-4 h-4 shrink-0 text-blue-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        clipRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        fillRule="evenodd"
                      />
                    </svg>
                    Live human answers now
                  </div>
                  <div className="flex items-center gap-2.5 text-slate-300 font-medium text-sm">
                    <svg
                      className="w-4 h-4 shrink-0 text-blue-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        clipRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        fillRule="evenodd"
                      />
                    </svg>
                    Enterprise & group pricing
                  </div>
                  <div className="flex items-center gap-2.5 text-slate-300 font-medium text-sm">
                    <svg
                      className="w-4 h-4 shrink-0 text-blue-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        clipRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        fillRule="evenodd"
                      />
                    </svg>
                    HIPAA compliance questions welcome
                  </div>
                </div>
                <a
                  className="w-full bg-transparent border border-blue-500/40 text-blue-400 hover:bg-blue-500/10 font-bold text-base py-4 px-6 rounded-xl transition-all duration-300 mt-auto inline-flex items-center justify-center gap-2"
                  href="tel:8574531055"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
                    />
                  </svg>
                  (857) 453-1055
                </a>
              </div>
            </div>
            {/* Bottom trust micro-copy */}
            <p className="text-slate-500 text-xs text-center max-w-xl reveal reveal-delay-2">
              By signing up, you agree to our
              <a className="underline hover:text-slate-300 transition-colors" href="#">
                Privacy Policy
              </a>
              . A BAA is provided to all healthcare clients before any patient calls are handled. All data is stored in HIPAA-compliant infrastructure. No PHI is shared with third parties.
            </p>
          </div>
        </section>
        {/* Mobile Sticky Footer CTA */}
        <div
          className="fixed bottom-0 left-0 w-full bg-[#1a232c] border-t border-slate-800 p-4 z-50 md:hidden flex items-center justify-between shadow-[0_-10px_20px_rgba(0,0,0,0.3)]"
        >
          <span className="text-white font-bold text-sm">
            Need coverage tonight?
          </span>
          <a
            className="bg-[#8CA365] text-white font-bold py-3 px-6 rounded-lg flex items-center gap-2 shadow-lg animate-pulse"
            href="tel:8574531055"
          >
            <svg
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
              />
            </svg>
            Call Now
          </a>
        </div>
      </main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
    </>
  )
}
