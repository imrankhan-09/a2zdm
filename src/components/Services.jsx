import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Megaphone, BarChart3, ArrowRight, ArrowUpRight } from "lucide-react";
import Reveal, { RevealGroup, RevealItem } from "./Reveal";

const SERVICES = [
  {
    icon: Search,
    kicker: "Search Engine Optimization",
    title: "Technical SEO",
    body: "Optimize your website's foundation to ensure seamless crawling, indexing, and user experience.",
    to: "/services/technical-seo",
    image: "https://a2zdm.com/techseo.jpg",
  },
  {
    icon: Megaphone,
    kicker: "Search Engine Optimization",
    title: "Public Relations",
    body: "Strategically influence your brand perception through targeted public relations and authority outreach.",
    to: "/services/pr-industry-seo",
    image: "https://a2zdm.com/pr.jpg",
  },
  {
    icon: BarChart3,
    kicker: "Digital Analytics",
    title: "GA4 Analytics",
    body: "Master the new analytics standard with comprehensive GA4 implementation, tracking, and insights.",
    to: "/services/ga4-analytics",
    image: "https://a2zdm.com/ga4.jpg",
  },
];

function ServiceCardItem({ s }) {
  const [imgFailed, setImgFailed] = useState(false);
  const Icon = s.icon;

  return (
    <RevealItem className="h-full">
      <Link
        to={s.to}
        className="group flex flex-col h-full rounded-[24px] border border-[rgba(20,20,28,0.10)] bg-white overflow-hidden hover:border-[#17171F]/30 hover:-translate-y-1.5 transition-all duration-300 shadow-[0_4px_24px_-6px_rgba(20,20,28,0.05)] hover:shadow-[0_12px_36px_-8px_rgba(20,20,28,0.10)]"
      >
        {/* Card Header / Image */}
        <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-[#F3EEE1]">
          {!imgFailed ? (
            <img
              src={s.image}
              alt={s.title}
              loading="lazy"
              onError={() => setImgFailed(true)}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#F3EEE1] to-[#FBF8F3]">
              <Icon size={44} className="text-[#2F6F5E]/40" />
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#17171F]/50 via-transparent to-transparent opacity-60" />
          <div className="absolute top-4 left-4 w-11 h-11 rounded-xl bg-white/95 backdrop-blur-md text-[#2F6F5E] flex items-center justify-center shadow-sm">
            <Icon size={20} />
          </div>
          <span className="absolute bottom-3 left-4 text-xs font-semibold text-white/90 bg-black/40 backdrop-blur-xs px-3 py-1 rounded-full">
            {s.kicker}
          </span>
        </div>

        {/* Card Body */}
        <div className="flex-1 flex flex-col p-6 sm:p-7">
          <h3 className="font-display font-bold text-xl text-[#17171F] group-hover:text-[#2F6F5E] transition-colors mb-2.5">
            {s.title}
          </h3>
          <p className="text-sm text-[#5C5C6F] leading-relaxed mb-6 flex-1">
            {s.body}
          </p>
          <div className="pt-4 border-t border-[rgba(20,20,28,0.08)] flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#17171F] group-hover:text-[#2F6F5E] transition-colors">
              Learn More
              <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </span>
          </div>
        </div>
      </Link>
    </RevealItem>
  );
}

export default function Services() {
  return (
    <section className="py-20 sm:py-28 bg-[#F3EEE1]">
      <div className="max-w-container mx-auto px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <div className="text-xs font-bold text-[#2F6F5E] uppercase tracking-wider mb-3">
            Core Capabilities
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#17171F]">
            What We Do
          </h2>
          <p className="text-[#5C5C6F] text-base sm:text-lg mt-4 leading-relaxed">
            We pair cutting-edge technology with proven strategies to
            deliver measurable results across SEO, analytics and performance
            marketing.
          </p>
        </Reveal>

        <RevealGroup className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-14">
          {SERVICES.map((s) => (
            <ServiceCardItem key={s.title} s={s} />
          ))}
        </RevealGroup>

        <Reveal delay={0.1} className="mt-12 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white hover:bg-[#17171F] text-[#17171F] hover:text-white border border-[rgba(20,20,28,0.12)] text-sm font-semibold transition-all duration-200 shadow-xs hover:shadow-md"
          >
            View all services <ArrowRight size={15} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
