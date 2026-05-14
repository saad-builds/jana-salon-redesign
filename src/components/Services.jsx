import SectionHeader from "./SectionHeader";
import { services } from "../data/saloonData";

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-[#3D1F7A]/10">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          tag="What We Offer"
          title="Our"
          accent="Services"
          description="Professional treatments delivered by trained stylists in a clean, welcoming environment."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-purple-400/10">
          {services.map((service, i) => (
            <div
              key={i}
              className="bg-[#1E1040] p-8 hover:bg-[#3D1F7A]/40 transition"
            >
              <div className="text-3xl text-[#C4AAEE] mb-6">
                {service.icon}
              </div>

              <h3 className="font-cormorant text-3xl text-white mb-3">
                {service.title}
              </h3>

              <p className="text-[#B8AACC] text-sm leading-7 mb-6">
                {service.desc}
              </p>

              <ul>
                {service.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex justify-between py-3 border-b border-purple-400/10 text-sm"
                  >
                    <span>{item[0]}</span>
                    <span className="text-[#C4AAEE]">{item[1]}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}