import CaseStudyCard from "../components/CaseStudyCard";
import CTASection from "../components/CTASection";
import Reveal from "../components/Reveal";
import { RevealGroup } from "../components/Reveal";
import { CASE_STUDIES } from "../data/site";
import { ArrowUpRight, Sparkles, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const OUTCOME_BANNERS = [
  {
    icon: Sparkles,
    color: "#F2A93B",
    headline: "From Invisible to AI-Cited",
    sub: "Giggle Tree now featured in Google AI Overview as a childcare authority.",
  },
  {
    icon: TrendingUp,
    color: "#2F6F5E",
    headline: "Doubled Organic Leads in 6 Months",
    sub: "The Uniform Edit ranked nationally for 'corporate uniform suppliers'.",
  },
];

export default function CaseStudies() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-20 pb-20 sm:pt-28 sm:pb-28 overflow-hidden bg-[#17171F]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-80px] right-[-80px] w-[500px] h-[500px] rounded-full bg-[#2F6F5E]/15 blur-[100px]" />
          <div className="absolute bottom-[-80px] left-[-80px] w-[400px] h-[400px] rounded-full bg-[#F2A93B]/10 blur-[100px]" />
        </div>
        <div className="relative max-w-container mx-auto px-5 sm:px-8">
          <Reveal>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E31C79]/15 text-[#E31C79] text-xs font-semibold uppercase tracking-widest mb-5">
              Proven Outcomes
            </span>
            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-[1.1] max-w-3xl">
              Real Results for{" "}
              <span className="text-[#F2A93B]">Real Businesses</span>
            </h1>
            <p className="mt-6 text-lg text-white/65 max-w-2xl leading-relaxed">
              Discover how we've helped businesses break through digital barriers
              with data-driven strategies, measurable ROI, and precision execution.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-[40px] bg-[#F2A93B] hover:bg-[#D98F1F] text-[#17171F] font-semibold text-sm transition-colors shadow-lg"
              >
                Start Your Success Story <ArrowUpRight size={16} />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-[40px] bg-white/10 hover:bg-white/15 text-white font-semibold text-sm transition-colors border border-white/15"
              >
                Our Services
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Outcomes Banner */}
      <section className="py-12 bg-[#F3EEE1]">
        <div className="max-w-container mx-auto px-5 sm:px-8">
          <RevealGroup className="grid sm:grid-cols-2 gap-5">
            {OUTCOME_BANNERS.map(({ icon: Icon, color, headline, sub }) => (
              <div
                key={headline}
                className="flex items-start gap-5 p-6 rounded-2xl bg-white border border-[#17171F]/8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: color + "20", color }}
                >
                  <Icon size={22} />
                </div>
                <div>
                  <div className="font-display font-bold text-[#17171F] text-lg leading-snug">
                    {headline}
                  </div>
                  <p className="text-sm text-[#4A4A5A] mt-1.5 leading-relaxed">
                    {sub}
                  </p>
                </div>
              </div>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Case Study Cards */}
      <section className="py-16 sm:py-20 bg-[#FBF8F3]">
        <div className="max-w-container mx-auto px-5 sm:px-8">
          <Reveal className="text-center mb-12">
            <span className="text-sm font-semibold text-[#2F6F5E] uppercase tracking-widest">
              Client Success Stories
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight mt-3 text-[#17171F]">
              Our Case Studies
            </h2>
          </Reveal>
          <RevealGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CASE_STUDIES.map((study) => (
              <CaseStudyCard key={study.id} study={study} />
            ))}
          </RevealGroup>

          {/* Empty state if no case studies */}
          {CASE_STUDIES.length === 0 && (
            <div className="text-center py-20 text-[#4A4A5A]">
              Case studies coming soon.
            </div>
          )}
        </div>
      </section>

      <CTASection />
    </>
  );
}
