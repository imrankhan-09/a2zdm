import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, MailCheck, Send, ArrowUpRight, Clock, CalendarDays, User } from "lucide-react";
import BlogCard from "../components/BlogCard";
import CTASection from "../components/CTASection";
import Reveal, { RevealGroup } from "../components/Reveal";
import { BLOG_FILTERS, BLOG_POSTS, blogBucket } from "../data/site";
import { useSEO } from "../hooks/useSEO";
import { PAGE_SEO } from "../data/seo";

const PAGE_SIZE = 6;

export default function Blog() {
  const [filter, setFilter] = useState("All");
  const [page, setPage] = useState(1);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  useSEO(PAGE_SEO.blog);

  const filtered = useMemo(() => {
    if (filter === "All") return BLOG_POSTS;
    return BLOG_POSTS.filter((p) => blogBucket(p.category) === filter);
  }, [filter]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const safePage = Math.min(page, totalPages);
  const visible = filtered.slice(
    (safePage - 1) * PAGE_SIZE,
    safePage * PAGE_SIZE
  );

  const pickFilter = (f) => {
    setFilter(f);
    setPage(1);
  };

  // Featured = first post marked as featured in data, or first overall
  const featured = BLOG_POSTS.find((p) => p.featured) || BLOG_POSTS[0];

  return (
    <>
      {/* Hero */}
      <section className="relative pt-20 pb-20 sm:pt-28 sm:pb-28 overflow-hidden bg-[#17171F]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-80px] right-0 w-[600px] h-[600px] rounded-full bg-[#F2A93B]/8 blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#2F6F5E]/10 blur-[100px]" />
        </div>
        <div className="relative max-w-container mx-auto px-5 sm:px-8">
          <Reveal>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F2A93B]/15 text-[#F2A93B] text-xs font-semibold uppercase tracking-widest mb-5">
              Learn, Implement, Succeed Faster
            </span>
            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-[1.1] max-w-3xl">
              Digital Marketing{" "}
              <span className="text-[#F2A93B]">Insights</span>
            </h1>
            <p className="mt-6 text-lg text-white/65 max-w-2xl leading-relaxed">
              Stay ahead with expert insights on SEO, analytics, AI search, and
              the latest digital marketing trends from the A2ZDM team.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Featured Article */}
      {featured && (
        <section className="py-12 bg-[#F3EEE1]">
          <div className="max-w-container mx-auto px-5 sm:px-8">
            <Reveal>
              <div className="text-sm font-semibold text-[#E31C79] uppercase tracking-widest mb-5">
                Featured Article
              </div>
            </Reveal>
            <Reveal>
              <Link
                to={`/blog/${featured.slug || featured.id}`}
                className="group grid lg:grid-cols-[1fr_1fr] gap-0 rounded-3xl overflow-hidden border border-[#17171F]/8 bg-white shadow-sm hover:shadow-lg transition-all"
              >
                <div className="relative h-64 lg:h-auto overflow-hidden bg-[#F3EEE1]">
                  <img
                    src={featured.image}
                    alt={featured.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => { e.currentTarget.style.display = "none"; }}
                  />
                  <span className="absolute top-4 left-4 bg-[#E31C79] text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Featured
                  </span>
                </div>
                <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
                  <span className="text-xs font-semibold text-[#2F6F5E] bg-[#2F6F5E]/10 px-3 py-1 rounded-full self-start mb-4">
                    {featured.category}
                  </span>
                  <h2 className="font-display font-bold text-2xl sm:text-3xl text-[#17171F] leading-snug mb-4 group-hover:text-[#2F6F5E] transition-colors">
                    {featured.title}
                  </h2>
                  <p className="text-sm text-[#4A4A5A] leading-relaxed mb-6 line-clamp-3">
                    {featured.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-[#5C5C6F] mb-6">
                    <span className="flex items-center gap-1.5"><User size={12} />{featured.author}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1.5"><Clock size={12} />{featured.readingTime}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1.5"><CalendarDays size={12} />{featured.date}</span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#17171F] group-hover:text-[#F2A93B] transition-colors">
                    Read Article <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </div>
              </Link>
            </Reveal>
          </div>
        </section>
      )}

      {/* Filters + count */}
      <section className="pt-12 pb-6 bg-[#FBF8F3]">
        <div className="max-w-container mx-auto px-5 sm:px-8">
          <div className="flex flex-wrap items-center gap-2.5">
            {BLOG_FILTERS.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => pickFilter(f)}
                className={`px-4 py-2 rounded-full text-sm font-semibold border transition-colors ${
                  filter === f
                    ? "bg-[#17171F] text-white border-[#17171F]"
                    : "bg-white text-[#17171F] border-[#17171F]/15 hover:border-[#17171F]/40"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
          <p className="text-sm text-[#4A4A5A] mt-5">
            Showing {filtered.length}{" "}
            {filtered.length === 1 ? "article" : "articles"}
            {filter !== "All" && (
              <>
                {" "}
                in <span className="font-semibold">{filter}</span>
              </>
            )}
          </p>
        </div>
      </section>

      {/* Cards Grid */}
      <section className="pb-16 bg-[#FBF8F3]">
        <div className="max-w-container mx-auto px-5 sm:px-8">
          {visible.length > 0 ? (
            <RevealGroup className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {visible.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </RevealGroup>
          ) : (
            <div className="rounded-2xl border border-[#17171F]/8 bg-white p-10 text-center text-[#4A4A5A]">
              No articles in this category yet — check back soon.
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-12">
              <button
                type="button"
                disabled={safePage === 1}
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                className="inline-flex items-center gap-1 px-4 py-2 rounded-full border border-[#17171F]/15 bg-white text-sm font-semibold text-[#17171F] hover:border-[#17171F]/40 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronLeft size={15} /> Previous
              </button>
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setPage(i + 1)}
                  aria-current={safePage === i + 1 ? "page" : undefined}
                  className={`w-10 h-10 rounded-full text-sm font-semibold border transition-colors ${
                    safePage === i + 1
                      ? "bg-[#17171F] text-white border-[#17171F]"
                      : "bg-white text-[#17171F] border-[#17171F]/15 hover:border-[#17171F]/40"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
              <button
                type="button"
                disabled={safePage === totalPages}
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                className="inline-flex items-center gap-1 px-4 py-2 rounded-full border border-[#17171F]/15 bg-white text-sm font-semibold text-[#17171F] hover:border-[#17171F]/40 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                Next <ChevronRight size={15} />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 sm:py-20 bg-[#F3EEE1]">
        <div className="max-w-container mx-auto px-5 sm:px-8">
          <Reveal>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight text-[#17171F]">
                Stay Updated with Latest Insights
              </h2>
              <p className="text-[#4A4A5A] mt-4 max-w-xl mx-auto">
                Get monthly digital marketing tips, industry updates, and
                exclusive strategies delivered to your inbox. No spam, ever.
              </p>
              {subscribed ? (
                <p className="inline-flex items-center gap-2 mt-8 text-sm font-semibold text-[#2F6F5E] bg-[#2F6F5E]/10 px-5 py-3 rounded-full">
                  <MailCheck size={16} /> You&apos;re subscribed — welcome aboard!
                </p>
              ) : (
                <form
                  className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mt-8"
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
                    placeholder="Enter your email"
                    className="flex-1 px-5 py-3 rounded-[40px] border border-[#17171F]/15 bg-white text-sm text-[#17171F] placeholder:text-[#4A4A5A]/60 focus:outline-none focus:border-[#F2A93B] focus:ring-2 focus:ring-[#F2A93B]/20 transition-all"
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-1.5 px-6 py-3 rounded-[40px] bg-[#17171F] text-white text-sm font-semibold hover:bg-[#F2A93B] hover:text-[#17171F] transition-colors"
                  >
                    Subscribe <Send size={14} />
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
