import { Fraunces, Outfit } from 'next/font/google'
import BackToTop from '@/components/BackToTop'
import SiteFooter from '@/components/SiteFooter'
import SiteHeader from '@/components/SiteHeader'
import SiteScripts from '@/components/SiteScripts'
import './globals.css'

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-outfit',
  display: 'swap',
})

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-fraunces',
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL('https://livephoneanswering.com'),

  title: 'Live Phone Answering Services | Generate Leads While You Sleep',

  description:
    'Professional live phone answering services for US businesses. Real human receptionists available 24/7.',

  // Prevent search engines from indexing the website
  robots: {
    index: false,
    follow: false,
  },

  openGraph: {
    type: 'website',
    siteName: 'LivePhoneAnswering',
    locale: 'en_US',
    url: 'https://livephoneanswering.com',
    title: 'Live Phone Answering Services | Generate Leads While You Sleep',
    description:
      'Professional live phone answering services for US businesses. Real human receptionists available 24/7.',
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
    title: 'Live Phone Answering Services | Generate Leads While You Sleep',
    description:
      'Professional live phone answering services for US businesses. Real human receptionists available 24/7.',
    images: ['/images/Phone Answering Services.webp'],
  },

  icons: {
    icon: [
      {
        url: '/images/LPA_Favicon.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        url: '/images/LPA_Favicon.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        url: '/images/LPA_Favicon.png',
        sizes: '192x192',
        type: 'image/png',
      },
    ],

    apple: [
      {
        url: '/images/LPA_Favicon.png',
        sizes: '180x180',
      },
    ],

    shortcut: ['/images/LPA_Favicon.png'],
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'LivePhoneAnswering',
  url: 'https://livephoneanswering.com',
  description:
    'Professional live phone answering services for US businesses. Real human receptionists available 24/7.',
  telephone: '+18574531055',
  email: 'hello@livephoneanswering.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'New York',
    addressRegion: 'NY',
    addressCountry: 'US',
  },
  areaServed: 'US',
  serviceType: 'Live Phone Answering Service',
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en-US"
      className={`scroll-smooth ${outfit.variable} ${fraunces.variable}`}
    >
      <body className="font-sans bg-white text-navy antialiased overflow-x-hidden">
        <SiteHeader />

        {children}

        <SiteFooter />

        <BackToTop />

        <SiteScripts />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </body>
    </html>
  )
}
