import Script from "next/script";

export default function Home() {
  return (
    <>
      {/* Pocketsuite Widget Script */}
      <Script
        src="https://book.pocketsuite.io/static/javascript/widget.js"
        strategy="lazyOnload"
      />

      {/* Hero Section */}
      <section
        className="relative min-h-[75vh] overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero-ocean.jpg')" }}
      >
        {/* Soft overlay for text readability */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/30 to-white/50"
          aria-hidden="true"
        />

        {/* Content */}
        <main className="relative z-10 flex min-h-[75vh] flex-col items-center justify-center px-6 py-20">
          <div className="flex max-w-3xl flex-col items-center text-center">
            {/* Main heading */}
            <h1 className="mb-6 font-heading text-6xl font-bold tracking-wide text-teal-dark drop-shadow-sm sm:text-7xl md:text-8xl">
              The Quiet Current
            </h1>

            {/* Subheading */}
            <p className="mb-8 font-body text-lg font-semibold uppercase tracking-[0.25em] text-teal-dark drop-shadow-sm sm:text-xl">
              Integrative Massage + Craniosacral Therapy
            </p>

            {/* Decorative line */}
            <div
              className="mb-8 h-px w-24 bg-gradient-to-r from-transparent via-teal-dark to-transparent"
              aria-hidden="true"
            />

            {/* Tagline */}
            <p className="max-w-md font-heading text-xl leading-relaxed text-teal-dark drop-shadow-sm sm:text-2xl">
              Holistic manual therapy supporting structural balance and
              nervous-system regulation—helping your body return to stillness,
              softness, and a natural, fluid state of movement
            </p>
          </div>
        </main>
      </section>

      {/* Booking Section */}
      <section
        id="book"
        className="bg-gradient-to-b from-teal-ultralight to-teal-light px-6 py-12"
      >
        <div className="mx-auto max-w-4xl">
          {/* Section heading */}
          <div className="mb-6 text-center">
            <h2 className="mb-2 font-heading text-3xl font-bold tracking-wide text-teal-dark sm:text-4xl">
              Book Your Session
            </h2>
            <p className="mx-auto max-w-md font-body text-base text-teal-mid">
              Select a service and find a time that works for you.
            </p>
            <p className="mt-2 font-body text-sm text-teal-mid">
              If you have any confusion about scheduling please feel free to
              text or call 507-822-3081
            </p>
          </div>

          {/* Pocketsuite Booking Widget */}
          <div id="ps-book" data-account="the-quiet-current" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-peach px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <div className="flex flex-col items-center gap-10 md:flex-row md:items-start md:gap-12">
            {/* Profile Image */}
            <div className="flex-shrink-0">
              <img
                src="/headshot.jpg"
                alt="Katie - Licensed Massage Therapist"
                className="h-64 w-64 rounded-full object-cover object-[center_30%] shadow-lg ring-4 ring-white/50 sm:h-72 sm:w-72"
              />
            </div>

            {/* About text */}
            <div className="space-y-6 font-body text-center leading-relaxed text-teal-dark sm:text-lg md:text-left">
              <p>
                Hi, I'm Katie—a licensed massage therapist with a grounded,
                intuitive approach to bodywork. My practice centers on helping
                clients feel more at ease in their bodies through attentive
                touch, mindful pacing, and a deep respect for each person's
                unique physiology.
              </p>

              <p>
                I bring an intuitive touch to every session, blending modalities
                such as myofascial release, deep tissue, stretching, and
                nervous-system-informed techniques. My work is tailored to what
                your body needs that day—whether that's focused therapeutic
                work, full-body calming, or gentle unwinding.
              </p>
              <p>
                All sessions are offered as mobile, in-home treatments, bringing restorative massage directly to your space.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
