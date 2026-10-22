import Link from 'next/link'

const BLOBS = [
  {
    className: '-top-20 -left-16 w-[350px] h-[350px] bg-[#8CA365]/15 opacity-70',
    style: { animation: 'blobMorph 12s ease-in-out infinite', borderRadius: '42% 58% 55% 45% / 56% 42% 58% 44%' },
  },
  {
    className: 'top-1/3 -right-20 w-[280px] h-[280px] bg-[#295657]/10 opacity-60',
    style: { animation: 'blobMorph 15s ease-in-out infinite 3s', borderRadius: '55% 45% 42% 58% / 44% 56% 44% 56%' },
  },
  {
    className: '-bottom-16 left-1/3 w-[320px] h-[320px] bg-[#8CA365]/10 opacity-50',
    style: { animation: 'blobMorph 18s ease-in-out infinite 6s', borderRadius: '45% 55% 58% 42% / 58% 44% 42% 58%' },
  },
]

// The mint gradient, 48px grid and diagonal hatch were three stacked divs.
// Their opacities are baked into each colour's alpha and the hatch keeps its
// 600x600 top-right footprint, so the result is identical with fewer nodes.
const SECTION_BACKGROUND = {
  backgroundImage: [
    'linear-gradient(rgba(41,86,87,0.04) 1px, transparent 1px)',
    'linear-gradient(90deg, rgba(41,86,87,0.04) 1px, transparent 1px)',
    'repeating-linear-gradient(135deg, rgba(41,86,87,0.03), rgba(41,86,87,0.03) 1px, transparent 1px, transparent 40px)',
    'linear-gradient(160deg, #c6ecb5 0%, #d4f1c4 20%, #e2f5d8 40%, #eef8e8 60%, #f5fbf2 80%, #ffffff 100%)',
  ].join(','),
  backgroundSize: '48px 48px, 48px 48px, 600px 600px, auto',
  backgroundPosition: '0 0, 0 0, 100% 0, 0 0',
  backgroundRepeat: 'repeat, repeat, no-repeat, no-repeat',
}

const rise = (delay) => ({ animation: `blobFadeUp 0.7s cubic-bezier(0.16,1,0.3,1) ${delay} both` })

export default function HowItWorksHero() {
  return (
    <section
      className="relative overflow-hidden py-16 sm:py-20 lg:py-24 px-4 md:px-8"
      style={SECTION_BACKGROUND}
      aria-label="How our live answering service works"
    >
      {BLOBS.map((blob) => (
        <div
          key={blob.className}
          className={`absolute pointer-events-none z-[1] ${blob.className}`}
          style={blob.style}
          aria-hidden="true"
        ></div>
      ))}

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <p
          className="icon-mask icon-bolt inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm text-[#4a7a3e] rounded-full text-sm font-semibold px-5 py-2 mb-6 shadow-sm border border-white/50"
          style={rise('0s')}
        >
          Simple 3-Step Setup
        </p>

        <h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.6rem] font-extrabold text-[#1a2e35] leading-[1.1] tracking-tight"
          style={rise('0.1s')}
        >
          How Our Live Answering
          <br className="hidden sm:block" /> Service Works
        </h1>

        <p className="text-base sm:text-lg text-[#3d5c42] mt-5 max-w-2xl mx-auto leading-relaxed" style={rise('0.2s')}>
          Get set up in under 5 minutes. Forward your calls, and our US-based receptionists answer as your business — no
          contracts, no setup fees.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8" style={rise('0.3s')}>
          <Link prefetch={false}
            href="/contact-us"
            className="inline-flex items-center justify-center gap-2 bg-[#8CA365] hover:bg-[#7a8f57] text-white font-bold py-3.5 px-8 rounded-xl shadow-lg transition-all hover:-translate-y-1 text-base"
          >
            Get Started Today →
          </Link>
          <Link prefetch={false}
            href="/pricing"
            className="inline-flex items-center justify-center gap-2 bg-white/80 backdrop-blur-sm border-2 border-[#34414A]/15 text-[#34414A] font-bold py-3.5 px-8 rounded-xl hover:bg-white transition-all hover:-translate-y-1 text-base"
          >
            View Pricing
          </Link>
        </div>
      </div>
    </section>
  )
}
