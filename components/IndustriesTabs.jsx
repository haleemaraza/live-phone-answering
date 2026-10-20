'use client'

import Link from 'next/link'
import { useState } from 'react'

const INDUSTRIES = [
  {
    id: 'healthcare',
    label: 'Healthcare & Medical',
    iconPath:
      'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10',
    title: 'Patient-first answering.',
    body: 'Our HIPAA-compliant agents are trained to handle sensitive patient data, route emergency escalations accurately, and schedule appointments directly into your EMR/EHR systems.',
    badge: { text: 'HIPAA Compliant', className: 'bg-blue-50 text-blue-700 border-blue-100' },
    cards: [
      { name: 'Medical Clinics', href: '/medical-answering-service' },
      { name: 'Dental Offices', href: '/medical-answering-service' },
      { name: 'Specialists & Surgeons', href: '/medical-answering-service' },
      { name: 'Pharmacies', href: '/medical-answering-service' },
      { name: 'Home Health & Hospice', href: '/hipaa-compliant-answering-service' },
    ],
  },
  {
    id: 'professional',
    label: 'Legal & Professional',
    iconPath:
      'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    title: "Protecting your firm's time.",
    body: 'We act as the front line for your firm, filtering out spam, completing complex legal intake forms, and routing high-value prospects directly to your cell.',
    badge: { text: 'Confidential Intake', className: 'bg-slate-100 text-slate-700 border-slate-200' },
    cards: [
      { name: 'Law Firms', href: '/industries-served' },
      { name: 'Real Estate Brokers', href: '/industries-served' },
      { name: 'Accounting & CPA', href: '/industries-served' },
      { name: 'Insurance Agencies', href: '/industries-served' },
      { name: 'Financial Advisors', href: '/industries-served' },
    ],
  },
  {
    id: 'home-services',
    label: 'Home Services',
    iconPath:
      'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
    title: "Book jobs while you're in the field.",
    body: 'Never lose a job to a competitor because you were on a roof or under a sink. We qualify leads and book them straight into ServiceTitan or Housecall Pro.',
    badge: { text: 'CRM Integration', className: 'bg-amber-50 text-amber-700 border-amber-100' },
    cards: [
      { name: 'HVAC & Cooling', href: '/industries-served' },
      { name: 'Plumbing', href: '/industries-served' },
      { name: 'Roofing', href: '/industries-served' },
      { name: 'Electrical', href: '/industries-served' },
      { name: 'Cleaning & Janitorial', href: '/industries-served' },
    ],
  },
  {
    id: 'specialized',
    label: 'Specialized',
    iconPath: 'M13 10V3L4 14h7v7l9-11h-7z',
    title: 'Custom scripts for custom businesses.',
    body: 'Whether you are managing massive apartment portfolios, running a marketing agency, or booking salon appointments, we adapt strictly to your exact protocols.',
    badge: { text: 'Custom Protocols', className: 'bg-purple-50 text-purple-700 border-purple-100' },
    cards: [
      { name: 'Property Management', href: '/industries-served' },
      { name: 'Marketing Agencies', href: '/industries-served' },
      { name: 'IT & Tech Support', href: '/industries-served' },
      { name: 'Salons & Spas', href: '/industries-served' },
      { name: 'E-commerce & Retail', href: '/industries-served' },
    ],
  },
]

const TAB_BASE = 'whitespace-nowrap px-4 py-3 text-sm md:text-base transition-colors flex items-center gap-2 border-b-2'
const TAB_ON = 'font-bold text-[#8CA365] border-[#8CA365]'
const TAB_OFF = 'font-medium text-gray-500 hover:text-[#34414A] border-transparent hover:border-gray-300'

function ArrowIcon() {
  return (
    <svg
      className="w-5 h-5 text-gray-400 group-hover:text-[#8CA365] transform transition-transform group-hover:translate-x-1"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  )
}

// No .reveal here on purpose: this is a client component, so React rewrites
// className on re-render and wipes the 'active' class the global reveal
// observer adds — leaving the heading stuck at opacity 0 for good.
export default function IndustriesTabs({
  sectionClassName = 'py-20 md:py-32 bg-white font-sans relative overflow-hidden',
  headingClassName = 'text-3xl sm:text-4xl md:text-5xl font-bold text-[#34414A] tracking-tight mb-4',
  heading = 'Trained for your exact workflow.',
  intro = 'We serve over 50+ verticals. Select your category to see how we integrate seamlessly into your specialized software and daily operations.',
}) {
  const [activeId, setActiveId] = useState(INDUSTRIES[0].id)

  return (
    <section className={sectionClassName} id="industries" aria-labelledby="industries-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 id="industries-heading" className={headingClassName}>
            {heading}
          </h2>
          <p className="text-lg text-gray-600">{intro}</p>
        </div>

        <div
          className="flex flex-nowrap overflow-x-auto justify-start md:justify-center gap-2 md:gap-8 border-b border-gray-100 mb-12 pb-px no-scroll"
          role="tablist"
          aria-label="Industries we serve"
        >
          {INDUSTRIES.map((industry) => {
            const selected = industry.id === activeId
            return (
              <button
                key={industry.id}
                type="button"
                role="tab"
                id={`tab-${industry.id}`}
                aria-selected={selected}
                aria-controls={`panel-${industry.id}`}
                onClick={() => setActiveId(industry.id)}
                className={`${TAB_BASE} ${selected ? TAB_ON : TAB_OFF}`}
              >
                <svg className="w-5 h-5 hidden sm:block" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={industry.iconPath} />
                </svg>
                {industry.label}
              </button>
            )
          })}
        </div>

        <div>
          {/* Every panel stays in the HTML and is hidden with CSS. Rendering
              only the active one would keep the other three out of the page
              source, so search engines would never see that content. */}
          {INDUSTRIES.map((industry) => (
            <div
              key={industry.id}
              id={`panel-${industry.id}`}
              role="tabpanel"
              aria-labelledby={`tab-${industry.id}`}
              className={industry.id === activeId ? 'block animate-fadeIn' : 'hidden'}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-5">
                  <h3 className="text-2xl font-bold text-[#34414A] mb-4">{industry.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{industry.body}</p>
                  <p
                    className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold tracking-wide border uppercase ${industry.badge.className}`}
                  >
                    {industry.badge.text}
                  </p>
                </div>

                <ul className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 list-none">
                  {industry.cards.map((card) => (
                    <li key={card.name}>
                      <Link prefetch={false}
                        href={card.href}
                        className="group p-5 bg-gray-50 border border-gray-100 rounded-2xl hover:bg-white hover:border-[#8CA365] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center justify-between"
                      >
                        <span className="font-bold text-[#34414A] group-hover:text-[#8CA365] transition-colors">{card.name}</span>
                        <ArrowIcon />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
