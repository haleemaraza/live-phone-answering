import FaqSection from '@/components/FaqSection'
import { homeFaq } from '@/components/faq-content'
import IndustriesTabs from '@/components/IndustriesTabs'
import Link from 'next/link'
import VirtualReceptionistHero from '@/features/virtual-receptionist/VirtualReceptionistHero'
import FrontDeskIntro from '@/features/virtual-receptionist/FrontDeskIntro'
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
  title: "Virtual Receptionist Service | Live Phone Answering",
  description: "Professional virtual receptionist service for US businesses. Real human receptionists answer every call 24/7 in your company's name. Get started today.",
  alternates: { canonical: "/virtual-receptionist" },
  openGraph: {
    type: 'website',
    siteName: 'LivePhoneAnswering',
    locale: 'en_US',
    images: [{ url: '/images/Phone Answering Services.webp', width: 1122, height: 1402, alt: 'Live Phone Answering Service' }],
    title: "Virtual Receptionist Service | Live Phone Answering",
    description: "Professional virtual receptionist service for US businesses. Real human receptionists answer every call 24/7 in your company's name. Get started today.",
    url: "/virtual-receptionist",
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/Phone Answering Services.webp'],
    title: "Virtual Receptionist Service | Live Phone Answering",
    description: "Professional virtual receptionist service for US businesses. Real human receptionists answer every call 24/7 in your company's name. Get started today.",
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
      
      <CallHandling />
      <CallExperience />
      <SetupSteps />
      <CoverageOptions />
      <MinutePlans />
      <ToolsConnect />
      <IndustriesTabs />
      <BusinessVoice />
      <FaqSection {...homeFaq} />
            <ContactFormSection theme="dark" />
      
      </main>
    </>
  )
}
