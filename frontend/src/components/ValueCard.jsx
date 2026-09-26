import { RevealItem } from "./Reveal";

/**
 * Value card with icon and subtle hover lift.
 */
export default function ValueCard({ value }) {
  const Icon = value.Icon;
  return (
    <RevealItem className="h-full">
      <div className="group h-full rounded-xl border border-line bg-white p-7 hover:border-signal hover:-translate-y-1 hover:shadow-[0_16px_40px_-16px_rgba(40,81,216,0.25)] transition-all duration-300">
        <div className="w-11 h-11 rounded-lg bg-signaldim text-signal flex items-center justify-center mb-5 group-hover:bg-signal group-hover:text-white transition-colors">
          <Icon size={20} />
        </div>
        <h3 className="font-display font-semibold text-lg mb-2.5">
          {value.title}
        </h3>
        <p className="text-sm text-slate leading-relaxed">{value.body}</p>
      </div>
    </RevealItem>
  );
}
