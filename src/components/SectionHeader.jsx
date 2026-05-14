export default function SectionHeader({
  tag,
  title,
  accent,
  description,
}) {
  return (
    <div className="mb-14">
      <span className="uppercase tracking-[0.25em] text-xs text-[#C4AAEE]">
        {tag}
      </span>

      <h2 className="font-cormorant text-5xl text-white mt-3">
        {title} <em className="text-[#C4AAEE] italic">{accent}</em>
      </h2>

      <p className="max-w-xl text-[#B8AACC] leading-8 mt-5">
        {description}
      </p>
    </div>
  );
}