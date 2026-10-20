'use client'

import { useState } from 'react'

const CERTIFICATIONS = [
  {
    id: 'hipaa',
    title: 'HIPAA Certified',
    image: '/images/cert-hipaa.webp',
    imageAlt: 'HIPAA certification badge',
    activeBorder: 'border-[#8CA365]',
    tile: 'bg-green-50 text-green group-hover:bg-green',
    titleHover: 'group-hover:text-green',
    paths: ['M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5', 'M11 9h2v3h3v2h-3v3h-2v-3H8v-2h3V9z'],
    body: 'Protecting Every Medical and Healthcare Call. Every receptionist undergoes comprehensive, federally mandated HIPAA training to ensure strict compliance in handling sensitive patient intake.',
  },
  {
    id: 'bbb',
    title: 'BBB Accredited Business',
    image: '/images/cert-bbb.webp',
    imageAlt: 'Better Business Bureau accreditation badge',
    activeBorder: 'border-blue-500',
    tile: 'bg-blue-50 text-blue-500 group-hover:bg-blue-500',
    titleHover: 'group-hover:text-blue-500',
    paths: ['M12 2L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-3zm-2 16l-4-4 1.41-1.41L10 15.17l6.59-6.59L18 10l-8 8z'],
    body: 'Verified Trust and Transparency. Our accreditation and top-tier rating with the Better Business Bureau reflect our unwavering commitment to transparent billing and ethical operations.',
  },
  {
    id: 'security',
    title: 'Data Security & Privacy',
    image: '/images/cert-security.webp',
    imageAlt: 'Data security and encryption badge',
    activeBorder: 'border-slate-800',
    tile: 'bg-slate-100 text-slate-800 group-hover:bg-slate-800',
    titleHover: 'group-hover:text-slate-800',
    paths: ['M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'],
    body: 'Beyond standard certifications, we safeguard your operations using bank-level 256-bit encryption, strict internal access controls, and secure CRM API integrations.',
  },
]

export default function Certifications() {
  const [activeId, setActiveId] = useState(CERTIFICATIONS[0].id)
  const active = CERTIFICATIONS.find((c) => c.id === activeId)

  return (
    <section className="bg-white py-14 sm:py-24 px-4 border-t border-gray-100" aria-labelledby="certifications-heading">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2
            id="certifications-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#34414A] leading-tight mb-6"
          >
            Certified, Accredited, and Held to the Highest Industry Standards
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
            Trust isn&apos;t just a marketing promise; it&apos;s a verifiable guarantee. We undergo rigorous third-party audits to
            ensure your business and customer data remain absolutely secure.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square bg-slate-50 rounded-[2.5rem] border border-gray-100 shadow-inner overflow-hidden flex items-center justify-center p-8 group">
            <div
              className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-100/40 via-transparent to-transparent opacity-70"
              aria-hidden="true"
            ></div>
            {/* All three badges render; only the selected one is visible, so the
                swap needs no JavaScript to show correct content to crawlers. */}
            {CERTIFICATIONS.map((cert) => (
              <img
                key={cert.id}
                src={cert.image}
                alt={cert.imageAlt}
                width={1200}
                height={1200}
                loading="lazy"
                decoding="async"
                className={`relative z-10 w-full h-full object-contain object-center transition-all duration-500 transform group-hover:scale-105 ${
                  cert.id === activeId ? '' : 'hidden'
                }`}
              />
            ))}
          </div>

          <ul className="flex flex-col gap-4 list-none">
            {CERTIFICATIONS.map((cert) => {
              const selected = cert.id === activeId
              return (
                <li key={cert.id}>
                  <button
                    type="button"
                    onClick={() => setActiveId(cert.id)}
                    aria-pressed={selected}
                    className={`w-full text-left cursor-pointer bg-white rounded-2xl p-6 border-2 transition-all duration-300 relative group flex items-start gap-5 ${
                      selected ? `${cert.activeBorder} shadow-md opacity-100` : 'border-transparent hover:border-gray-200 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <span className={`shrink-0 p-3 rounded-xl group-hover:text-white transition-colors ${cert.tile}`}>
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        {cert.paths.map((d) => (
                          <path key={d} d={d} />
                        ))}
                      </svg>
                    </span>
                    <span>
                      <span className={`block text-lg font-bold text-[#34414A] mb-2 transition-colors ${cert.titleHover}`}>
                        {cert.title}
                      </span>
                      <span className="block text-gray-500 text-sm leading-relaxed">{cert.body}</span>
                    </span>
                  </button>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
