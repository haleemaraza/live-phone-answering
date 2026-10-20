import ContactFormSection from '@/components/ContactFormSection'
import FaqSection from '@/components/FaqSection'
import { contactFaq } from '@/components/faq-content'

export const metadata = {
  title: "Contact Us | Live Phone Answering",
  description: "Contact Live Phone Answering to set up your dedicated receptionist. Call (857) 453-1055 or send the form — we reply within 1 business hour.",
  alternates: { canonical: "/contact-us" },
  openGraph: {
    type: 'website',
    siteName: 'LivePhoneAnswering',
    locale: 'en_US',
    images: [{ url: '/images/Phone Answering Services.webp', width: 1122, height: 1402, alt: 'Live Phone Answering Service' }],
    title: "Contact Us | Live Phone Answering",
    description: "Contact Live Phone Answering to set up your dedicated receptionist. Call (857) 453-1055 or send the form — we reply within 1 business hour.",
    url: "/contact-us",
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/Phone Answering Services.webp'],
    title: "Contact Us | Live Phone Answering",
    description: "Contact Live Phone Answering to set up your dedicated receptionist. Call (857) 453-1055 or send the form — we reply within 1 business hour.",
  },
}

export default function ContactUsPage() {
  return (
    <>
      {/* HERO SECTION (Mint Green) */}
      <section
        className="relative overflow-hidden py-16 sm:py-20 lg:py-24 px-4 lg:px-[5%]"
        aria-label="Contact Hero"
      >
        <div
          className="absolute inset-0 z-0"
          style={{ background: "linear-gradient(160deg, #c6ecb5 0%, #d4f1c4 20%, #e2f5d8 40%, #eef8e8 60%, #f5fbf2 80%, #ffffff 100%)" }}
        >
        </div>
        <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
          <div
            className="absolute -top-20 -left-16 w-[350px] h-[350px] bg-[#8CA365]/15 opacity-70"
            style={{ animation: "blobMorph 12s ease-in-out infinite", borderRadius: "42% 58% 55% 45% / 56% 42% 58% 44%" }}
          >
          </div>
          <div
            className="absolute top-1/3 -right-20 w-[280px] h-[280px] bg-[#295657]/10 opacity-60"
            style={{ animation: "blobMorph 15s ease-in-out infinite 3s", borderRadius: "55% 45% 42% 58% / 44% 56% 44% 56%" }}
          >
          </div>
          <div
            className="absolute -bottom-16 left-1/3 w-[320px] h-[320px] bg-[#8CA365]/10 opacity-50"
            style={{ animation: "blobMorph 18s ease-in-out infinite 6s", borderRadius: "45% 55% 58% 42% / 58% 44% 42% 58%" }}
          >
          </div>
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{ backgroundImage: "linear-gradient(#295657 1px, transparent 1px), linear-gradient(90deg, #295657 1px, transparent 1px)", backgroundSize: "48px 48px" }}
          >
          </div>
          <div
            className="absolute top-0 right-0 w-[600px] h-[600px] opacity-[0.03]"
            style={{ background: "repeating-linear-gradient(135deg, #295657, #295657 1px, transparent 1px, transparent 40px)" }}
          >
          </div>
        </div>
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <div
            className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm text-[#4a7a3e] rounded-full text-sm font-semibold px-5 py-2 mb-6 shadow-sm border border-white/50"
            style={{ animation: "blobFadeUp 0.7s cubic-bezier(0.16,1,0.3,1) both" }}
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            Get In Touch
          </div>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.6rem] font-bold text-[#1a2e35] leading-[1.1] tracking-tight"
            style={{ animation: "blobFadeUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.1s both" }}
          >
            Let's Get Your Phones
            <br className="hidden sm:block" />
            Answered Today
          </h1>
          <p
            className="text-base sm:text-lg text-[#3d5c42] mt-5 max-w-2xl mx-auto leading-relaxed"
            style={{ animation: "blobFadeUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.2s both" }}
          >
            Fill out the form below and our onboarding team will reach out within minutes. Or call us directly — we're here 24/7.
          </p>
        </div>
      </section>
      <ContactFormSection theme="light" />
      {/* CONTACT INFO CARDS */}
      <section className="py-14 sm:py-20 bg-slate-50 border-t border-gray-100 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Phone */}
            <div
              className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center"
            >
              <div
                className="w-16 h-16 bg-[#8CA365]/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#8CA365]/20 transition-colors"
              >
                <svg
                  className="w-8 h-8 text-[#8CA365]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#34414A] mb-2">
                Call Us
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Speak directly with our team
              </p>
              <a
                href="tel:8574531055"
                className="text-lg font-bold text-[#8CA365] hover:text-[#7a8f57] transition-colors"
              >
                (857) 453-1055
              </a>
            </div>
            {/* Email */}
            <div
              className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center"
            >
              <div
                className="w-16 h-16 bg-[#295657]/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#295657]/20 transition-colors"
              >
                <svg
                  className="w-8 h-8 text-[#295657]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#34414A] mb-2">
                Email Us
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                We respond within 1 business hour
              </p>
              <a
                href="mailto:hello@livephoneanswering.com"
                className="text-lg font-bold text-[#295657] hover:text-[#1e4445] transition-colors"
              >
                hello@livephoneanswering.com
              </a>
            </div>
            {/* Hours */}
            <div
              className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center"
            >
              <div
                className="w-16 h-16 bg-[#8CA365]/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#8CA365]/20 transition-colors"
              >
                <svg
                  className="w-8 h-8 text-[#8CA365]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#34414A] mb-2">
                Office Hours
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Our agents are always available
              </p>
              <span className="text-lg font-bold text-[#34414A]">
                24/7/365 — Always On
              </span>
            </div>
          </div>
        </div>
      </section>
      <FaqSection {...contactFaq} />
      {/* Contact FAQ Accordion Script */}
      <section className="bg-[#0f2925] py-14 sm:py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div
            className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-[#8CA365]/40 rounded-full blur-[120px]"
          >
          </div>
          <div
            className="absolute bottom-0 -right-20 w-[700px] h-[700px] bg-[#00cc7a]/20 rounded-full blur-[150px]"
          >
          </div>
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#215153]/60 rounded-full blur-[120px]"
          >
          </div>
        </div>
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-4 md:mb-6"
          >
            Never Miss Another Call Again
          </h2>
          <p className="text-slate-300 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Join 2,400+ US businesses who trust our professional receptionists to handle their calls 24/7.
          </p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-10">
            <div className="flex items-center gap-2">
              <svg
                className="text-[#8CA365] w-5 h-5 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-white font-medium text-sm">
                5-minute setup
              </span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="text-[#8CA365] w-5 h-5 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-white font-medium text-sm">
                No contracts
              </span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="text-[#8CA365] w-5 h-5 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-white font-medium text-sm">
                Plans from $350/mo
              </span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex justify-center items-center bg-[#8CA365] hover:bg-[#7a8f57] text-white font-bold py-4 px-10 rounded-xl shadow-lg shadow-[#8CA365]/30 transition-all hover:-translate-y-1 text-lg"
            >
              Fill Out the Form ↑
            </a>
            <a
              href="tel:8574531055"
              className="w-full sm:w-auto inline-flex justify-center items-center bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white hover:bg-white/20 font-bold py-4 px-10 rounded-xl transition-all hover:-translate-y-1 text-lg"
            >
              Call (857) 453-1055
            </a>
          </div>
        </div>
      </section>
      {/* FOOTER */}
    </>
  )
}
