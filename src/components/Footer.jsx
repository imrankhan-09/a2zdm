import { useState } from "react";
import { Link } from "react-router-dom";
import { Star, MapPin, Mail, Phone, Send, MailCheck, BadgeCheck } from "lucide-react";
import { FacebookIcon, LinkedinIcon, TwitterIcon } from "./SocialIcons";
import { SERVICES, TEAM } from "../data/site";

const QUICK_LINKS = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "About", to: "/about" },
  { label: "Blog", to: "/blog" },
  { label: "Case Studies", to: "/case-studies" },
  { label: "Contact", to: "/contact" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  return (
    <footer className="bg-ink text-paper pt-16 sm:pt-20 pb-8">
      <div className="max-w-container mx-auto px-5 sm:px-8">
        {/* Newsletter */}
        <div className="flex flex-col lg:flex-row lg:items-center gap-6 pb-12 border-b border-white/10">
          <div className="flex-1">
            <h3 className="font-display font-bold tracking-tight text-2xl sm:text-3xl">
              Growth insights, monthly. No spam.
            </h3>
            <p className="text-sm text-white/55 mt-2">
              SEO, analytics and performance tactics from the A2ZDM team.
            </p>
          </div>
          {subscribed ? (
            <p className="inline-flex items-center gap-2 text-sm font-semibold text-teal bg-tealdim px-4 py-3 rounded-full">
              <MailCheck size={16} /> You&apos;re subscribed — welcome aboard!
            </p>
          ) : (
            <form
              className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto"
              onSubmit={(e) => {
                e.preventDefault();
                if (email.trim()) setSubscribed(true);
              }}
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your work email"
                aria-label="Email address"
                className="flex-1 lg:w-72 px-5 py-3 rounded-full bg-white/10 ring-1 ring-white/15 text-sm text-paper placeholder:text-white/40 focus:outline-none focus:ring-signal"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-1.5 px-6 py-3 rounded-[40px] bg-[#F2A93B] hover:bg-[#D98F1F] text-[#17171F] text-sm font-semibold transition-colors shadow-sm"
              >
                Subscribe <Send size={14} />
              </button>
            </form>
          )}
        </div>

        {/* Office cards */}
        <div className="grid sm:grid-cols-3 gap-4 py-12 border-b border-white/10">
          <div className="rounded-2xl bg-white/[0.06] ring-1 ring-white/10 p-6">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-white/50 mb-3">
              <MapPin size={14} /> Headquarters
            </div>
            <a href="https://maps.google.com?q=22+B+Sher+Shah+Suri+Nagar-B+Khajrana,Indore" target="_blank" rel="noopener noreferrer" className="text-sm text-white/85 hover:text-white leading-relaxed">
              22 B Sher Shah Suri Nagar-B Khajrana, Indore, Madhya Pradesh, India
            </a>
          </div>
          <div className="rounded-2xl bg-white/[0.06] ring-1 ring-white/10 p-6">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-white/50 mb-3">
              <Mail size={14} /> Email
            </div>
            <a href="mailto:info@a2zdm.com" className="text-sm text-white/85 hover:text-white">
              info@a2zdm.com
            </a>
          </div>
          <div className="rounded-2xl bg-white/[0.06] ring-1 ring-white/10 p-6">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-white/50 mb-3">
              <Phone size={14} /> Phone
            </div>
            <a href="tel:+919826739671" className="text-sm text-white/85 hover:text-white">
              +91 9826739671
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-[1.3fr_1fr_1fr_1fr] gap-10 py-12 border-b border-white/10">
          <div>
            <div className="font-display font-bold text-xl mb-3">A2ZDM Private Limited</div>
            <p className="text-sm text-white/60 leading-relaxed max-w-xs mb-5">
              We build data-smart digital strategies—combining SEO and
              analytics to help brands grow faster and smarter.
            </p>
            <div className="flex items-center gap-1.5 text-sm mb-1">
              <div className="flex text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <span className="font-semibold">5.0</span>
              <span className="text-white/50">(24 reviews)</span>
            </div>
            <a
              href="https://g.page/a2zdm/review"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-signal font-semibold hover:underline"
            >
              Leave us a review →
            </a>

            <div className="mt-6 space-y-2.5 text-sm text-white/70">
              <div className="flex items-start gap-2.5">
                <MapPin size={16} className="mt-0.5 shrink-0 text-white/40" />
                <a href="https://maps.google.com?q=22+B+Sher+Shah+Suri+Nagar-B+Khajrana,Indore" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  22 B Sher Shah Suri Nagar-B Khajrana, Indore, Madhya Pradesh, India
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={16} className="text-white/40" />
                <a href="mailto:info@a2zdm.com" className="hover:text-white">info@a2zdm.com</a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={16} className="text-white/40" />
                <a href="tel:+919826739671" className="hover:text-white">+91 9826739671</a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-white/50 uppercase tracking-wide mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {QUICK_LINKS.map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="text-sm text-white/80 hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-white/50 uppercase tracking-wide mb-4">
              Services
            </h4>
            <ul className="space-y-2.5">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link to={`/services/${s.slug}`} className="text-sm text-white/80 hover:text-white">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-white/50 uppercase tracking-wide mb-4">
              Follow Us
            </h4>
            <div className="flex gap-2.5">
              <a href="https://www.facebook.com/people/A2ZDM/100063743120491/?locale=te_IN" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center hover:bg-white/10">
                <FacebookIcon />
              </a>
              <a href="https://in.linkedin.com/company/a2zdm" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center hover:bg-white/10">
                <LinkedinIcon />
              </a>
              <a href="https://x.com/a2zdm" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center hover:bg-white/10">
                <TwitterIcon />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col items-center gap-5">
          <ul className="flex flex-wrap justify-center gap-2.5" aria-label="Certifications">
            {TEAM[0].certifications.map((c) => (
              <li
                key={c}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-white/60 ring-1 ring-white/15 rounded-full px-3.5 py-1.5"
              >
                <BadgeCheck size={13} className="text-teal" /> {c}
              </li>
            ))}
          </ul>
          <div className="text-center text-sm text-white/50">
            © 2026 A2ZDM Pvt. Ltd. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
