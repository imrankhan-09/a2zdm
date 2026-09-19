import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

export default function CTA() {
  return (
    <section className="py-24 sm:py-28 bg-[#17171F] text-white text-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_0%,#F2A93B,transparent_65%)]" />
      <div className="max-w-container mx-auto px-5 sm:px-8 relative z-10">
        <Reveal>
          <div className="text-xs font-bold text-[#F2A93B] uppercase tracking-wider mb-3">
            Ready To Accelerate Your Growth?
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight max-w-3xl mx-auto leading-tight">
            Where strategy meets execution—and results speak for themselves.
          </h2>
          <p className="text-white/70 text-base sm:text-lg max-w-xl mx-auto mt-4 leading-relaxed">
            Let our senior digital marketing and analytics strategists assess your digital footprint.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 mt-8 px-9 py-4 rounded-full bg-[#F2A93B] hover:bg-[#D98F1F] text-[#17171F] font-semibold text-base transition-all duration-200 shadow-md hover:shadow-lg hover:scale-[1.02]"
          >
            Talk to an expert <ArrowRight size={16} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
