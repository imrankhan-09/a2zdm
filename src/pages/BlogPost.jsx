import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, CalendarDays, Clock, CheckCircle2 } from "lucide-react";
import { BLOG_POSTS, ALL_BLOG_POSTS } from "../data/site";
import CTASection from "../components/CTASection";
import Reveal from "../components/Reveal";
import NotFound from "./NotFound";

export default function BlogPost() {
  const { slug } = useParams();
  const pool = ALL_BLOG_POSTS || BLOG_POSTS;
  const post = pool.find(
    (p) =>
      p.slug === slug ||
      p.id === slug ||
      (p.aliases && p.aliases.includes(slug))
  );

  useEffect(() => {
    window.scrollTo(0, 0);
    if (post) {
      document.title = `${post.title} | A2ZDM Blog`;
    }
  }, [post, slug]);

  if (!post) {
    return <NotFound />;
  }

  const relatedPosts = BLOG_POSTS.filter((p) => p.id !== post.id).slice(0, 2);

  return (
    <>
      <article className="pt-12 pb-20 sm:pt-16 sm:pb-24 bg-[#FBF8F3]">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          {/* Breadcrumbs */}
          <Reveal>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-[#5C5C6F] mb-6">
              <Link to="/" className="hover:text-[#17171F] transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link to="/blog" className="hover:text-[#17171F] transition-colors">
                Blog
              </Link>
              <span>/</span>
              <span className="text-[#17171F] font-medium truncate max-w-[200px] sm:max-w-none">
                {post.title}
              </span>
            </div>

            <Link
              to="/blog"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#2F6F5E] hover:text-[#17171F] transition-colors mb-6"
            >
              <ArrowLeft size={14} /> Back to all articles
            </Link>

            {/* Category badge & metadata */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="text-xs font-semibold text-[#2F6F5E] bg-[#2F6F5E]/10 px-3 py-1 rounded-full border border-[#2F6F5E]/15">
                {post.category}
              </span>
              <span className="inline-flex items-center gap-1 text-xs text-[#5C5C6F]">
                <Clock size={12} /> {post.readingTime}
              </span>
              <span className="inline-flex items-center gap-1 text-xs text-[#5C5C6F]">
                <CalendarDays size={12} /> {post.date}
              </span>
            </div>

            <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-[#17171F] tracking-tight leading-[1.15] mb-6">
              {post.title}
            </h1>

            {/* Author */}
            <div className="flex items-center gap-3 pb-8 mb-8 border-b border-[rgba(20,20,28,0.10)]">
              <div className="w-10 h-10 rounded-full bg-[#17171F] text-white flex items-center justify-center font-bold text-sm">
                {(post.author || "IP")
                  .split(" ")
                  .map((w) => w[0])
                  .join("")
                  .slice(0, 2)}
              </div>
              <div>
                <div className="text-sm font-bold text-[#17171F]">{post.author}</div>
                <div className="text-xs text-[#5C5C6F]">Digital Strategist at A2ZDM</div>
              </div>
            </div>
          </Reveal>

          {/* Featured Image */}
          <Reveal>
            <div className="relative rounded-[24px] overflow-hidden bg-[#F3EEE1] border border-[rgba(20,20,28,0.10)] shadow-sm mb-10">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-auto max-h-[480px] object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>
          </Reveal>

          {/* Key Insights Box */}
          {post.keyPoints && post.keyPoints.length > 0 && (
            <Reveal className="mb-10">
              <div className="rounded-[20px] bg-[#F3EEE1] border border-[rgba(20,20,28,0.10)] p-6 sm:p-8">
                <h2 className="font-display font-bold text-lg text-[#17171F] mb-4 flex items-center gap-2">
                  <CheckCircle2 size={20} className="text-[#2F6F5E]" />
                  Key Takeaways
                </h2>
                <ul className="space-y-3 text-sm text-[#17171F] leading-relaxed">
                  {post.keyPoints.map((point, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2F6F5E] mt-2 shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          )}

          {/* Article Body Overview & Content */}
          <Reveal className="prose prose-slate max-w-none text-[#17171F] leading-relaxed space-y-6 text-base sm:text-lg">
            {post.content && post.content.length > 0 ? (
              <div className="space-y-6 text-[#17171F]">
                {post.content.map((block, idx) => {
                  if (block.type === "h2") {
                    return (
                      <h2
                        key={idx}
                        className="font-display font-bold text-2xl sm:text-3xl text-[#17171F] pt-6 pb-2 border-b border-[rgba(20,20,28,0.08)] tracking-tight leading-snug"
                      >
                        {block.text}
                      </h2>
                    );
                  }
                  if (block.type === "h3") {
                    return (
                      <h3
                        key={idx}
                        className="font-display font-bold text-xl sm:text-2xl text-[#17171F] pt-4 pb-1"
                      >
                        {block.text}
                      </h3>
                    );
                  }
                  if (block.type === "p") {
                    return (
                      <p
                        key={idx}
                        className="text-base sm:text-lg text-[#3F3F4E] leading-relaxed"
                      >
                        {block.boldPrefix && (
                          <strong className="text-[#17171F] font-bold mr-1">
                            {block.boldPrefix}
                          </strong>
                        )}
                        {block.text}
                      </p>
                    );
                  }
                  if (block.type === "image") {
                    return (
                      <div
                        key={idx}
                        className="my-8 rounded-2xl overflow-hidden border border-[rgba(20,20,28,0.10)] bg-[#F3EEE1] shadow-xs"
                      >
                        <img
                          src={block.src}
                          alt={block.alt || "Article illustration"}
                          className="w-full h-auto object-cover max-h-[480px]"
                          onError={(e) => {
                            e.currentTarget.style.display = "none";
                          }}
                        />
                        {block.caption && (
                          <p className="text-xs text-center text-[#5C5C6F] py-2 px-4 italic">
                            {block.caption}
                          </p>
                        )}
                      </div>
                    );
                  }
                  if (block.type === "ul") {
                    return (
                      <ul
                        key={idx}
                        className="space-y-2.5 my-4 list-disc pl-6 text-base sm:text-lg text-[#3F3F4E] leading-relaxed"
                      >
                        {block.items.map((item, itemIdx) => (
                          <li key={itemIdx}>{item}</li>
                        ))}
                      </ul>
                    );
                  }
                  if (block.type === "ol") {
                    return (
                      <ol
                        key={idx}
                        className="space-y-2.5 my-4 list-decimal pl-6 text-base sm:text-lg text-[#3F3F4E] leading-relaxed"
                      >
                        {block.items.map((item, itemIdx) => {
                          if (typeof item === "string" && item.startsWith("http")) {
                            return (
                              <li key={itemIdx}>
                                <a
                                  href={item}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-[#2F6F5E] hover:text-[#17171F] hover:underline underline-offset-4 font-medium inline-flex items-center gap-1 break-all"
                                >
                                  {item} <ArrowUpRight size={13} className="shrink-0 inline" />
                                </a>
                              </li>
                            );
                          }
                          return <li key={itemIdx}>{item}</li>;
                        })}
                      </ol>
                    );
                  }
                  if (block.type === "tags") {
                    return (
                      <div key={idx} className="pt-6 mt-8 border-t border-[rgba(20,20,28,0.10)]">
                        <div className="text-xs font-semibold uppercase tracking-wider text-[#5C5C6F] mb-3">
                          Tags
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {block.items.map((tag, tIdx) => (
                            <span
                              key={tIdx}
                              className="text-xs font-medium text-[#17171F] bg-[#F3EEE1] border border-[rgba(20,20,28,0.12)] px-3 py-1.5 rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    );
                  }
                  return null;
                })}
              </div>
            ) : (
              <>
                <p className="text-xl font-medium text-[#17171F] leading-relaxed">
                  {post.excerpt}
                </p>
                {post.overview && (
                  <p className="text-base sm:text-lg text-[#5C5C6F] leading-relaxed">
                    {post.overview}
                  </p>
                )}
              </>
            )}

            {/* Read on live site attribution */}
            <div className="my-10 p-6 rounded-[20px] bg-white border border-[rgba(20,20,28,0.10)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="text-xs font-semibold text-[#5C5C6F] uppercase tracking-wider mb-1">
                  Authentic Publication Reference
                </div>
                <div className="text-sm font-semibold text-[#17171F]">
                  Published originally by A2ZDM on {post.date}
                </div>
              </div>
              {post.link && (
                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2.5 rounded-full bg-[#F3EEE1] hover:bg-[#17171F] hover:text-white text-[#17171F] transition-colors"
                >
                  View original on a2zdm.com <ArrowUpRight size={13} />
                </a>
              )}
            </div>
          </Reveal>

          {/* Related Articles */}
          <div className="mt-16 pt-12 border-t border-[rgba(20,20,28,0.10)]">
            <h3 className="font-display font-bold text-2xl text-[#17171F] mb-6">
              Related Articles
            </h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {relatedPosts.map((r) => (
                <Link
                  key={r.id}
                  to={`/blog/${r.slug || r.id}`}
                  className="group rounded-[20px] border border-[rgba(20,20,28,0.10)] bg-white p-6 hover:border-[#17171F]/30 hover:-translate-y-1 transition-all"
                >
                  <div className="text-xs font-semibold text-[#2F6F5E] mb-2">{r.category}</div>
                  <h4 className="font-display font-bold text-base text-[#17171F] group-hover:text-[#2F6F5E] transition-colors line-clamp-2 mb-2">
                    {r.title}
                  </h4>
                  <div className="text-xs text-[#5C5C6F] flex items-center gap-2">
                    <span>{r.author}</span>
                    <span>•</span>
                    <span>{r.readingTime}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </article>

      <CTASection />
    </>
  );
}
