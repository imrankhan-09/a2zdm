import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Check,
  Compass,
  Database,
  Layers,
  MousePointerClick,
  RefreshCw,
  Search,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import Reveal, { RevealGroup, RevealItem } from "../components/Reveal";
import CountUp from "../components/CountUp";
import CTASection from "../components/CTASection";
import { ALL_SERVICES } from "../data/site";

/* ---------------------------------- data ---------------------------------- */

const APPROACH = [
  {
    step: "01",
    title: "Strategic Planning",
    body: "Custom, data-backed strategies tailored directly to your business goals and market landscape.",
    Icon: Compass,
  },
  {
    step: "02",
    title: "Full-Service Execution",
    body: "End-to-end technical, analytics, and content implementation managed by our expert team.",
    Icon: Layers,
  },
  {
    step: "03",
    title: "Data-Driven Decisions",
    body: "Transparent tracking and attribution metrics that guide ongoing optimizations and budget efficiency.",
    Icon: BarChart3,
  },
  {
    step: "04",
    title: "Continuous Improvement",
    body: "Relentless A/B testing, query refinement, and algorithmic adaptation for sustained compounding ROI.",
    Icon: RefreshCw,
  },
];

const CATEGORIES = [
  { id: "all", label: "All Services", Icon: Layers },
  { id: "aeo", label: "Answer Engine Optimization", Icon: Sparkles },
  { id: "seo", label: "Search Engine Optimization", Icon: Search },
  { id: "analytics", label: "Digital Analytics", Icon: BarChart3 },
  { id: "predictive", label: "Predictive Analytics", Icon: TrendingUp },
  { id: "bi", label: "Business Intelligence", Icon: Database },
  { id: "ppc", label: "Pay Per Click Management", Icon: MousePointerClick },
];

const RESULT_STATS = [
  { value: 240, suffix: "%", label: "Average organic traffic growth" },
  { value: 3.2, decimals: 1, suffix: "x", label: "Return on ad spend increase" },
  { value: 156, suffix: "%", label: "Improvement in lead quality" },
];

/* -------------------------------- Service Card -------------------------------- */

function ModernServiceCard({ service, index }) {
  const Icon = service.Icon;
  const num = String(index + 1).padStart(2, "0");

  return (
    <RevealItem className="h-full">
      <article className="group h-full flex flex-col justify-between rounded-[24px] border border-[rgba(20,20,28,0.10)] bg-white p-7 sm:p-8 hover:border-[#17171F]/30 hover:-translate-y-1.5 transition-all duration-300 shadow-[0_4px_24px_-6px_rgba(20,20,28,0.04)] hover:shadow-[0_12px_36px_-8px_rgba(20,20,28,0.08)]">
        <div>
          {/* Card Top Row */}
          <div className="flex items-center justify-between mb-6">
            <span className="w-12 h-12 rounded-2xl bg-[#2F6F5E]/10 text-[#2F6F5E] flex items-center justify-center group-hover:bg-[#F2A93B] group-hover:text-[#17171F] transition-colors duration-300 shadow-xs">
              <Icon size={22} />
            </span>
            <span className="font-mono text-xs font-semibold text-[#5C5C6F]/70">
              #{num}
            </span>
          </div>

          {/* Category Tag */}
          <span className="text-[11px] font-semibold uppercase tracking-wider text-[#2F6F5E] block mb-2">
            {service.category}
          </span>

          {/* Title */}
          <h3 className="font-display font-bold text-xl sm:text-2xl text-[#17171F] group-hover:text-[#2F6F5E] transition-colors leading-snug">
            <Link to={`/services/${service.slug}`}>{service.name}</Link>
          </h3>

          {/* Description */}
          <p className="text-sm text-[#5C5C6F] leading-relaxed mt-3 mb-5 line-clamp-3">
            {service.description}
          </p>

          {/* Key Capabilities checklist */}
          {service.includes && service.includes.length > 0 && (
            <ul className="space-y-2 mb-6 border-t border-[rgba(20,20,28,0.06)] pt-4">
              {service.includes.slice(0, 3).map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 text-xs text-[#4A4A5A] leading-relaxed"
                >
                  <Check
                    size={14}
                    className="text-[#2F6F5E] mt-0.5 shrink-0"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* CTA Link */}
        <div className="pt-4 border-t border-[rgba(20,20,28,0.06)] flex items-center justify-between">
          <Link
            to={`/services/${service.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#17171F] group-hover:text-[#2F6F5E] transition-colors"
            aria-label={`View details for ${service.name}`}
          >
            Learn More
            <ArrowUpRight
              size={15}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </Link>
          <span className="text-xs text-[#5C5C6F]/60">Full Details →</span>
        </div>
      </article>
    </RevealItem>
  );
}

/* ---------------------------------- Page ---------------------------------- */

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    document.title = "Digital Growth Services | A2ZDM MarTech Agency";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Explore A2ZDM's comprehensive digital growth services: Answer Engine Optimization, Search Engine Optimization, Digital Analytics, Predictive Analytics, Business Intelligence, and Pay Per Click Management."
      );
    }
  }, []);

  const filteredServices =
    activeCategory === "all"
      ? ALL_SERVICES
      : ALL_SERVICES.filter((s) => {
          if (activeCategory === "aeo")
            return s.category === "Answer Engine Optimization";
          if (activeCategory === "seo")
            return s.category === "Search Engine Optimization";
          if (activeCategory === "analytics")
            return s.category === "Digital Analytics";
          if (activeCategory === "predictive")
            return s.category === "Predictive Analytics";
          if (activeCategory === "bi")
            return s.category === "Business Intelligence";
          if (activeCategory === "ppc")
            return s.category === "Pay Per Click Management";
          return true;
        });

  return (
    <div className="bg-[#FBF8F3] text-[#17171F] overflow-x-clip">
      {/* ------------------------------- HERO ------------------------------- */}
      <section className="relative pt-20 pb-20 sm:pt-28 sm:pb-28 bg-[#17171F] text-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 right-0 w-[600px] h-[600px] rounded-full bg-[#F2A93B]/10 blur-[130px]" />
          <div className="absolute bottom-0 left-0 w-[450px] h-[450px] rounded-full bg-[#2F6F5E]/15 blur-[120px]" />
        </div>

        <div className="relative max-w-container mx-auto px-5 sm:px-8 text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F2A93B]/15 border border-[#F2A93B]/30 text-[#F2A93B] text-xs font-semibold uppercase tracking-widest mb-6">
              Data-Driven Growth Services
            </span>
            <h1 className="font-display font-bold tracking-tight text-4xl sm:text-6xl lg:text-7xl leading-[1.08] max-w-4xl mx-auto">
              Smarter Data.{" "}
              <span className="text-[#F2A93B]">Measurable</span> Growth.
            </h1>
            <p className="mt-6 text-base sm:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
              Comprehensive MarTech solutions designed to elevate organic search,
              unify analytics pipelines, and scale high-ROAS marketing campaigns.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-[40px] bg-[#F2A93B] text-[#17171F] font-semibold text-sm hover:bg-[#D98F1F] shadow-[0_12px_28px_-6px_rgba(242,169,59,0.35)] hover:-translate-y-0.5 transition-all duration-300"
              >
                Talk to an Expert
                <ArrowUpRight size={16} />
              </Link>
              <Link
                to="/case-studies"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-[40px] border border-white/20 bg-white/5 text-white font-semibold text-sm hover:bg-white/10 hover:border-white/40 transition-all duration-300"
              >
                Explore Client Results
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ----------------------------- APPROACH ----------------------------- */}
      <section
        aria-label="Our Approach to Success"
        className="py-16 sm:py-20 bg-[#F3EEE1] border-b border-[#17171F]/8"
      >
        <div className="max-w-container mx-auto px-5 sm:px-8">
          <Reveal className="max-w-2xl mx-auto text-center mb-12">
            <span className="text-xs font-semibold text-[#2F6F5E] uppercase tracking-widest">
              How We Work
            </span>
            <h2 className="font-display font-bold tracking-tight text-3xl sm:text-4xl text-[#17171F] mt-2">
              Our Approach to Success
            </h2>
            <p className="text-[#5C5C6F] text-base sm:text-lg mt-3 leading-relaxed">
              We combine cutting-edge technology with proven marketing strategies
              to deliver sustainable, measurable growth.
            </p>
          </Reveal>

          <RevealGroup
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
            stagger={0.08}
          >
            {APPROACH.map((a) => (
              <RevealItem key={a.step} className="h-full">
                <div className="h-full rounded-2xl bg-white border border-[#17171F]/10 p-7 text-center hover:border-[#2F6F5E]/30 hover:-translate-y-1 hover:shadow-md transition-all duration-300 flex flex-col justify-between">
                  <div>
                    <span className="w-12 h-12 mx-auto rounded-2xl bg-[#2F6F5E]/10 text-[#2F6F5E] flex items-center justify-center mb-4">
                      <a.Icon size={22} />
                    </span>
                    <span className="font-mono text-xs font-bold text-[#F2A93B]">
                      Phase {a.step}
                    </span>
                    <h3 className="font-display font-semibold text-lg text-[#17171F] mt-2">
                      {a.title}
                    </h3>
                    <p className="text-sm text-[#5C5C6F] leading-relaxed mt-2">
                      {a.body}
                    </p>
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* -------------------------- CATEGORY FILTER TABS --------------------------- */}
      <nav
        aria-label="Filter Services"
        className="sticky top-20 z-30 bg-[#17171F]/95 backdrop-blur-md border-y border-white/10 shadow-md py-3.5"
      >
        <div className="max-w-container mx-auto px-5 sm:px-8">
          <div className="flex gap-2 overflow-x-auto no-scrollbar items-center">
            {CATEGORIES.map((c) => {
              const Icon = c.Icon;
              const isActive = activeCategory === c.id;
              return (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setActiveCategory(c.id)}
                  className={`inline-flex items-center gap-2 shrink-0 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                    isActive
                      ? "bg-[#F2A93B] text-[#17171F] shadow-sm"
                      : "bg-white/10 text-white/80 hover:bg-white/15 hover:text-white"
                  }`}
                >
                  <Icon size={14} />
                  <span>{c.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* -------------------------- SERVICES GRID --------------------------- */}
      <section className="py-16 sm:py-24 bg-[#FBF8F3]">
        <div className="max-w-container mx-auto px-5 sm:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-semibold text-[#2F6F5E] uppercase tracking-widest">
                Service Portfolio
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#17171F] mt-1">
                {activeCategory === "all"
                  ? "All Growth Services"
                  : CATEGORIES.find((c) => c.id === activeCategory)?.label}
              </h2>
              <p className="text-sm text-[#5C5C6F] mt-1">
                Showing {filteredServices.length}{" "}
                {filteredServices.length === 1 ? "service" : "services"}
              </p>
            </div>
            {activeCategory !== "all" && (
              <button
                type="button"
                onClick={() => setActiveCategory("all")}
                className="text-xs font-semibold text-[#E31C79] hover:underline"
              >
                Reset to all services
              </button>
            )}
          </div>

          <RevealGroup
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7"
            stagger={0.04}
          >
            {filteredServices.map((service, index) => (
              <ModernServiceCard
                key={service.slug}
                service={service}
                index={index}
              />
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* --------------------------- PROVEN RESULTS -------------------------- */}
      <section
        aria-label="Proven Results"
        className="py-16 sm:py-20 bg-[#F3EEE1] border-t border-[#17171F]/8"
      >
        <div className="max-w-container mx-auto px-5 sm:px-8 text-center">
          <Reveal className="max-w-2xl mx-auto">
            <span className="text-xs font-semibold text-[#2F6F5E] uppercase tracking-widest">
              Authentic Impact
            </span>
            <h2 className="font-display font-bold tracking-tight text-3xl sm:text-4xl text-[#17171F] mt-2">
              Proven Track Record
            </h2>
            <p className="text-[#5C5C6F] text-base sm:text-lg mt-3 leading-relaxed">
              Real results delivered across commercial campaigns and digital transformations.
            </p>
          </Reveal>

          <RevealGroup
            className="grid sm:grid-cols-3 gap-5 mt-10 max-w-4xl mx-auto"
            stagger={0.08}
          >
            {RESULT_STATS.map((s) => (
              <RevealItem key={s.label} className="h-full">
                <div className="h-full rounded-2xl bg-white border border-[#17171F]/10 px-6 py-8 shadow-sm">
                  <div className="font-mono font-bold text-4xl sm:text-5xl text-[#2F6F5E]">
                    <CountUp
                      value={s.value}
                      decimals={s.decimals || 0}
                      suffix={s.suffix}
                    />
                  </div>
                  <div className="text-sm font-medium text-[#5C5C6F] mt-3 leading-relaxed">
                    {s.label}
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal delay={0.1}>
            <div className="mt-12">
              <Link
                to="/case-studies"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#17171F] hover:text-[#F2A93B] transition-colors"
              >
                View verified case studies and client stories <ArrowRight size={15} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* --------------------------- GLOBAL CTA -------------------------- */}
      <CTASection />
    </div>
  );
}
