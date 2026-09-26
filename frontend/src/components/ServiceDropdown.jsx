import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "../data/site";

/**
 * Professional services dropdown / mega-menu.
 * Rendered by the Header on desktop (hover) and reused inside the
 * mobile menu (tap-to-expand). Visual style matches the site design:
 * white/dark capsule, icon chip, name + right arrow, hover highlight.
 */
export default function ServiceDropdown({ items = SERVICES, onNavigate }) {
  return (
    <div className="grid sm:grid-cols-2 gap-1.5 p-2.5 min-w-[320px] sm:min-w-[560px]">
      {items.map((service) => {
        const Icon = service.Icon;
        return (
          <Link
            key={service.slug}
            to={`/services/${service.slug}`}
            onClick={onNavigate}
            className="group flex items-center gap-3.5 rounded-xl px-3.5 py-3 hover:bg-[#F3EEE1] transition-colors"
          >
            <span className="w-10 h-10 shrink-0 rounded-xl bg-[#2F6F5E]/10 text-[#2F6F5E] flex items-center justify-center group-hover:bg-[#F2A93B] group-hover:text-[#17171F] transition-colors">
              <Icon size={18} />
            </span>
            <span className="flex-1 min-w-0">
              <span className="block text-sm font-semibold text-[#17171F] group-hover:text-[#2F6F5E] transition-colors truncate">
                {service.name}
              </span>
              <span className="block text-xs text-[#5C5C6F] truncate">
                {service.short}
              </span>
            </span>
            <ArrowRight
              size={15}
              className="shrink-0 text-[#5C5C6F]/50 group-hover:text-[#2F6F5E] group-hover:translate-x-0.5 transition-all"
            />
          </Link>
        );
      })}
    </div>
  );
}
