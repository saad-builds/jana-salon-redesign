import SectionHeader from "./SectionHeader";

const testimonials = [
  {
    name: "Saba Islam",
    service: "Haircut & Style",
    text: "Such a great experience. The stylist paid attention to details.",
  },
  {
    name: "Tatheer Fatima",
    service: "Haircut & Blow Dry",
    text: "I really loved it. Highly recommend for haircut!",
  },
  {
    name: "Maryam I.H.",
    service: "Multiple Services",
    text: "Jana salon really shines you up in all sorts of ways!",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-24 px-6 bg-[#3D1F7A]/20"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          tag="Client Love"
          title="What They"
          accent="Say"
          description="Real reviews from real clients."
        />

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="border border-purple-400/10 p-8 rounded bg-[#1E1040]/70"
            >
              <div className="text-[#C4AAEE] mb-4">★★★★★</div>

              <p className="italic text-[#B8AACC] leading-8 mb-6">
                "{t.text}"
              </p>

              <h4 className="text-white font-medium">
                {t.name}
              </h4>

              <p className="text-[#C4AAEE] text-sm mt-1">
                {t.service}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}