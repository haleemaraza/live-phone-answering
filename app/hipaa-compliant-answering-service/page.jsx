import FaqSection from '@/components/FaqSection'
import { hipaaFaq } from '@/components/faq-content'
import PricingSection from '@/components/PricingSection'
import { hipaaPricing } from '@/components/pricing-plans'
import Link from 'next/link'

export const metadata = {
  title: "HIPAA Compliant Answering Service | Live Phone Answering",
  description: "Professional HIPAA compliant answering service. Secure, 24/7 live receptionists trained in healthcare compliance and patient privacy.",
  alternates: { canonical: "/hipaa-compliant-answering-service" },
  openGraph: {
    type: 'website',
    siteName: 'LivePhoneAnswering',
    locale: 'en_US',
    images: [{ url: '/images/Phone Answering Services.webp', width: 1122, height: 1402, alt: 'Live Phone Answering Service' }],
    title: "HIPAA Compliant Answering Service | Live Phone Answering",
    description: "Professional HIPAA compliant answering service. Secure, 24/7 live receptionists trained in healthcare compliance and patient privacy.",
    url: "/hipaa-compliant-answering-service",
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/Phone Answering Services.webp'],
    title: "HIPAA Compliant Answering Service | Live Phone Answering",
    description: "Professional HIPAA compliant answering service. Secure, 24/7 live receptionists trained in healthcare compliance and patient privacy.",
  },
}

const pageSchema = [
  {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Set Up Your HIPAA Compliant Answering Service",
    "description": "Our frictionless, 4-step onboarding process gets your secure overnight coverage live in a matter of hours.",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Sign your HIPAA Business Associate Agreement",
        "text": "We send a standardized, HHS-compliant BAA for your administrator to e-sign, establishing our liability and securing your practice."
      },
      {
        "@type": "HowToStep",
        "name": "Configure your HIPAA-compliant call script",
        "text": "We work with your team to build a customized script that covers new patient intakes and physician escalations."
      },
      {
        "@type": "HowToStep",
        "name": "Receptionists begin answering patient calls live",
        "text": "Your patients are immediately greeted by empathetic, fully certified medical receptionists."
      },
      {
        "@type": "HowToStep",
        "name": "Receive secure, encrypted message summaries",
        "text": "Detailed call notes are delivered instantly through our 256-bit encrypted provider portal and secure mobile app."
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Live Phone Answering",
    "url": "https://www.livephoneanswering.com",
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "Compliance Certification",
        "name": "HIPAA Seal of Compliance",
        "recognizedBy": {
          "@type": "Organization",
          "name": "Compliancy Group"
        }
      },
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "Business Accreditation",
        "name": "BBB Accreditation A+ Rating",
        "recognizedBy": {
          "@type": "Organization",
          "name": "Better Business Bureau"
        }
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Live Phone Answering",
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
          "honorificSuffix": "MD",
          "jobTitle": "Family Physician"
        },
        "datePublished": "2025-11-15",
        "reviewBody": "We needed real human empathy, not an automated bot. The live receptionists handle our sensitive patient intake and after-hours medical dispatch flawlessly. Zero compliance incidents across 2 years of service.",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        }
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "James Reynolds",
          "honorificSuffix": "DDS",
          "jobTitle": "Dental Surgeon"
        },
        "datePublished": "2026-02-10",
        "reviewBody": "Our HIPAA audit passed with no findings. They don't just take messages; they actually book patient appointments directly into our secure EMR system. It’s exactly like having a full-time medical office manager.",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        }
      }
    ]
  }
]

export default function HipaaCompliantAnsweringServicePage() {
  return (
    <>
      <main>
        {/* HERO SECTION (CLINICAL TRUST - REDESIGN) */}
        <section
          className="min-h-[90vh] flex items-center relative overflow-hidden bg-gradient-to-r from-[#D0DBDE] via-[#E4EAE4] to-[#F8F2E2] pt-12"
        >
          {/* Background Medical Crosses & Network Patterns */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            {/* Large abstract cross 1 */}
            <svg
              className="absolute top-10 right-20 w-48 h-48 text-[#8CA365] opacity-10"
              fill="currentColor"
              viewBox="0 0 100 100"
            >
              <path d="M40 0h20v40h40v20H60v40H40V60H0V40h40V0z" />
            </svg>
            {/* Large abstract cross 2 */}
            <svg
              className="absolute bottom-20 right-10 w-64 h-64 text-[#8CA365] opacity-[0.05]"
              fill="currentColor"
              viewBox="0 0 100 100"
            >
              <path d="M40 0h20v40h40v20H60v40H40V60H0V40h40V0z" />
            </svg>
            {/* Large abstract cross 3 */}
            <svg
              className="absolute top-40 left-10 w-32 h-32 text-[#34414A] opacity-[0.03]"
              fill="currentColor"
              viewBox="0 0 100 100"
            >
              <path d="M40 0h20v40h40v20H60v40H40V60H0V40h40V0z" />
            </svg>
            {/* Network Nodes Background SVG */}
            <svg className="absolute inset-0 w-full h-full opacity-60">
              <g
                opacity="0.4"
                stroke="#8E9DAE"
                strokeWidth="0.5"
              >
                {/* Left side heavy clustering */}
                <line
                  x1="5%"
                  x2="15%"
                  y1="20%"
                  y2="35%"
                />
                <line
                  x1="15%"
                  x2="5%"
                  y1="35%"
                  y2="55%"
                />
                <line
                  x1="5%"
                  x2="10%"
                  y1="55%"
                  y2="75%"
                />
                <line
                  x1="15%"
                  x2="25%"
                  y1="35%"
                  y2="45%"
                />
                <line
                  x1="25%"
                  x2="15%"
                  y1="45%"
                  y2="65%"
                />
                <line
                  x1="15%"
                  x2="10%"
                  y1="65%"
                  y2="75%"
                />
                <line
                  x1="5%"
                  x2="-5%"
                  y1="55%"
                  y2="40%"
                />
                <line
                  x1="25%"
                  x2="35%"
                  y1="45%"
                  y2="30%"
                />
                {/* Right side faint clustering */}
                <line
                  x1="85%"
                  x2="95%"
                  y1="20%"
                  y2="35%"
                />
                <line
                  x1="95%"
                  x2="80%"
                  y1="35%"
                  y2="50%"
                />
                <line
                  x1="80%"
                  x2="90%"
                  y1="50%"
                  y2="70%"
                />
                <line
                  x1="90%"
                  x2="95%"
                  y1="70%"
                  y2="85%"
                />
                <line
                  x1="80%"
                  x2="75%"
                  y1="50%"
                  y2="65%"
                />
                <line
                  x1="75%"
                  x2="90%"
                  y1="65%"
                  y2="70%"
                />
              </g>
              <g fill="#8E9DAE" opacity="0.5">
                <circle
                  cx="5%"
                  cy="20%"
                  r="2"
                />
                <circle
                  cx="15%"
                  cy="35%"
                  r="3"
                />
                <circle
                  cx="5%"
                  cy="55%"
                  r="2"
                />
                <circle
                  cx="10%"
                  cy="75%"
                  r="2.5"
                />
                <circle
                  cx="25%"
                  cy="45%"
                  r="2"
                />
                <circle
                  cx="15%"
                  cy="65%"
                  r="1.5"
                />
                <circle
                  cx="35%"
                  cy="30%"
                  r="1.5"
                />
                <circle
                  cx="85%"
                  cy="20%"
                  r="1.5"
                />
                <circle
                  cx="95%"
                  cy="35%"
                  r="2"
                />
                <circle
                  cx="80%"
                  cy="50%"
                  r="2.5"
                />
                <circle
                  cx="90%"
                  cy="70%"
                  r="2"
                />
                <circle
                  cx="95%"
                  cy="85%"
                  r="1.5"
                />
                <circle
                  cx="75%"
                  cy="65%"
                  r="2"
                />
              </g>
            </svg>
          </div>
          <div className="max-w-7xl mx-auto px-4 py-16 lg:py-24 w-full relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left Column (Copy) */}
              <div className="lg:col-span-7 flex flex-col reveal">
                {/* Trust Eyebrow */}
                <div
                  className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm text-[#4E6074] text-xs font-bold px-3 py-1.5 rounded-full mb-6 border border-gray-200/50 uppercase tracking-widest w-max shadow-sm"
                >
                  <svg
                    className="w-4 h-4 text-[#8CA365]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                    />
                  </svg>
                  100% Medical Grade Security
                </div>
                {/* H1 */}
                <h1
                  className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#34414A] leading-tight mb-6 tracking-tight font-sans"
                >
                  HIPAA Compliant Answering Service — Certified, BAA-Signed & Built for Medical Practices
                </h1>
                {/* Subheadline */}
                <p className="text-lg md:text-xl text-[#4E6074] leading-relaxed mb-8 font-medium">
                  Every patient call handled by HIPAA-trained receptionists using end-to-end encrypted message delivery — with a signed Business Associate Agreement before your first call is ever answered.
                </p>
                {/* The 4 Credential Badges (2x2 Grid) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                  {/* Badge 1 */}
                  <div
                    className="flex items-center gap-3 p-3.5 rounded-lg border border-[#4E6074]/30 bg-[#E6F0EE]/40 backdrop-blur-sm"
                  >
                    <svg
                      className="w-5 h-5 text-[#34414A] shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                      />
                    </svg>
                    <span className="text-[0.9rem] font-bold text-[#34414A]">
                      HIPAA Certified Staff
                    </span>
                  </div>
                  {/* Badge 2 */}
                  <div
                    className="flex items-center gap-3 p-3.5 rounded-lg border border-[#4E6074]/30 bg-[#E6F0EE]/40 backdrop-blur-sm"
                  >
                    <svg
                      className="w-5 h-5 text-[#34414A] shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                      />
                    </svg>
                    <span className="text-[0.9rem] font-bold text-[#34414A]">
                      BAA Readily Available
                    </span>
                  </div>
                  {/* Badge 3 */}
                  <div
                    className="flex items-center gap-3 p-3.5 rounded-lg border border-[#4E6074]/30 bg-[#E6F0EE]/40 backdrop-blur-sm"
                  >
                    <svg
                      className="w-5 h-5 text-[#34414A] shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                      />
                    </svg>
                    <span className="text-[0.9rem] font-bold text-[#34414A]">
                      End-to-End Encryption
                    </span>
                  </div>
                  {/* Badge 4 */}
                  <div
                    className="flex items-center gap-3 p-3.5 rounded-lg border border-[#4E6074]/30 bg-[#E6F0EE]/40 backdrop-blur-sm"
                  >
                    <svg
                      className="w-5 h-5 text-[#34414A] shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                      />
                    </svg>
                    <span className="text-[0.9rem] font-bold text-[#34414A]">
                      A+ BBB Accredited
                    </span>
                  </div>
                </div>
                {/* The Dual CTAs */}
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <a
                    className="w-full sm:w-auto bg-[#295657] hover:bg-[#1E4344] text-white font-bold text-lg py-3.5 px-8 rounded-xl shadow-lg transition-transform hover:-translate-y-0.5 text-center flex items-center justify-center gap-2"
                    href="tel:8574531055"
                  >
                    <svg
                      className="w-5 h-5"
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
                    Call Now
                  </a>
                  <a
                    className="w-full sm:w-auto bg-transparent border border-[#34414A] text-[#34414A] hover:bg-black/5 font-bold text-lg py-3.5 px-8 rounded-xl transition-all duration-300 text-center flex items-center justify-center gap-2"
                    href="#contact"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                    Contact Us
                  </a>
                </div>
              </div>
              {/* Right Column (Form) */}
              <div
                className="lg:col-span-5 relative w-full flex justify-center mt-12 lg:mt-0 reveal reveal-delay-2"
              >
                <div
                  className="w-full max-w-lg bg-[#295657] p-8 md:p-10 rounded-2xl shadow-[0_20px_60px_-15px_rgba(41,86,87,0.4)] flex flex-col relative z-20"
                >
                  {/* Red decorative dot from design */}
                  <div
                    className="absolute -bottom-1 right-1/2 w-1.5 h-1.5 bg-red-500 rounded-full translate-y-full"
                  >
                  </div>
                  {/* Form Header */}
                  <h4 className="text-2xl font-bold text-white mb-1">
                    Request HIPAA-Compliant Quote
                  </h4>
                  <p className="text-[0.85rem] text-teal-100/80 mb-6">
                    Secure, 24/7 patient answering. No credit card required.
                  </p>
                  {/* Form */}
                  <form
                    action="#"
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                    method="POST"
                  >
                    <div className="col-span-1 md:col-span-2">
                      <label className="block text-xs font-bold text-white mb-1.5" htmlFor="fullName">
                        Full Name
                      </label>
                      <input
                        className="w-full bg-white border-0 rounded-lg px-4 py-3 text-[#34414A] focus:outline-none focus:ring-2 focus:ring-[#00B67A]"
                        id="fullName"
                        name="fullName"
                        placeholder="John Doe"
                        required
                        type="text"
                      />
                    </div>
                    <div className="col-span-1">
                      <label className="block text-xs font-bold text-white mb-1.5" htmlFor="email">
                        Work Email
                      </label>
                      <input
                        className="w-full bg-white border-0 rounded-lg px-4 py-3 text-[#34414A] focus:outline-none focus:ring-2 focus:ring-[#00B67A]"
                        id="email"
                        name="email"
                        placeholder="john@clinic.com"
                        required
                        type="email"
                      />
                    </div>
                    <div className="col-span-1">
                      <label className="block text-xs font-bold text-white mb-1.5" htmlFor="phone">
                        Phone Number
                      </label>
                      <input
                        className="w-full bg-white border-0 rounded-lg px-4 py-3 text-[#34414A] focus:outline-none focus:ring-2 focus:ring-[#00B67A]"
                        id="phone"
                        name="phone"
                        placeholder="(555) 000-0000"
                        required
                        type="tel"
                      />
                    </div>
                    <div className="col-span-1 md:col-span-2">
                      <label className="block text-xs font-bold text-white mb-1.5" htmlFor="industry">
                        Your Industry
                      </label>
                      <select
                        className="w-full bg-white border-0 rounded-lg px-4 py-3 text-[#34414A] focus:outline-none focus:ring-2 focus:ring-[#00B67A] appearance-none"
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
                    <div className="col-span-1 md:col-span-2 mt-2">
                      <button
                        className="w-full bg-[#00B67A] hover:bg-[#009966] text-white font-bold text-[1.05rem] py-3.5 rounded-lg shadow-lg transition-transform hover:-translate-y-0.5"
                        type="submit"
                      >
                        Submit Request Now
                      </button>
                    </div>
                    <div className="col-span-1 md:col-span-2 mt-2">
                      <p className="text-[0.7rem] text-teal-100/60 text-center leading-relaxed">
                        By submitting, you agree to our Terms of Service and Privacy Policy. We maintain strict HIPAA compliance.
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* HIPAA Risk & Penalty Dashboard */}
        <section className="bg-[#0f2925] py-24 md:py-32 px-4 relative overflow-hidden">
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
          {/* Ambient Danger Glow */}
          <div
            className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-red-600/5 rounded-full blur-[120px] pointer-events-none"
          >
          </div>
          <div className="max-w-7xl mx-auto flex flex-col gap-12 relative z-10">
            {/* Header Section */}
            <div>
              <span
                className="block text-3xl md:text-4xl lg:text-5xl font-extrabold text-white text-center mb-6 max-w-4xl mx-auto leading-tight tracking-tight"
              >
                The Real Risk of Using a Non-HIPAA-Compliant Answering Service — What Your Practice Stands to Lose
              </span>
              <p
                className="text-slate-400 text-center mb-12 max-w-3xl mx-auto text-lg leading-relaxed font-medium"
              >
                Ignorance is not a legal defense. Using a standard, uncertified call center doesn't just put patient privacy at risk—it exposes your entire practice to devastating financial penalties and regulatory audits.
              </p>
            </div>
            {/* Top Row: The 3 Stat Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {/* Card 1 */}
              <div
                className="bg-slate-800/40 backdrop-blur-md border border-slate-700/50 rounded-2xl p-8 flex flex-col items-center justify-center text-center shadow-lg border-t-2 border-t-red-500/20"
              >
                <span className="text-4xl font-black text-red-400 mb-2">
                  $100–$50K
                </span>
                <span className="text-slate-300 font-bold text-sm uppercase tracking-wider">
                  Per Violation (HHS)
                </span>
              </div>
              {/* Card 2 */}
              <div
                className="bg-slate-800/40 backdrop-blur-md border border-slate-700/50 rounded-2xl p-8 flex flex-col items-center justify-center text-center shadow-lg border-t-2 border-t-red-500/20"
              >
                <span className="text-4xl font-black text-red-400 mb-2">
                  $1.5M
                </span>
                <span className="text-slate-300 font-bold text-sm uppercase tracking-wider">
                  Annual Maximum Penalty
                </span>
              </div>
              {/* Card 3 */}
              <div
                className="bg-slate-800/40 backdrop-blur-md border border-slate-700/50 rounded-2xl p-8 flex flex-col items-center justify-center text-center shadow-lg border-t-2 border-t-red-500/20"
              >
                <span className="text-4xl font-black text-red-400 mb-2">
                  30%
                </span>
                <span className="text-slate-300 font-bold text-sm uppercase tracking-wider">
                  Breaches from 3rd-Party Vendors
                </span>
              </div>
            </div>
            {/* Bottom Row: The Split Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Left Column (Evidence & Editorial) */}
              <div className="lg:col-span-7 flex flex-col gap-10">
                {/* Block 1 (HHS) */}
                <div>
                  <span className="block text-xl md:text-2xl font-bold text-white mb-4 leading-snug">
                    HIPAA violation penalties: $100 to $50,000 per incident — up to $1.5 million annually
                  </span>
                  <p className="text-slate-400 text-base leading-relaxed mb-4">
                    The Department of Health and Human Services (HHS) enforces strict financial penalties for mishandling Protected Health Information (PHI). A single unencrypted text message containing patient details from a non-compliant dispatcher can trigger massive fines.
                  </p>
                  <a
                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-bold text-sm transition-colors"
                    href="https://www.hhs.gov/hipaa"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                    View official HHS.gov penalty tiers
                  </a>
                </div>
                {/* Block 2 (Verizon DBIR) */}
                <div>
                  <span className="block text-xl md:text-2xl font-bold text-white mb-4 leading-snug">
                    Third-party vendor breaches now account for 30% of all healthcare data incidents — is your answering service one of them?
                  </span>
                  <p className="text-slate-400 text-base leading-relaxed">
                    According to the 2025 Verizon Data Breach Investigations Report (DBIR), third-party business associates are the weakest link in healthcare security. If your answering service isn't operating under a signed Business Associate Agreement (BAA) with end-to-end encryption, your practice is carrying their liability.
                  </p>
                </div>
              </div>
              {/* Right Column (The Audit Checklist) */}
              <div
                className="lg:col-span-5 bg-[#1e293b] border border-slate-700 rounded-3xl p-8 md:p-10 shadow-2xl relative"
              >
                {/* Accent bar */}
                <div
                  className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-red-500 to-amber-500 rounded-t-3xl"
                >
                </div>
                <span className="block text-xl font-extrabold text-white mb-8 leading-snug">
                  5-point HIPAA compliance checklist — is your current answering service truly compliant?
                </span>
                <ul className="flex flex-col gap-5">
                  <li className="flex items-start gap-4">
                    <svg
                      className="w-5 h-5 text-slate-500 mt-1 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                    <span className="text-slate-300 text-sm font-medium leading-relaxed">
                      Do they sign a Business Associate Agreement (BAA) prior to service?
                    </span>
                  </li>
                  <li className="flex items-start gap-4">
                    <svg
                      className="w-5 h-5 text-slate-500 mt-1 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                    <span className="text-slate-300 text-sm font-medium leading-relaxed">
                      Is message delivery routed through an encrypted, password-protected portal/app?
                    </span>
                  </li>
                  <li className="flex items-start gap-4">
                    <svg
                      className="w-5 h-5 text-slate-500 mt-1 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                    <span className="text-slate-300 text-sm font-medium leading-relaxed">
                      Do they guarantee ZERO patient data is sent via standard SMS or unsecured pagers?
                    </span>
                  </li>
                  <li className="flex items-start gap-4">
                    <svg
                      className="w-5 h-5 text-slate-500 mt-1 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                    <span className="text-slate-300 text-sm font-medium leading-relaxed">
                      Are all live receptionists required to pass annual HIPAA training?
                    </span>
                  </li>
                  <li className="flex items-start gap-4">
                    <svg
                      className="w-5 h-5 text-slate-500 mt-1 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                    <span className="text-slate-300 text-sm font-medium leading-relaxed">
                      Do they have automated data retention and secure deletion protocols?
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* Definition + BAA Explained Section */}
        <section className="bg-white py-24 md:py-32 px-4 border-t border-gray-100 relative">
          <div className="max-w-7xl mx-auto flex flex-col gap-12">
            {/* Top Block (The Snippet Magnet) */}
            <div
              className="bg-blue-50/40 border-l-8 border-[#8CA365] rounded-r-3xl p-8 md:p-12 shadow-sm relative overflow-hidden"
            >
              <svg
                className="absolute -right-10 -bottom-10 w-64 h-64 text-blue-100 opacity-50 pointer-events-none"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                {/* Medical Cross / Shield Icon */}
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10zM11 7h2v3h3v2h-3v3h-2v-3H8v-2h3V7z" />
              </svg>
              <h2
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#34414A] mb-6 leading-tight tracking-tight max-w-4xl relative z-10"
              >
                What Is a HIPAA Compliant Answering Service? (And What Actually Makes One Truly Compliant)
              </h2>
              <p
                className="text-gray-700 text-lg md:text-xl leading-relaxed font-medium max-w-4xl relative z-10"
              >
                A HIPAA compliant answering service is a specialized communications provider that handles medical calls, patient intake, and emergency dispatching while strictly adhering to the Health Insurance Portability and Accountability Act. To be truly compliant, the service must employ end-to-end encrypted messaging, require annual staff training, and sign a legally binding Business Associate Agreement (BAA) before processing any Protected Health Information (PHI).
              </p>
            </div>
            {/* Bottom Block (The 3-Pillar Grid) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {/* Card 1 (BAA Definition) */}
              <div
                className="bg-white border border-gray-200 rounded-2xl p-8 flex flex-col h-full shadow-sm hover:shadow-lg hover:border-[#8CA365]/30 transition-all duration-300 relative"
              >
                <div
                  className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-[#8CA365] mb-6 border border-gray-100 shadow-inner"
                >
                  {/* Document/Signature SVG */}
                  <svg
                    className="w-6 h-6"
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
                <h3 className="text-xl font-bold text-[#34414A] mb-4 leading-snug">
                  What is a Business Associate Agreement (BAA) — and why it is legally required for your answering service
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                  A Business Associate Agreement (BAA) is a legally binding contract mandated by the Department of Health and Human Services. It dictates exactly how a third-party vendor—like your answering service—will safeguard Protected Health Information (PHI). If an answering service refuses to sign a BAA, using them is an immediate, direct violation of federal law.
                </p>
              </div>
              {/* Card 2 (Myth-Busting) */}
              <div
                className="bg-white border border-gray-200 rounded-2xl p-8 flex flex-col h-full shadow-sm hover:shadow-lg hover:border-[#8CA365]/30 transition-all duration-300 relative"
              >
                <div
                  className="absolute -top-3 right-6 bg-red-100 text-red-700 text-[10px] font-bold px-3 py-1 uppercase rounded-full tracking-wider border border-red-200"
                >
                  Common Myth
                </div>
                <div
                  className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-red-500 mb-6 border border-gray-100 shadow-inner"
                >
                  {/* Shield Exclamation SVG */}
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10zM12 8v4m0 4h.01"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#34414A] mb-4 leading-snug">
                  Does signing a BAA alone make an answering service HIPAA compliant? (The most dangerous misconception)
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                  No. A common misconception is that any answering service becomes HIPAA compliant simply by signing a BAA. A BAA is just a legal promise; it does not magically upgrade their technology. If a service signs a BAA but still sends unencrypted SMS text messages or uses unsecured portals, your practice remains entirely liable for the resulting data breach.
                </p>
              </div>
              {/* Card 3 (Compliant vs Certified) */}
              <div
                className="bg-white border border-gray-200 rounded-2xl p-8 flex flex-col h-full shadow-sm hover:shadow-lg hover:border-[#8CA365]/30 transition-all duration-300 relative"
              >
                <div
                  className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-[#8CA365] mb-6 border border-gray-100 shadow-inner"
                >
                  {/* Certificate SVG */}
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#34414A] mb-4 leading-snug">
                  HIPAA compliant vs. HIPAA certified — what is the difference?
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                  HIPAA compliant means an organization claims to follow HIPAA rules internally. HIPAA certified means an independent, third-party auditing body has thoroughly investigated their infrastructure and verified that compliance. Our answering service is both compliant and fully certified—delivering a significantly higher standard of security than compliance alone.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* 5-Layer Security Architecture Section */}
        <section className="bg-[#8CA365] py-24 md:py-32 px-4 relative overflow-hidden">
          {/* Ambient Security Grid */}
          <div
            className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGg0MHY0MEgwVjB6bTIwIDIwdjIwaDIwVjIwaC0yMHptMC0yMEgwdjIwaDIwVjB6IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDE1KSIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+')] pointer-events-none opacity-20"
          >
          </div>
          <div className="max-w-5xl mx-auto relative z-10">
            {/* Header Section */}
            <div className="mb-24">
              <span
                className="block text-3xl md:text-4xl lg:text-5xl font-black text-white text-center mb-6 leading-tight tracking-tight"
              >
                How We Protect Patient Information — Our
                <span className="text-[#34414A]">
                  5-Layer
                </span>
                HIPAA Compliance Architecture
              </span>
              <p
                className="text-white/90 text-center max-w-3xl mx-auto text-lg leading-relaxed font-medium"
              >
                We don't just claim compliance; we engineer it. Explore the five foundational security layers that guarantee your Protected Health Information (PHI) is secured from the first ring to the final message delivery.
              </p>
            </div>
            {/* The Architecture Pipeline (Zigzag Stack) */}
            <div className="relative flex flex-col w-full gap-12 md:gap-0">
              {/* The Central Line */}
              <div
                className="absolute left-[27px] md:left-1/2 md:-translate-x-1/2 top-4 bottom-4 w-1 bg-white/30 shadow-[0_0_10px_rgba(255,255,255,0.2)] z-0"
              >
              </div>
              {/* Layer 1 (Left Desktop) */}
              <div
                className="relative z-10 flex flex-col md:flex-row items-start md:items-center w-full group min-h-[120px] md:min-h-[180px]"
              >
                {/* Desktop Left Content */}
                <div
                  className="hidden md:flex flex-col md:w-1/2 md:pr-16 text-right items-end justify-center py-6"
                >
                  <span
                    className="block text-xl md:text-2xl font-bold text-[#34414A] mb-3 leading-snug tracking-wide group-hover:text-white transition-colors"
                  >
                    Signed Business Associate Agreement (BAA) executed before service begins
                  </span>
                  <p className="text-white/90 text-base leading-relaxed max-w-md">
                    The legal foundation of our partnership. Before a single patient call is answered, we establish a rigid, legally binding contract that assumes full regulatory liability for the safe handling of your data.
                  </p>
                </div>
                {/* Node */}
                <div
                  className="absolute left-[27px] md:left-1/2 -translate-x-1/2 w-14 h-14 md:w-20 md:h-20 rounded-2xl bg-[#34414A] border-4 border-[#8CA365] flex flex-col items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-white transition-all duration-300 shadow-xl z-10"
                >
                  <span
                    className="text-[10px] md:text-xs font-bold text-white/50 uppercase tracking-widest group-hover:text-[#8CA365] transition-colors relative z-10"
                  >
                    Layer
                  </span>
                  <span
                    className="text-xl md:text-3xl font-black text-white group-hover:text-[#34414A] relative z-10"
                  >
                    1
                  </span>
                </div>
                {/* Mobile Content (Right) / Desktop Empty */}
                <div className="md:hidden flex flex-col pl-20 py-2 w-full justify-center">
                  <span className="block text-xl font-bold text-[#34414A] mb-3 leading-snug tracking-wide">
                    Signed Business Associate Agreement (BAA) executed before service begins
                  </span>
                  <p className="text-white/90 text-base leading-relaxed">
                    The legal foundation of our partnership. Before a single patient call is answered, we establish a rigid, legally binding contract that assumes full regulatory liability for the safe handling of your data.
                  </p>
                </div>
                <div className="hidden md:block md:w-1/2">
                </div>
              </div>
              {/* Layer 2 (Right Desktop) */}
              <div
                className="relative z-10 flex flex-col md:flex-row items-start md:items-center w-full group min-h-[120px] md:min-h-[180px]"
              >
                {/* Desktop Empty */}
                <div className="hidden md:block md:w-1/2">
                </div>
                {/* Node */}
                <div
                  className="absolute left-[27px] md:left-1/2 -translate-x-1/2 w-14 h-14 md:w-20 md:h-20 rounded-2xl bg-[#34414A] border-4 border-[#8CA365] flex flex-col items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-white transition-all duration-300 shadow-xl z-10"
                >
                  <span
                    className="text-[10px] md:text-xs font-bold text-white/50 uppercase tracking-widest group-hover:text-[#8CA365] transition-colors relative z-10"
                  >
                    Layer
                  </span>
                  <span
                    className="text-xl md:text-3xl font-black text-white group-hover:text-[#34414A] relative z-10"
                  >
                    2
                  </span>
                </div>
                {/* Mobile & Desktop Content (Right) */}
                <div className="flex flex-col pl-20 md:pl-16 md:w-1/2 py-2 md:py-6 justify-center w-full">
                  <span
                    className="block text-xl md:text-2xl font-bold text-[#34414A] mb-3 leading-snug tracking-wide group-hover:text-white transition-colors"
                  >
                    End-to-end encrypted call recording and PHI message storage
                  </span>
                  <p className="text-white/90 text-base leading-relaxed max-w-md">
                    Standard servers are vulnerable. All voice interactions and written messages are captured, stored, and protected within our isolated, 256-bit AES encrypted database, rendering intercepted data entirely unreadable.
                  </p>
                </div>
              </div>
              {/* Layer 3 (Left Desktop) */}
              <div
                className="relative z-10 flex flex-col md:flex-row items-start md:items-center w-full group min-h-[120px] md:min-h-[180px]"
              >
                {/* Desktop Left Content */}
                <div
                  className="hidden md:flex flex-col md:w-1/2 md:pr-16 text-right items-end justify-center py-6"
                >
                  <span
                    className="block text-xl md:text-2xl font-bold text-[#34414A] mb-3 leading-snug tracking-wide group-hover:text-white transition-colors"
                  >
                    HIPAA-certified receptionist training on every shift
                  </span>
                  <p className="text-white/90 text-base leading-relaxed max-w-md">
                    Technology is only as secure as the people using it. Every live receptionist undergoes rigorous, ongoing HIPAA training, ensuring they know exactly how to handle sensitive patient scenarios, verify identities, and prevent social engineering.
                  </p>
                </div>
                {/* Node */}
                <div
                  className="absolute left-[27px] md:left-1/2 -translate-x-1/2 w-14 h-14 md:w-20 md:h-20 rounded-2xl bg-[#34414A] border-4 border-[#8CA365] flex flex-col items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-white transition-all duration-300 shadow-xl z-10"
                >
                  <span
                    className="text-[10px] md:text-xs font-bold text-white/50 uppercase tracking-widest group-hover:text-[#8CA365] transition-colors relative z-10"
                  >
                    Layer
                  </span>
                  <span
                    className="text-xl md:text-3xl font-black text-white group-hover:text-[#34414A] relative z-10"
                  >
                    3
                  </span>
                </div>
                {/* Mobile Content (Right) / Desktop Empty */}
                <div className="md:hidden flex flex-col pl-20 py-2 w-full justify-center">
                  <span className="block text-xl font-bold text-[#34414A] mb-3 leading-snug tracking-wide">
                    HIPAA-certified receptionist training on every shift
                  </span>
                  <p className="text-white/90 text-base leading-relaxed">
                    Technology is only as secure as the people using it. Every live receptionist undergoes rigorous, ongoing HIPAA training, ensuring they know exactly how to handle sensitive patient scenarios, verify identities, and prevent social engineering.
                  </p>
                </div>
                <div className="hidden md:block md:w-1/2">
                </div>
              </div>
              {/* Layer 4 (Right Desktop) */}
              <div
                className="relative z-10 flex flex-col md:flex-row items-start md:items-center w-full group min-h-[120px] md:min-h-[180px]"
              >
                {/* Desktop Empty */}
                <div className="hidden md:block md:w-1/2">
                </div>
                {/* Node */}
                <div
                  className="absolute left-[27px] md:left-1/2 -translate-x-1/2 w-14 h-14 md:w-20 md:h-20 rounded-2xl bg-[#34414A] border-4 border-[#8CA365] flex flex-col items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-white transition-all duration-300 shadow-xl z-10"
                >
                  <span
                    className="text-[10px] md:text-xs font-bold text-white/50 uppercase tracking-widest group-hover:text-[#8CA365] transition-colors relative z-10"
                  >
                    Layer
                  </span>
                  <span
                    className="text-xl md:text-3xl font-black text-white group-hover:text-[#34414A] relative z-10"
                  >
                    4
                  </span>
                </div>
                {/* Mobile & Desktop Content (Right) */}
                <div className="flex flex-col pl-20 md:pl-16 md:w-1/2 py-2 md:py-6 justify-center w-full">
                  <span
                    className="block text-xl md:text-2xl font-bold text-[#34414A] mb-3 leading-snug tracking-wide group-hover:text-white transition-colors"
                  >
                    Secure PHI delivery — no standard email, no unencrypted SMS
                  </span>
                  <p className="text-white/90 text-base leading-relaxed max-w-md">
                    The most common point of failure for medical practices is message delivery. We completely bypass vulnerable channels. Patient messages and dispatch alerts are delivered exclusively through our secure, password-protected portal and encrypted mobile app.
                  </p>
                </div>
              </div>
              {/* Layer 5 (Left Desktop) */}
              <div
                className="relative z-10 flex flex-col md:flex-row items-start md:items-center w-full group min-h-[120px] md:min-h-[180px]"
              >
                {/* Desktop Left Content */}
                <div
                  className="hidden md:flex flex-col md:w-1/2 md:pr-16 text-right items-end justify-center py-6"
                >
                  <span
                    className="block text-xl md:text-2xl font-bold text-[#34414A] mb-3 leading-snug tracking-wide group-hover:text-white transition-colors"
                  >
                    Complete audit trail — every patient interaction logged for compliance review
                  </span>
                  <p className="text-white/90 text-base leading-relaxed max-w-md">
                    Absolute transparency for your compliance officer. Every action—from the exact second a call is received to when a message is opened by your on-call doctor—is meticulously time-stamped and logged, ensuring you are 100% audit-ready at all times.
                  </p>
                </div>
                {/* Node */}
                <div
                  className="absolute left-[27px] md:left-1/2 -translate-x-1/2 w-14 h-14 md:w-20 md:h-20 rounded-2xl bg-[#34414A] border-4 border-[#8CA365] flex flex-col items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-white transition-all duration-300 shadow-xl z-10"
                >
                  <span
                    className="text-[10px] md:text-xs font-bold text-white/50 uppercase tracking-widest group-hover:text-[#8CA365] transition-colors relative z-10"
                  >
                    Layer
                  </span>
                  <span
                    className="text-xl md:text-3xl font-black text-white group-hover:text-[#34414A] relative z-10"
                  >
                    5
                  </span>
                </div>
                {/* Mobile Content (Right) / Desktop Empty */}
                <div className="md:hidden flex flex-col pl-20 py-2 w-full justify-center">
                  <span className="block text-xl font-bold text-[#34414A] mb-3 leading-snug tracking-wide">
                    Complete audit trail — every patient interaction logged for compliance review
                  </span>
                  <p className="text-white/90 text-base leading-relaxed">
                    Absolute transparency for your compliance officer. Every action—from the exact second a call is received to when a message is opened by your on-call doctor—is meticulously time-stamped and logged, ensuring you are 100% audit-ready at all times.
                  </p>
                </div>
                <div className="hidden md:block md:w-1/2">
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Core Features Strata Section */}
        <section className="bg-white py-24 md:py-32 px-4 border-t border-slate-100 relative">
          <div className="max-w-6xl mx-auto">
            {/* Header Section */}
            <div className="mb-16">
              <span
                className="block text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#34414A] mb-6 leading-tight tracking-tight max-w-3xl"
              >
                Everything Included in Your HIPAA Compliant Answering Service — No Hidden Extras
              </span>
              <p className="text-gray-600 max-w-2xl text-lg leading-relaxed font-medium">
                Medical practices require comprehensive security, not à la carte pricing. Every account is fully equipped with the essential tools, certifications, and protocols you need to protect PHI and serve your patients flawlessly.
              </p>
            </div>
            {/* The Feature Matrix (Compact 3x3 Grid) */}
            <div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 pt-12 border-t border-gray-200 mt-12"
            >
              {/* Feature 01 */}
              <div className="flex flex-col group">
                <div className="flex items-center justify-between mb-6">
                  <div
                    className="w-12 h-12 rounded-xl bg-[#8CA365]/10 flex items-center justify-center text-[#8CA365] group-hover:bg-[#8CA365] group-hover:text-white transition-all duration-300"
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
                  <span
                    className="text-3xl font-black text-gray-200 group-hover:text-[#8CA365]/30 transition-colors font-mono"
                  >
                    01
                  </span>
                </div>
                <span className="block text-xl font-bold text-[#34414A] mb-3 leading-snug">
                  24/7 live HIPAA-trained receptionist answering
                </span>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  Ensure every caller speaks to a compassionate, rigorously trained professional, day or night. We never use automated voice bots for patient interactions.
                </p>
              </div>
              {/* Feature 02 */}
              <div className="flex flex-col group">
                <div className="flex items-center justify-between mb-6">
                  <div
                    className="w-12 h-12 rounded-xl bg-[#8CA365]/10 flex items-center justify-center text-[#8CA365] group-hover:bg-[#8CA365] group-hover:text-white transition-all duration-300"
                  >
                    <svg
                      className="w-6 h-6"
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
                  <span
                    className="text-3xl font-black text-gray-200 group-hover:text-[#8CA365]/30 transition-colors font-mono"
                  >
                    02
                  </span>
                </div>
                <span className="block text-xl font-bold text-[#34414A] mb-3 leading-snug">
                  Signed Business Associate Agreement for every client — before day one
                </span>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  Complete legal protection established immediately. We assume full regulatory liability for our communications infrastructure so your practice is always protected.
                </p>
              </div>
              {/* Feature 03 */}
              <div className="flex flex-col group">
                <div className="flex items-center justify-between mb-6">
                  <div
                    className="w-12 h-12 rounded-xl bg-[#8CA365]/10 flex items-center justify-center text-[#8CA365] group-hover:bg-[#8CA365] group-hover:text-white transition-all duration-300"
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
                  <span
                    className="text-3xl font-black text-gray-200 group-hover:text-[#8CA365]/30 transition-colors font-mono"
                  >
                    03
                  </span>
                </div>
                <span className="block text-xl font-bold text-[#34414A] mb-3 leading-snug">
                  End-to-end encrypted message delivery — no standard email or unencrypted SMS
                </span>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  Standard texts are a major compliance violation. We guarantee 100% encrypted medical message delivery through our secure, password-protected provider portal and mobile app.
                </p>
              </div>
              {/* Feature 04 */}
              <div className="flex flex-col group">
                <div className="flex items-center justify-between mb-6">
                  <div
                    className="w-12 h-12 rounded-xl bg-[#8CA365]/10 flex items-center justify-center text-[#8CA365] group-hover:bg-[#8CA365] group-hover:text-white transition-all duration-300"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                  <span
                    className="text-3xl font-black text-gray-200 group-hover:text-[#8CA365]/30 transition-colors font-mono"
                  >
                    04
                  </span>
                </div>
                <span className="block text-xl font-bold text-[#34414A] mb-3 leading-snug">
                  After-hours medical call handling and physician on-call routing
                </span>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  Protect your providers from burnout. Our intelligent medical on-call routing ensures doctors only wake for true emergencies, holding routine calls for the morning.
                </p>
              </div>
              {/* Feature 05 */}
              <div className="flex flex-col group">
                <div className="flex items-center justify-between mb-6">
                  <div
                    className="w-12 h-12 rounded-xl bg-[#8CA365]/10 flex items-center justify-center text-[#8CA365] group-hover:bg-[#8CA365] group-hover:text-white transition-all duration-300"
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
                  <span
                    className="text-3xl font-black text-gray-200 group-hover:text-[#8CA365]/30 transition-colors font-mono"
                  >
                    05
                  </span>
                </div>
                <span className="block text-xl font-bold text-[#34414A] mb-3 leading-snug">
                  HIPAA-compliant new patient intake — secure PHI collection on first call
                </span>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  Never miss a new patient opportunity. We seamlessly conduct HIPAA new patient intake, capturing high-value demographics and clinical needs safely without workflow friction.
                </p>
              </div>
              {/* Feature 06 */}
              <div className="flex flex-col group">
                <div className="flex items-center justify-between mb-6">
                  <div
                    className="w-12 h-12 rounded-xl bg-[#8CA365]/10 flex items-center justify-center text-[#8CA365] group-hover:bg-[#8CA365] group-hover:text-white transition-all duration-300"
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
                  <span
                    className="text-3xl font-black text-gray-200 group-hover:text-[#8CA365]/30 transition-colors font-mono"
                  >
                    06
                  </span>
                </div>
                <span className="block text-xl font-bold text-[#34414A] mb-3 leading-snug">
                  Appointment scheduling integrated with your practice management system
                </span>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  Wake up to a booked calendar. We securely bridge with your existing scheduling software to lock in appointments overnight while maintaining strict data isolation.
                </p>
              </div>
              {/* Feature 07 */}
              <div className="flex flex-col group">
                <div className="flex items-center justify-between mb-6">
                  <div
                    className="w-12 h-12 rounded-xl bg-[#8CA365]/10 flex items-center justify-center text-[#8CA365] group-hover:bg-[#8CA365] group-hover:text-white transition-all duration-300"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                  <span
                    className="text-3xl font-black text-gray-200 group-hover:text-[#8CA365]/30 transition-colors font-mono"
                  >
                    07
                  </span>
                </div>
                <span className="block text-xl font-bold text-[#34414A] mb-3 leading-snug">
                  Bilingual answering — English and Spanish for diverse patient populations
                </span>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  Expand your practice's reach and provide equitable care with native bilingual HIPAA answering, included standard at no additional cost.
                </p>
              </div>
              {/* Feature 08 */}
              <div className="flex flex-col group">
                <div className="flex items-center justify-between mb-6">
                  <div
                    className="w-12 h-12 rounded-xl bg-[#8CA365]/10 flex items-center justify-center text-[#8CA365] group-hover:bg-[#8CA365] group-hover:text-white transition-all duration-300"
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
                  <span
                    className="text-3xl font-black text-gray-200 group-hover:text-[#8CA365]/30 transition-colors font-mono"
                  >
                    08
                  </span>
                </div>
                <span className="block text-xl font-bold text-[#34414A] mb-3 leading-snug">
                  Full call audit trail for HIPAA compliance documentation and OCR review
                </span>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  Absolute transparency. Maintain a rigorous, timestamped HIPAA call audit trail for every message and interaction to satisfy any compliance officer or regulatory audit.
                </p>
              </div>
              {/* Feature 09 */}
              <div className="flex flex-col group">
                <div className="flex items-center justify-between mb-6">
                  <div
                    className="w-12 h-12 rounded-xl bg-[#8CA365]/10 flex items-center justify-center text-[#8CA365] group-hover:bg-[#8CA365] group-hover:text-white transition-all duration-300"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                  <span
                    className="text-3xl font-black text-gray-200 group-hover:text-[#8CA365]/30 transition-colors font-mono"
                  >
                    09
                  </span>
                </div>
                <span className="block text-xl font-bold text-[#34414A] mb-3 leading-snug">
                  Emergency call triage and urgent patient escalation protocols
                </span>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  Customized dispatch rules designed specifically for your specialty, flawlessly filtering routine medication refills from critical care needs.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Medical Specialties Silo Section */}
        <section className="bg-slate-50 py-24 md:py-32 px-4 border-t border-gray-200 relative">
          <div className="max-w-7xl mx-auto">
            {/* Header Section */}
            <div className="mb-16">
              <span
                className="block text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#34414A] text-center mb-6 max-w-4xl mx-auto leading-tight"
              >
                HIPAA Compliant Answering for Every Medical Specialty — Trained for Your Practice Type
              </span>
              <p
                className="text-gray-600 text-center max-w-3xl mx-auto text-lg leading-relaxed font-medium"
              >
                We understand that a dental emergency is handled differently than a mental health crisis. Our receptionists are rigorously trained in the specific terminology, triage protocols, and compliance requirements of your unique medical specialty.
              </p>
            </div>
            {/* The Click-Through Silo Grid (3x2) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {/* Card 1 (Primary Care) */}
              <a
                className="group flex flex-col bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:border-[#8CA365] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden outline-none focus:ring-2 focus:ring-[#8CA365]"
                href="#"
              >
                <div
                  className="w-14 h-14 rounded-full bg-[#8CA365]/10 flex items-center justify-center text-[#8CA365] mb-6 group-hover:scale-110 group-hover:bg-[#8CA365] group-hover:text-white transition-all duration-300 shadow-sm"
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
                <span className="block text-lg lg:text-xl font-bold text-[#34414A] mb-3 leading-snug">
                  HIPAA answering service for primary care physicians & family medicine
                </span>
                <p className="text-gray-600 text-sm leading-relaxed flex-grow mb-6">
                  Seamlessly handle after-hours prescription refill requests, routine appointment scheduling, and urgent patient escalations without disrupting your daytime workflow.
                </p>
                <div
                  className="mt-auto pt-4 border-t border-gray-100 flex items-center gap-2 text-[#8CA365] font-bold text-sm transition-all duration-300 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
                >
                  View Specialty Capabilities
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
              </a>
              {/* Card 2 (Mental Health) */}
              <a
                className="group flex flex-col bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:border-[#8CA365] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden outline-none focus:ring-2 focus:ring-[#8CA365]"
                href="#"
              >
                <div
                  className="w-14 h-14 rounded-full bg-[#8CA365]/10 flex items-center justify-center text-[#8CA365] mb-6 group-hover:scale-110 group-hover:bg-[#8CA365] group-hover:text-white transition-all duration-300 shadow-sm"
                >
                  <svg
                    className="w-7 h-7"
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
                <span className="block text-lg lg:text-xl font-bold text-[#34414A] mb-3 leading-snug">
                  HIPAA answering service for mental health & therapy practices
                </span>
                <p className="text-gray-600 text-sm leading-relaxed flex-grow mb-6">
                  Behavioral health requires an elevated level of privacy and empathy. We secure uniquely sensitive PHI while providing compassionate, crisis-aware intake for psychiatrists and therapists.
                </p>
                <div
                  className="mt-auto pt-4 border-t border-gray-100 flex items-center gap-2 text-[#8CA365] font-bold text-sm transition-all duration-300 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
                >
                  View Specialty Capabilities
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
              </a>
              {/* Card 3 (Dental) */}
              <a
                className="group flex flex-col bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:border-[#8CA365] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden outline-none focus:ring-2 focus:ring-[#8CA365]"
                href="#"
              >
                <div
                  className="w-14 h-14 rounded-full bg-[#8CA365]/10 flex items-center justify-center text-[#8CA365] mb-6 group-hover:scale-110 group-hover:bg-[#8CA365] group-hover:text-white transition-all duration-300 shadow-sm"
                >
                  <svg
                    className="w-7 h-7"
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
                <span className="block text-lg lg:text-xl font-bold text-[#34414A] mb-3 leading-snug">
                  HIPAA answering service for dentists & dental practices
                </span>
                <p className="text-gray-600 text-sm leading-relaxed flex-grow mb-6">
                  Capture high-value emergency dental leads over the weekend. We triage severe tooth pain and trauma directly to your on-call dentist while scheduling routine cleanings for Monday.
                </p>
                <div
                  className="mt-auto pt-4 border-t border-gray-100 flex items-center gap-2 text-[#8CA365] font-bold text-sm transition-all duration-300 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
                >
                  View Specialty Capabilities
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
              </a>
              {/* Card 4 (Urgent Care) */}
              <a
                className="group flex flex-col bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:border-[#8CA365] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden outline-none focus:ring-2 focus:ring-[#8CA365]"
                href="#"
              >
                <div
                  className="w-14 h-14 rounded-full bg-[#8CA365]/10 flex items-center justify-center text-[#8CA365] mb-6 group-hover:scale-110 group-hover:bg-[#8CA365] group-hover:text-white transition-all duration-300 shadow-sm"
                >
                  <svg
                    className="w-7 h-7"
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
                <span className="block text-lg lg:text-xl font-bold text-[#34414A] mb-3 leading-snug">
                  HIPAA answering service for urgent care & emergency clinics
                </span>
                <p className="text-gray-600 text-sm leading-relaxed flex-grow mb-6">
                  High-volume, high-stakes call routing. We filter non-critical inquiries and provide accurate wait times or facility directions while keeping your front desk focused on the waiting room.
                </p>
                <div
                  className="mt-auto pt-4 border-t border-gray-100 flex items-center gap-2 text-[#8CA365] font-bold text-sm transition-all duration-300 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
                >
                  View Specialty Capabilities
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
              </a>
              {/* Card 5 (Chiropractic/PT) */}
              <a
                className="group flex flex-col bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:border-[#8CA365] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden outline-none focus:ring-2 focus:ring-[#8CA365]"
                href="#"
              >
                <div
                  className="w-14 h-14 rounded-full bg-[#8CA365]/10 flex items-center justify-center text-[#8CA365] mb-6 group-hover:scale-110 group-hover:bg-[#8CA365] group-hover:text-white transition-all duration-300 shadow-sm"
                >
                  <svg
                    className="w-7 h-7"
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
                <span className="block text-lg lg:text-xl font-bold text-[#34414A] mb-3 leading-snug">
                  HIPAA answering service for chiropractors & physical therapists
                </span>
                <p className="text-gray-600 text-sm leading-relaxed flex-grow mb-6">
                  Keep your schedule full. We handle new patient intake, insurance verification questions, and secure appointment modifications so you can focus on patient recovery.
                </p>
                <div
                  className="mt-auto pt-4 border-t border-gray-100 flex items-center gap-2 text-[#8CA365] font-bold text-sm transition-all duration-300 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
                >
                  View Specialty Capabilities
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
              </a>
              {/* Card 6 (Hospitals) */}
              <a
                className="group flex flex-col bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:border-[#8CA365] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden outline-none focus:ring-2 focus:ring-[#8CA365]"
                href="#"
              >
                <div
                  className="w-14 h-14 rounded-full bg-[#8CA365]/10 flex items-center justify-center text-[#8CA365] mb-6 group-hover:scale-110 group-hover:bg-[#8CA365] group-hover:text-white transition-all duration-300 shadow-sm"
                >
                  <svg
                    className="w-7 h-7"
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
                <span className="block text-lg lg:text-xl font-bold text-[#34414A] mb-3 leading-snug">
                  HIPAA answering service for hospitals & multi-provider groups
                </span>
                <p className="text-gray-600 text-sm leading-relaxed flex-grow mb-6">
                  Enterprise-grade compliance. Complex on-call roster management, multi-department routing, and secure cross-facility message delivery backed by a robust, multi-entity BAA.
                </p>
                <div
                  className="mt-auto pt-4 border-t border-gray-100 flex items-center gap-2 text-[#8CA365] font-bold text-sm transition-all duration-300 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
                >
                  View Specialty Capabilities
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </section>
        {/* HIPAA Setup Process Section */}
        <section
          className="bg-gradient-to-br from-white to-slate-50 py-24 md:py-32 px-4 border-t border-gray-200 relative overflow-hidden"
        >
          <div className="max-w-7xl mx-auto relative z-10">
            {/* Header Section */}
            <div className="mb-16 relative z-10">
              <span
                className="block text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#34414A] mb-6 max-w-3xl leading-tight"
              >
                How to Set Up Your HIPAA Compliant Answering Service — 4 Steps to Full Compliance
              </span>
              <p className="text-gray-600 max-w-2xl text-lg leading-relaxed font-medium">
                Transitioning to a secure answering service shouldn't disrupt your practice. Our frictionless, 4-step onboarding process gets your secure overnight coverage live in a matter of hours.
              </p>
            </div>
            {/* Horizontal 4-Step Flow */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative mb-20">
              {/* Decorative Connecting Line (Desktop only) */}
              <div className="hidden lg:block absolute top-8 left-[10%] right-[10%] h-0.5 bg-gray-200 z-0">
              </div>
              {/* Step 1 */}
              <div className="relative z-10 flex flex-col group">
                <div
                  className="w-16 h-16 rounded-2xl bg-[#8CA365]/10 border-2 border-[#8CA365]/40 flex items-center justify-center text-2xl font-black text-[#8CA365] mb-6 group-hover:border-[#8CA365] group-hover:bg-[#8CA365] group-hover:text-white transition-all duration-300 shadow-sm mx-auto lg:mx-0"
                >
                  1
                </div>
                <div className="text-center lg:text-left">
                  <span className="block text-lg font-bold text-[#34414A] mb-3 leading-snug">
                    Sign your HIPAA Business Associate Agreement
                  </span>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    We initiate the relationship with absolute legal protection. We send a standardized, HHS-compliant BAA for your administrator to e-sign before data is exchanged.
                  </p>
                </div>
              </div>
              {/* Step 2 */}
              <div className="relative z-10 flex flex-col group">
                <div
                  className="w-16 h-16 rounded-2xl bg-[#8CA365]/10 border-2 border-[#8CA365]/40 flex items-center justify-center text-2xl font-black text-[#8CA365] mb-6 group-hover:border-[#8CA365] group-hover:bg-[#8CA365] group-hover:text-white transition-all duration-300 shadow-sm mx-auto lg:mx-0"
                >
                  2
                </div>
                <div className="text-center lg:text-left">
                  <span className="block text-lg font-bold text-[#34414A] mb-3 leading-snug">
                    Configure your call script and PHI protocols
                  </span>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    You dictate the clinical workflow. We work with your team to build a customized script that covers new patient intakes and emergency physician escalations.
                  </p>
                </div>
              </div>
              {/* Step 3 */}
              <div className="relative z-10 flex flex-col group">
                <div
                  className="w-16 h-16 rounded-2xl bg-[#8CA365]/10 border-2 border-[#8CA365]/40 flex items-center justify-center text-2xl font-black text-[#8CA365] mb-6 group-hover:border-[#8CA365] group-hover:bg-[#8CA365] group-hover:text-white transition-all duration-300 shadow-sm mx-auto lg:mx-0"
                >
                  3
                </div>
                <div className="text-center lg:text-left">
                  <span className="block text-lg font-bold text-[#34414A] mb-3 leading-snug">
                    Receptionists begin answering patient calls live
                  </span>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    You forward your lines, and we take over. Your patients are greeted by empathetic, US-based, and fully certified medical receptionists seamlessly.
                  </p>
                </div>
              </div>
              {/* Step 4 */}
              <div className="relative z-10 flex flex-col group">
                <div
                  className="w-16 h-16 rounded-2xl bg-[#8CA365]/10 border-2 border-[#8CA365]/40 flex items-center justify-center text-2xl font-black text-[#8CA365] mb-6 group-hover:border-[#8CA365] group-hover:bg-[#8CA365] group-hover:text-white transition-all duration-300 shadow-sm mx-auto lg:mx-0"
                >
                  4
                </div>
                <div className="text-center lg:text-left">
                  <span className="block text-lg font-bold text-[#34414A] mb-3 leading-snug">
                    Receive secure encrypted message summaries
                  </span>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Stay informed without risking a breach. Detailed call notes and requests are delivered instantly through our 256-bit encrypted provider portal and app.
                  </p>
                </div>
              </div>
            </div>
            {/* Full-Width Admin CTA Banner */}
            <div className="max-w-5xl mx-auto">
              <div
                className="bg-[#34414A] rounded-3xl p-8 md:p-12 shadow-xl border border-slate-700 relative overflow-hidden group flex flex-col md:flex-row items-center justify-between gap-8"
              >
                {/* Background Graphic */}
                <svg
                  className="absolute -right-10 -bottom-10 w-64 h-64 text-slate-600 opacity-10 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-700 pointer-events-none"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                  />
                </svg>
                <div className="relative z-10 md:w-2/3">
                  <span className="block text-[#8CA365] font-bold text-xs tracking-widest uppercase mb-3">
                    For Practice Managers
                  </span>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
                    Healthcare Administrator? Review our paperwork first.
                  </h3>
                  <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                    We believe in total transparency. Download a watermarked copy of our standard Business Associate Agreement (BAA) to review with your legal or compliance team before getting started.
                  </p>
                </div>
                <div className="relative z-10 w-full md:w-auto">
                  <a
                    className="w-full md:w-auto whitespace-nowrap bg-white hover:bg-slate-100 text-[#34414A] font-extrabold text-base py-4 px-8 rounded-xl transition-all shadow-md flex items-center justify-center gap-3"
                    href="#"
                  >
                    <svg
                      className="w-5 h-5 text-[#8CA365]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                    Download BAA Template
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Receptionist Training Expertise Section */}
        <section className="bg-[#0f2925] py-24 md:py-32 px-4 relative overflow-hidden">
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
          {/* Abstract Background Elements */}
          <div
            className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 rounded-full bg-[#8CA365] opacity-10 blur-3xl mix-blend-screen pointer-events-none"
          >
          </div>
          <div
            className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-blue-500 opacity-10 blur-3xl mix-blend-screen pointer-events-none"
          >
          </div>
          <div
            className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center"
          >
            {/* Left Column: Intro & Quote */}
            <div className="lg:col-span-5 flex flex-col gap-10">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-10 h-0.5 bg-[#8CA365]">
                  </span>
                  <span className="text-[#8CA365] font-bold text-sm tracking-widest uppercase">
                    Expertise Proof
                  </span>
                </div>
                <span
                  className="block text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight"
                >
                  How Our Receptionists Are HIPAA-Trained — The Certification Process Behind Every Patient Call
                </span>
                <p className="text-slate-300 text-lg leading-relaxed">
                  Process-level documentation is what separates a standard answering service from a true medical communications partner. Every agent must complete 80+ hours of dedicated, instructor-led medical compliance training before answering their first patient call.
                </p>
              </div>
              {/* Quote Block */}
              <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl relative">
                <svg
                  className="absolute top-6 left-6 w-12 h-12 text-[#8CA365] opacity-30"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"
                  />
                </svg>
                <div className="relative z-10">
                  <p className="text-white text-lg font-medium italic leading-relaxed mb-6">
                    "We don't just teach compliance; we drill it until it becomes muscle memory. A receptionist who fails our monthly PHI handling audit is immediately pulled from the medical queue. Patient privacy is a zero-tolerance policy."
                  </p>
                  <div
                    className="flex items-center gap-4"
                    itemScope
                    itemType="https://schema.org/Person"
                  >
                    <div className="w-12 h-12 rounded-full bg-slate-700 overflow-hidden border-2 border-[#8CA365]">
                      <img
                        alt="Sarah Jenkins - Head of Medical Training"
                        className="w-full h-full object-cover"
                        src="/images/sarah-jenkins.webp"
            width={1024}
            height={1024}
            loading="eager"
            fetchPriority="high"
          />
                    </div>
                    <div>
                      <span className="block text-white font-bold" itemProp="name">
                        Sarah Jenkins
                      </span>
                      <span className="block text-[#8CA365] text-sm" itemProp="jobTitle">
                        Head of Medical Training
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Right Column: The 3 Training Pillars */}
            <div className="lg:col-span-7 flex flex-col gap-6 relative">
              {/* Vertical Line Connector */}
              <div
                className="absolute left-8 top-10 bottom-10 w-px bg-gradient-to-b from-[#8CA365]/50 via-[#8CA365]/20 to-transparent z-0 hidden md:block"
              >
              </div>
              {/* Card 1 */}
              <div className="relative z-10 flex flex-col md:flex-row gap-6 items-start group">
                <div
                  className="w-16 h-16 rounded-full bg-slate-800 border-2 border-slate-700 flex items-center justify-center flex-shrink-0 group-hover:border-[#8CA365] group-hover:shadow-[0_0_20px_rgba(140,163,101,0.4)] transition-all duration-300"
                >
                  <svg
                    className="w-7 h-7 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <div
                  className="bg-white/5 backdrop-blur-sm border border-white/5 rounded-2xl p-8 hover:bg-white/10 transition-colors duration-300 w-full"
                >
                  <span className="block text-xl font-bold text-white mb-3 leading-snug">
                    HIPAA Privacy Rule and Security Rule training — what every receptionist learns before their first patient call
                  </span>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Our mandatory 40-hour foundation course dives deep into the legal frameworks of PHI. Receptionists are actively tested on identifying unauthorized disclosure scenarios, executing secure caller verification protocols, and defending against social engineering tactics.
                  </p>
                </div>
              </div>
              {/* Card 2 */}
              <div
                className="relative z-10 flex flex-col md:flex-row gap-6 items-start group mt-4 md:mt-0 md:ml-12"
              >
                <div
                  className="w-16 h-16 rounded-full bg-slate-800 border-2 border-slate-700 flex items-center justify-center flex-shrink-0 group-hover:border-[#8CA365] group-hover:shadow-[0_0_20px_rgba(140,163,101,0.4)] transition-all duration-300"
                >
                  <svg
                    className="w-7 h-7 text-white"
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
                <div
                  className="bg-white/5 backdrop-blur-sm border border-white/5 rounded-2xl p-8 hover:bg-white/10 transition-colors duration-300 w-full"
                >
                  <span className="block text-xl font-bold text-white mb-3 leading-snug">
                    PHI handling protocols — what information is captured, stored, and never disclosed
                  </span>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Agents operate under strict 'minimum necessary' operational guidelines. We drill our teams on exactly what demographic and clinical data to collect during an intake, and strictly enforce rules against transcribing sensitive diagnostic data over unencrypted channels.
                  </p>
                </div>
              </div>
              {/* Card 3 */}
              <div
                className="relative z-10 flex flex-col md:flex-row gap-6 items-start group mt-4 md:mt-0 md:ml-24"
              >
                <div
                  className="w-16 h-16 rounded-full bg-slate-800 border-2 border-slate-700 flex items-center justify-center flex-shrink-0 group-hover:border-[#8CA365] group-hover:shadow-[0_0_20px_rgba(140,163,101,0.4)] transition-all duration-300"
                >
                  <svg
                    className="w-7 h-7 text-white"
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
                <div
                  className="bg-white/5 backdrop-blur-sm border border-white/5 rounded-2xl p-8 hover:bg-white/10 transition-colors duration-300 w-full"
                >
                  <span className="block text-xl font-bold text-white mb-3 leading-snug">
                    Ongoing compliance audits — how we verify HIPAA standards on every shift, every month
                  </span>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Medical training is never 'one and done.' Our dedicated Quality Assurance team conducts blind audits on 10% of all medical tier calls. Any deviation from HIPAA protocol results in immediate suspension from the medical queue and mandatory retraining.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Trust Wall & Certifications Section */}
        {/* Trust Wall & Certifications Section */}
        <section
          className="bg-white py-24 md:py-32 px-4 relative overflow-hidden border-t border-slate-100"
        >
          {/* Abstract Glow Elements */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#8CA365] opacity-[0.03] rounded-full blur-[100px] pointer-events-none"
          >
          </div>
          <div className="max-w-7xl mx-auto relative z-10">
            {/* Header */}
            <div className="mb-16 text-center max-w-3xl mx-auto">
              <span
                className="inline-block py-1 px-3 rounded-full bg-[#8CA365]/10 text-[#8CA365] font-bold text-xs tracking-widest uppercase mb-4 border border-[#8CA365]/20"
              >
                The Trust Wall
              </span>
              <span
                className="block text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#34414A] mb-6 leading-tight"
              >
                Our HIPAA Certifications & Accreditations — Verified, Documented, Auditable
              </span>
              <p className="text-gray-600 text-lg leading-relaxed">
                We don't just ask for your trust; we provide the cryptographic, legal, and third-party documentation necessary to earn it. Review our live compliance framework below.
              </p>
            </div>
            {/* Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
              {/* Card 1: HIPAA Certification */}
              <div
                className="bg-white border border-gray-200 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row gap-8 items-start group hover:border-[#8CA365] hover:shadow-xl transition-all duration-500 relative overflow-hidden shadow-sm"
              >
                <div
                  className="absolute top-0 right-0 w-32 h-32 bg-[#8CA365] opacity-5 blur-3xl group-hover:opacity-10 transition-opacity"
                >
                </div>
                <div
                  className="w-24 h-24 md:w-32 md:h-32 rounded-2xl flex-shrink-0 overflow-hidden bg-slate-50 border border-gray-200 flex items-center justify-center p-2 shadow-sm group-hover:shadow-md transition-shadow"
                >
                  <img
                    alt="HIPAA Compliance Certification Seal"
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    src="/images/hipaa_compliance_badge_1778606013153.webp"
            width={1024}
            height={1024}
            loading="lazy"
            decoding="async"
          />
                </div>
                <div className="relative z-10">
                  <span className="block text-xl font-bold text-[#34414A] mb-3 leading-snug">
                    HIPAA certification — the certifying body, scope, and annual renewal process
                  </span>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    Issued by Compliancy Group™, this verified seal confirms our entire physical, administrative, and technical stack meets HHS requirements. The certification covers all data centers, app environments, and call floors, and is subjected to rigorous third-party audits and renewed annually.
                  </p>
                  <a
                    className="inline-flex items-center gap-2 text-[#8CA365] font-bold text-sm hover:text-[#6b7d4c] transition-colors"
                    href="#"
                  >
                    View Live Certificate
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              {/* Card 2: BBB Accreditation */}
              <div
                className="bg-white border border-gray-200 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row gap-8 items-start group hover:border-blue-500 hover:shadow-xl transition-all duration-500 relative overflow-hidden shadow-sm"
              >
                <div
                  className="absolute top-0 right-0 w-32 h-32 bg-blue-500 opacity-5 blur-3xl group-hover:opacity-10 transition-opacity"
                >
                </div>
                <div
                  className="w-24 h-24 md:w-32 md:h-32 rounded-2xl flex-shrink-0 overflow-hidden bg-slate-50 border border-gray-200 flex items-center justify-center p-2 shadow-sm group-hover:shadow-md transition-shadow"
                >
                  <img
                    alt="BBB Accreditation Seal"
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    src="/images/bbb_accreditation_badge_1778606027764.webp"
            width={1024}
            height={1024}
            loading="lazy"
            decoding="async"
          />
                </div>
                <div className="relative z-10">
                  <span className="block text-xl font-bold text-[#34414A] mb-3 leading-snug">
                    BBB accreditation — verified business standards for healthcare partners since 2012
                  </span>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    An A+ rating from the Better Business Bureau isn't just about customer service—it’s about ethical business practices, transparent billing, and a zero-complaint history regarding data handling and operational integrity in the B2B medical sector.
                  </p>
                  <a
                    className="inline-flex items-center gap-2 text-blue-600 font-bold text-sm hover:text-blue-800 transition-colors"
                    href="#"
                  >
                    Verify BBB Profile
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              {/* Card 3: Business Associate Agreement */}
              <div
                className="bg-white border border-gray-200 rounded-3xl p-8 md:p-10 flex flex-col items-start group hover:border-[#8CA365] hover:shadow-xl transition-all duration-500 relative overflow-hidden shadow-sm"
              >
                <div
                  className="w-14 h-14 rounded-2xl bg-[#8CA365]/10 border border-[#8CA365]/20 flex items-center justify-center text-[#8CA365] mb-6 group-hover:bg-[#8CA365] group-hover:text-white transition-all duration-300"
                >
                  <svg
                    className="w-6 h-6"
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
                <span className="block text-xl font-bold text-[#34414A] mb-3 leading-snug">
                  Business Associate Agreement — download a copy to review before signing
                </span>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  Transparency builds trust. Unlike competitors who hide their BAA until you sign a contract, we provide a full, watermarked version of our Business Associate Agreement upfront so your compliance officers can review our liability terms immediately.
                </p>
                <a
                  className="mt-auto w-full md:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-[#34414A] font-bold py-3 px-6 rounded-xl transition-all border border-gray-200 hover:border-gray-300 shadow-sm"
                  href="#"
                >
                  <svg
                    className="w-5 h-5 text-[#8CA365]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                  Download Sample BAA (PDF)
                </a>
              </div>
              {/* Card 4: Data Security Infrastructure */}
              <div
                className="bg-white border border-gray-200 rounded-3xl p-8 md:p-10 flex flex-col items-start group hover:border-[#8CA365] hover:shadow-xl transition-all duration-500 relative overflow-hidden shadow-sm"
              >
                <div
                  className="w-14 h-14 rounded-2xl bg-[#8CA365]/10 border border-[#8CA365]/20 flex items-center justify-center text-[#8CA365] mb-6 group-hover:bg-[#8CA365] group-hover:text-white transition-all duration-300"
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
                <span className="block text-xl font-bold text-[#34414A] mb-3 leading-snug">
                  Data security infrastructure — encryption standards, access controls, and audit logging specifications
                </span>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  Our network utilizes AES-256 bit encryption for data at rest and TLS 1.3 for data in transit. We enforce mandatory multi-factor authentication (MFA) across all employee terminals and maintain an immutable, time-stamped audit log of every PHI interaction.
                </p>
                <a
                  className="mt-auto w-full md:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-[#34414A] font-bold py-3 px-6 rounded-xl transition-all border border-gray-200 hover:border-gray-300 shadow-sm"
                  href="#"
                >
                  <svg
                    className="w-5 h-5 text-[#8CA365]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                  View Security Spec Sheet
                </a>
              </div>
            </div>
          </div>
          {/* Trust Credentials Schema */}
        </section>
        <PricingSection {...hipaaPricing} />
        {/* SOCIAL PROOF & REVIEWS SECTION */}
        <section className="bg-slate-50 py-24 px-4 relative w-full">
          <div className="max-w-7xl mx-auto">
            {/* Header Section */}
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#34414A] text-center mb-4 leading-tight"
            >
              What Medical Practices Say About Our HIPAA Compliant Answering Service
            </h2>
            <h3
              className="text-lg font-bold text-[#8CA365] text-center mb-16 flex items-center justify-center gap-2"
            >
              Rated 4.9/5 by doctors, dentists, and healthcare administrators across the US
              <span className="flex gap-1 text-yellow-400">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
              </span>
            </h3>
            {/* The 3-Column Review Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {/* Card 1 */}
              <div
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col h-full relative"
              >
                <span
                  className="inline-block bg-green-50 text-green-700 text-sm font-bold px-3 py-1 rounded-md mb-6 w-max border border-green-100"
                >
                  Zero compliance incidents in 2 years.
                </span>
                <div className="flex gap-1 mb-4 text-yellow-400 w-4 h-4">
                  <svg fill="currentColor" viewBox="0 0 20 20">
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                  <svg fill="currentColor" viewBox="0 0 20 20">
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                  <svg fill="currentColor" viewBox="0 0 20 20">
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                  <svg fill="currentColor" viewBox="0 0 20 20">
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                  <svg fill="currentColor" viewBox="0 0 20 20">
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                </div>
                <p
                  className="text-gray-600 leading-relaxed italic mb-8 flex-grow text-sm lg:text-base relative"
                >
                  <span className="absolute -top-2 -left-2 text-4xl text-gray-200 font-serif leading-none">
                    "
                  </span>
                  <span className="relative z-10">
                    We needed real human empathy, not an automated bot. The live receptionists handle our sensitive patient intake and after-hours medical dispatch flawlessly. Zero compliance incidents across 2 years of service.
                  </span>
                </p>
                <div className="flex items-center gap-4 mt-auto border-t border-gray-50 pt-4">
                  <div className="w-10 h-10 rounded-full bg-slate-200 flex-shrink-0">
                  </div>
                  <div>
                    <div className="text-[#34414A] font-bold text-sm">
                      Dr. Sarah Chen, MD
                    </div>
                    <div className="text-gray-500 text-xs font-medium">
                      Family Medicine • 8-provider group
                    </div>
                  </div>
                </div>
              </div>
              {/* Card 2 */}
              <div
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col h-full relative"
              >
                <span
                  className="inline-block bg-green-50 text-green-700 text-sm font-bold px-3 py-1 rounded-md mb-6 w-max border border-green-100"
                >
                  Passed HIPAA audit with no findings.
                </span>
                <div className="flex gap-1 mb-4 text-yellow-400 w-4 h-4">
                  <svg fill="currentColor" viewBox="0 0 20 20">
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                  <svg fill="currentColor" viewBox="0 0 20 20">
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                  <svg fill="currentColor" viewBox="0 0 20 20">
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                  <svg fill="currentColor" viewBox="0 0 20 20">
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                  <svg fill="currentColor" viewBox="0 0 20 20">
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                </div>
                <p
                  className="text-gray-600 leading-relaxed italic mb-8 flex-grow text-sm lg:text-base relative"
                >
                  <span className="absolute -top-2 -left-2 text-4xl text-gray-200 font-serif leading-none">
                    "
                  </span>
                  <span className="relative z-10">
                    Our HIPAA audit passed with no findings. They don't just take messages; they actually book patient appointments directly into our secure EMR system. It’s exactly like having a full-time medical office manager.
                  </span>
                </p>
                <div className="flex items-center gap-4 mt-auto border-t border-gray-50 pt-4">
                  <div className="w-10 h-10 rounded-full bg-slate-200 flex-shrink-0">
                  </div>
                  <div>
                    <div className="text-[#34414A] font-bold text-sm">
                      Dr. James Reynolds, DDS
                    </div>
                    <div className="text-gray-500 text-xs font-medium">
                      Dental Surgery Center • 3-location practice
                    </div>
                  </div>
                </div>
              </div>
              {/* Card 3 */}
              <div
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col h-full relative"
              >
                <span
                  className="inline-block bg-green-50 text-green-700 text-sm font-bold px-3 py-1 rounded-md mb-6 w-max border border-green-100"
                >
                  Secured PHI communication flow.
                </span>
                <div className="flex gap-1 mb-4 text-yellow-400 w-4 h-4">
                  <svg fill="currentColor" viewBox="0 0 20 20">
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                  <svg fill="currentColor" viewBox="0 0 20 20">
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                  <svg fill="currentColor" viewBox="0 0 20 20">
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                  <svg fill="currentColor" viewBox="0 0 20 20">
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                  <svg fill="currentColor" viewBox="0 0 20 20">
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                </div>
                <p
                  className="text-gray-600 leading-relaxed italic mb-8 flex-grow text-sm lg:text-base relative"
                >
                  <span className="absolute -top-2 -left-2 text-4xl text-gray-200 font-serif leading-none">
                    "
                  </span>
                  <span className="relative z-10">
                    Before this service, we struggled with secure messaging for our on-call nurses. Now, every after-hours call is handled with strict protocol, and messages are routed via encrypted channels immediately.
                  </span>
                </p>
                <div className="flex items-center gap-4 mt-auto border-t border-gray-50 pt-4">
                  <div className="w-10 h-10 rounded-full bg-slate-200 flex-shrink-0">
                  </div>
                  <div>
                    <div className="text-[#34414A] font-bold text-sm">
                      Elena Rodriguez, RN, BSN
                    </div>
                    <div className="text-gray-500 text-xs font-medium">
                      Home Health Agency • 45 staff members
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* The Outcome Metrics Strip */}
            <div
              className="bg-[#1a232c] rounded-3xl p-8 md:p-12 shadow-2xl max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-700 text-center relative overflow-hidden"
            >
              {/* Glowing accent inside strip */}
              <div
                className="absolute top-0 right-0 w-[200px] h-[200px] bg-[#8CA365] rounded-full mix-blend-screen filter blur-[100px] opacity-10 pointer-events-none"
              >
              </div>
              <div className="relative z-10">
                <div className="text-5xl font-black text-white mb-2">
                  94%
                </div>
                <div className="text-slate-400 font-medium uppercase tracking-wider text-sm">
                  Caller Satisfaction
                </div>
              </div>
              <div className="relative z-10">
                <div className="text-5xl font-black text-white mb-2">
                  {'<'} 4
                </div>
                <div className="text-slate-400 font-medium uppercase tracking-wider text-sm">
                  Rings Average Answer Time
                </div>
              </div>
              <div className="relative z-10">
                <div className="text-5xl font-black text-[#8CA365] mb-2">
                  0
                </div>
                <div className="text-slate-400 font-medium uppercase tracking-wider text-sm">
                  Calls Sent to Voicemail
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* SECTION 9: FAQ (ACCORDION GRID) */}
        <FaqSection {...hipaaFaq} />
        {/* SECTION 10: FINAL CTA (DUAL PATH) */}
        <section className="bg-[#0f2925] py-24 px-4 relative overflow-hidden text-center">
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
          <div
            className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-[#8CA365]/10 to-transparent pointer-events-none"
          >
          </div>
          <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Start Filling Your Calendar Today — No Contracts, No Setup Fees
            </h2>
            <h3 className="text-xl text-slate-300 font-medium mb-10 max-w-2xl leading-relaxed">
              Connect your calendar. Forward your number. We start booking for you — tonight.
            </h3>
            {/* CTA Paths 1 & 2 */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12 w-full justify-center">
              <a
                className="flex justify-center items-center bg-[#8CA365] hover:bg-[#7a8f57] text-white font-bold text-lg py-4 px-8 rounded-xl shadow-lg transition-transform hover:-translate-y-1 text-center min-w-[250px]"
                href="#"
              >
                Get Started Now
              </a>
              <a
                className="flex justify-center items-center bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-lg py-4 px-8 rounded-xl backdrop-blur-sm transition-all text-center min-w-[250px]"
                href="#"
              >
                See Our Integrations
              </a>
            </div>
            {/* Path 3: Enterprise/High-Volume Phone Block */}
            <div
              className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm w-full max-w-md hover:bg-white/10 transition-colors"
            >
              <div
                className="text-[#8CA365] font-bold text-sm uppercase tracking-wider mb-2 flex items-center justify-center gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse">
                </span>
                Need custom integration? Talk to us:
              </div>
              <a
                className="block text-3xl md:text-4xl font-black text-white hover:text-[#8CA365] transition-colors mb-2"
                href="tel:8574531055"
              >
                (857) 453-1055
              </a>
              <div className="text-slate-400 text-sm">
                High-volume & enterprise scheduling discussions.
              </div>
            </div>
          </div>
        </section>
      </main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
    </>
  )
}
