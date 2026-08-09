import heroImage from "../../assets/hero.svg";

function Hero() {
  return (
    <section className="bg-[#F8F8F6] overflow-hidden">
      <div className="mx-auto max-w-7xl px-8 lg:px-16 pt-24">
       
        <div className="max-w-2xl">
          <h1 className="text-7xl lg:text-8xl font-bold leading-none text-[#173D47]">
            REHAB AI
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-gray-600">
            Personalized recovery plans, posture analysis, AI-powered exercise
            guidance, and real-time progress tracking to help patients recover
            faster and smarter.
          </p>

          <button className="mt-10 rounded-full bg-[#F67D72] px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-[#ee6d62]">
            Get Started
          </button>
        </div>

       
        <div className="mt-16">
          <img
            src={heroImage}
            alt="Rehab AI"
            className="w-full rounded-t-[90px] object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;