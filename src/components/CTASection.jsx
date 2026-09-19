import Reveal from "./Reveal";
import { CTA_DEFAULT } from "../data/site";

/**
 * Consistent CTA used at the bottom of About, Blog and Case Studies.
 * Same visual system as the existing home CTA. Defaults to the
 * specified external contact link; pages can override via props.
 */
export default function CTASection({
  title = CTA_DEFAULT.title,
  button = CTA_DEFAULT.button,
  href = CTA_DEFAULT.href,
}) {
  const external = /^https?:\/\//.test(href);
  return (
    <section className="py-24 sm:py-28 bg-ink text-paper text-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.07] bg-[radial-gradient(circle_at_50%_0%,white,transparent_60%)]" />
      <div className="max-w-container mx-auto px-5 sm:px-8 relative">
        <Reveal>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl tracking-tight max-w-2xl mx-auto leading-tight">
            {title}
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <a
            href={href}
            {...(external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            className="inline-flex items-center mt-9 px-8 py-3.5 rounded-[40px] bg-[#F2A93B] hover:bg-[#D98F1F] text-[#17171F] font-semibold text-sm transition-colors shadow-sm"
          >
            {button}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
