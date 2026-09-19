import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { TrendingUp, Activity, ArrowUpRight } from "lucide-react";
import CountUp from "./CountUp";

const BARS = [
  { label: "Organic Traffic", value: 85, color: "#2F6F5E" },
  { label: "Conversion Rate", value: 72, color: "#F2A93B" },
  { label: "ROI Growth", value: 94, color: "#2F6F5E" },
  { label: "Lead Quality", value: 88, color: "#17171F" },
];

const STATS = [
  { value: 240, suffix: "%", label: "Traffic Growth" },
  { value: 3.2, decimals: 1, suffix: "x", label: "ROAS Increase" },
  { value: 156, suffix: "%", label: "Lead Generation" },
  { value: 98, suffix: "%", label: "Client Retention" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.04 } },
};
const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section className="relative pt-12 pb-20 sm:pt-16 sm:pb-28 overflow-hidden bg-[#FBF8F3]">
      {/* Subtle curved globe wireframe background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1380px] h-[584px] pointer-events-none opacity-80 select-none z-0">
        <img
          src="/src/assets/hero-banner-globe.svg"
          alt=""
          className="w-full h-full object-cover object-top"
          aria-hidden="true"
        />
      </div>

      <motion.div
        className="relative z-10 max-w-container mx-auto px-5 sm:px-8 text-center"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={item} className="flex justify-center">
          <div className="inline-flex items-center gap-2.5 text-xs font-semibold text-[#2F6F5E] bg-[#2F6F5E]/10 px-4 py-1.5 rounded-full mb-6 border border-[#2F6F5E]/20 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#2F6F5E] animate-pulse" />
            <span>Trusted by 50+ Growing Businesses</span>
          </div>
        </motion.div>

        <motion.h1
          variants={item}
          className="font-display font-bold text-4xl sm:text-6xl lg:text-[64px] leading-[1.1] tracking-tight text-[#17171F] max-w-5xl mx-auto"
        >
          Driving Growth Through{" "}
          <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#17171F] via-[#2F6F5E] to-[#F2A93B]">
            Smarter Data, Smarter Marketing
          </span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 text-base sm:text-lg lg:text-xl text-[#5C5C6F] max-w-3xl mx-auto leading-relaxed"
        >
          We help businesses—from E-Commerce to local services—unlock growth by
          combining powerful SEO, advanced analytics (GA4, BigQuery, Power BI),
          and digital marketing strategies with results you can measure.
        </motion.p>

        <motion.div variants={item} className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/services"
            className="group px-8 py-4 rounded-full bg-[#F2A93B] hover:bg-[#D98F1F] text-[#17171F] font-semibold text-sm sm:text-base transition-all duration-200 shadow-sm hover:shadow-md hover:scale-[1.02] inline-flex items-center justify-center gap-2"
          >
            Explore Our Services
            <ArrowUpRight size={17} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
          <Link
            to="/case-studies"
            className="group px-8 py-4 rounded-full bg-white hover:bg-[#F3EEE1] text-[#17171F] border border-[rgba(20,20,28,0.15)] font-semibold text-sm sm:text-base transition-all duration-200 shadow-sm hover:scale-[1.02] inline-flex items-center justify-center gap-2"
          >
            Explore Case Studies
            <ArrowUpRight size={17} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </motion.div>

        {/* Analytics Live Dashboard Telemetry Card */}
        <motion.div variants={item} className="max-w-4xl mx-auto mt-14 sm:mt-16 text-left">
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-to-r from-[#2F6F5E]/10 via-[#F2A93B]/10 to-transparent blur-3xl rounded-[32px] -z-10" />
            <div className="rounded-[24px] border border-[rgba(20,20,28,0.10)] bg-white shadow-[0_16px_50px_-12px_rgba(20,20,28,0.09)] p-6 sm:p-9">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-7 pb-5 border-b border-[rgba(20,20,28,0.08)]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#2F6F5E]/10 text-[#2F6F5E] flex items-center justify-center">
                    <Activity size={20} />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-[#5C5C6F] uppercase tracking-wider">
                      Analytics Dashboard
                    </div>
                    <div className="font-display font-bold text-lg text-[#17171F]">
                      Performance Overview
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-[#2F6F5E] text-sm font-semibold bg-[#2F6F5E]/10 px-3.5 py-1.5 rounded-full border border-[#2F6F5E]/20">
                  <TrendingUp size={15} /> +34% this month
                </div>
              </div>

              {/* Progress bars */}
              <div className="space-y-4">
                {BARS.map((bar, i) => (
                  <div key={bar.label}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="text-[#17171F] font-medium">{bar.label}</span>
                      <span className="font-mono font-semibold text-[#2F6F5E]">{bar.value}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-[#F3EEE1] overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{ backgroundColor: bar.color }}
                        initial={{ width: 0 }}
                        animate={{ width: `${bar.value}%` }}
                        transition={{ duration: 1, delay: 0.4 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* 4 Key Stat Tiles */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mt-8 pt-6 border-t border-[rgba(20,20,28,0.08)]">
                {STATS.map((s) => (
                  <div key={s.label} className="p-3.5 rounded-xl bg-[#FBF8F3] border border-[rgba(20,20,28,0.06)]">
                    <div className="font-mono text-2xl sm:text-3xl font-bold text-[#2F6F5E]">
                      <CountUp value={s.value} decimals={s.decimals || 0} suffix={s.suffix} duration={1.6} />
                    </div>
                    <div className="text-xs text-[#5C5C6F] font-medium mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
