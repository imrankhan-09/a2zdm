import { CheckCircle2, ArrowUpRight, BadgeCheck, Target, TrendingUp, Lightbulb, Award } from "lucide-react";
import { Link } from "react-router-dom";
import TeamCarousel from "../components/TeamCarousel";
import CTASection from "../components/CTASection";
import Reveal, { RevealGroup } from "../components/Reveal";
import { TEAM, VALUES } from "../data/site";
import { useSEO } from "../hooks/useSEO";
import { PAGE_SEO } from "../data/seo";

const TRADITIONAL = [
  "Spray-and-pray campaigns",
  "Vanity metrics (impressions, likes)",
  "Gut-feel decision-making",
  "Siloed marketing channels",
  "Delayed reporting cycles",
];
const A2ZDM_WAY = [
  "Data-first strategy, always",
  "Revenue-tied KPIs",
  "Predictive modelling & forecasting",
  "Unified cross-channel view",
  "Real-time dashboards & alerts",
];

const CERTS = [
  "Google Analytics Certified",
  "Google Ads Certified",
  "HubSpot Content Marketing Certified",
];

export default function About() {
  useSEO(PAGE_SEO.about);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-20 pb-20 sm:pt-28 sm:pb-28 overflow-hidden bg-[#17171F]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-[#F2A93B]/10 blur-[120px]" />
        </div>
        <div className="relative max-w-container mx-auto px-5 sm:px-8 text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F2A93B]/15 text-[#F2A93B] text-xs font-semibold uppercase tracking-widest mb-5">
              Know More About Us
            </span>
            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-[1.1]">
              We Are A MarTech Agency{" "}
              <span className="text-[#F2A93B]">Built for Growth</span>
            </h1>
            <p className="mt-6 text-lg text-white/65 max-w-2xl mx-auto leading-relaxed">
              A2ZDM is a data-driven digital marketing consultancy headquartered
              in Indore, India. We help ambitious businesses unlock sustainable
              growth by connecting marketing activity directly to revenue outcomes.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-[40px] bg-[#F2A93B] hover:bg-[#D98F1F] text-[#17171F] font-semibold text-sm transition-colors shadow-lg"
              >
                Explore Our Services <ArrowUpRight size={16} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-[40px] bg-white/10 hover:bg-white/15 text-white font-semibold text-sm transition-colors border border-white/15"
              >
                Get in Touch
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 sm:py-24 bg-[#FBF8F3]">
        <div className="max-w-container mx-auto px-5 sm:px-8">
          <Reveal className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-sm font-semibold text-[#2F6F5E] uppercase tracking-widest">
              Our Mission
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight mt-3 text-[#17171F]">
              Democratising Advanced Digital Marketing
            </h2>
            <p className="mt-5 text-[#4A4A5A] leading-relaxed">
              At A2ZDM, we believe every business deserves access to sophisticated
              marketing strategy. We combine powerful SEO, advanced analytics, and
              performance marketing to build comprehensive growth systems that scale
              with your business.
            </p>
          </Reveal>

          <RevealGroup className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Target, label: "Results-Driven", color: "#F2A93B" },
              { icon: TrendingUp, label: "Data-Backed", color: "#2F6F5E" },
              { icon: Lightbulb, label: "Innovation First", color: "#E31C79" },
              { icon: Award, label: "Excellence Always", color: "#F2A93B" },
            ].map(({ icon: Icon, label, color }) => (
              <div
                key={label}
                className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-[#17171F]/8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: color + "22", color }}
                >
                  <Icon size={22} />
                </div>
                <span className="font-display font-semibold text-[#17171F]">
                  {label}
                </span>
              </div>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* The MarTech Difference */}
      <section className="py-20 sm:py-24 bg-[#F3EEE1]">
        <div className="max-w-container mx-auto px-5 sm:px-8">
          <Reveal className="text-center mb-14">
            <span className="text-sm font-semibold text-[#E31C79] uppercase tracking-widest">
              Why Choose A2ZDM?
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight mt-3 text-[#17171F]">
              The MarTech Difference
            </h2>
            <p className="mt-4 text-[#4A4A5A] max-w-xl mx-auto">
              Traditional agencies rely on instinct. We rely on data. Here's what
              that means for your business.
            </p>
          </Reveal>

          <div className="grid lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Reveal className="rounded-2xl bg-white border border-[#17171F]/8 p-8">
              <div className="text-sm font-semibold text-[#4A4A5A] uppercase tracking-widest mb-5">
                Traditional Marketing Agency
              </div>
              <ul className="space-y-3.5">
                {TRADITIONAL.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-[#4A4A5A]">
                    <span className="w-5 h-5 rounded-full bg-red-50 border border-red-200 flex items-center justify-center shrink-0">
                      <span className="w-2 h-0.5 bg-red-400 rounded-full block" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal
              delay={0.1}
              className="rounded-2xl bg-[#17171F] text-white p-8 shadow-[0_20px_60px_-12px_rgba(20,20,28,0.35)]"
            >
              <div className="text-sm font-semibold text-[#F2A93B] uppercase tracking-widest mb-5">
                A2ZDM — The MarTech Way
              </div>
              <ul className="space-y-3.5">
                {A2ZDM_WAY.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-white/85">
                    <CheckCircle2 size={18} className="text-[#2F6F5E] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Leadership Spotlight */}
      <section className="py-20 sm:py-24 bg-[#FBF8F3]">
        <div className="max-w-container mx-auto px-5 sm:px-8">
          <Reveal className="text-center mb-14">
            <span className="text-sm font-semibold text-[#2F6F5E] uppercase tracking-widest">
              Meet Our Team
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight mt-3 text-[#17171F]">
              The People Behind the Growth
            </h2>
            <p className="mt-4 text-[#4A4A5A] max-w-xl mx-auto">
              A senior team that pairs marketing craft with analytics rigour.
            </p>
          </Reveal>
          <TeamCarousel members={TEAM} />
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 sm:py-24 bg-[#F3EEE1]">
        <div className="max-w-container mx-auto px-5 sm:px-8">
          <Reveal className="text-center mb-14">
            <span className="text-sm font-semibold text-[#E31C79] uppercase tracking-widest">
              What Guides Us
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight mt-3 text-[#17171F]">
              Our Core Values
            </h2>
            <p className="mt-4 text-[#4A4A5A] max-w-xl mx-auto">
              These principles shape how we work with every client and govern every
              strategy we execute.
            </p>
          </Reveal>
          <RevealGroup className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((value) => {
              const Icon = value.Icon;
              return (
                <div
                  key={value.title}
                  className="rounded-2xl bg-white border border-[#17171F]/8 p-7 hover:shadow-lg transition-shadow group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#F2A93B]/15 text-[#F2A93B] flex items-center justify-center mb-5 group-hover:bg-[#F2A93B] group-hover:text-[#17171F] transition-colors">
                    <Icon size={22} />
                  </div>
                  <h3 className="font-display font-bold text-[#17171F] text-lg mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-[#4A4A5A] leading-relaxed">{value.body}</p>
                </div>
              );
            })}
          </RevealGroup>
        </div>
      </section>

      {/* Certifications Banner */}
      <section className="py-14 bg-[#17171F]">
        <div className="max-w-container mx-auto px-5 sm:px-8">
          <Reveal className="text-center mb-8">
            <span className="text-sm font-semibold text-white/50 uppercase tracking-widest">
              Verified Credentials
            </span>
          </Reveal>
          <div className="flex flex-wrap justify-center gap-3">
            {CERTS.map((cert) => (
              <div
                key={cert}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/8 ring-1 ring-white/15 text-sm text-white/70 font-medium"
              >
                <BadgeCheck size={16} className="text-[#2F6F5E]" />
                {cert}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
