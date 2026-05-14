import { useEffect, useRef, useState } from "react";

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
    desc: "A safe, welcoming space built by women, for women.",
  },
  {
    num: "02",
    title: "Fozia & Her Team",
    desc: "Our lead stylist listens first and ensures comfort at every step.",
  },
  {
    num: "03",
    title: "Premium Products Only",
    desc: "We never compromise on quality products or results.",
  },
];

export default function About() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={ref}
      className="bg-[#0C0818] text-white py-24 px-6 relative overflow-hidden"
    >
      {/* glow */}
      <div className="absolute w-[600px] h-[600px] bg-purple-500/10 blur-3xl rounded-full top-[-200px] right-[-200px]" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* HEADER */}
        <div
          className={`transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <p className="uppercase tracking-[0.3em] text-xs text-purple-400 mb-4 flex items-center gap-3">
            <span className="w-10 h-px bg-purple-500"></span>
            Our Story
          </p>

          <h2 className="text-4xl md:text-6xl font-serif leading-tight mb-14">
            More Than a Salon —{" "}
            <span className="text-purple-400 italic">A Decade of Trust</span>
          </h2>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">

          {/* LEFT */}
          <div className="space-y-5 text-gray-300 leading-relaxed">
            <p>
              Jana Salon is built on the belief that every woman deserves to feel confident.
            </p>

            <p>
              From quick styling to bridal transformations — every client matters.
            </p>

            <div className="border-l-2 border-purple-500 bg-purple-500/10 p-5 italic text-purple-200">
              "Fozia made me feel completely comfortable and cared for."
            </div>

            <p className="text-sm text-gray-400">
              📍 F-10 Markaz, Islamabad · Open Daily 11AM–8PM
            </p>
          </div>

          {/* RIGHT */}
          <div className="space-y-6">
            {pillars.map((p) => (
              <div key={p.num} className="flex gap-5 border-b border-purple-500/10 pb-5">
                <div className="text-purple-400 text-3xl font-serif">
                  {p.num}
                </div>
                <div>
                  <h4 className="text-white font-medium">{p.title}</h4>
                  <p className="text-gray-400 text-sm">{p.desc}</p>
                </div>
              </div>
            ))}

            <div className="bg-purple-500/10 border border-purple-500/20 p-4 mt-6">
              <p className="text-purple-300 text-xs uppercase tracking-widest">
                Women-Owned Salon
              </p>
              <p className="text-gray-400 text-sm">
                Verified Business · Islamabad
              </p>
            </div>
          </div>
        </div>

        {/* STATS */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 border border-purple-500/20 transition-all duration-700 ${
            visible ? "opacity-100" : "opacity-0"
          }`}
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="p-6 text-center border-r border-purple-500/10 last:border-none hover:bg-purple-500/10 transition"
            >
              <div className="text-3xl md:text-4xl font-serif">
                {s.num}
                <span className="text-purple-400">{s.suffix}</span>
              </div>
              <p className="text-xs uppercase tracking-widest text-gray-400 mt-2">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}