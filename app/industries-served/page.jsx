import IndustriesHero from '@/features/industries/IndustriesHero'
import IndustriesTabs from '@/components/IndustriesTabs'
import AdaptSteps from '@/features/industries/AdaptSteps'
import TrustStats from '@/features/industries/TrustStats'
import DarkCtaBanner from '@/components/DarkCtaBanner'
import FaqSection from '@/components/FaqSection'
import { industriesFaq } from '@/components/faq-content'
import Link from 'next/link'

export const metadata = {
  title: "Industries We Serve | Live Phone Answering",
  description: "We serve 50+ industries including healthcare, legal, home services and real estate. See how live answering fits your exact workflow.",
  alternates: { canonical: "/industries-served" },
  openGraph: {
    type: 'website',
    siteName: 'LivePhoneAnswering',
    locale: 'en_US',
    images: [{ url: '/images/Phone Answering Services.webp', width: 1122, height: 1402, alt: 'Live Phone Answering Service' }],
    title: "Industries We Serve | Live Phone Answering",
    description: "We serve 50+ industries including healthcare, legal, home services and real estate. See how live answering fits your exact workflow.",
    url: "/industries-served",
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/Phone Answering Services.webp'],
    title: "Industries We Serve | Live Phone Answering",
    description: "We serve 50+ industries including healthcare, legal, home services and real estate. See how live answering fits your exact workflow.",
  },
}

export default function IndustriesServedPage() {
  return (
    <>
      <IndustriesHero />
      {/* Industry Tabs Section */}
      <IndustriesTabs
        sectionClassName="py-20 md:py-28 bg-white font-sans relative overflow-hidden"
        headingClassName="text-3xl sm:text-4xl md:text-5xl font-bold text-[#34414A] tracking-tight mb-4"
        heading="Select Your Industry"
        intro="See how we integrate seamlessly into your specialized software and daily operations."
      />
      {/* HOW WE ADAPT TO YOUR INDUSTRY (3-Step) */}
      <AdaptSteps />
      {/* INDUSTRY TRUST SIGNALS (Stats Strip) */}
      <TrustStats />
      <FaqSection {...industriesFaq} />
      {/* FAQ Accordion Script */}
      <DarkCtaBanner
        heading="Your Industry, Our Expertise — Let's Talk"
        body="Whether you're in healthcare, legal, real estate, or home services — our trained receptionists are ready to answer like part of your team. No contracts, no hidden fees."
        points={['Industry-trained agents', 'HIPAA & compliance ready', 'CRM integrations', '24/7/365 coverage']}
        primary={{ href: '/contact-us', label: 'Get Started Today →' }}
        secondary={{ href: '/pricing', label: 'View Pricing Plans' }}
      />
    </>
  )
}
