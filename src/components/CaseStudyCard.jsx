import { ArrowUpRight } from "lucide-react";
import { RevealItem } from "./Reveal";

/**
 * Reusable case-study card: image, client, title, description,
 * optional logo and View Case Study button (external link).
 */
export default function CaseStudyCard({ study }) {
  return (
    <RevealItem className="h-full">
      <article className="group h-full flex flex-col rounded-[20px] border border-[rgba(20,20,28,0.10)] bg-white overflow-hidden hover:border-[#17171F]/30 hover:-translate-y-1 transition-all duration-300 shadow-[0_4px_20px_-4px_rgba(20,20,28,0.04)]">
        <a
          href={study.link}
          target="_blank"
          rel="noopener noreferrer"
          className="relative block overflow-hidden"
          aria-label={study.title}
        >
          <img
            src={study.image}
            alt={study.client}
            loading="lazy"
            className="w-full h-52 sm:h-56 object-cover group-hover:scale-[1.03] transition-transform duration-300"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
          <span className="absolute top-3.5 left-3.5 bg-[#E31C79] text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
            Case Study
          </span>
        </a>
        <div className="flex-1 flex flex-col p-6 sm:p-7">
          <div className="flex items-center justify-between gap-3 mb-2">
            <span className="text-xs font-medium text-slate uppercase tracking-wider">
              {study.client}
            </span>
            {study.logo && (
              <img
                src={study.logo}
                alt={`${study.client} logo`}
                loading="lazy"
                className="h-6 w-auto object-contain opacity-80"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            )}
          </div>
          <h3 className="font-display font-semibold text-lg sm:text-xl text-ink leading-snug">
            &ldquo;{study.title}&rdquo;
          </h3>
          <p className="text-sm text-slate leading-relaxed mt-2.5 flex-1">
            {study.description}
          </p>
          <a
            href={study.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 mt-5 text-sm font-semibold text-[#E31C79] hover:text-[#C91468] transition-colors"
          >
            View case study &rarr;
          </a>
        </div>
      </article>
    </RevealItem>
  );
}
