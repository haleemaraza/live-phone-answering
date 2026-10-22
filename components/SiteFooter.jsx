import Link from 'next/link'

export default function SiteFooter() {
  return (
    <footer className="pt-32 pb-10 bg-[#1a232c] relative mt-24">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-5xl bg-gradient-to-r from-[#8CA365] to-[#6b7d4c] rounded-3xl p-10 shadow-2xl flex flex-col md:flex-row items-center justify-between z-20">
        <div>
          <h3 className="text-3xl font-extrabold text-white mb-2">Ready to stop missing leads?</h3>
          <p className="text-green-100 text-lg">Get started today. Setup in 5 minutes.</p>
        </div>
        <Link prefetch={false}
          href="/contact-us"
          className="mt-6 md:mt-0 bg-white text-[#34414A] font-bold py-3 px-8 rounded-xl shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 whitespace-nowrap"
        >
          Get Started
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="mb-6">
              <img src="/images/LPA_Footer_logo.webp" alt="Live Phone Answering" className="h-30 w-auto"
            width={1200}
            height={758}
            loading="lazy"
            decoding="async"
          />
            </div>

            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm text-slate-300 backdrop-blur-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              Systems Operational
            </div>

            <p className="text-slate-400 text-sm leading-relaxed">
              100% US-based receptionists handling your calls 24/7/365. We make sure you never miss another lead or important client
              call.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold uppercase tracking-wider text-sm mb-6">Company</h4>
            <ul className="space-y-4">
              {[
                { href: '/', label: 'Home' },
                { href: '/about-us', label: 'About Us' },
                { href: '/how-it-works', label: 'How It Works' },
                { href: '/pricing', label: 'Pricing & FAQs' },
              ].map((link) => (
                <li key={link.label}>
                  <Link prefetch={false}
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors duration-300 flex items-center group text-sm font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Phone and email live with Company so the contact details sit
                beside the rest of the "about us" links. */}
            <div className="space-y-3 pt-4 mt-6 border-t border-slate-800">
              <div className="flex items-center gap-3 text-slate-400 text-sm hover:text-white transition-colors group">
                <svg className="w-4 h-4 text-[#8CA365]" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  ></path>
                </svg>
                <a href="tel:8574531055" className="font-medium">
                  (857) 453-1055
                </a>
              </div>
              <div className="flex items-center gap-3 text-slate-400 text-sm hover:text-white transition-colors group">
                <svg
                  className="w-4 h-4 group-hover:scale-110 transition-transform duration-300 text-[#8CA365]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
                <a href="mailto:hello@livephoneanswering.com" className="font-medium break-all">
                  hello@livephoneanswering.com
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold uppercase tracking-wider text-sm mb-6">Services</h4>
            <ul className="space-y-4 mb-6">
              {[
                { href: '/virtual-receptionist', label: 'Virtual Receptionist' },
                { href: '/after-hours-answering-service', label: 'After Hours Answering Service' },
                { href: '/overflow-call-answering', label: 'Overflow Call Answering' },
                { href: '/appointment-scheduling', label: 'Appointment Scheduling' },
                { href: '/lead-capture', label: 'Lead Capture' },
                { href: '/call-routing', label: 'Call Routing' },
              ].map((link) => (
                <li key={link.label}>
                  <Link prefetch={false}
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors duration-300 flex items-center group text-sm font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold uppercase tracking-wider text-sm mb-6">Industries Served</h4>
            {/* Same list as the header's Industries Served menu. */}
            <ul className="space-y-4">
              {[
                { href: '/industries-served', label: 'Real Estate' },
                { href: '/medical-answering-service', label: 'Medical' },
                { href: '/industries-served', label: 'Franchise' },
                { href: '/industries-served', label: 'Attorney' },
                { href: '/industries-served', label: 'Hotel' },
                { href: '/industries-served', label: 'Home Services' },
              ].map((link) => (
                <li key={link.label}>
                  <Link prefetch={false}
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors duration-300 flex items-center group text-sm font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-slate-500 text-sm">© 2026 LivePhoneAnswering.com. All rights reserved.</div>
          <div className="flex gap-6 text-slate-500 text-sm">
            <Link prefetch={false} href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <a href="/sitemap.xml" className="hover:text-white transition-colors">
              Sitemap
            </a>
          </div>
          <div className="flex gap-4 text-slate-500">
            <a href="#" aria-label="Facebook" className="hover:text-[#8CA365] hover:-translate-y-1 transition-all duration-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-[#8CA365] hover:-translate-y-1 transition-all duration-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M12 2c-2.716 0-3.056.012-4.123.06-1.064.049-1.791.218-2.427.465a4.9 4.9 0 00-1.772 1.153A4.9 4.9 0 002.525 5.45c-.247.636-.416 1.363-.465 2.427C2.012 8.944 2 9.284 2 12s.012 3.056.06 4.123c.049 1.064.218 1.791.465 2.427a4.9 4.9 0 001.153 1.772 4.9 4.9 0 001.772 1.153c.636.247 1.363.416 2.427.465 1.067.048 1.407.06 4.123.06s3.056-.012 4.123-.06c1.064-.049 1.791-.218 2.427-.465a4.9 4.9 0 001.772-1.153 4.9 4.9 0 001.153-1.772c.247-.636.416-1.363.465-2.427.048-1.067.06-1.407.06-4.123s-.012-3.056-.06-4.123c-.049-1.064-.218-1.791-.465-2.427a4.9 4.9 0 00-1.153-1.772A4.9 4.9 0 0018.55 2.525c-.636-.247-1.363-.416-2.427-.465C15.056 2.012 14.716 2 12 2zm0 1.802c2.67 0 2.987.01 4.042.058.975.045 1.504.207 1.857.344.467.182.8.399 1.15.748.35.35.566.683.748 1.15.137.353.3.882.344 1.857.048 1.055.058 1.372.058 4.042s-.01 2.987-.058 4.042c-.045.975-.207 1.504-.344 1.857-.182.467-.399.8-.748 1.15-.35.35-.683.566-1.15.748-.353.137-.882.3-1.857.344-1.055.048-1.372.058-4.042.058s-2.987-.01-4.042-.058c-.975-.045-1.504-.207-1.857-.344-.467-.182-.8-.399-1.15-.748-.35-.35-.566-.683-.748-1.15-.137-.353-.3-.882-.344-1.857-.048-1.055-.058-1.372-.058-4.042s.01-2.987.058-4.042c.045-.975.207-1.504.344-1.857.182-.467.399-.8.748-1.15.35-.35.683-.566 1.15-.748.353-.137.882-.3 1.857-.344 1.055-.048 1.372-.058 4.042-.058zm0 3.063a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm0 8.468a3.333 3.333 0 110-6.666 3.333 3.333 0 010 6.666zm6.538-8.671a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
            <a href="#" aria-label="Pinterest" className="hover:text-[#8CA365] hover:-translate-y-1 transition-all duration-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.237 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.182-.78 1.172-4.97 1.172-4.97s-.299-.6-.299-1.486c0-1.39.806-2.428 1.81-2.428.852 0 1.264.64 1.264 1.408 0 .858-.546 2.14-.828 3.33-.236.995.499 1.807 1.48 1.807 1.778 0 3.144-1.874 3.144-4.58 0-2.393-1.72-4.068-4.177-4.068-2.845 0-4.515 2.135-4.515 4.34 0 .859.331 1.781.744 2.282a.3.3 0 01.069.287c-.076.315-.245.994-.278 1.133-.44.183-.145.222-.334.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.051 6.607-6.051 3.47 0 6.166 2.472 6.166 5.775 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.966-.527-2.292-1.148l-.623 2.378c-.226.869-.835 1.957-1.243 2.621A10 10 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"></path>
              </svg>
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-[#8CA365] hover:-translate-y-1 transition-all duration-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-[#8CA365] hover:-translate-y-1 transition-all duration-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
