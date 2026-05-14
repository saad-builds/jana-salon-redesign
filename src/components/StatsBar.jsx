import { stats } from "../data/saloonData";

export default function StatsBar() {
  return (
    <section className="bg-[#3D1F7A] border-y border-purple-400/20 py-10">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat, i) => (
          <div key={i}>
            <h3 className="font-cormorant text-5xl text-white">
              {stat.number}
            </h3>
            <p className="uppercase tracking-[0.15em] text-xs text-[#B8AACC] mt-2">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}