import {
  Sparkles,
  Search,
  BarChart3,
  TrendingUp,
  Database,
  MousePointerClick,
  CheckCircle2,
  Layers,
  Cpu,
  ShieldCheck,
  Zap,
  Leaf,
  Link2,
  Megaphone,
  ArrowRight,
} from "lucide-react";

/**
 * Generates tailored, premium MarTech visual graphics for each service category:
 * - AEO: AI citation graph & conversational engine response card
 * - CBD: CBD SEO Growth Strategy dashboard (Keyword research, Link earnings, Digital PR, Competitor research)
 * - SEO: Organic ranking growth curve, SERP 1st page tracker & keyword metrics
 * - Analytics: GA4 event streaming pipeline & conversion funnel
 * - Predictive: Time-series forecasting curve with confidence interval & predictive scores
 * - BI: Unified data warehouse schema & multi-source dashboard
 * - PPC: ROAS attribution monitor & spend optimization dial
 */
export default function ServiceVisual({ type = "seo", title = "Service" }) {
  if (type === "aeo") {
    return (
      <div className="relative w-full min-h-[370px] sm:min-h-0 sm:aspect-[4/3] rounded-3xl bg-gradient-to-br from-[#1E1E2A] to-[#121218] border border-white/10 p-4 sm:p-8 flex flex-col justify-between overflow-hidden shadow-2xl text-white">
        {/* Ambient Glow */}
        <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-[#F2A93B]/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-[#2F6F5E]/30 blur-3xl pointer-events-none" />

        {/* Top Header */}
        <div className="relative z-10 flex items-center justify-between gap-2 flex-wrap sm:flex-nowrap border-b border-white/10 pb-3 sm:pb-4">
          <div className="flex items-center gap-2.5 min-w-0">
            <span className="w-8 h-8 rounded-lg bg-[#F2A93B]/20 text-[#F2A93B] flex items-center justify-center shrink-0">
              <Sparkles size={16} />
            </span>
            <div className="min-w-0">
              <div className="text-xs font-semibold text-white tracking-wide break-words">
                AI Answer Engine Overview
              </div>
              <div className="text-[11px] text-white/50">Multi-Model Verification</div>
            </div>
          </div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2F6F5E]/30 text-[#4EAA93] text-xs font-semibold border border-[#2F6F5E]/50 shrink-0">
            <CheckCircle2 size={12} /> Verified Source
          </span>
        </div>

        {/* Simulated LLM Citation Card */}
        <div className="relative z-10 my-auto rounded-2xl bg-white/[0.06] border border-white/10 p-4 sm:p-5 backdrop-blur-md">
          <div className="flex items-center gap-2 text-xs font-mono text-[#F2A93B] mb-2 break-words">
            <Cpu size={14} className="shrink-0" /> CITED IN GOOGLE AI OVERVIEW &amp; PERPLEXITY
          </div>
          <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-sans break-words">
            &ldquo;According to authoritative industry findings from{" "}
            <span className="text-[#F2A93B] font-semibold underline decoration-[#F2A93B]/50">
              A2ZDM
            </span>
            , structured entity mapping and schema signals increase direct AI conversational citations by over 40%.&rdquo;
          </p>

          <div className="grid grid-cols-3 gap-2 sm:gap-3 mt-4 pt-3 border-t border-white/10 text-center">
            <div className="bg-white/[0.04] rounded-xl p-2 min-w-0">
              <div className="text-sm sm:text-base font-bold text-white font-mono">100%</div>
              <div className="text-[10px] text-white/50 break-words leading-tight mt-0.5">Entity Accuracy</div>
            </div>
            <div className="bg-white/[0.04] rounded-xl p-2 min-w-0">
              <div className="text-sm sm:text-base font-bold text-[#F2A93B] font-mono">3.8×</div>
              <div className="text-[10px] text-white/50 break-words leading-tight mt-0.5">Citation Lift</div>
            </div>
            <div className="bg-white/[0.04] rounded-xl p-2 min-w-0">
              <div className="text-sm sm:text-base font-bold text-[#4EAA93] font-mono">Top 1</div>
              <div className="text-[10px] text-white/50 break-words leading-tight mt-0.5">Recommended</div>
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div className="relative z-10 flex items-center justify-between gap-2 text-xs text-white/50 pt-2.5 font-mono flex-wrap border-t border-white/10">
          <span>Schema: Organization &amp; Entity</span>
          <span className="text-white/70">JSON-LD Live</span>
        </div>
      </div>
    );
  }

  if (type === "cbd") {
    return (
      <div className="relative w-full min-h-[370px] sm:min-h-0 sm:aspect-[4/3] rounded-3xl bg-gradient-to-br from-[#1E1E2A] to-[#121218] border border-white/10 p-4 sm:p-7 flex flex-col justify-between overflow-hidden shadow-2xl text-white">
        {/* Ambient Glow */}
        <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-[#2F6F5E]/25 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-[#F2A93B]/15 blur-3xl pointer-events-none" />

        {/* Top Header */}
        <div className="relative z-10 flex items-center justify-between gap-2 flex-wrap sm:flex-nowrap border-b border-white/10 pb-3 sm:pb-3.5">
          <div className="flex items-center gap-2.5 min-w-0">
            <span className="w-8 h-8 rounded-lg bg-[#2F6F5E]/30 text-[#4EAA93] flex items-center justify-center border border-[#2F6F5E]/50 shrink-0">
              <Leaf size={16} />
            </span>
            <div className="min-w-0">
              <div className="text-xs font-semibold text-white tracking-wide break-words">
                CBD SEO Strategy
              </div>
              <div className="text-[11px] text-white/50">Cannabis SEO Framework</div>
            </div>
          </div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2F6F5E]/30 text-[#4EAA93] text-xs font-semibold border border-[#2F6F5E]/50 shrink-0">
            <TrendingUp size={12} /> Organic Growth
          </span>
        </div>

        {/* Service Core Areas Grid */}
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-2.5 my-auto">
          {/* Keyword Research */}
          <div className="rounded-xl bg-white/[0.04] border border-white/10 p-2.5 sm:p-3 flex items-start gap-2.5">
            <span className="w-7 h-7 rounded-lg bg-[#F2A93B]/15 text-[#F2A93B] flex items-center justify-center shrink-0 mt-0.5 border border-[#F2A93B]/20">
              <Search size={14} />
            </span>
            <div className="min-w-0 flex-1">
              <div className="text-xs font-semibold text-white break-words">Keyword Research</div>
              <div className="text-[11px] text-white/50 leading-snug mt-0.5 break-words">
                Legally compliant keyword strategy
              </div>
            </div>
          </div>

          {/* Link Earnings */}
          <div className="rounded-xl bg-white/[0.04] border border-white/10 p-2.5 sm:p-3 flex items-start gap-2.5">
            <span className="w-7 h-7 rounded-lg bg-[#4EAA93]/15 text-[#4EAA93] flex items-center justify-center shrink-0 mt-0.5 border border-[#4EAA93]/20">
              <Link2 size={14} />
            </span>
            <div className="min-w-0 flex-1">
              <div className="text-xs font-semibold text-white break-words">Link Earnings</div>
              <div className="text-[11px] text-white/50 leading-snug mt-0.5 break-words">
                Quality backlinks &amp; industry authority
              </div>
            </div>
          </div>

          {/* Digital PR */}
          <div className="rounded-xl bg-white/[0.04] border border-white/10 p-2.5 sm:p-3 flex items-start gap-2.5">
            <span className="w-7 h-7 rounded-lg bg-[#F2A93B]/15 text-[#F2A93B] flex items-center justify-center shrink-0 mt-0.5 border border-[#F2A93B]/20">
              <Megaphone size={14} />
            </span>
            <div className="min-w-0 flex-1">
              <div className="text-xs font-semibold text-white break-words">Digital PR</div>
              <div className="text-[11px] text-white/50 leading-snug mt-0.5 break-words">
                Media coverage &amp; influencer outreach
              </div>
            </div>
          </div>

          {/* Competitor Research */}
          <div className="rounded-xl bg-white/[0.04] border border-white/10 p-2.5 sm:p-3 flex items-start gap-2.5">
            <span className="w-7 h-7 rounded-lg bg-[#4EAA93]/15 text-[#4EAA93] flex items-center justify-center shrink-0 mt-0.5 border border-[#4EAA93]/20">
              <BarChart3 size={14} />
            </span>
            <div className="min-w-0 flex-1">
              <div className="text-xs font-semibold text-white break-words">Competitor Research</div>
              <div className="text-[11px] text-white/50 leading-snug mt-0.5 break-words">
                Market &amp; competitor analysis
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Flow: Brand Authority -> Organic Traffic -> Qualified Leads */}
        <div className="relative z-10 pt-2.5 sm:pt-3 border-t border-white/10">
          <div className="flex items-center justify-center flex-wrap gap-1 text-[11px] font-medium text-white/70">
            <span className="flex items-center gap-1.5 px-2 py-1.5 rounded-lg bg-white/[0.04] border border-white/5 text-white/90 text-[10px] sm:text-[11px]">
              <ShieldCheck size={12} className="text-[#4EAA93] shrink-0" />
              Brand Authority
            </span>
            <ArrowRight size={11} className="text-white/30 shrink-0" />
            <span className="flex items-center gap-1.5 px-2 py-1.5 rounded-lg bg-white/[0.04] border border-white/5 text-white/90 text-[10px] sm:text-[11px]">
              <TrendingUp size={12} className="text-[#F2A93B] shrink-0" />
              Organic Traffic
            </span>
            <ArrowRight size={11} className="text-white/30 shrink-0" />
            <span className="flex items-center gap-1.5 px-2 py-1.5 rounded-lg bg-white/[0.04] border border-white/5 text-white/90 text-[10px] sm:text-[11px]">
              <CheckCircle2 size={12} className="text-[#4EAA93] shrink-0" />
              Qualified Leads
            </span>
          </div>
        </div>
      </div>
    );
  }

  if (type === "analytics") {
    return (
      <div className="relative w-full min-h-[380px] sm:min-h-0 sm:aspect-[4/3] rounded-3xl bg-gradient-to-br from-[#1A1C24] to-[#111218] border border-white/10 p-4 sm:p-8 flex flex-col justify-between overflow-hidden shadow-2xl text-white">
        <div className="absolute top-0 right-0 w-60 h-60 rounded-full bg-[#2F6F5E]/25 blur-3xl pointer-events-none" />

        {/* Header */}
        <div className="relative z-10 flex items-center justify-between gap-2 flex-wrap sm:flex-nowrap border-b border-white/10 pb-3 sm:pb-4">
          <div className="flex items-center gap-2.5 min-w-0">
            <span className="w-8 h-8 rounded-lg bg-[#2F6F5E]/20 text-[#4EAA93] flex items-center justify-center shrink-0">
              <BarChart3 size={16} />
            </span>
            <div className="min-w-0">
              <div className="text-xs font-semibold text-white break-words">Event Stream &amp; Pipeline</div>
              <div className="text-[11px] text-white/50">Google Analytics 4 &amp; GTM</div>
            </div>
          </div>
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/10 text-xs font-mono text-[#4EAA93] shrink-0">
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" /> Live 24/7
          </span>
        </div>

        {/* Funnel Pipeline Graphic */}
        <div className="relative z-10 my-auto space-y-2.5">
          <div className="rounded-xl bg-white/[0.05] border border-white/10 p-3 flex items-center justify-between gap-2.5">
            <span className="text-xs text-white/70 flex items-center gap-2 min-w-0 flex-1">
              <span className="w-2 h-2 rounded-full bg-[#F2A93B] shrink-0" />
              <span className="break-words leading-tight">Page Views &amp; Sessions</span>
            </span>
            <span className="font-mono text-xs font-bold text-white shrink-0 text-right">128,450 / mo</span>
          </div>
          <div className="rounded-xl bg-white/[0.05] border border-white/10 p-3 flex items-center justify-between gap-2.5 sm:ml-4">
            <span className="text-xs text-white/70 flex items-center gap-2 min-w-0 flex-1">
              <span className="w-2 h-2 rounded-full bg-[#4EAA93] shrink-0" />
              <span className="break-words leading-tight">Qualified Engaged Sessions</span>
            </span>
            <span className="font-mono text-xs font-bold text-[#4EAA93] shrink-0 text-right">68.4% (+14.2%)</span>
          </div>
          <div className="rounded-xl bg-[#2F6F5E]/20 border border-[#2F6F5E]/40 p-3.5 flex items-center justify-between gap-2.5 sm:ml-8">
            <span className="text-xs font-semibold text-white flex items-center gap-2 min-w-0 flex-1">
              <Zap size={14} className="text-[#F2A93B] shrink-0" />
              <span className="break-words leading-tight">Clean Conversion Attribution</span>
            </span>
            <span className="font-mono text-sm font-bold text-[#F2A93B] shrink-0 text-right">2.4&times; Increase</span>
          </div>
        </div>

        {/* Footer */}
        <div className="relative z-10 flex items-center justify-between gap-2 text-xs text-white/50 pt-2.5 font-mono flex-wrap border-t border-white/10">
          <span>Attribution: Data-Driven</span>
          <span className="text-[#4EAA93]">Server-Side Verified</span>
        </div>
      </div>
    );
  }

  if (type === "predictive") {
    return (
      <div className="relative w-full min-h-[370px] sm:min-h-0 sm:aspect-[4/3] rounded-3xl bg-gradient-to-br from-[#1C1A28] to-[#12111A] border border-white/10 p-4 sm:p-8 flex flex-col justify-between overflow-hidden shadow-2xl text-white">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-[#F2A93B]/15 blur-3xl pointer-events-none" />

        <div className="relative z-10 flex items-center justify-between gap-2 flex-wrap sm:flex-nowrap border-b border-white/10 pb-3 sm:pb-4">
          <div className="flex items-center gap-2.5 min-w-0">
            <span className="w-8 h-8 rounded-lg bg-[#F2A93B]/20 text-[#F2A93B] flex items-center justify-center shrink-0">
              <TrendingUp size={16} />
            </span>
            <div className="min-w-0">
              <div className="text-xs font-semibold text-white break-words">AI Forecasting Engine</div>
              <div className="text-[11px] text-white/50">Time-Series &amp; Churn Propensity</div>
            </div>
          </div>
          <span className="text-xs font-mono text-[#F2A93B] bg-[#F2A93B]/15 px-3 py-1 rounded-full shrink-0">
            90%+ Accuracy
          </span>
        </div>

        {/* Graph representation */}
        <div className="relative z-10 my-auto py-2">
          <svg className="w-full h-28 sm:h-32 overflow-visible" viewBox="0 0 300 120">
            {/* Grid lines */}
            <line x1="0" y1="30" x2="300" y2="30" stroke="rgba(255,255,255,0.08)" strokeDasharray="3 3" />
            <line x1="0" y1="65" x2="300" y2="65" stroke="rgba(255,255,255,0.08)" strokeDasharray="3 3" />
            <line x1="0" y1="100" x2="300" y2="100" stroke="rgba(255,255,255,0.08)" strokeDasharray="3 3" />

            {/* Historical curve */}
            <path
              d="M 10 95 Q 50 85 90 70 T 170 55"
              fill="none"
              stroke="#5C5C6F"
              strokeWidth="2.5"
            />
            {/* Forecast curve */}
            <path
              d="M 170 55 Q 220 35 285 18"
              fill="none"
              stroke="#F2A93B"
              strokeWidth="3"
              strokeDasharray="4 4"
            />
            {/* Confidence Area */}
            <path
              d="M 170 55 L 285 5 L 285 35 Z"
              fill="rgba(242,169,59,0.12)"
            />
            <circle cx="170" cy="55" r="4" fill="#F2A93B" />
            <circle cx="285" cy="18" r="5" fill="#4EAA93" />
          </svg>
          <div className="flex justify-between text-[11px] text-white/40 font-mono mt-2 flex-wrap gap-1">
            <span>Past Quarters</span>
            <span className="text-[#F2A93B]">Next 90 Days (Forecast)</span>
          </div>
        </div>

        <div className="relative z-10 grid grid-cols-2 gap-3 pt-2.5 border-t border-white/10 text-xs">
          <div>
            <span className="text-white/50 block text-[11px]">Expected Revenue Lift</span>
            <span className="font-bold text-white font-mono">+32.4% Projected</span>
          </div>
          <div className="text-right">
            <span className="text-white/50 block text-[11px]">Churn Early Warning</span>
            <span className="font-bold text-[#4EAA93] font-mono">-42% Risk Mitigated</span>
          </div>
        </div>
      </div>
    );
  }

  if (type === "bi") {
    return (
      <div className="relative w-full min-h-[370px] sm:min-h-0 sm:aspect-[4/3] rounded-3xl bg-gradient-to-br from-[#191C25] to-[#0F1116] border border-white/10 p-4 sm:p-8 flex flex-col justify-between overflow-hidden shadow-2xl text-white">
        <div className="absolute bottom-0 right-0 w-56 h-56 rounded-full bg-[#2F6F5E]/25 blur-3xl pointer-events-none" />

        <div className="relative z-10 flex items-center justify-between gap-2 flex-wrap sm:flex-nowrap border-b border-white/10 pb-3 sm:pb-4">
          <div className="flex items-center gap-2.5 min-w-0">
            <span className="w-8 h-8 rounded-lg bg-[#2F6F5E]/20 text-[#4EAA93] flex items-center justify-center shrink-0">
              <Database size={16} />
            </span>
            <div className="min-w-0">
              <div className="text-xs font-semibold text-white break-words">Unified Data Warehouse</div>
              <div className="text-[11px] text-white/50">BigQuery • Looker • Power BI</div>
            </div>
          </div>
          <span className="text-xs font-mono text-white/70 bg-white/10 px-2.5 py-1 rounded-full shrink-0">
            Automated Sync
          </span>
        </div>

        {/* Data Architecture Nodes */}
        <div className="relative z-10 my-auto grid grid-cols-3 gap-2 sm:gap-3">
          <div className="rounded-xl bg-white/[0.04] border border-white/10 p-2 sm:p-3 text-center min-w-0">
            <div className="text-[11px] text-[#F2A93B] font-semibold mb-1 break-words">Marketing</div>
            <div className="text-xs font-mono text-white">GA4 &amp; Ads</div>
            <div className="text-[10px] text-white/40 mt-1">Real-time ETL</div>
          </div>
          <div className="rounded-xl bg-white/[0.04] border border-white/10 p-2 sm:p-3 text-center min-w-0">
            <div className="text-[11px] text-[#4EAA93] font-semibold mb-1 break-words">Sales &amp; CRM</div>
            <div className="text-xs font-mono text-white">Pipeline Leads</div>
            <div className="text-[10px] text-white/40 mt-1">Daily Sync</div>
          </div>
          <div className="rounded-xl bg-white/[0.04] border border-white/10 p-2 sm:p-3 text-center min-w-0">
            <div className="text-[11px] text-[#E31C79] font-semibold mb-1 break-words">Financials</div>
            <div className="text-xs font-mono text-white">ERP Revenue</div>
            <div className="text-[10px] text-white/40 mt-1">Automated</div>
          </div>
        </div>

        <div className="relative z-10 rounded-xl bg-[#2F6F5E]/20 border border-[#2F6F5E]/40 p-3 flex items-center justify-between gap-2 flex-wrap">
          <div className="flex items-center gap-2 min-w-0 flex-1">
            <Layers size={16} className="text-[#4EAA93] shrink-0" />
            <span className="text-xs font-semibold text-white break-words">Single Source of Truth</span>
          </div>
          <span className="text-xs font-mono font-bold text-[#F2A93B] shrink-0">Zero Data Silos</span>
        </div>
      </div>
    );
  }

  if (type === "ppc") {
    return (
      <div className="relative w-full min-h-[370px] sm:min-h-0 sm:aspect-[4/3] rounded-3xl bg-gradient-to-br from-[#1E1C22] to-[#121116] border border-white/10 p-4 sm:p-8 flex flex-col justify-between overflow-hidden shadow-2xl text-white">
        <div className="absolute top-0 left-0 w-60 h-60 rounded-full bg-[#F2A93B]/20 blur-3xl pointer-events-none" />

        <div className="relative z-10 flex items-center justify-between gap-2 flex-wrap sm:flex-nowrap border-b border-white/10 pb-3 sm:pb-4">
          <div className="flex items-center gap-2.5 min-w-0">
            <span className="w-8 h-8 rounded-lg bg-[#F2A93B]/20 text-[#F2A93B] flex items-center justify-center shrink-0">
              <MousePointerClick size={16} />
            </span>
            <div className="min-w-0">
              <div className="text-xs font-semibold text-white break-words">Paid ROAS &amp; Efficiency Hub</div>
              <div className="text-[11px] text-white/50">Google Ads • Social • Search</div>
            </div>
          </div>
          <span className="text-xs font-mono text-[#4EAA93] bg-[#2F6F5E]/30 px-3 py-1 rounded-full border border-[#2F6F5E]/50 shrink-0">
            3.2× Average ROAS
          </span>
        </div>

        {/* Spend & ROAS visual */}
        <div className="relative z-10 my-auto space-y-3">
          <div className="flex items-center justify-between text-xs font-mono text-white/70 mb-1">
            <span>Conversion Quality Score</span>
            <span className="text-[#4EAA93] font-bold">9.8 / 10</span>
          </div>
          <div className="w-full h-2.5 bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-[#2F6F5E] via-[#4EAA93] to-[#F2A93B] w-[88%] rounded-full" />
          </div>

          <div className="grid grid-cols-2 gap-3 pt-3">
            <div className="bg-white/[0.04] rounded-xl p-2.5 sm:p-3">
              <span className="text-[11px] text-white/50 block">Cost Per Acquisition</span>
              <span className="text-base sm:text-lg font-bold text-white font-mono">-38%</span>
              <span className="text-[10px] text-[#4EAA93] block">Lower Ad Waste</span>
            </div>
            <div className="bg-white/[0.04] rounded-xl p-2.5 sm:p-3">
              <span className="text-[11px] text-white/50 block">Return on Ad Spend</span>
              <span className="text-base sm:text-lg font-bold text-[#F2A93B] font-mono">3.2×</span>
              <span className="text-[10px] text-[#F2A93B] block">Profitable Scaling</span>
            </div>
          </div>
        </div>

        <div className="relative z-10 flex items-center justify-between gap-2 text-xs text-white/50 pt-2.5 font-mono flex-wrap border-t border-white/10">
          <span>Attribution: Full-Funnel</span>
          <span className="text-white/80">Continuous Optimization</span>
        </div>
      </div>
    );
  }

  // Default SEO Visual
  return (
    <div className="relative w-full min-h-[370px] sm:min-h-0 sm:aspect-[4/3] rounded-3xl bg-gradient-to-br from-[#1C1F26] to-[#111318] border border-white/10 p-4 sm:p-8 flex flex-col justify-between overflow-hidden shadow-2xl text-white">
      <div className="absolute top-0 right-0 w-60 h-60 rounded-full bg-[#2F6F5E]/25 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full bg-[#F2A93B]/15 blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between gap-2 flex-wrap sm:flex-nowrap border-b border-white/10 pb-3 sm:pb-4">
        <div className="flex items-center gap-2.5 min-w-0">
          <span className="w-8 h-8 rounded-lg bg-[#2F6F5E]/20 text-[#4EAA93] flex items-center justify-center shrink-0">
            <Search size={16} />
          </span>
          <div className="min-w-0">
            <div className="text-xs font-semibold text-white break-words">Organic Search Performance</div>
            <div className="text-[11px] text-white/50">Google SERP &amp; Authority Matrix</div>
          </div>
        </div>
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2F6F5E]/30 text-[#4EAA93] text-xs font-semibold border border-[#2F6F5E]/50 shrink-0">
          <ShieldCheck size={13} /> 100% White-Hat
        </span>
      </div>

      {/* SERP Rank Bars */}
      <div className="relative z-10 my-auto space-y-3">
        <div>
          <div className="flex justify-between gap-2 text-xs text-white/80 mb-1 font-mono">
            <span className="min-w-0 flex-1 break-words">Top 3 Rankings</span>
            <span className="text-[#F2A93B] font-bold shrink-0 text-right">+240% Growth</span>
          </div>
          <div className="w-full h-2.5 bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-[#2F6F5E] to-[#F2A93B] w-[82%] rounded-full" />
          </div>
        </div>

        <div>
          <div className="flex justify-between gap-2 text-xs text-white/80 mb-1 font-mono">
            <span className="min-w-0 flex-1 break-words">Commercial Inquiries</span>
            <span className="text-[#4EAA93] font-bold shrink-0 text-right">2.4&times; Inquiries</span>
          </div>
          <div className="w-full h-2.5 bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-[#2F6F5E] to-[#4EAA93] w-[92%] rounded-full" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 pt-2">
          <div className="bg-white/[0.04] rounded-xl p-2.5 text-center">
            <div className="text-sm font-bold text-white font-mono">0.8s</div>
            <div className="text-[10px] text-white/50">Core Web Vitals Pass</div>
          </div>
          <div className="bg-white/[0.04] rounded-xl p-2.5 text-center">
            <div className="text-sm font-bold text-[#F2A93B] font-mono">98%</div>
            <div className="text-[10px] text-white/50">Client Retention</div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 flex items-center justify-between gap-2 text-xs text-white/50 pt-2.5 font-mono flex-wrap border-t border-white/10">
        <span>Technical Architecture: Clean</span>
        <span className="text-[#4EAA93]">Zero Keyword Cannibalization</span>
      </div>
    </div>
  );
}
