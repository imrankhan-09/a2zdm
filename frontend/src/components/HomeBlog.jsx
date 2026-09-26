import { Link } from "react-router-dom";
import { ArrowRight, Clock, User, ArrowUpRight } from "lucide-react";
import Reveal, { RevealGroup, RevealItem } from "./Reveal";
import { BLOG_POSTS } from "../data/site";

export default function HomeBlog() {
  const latestPosts = BLOG_POSTS.slice(0, 3);

  return (
    <section className="py-20 sm:py-28 bg-[#FBF8F3]">
      <div className="max-w-container mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-14">
          <Reveal className="max-w-2xl">
            <div className="text-xs font-bold text-[#2F6F5E] uppercase tracking-wider mb-3">
              Knowledge & Insights
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#17171F]">
              Latest From Our Blog
            </h2>
            <p className="text-[#5C5C6F] text-base sm:text-lg mt-4 leading-relaxed">
              Actionable guides on SEO, digital analytics, and search technology from the A2ZDM team.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#17171F] hover:text-[#2F6F5E] transition-colors whitespace-nowrap"
            >
              Explore all articles <ArrowRight size={15} />
            </Link>
          </Reveal>
        </div>

        <RevealGroup className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {latestPosts.map((post) => (
            <RevealItem key={post.slug || post.id} className="h-full">
              <article className="group h-full flex flex-col rounded-[24px] border border-[rgba(20,20,28,0.10)] bg-white overflow-hidden hover:border-[#17171F]/30 hover:-translate-y-1.5 transition-all duration-300 shadow-[0_4px_24px_-6px_rgba(20,20,28,0.05)] hover:shadow-[0_12px_36px_-8px_rgba(20,20,28,0.10)]">
                {/* Image */}
                <Link
                  to={`/blog/${post.slug || post.id}`}
                  className="relative h-48 sm:h-52 w-full overflow-hidden block bg-[#F3EEE1]"
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
                  <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-md text-[#2F6F5E] text-xs font-semibold px-3 py-1 rounded-full shadow-xs">
                    {post.category}
                  </span>
                </Link>

                {/* Content */}
                <div className="flex-1 flex flex-col p-6 sm:p-7">
                  <div className="flex items-center gap-3 text-xs text-[#5C5C6F] mb-3">
                    <span className="inline-flex items-center gap-1">
                      <User size={12} /> {post.author}
                    </span>
                    <span>•</span>
                    <span className="inline-flex items-center gap-1">
                      <Clock size={12} /> {post.readingTime}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-lg sm:text-xl text-[#17171F] group-hover:text-[#2F6F5E] transition-colors leading-snug mb-3">
                    <Link to={`/blog/${post.slug || post.id}`}>
                      {post.title}
                    </Link>
                  </h3>

                  <p className="text-sm text-[#5C5C6F] leading-relaxed line-clamp-2 mb-6 flex-1">
                    {post.excerpt}
                  </p>

                  <div className="pt-4 border-t border-[rgba(20,20,28,0.08)] flex items-center justify-between">
                    <Link
                      to={`/blog/${post.slug || post.id}`}
                      className="inline-flex items-center gap-1 text-sm font-semibold text-[#17171F] group-hover:text-[#2F6F5E] transition-colors"
                    >
                      Read Article
                      <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>
                    <span className="text-xs text-[#5C5C6F]/70">{post.date}</span>
                  </div>
                </div>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
