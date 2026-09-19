import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ChevronRight,
  Layers,
  Sparkles,
  ShieldCheck,
  Target,
  Zap,
} from "lucide-react";
import CTASection from "../components/CTASection";
import Reveal, { RevealGroup, RevealItem } from "../components/Reveal";
import ServiceVisual from "../components/ServiceVisual";
import { ALL_SERVICES, getServiceBySlug } from "../data/site";

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  useEffect(() => {
    if (service) {
      document.title = `${service.name} | A2ZDM Services`;
      const meta = document.querySelector('meta[name="description"]');
      if (meta) {
        meta.setAttribute("content", service.description);
      }
    }
  }, [service]);

  if (!service) {
    return (
      <section className="py-28 text-center bg-[#FBF8F3]">
        <div className="max-w-container mx-auto px-5 sm:px-8">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E31C79]/10 text-[#E31C79] text-xs font-semibold uppercase tracking-wider mb-4">
            Service Not Found
          </span>
          <h1 className="font-display font-bold text-3xl sm:text-4xl text-[#17171F]">
            Service Not Found
          </h1>
          <p className="text-[#5C5C6F] mt-3 max-w-md mx-auto">
            The service you&apos;re looking for is either unavailable or has been relocated in our directory.
          </p>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-full bg-[#17171F] text-white text-sm font-semibold hover:bg-[#F2A93B] hover:text-[#17171F] transition-colors"
          >
            <ArrowLeft size={16} /> Explore All Services
          </Link>
        </div>
      </section>
    );
  }

  const Icon = service.Icon;
  // Get 3 related services from the same category or overall collection
  const related = ALL_SERVICES.filter(
    (s) => s.slug !== service.slug && (s.category === service.category || true)
  ).slice(0, 3);

  return (
    <div className="bg-[#FBF8F3] text-[#17171F] overflow-x-clip">
      {/* ----------------------------- BREADCRUMB & HERO ----------------------------- */}
      <section className="relative pt-12 pb-16 sm:pt-20 sm:pb-24 bg-[#17171F] text-white overflow-hidden">
        {/* Ambient background glows */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 right-0 w-[550px] h-[550px] rounded-full bg-[#F2A93B]/10 blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[450px] h-[450px] rounded-full bg-[#2F6F5E]/15 blur-[120px]" />
        </div>

        <div className="relative max-w-container mx-auto px-5 sm:px-8">
          {/* Breadcrumb Navigation */}
          <Reveal>
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-2 text-xs text-white/60 mb-8 flex-wrap"
            >
              <Link to="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <ChevronRight size={13} className="text-white/40" />
              <Link to="/services" className="hover:text-white transition-colors">
                Services
              </Link>
              {service.category && (
                <>
                  <ChevronRight size={13} className="text-white/40" />
                  <span className="text-white/75">{service.category}</span>
                </>
              )}
              <ChevronRight size={13} className="text-white/40" />
              <span className="text-[#F2A93B] font-medium truncate max-w-[200px] sm:max-w-none">
                {service.name}
              </span>
            </nav>
          </Reveal>

          {/* Hero Grid */}
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <Reveal>
                <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#F2A93B]/15 border border-[#F2A93B]/30 text-[#F2A93B] text-xs font-semibold uppercase tracking-widest mb-6">
                  <Icon size={14} />
                  <span>{service.category || "A2ZDM Digital Service"}</span>
                </div>

                <h1 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.1] text-white">
                  {service.name}
                </h1>

                <p className="mt-6 text-base sm:text-lg text-white/75 max-w-2xl leading-relaxed">
                  {service.description}
                </p>

                {/* Dual Pill CTA Buttons */}
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-[40px] bg-[#F2A93B] text-[#17171F] text-sm font-semibold hover:bg-[#D98F1F] shadow-[0_12px_28px_-6px_rgba(242,169,59,0.35)] hover:-translate-y-0.5 transition-all duration-300"
                  >
                    Talk to an Expert
                    <ArrowUpRight size={16} />
                  </Link>
                  <Link
                    to="/case-studies"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-[40px] border border-white/20 bg-white/5 text-white text-sm font-semibold hover:bg-white/10 hover:border-white/40 transition-all duration-300"
                  >
                    Explore Case Studies
                  </Link>
                </div>
              </Reveal>
            </div>

            {/* Right Visual Card */}
            <div className="lg:col-span-5">
              <Reveal delay={0.12}>
                <ServiceVisual
                  type={service.visualType || "seo"}
                  title={service.name}
                />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------- THE CHALLENGE WE ADDRESS ----------------------- */}
      {service.challenge && (
        <section className="py-16 sm:py-20 bg-[#F3EEE1] border-b border-[#17171F]/8">
          <div className="max-w-container mx-auto px-5 sm:px-8">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-4">
                <Reveal>
                  <span className="text-xs font-semibold text-[#E31C79] uppercase tracking-widest">
                    The Problem
                  </span>
                  <h2 className="font-display font-bold text-2xl sm:text-3xl text-[#17171F] mt-2 leading-snug">
                    The Challenge We Address
                  </h2>
                </Reveal>
              </div>
              <div className="lg:col-span-8">
                <Reveal delay={0.08}>
                  <div className="rounded-2xl bg-white border border-[#17171F]/10 p-6 sm:p-8 shadow-sm">
                    <p className="text-[#4A4A5A] text-base sm:text-lg leading-relaxed">
                      {service.challenge}
                    </p>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ------------------------- WHAT'S INCLUDED & CAPABILITIES ------------------------- */}
      {service.includes && service.includes.length > 0 && (
        <section className="py-16 sm:py-24 bg-[#FBF8F3]">
          <div className="max-w-container mx-auto px-5 sm:px-8">
            <Reveal className="max-w-2xl mx-auto text-center mb-12 sm:mb-16">
              <span className="text-xs font-semibold text-[#2F6F5E] uppercase tracking-widest">
                Comprehensive Capabilities
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#17171F] mt-3">
                What&apos;s Included in {service.name}
              </h2>
              <p className="text-[#5C5C6F] mt-4 text-base sm:text-lg">
                Every engagement is engineered for clarity, measurable performance, and long-term brand equity.
              </p>
            </Reveal>

            <RevealGroup className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5" stagger={0.06}>
              {service.includes.map((inc, i) => (
                <RevealItem key={i} className="h-full">
                  <div className="h-full rounded-2xl bg-white border border-[#17171F]/10 p-6 sm:p-7 flex flex-col justify-between hover:border-[#17171F]/30 hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                    <div>
                      <span className="w-10 h-10 rounded-xl bg-[#2F6F5E]/10 text-[#2F6F5E] flex items-center justify-center mb-5">
                        <CheckCircle2 size={20} />
                      </span>
                      <h3 className="font-display font-semibold text-base text-[#17171F] leading-snug">
                        {inc}
                      </h3>
                    </div>
                    <div className="mt-4 pt-4 border-t border-[#17171F]/8 text-xs font-mono text-[#5C5C6F]">
                      Key Capability #{i + 1}
                    </div>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </section>
      )}

      {/* ------------------------- METHODOLOGY & PROCESS ------------------------- */}
      {service.methodology && service.methodology.length > 0 && (
        <section className="py-16 sm:py-24 bg-[#F3EEE1] border-y border-[#17171F]/8">
          <div className="max-w-container mx-auto px-5 sm:px-8">
            <Reveal className="max-w-2xl mx-auto text-center mb-12 sm:mb-16">
              <span className="text-xs font-semibold text-[#F2A93B] uppercase tracking-widest">
                Our Proven Framework
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#17171F] mt-3">
                How We Deliver Results
              </h2>
              <p className="text-[#5C5C6F] mt-4 text-base sm:text-lg">
                A disciplined four-step execution process designed to turn complexity into predictable outcomes.
              </p>
            </Reveal>

            <RevealGroup className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5" stagger={0.08}>
              {service.methodology.map((m) => (
                <RevealItem key={m.step} className="h-full">
                  <div className="h-full rounded-2xl bg-white border border-[#17171F]/10 p-7 flex flex-col hover:border-[#2F6F5E]/40 hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                    <span className="font-mono text-2xl font-bold text-[#F2A93B] mb-4">
                      {m.step}
                    </span>
                    <h3 className="font-display font-semibold text-lg text-[#17171F] leading-snug mb-2.5">
                      {m.title}
                    </h3>
                    <p className="text-sm text-[#5C5C6F] leading-relaxed flex-1">
                      {m.desc}
                    </p>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </section>
      )}

      {/* ------------------------- DELIVERABLES CHECKLIST ------------------------- */}
      {service.deliverables && service.deliverables.length > 0 && (
        <section className="py-16 sm:py-20 bg-[#FBF8F3]">
          <div className="max-w-container mx-auto px-5 sm:px-8">
            <div className="grid lg:grid-cols-12 gap-8 items-center rounded-3xl bg-white border border-[#17171F]/10 p-8 sm:p-12 shadow-sm">
              <div className="lg:col-span-5">
                <Reveal>
                  <span className="text-xs font-semibold text-[#2F6F5E] uppercase tracking-widest">
                    Tangible Outputs
                  </span>
                  <h2 className="font-display font-bold text-2xl sm:text-3xl text-[#17171F] mt-2 leading-snug">
                    Key Deliverables You Receive
                  </h2>
                  <p className="text-[#5C5C6F] text-sm leading-relaxed mt-4">
                    Transparent reporting, verified data assets, and actionable documentation provided at every milestone of our partnership.
                  </p>
                  <div className="mt-6">
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[#2F6F5E] hover:text-[#17171F] transition-colors"
                    >
                      Request a full sample deliverable <ArrowRight size={15} />
                    </Link>
                  </div>
                </Reveal>
              </div>

              <div className="lg:col-span-7">
                <Reveal delay={0.08}>
                  <div className="grid sm:grid-cols-2 gap-3.5">
                    {service.deliverables.map((del, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 p-4 rounded-xl bg-[#FBF8F3] border border-[#17171F]/8"
                      >
                        <ShieldCheck size={18} className="text-[#2F6F5E] shrink-0 mt-0.5" />
                        <span className="text-sm font-medium text-[#17171F] leading-snug">
                          {del}
                        </span>
                      </div>
                    ))}
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ------------------------- RELATED SERVICES ------------------------- */}
      {related.length > 0 && (
        <section className="py-16 sm:py-20 bg-[#F3EEE1] border-t border-[#17171F]/8">
          <div className="max-w-container mx-auto px-5 sm:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
              <div>
                <span className="text-xs font-semibold text-[#2F6F5E] uppercase tracking-widest">
                  Explore Complementary Services
                </span>
                <h2 className="font-display font-bold text-2xl sm:text-3xl text-[#17171F] mt-1">
                  Related Growth Services
                </h2>
              </div>
              <Link
                to="/services"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#17171F] hover:text-[#F2A93B] transition-colors"
              >
                View all 30+ services <ArrowRight size={15} />
              </Link>
            </div>

            <div className="grid sm:grid-cols-3 gap-6">
              {related.map((rel) => {
                const RelIcon = rel.Icon;
                return (
                  <Link
                    key={rel.slug}
                    to={`/services/${rel.slug}`}
                    className="group flex flex-col h-full rounded-2xl bg-white border border-[#17171F]/10 p-6 hover:border-[#17171F]/30 hover:-translate-y-1 hover:shadow-md transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#2F6F5E]/10 text-[#2F6F5E] flex items-center justify-center group-hover:bg-[#F2A93B] group-hover:text-[#17171F] transition-colors mb-4">
                      <RelIcon size={18} />
                    </div>
                    <span className="text-xs font-medium text-[#5C5C6F] mb-1">
                      {rel.category}
                    </span>
                    <h3 className="font-display font-semibold text-lg text-[#17171F] group-hover:text-[#2F6F5E] transition-colors leading-snug mb-2">
                      {rel.name}
                    </h3>
                    <p className="text-sm text-[#5C5C6F] line-clamp-2 mb-4 flex-1">
                      {rel.description}
                    </p>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#17171F] group-hover:text-[#F2A93B] transition-colors mt-auto">
                      Learn More <ArrowUpRight size={13} />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ------------------------- GLOBAL CTA ------------------------- */}
      <CTASection />
    </div>
  );
}
