import { ChevronLeft, ChevronRight } from "lucide-react";

/**
 * Helper to compute pagination items with ellipsis if totalPages > 5.
 * Example: [1, 2, 3, 4, '...', 10] or [1, '...', 4, 5, 6, '...', 10]
 */
function getPaginationItems(currentPage, totalPages) {
  if (totalPages <= 5) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  // If current page is close to the start
  if (currentPage <= 3) {
    return [1, 2, 3, 4, "ellipsis-end", totalPages];
  }

  // If current page is close to the end
  if (currentPage >= totalPages - 2) {
    return [1, "ellipsis-start", totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
  }

  // If current page is somewhere in the middle
  return [
    1,
    "ellipsis-start",
    currentPage - 1,
    currentPage,
    currentPage + 1,
    "ellipsis-end",
    totalPages,
  ];
}

/**
 * Reusable client-side pagination component.
 *
 * @param {number} currentPage - Currently active page (1-indexed)
 * @param {number} totalPages - Total number of pages
 * @param {function} onPageChange - Callback invoked with next page number
 */
export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  className = "",
}) {
  if (totalPages <= 1) return null;

  const items = getPaginationItems(currentPage, totalPages);

  return (
    <nav
      aria-label="Pagination"
      className={`flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mt-10 sm:mt-12 select-none ${className}`}
    >
      {/* Previous Button */}
      <button
        type="button"
        disabled={currentPage <= 1}
        onClick={() => onPageChange(currentPage - 1)}
        aria-label="Go to previous page"
        className="inline-flex items-center gap-1 px-3 sm:px-4 py-2 rounded-full border border-[#17171F]/15 bg-white text-xs sm:text-sm font-semibold text-[#17171F] hover:border-[#17171F]/40 hover:bg-[#17171F]/5 disabled:opacity-40 disabled:cursor-not-allowed disabled:pointer-events-none transition-all shadow-xs cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#2F6F5E]/40"
      >
        <ChevronLeft size={15} aria-hidden="true" />
        <span>Previous</span>
      </button>

      {/* Page Numbers and Ellipses */}
      {items.map((item, idx) => {
        if (typeof item === "string") {
          return (
            <span
              key={`ellipsis-${idx}`}
              aria-hidden="true"
              className="w-7 sm:w-8 h-9 sm:h-10 flex items-center justify-center text-sm font-semibold text-[#5C5C6F]"
            >
              …
            </span>
          );
        }

        const isActive = item === currentPage;

        return (
          <button
            key={`page-${item}`}
            type="button"
            onClick={() => onPageChange(item)}
            aria-current={isActive ? "page" : undefined}
            aria-label={`Page ${item}`}
            className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full text-xs sm:text-sm font-semibold border transition-all cursor-pointer flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#2F6F5E]/40 ${
              isActive
                ? "bg-[#17171F] text-white border-[#17171F] shadow-sm pointer-events-none"
                : "bg-white text-[#17171F] border-[#17171F]/15 hover:border-[#17171F]/40 hover:bg-[#17171F]/5 shadow-xs"
            }`}
          >
            {item}
          </button>
        );
      })}

      {/* Next Button */}
      <button
        type="button"
        disabled={currentPage >= totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        aria-label="Go to next page"
        className="inline-flex items-center gap-1 px-3 sm:px-4 py-2 rounded-full border border-[#17171F]/15 bg-white text-xs sm:text-sm font-semibold text-[#17171F] hover:border-[#17171F]/40 hover:bg-[#17171F]/5 disabled:opacity-40 disabled:cursor-not-allowed disabled:pointer-events-none transition-all shadow-xs cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#2F6F5E]/40"
      >
        <span>Next</span>
        <ChevronRight size={15} aria-hidden="true" />
      </button>
    </nav>
  );
}
