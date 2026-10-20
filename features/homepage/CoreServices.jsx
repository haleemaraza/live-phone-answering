import Link from 'next/link'

// href points at the dedicated page where one exists, otherwise at the
// services overview, so every card passes link equity somewhere real.
const SERVICES = [
  {
    title: 'Virtual Receptionist',
    href: '/virtual-receptionist',
    icon: '/icons/virtual-receptionist.webp',
    body: 'Give your business a professional front desk without hiring in-house staff. Our virtual receptionists answer calls, take messages, follow your instructions, and represent your brand with care.',
  },
  {
    title: 'After Hours Answering Service',
    href: '/after-hours-answering-service',
    icon: '/icons/after-hours-answering-service.webp',
    body: 'Keep your business available when your office is closed. We answer evening, weekend, and holiday calls so urgent requests, new leads, and customer messages are not missed.',
  },
  {
    title: 'Overflow Call Answering Service',
    href: '/services',
    icon: '/icons/overflow-call-answering-service.webp',
    body: 'When your team is busy, on another call, at lunch, or handling peak call volume, our receptionists step in to answer overflow calls and keep your customer experience smooth.',
  },
  {
    title: 'Appointment Scheduling Service',
    href: '/appointment-scheduling',
    icon: '/icons/appointment-scheduling-service.webp',
    body: 'Turn more callers into booked appointments. Our team can schedule, reschedule, or confirm appointments using your calendar, booking tool, CRM, or preferred process.',
  },
  {
    title: 'Lead Capture',
    href: '/services',
    icon: '/icons/lead-capture.webp',
    body: 'Capture caller names, contact details, service needs, urgency, and follow-up information. We help turn inbound calls into organized leads your team can act on quickly.',
  },
  {
    title: 'Call Routing Service',
    href: '/services',
    icon: '/icons/call-routing-service.webp',
    body: 'Send every caller to the right person, department, or emergency contact. We follow your routing rules for transfers, messages, urgent calls, and after-call notifications.',
  },
]

function ServiceCard({ service }) {
  return (
    <article className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-[#8CA365]/30 transition-all duration-300">
      {/* Decorative: the heading beside it already names the service. */}
      <img
        src={service.icon}
        alt=""
        aria-hidden="true"
        width={256}
        height={256}
        loading="lazy"
        decoding="async"
        className="w-16 h-16 mb-6 object-contain rounded-2xl"
      />
      <h3 className="text-xl font-bold text-[#34414A] mb-3">
        <Link prefetch={false} href={service.href} className="hover:text-[#8CA365] transition-colors">
          {service.title}
        </Link>
      </h3>
      <p className="text-gray-600 leading-relaxed">{service.body}</p>
    </article>
  )
}

export default function CoreServices() {
  return (
    <section className="bg-white py-14 sm:py-24 px-4 border-t border-gray-100" id="services" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <h2 id="services-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#34414A] mb-4 md:mb-6">
            Live Phone Answering Services Built Around Your Business
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            From virtual receptionist support to after-hours answering, appointment scheduling, lead capture, and call routing, our
            live phone answering services help your business handle every call with professionalism, speed, and care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {SERVICES.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>

        <div className="mt-20 text-center max-w-2xl mx-auto">
          <h3 className="text-3xl font-bold text-[#34414A] mb-4">Ready to stop missing calls?</h3>
          <p className="text-lg text-gray-600 mb-8">
            Give your callers a professional live receptionist experience without hiring in-house staff.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex justify-center items-center bg-[#8CA365] hover:bg-[#7a8f57] text-white font-bold py-3.5 px-8 rounded-lg shadow-lg transition-transform hover:-translate-y-1"
            >
              Get Started Today
            </a>
            <a
              href="#pricing"
              className="w-full sm:w-auto inline-flex justify-center items-center bg-white border-2 border-[#34414A] text-[#34414A] hover:bg-slate-50 font-bold py-3 px-8 rounded-lg transition-colors"
            >
              View Plans
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
