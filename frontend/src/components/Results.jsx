import Reveal, { RevealGroup, RevealItem } from "./Reveal";
import CountUp from "./CountUp";

const HIGHLIGHTS = [
  {
    value: 2.4,
    decimals: 1,
    suffix: "×",
    title: "More Qualified Leads",
    body: "Through analytics-driven refinement, form submissions surged, delivering more conversions with less friction across the funnel.",
  },
  {
    value: 34,
    prefix: "-",
    suffix: "%",
    title: "Reduction in Bounce Rate",
    body: "Smart content structure and predictive UX optimizations led to fewer drop-offs and more meaningful user journeys, backed by GA4 engagement data.",
  },
];

const STAT_ROW = [
  { value: 50, suffix: "+", label: "Projects Completed" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 24, suffix: "/7", label: "Support Available", raw: "24/7" },
  { value: 15, suffix: "+", label: "Years Experience" },
];

export default function Results() {
  return (
    <section className="py-20 sm:py-28 bg-[#FBF8F3]">
      <div className="max-w-container mx-auto px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <div className="text-xs font-bold text-[#2F6F5E] uppercase tracking-wider mb-3">
            Proven Outcomes
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#17171F]">
            What We Deliver
          </h2>
          <p className="text-[#5C5C6F] text-base sm:text-lg mt-4 leading-relaxed">
            We don&apos;t just promise growth—we deliver measurable results that impact your bottom line.
          </p>
        </Reveal>

        <RevealGroup className="grid sm:grid-cols-2 gap-6 sm:gap-8 mt-12 sm:mt-14">
          {HIGHLIGHTS.map((h) => (
            <RevealItem key={h.title} className="h-full">
              <div className="h-full rounded-[24px] border border-[rgba(20,20,28,0.10)] bg-white p-8 sm:p-10 shadow-[0_4px_24px_-6px_rgba(20,20,28,0.05)] hover:shadow-[0_12px_36px_-8px_rgba(20,20,28,0.09)] transition-all">
                <div className="inline-flex items-baseline font-mono text-5xl sm:text-6xl font-bold text-[#2F6F5E]">
                  <CountUp value={h.value} decimals={h.decimals || 0} prefix={h.prefix} suffix={h.suffix} />
                </div>
                <h3 className="font-display font-bold text-xl sm:text-2xl mt-4 mb-2.5 text-[#17171F]">
                  {h.title}
                </h3>
                <p className="text-sm sm:text-base text-[#5C5C6F] leading-relaxed">{h.body}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        <RevealGroup className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mt-6 sm:mt-8 rounded-[24px] border border-[rgba(20,20,28,0.10)] bg-white p-6 sm:p-8 shadow-[0_4px_24px_-6px_rgba(20,20,28,0.05)]">
          {STAT_ROW.map((s) => (
            <RevealItem key={s.label} className="text-center p-3">
              <div className="font-mono text-3xl sm:text-4xl font-bold text-[#2F6F5E]">
                {s.raw ? s.raw : <CountUp value={s.value} suffix={s.suffix} />}
              </div>
              <div className="text-xs sm:text-sm font-medium text-[#5C5C6F] mt-1.5">{s.label}</div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
