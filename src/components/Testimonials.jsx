import { useState } from "react";
import { Quote, Star } from "lucide-react";
import Reveal, { RevealGroup, RevealItem } from "./Reveal";

const TESTIMONIALS = [
  {
    quote:
      "This SEO partnership catapulted us into search success, delivering quality leads month after month. Their data-driven approach and technical expertise transformed our online presence completely.",
    stat: "+240% organic traffic increase",
    name: "Mark Bolt",
    title: "Co-founder, TechStart Solutions",
    image: "https://a2zdm.com/u2.jpg",
  },
  {
    quote:
      "The analytics setup and strategies delivered exceptional ROI. Their team's expertise in GA4 and BigQuery helped us make data-driven decisions that accelerated our growth.",
    stat: "3.2× ROAS improvement",
    name: "Rajesh Kumar",
    title: "Marketing Director, E-Commerce Plus",
    image: "https://a2zdm.com/u3.jpg",
  },
  {
    quote:
      "A2ZDM transformed our local business from invisible to market leader. We now dominate local search results and our revenue has tripled in just 6 months.",
    stat: "+290% revenue growth",
    name: "Maria Rodriguez",
    title: "Owner, Elite Home Services",
    image: "https://a2zdm.com/u1.jpg",
  },
];

function initials(name) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("");
}

function Avatar({ name, image }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div className="w-12 h-12 rounded-full bg-ink text-paper flex items-center justify-center text-sm font-semibold shrink-0">
        {initials(name)}
      </div>
    );
  }
  return (
    <img
      src={image}
      alt={name}
      loading="lazy"
      onError={() => setFailed(true)}
      className="w-12 h-12 rounded-full object-cover shrink-0 bg-surface"
    />
  );
}


export default function Testimonials() {
  return (
    <section className="py-20 sm:py-28 bg-[#F3EEE1]">
      <div className="max-w-container mx-auto px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <div className="text-xs font-bold text-[#2F6F5E] uppercase tracking-wider mb-3">
            Client Success Stories
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#17171F]">
            What Our Clients Say
          </h2>
          <p className="text-[#5C5C6F] text-base sm:text-lg mt-4 leading-relaxed">
            Don&apos;t just take our word for it—hear from businesses that have transformed their growth with our strategies.
          </p>
        </Reveal>

        <RevealGroup className="grid md:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-14">
          {TESTIMONIALS.map((t) => (
            <RevealItem key={t.name} className="h-full">
              <div className="h-full flex flex-col rounded-[24px] border border-[rgba(20,20,28,0.10)] bg-white p-7 sm:p-9 shadow-[0_4px_24px_-6px_rgba(20,20,28,0.05)] hover:shadow-[0_12px_36px_-8px_rgba(20,20,28,0.09)] transition-all">
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-[#F2A93B] mb-5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>

                <blockquote className="text-sm sm:text-[15px] text-[#17171F] leading-relaxed flex-1 italic">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                <div className="mt-5 mb-6 inline-flex self-start text-xs font-semibold text-[#2F6F5E] bg-[#2F6F5E]/10 px-3.5 py-1.5 rounded-full border border-[#2F6F5E]/20">
                  {t.stat}
                </div>

                <div className="flex items-center gap-3.5 pt-5 border-t border-[rgba(20,20,28,0.08)]">
                  <Avatar name={t.name} image={t.image} />
                  <div>
                    <div className="text-sm font-bold text-[#17171F]">{t.name}</div>
                    <div className="text-xs text-[#5C5C6F] mt-0.5">{t.title}</div>
                  </div>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
