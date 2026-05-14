// src/pages/About.jsx

import { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const stats = [
  { num: "4.7", suffix: "★", label: "Google Rating" },
  { num: "179", suffix: "+", label: "Happy Clients" },
  { num: "10", suffix: "+", label: "Years in Islamabad" },
  { num: "7", suffix: "", label: "Days a Week" },
];

const pillars = [
  {
    num: "01",
    title: "Women-Owned & Operated",
    desc: "A safe, welcoming space built by women, for women. Every decision here is made with you in mind.",
  },
  {
    num: "02",
    title: "Fozia & Her Team",
    desc: "Our lead stylist Fozia is known for listening first. Clients say she makes them feel at ease from the moment they sit down.",
  },
  {
    num: "03",
    title: "Premium Products Only",
    desc: "We don't cut corners on what touches your hair and skin. Quality products, professional results — every single visit.",
  },
];

export default function About() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-[#0C0818] text-[#F0ECF8] overflow-x-hidden min-h-screen">
      <Navbar />

      <section
        ref={sectionRef}
        className="relative pt-36 pb-24 px-6 overflow-hidden"
      >
        {/* Glow */}
        <div className="absolute top-[-250px] right-[-250px] w-[700px] h-[700px] rounded-full bg-purple-500/10 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Eyebrow */}
          <div
            className={`flex items-center gap-4 mb-6 transition-all duration-700 ${
              visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <div className="w-10 h-px bg-[#7B4FBF]" />

            <span className="uppercase tracking-[0.3em] text-xs text-[#A778F0]">
              Our Story
            </span>
          </div>

          {/* Heading */}
          <h1
            className={`font-cormorant text-5xl md:text-7xl leading-tight mb-20 max-w-4xl transition-all duration-700 delay-100 ${
              visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            More Than a Salon —
            <br />
            <span className="italic text-[#A778F0]">
              A Decade of Trust
            </span>
          </h1>

          {/* Grid */}
          <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-14 mb-20">
            {/* LEFT */}
            <div
              className={`transition-all duration-700 delay-200 ${
                visible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-6"
              }`}
            >
              <p className="text-[#B8ABCF] leading-9 mb-6 text-[15px]">
                Jana Salon was born from a simple belief —
                <span className="text-white font-medium">
                  {" "}
                  every woman deserves to feel her best.
                </span>{" "}
                Nestled in F-10 Markaz, Islamabad, we've been the city's
                go-to beauty destination for over a decade.
              </p>

              <p className="text-[#B8ABCF] leading-9 mb-10 text-[15px]">
                From a quick blowdry before a meeting to a full bridal
                transformation, our team treats every client like she's
                the only one in the room. That's why clients keep coming
                back — and why they bring their mothers, daughters, and
                friends.
              </p>

              {/* Quote */}
              <div className="border-l-4 border-[#7B4FBF] bg-[#7B4FBF]/10 p-8 mb-10">
                <p className="font-cormorant italic text-[#D0C0EE] text-xl leading-9 mb-4">
                  "From consultation to final look, everything was smooth
                  and comfortable. Fozia paid attention to every detail
                  and made sure I was happy at every step."
                </p>

                <cite className="uppercase tracking-[0.15em] text-xs text-[#A778F0] not-italic">
                  — Saba Islam · Google Review
                </cite>
              </div>

              {/* Location */}
              <div className="flex gap-4 border-y border-purple-400/20 py-6 mb-10">
                <span className="text-[#A778F0] text-lg">📍</span>

                <div className="text-[#B8ABCF] text-sm leading-7">
                  <p className="text-white font-medium">
                    Capital Trade Centre, F-10 Markaz
                  </p>

                  <p>St 57, Unit 6 · Islamabad 44000</p>

                  <p>Open Daily · 11am – 8pm · 051-846-1717</p>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4">
                <a
                  href="/#booking"
                  className="bg-[#7B4FBF] border border-[#9B6FDF] px-8 py-4 text-xs uppercase tracking-[0.15em] hover:bg-[#9B6FDF] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_28px_rgba(123,79,191,0.45)]"
                >
                  Book Appointment
                </a>

                <a
                  href="https://wa.me/925181617"
                  target="_blank"
                  rel="noreferrer"
                  className="border border-[#A778F0]/30 px-8 py-4 text-xs uppercase tracking-[0.15em] text-[#A778F0] hover:border-[#A778F0] hover:text-white transition-all duration-300"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden lg:block w-px bg-gradient-to-b from-transparent via-purple-400/30 to-transparent" />

            {/* RIGHT */}
            <div
              className={`transition-all duration-700 delay-300 ${
                visible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-6"
              }`}
            >
              {pillars.map((p) => (
                <div
                  key={p.num}
                  className="grid grid-cols-[48px_1fr] gap-6 py-8 border-b border-purple-400/10 group"
                >
                  <div className="font-cormorant text-4xl text-[#A778F0]/20 group-hover:text-[#A778F0] transition-colors duration-300">
                    {p.num}
                  </div>

                  <div>
                    <h3 className="text-white text-lg mb-3">
                      {p.title}
                    </h3>

                    <p className="text-[#B8ABCF] text-sm leading-8">
                      {p.desc}
                    </p>
                  </div>
                </div>
              ))}

              {/* Badge */}
              <div className="mt-10 p-6 border border-[#A778F0]/20 bg-gradient-to-br from-[#7B4FBF]/20 to-[#7B4FBF]/5 flex gap-4 items-center">
                <span className="text-2xl">♀</span>

                <div>
                  <p className="uppercase tracking-[0.1em] text-xs text-[#A778F0] mb-1">
                    Proudly Women-Owned
                  </p>

                  <p className="text-[#B8ABCF] text-sm">
                    Verified · Google Maps · Islamabad
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div
            className={`grid grid-cols-2 md:grid-cols-4 border border-purple-400/20 transition-all duration-700 delay-500 ${
              visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`text-center p-10 bg-[#7B4FBF]/5 hover:bg-[#7B4FBF]/15 transition-all duration-300 ${
                  i !== stats.length - 1
                    ? "md:border-r border-purple-400/20"
                    : ""
                } ${
                  i >= 2
                    ? "border-t md:border-t-0 border-purple-400/20"
                    : ""
                }`}
              >
                <div className="font-cormorant text-5xl flex justify-center items-end gap-1 text-white">
                  {s.num}

                  <span className="text-2xl text-[#A778F0]">
                    {s.suffix}
                  </span>
                </div>

                <p className="uppercase tracking-[0.18em] text-[11px] text-[#8870A8] mt-3">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}