export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative min-h-screen overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero-ocean.jpg')" }}
      >
        {/* Soft overlay for text readability */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/30 to-white/50"
          aria-hidden="true"
        />

        {/* Content */}
        <main className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 py-20">
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
            <p className="mb-12 max-w-md font-heading text-xl leading-relaxed text-teal-dark drop-shadow-sm sm:text-2xl">
              Holistic manual therapy supporting structural balance and
              nervous-system regulation—helping your body return to stillness,
              softness, and a natural, fluid state of movement
            </p>

            {/* CTA Button - Scrolls to booking section */}
            <a
              href="#book"
              className="group relative overflow-hidden rounded-full bg-teal-dark/90 px-10 py-4 font-body text-sm font-semibold uppercase tracking-[0.2em] text-white shadow-lg backdrop-blur-sm transition-all duration-500 hover:bg-teal-dark hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-teal-deep focus:ring-offset-2 focus:ring-offset-white/50"
              aria-label="Book a session"
            >
              <span className="relative z-10">Book a Session</span>
              <span
                className="absolute inset-0 -translate-x-full bg-gradient-to-r from-teal-deep to-teal-dark transition-transform duration-500 group-hover:translate-x-0"
                aria-hidden="true"
              />
            </a>
          </div>
        </main>
      </section>

      {/* Booking Section */}
      <section
        id="book"
        className="bg-gradient-to-b from-teal-ultralight to-teal-light px-6 py-20"
      >
        <div className="mx-auto max-w-4xl">
          {/* Section heading */}
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-heading text-4xl font-bold tracking-wide text-teal-dark sm:text-5xl">
              Book Your Session
            </h2>
            <p className="mx-auto max-w-md font-body text-lg text-teal-mid">
              Select a service and find a time that works for you.
            </p>
          </div>

          {/* Square Appointments Iframe */}
          <div className="overflow-hidden rounded-2xl bg-white shadow-xl">
            <iframe
              src="https://app.squareup.com/appointments/buyer/widget/d23lexfygzi760/LTF55SD00Y438"
              className="min-h-[400px] w-full border-0"
              style={{ height: "calc(100vh - 300px)", maxHeight: "800px" }}
              title="Book an appointment with The Quiet Current"
              allow="payment"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </>
  );
}
