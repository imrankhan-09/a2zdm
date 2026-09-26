import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, CheckCircle2, Quote } from "lucide-react";
import CTASection from "../components/CTASection";
import Reveal from "../components/Reveal";
import NotFound from "./NotFound";

// ---------------------------------------------------------------------------
// Case Study data — add new entries here as internal pages are created.
// ---------------------------------------------------------------------------
const CASE_STUDY_DETAIL = {
  "giggle-tree": {
    client: "Giggle Tree",
    website: "https://www.giggletree.com.au/",
    slug: "giggle-tree",
    image: "https://a2zdm.com/casestudy_giggletree.jpg",
    logo: "https://a2zdm.com/gigglelogo.png",
    category: "AEO / SEO",
    headline:
      "From Invisible to AI-Cited: How Giggle Tree Became Google\u2019s Recommended Childcare Expert",
    summary:
      "Giggle Tree, Australia\u2019s leading childcare business consulting platform, was struggling with digital visibility despite having deep expertise and valuable content. They weren\u2019t showing up in Google Search, let alone in AI-generated responses. A2ZDM stepped in with a focused Answer Engine Optimisation (AEO) and SEO strategy \u2014 and within months, Giggle Tree was being cited directly in Google\u2019s AI Overview as the authoritative source for childcare business consulting in Australia.",
    results: [
      { label: "Featured in Google AI Overview", value: "Yes" },
      { label: "Keyword Rankings Improved", value: "Significant" },
      { label: "Organic Traffic Growth", value: "Consistent Increase" },
      { label: "Authority Recognition", value: "AI-Cited Expert" },
    ],
    aiOverview: {
      heading: "The AI Overview Milestone",
      body: "One of the most significant achievements of this campaign was Giggle Tree appearing in Google\u2019s AI Overview \u2014 the AI-generated summary that appears at the very top of search results. This means Google\u2019s AI now recommends Giggle Tree as a trusted, authoritative source when users search for childcare business consulting in Australia. This is not just an SEO win \u2014 it is a brand authority milestone that positions Giggle Tree ahead of competitors in the new era of AI-powered search.",
    },
    challenge: {
      heading: "The Challenge",
      body: "Giggle Tree had valuable expertise and content, but it was buried and not structured in a way that search engines \u2014 especially AI-powered ones \u2014 could understand and cite. Their digital presence was fragmented, their content lacked the structural signals needed for AI citation, and they were being outranked by less credible sources.",
    },
    solution: {
      heading: "Our Solution",
      body: "A2ZDM implemented a comprehensive AEO (Answer Engine Optimisation) and SEO strategy tailored specifically for Giggle Tree\u2019s niche \u2014 childcare business consulting in Australia.",
    },
    strategies: [
      {
        title: "AEO-Focused Content Restructuring",
        description:
          "We restructured Giggle Tree\u2019s existing content using question-and-answer formats, clear definitions, and entity-rich language that AI systems can extract and cite as direct answers.",
      },
      {
        title: "Schema Markup Implementation",
        description:
          "We implemented advanced structured data (JSON-LD schema) across the site, signalling to Google and AI systems exactly who Giggle Tree is, what they do, and why they are authoritative.",
      },
      {
        title: "Topical Authority Building",
        description:
          "We developed a content cluster strategy around Giggle Tree\u2019s core topics \u2014 childcare licensing, business setup, compliance, and consulting \u2014 to establish deep topical authority in their niche.",
      },
      {
        title: "E-E-A-T Optimisation",
        description:
          "We improved Experience, Expertise, Authoritativeness, and Trustworthiness signals across the site, including author bios, credentials, and trust signals that both Google and AI systems look for when selecting sources to cite.",
      },
      {
        title: "Technical SEO Foundation",
        description:
          "We resolved technical issues affecting crawlability and indexation, ensuring every valuable page on the Giggle Tree website was accessible to search engines and AI crawlers.",
      },
    ],
    testimonial: {
      quote:
        "A2ZDM completely transformed our digital presence. We went from being invisible online to being the source that Google\u2019s AI recommends. It\u2019s been a game-changer for our business.",
      author: "Giggle Tree Team",
    },
  },

  // ------------------------------------------------------------------
  "the-uniform-edit": {
    client: "The Uniform Edit",
    website: "https://www.theuniformedit.com.au/",
    slug: "the-uniform-edit",
    image: "https://a2zdm.com/tue.jpg",
    logo: "https://a2zdm.com/tue.jpg",
    category: "SEO",
    headline:
      "How We Helped The Uniform Edit Dominate Google and Double Their Organic Leads in 6 Months",
    summary:
      "Discover how The Uniform Edit boosted visibility, ranked nationally for \u2018corporate uniform suppliers\u2019, and doubled leads with SEO in just 6 months.",
    results: [
      { label: "Organic Traffic Growth", value: "240%" },
      { label: "Quote Form Submissions", value: "2.4x" },
      { label: "Top 3 Rankings", value: "12+" },
      { label: "Image Search Rankings", value: "#1" },
      { label: "Implementation Time", value: "6 Months" },
      { label: "National Ranking", value: "Position 4" },
    ],
    aiOverview: null,
    challenge: {
      heading: "The Challenge",
      body: "Despite having premium-quality uniforms and a stylish product line, The Uniform Edit wasn\u2019t showing up where customers were searching. Competitors and directories ranked higher, and their beautiful website wasn\u2019t SEO-friendly.",
    },
    solution: {
      heading: "Our Solution",
      body: "We implemented a comprehensive SEO strategy including technical fixes, keyword-rich content creation, local SEO optimization, industry-focused content, and strategic link building to transform their online presence.",
    },
    strategies: [
      {
        title: "Technical SEO Foundation",
        description: "Fixed broken links, improved site speed, and added structured data.",
      },
      {
        title: "Content Optimization",
        description: "Built keyword-rich pillar pages and optimized service content.",
      },
      {
        title: "Local SEO Expansion",
        description: "Created location pages for key cities with local optimization.",
      },
      {
        title: "Industry-Focused Content",
        description: "Developed tailored content for hospitality, healthcare, and retail sectors.",
      },
      {
        title: "Link Building",
        description: "Earned backlinks from directories and industry forums.",
      },
      {
        title: "Performance Tracking",
        description: "Continuous monitoring and refinement using search data.",
      },
    ],
    testimonial: {
      quote:
        "Our handmade shirting was always second to none\u2014but we needed to be discoverable online. This SEO partnership catapulted us into search success, delivering quality leads month after month, organically.",
      author: "Fiona Anchal",
      initials: "FA",
      role: "Co-founder, The Uniform Edit",
    },
  },
};


// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------
export default function CaseStudyDetail() {
  const { slug } = useParams();
  const study = CASE_STUDY_DETAIL[slug];

  useEffect(() => {
    window.scrollTo(0, 0);
    if (study) {
      document.title = `${study.client} Case Study | A2ZDM`;
    }
  }, [study, slug]);

  if (!study) {
    return <NotFound />;
  }

  return (
    <>
      <article className="pt-12 pb-20 sm:pt-16 sm:pb-24 bg-[#FBF8F3]">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">

          {/* Breadcrumbs */}
          <Reveal>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-[#5C5C6F] mb-6">
              <Link to="/" className="hover:text-[#17171F] transition-colors">Home</Link>
              <span>/</span>
              <Link to="/case-studies" className="hover:text-[#17171F] transition-colors">Case Studies</Link>
              <span>/</span>
              <span className="text-[#17171F] font-medium truncate max-w-[200px] sm:max-w-none">
                {study.client}
              </span>
            </div>

            <Link
              to="/case-studies"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#2F6F5E] hover:text-[#17171F] transition-colors mb-6"
            >
              <ArrowLeft size={14} /> Back to all case studies
            </Link>

            {/* Category badges */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="text-xs font-semibold text-[#E31C79] bg-[#E31C79]/10 px-3 py-1 rounded-full border border-[#E31C79]/15">
                Case Study
              </span>
              <span className="text-xs font-semibold text-[#2F6F5E] bg-[#2F6F5E]/10 px-3 py-1 rounded-full border border-[#2F6F5E]/15">
                {study.category}
              </span>
            </div>

            <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-[#17171F] tracking-tight leading-[1.15] mb-6">
              {study.headline}
            </h1>

            {/* Client info row */}
            <div className="flex items-center gap-4 pb-8 mb-8 border-b border-[rgba(20,20,28,0.10)]">
              {study.logo && (
                <img
                  src={study.logo}
                  alt={`${study.client} logo`}
                  className="h-10 w-auto object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              )}
              <div>
                <div className="text-sm font-bold text-[#17171F]">{study.client}</div>
                <a
                  href={study.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#5C5C6F] hover:text-[#2F6F5E] transition-colors inline-flex items-center gap-1"
                >
                  Visit Website <ArrowUpRight size={11} />
                </a>
              </div>
            </div>
          </Reveal>

          {/* Featured Image */}
          <Reveal>
            <div className="relative rounded-[24px] overflow-hidden bg-[#F3EEE1] border border-[rgba(20,20,28,0.10)] shadow-sm mb-10">
              <img
                src={study.image}
                alt={study.client}
                className="w-full h-auto max-h-[480px] object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>
          </Reveal>

          {/* Results at a glance */}
          <Reveal className="mb-10">
            <div className="rounded-[20px] bg-[#F3EEE1] border border-[rgba(20,20,28,0.10)] p-6 sm:p-8">
              <h2 className="font-display font-bold text-lg text-[#17171F] mb-5 flex items-center gap-2">
                <CheckCircle2 size={20} className="text-[#2F6F5E]" />
                Results at a Glance
              </h2>
              <div className={`grid gap-4 ${study.results.length > 4 ? "grid-cols-2 sm:grid-cols-3" : "sm:grid-cols-2"}`}>
                {study.results.map((r, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-[14px] border border-[rgba(20,20,28,0.08)] px-5 py-4"
                  >
                    <div className="text-xs text-[#5C5C6F] font-medium mb-1">{r.label}</div>
                    <div className="text-base font-bold text-[#17171F]">{r.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Body */}
          <div className="space-y-8 text-[#17171F]">

            {/* Summary */}
            <Reveal>
              <p className="text-base sm:text-lg text-[#3F3F4E] leading-relaxed">
                {study.summary}
              </p>
            </Reveal>

            {/* AI Overview milestone — only shown when present */}
            {study.aiOverview && (
              <Reveal>
                <div className="rounded-[20px] bg-[#17171F] text-white p-6 sm:p-8">
                  <h2 className="font-display font-bold text-2xl sm:text-3xl mb-4 leading-snug">
                    {study.aiOverview.heading}
                  </h2>
                  <p className="text-white/75 text-base sm:text-lg leading-relaxed">
                    {study.aiOverview.body}
                  </p>
                </div>
              </Reveal>
            )}

            {/* The Challenge */}
            <Reveal>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-[#17171F] pt-4 pb-2 border-b border-[rgba(20,20,28,0.08)] tracking-tight leading-snug">
                {study.challenge.heading}
              </h2>
              <p className="text-base sm:text-lg text-[#3F3F4E] leading-relaxed mt-4">
                {study.challenge.body}
              </p>
            </Reveal>

            {/* Our Solution */}
            <Reveal>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-[#17171F] pt-4 pb-2 border-b border-[rgba(20,20,28,0.08)] tracking-tight leading-snug">
                {study.solution.heading}
              </h2>
              <p className="text-base sm:text-lg text-[#3F3F4E] leading-relaxed mt-4">
                {study.solution.body}
              </p>
            </Reveal>

            {/* Strategy cards */}
            <Reveal>
              <div className="space-y-4">
                {study.strategies.map((s, i) => (
                  <div
                    key={i}
                    className="flex gap-5 p-5 rounded-[16px] bg-white border border-[rgba(20,20,28,0.09)] shadow-sm"
                  >
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#2F6F5E]/10 text-[#2F6F5E] font-bold text-sm flex items-center justify-center">
                      {i + 1}
                    </span>
                    <div>
                      <div className="font-display font-bold text-[#17171F] text-base mb-1">
                        {s.title}
                      </div>
                      <p className="text-sm text-[#3F3F4E] leading-relaxed">
                        {s.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Testimonial */}
            <Reveal>
              <div className="rounded-[20px] bg-[#F3EEE1] border border-[rgba(20,20,28,0.10)] p-7 sm:p-9">
                <Quote size={28} className="text-[#2F6F5E] mb-4 opacity-60" />
                <blockquote className="text-lg sm:text-xl font-medium text-[#17171F] leading-relaxed italic mb-5">
                  &ldquo;{study.testimonial.quote}&rdquo;
                </blockquote>
                {study.testimonial.name || study.testimonial.initials ? (
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#17171F] text-white flex items-center justify-center font-bold text-xs shrink-0">
                      {study.testimonial.initials || study.testimonial.author.split(" ").map((w) => w[0]).join("").slice(0, 2)}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-[#17171F]">{study.testimonial.author}</div>
                      {study.testimonial.role && (
                        <div className="text-xs text-[#5C5C6F]">{study.testimonial.role}</div>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="text-sm font-semibold text-[#5C5C6F]">
                    &mdash; {study.testimonial.author}
                  </div>
                )}
              </div>
            </Reveal>

            {/* Visit website strip */}
            <Reveal>
              <div className="p-6 rounded-[20px] bg-white border border-[rgba(20,20,28,0.10)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-semibold text-[#5C5C6F] uppercase tracking-wider mb-1">
                    Client Website
                  </div>
                  <div className="text-sm font-semibold text-[#17171F]">{study.client}</div>
                </div>
                <a
                  href={study.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2.5 rounded-full bg-[#F3EEE1] hover:bg-[#17171F] hover:text-white text-[#17171F] transition-colors"
                >
                  Visit {study.client} <ArrowUpRight size={13} />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </article>

      <CTASection />
    </>
  );
}
