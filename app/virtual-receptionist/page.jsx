import FaqSection from '@/components/FaqSection'
import { virtualReceptionistFaq } from '@/components/faq-content'
import IndustriesTabs from '@/components/IndustriesTabs'
import Link from 'next/link'
import VirtualReceptionistHero from '@/features/virtual-receptionist/VirtualReceptionistHero'
import FrontDeskIntro from '@/features/virtual-receptionist/FrontDeskIntro'
import ComparisonOptions from '@/features/virtual-receptionist/ComparisonOptions'
import CallHandling from '@/features/virtual-receptionist/CallHandling'
import CallExperience from '@/features/virtual-receptionist/CallExperience'
import CoverageOptions from '@/features/virtual-receptionist/CoverageOptions'
import SetupSteps from '@/features/virtual-receptionist/SetupSteps'
import ToolsConnect from '@/features/virtual-receptionist/ToolsConnect'
import BusinessVoice from '@/features/virtual-receptionist/BusinessVoice'
import MinutePlans from '@/components/MinutePlans'
import ContactFormSection from '@/components/ContactFormSection'
import RatingsTrustBar from '@/components/RatingsTrustBar'
export const metadata = {
  title: "Hire a Virtual Receptionist | Live Call Answering",
  description: " Hire a professional virtual receptionist for 24/7 live phone answering. Save 50–80% vs. in-house staff. Handle calls, appointments, messages & more. Call now!" ,
  alternates: { canonical: "/virtual-receptionist" },
  openGraph: {
    type: 'website',
    siteName: 'LivePhoneAnswering',
    locale: 'en_US',
    images: [{ url: '/images/Phone Answering Services.webp', width: 1122, height: 1402, alt: 'Live Phone Answering Service' }],
    title: "24/7 Virtual Receptionist Service | Live Phone Answering Support",
    description: " Hire a professional virtual receptionist for 24/7 live phone answering. Save 50–80% vs. in-house staff. Handle calls, appointments, messages & more. Call now!" ,
    url: "/virtual-receptionist",
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/Phone Answering Services.webp'],
    title: "24/7 Virtual Receptionist Service | Live Phone Answering Support",
    description: " Hire a professional virtual receptionist for 24/7 live phone answering. Save 50–80% vs. in-house staff. Handle calls, appointments, messages & more. Call now!" ,
  },
}

export default function VirtualReceptionistPage() {
  return (
    <>
      {/* Main Content for Virtual Receptionist */}
      <main className="w-full">
        <VirtualReceptionistHero />
        <RatingsTrustBar label="Trusted by 5,000+ US businesses booking appointments by phone every day" />
    
      <FrontDeskIntro />
      
      <ComparisonOptions />
      <CallHandling />
      <CallExperience />
      <SetupSteps />
      <CoverageOptions />
      <MinutePlans />
      <ToolsConnect />
      <IndustriesTabs heading="Tailored to Match Your Operational Workflow" intro="Supporting specialized industries, our receptionists integrate directly into your software and daily operations to ensure effortless team alignment." />
      <BusinessVoice />
      <FaqSection {...virtualReceptionistFaq} />
            <ContactFormSection
        theme="dark"
        heading="Get Started with Your Virtual Receptionist Today — No Credit Card, No Long-Term Contract"
        subheading="Set up in under 5 minutes. Cancel anytime."
        body="Stop losing leads and start growing your business with a professional, 24/7 receptionist team."
      />
      
      </main>
    </>
  )
}
