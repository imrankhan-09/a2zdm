import { Link } from "react-router-dom";
import { ArrowUpRight, CalendarDays, Clock, User } from "lucide-react";
import { RevealItem } from "./Reveal";

/**
 * Modern, accessible blog card:
 * image with category overlay, reading time, author, title,
 * authentic excerpt, date, and internal link to /blog/:slug.
 */
export default function BlogCard({ post }) {
  const postUrl = `/blog/${post.slug || post.id}`;

  return (
    <RevealItem className="h-full">
      <article className="group h-full flex flex-col rounded-[24px] border border-[rgba(20,20,28,0.10)] bg-white overflow-hidden hover:border-[#17171F]/30 hover:-translate-y-1.5 transition-all duration-300 shadow-[0_4px_24px_-6px_rgba(20,20,28,0.05)] hover:shadow-[0_12px_36px_-8px_rgba(20,20,28,0.10)]">
        <Link
          to={postUrl}
          className="relative block h-52 w-full overflow-hidden bg-[#F3EEE1]"
          aria-label={post.title}
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
            <Link to={postUrl}>
              {post.title}
            </Link>
          </h3>

          <p className="text-sm text-[#5C5C6F] leading-relaxed mb-6 flex-1 line-clamp-3">
            {post.excerpt}
          </p>

          <div className="pt-4 border-t border-[rgba(20,20,28,0.08)] flex items-center justify-between">
            <Link
              to={postUrl}
              className="inline-flex items-center gap-1 text-sm font-semibold text-[#17171F] group-hover:text-[#2F6F5E] transition-colors"
            >
              Read Article
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
            <span className="inline-flex items-center gap-1 text-xs text-[#5C5C6F]/70">
              <CalendarDays size={12} /> {post.date}
            </span>
          </div>
        </div>
      </article>
    </RevealItem>
  );
}
