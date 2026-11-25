
export const metadata = {
  title: "Privacy Policy | Live Phone Answering",
  description: "How Live Phone Answering collects, uses and protects your information, and the choices you have about your data.",
  alternates: { canonical: "/privacy-policy" },
  // Kept out of search for now. Remove this line (and restore the route in
  // app/sitemap.js) to let it be indexed again.
  robots: { index: false, follow: true },
  openGraph: {
    type: 'website',
    siteName: 'LivePhoneAnswering',
    locale: 'en_US',
    images: [{ url: '/images/Phone Answering Services.webp', width: 1122, height: 1402, alt: 'Live Phone Answering Service' }],
    title: "Privacy Policy | Live Phone Answering",
    description: "How Live Phone Answering collects, uses and protects your information, and the choices you have about your data.",
    url: "/privacy-policy",
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/Phone Answering Services.webp'],
    title: "Privacy Policy | Live Phone Answering",
    description: "How Live Phone Answering collects, uses and protects your information, and the choices you have about your data.",
  },
}

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="py-20 px-4 bg-white min-h-[50vh]">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-navy mb-8">
            Privacy Policy
          </h1>
          <div className="prose max-w-none text-gray-600">
            <p className="mb-4">
              Last updated: June 2026
            </p>
            <p className="mb-4">
              This Privacy Policy describes how Live Phone Answering collects, uses, and discloses your information...
            </p>
            <h2 className="text-2xl font-semibold text-navy mt-8 mb-4">
              1. Information We Collect
            </h2>
            <p className="mb-4">
              We collect information that you provide directly to us, such as when you create an account, request a quote, or contact customer support.
            </p>
            <h2 className="text-2xl font-semibold text-navy mt-8 mb-4">
              2. How We Use Your Information
            </h2>
            <p className="mb-4">
              We use the information we collect to operate, maintain, and provide the features and functionality of our services.
            </p>
            <h2 className="text-2xl font-semibold text-navy mt-8 mb-4">
              3. Contact Us
            </h2>
            <p className="mb-4">
              If you have any questions about this Privacy Policy, please contact us.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
