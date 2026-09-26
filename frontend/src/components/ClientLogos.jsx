import { useState } from "react";
import { ShoppingCart, Wrench, Laptop } from "lucide-react";
import Reveal, { RevealGroup, RevealItem } from "./Reveal";

/**
 * Authentic client brands from A2ZDM portfolio.
 * Logos are served locally from /clients/ with graceful fallback to remote URL.
 */
const CLIENTS = [
  { name: "The London Bespoke Club", src: "/clients/c1.png", fallback: "https://a2zdm.com/clients/c1.png" },
  { name: "Healthy House", src: "/clients/c2.png", fallback: "https://a2zdm.com/clients/c2.png" },
  { name: "Hurford's", src: "/clients/c3.png", fallback: "https://a2zdm.com/clients/c3.png" },
  { name: "Concrete Lines Skate Shop", src: "/clients/c4.png", fallback: "https://a2zdm.com/clients/c4.png" },
  { name: "Alphard Golf", src: "/clients/c6.png", fallback: "https://a2zdm.com/clients/c6.png" },
  { name: "Popticals", src: "/clients/c7.png", fallback: "https://a2zdm.com/clients/c7.png" },
  { name: "Airhub", src: "/clients/c8.png", fallback: "https://a2zdm.com/clients/c8.png" },
  { name: "RaceTrac", src: "/clients/c9.png", fallback: "https://a2zdm.com/clients/c9.png" },
  { name: "Community Transit", src: "/clients/c10.png", fallback: "https://a2zdm.com/clients/c10.png" },
  { name: "Germaine de Capuccini", src: "/clients/c11.png", fallback: "https://a2zdm.com/clients/c11.png" },
  { name: "Wholesome Bellies", src: "/clients/c12.png", fallback: "https://a2zdm.com/clients/c12.png" },
  { name: "The Uniform Edit", src: "/clients/c13.png", fallback: "https://a2zdm.com/clients/c13.png" },
  { name: "Pure AV", src: "/clients/c14.png", fallback: "https://a2zdm.com/clients/c14.png" },
];

const INDUSTRIES = [
  {
    icon: ShoppingCart,
    badgeBg: "bg-[#0099FF]",
    title: "E-Commerce",
    body: "Specialized SEO and analytics for online stores and digital products",
  },
  {
    icon: Wrench,
    badgeBg: "bg-[#7356F9]",
    title: "Local Services",
    body: "Local SEO for service businesses",
  },
  {
    icon: Laptop,
    badgeBg: "bg-[#C844E8]",
    title: "SaaS & Tech",
    body: "Advanced analytics and growth marketing for tech companies",
  },
];

function ClientLogoTile({ client }) {
  const [imgSrc, setImgSrc] = useState(client.src);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (imgSrc !== client.fallback) {
      setImgSrc(client.fallback);
    } else {
      setHasError(true);
    }
  };

  return (
    <div
      title={client.name}
      className="h-16 sm:h-20 w-44 sm:w-56 shrink-0 rounded-2xl bg-white/95 border border-white/20 p-3 sm:p-4 flex items-center justify-center shadow-[0_4px_20px_-4px_rgba(0,0,0,0.15)] hover:shadow-[0_8px_28px_-4px_rgba(0,0,0,0.25)] hover:scale-105 transition-all duration-300"
    >
      {!hasError ? (
        <img
          src={imgSrc}
          alt={`${client.name} logo`}
          loading="lazy"
          onError={handleError}
          className="h-full w-full object-contain filter-none"
        />
      ) : (
        <span className="text-xs font-semibold text-[#17171F] text-center line-clamp-1 px-2">
          {client.name}
        </span>
      )}
    </div>
  );
}

export default function ClientLogos() {
  return (
    <section className="py-20 sm:py-28 bg-[#17171F] text-white overflow-hidden border-y border-white/10 relative">
      {/* Ambient background glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-[#F2A93B]/10 blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-[#2F6F5E]/15 blur-[120px]" />
      </div>

      <div className="relative max-w-container mx-auto px-5 sm:px-8">
        <Reveal className="max-w-3xl text-center mx-auto">
          {/* Authentic Google Review Trust Pill */}
          <div className="inline-flex items-center gap-2.5 bg-white/10 border border-white/15 px-4 py-2 rounded-full mb-6 backdrop-blur-md shadow-xs">
            <div className="flex text-amber-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className="text-sm">★</span>
              ))}
            </div>
            <span className="text-xs font-semibold text-white/90">5.0 on Google Reviews</span>
            <span className="text-xs text-white/50">(24 reviews)</span>
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white leading-tight">
            Trusted By{" "}
            <span className="text-[#38BDF8] sm:text-[#F2A93B]">Industry Leaders</span>
          </h2>
          <p className="text-white/70 text-base sm:text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
            We partner with visionary brands across diverse sectors to deliver exceptional digital results
          </p>
        </Reveal>
      </div>

      {/* Infinite Smooth Scrolling Marquee */}
      <div className="mt-14 sm:mt-16 w-full overflow-hidden mask-fade py-4 relative">
        <div className="animate-marquee-smooth flex items-center gap-6 sm:gap-8">
          {/* First set of client logos */}
          {CLIENTS.map((client, i) => (
            <ClientLogoTile key={`c1-${client.name}-${i}`} client={client} />
          ))}
          {/* Duplicated set for seamless, uninterrupted infinite loop */}
          {CLIENTS.map((client, i) => (
            <ClientLogoTile key={`c2-${client.name}-${i}`} client={client} />
          ))}
        </div>
      </div>

      {/* 3 Industry Vertical Cards */}
      <div className="relative max-w-container mx-auto px-5 sm:px-8 mt-16 sm:mt-20">
        <RevealGroup className="grid sm:grid-cols-3 gap-6" stagger={0.08}>
          {INDUSTRIES.map((ind) => {
            const Icon = ind.icon;
            return (
              <RevealItem key={ind.title} className="h-full">
                <div className="h-full rounded-[24px] border border-white/[0.08] bg-[#1A1A24] py-12 px-6 sm:px-10 text-center hover:border-white/20 hover:bg-[#1E1E2B] hover:-translate-y-1 transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.25)] flex flex-col items-center justify-center">
                  <div
                    className={`w-16 h-16 rounded-full ${ind.badgeBg} text-white flex items-center justify-center mb-7 shadow-md shrink-0`}
                  >
                    <Icon size={28} className="text-white" strokeWidth={1.8} />
                  </div>
                  <h3 className="font-display font-bold text-2xl sm:text-[28px] text-white mb-4 tracking-tight">
                    {ind.title}
                  </h3>
                  <p className="text-[15px] sm:text-base text-white/60 leading-relaxed max-w-sm mx-auto">
                    {ind.body}
                  </p>
                </div>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
