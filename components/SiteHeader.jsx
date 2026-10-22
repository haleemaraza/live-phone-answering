'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

// Items without a dedicated page yet point at their hub rather than a URL that
// would 404 — the nav is crawled on every page, so dead links are costly.
// Swap the href here once the individual page exists.
const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about-us', label: 'About Us' },
  {
    href: '/services',
    label: 'Services',
    children: [
      { href: '/virtual-receptionist', label: 'Live Receptionist' },
      { href: '/after-hours-answering-service', label: 'After Hours Answering Service' },
      { href: '/overflow-call-answering', label: 'Overflow Call Answering' },
      { href: '/appointment-scheduling', label: 'Appointment Scheduling Service' },
      { href: '/lead-capture', label: 'Lead Capture' },
      { href: '/call-routing', label: 'Call Routing Service' },
    ],
  },
  {
    href: '/industries-served',
    label: 'Industries Served',
    children: [
      { href: '/industries-served', label: 'Real Estate' },
      { href: '/medical-answering-service', label: 'Medical' },
      { href: '/industries-served', label: 'Franchise' },
      { href: '/industries-served', label: 'Attorney' },
      { href: '/industries-served', label: 'Hotel' },
      { href: '/industries-served', label: 'Home Services' },
    ],
  },
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/blog', label: 'Blog' },
]

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  // A single value, so opening one dropdown always closes the other.
  const [openMenu, setOpenMenu] = useState(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <div className="bg-navy text-white/75 text-[0.76rem] py-2.5 px-[5%] flex items-center justify-between gap-3 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer pointer-events-none"></div>
        <div className="hidden md:flex items-center gap-5 relative z-10">
          <span className="flex items-center gap-1.5">🕐 Live agents available 24/7/365</span>
          <div className="w-px h-3.5 bg-white/15"></div>
          <span className="flex items-center gap-1.5">⭐ Rated 4.9/5 by 2,400+ US businesses</span>
          <div className="w-px h-3.5 bg-white/15"></div>
          <span className="flex items-center gap-1.5">
            🔒{' '}
            <Link prefetch={false} href="/hipaa-compliant-answering-service" className="hover:underline hover:text-white transition-all">
              HIPAA Compliant
            </Link>{' '}
            · No Setup Fees
          </span>
        </div>
        <div className="flex items-center gap-4 ml-auto md:ml-0 relative z-10">
          <a href="tel:8574531055" className="flex items-center gap-1.5 text-green font-semibold hover:opacity-80 transition-opacity">
            📞 (857) 453-1055
          </a>
          <div className="w-px h-3.5 bg-white/15"></div>
          <Link prefetch={false}
            href="/pricing"
            className="bg-green text-white py-1 px-3.5 rounded-full font-semibold text-[0.75rem] hover:bg-green-dark transition-colors"
          >
            View Pricing
          </Link>
        </div>
      </div>

      <header
        id="site-header"
        className={`sticky z-[1000] mx-auto transition-all duration-300 ${
          scrolled
            ? 'top-4 w-[95%] max-w-[1280px] bg-white/30 backdrop-blur-xl backdrop-saturate-150 border-white/50 shadow-[0_8px_32px_rgba(0,0,0,0.08)] rounded-2xl'
            : 'top-0 w-full bg-white border-b border-gray-100'
        }`}
      >
        <div className="px-4 md:px-8 h-[68px] md:h-[88px] flex items-center gap-4 md:gap-8 max-w-[1280px] mx-auto w-full">
          <div className="flex items-center h-[52px] md:h-[80px] w-[160px] sm:w-[200px] md:w-[260px] shrink-0">
            <Link prefetch={false} href="/" className="block w-full h-full" aria-label="LivePhoneAnswering Home">
              <img src="/images/logo.webp" alt="Live Phone Answering" className="w-full h-full object-contain object-left"
            width={400}
            height={234}
            loading="eager"
            fetchPriority="high"
          />
            </Link>
          </div>

          <ul
            className="hidden lg:flex items-center gap-2 list-none flex-1 lg:justify-center"
            onKeyDown={(event) => { if (event.key === 'Escape') setOpenMenu(null) }}
          >
            {NAV_LINKS.map((link) => (
              <li
                key={link.label}
                className={link.children ? 'relative' : undefined}
                onMouseEnter={link.children ? () => setOpenMenu(link.label) : undefined}
                onMouseLeave={link.children ? () => setOpenMenu(null) : undefined}
                onFocus={() => setOpenMenu(link.children ? link.label : null)}
              >
                <Link prefetch={false}
                  href={link.href}
                  onClick={() => setOpenMenu(null)}
                  aria-haspopup={link.children ? 'true' : undefined}
                  aria-expanded={link.children ? openMenu === link.label : undefined}
                  className="flex items-center gap-1.5 px-3 py-2 text-[0.875rem] font-medium text-gray-700 rounded-lg hover:text-navy hover:bg-gray-50 transition-all"
                >
                  {link.label}
                  {link.children && (
                    <span
                      className={`icon-mask icon-chevron-down [--icon-size:0.75rem] text-gray-400 transition-transform ${
                        openMenu === link.label ? 'rotate-180' : ''
                      }`}
                      aria-hidden="true"
                    ></span>
                  )}
                </Link>

                {/* Driven by one piece of state rather than :hover/:focus-within,
                    so a second menu can never open on top of the first. */}
                {link.children && (
                  <ul
                    className={`absolute left-1/2 top-full z-50 w-64 -translate-x-1/2 list-none rounded-xl border border-gray-100 bg-white p-2 shadow-xl transition-opacity duration-150 ${
                      openMenu === link.label ? 'visible opacity-100' : 'invisible opacity-0'
                    }`}
                  >
                    {link.children.map((child) => (
                      <li key={child.label}>
                        <Link
                          prefetch={false}
                          href={child.href}
                          onClick={() => setOpenMenu(null)}
                          className="block rounded-lg px-3 py-2 text-[0.82rem] font-medium text-gray-600 hover:bg-gray-50 hover:text-navy"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex items-center gap-2.5 shrink-0">
            <Link prefetch={false}
              href="/contact-us"
              className="relative overflow-hidden btn-shimmer text-[0.87rem] font-bold text-white px-5 py-2.5 rounded-lg bg-green hover:bg-green-dark shadow-green-glow hover:-translate-y-px transition-all"
            >
              Contact Us →
            </Link>
          </div>

          <button
            className="flex lg:hidden flex-col gap-[5px] cursor-pointer p-1.5 ml-auto"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="block w-[22px] h-[2px] bg-navy rounded transition-all"></span>
            <span className="block w-[22px] h-[2px] bg-navy rounded transition-all"></span>
            <span className="block w-[22px] h-[2px] bg-navy rounded transition-all"></span>
          </button>
        </div>

        <div className={`${menuOpen ? '' : 'hidden'} lg:hidden border-t border-border bg-white px-[5%] py-4 space-y-1 max-h-[calc(100vh-68px)] overflow-y-auto overscroll-contain`}>
          {NAV_LINKS.map((link) => (
            <div key={link.label}>
              <Link prefetch={false}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block px-3 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-50"
              >
                {link.label}
              </Link>
              {link.children && (
                <ul className="list-none ml-3 border-l border-gray-100 pl-3">
                  {link.children.map((child) => (
                    <li key={child.label}>
                      <Link
                        prefetch={false}
                        href={child.href}
                        onClick={() => setMenuOpen(false)}
                        className="block px-3 py-1.5 text-[0.8rem] text-gray-500 rounded-lg hover:bg-gray-50 hover:text-navy"
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
          <div className="pt-2 space-y-2 border-t border-border mt-2">
            <Link prefetch={false}
              href="/contact-us"
              onClick={() => setMenuOpen(false)}
              className="block w-full text-center py-2.5 rounded-xl font-bold bg-green text-white text-sm hover:bg-green-dark transition-colors"
            >
              Contact Us &rarr;
            </Link>
          </div>
        </div>
      </header>
    </>
  )
}