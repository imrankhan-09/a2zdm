import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import TeamCard from "./TeamCard";

/**
 * Single-card carousel for the Meet Our Team section.
 * One full card is visible at a time. Overflow is hidden on the viewport.
 * Sliding is done via CSS transform on the inner flex strip.
 */
export default function TeamCarousel({ members }) {
  const [index, setIndex] = useState(0);

  if (!members || members.length === 0) return null;

  const single = members.length === 1;
  const prev = () => setIndex((i) => (i - 1 + members.length) % members.length);
  const next = () => setIndex((i) => (i + 1) % members.length);

  return (
    <div className="relative max-w-3xl mx-auto px-10 sm:px-14">
      {/* Viewport — clips overflowing cards */}
      <div className="overflow-hidden">
        {/* Sliding strip — width = 100% × number of cards */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {members.map((member) => (
            <div
              key={member.name}
              /* Each slide is exactly 100% of the viewport width */
              className="w-full shrink-0 min-w-full"
            >
              <TeamCard member={member} />
            </div>
          ))}
        </div>
      </div>

      {/* Left arrow */}
      {!single && (
        <button
          type="button"
          onClick={prev}
          aria-label="Previous team member"
          className="absolute top-1/2 -translate-y-1/2 left-0 z-10 w-11 h-11 rounded-full bg-[#17171F] text-white shadow-lg flex items-center justify-center hover:bg-[#F2A93B] hover:text-[#17171F] transition-colors"
        >
          <ArrowLeft size={18} />
        </button>
      )}

      {/* Right arrow */}
      {!single && (
        <button
          type="button"
          onClick={next}
          aria-label="Next team member"
          className="absolute top-1/2 -translate-y-1/2 right-0 z-10 w-11 h-11 rounded-full bg-[#17171F] text-white shadow-lg flex items-center justify-center hover:bg-[#F2A93B] hover:text-[#17171F] transition-colors"
        >
          <ArrowRight size={18} />
        </button>
      )}

      {/* Dot indicators */}
      {!single && (
        <div className="flex justify-center gap-2 mt-6">
          {members.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Go to team member ${i + 1}`}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === index
                  ? "bg-[#F2A93B] w-5"
                  : "bg-[#17171F]/20 hover:bg-[#17171F]/40"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
