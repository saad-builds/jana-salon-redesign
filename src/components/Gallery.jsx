import SectionHeader from "./SectionHeader";

const gallery = [
  {
    title: "Bridal Look",
    image: "/images/bridal.jpg",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    title: "Keratin",
    image: "/images/keratin.jpg",
  },
  {
    title: "Hair Color",
    image: "/images/hair-color.jpg",
  },
  {
    title: "Nail Art",
    image: "/images/nails.jpg",
  },
  {
    title: "Facial Glow",
    image: "/images/facial.jpg",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">

        <SectionHeader
          tag="Our Work"
          title="The"
          accent="Gallery"
          description="Every transformation tells a story."
        />

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] gap-3 mt-14">

          {gallery.map((item, i) => (
            <div
              key={i}
              className={`relative overflow-hidden group border border-purple-400/20 ${item.span || ""}`}
            >

              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover object-[50%_30%] group-hover:scale-110 transition duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent flex items-end justify-center pb-5">

                <span className="text-[#C4AAEE] font-cormorant text-lg md:text-xl">
                  {item.title}
                </span>

              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}