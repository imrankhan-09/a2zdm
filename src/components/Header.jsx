import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ArrowUpRight } from "lucide-react";
import { SERVICES } from "../data/site";

const NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Blog", to: "/blog" },
  { label: "Case Studies", to: "/case-studies" },
  { label: "Contact", to: "/contact" },
];

/**
 * Floating pill nav (Galaxy pattern, A2ZDM tokens).
 * Transparent over the hero; on scroll the full-width bar + pill
 * crossfade to solid ink via a 150-200ms CSS transition.
 */
export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);
  const closeTimer = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus on back/forward navigation (link clicks close via onClick).
  const pathname = location.pathname;
  const prevPath = useRef(pathname);
  useEffect(() => {
    if (prevPath.current === pathname) return;
    prevPath.current = pathname;
    setOpen(false);
    setServicesOpen(false);
    setMobileServices(false);
  }, [pathname]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setServicesOpen(false);
        setOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const openServices = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setServicesOpen(true);
  };
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setServicesOpen(false), 140);
  };

  const servicesActive = location.pathname.startsWith("/services");
  // The Services page opens with a dark hero, so render the pill in its
  // dark (scrolled) treatment there even before any scrolling happens.
  const dark = scrolled || open || location.pathname === "/services";

  const linkCls = ({ isActive }) =>
    `px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200 ${
      isActive
        ? "bg-white/20 text-white font-semibold"
        : "text-white/80 hover:text-white hover:bg-white/10"
    }`;

  return (
    <header className="sticky top-0 z-50 pt-5 pb-3 px-5 sm:px-8 bg-[#FBF8F3]/90 backdrop-blur-md transition-all">
      <div className="max-w-container mx-auto flex items-center justify-between gap-4">
        {/* Logo on the left */}
        <Link to="/" className="flex items-center gap-3 shrink-0 group">
          <div className="w-10 h-10 rounded-xl bg-[#F2A93B] flex items-center justify-center text-[#17171F] font-bold text-xl shadow-sm group-hover:scale-105 transition-transform">
            <span className="font-display font-black">A</span>
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-2xl tracking-tight text-ink leading-none">
              A2ZDM
            </span>
            <span className="text-[11px] text-slate font-medium tracking-wide mt-1">
              A MarTech Company
            </span>
          </div>
        </Link>

        {/* Center / Right dark floating pill capsule */}
        <div className="hidden lg:flex items-center bg-[#2B2833] text-white rounded-full p-1.5 pl-5 pr-1.5 shadow-[0_10px_35px_rgba(20,20,28,0.18)] border border-white/10">
          <nav className="flex items-center gap-0.5" aria-label="Main">
            <NavLink to="/" end className={linkCls}>
              Home
            </NavLink>

            {/* Services mega-panel */}
            <div
              className="relative"
              onMouseEnter={openServices}
              onMouseLeave={scheduleClose}
            >
              <div className="flex items-center">
                <NavLink
                  to="/services"
                  onClick={() => setServicesOpen(false)}
                  className={({ isActive }) =>
                    `pl-4 pr-1.5 py-2 text-sm font-medium rounded-l-full transition-colors duration-200 ${
                      isActive || servicesActive
                        ? "bg-white/20 text-white font-semibold"
                        : "text-white/80 hover:text-white hover:bg-white/10"
                    }`
                  }
                >
                  Services
                </NavLink>
                <button
                  type="button"
                  aria-label="Toggle services menu"
                  aria-expanded={servicesOpen}
                  onClick={() => setServicesOpen((v) => !v)}
                  onFocus={openServices}
                  className={`pr-3 py-2 rounded-r-full transition-colors duration-200 ${
                    servicesActive
                      ? "bg-white/20 text-white"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${
                      servicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                    onMouseEnter={openServices}
                    onMouseLeave={scheduleClose}
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-3"
                  >
                    <div className="w-[600px] rounded-2xl bg-[#1E1E28] text-white shadow-[0_32px_80px_-16px_rgba(0,0,0,0.6)] border border-white/10 p-3">
                      <div className="grid grid-cols-2 gap-1">
                        {SERVICES.map((s) => {
                          const Icon = s.Icon;
                          return (
                            <Link
                              key={s.slug}
                              to={`/services/${s.slug}`}
                              onClick={() => setServicesOpen(false)}
                              className="group flex items-start gap-3 rounded-xl px-3.5 py-3 hover:bg-white/[0.08] transition-colors"
                            >
                              <span className="w-10 h-10 shrink-0 rounded-lg bg-[#2F6F5E]/20 text-[#4EAA93] flex items-center justify-center group-hover:bg-[#F2A93B] group-hover:text-[#17171F] transition-colors">
                                <Icon size={18} />
                              </span>
                              <span className="min-w-0">
                                <span className="block text-sm font-semibold group-hover:text-[#F2A93B] transition-colors">
                                  {s.name}
                                </span>
                                <span className="block text-xs text-white/60 leading-relaxed mt-0.5">
                                  {s.short}
                                </span>
                              </span>
                            </Link>
                          );
                        })}
                      </div>
                      <Link
                        to="/services"
                        onClick={() => setServicesOpen(false)}
                        className="flex items-center justify-between rounded-xl bg-[#F2A93B] text-[#17171F] px-4 py-3 mt-2 text-sm font-semibold hover:bg-[#D98F1F] transition-colors"
                      >
                        View all services
                        <ArrowUpRight size={16} />
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <NavLink to="/about" className={linkCls}>
              About Us
            </NavLink>
            <NavLink to="/case-studies" className={linkCls}>
              Case Studies
            </NavLink>
            <NavLink to="/blog" className={linkCls}>
              Blog
            </NavLink>
            <NavLink to="/contact" className={linkCls}>
              Contact
            </NavLink>
          </nav>

          {/* Book A Consultation CTA button inside pill */}
          <Link
            to="/contact"
            className="group inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-sm font-semibold bg-white hover:bg-white/95 text-[#17171F] transition-all duration-200 shadow-sm ml-3 shrink-0"
          >
            Book A Consultation
            <ArrowUpRight
              size={16}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden flex items-center gap-2">
          <Link
            to="/contact"
            className="hidden sm:inline-flex items-center gap-1 px-4 py-2 rounded-full text-xs font-semibold bg-[#F2A93B] text-[#17171F]"
          >
            Consultation
          </Link>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            className="p-2.5 rounded-full bg-[#2B2833] text-white hover:bg-black transition-colors"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile sheet */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden fixed inset-x-4 top-[84px] z-50 rounded-3xl bg-ink text-paper p-6 shadow-[0_32px_80px_-16px_rgba(15,23,32,0.5)] ring-1 ring-white/10 max-h-[calc(100dvh-110px)] overflow-y-auto"
          >
            <div className="flex flex-col">
              <Link
                to="/"
                onClick={() => setOpen(false)}
                className="py-3.5 text-lg font-medium border-b border-white/10"
              >
                Home
              </Link>
              <div className="border-b border-white/10">
                <button
                  type="button"
                  onClick={() => setMobileServices((v) => !v)}
                  aria-expanded={mobileServices}
                  className="w-full flex items-center justify-between py-3.5 text-lg font-medium"
                >
                  Services
                  <ChevronDown
                    size={20}
                    className={`transition-transform duration-200 ${
                      mobileServices ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {mobileServices && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-2">
                        {SERVICES.map((s) => {
                          const Icon = s.Icon;
                          return (
                            <Link
                              key={s.slug}
                              to={`/services/${s.slug}`}
                              onClick={() => setOpen(false)}
                              className="flex items-center gap-3 py-2.5 text-white/80 hover:text-white"
                            >
                              <span className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                                <Icon size={15} />
                              </span>
                              <span className="text-[15px]">{s.name}</span>
                            </Link>
                          );
                        })}
                        <Link
                          to="/services"
                          onClick={() => setOpen(false)}
                          className="block py-2.5 text-sm font-semibold text-white"
                        >
                          View all services →
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              {NAV.slice(1).map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="py-3.5 text-lg font-medium border-b border-white/10"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="group mt-5 inline-flex items-center justify-center gap-1.5 px-5 py-3.5 rounded-full bg-[#F2A93B] hover:bg-[#D98F1F] text-[#17171F] font-semibold"
              >
                Get Quote
                <ArrowUpRight
                  size={16}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
