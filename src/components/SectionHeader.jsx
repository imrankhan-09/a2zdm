import Reveal from "./Reveal";

/**
 * Consistent page/section heading used across About, Blog, Case Studies
 * and service pages. Matches the existing kicker + display-heading style.
 */
export default function SectionHeader({
  kicker,
  title,
  description,
  align = "left",
  dark = false,
}) {
  const centered = align === "center";
  return (
    <Reveal className={centered ? "max-w-2xl mx-auto text-center" : "max-w-2xl"}>
      {kicker && (
        <div className="text-sm font-semibold text-signal mb-3">{kicker}</div>
      )}
      <h2
        className={`font-display font-semibold text-3xl sm:text-4xl tracking-tight ${
          dark ? "text-paper" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`text-lg mt-4 leading-relaxed ${
            dark ? "text-white/70" : "text-slate"
          }`}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
