import StatsBar from "./StatsBar";
 
export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col text-center px-6 pt-24 pb-0 relative">
      {/* Content */}
      <div className="flex flex-col items-center justify-center flex-1 py-10">
        <p className="uppercase tracking-[0.3em] text-xs text-[#C4AAEE] mb-6">
          Est. in Islamabad · F-10 Markaz · Women-Owned
        </p>
 
        <h1 className="font-cormorant text-[20vw] md:text-[10rem] leading-none tracking-[0.15em] text-white">
          JANA
        </h1>
 
        <p className="uppercase tracking-[0.45em] text-xs text-[#C4AAEE] mt-4">
          Hair & Beauty Salon
        </p>
 
        <div className="w-64 h-px bg-gradient-to-r from-transparent via-[#5C3AA0] to-transparent my-8" />
 
        <p className="max-w-xl text-[#B8AACC] leading-8 text-sm md:text-base">
          Islamabad's most trusted beauty parlour. From precision haircuts to
          luxury bridal packages — crafted with care, every single time.
        </p>
 
        <div className="flex flex-wrap justify-center gap-4 mt-10">
          <a
            href="#booking"
            className="bg-[#5C3AA0] px-8 py-4 uppercase tracking-[0.15em] text-xs border border-[#8B65C8] hover:bg-[#8B65C8] transition-colors duration-300"
          >
            Book Appointment
          </a>
          <a
            href="#services"
            className="border border-[#8B65C8]/40 px-8 py-4 uppercase tracking-[0.15em] text-xs text-[#C4AAEE] hover:border-[#C4AAEE] transition-colors duration-300"
          >
            View Services
          </a>
        </div>
      </div>
 
      {/* StatsBar — sits naturally below, no absolute */}
      <div className="mt-10">
        <StatsBar />
      </div>
    </section>
  );
}
 