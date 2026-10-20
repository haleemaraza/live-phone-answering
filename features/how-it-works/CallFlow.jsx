// Every colour below is copied verbatim from the page's original markup.
const STEPS = [
  {
    number: 1,
    accent: 'bg-[#8CA365]',
    title: 'The Phone Rings',
    body: 'Your customer calls your business number. The call is instantly forwarded to our team — no delays, no voicemail, no hold music.',
    panel: {
      kind: 'note',
      tile: 'bg-[#8CA365]/10',
      icon: 'icon-phone',
      iconColor: 'text-[#8CA365]',
      title: 'Average pickup: Under 4 rings',
      body: 'Calls are answered by a live, US-based receptionist in seconds — not minutes.',
    },
  },
  {
    number: 2,
    accent: 'bg-[#295657]',
    title: 'Branded Greeting',
    body: "Our receptionist answers with your custom greeting — your business name, your tone, your script. The caller has no idea they're speaking to an outsourced team.",
    panel: {
      kind: 'note',
      tile: 'bg-[#295657]/10',
      icon: 'icon-chat',
      iconColor: 'text-[#295657]',
      title: 'Example greeting',
      body: '"Thank you for calling [Your Business Name], this is Sarah, how can I help you today?"',
    },
  },
  {
    number: 3,
    accent: 'bg-[#8CA365]',
    title: 'Qualify, Book, or Transfer',
    body: "Based on your instructions, we qualify the lead, book an appointment, answer FAQs, transfer the call live, or take a detailed message — exactly how you'd handle it.",
    panel: {
      kind: 'tags',
      tags: [
        { label: '✓ Book appointments', className: 'bg-green-50 text-green-700 border-green-100' },
        { label: '✓ Transfer calls', className: 'bg-blue-50 text-blue-700 border-blue-100' },
        { label: '✓ Take messages', className: 'bg-amber-50 text-amber-700 border-amber-100' },
        { label: '✓ Answer FAQs', className: 'bg-purple-50 text-purple-700 border-purple-100' },
      ],
    },
  },
  {
    number: 4,
    accent: 'bg-[#295657]',
    title: 'Instant Notification',
    body: 'The moment the call ends, you get a full summary — caller name, number, reason for calling, and any action taken. Delivered instantly via text, email, or our app.',
    panel: {
      kind: 'channels',
      tile: 'bg-[#295657]/10',
      icon: 'icon-bell',
      iconColor: 'text-[#295657]',
      title: 'Delivery channels',
      channels: ['📱 SMS', '📧 Email', '📲 App', '🔗 CRM'],
    },
  },
]

function Panel({ panel }) {
  return (
    <div className="bg-slate-50 rounded-2xl p-6 border border-gray-100">
      {panel.kind === 'tags' ? (
        <ul className="flex flex-wrap gap-2 list-none">
          {panel.tags.map((tag) => (
            <li
              key={tag.label}
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${tag.className}`}
            >
              {tag.label}
            </li>
          ))}
        </ul>
      ) : (
        <>
          <div className="flex items-center gap-3 mb-3">
            <span
              className={`icon-mask ${panel.icon} [--icon-size:1.25rem] w-9 h-9 rounded-lg flex items-center justify-center ${panel.tile} ${panel.iconColor}`}
              aria-hidden="true"
            ></span>
            <span className="text-sm font-bold text-[#34414A]">{panel.title}</span>
          </div>
          {panel.kind === 'note' ? (
            <p className="text-sm text-gray-500">{panel.body}</p>
          ) : (
            <ul className="flex gap-3 list-none">
              {panel.channels.map((channel) => (
                <li key={channel} className="text-sm text-gray-500 flex items-center gap-1">
                  {channel}
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </div>
  )
}

export default function CallFlow() {
  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden font-sans" aria-labelledby="call-flow-heading">
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-[#8CA365]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 -left-16 w-80 h-80 bg-[#295657]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <p className="icon-mask icon-phone inline-flex items-center gap-2 bg-[#295657]/10 text-[#295657] rounded-full text-sm font-semibold px-4 py-1.5 mb-5">
            Behind Every Call
          </p>
          <h2 id="call-flow-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#34414A] tracking-tight mb-4">
            What Happens On Every Call
          </h2>
          <p className="text-lg text-gray-600">
            From the first ring to the final notification — here&apos;s exactly how we handle your calls with precision and
            professionalism.
          </p>
        </div>

        <ol className="max-w-4xl mx-auto space-y-8 lg:space-y-0 list-none">
          {STEPS.map((step, index) => (
            <li key={step.number}>
              {index > 0 && (
                <div className="hidden lg:flex justify-center py-2" aria-hidden="true">
                  <div className="w-px h-8 bg-gray-200"></div>
                </div>
              )}
              <div className={`grid grid-cols-1 lg:grid-cols-12 gap-6 items-center reveal${index > 0 ? ` reveal-delay-${index}` : ''}`}>
                <div className="lg:col-span-1 flex justify-center">
                  <div
                    className={`w-12 h-12 ${step.accent} text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg`}
                    aria-hidden="true"
                  >
                    {step.number}
                  </div>
                </div>
                <div className="lg:col-span-5">
                  <h3 className="text-xl font-bold text-[#34414A] mb-2">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.body}</p>
                </div>
                <div className="lg:col-span-6">
                  <Panel panel={step.panel} />
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
