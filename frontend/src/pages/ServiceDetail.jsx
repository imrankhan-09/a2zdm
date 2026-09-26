import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ChevronRight,
  ChevronDown,
  ShieldCheck,
  Target,
  Zap,
} from "lucide-react";
import CTASection from "../components/CTASection";
import Reveal, { RevealGroup, RevealItem } from "../components/Reveal";
import ServiceVisual from "../components/ServiceVisual";
import { ALL_SERVICES, getServiceBySlug } from "../data/site";

function FaqAccordionItem({ faq, index }) {
  const [isOpen, setIsOpen] = useState(index === 0);

  return (
    <div className="rounded-2xl bg-white border border-[#17171F]/10 overflow-hidden transition-all duration-200 shadow-sm hover:border-[#17171F]/25">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-display font-semibold text-base sm:text-lg text-[#17171F] hover:text-[#2F6F5E] transition-colors"
        aria-expanded={isOpen}
      >
        <span className="leading-snug">{faq.question}</span>
        <span className="w-8 h-8 rounded-full bg-[#F3EEE1] flex items-center justify-center shrink-0 text-[#2F6F5E]">
          <ChevronDown
            size={18}
            className={`transition-transform duration-300 ${
              isOpen ? "rotate-180 text-[#E31C79]" : ""
            }`}
          />
        </span>
      </button>
      {isOpen && (
        <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-[#4A4A5A] text-sm sm:text-base leading-relaxed border-t border-[#17171F]/5 pt-4">
          {faq.answer}
        </div>
      )}
    </div>
  );
}

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  useEffect(() => {
    if (!service) return;

    // 1. Page Title
    const originalTitle = document.title;
    document.title = service.seoTitle || `${service.name} | A2ZDM Services`;

    // 2. Meta Description — ensure exactly one tag, no duplicates
    const metaTags = document.querySelectorAll('meta[name="description"]');
    if (metaTags.length > 1) {
      for (let i = 1; i < metaTags.length; i++) metaTags[i].remove();
    }
    let metaDesc = metaTags[0];
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    const originalDesc = metaDesc.getAttribute("content");
    metaDesc.setAttribute(
      "content",
      service.metaDescription || service.description
    );

    // 3. Canonical URL — ensure exactly one tag, no duplicates
    // Strictly uses https://a2zdm.com (never www)
    const rawCanonical =
      service.canonicalUrl ||
      `https://a2zdm.com/services/${service.slug}/`;
    const canonicalUrl = rawCanonical.replace(
      /^https?:\/\/(www\.)?a2zdm\.com/,
      "https://a2zdm.com"
    );

    const canonicalTags = document.querySelectorAll('link[rel="canonical"]');
    if (canonicalTags.length > 1) {
      for (let i = 1; i < canonicalTags.length; i++) canonicalTags[i].remove();
    }
    let linkCanonical = canonicalTags[0];
    if (!linkCanonical) {
      linkCanonical = document.createElement("link");
      linkCanonical.setAttribute("rel", "canonical");
      document.head.appendChild(linkCanonical);
    }
    const originalCanonical = linkCanonical.getAttribute("href");
    linkCanonical.setAttribute("href", canonicalUrl);

    // 4. FAQ Schema (FAQPage JSON-LD)
    let faqScript = document.getElementById("faq-schema");
    if (service.faqs && service.faqs.length > 0) {
      if (!faqScript) {
        faqScript = document.createElement("script");
        faqScript.id = "faq-schema";
        faqScript.type = "application/ld+json";
        document.head.appendChild(faqScript);
      }
      const faqSchemaObj = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: service.faqs.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.answer,
          },
        })),
      };
      faqScript.textContent = JSON.stringify(faqSchemaObj);
    } else if (faqScript) {
      faqScript.remove();
    }

    // 5. Service & Breadcrumb Schema (JSON-LD)
    // All URLs strictly use https://a2zdm.com (never www)
    let serviceScript = document.getElementById("service-schema");
    if (!serviceScript) {
      serviceScript = document.createElement("script");
      serviceScript.id = "service-schema";
      serviceScript.type = "application/ld+json";
      document.head.appendChild(serviceScript);
    }
    const schemaGraph = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Service",
          "@id": `${canonicalUrl}#service`,
          name: service.name,
          serviceType: service.category || "Digital Marketing",
          provider: {
            "@type": "Organization",
            name: "A2ZDM",
            url: "https://a2zdm.com/",
          },
          description: service.metaDescription || service.description,
          url: canonicalUrl,
        },
        {
          "@type": "BreadcrumbList",
          "@id": `${canonicalUrl}#breadcrumb`,
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://a2zdm.com/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Services",
              item: "https://a2zdm.com/services",
            },
            {
              "@type": "ListItem",
              position: 3,
              name: service.name,
              item: canonicalUrl,
            },
          ],
        },
      ],
    };
    serviceScript.textContent = JSON.stringify(schemaGraph);

    return () => {
      document.title = originalTitle;
      if (originalDesc) {
        metaDesc.setAttribute("content", originalDesc);
      }
      // Restore canonical to what it was before this page mounted
      if (originalCanonical) {
        linkCanonical.setAttribute("href", originalCanonical);
      } else {
        linkCanonical.remove();
      }
      const curFaq = document.getElementById("faq-schema");
      if (curFaq) curFaq.remove();
      const curService = document.getElementById("service-schema");
      if (curService) curService.remove();
    };
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
          <div
            className={`grid gap-10 lg:gap-12 items-center ${
              service.visualType === "none"
                ? "lg:grid-cols-1"
                : "lg:grid-cols-12"
            }`}
          >
            {/* Left Content */}
            <div className={service.visualType === "none" ? "max-w-3xl" : "lg:col-span-7"}>
              <Reveal>
                <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#F2A93B]/15 border border-[#F2A93B]/30 text-[#F2A93B] text-xs font-semibold uppercase tracking-widest mb-6">
                  <Icon size={14} />
                  <span>{service.category || "A2ZDM Digital Service"}</span>
                </div>

                {/* Primary H1 */}
                <h1 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.1] text-white">
                  {service.h1 || service.name}
                </h1>

                {/* Subheadline if provided */}
                {service.subheadline && (
                  <p className="mt-4 text-lg sm:text-xl font-medium text-[#F2A93B] max-w-2xl leading-snug">
                    {service.subheadline}
                  </p>
                )}

                {/* Introduction or description */}
                <p className="mt-4 text-base sm:text-lg text-white/75 max-w-2xl leading-relaxed">
                  {service.introduction || service.description}
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
            {service.visualType !== "none" && (
              <div className="lg:col-span-5">
                <Reveal delay={0.12}>
                  <ServiceVisual
                    type={service.visualType || "seo"}
                    title={service.name}
                    alt={
                      service.altText ||
                      (service.altTextOptions && service.altTextOptions[0]) ||
                      service.name
                    }
                  />
                </Reveal>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ----------------------- OVERVIEW BLOCKS (e.g. CBD SEO) ----------------------- */}
      {service.overview && service.overview.length > 0 && (
        <section className="py-16 sm:py-20 bg-[#FBF8F3] border-b border-[#17171F]/8">
          <div className="max-w-container mx-auto px-5 sm:px-8">
            {service.overview.map((block, bi) => (
              <Reveal key={bi} className="max-w-4xl">
                {block.heading && (
                  <h2 className="font-display font-bold text-2xl sm:text-3xl text-[#17171F] mb-6 mt-4">
                    {block.heading}
                  </h2>
                )}
                {block.paragraphs &&
                  block.paragraphs.map((para, pi) => (
                    <p
                      key={pi}
                      className="text-[#4A4A5A] text-base sm:text-lg leading-relaxed mb-5"
                    >
                      {para}
                    </p>
                  ))}
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* ----------------------- WHY IT MATTERS ----------------------- */}
      {service.whyMatters && (
        <section className="py-16 sm:py-20 bg-[#F3EEE1] border-b border-[#17171F]/8">
          <div className="max-w-container mx-auto px-5 sm:px-8">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-4">
                <Reveal>
                  <span className="text-xs font-semibold text-[#E31C79] uppercase tracking-widest">
                    Strategic Importance
                  </span>
                  <h2 className="font-display font-bold text-2xl sm:text-3xl text-[#17171F] mt-2 leading-snug">
                    {service.whyMatters.heading}
                  </h2>
                </Reveal>
              </div>
              <div className="lg:col-span-8">
                <Reveal delay={0.08}>
                  <div className="rounded-2xl bg-white border border-[#17171F]/10 p-6 sm:p-8 shadow-sm">
                    <p className="text-[#4A4A5A] text-base sm:text-lg leading-relaxed">
                      {service.whyMatters.content}
                    </p>
                    {service.image && (
                      <div className="mt-6 rounded-xl overflow-hidden border border-[#17171F]/10 bg-[#F3EEE1]">
                        <img
                          src={service.image}
                          alt={
                            service.altText ||
                            (service.altTextOptions && service.altTextOptions[0]) ||
                            service.name
                          }
                          loading="lazy"
                          className="w-full h-56 sm:h-72 object-cover"
                          onError={(e) => {
                            e.currentTarget.parentElement.style.display = "none";
                          }}
                        />
                      </div>
                    )}
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ----------------------- THE CHALLENGE WE ADDRESS (Legacy/other services) ----------------------- */}
      {!service.whyMatters && service.challenge && (
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

      {/* ----------------------- HOW WE DO IT ----------------------- */}
      {service.howWeDoIt && service.howWeDoIt.items && (
        <section className="py-16 sm:py-24 bg-[#FBF8F3]">
          <div className="max-w-container mx-auto px-5 sm:px-8">
            <Reveal className="max-w-2xl mx-auto text-center mb-12 sm:mb-16">
              <span className="text-xs font-semibold text-[#2F6F5E] uppercase tracking-widest">
                Execution Process
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#17171F] mt-3">
                {service.howWeDoIt.heading || "How We Do It"}
              </h2>
            </Reveal>

            <RevealGroup
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
              stagger={0.05}
            >
              {service.howWeDoIt.items.map((item, idx) => (
                <RevealItem key={idx} className="h-full">
                  <div className="h-full rounded-2xl bg-white border border-[#17171F]/10 p-6 sm:p-7 flex flex-col justify-between hover:border-[#2F6F5E]/40 hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="w-10 h-10 rounded-xl bg-[#2F6F5E]/10 text-[#2F6F5E] flex items-center justify-center">
                          <CheckCircle2 size={20} />
                        </span>
                        <span className="font-mono text-xs font-semibold text-[#5C5C6F]">
                          0{idx + 1}
                        </span>
                      </div>
                      <h3 className="font-display font-semibold text-base sm:text-lg text-[#17171F] leading-snug">
                        {item}
                      </h3>
                    </div>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </section>
      )}

      {/* ------------------------- WHAT'S INCLUDED & CAPABILITIES (Other services) ------------------------- */}
      {!service.howWeDoIt && service.includes && service.includes.length > 0 && (
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

      {/* ------------------------- WHAT YOU GET & EXPECTED OUTCOMES ------------------------- */}
      {(service.whatYouGet || service.expectedOutcomes) && (
        <section className="py-16 sm:py-24 bg-[#F3EEE1] border-y border-[#17171F]/8">
          <div className="max-w-container mx-auto px-5 sm:px-8">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              {/* What You Get */}
              {service.whatYouGet && (
                <Reveal>
                  <div className="h-full rounded-3xl bg-white border border-[#17171F]/10 p-7 sm:p-9 shadow-sm flex flex-col justify-between">
                    <div>
                      <span className="text-xs font-semibold text-[#2F6F5E] uppercase tracking-widest">
                        Core Advantages
                      </span>
                      <h2 className="font-display font-bold text-2xl sm:text-3xl text-[#17171F] mt-2 mb-6">
                        {service.whatYouGet.heading || "What You Get"}
                      </h2>
                      <div className="space-y-3.5">
                        {service.whatYouGet.items.map((item, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#FBF8F3] border border-[#17171F]/5"
                          >
                            <span className="w-6 h-6 rounded-lg bg-[#2F6F5E]/10 text-[#2F6F5E] flex items-center justify-center shrink-0 mt-0.5">
                              <CheckCircle2 size={15} />
                            </span>
                            <span className="text-sm sm:text-base font-medium text-[#17171F]">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Reveal>
              )}

              {/* Expected Outcomes */}
              {service.expectedOutcomes && (
                <Reveal delay={0.08}>
                  <div className="h-full rounded-3xl bg-[#17171F] text-white border border-white/10 p-7 sm:p-9 shadow-xl flex flex-col justify-between">
                    <div>
                      <span className="text-xs font-semibold text-[#F2A93B] uppercase tracking-widest">
                        Measurable Impact
                      </span>
                      <h2 className="font-display font-bold text-2xl sm:text-3xl text-white mt-2 mb-6">
                        {service.expectedOutcomes.heading || "Expected Outcomes"}
                      </h2>
                      <div className="space-y-3.5">
                        {service.expectedOutcomes.items.map((item, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white/[0.06] border border-white/10"
                          >
                            <span className="w-6 h-6 rounded-lg bg-[#F2A93B]/20 text-[#F2A93B] flex items-center justify-center shrink-0 mt-0.5">
                              <ShieldCheck size={15} />
                            </span>
                            <span className="text-sm sm:text-base font-medium text-white/95">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Reveal>
              )}
            </div>
          </div>
        </section>
      )}

      {/* ------------------------- WHO IT'S FOR & WHY A2ZDM ------------------------- */}
      {(service.whoItsFor || service.whyA2ZDM) && (
        <section className="py-16 sm:py-24 bg-[#FBF8F3]">
          <div className="max-w-container mx-auto px-5 sm:px-8">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-12">
              {/* Who It's For */}
              {service.whoItsFor && (
                <Reveal>
                  <span className="text-xs font-semibold text-[#2F6F5E] uppercase tracking-widest">
                    Target Audience
                  </span>
                  <h2 className="font-display font-bold text-2xl sm:text-3xl text-[#17171F] mt-2 mb-6">
                    {service.whoItsFor.heading || "Who It’s For"}
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {service.whoItsFor.items.map((item, idx) => (
                      <div
                        key={idx}
                        className="rounded-2xl bg-white border border-[#17171F]/10 p-5 hover:border-[#2F6F5E]/40 hover:shadow-sm transition-all duration-300"
                      >
                        <div className="w-8 h-8 rounded-lg bg-[#2F6F5E]/10 text-[#2F6F5E] flex items-center justify-center mb-3">
                          <Target size={16} />
                        </div>
                        <h3 className="font-display font-semibold text-base text-[#17171F]">
                          {item}
                        </h3>
                      </div>
                    ))}
                  </div>
                </Reveal>
              )}

              {/* Why A2ZDM */}
              {service.whyA2ZDM && (
                <Reveal delay={0.08}>
                  <span className="text-xs font-semibold text-[#F2A93B] uppercase tracking-widest">
                    Why Choose Us
                  </span>
                  <h2 className="font-display font-bold text-2xl sm:text-3xl text-[#17171F] mt-2 mb-6">
                    {service.whyA2ZDM.heading || "Why A2ZDM?"}
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {service.whyA2ZDM.items.map((item, idx) => (
                      <div
                        key={idx}
                        className="rounded-2xl bg-white border border-[#17171F]/10 p-5 hover:border-[#F2A93B]/40 hover:shadow-sm transition-all duration-300"
                      >
                        <div className="w-8 h-8 rounded-lg bg-[#F2A93B]/15 text-[#F2A93B] flex items-center justify-center mb-3">
                          <Zap size={16} />
                        </div>
                        <h3 className="font-display font-semibold text-base text-[#17171F]">
                          {item}
                        </h3>
                      </div>
                    ))}
                  </div>
                </Reveal>
              )}
            </div>
          </div>
        </section>
      )}

      {/* ------------------------- METHODOLOGY & PROCESS (Legacy/other services) ------------------------- */}
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

      {/* ------------------------- RICH CONTENT SECTIONS (e.g. Link Earnings, PR) ------------------------- */}
      {service.sections && service.sections.length > 0 && (
        <section className="py-16 sm:py-20 bg-[#FBF8F3]">
          <div className="max-w-container mx-auto px-5 sm:px-8 space-y-16">
            {service.sections.map((sec, si) => (
              <Reveal key={si} className="max-w-4xl">
                {sec.heading && (
                  <h2 className="font-display font-bold text-2xl sm:text-3xl text-[#17171F] mb-6 pb-3 border-b border-[#17171F]/10">
                    {sec.heading}
                  </h2>
                )}
                {sec.paragraphs &&
                  sec.paragraphs.map((para, pi) => (
                    <p
                      key={pi}
                      className="text-[#4A4A5A] text-base sm:text-lg leading-relaxed mb-5"
                    >
                      {para}
                    </p>
                  ))}
                {sec.bullets && sec.bullets.length > 0 && (
                  <ul className="my-5 space-y-3 pl-2">
                    {sec.bullets.map((bullet, bi) => (
                      <li
                        key={bi}
                        className="flex items-start gap-3 text-[#4A4A5A] text-base leading-relaxed"
                      >
                        <span className="mt-2 shrink-0 w-2 h-2 rounded-full bg-[#2F6F5E]" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}
                {sec.closing && (
                  <p className="text-[#4A4A5A] text-base sm:text-lg leading-relaxed mt-5">
                    {sec.closing}
                  </p>
                )}
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* ------------------------- DELIVERABLES CHECKLIST (Legacy/other services) ------------------------- */}
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

      {/* ------------------------- FAQS ACCORDION SECTION ------------------------- */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="py-16 sm:py-24 bg-[#F3EEE1] border-t border-[#17171F]/8">
          <div className="max-w-4xl mx-auto px-5 sm:px-8">
            <Reveal className="text-center mb-12 sm:mb-16">
              <span className="text-xs font-semibold text-[#2F6F5E] uppercase tracking-widest">
                Common Inquiries
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#17171F] mt-3">
                {service.faqHeading || `FAQs on ${service.name}`}
              </h2>
            </Reveal>

            <div className="space-y-4">
              {service.faqs.map((faq, idx) => (
                <FaqAccordionItem key={idx} faq={faq} index={idx} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ------------------------- CUSTOM SERVICE CTA BANNER ------------------------- */}
      {service.ctaText && (
        <section className="py-14 sm:py-18 bg-[#17171F] text-white border-y border-white/10 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-1/4 w-80 h-80 rounded-full bg-[#F2A93B]/10 blur-[100px]" />
          </div>
          <div className="relative max-w-container mx-auto px-5 sm:px-8 text-center">
            <Reveal className="max-w-3xl mx-auto">
              <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-white leading-snug mb-8">
                {service.ctaText}
              </h2>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#F2A93B] text-[#17171F] text-base font-semibold hover:bg-[#D98F1F] shadow-[0_12px_28px_-6px_rgba(242,169,59,0.35)] hover:-translate-y-0.5 transition-all duration-300"
              >
                Connect With Our Specialists
                <ArrowRight size={18} />
              </Link>
            </Reveal>
          </div>
        </section>
      )}

      {/* ------------------------- RELATED SERVICES ------------------------- */}
      {related.length > 0 && (
        <section className="py-16 sm:py-20 bg-[#FBF8F3] border-t border-[#17171F]/8">
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
