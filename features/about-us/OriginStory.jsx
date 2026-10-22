import { ArrowRightIcon } from './icons'

export default function OriginStory() {
  return (
    <section className="bg-stone-50 py-14 sm:py-24 border-y border-gray-200" aria-labelledby="origin-heading">
      <div className="site-container">
        <h2
          id="origin-heading"
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#34414A] text-center mb-10 md:mb-16 max-w-4xl mx-auto leading-tight"
        >
          Why We Started Live Phone Answering — And the Problem We&apos;re Solving
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end relative">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-2xl border-2 border-[#8CA365] -z-10" aria-hidden="true"></div>
              <img
                src="/images/about-live-phone-answering.webp"
                alt="The founder of Live Phone Answering"
                width={1122}
                height={1402}
                loading="lazy"
                decoding="async"
                className="w-full aspect-[4/5] object-cover rounded-2xl shadow-xl z-10"
              />
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-center">
            <h3 className="text-xl md:text-2xl font-bold text-[#34414A] mb-6 leading-snug">
              The moment that changed everything: a missed call that cost a business its biggest client.
            </h3>
            <p className="text-gray-700 leading-relaxed text-lg mb-6 first-letter:text-6xl first-letter:font-black first-letter:text-[#8CA365] first-letter:mr-3 first-letter:float-left first-letter:leading-[0.8] first-letter:mt-2">
              A few years ago, I was deeply involved in generating high-value leads for local contractors—specifically in
              high-ticket niches like epoxy flooring, concrete, and premium home services. I was routing dozens of highly qualified
              prospects to these businesses every single week. To monitor the flow, I even set up dedicated US tracking numbers.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg mb-10">
              But as I watched the call logs, I noticed a devastating trend. These hardworking business owners were up on ladders,
              running noisy equipment, or managing crews. They couldn&apos;t answer the phone. I literally listened as $5,000 to
              $10,000 jobs went straight to a generic voicemail, only for the caller to hang up and instantly dial the next
              competitor on Google. It was heartbreaking.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-[#34414A] mb-6 leading-snug">
              Our founding principle: no business should ever lose a customer to voicemail.
            </h3>
            <p className="text-gray-700 leading-relaxed text-lg mb-8">
              I realized that generating leads wasn&apos;t enough; securing them at the exact moment of intent was the real
              bottleneck. That&rsquo;s why Live Phone Answering was born. We built a team of highly trained, US-based professionals
              specifically designed to act as an immediate, empathetic extension of these businesses. We turned missed connections
              into booked calendars, giving owners their time—and their revenue—back.
            </p>

            <a
              href="#team"
              className="inline-flex items-center gap-2 text-[#8CA365] font-bold text-lg hover:gap-4 transition-all w-max group"
            >
              Meet the team that makes it happen
              <ArrowRightIcon className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
