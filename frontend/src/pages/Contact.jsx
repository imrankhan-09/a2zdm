import { useState } from "react";
import { Mail, MapPin, Phone, Send, MailCheck, Clock, Star } from "lucide-react";
import Reveal from "../components/Reveal";
import { SERVICES } from "../data/site";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    budget: "",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id.replace("contact-", "")]: value }));
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-20 pb-20 sm:pt-28 sm:pb-28 overflow-hidden bg-[#17171F]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#2F6F5E]/12 blur-[110px]" />
        </div>
        <div className="relative max-w-container mx-auto px-5 sm:px-8 text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F2A93B]/15 text-[#F2A93B] text-xs font-semibold uppercase tracking-widest mb-5">
              Get in Touch
            </span>
            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-[1.1]">
              Let's Talk About{" "}
              <span className="text-[#F2A93B]">Your Growth</span>
            </h1>
            <p className="mt-6 text-lg text-white/65 max-w-xl mx-auto leading-relaxed">
              Tell us about your goals. We'll get back within one business day
              with a tailored strategy outline.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Contact Body */}
      <section className="py-20 sm:py-24 bg-[#FBF8F3]">
        <div className="max-w-container mx-auto px-5 sm:px-8 grid lg:grid-cols-[1fr_1.35fr] gap-12 items-start">

          {/* Left Column — Info */}
          <Reveal className="space-y-6">
            {/* Contact Cards */}
            {[
              {
                icon: MapPin,
                label: "Headquarters",
                content: "22 B Sher Shah Suri Nagar-B Khajrana, Indore, Madhya Pradesh, India",
                href: "https://maps.google.com?q=22+B+Sher+Shah+Suri+Nagar-B+Khajrana,Indore",
                isLink: true,
              },
              {
                icon: Mail,
                label: "Email Us",
                content: "info@a2zdm.com",
                href: "mailto:info@a2zdm.com",
                isLink: true,
              },
              {
                icon: Phone,
                label: "Call Us",
                content: "+91 9826739671",
                href: "tel:+919826739671",
                isLink: true,
              },
              {
                icon: Clock,
                label: "Working Hours",
                content: "Mon – Sat, 9:00 AM – 6:00 PM IST",
                isLink: false,
              },
            ].map(({ icon: Icon, label, content, href, isLink }) => (
              <div
                key={label}
                className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-[#17171F]/8 shadow-sm"
              >
                <div className="w-11 h-11 rounded-xl bg-[#F2A93B]/15 text-[#F2A93B] flex items-center justify-center shrink-0">
                  <Icon size={20} />
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#4A4A5A] uppercase tracking-widest mb-1">
                    {label}
                  </div>
                  {isLink ? (
                    <a
                      href={href}
                      target={href?.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="text-sm text-[#17171F] hover:text-[#F2A93B] transition-colors leading-relaxed"
                    >
                      {content}
                    </a>
                  ) : (
                    <p className="text-sm text-[#17171F] leading-relaxed">{content}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Google Reviews Trust Widget */}
            <div className="p-5 rounded-2xl bg-[#17171F] text-white">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex text-amber-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <span className="font-bold text-lg">5.0</span>
                <span className="text-white/50 text-sm">· Google Reviews</span>
              </div>
              <p className="text-sm text-white/70 leading-relaxed">
                Rated 5 stars by our clients on Google. We take pride in every
                engagement we deliver.
              </p>
              <a
                href="https://g.page/a2zdm/review"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 mt-3 text-sm font-semibold text-[#F2A93B] hover:underline"
              >
                Leave us a review →
              </a>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden h-48 border border-[#17171F]/8 shadow-sm">
              <iframe
                title="A2ZDM Office Location"
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://maps.google.com/maps?q=22.740083,75.920889&z=17&output=embed"
                style={{ border: 0 }}
                allowFullScreen
              />
            </div>
          </Reveal>

          {/* Right Column — Form */}
          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-[#17171F]/8 bg-white shadow-[0_20px_60px_-12px_rgba(20,20,28,0.1)] p-8 sm:p-10">
              {sent ? (
                <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-[#2F6F5E]/15 flex items-center justify-center">
                    <MailCheck size={32} className="text-[#2F6F5E]" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-[#17171F]">
                    Message Received!
                  </h3>
                  <p className="text-[#4A4A5A] max-w-xs">
                    Thanks for reaching out. We'll get back to you within one
                    business day.
                  </p>
                </div>
              ) : (
                <>
                  <h2 className="font-display font-bold text-2xl text-[#17171F] mb-2">
                    Send Us a Message
                  </h2>
                  <p className="text-sm text-[#4A4A5A] mb-8">
                    Fill in the details below and we'll be in touch shortly.
                  </p>
                  <form
                    className="space-y-5"
                    onSubmit={(e) => {
                      e.preventDefault();
                      setSent(true);
                    }}
                  >
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="contact-name"
                          className="block text-sm font-semibold text-[#17171F] mb-1.5"
                        >
                          Full Name *
                        </label>
                        <input
                          id="contact-name"
                          required
                          placeholder="Your full name"
                          value={form.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-[#17171F]/15 text-sm focus:outline-none focus:border-[#F2A93B] focus:ring-2 focus:ring-[#F2A93B]/20 bg-[#FBF8F3] transition-all"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="contact-email"
                          className="block text-sm font-semibold text-[#17171F] mb-1.5"
                        >
                          Work Email *
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          required
                          placeholder="you@company.com"
                          value={form.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-[#17171F]/15 text-sm focus:outline-none focus:border-[#F2A93B] focus:ring-2 focus:ring-[#F2A93B]/20 bg-[#FBF8F3] transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="contact-service"
                        className="block text-sm font-semibold text-[#17171F] mb-1.5"
                      >
                        Service of Interest
                      </label>
                      <select
                        id="contact-service"
                        value={form.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-[#17171F]/15 text-sm focus:outline-none focus:border-[#F2A93B] focus:ring-2 focus:ring-[#F2A93B]/20 bg-[#FBF8F3] transition-all text-[#17171F]"
                      >
                        <option value="">Select a service...</option>
                        {SERVICES.map((s) => (
                          <option key={s.slug} value={s.slug}>
                            {s.name}
                          </option>
                        ))}
                        <option value="other">Other / Not sure yet</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="contact-budget"
                        className="block text-sm font-semibold text-[#17171F] mb-1.5"
                      >
                        Monthly Budget Range
                      </label>
                      <select
                        id="contact-budget"
                        value={form.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-[#17171F]/15 text-sm focus:outline-none focus:border-[#F2A93B] focus:ring-2 focus:ring-[#F2A93B]/20 bg-[#FBF8F3] transition-all text-[#17171F]"
                      >
                        <option value="">Select budget range...</option>
                        <option value="under-500">Under $500 / month</option>
                        <option value="500-1000">$500 – $1,000 / month</option>
                        <option value="1000-2500">$1,000 – $2,500 / month</option>
                        <option value="2500-5000">$2,500 – $5,000 / month</option>
                        <option value="5000+">$5,000+ / month</option>
                        <option value="discuss">Prefer to discuss</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="contact-message"
                        className="block text-sm font-semibold text-[#17171F] mb-1.5"
                      >
                        Message *
                      </label>
                      <textarea
                        id="contact-message"
                        required
                        rows={5}
                        placeholder="Tell us about your business and what you're trying to achieve..."
                        value={form.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-[#17171F]/15 text-sm focus:outline-none focus:border-[#F2A93B] focus:ring-2 focus:ring-[#F2A93B]/20 bg-[#FBF8F3] transition-all resize-y"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-[40px] bg-[#F2A93B] hover:bg-[#D98F1F] text-[#17171F] font-bold text-sm transition-colors shadow-lg shadow-[#F2A93B]/25"
                    >
                      Send Message <Send size={16} />
                    </button>
                    <p className="text-xs text-center text-[#4A4A5A]">
                      We respect your privacy. No spam, ever.
                    </p>
                  </form>
                </>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
