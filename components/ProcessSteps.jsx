const DEFAULT_STEPS = [
  {
    number: 1,
    accent: 'bg-[#34414A]',
    title: 'Forward Your Business Number',
    body: 'Keep your existing business number or choose a new local/toll-free one. With a simple call-forwarding setup, you control exactly when we take your calls—24/7, after hours, or on demand.',
  },
  {
    number: 2,
    accent: 'bg-[#8CA365]',
    title: 'We Answer as Your Business',
    body: 'Our professional, US-based receptionists answer using your customized, branded greeting. We handle FAQs, screen solicitors, and treat your callers with empathy.',
    badge: 'Average answer time: Under 4 rings',
  },
  {
    number: 3,
    accent: 'bg-[#34414A]',
    title: 'Get Instant Message Alerts',
    body: 'The second a call ends, your team is notified. Receive full lead details, accurate messages, and booked appointment notifications directly via Text, Email, or our App.',
  },
]

// Class strings are copied verbatim from each page's original markup, so the
// two variants render exactly as they did before they shared this component.
const THEMES = {
  dark: {
    card: 'shadow-[0_20px_50px_rgba(0,0,0,0.2)] transition-transform border-white/50',
    heading: 'text-white',
    dash: 'border-white/30',
  },
  light: {
    card: 'shadow-md hover:shadow-xl transition-all border-gray-100',
    heading: 'text-[#34414A]',
    dash: 'border-gray-300',
  },
}

function Step({ step, theme }) {
  return (
    <li
      className={`bg-white rounded-3xl p-8 lg:p-10 flex flex-col items-center text-center h-full relative z-10 duration-300 hover:-translate-y-1 border ${theme.card}`}
    >
      <div
        className={`w-16 h-16 ${step.accent} text-white rounded-full flex items-center justify-center border-[6px] border-white shadow-sm mb-6 z-10 relative`}
        aria-hidden="true"
      >
        <span className="text-xl font-bold">{step.number}</span>
      </div>
      <h3 className="text-xl font-bold text-[#34414A] mb-4">{step.title}</h3>
      <p className="text-gray-600 leading-relaxed text-[15px] flex-grow">{step.body}</p>
      {step.badge && (
        <p className="icon-mask icon-bolt-solid [--icon-size:0.875rem] mt-6 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-[11px] sm:text-xs font-bold tracking-wide before:text-amber-500">
          {step.badge}
        </p>
      )}
    </li>
  )
}

export default function ProcessSteps({
  variant = 'dark',
  id,
  eyebrow,
  steps = DEFAULT_STEPS,
  heading,
  intro,
}) {
  const theme = THEMES[variant]
  const isDark = variant === 'dark'

  return (
    <section
      className={
        isDark
          ? 'py-20 md:py-32 relative overflow-hidden font-sans'
          : 'py-20 md:py-32 relative overflow-hidden font-sans bg-slate-50 border-t border-gray-100'
      }
      id={id}
      aria-labelledby="process-steps-heading"
    >
      {isDark ? (
        <div className="absolute inset-0 bg-[#0f2925] z-0 overflow-hidden" aria-hidden="true">
          <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-[#8CA365]/40 rounded-full blur-[120px] pointer-events-none"></div>
          <div className="absolute bottom-0 -right-20 w-[700px] h-[700px] bg-[#00cc7a]/20 rounded-full blur-[150px] pointer-events-none"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#215153]/60 rounded-full blur-[120px] pointer-events-none"></div>
        </div>
      ) : (
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-[#8CA365]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 -left-20 w-96 h-96 bg-[#295657]/5 rounded-full blur-3xl"></div>
        </div>
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-16 md:mb-20">
          {eyebrow && (
            <p className="icon-mask icon-bolt inline-flex items-center gap-2 bg-[#8CA365]/10 text-[#6b8a3e] rounded-full text-sm font-semibold px-4 py-1.5 mb-5">
              {eyebrow}
            </p>
          )}
          <h2
            id="process-steps-heading"
            className={`text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight ${theme.heading}`}
          >
            {heading ?? (
              <>
                How Our Live Phone Answering Service Works
                <br className="hidden md:block" />
                — Set Up in
                <span className="text-[#8CA365]"> Under 5 Minutes</span>
              </>
            )}
          </h2>
          {intro && <p className="text-slate-300 text-lg mt-4 max-w-2xl mx-auto">{intro}</p>}
        </div>

        <div className="relative">
          <div
            className={`hidden md:block absolute top-[3.5rem] left-[15%] right-[15%] border-t-2 border-dashed z-0 ${theme.dash}`}
            aria-hidden="true"
          ></div>

          <ol className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch list-none">
            {steps.map((step) => (
              <Step key={step.number} step={step} theme={theme} />
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
