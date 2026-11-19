import OrderTakingHero from '@/features/order-taking/OrderTakingHero'
import RatingsTrustBar from '@/components/RatingsTrustBar'
import OrderTakingServices from '@/features/order-taking/OrderTakingServices'
import OrderTakingHowItWorks from '@/features/order-taking/OrderTakingHowItWorks'
import OrderRecord from '@/features/order-taking/OrderRecord'
import OrderCatalogueRules from '@/features/order-taking/OrderCatalogueRules'
import OrderTakingIntegrations from '@/features/order-taking/OrderTakingIntegrations'
import OrderTakingBenefits from '@/features/order-taking/OrderTakingBenefits'
import OrderBusinessTypes from '@/features/order-taking/OrderBusinessTypes'
import OrderTakingReceptionist from '@/features/order-taking/OrderTakingReceptionist'
import OrderTakingWhyChooseUs from '@/features/order-taking/OrderTakingWhyChooseUs'
import PlanPricing from '@/components/PlanPricing'
import Testimonials from '@/components/Testimonials'
import FaqSection from '@/components/FaqSection'
import ContactFormSection from '@/components/ContactFormSection'
import { orderTakingFaq } from '@/components/faq-content'

const BASE_URL = 'https://livephoneanswering.com'

export const metadata = {
  title: 'Order Taking Answering Service for Phone Orders | Live Phone Answering',
  description:
    'Order taking answering service for phone orders. Live receptionists capture product choices, variants, quantities and delivery details using your catalogue and approved process.',
  alternates: { canonical: '/order-taking' },
  openGraph: {
    type: 'website',
    siteName: 'LivePhoneAnswering',
    locale: 'en_US',
    url: '/order-taking',
    title: 'Order Taking Answering Service for Phone Orders',
    description:
      'A helpful answer, clear order details and an agreed next step — phone orders captured against your catalogue and handling rules.',
    images: [
      {
        url: '/images/Phone Answering Services.webp',
        width: 1122,
        height: 1402,
        alt: 'Live Phone Answering Service',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Order Taking Answering Service for Phone Orders',
    description:
      'A helpful answer, clear order details and an agreed next step — phone orders captured against your catalogue and handling rules.',
    images: ['/images/Phone Answering Services.webp'],
  },
}

// Describes the offering itself, which is what makes the page eligible for a
// service result rather than a plain blue link. The FAQ block is generated
// from the same data the page renders, so the two cannot drift apart.
const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Order Taking Answering Service',
    serviceType: 'Phone order taking and order enquiry handling',
    description:
      'Live receptionists answer order calls in a business’s name, capture product choices, variants, quantities and delivery preferences against the approved catalogue, record the order status and follow the agreed route for acceptance, payment and exceptions.',
    url: `${BASE_URL}/order-taking`,
    areaServed: { '@type': 'Country', name: 'United States' },
    provider: {
      '@type': 'Organization',
      name: 'LivePhoneAnswering',
      url: BASE_URL,
      telephone: '+1-857-453-1055',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: orderTakingFaq.items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  },
]

export default function OrderTakingPage() {
  return (
    <main className="w-full">
      <OrderTakingHero />
      <RatingsTrustBar label="Trusted by 5,000+ high-volume local businesses & multi-line front desks" />
      <OrderTakingServices />
      <OrderTakingHowItWorks />
      <OrderRecord />
      <OrderCatalogueRules />
      <OrderTakingIntegrations />
      <OrderTakingBenefits />
      <OrderBusinessTypes />
      <OrderTakingReceptionist />
      <OrderTakingWhyChooseUs />
      <PlanPricing
        headingId="order-taking-pricing-heading"
        descriptions={{
          'Starter Virtual Receptionist':
            'For businesses that need live call answering, order request capture and basic product questions.',
          'Growth Virtual Receptionist':
            'For growing teams that need catalogue-based answers, order details and delivery preferences captured.',
          'Business Virtual Receptionist':
            'For higher call volumes, wholesale requests and more detailed order routing and approval requirements.',
        }}
        customTitle="Need 1,000+ Minutes or Custom Order Handling?"
        customBody="Discuss catalogue access, order-system permissions and approval routes with our team."
        footnote="Order acceptance, payment and fulfilment follow your agreed process."
      />
      <Testimonials />
      <FaqSection {...orderTakingFaq} />
      <ContactFormSection theme="dark" />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
    </main>
  )
}
