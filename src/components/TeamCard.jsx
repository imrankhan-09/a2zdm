import { GraduationCap, Sparkles } from "lucide-react";
import { RevealItem } from "./Reveal";
import { LinkedinIcon, TwitterIcon, GitHubIcon } from "./SocialIcons";

function initials(name) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("");
}

/**
 * Professional team card. Renders a single member — no invented members.
 */
export default function TeamCard({ member }) {
  return (
    <RevealItem className="h-full">
      <article className="h-full rounded-xl border border-line bg-white p-8 hover:border-ink hover:-translate-y-1 transition-all duration-300">
        <div className="flex flex-col sm:flex-row sm:items-start gap-6">
          <div className="w-20 h-20 shrink-0 rounded-full bg-ink text-paper flex items-center justify-center font-display font-semibold text-xl">
            {initials(member.name)}
          </div>
          <div className="flex-1">
            <h3 className="font-display font-semibold text-2xl">{member.name}</h3>
            <p className="text-sm font-semibold text-signal mt-1">
              {member.role}
            </p>
            <div className="flex flex-wrap gap-2 mt-3">
              <span className="text-xs font-semibold text-teal bg-tealdim px-2.5 py-1 rounded-full">
                {member.experience} experience
              </span>
              <span className="text-xs font-semibold text-inksoft bg-surface border border-line px-2.5 py-1 rounded-full">
                {member.expertise}
              </span>
            </div>
          </div>
          <div className="flex gap-2.5">
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${member.name} on LinkedIn`}
              className="w-9 h-9 rounded-full border border-line flex items-center justify-center text-inksoft hover:bg-ink hover:text-paper hover:border-ink transition-colors"
            >
              <LinkedinIcon />
            </a>
            {member.github ? (
              <a
                href={member.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${member.name} on GitHub`}
                className="w-9 h-9 rounded-full border border-line flex items-center justify-center text-inksoft hover:bg-ink hover:text-paper hover:border-ink transition-colors"
              >
                <GitHubIcon />
              </a>
            ) : (
              <a
                href={member.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${member.name} on X (Twitter)`}
                className="w-9 h-9 rounded-full border border-line flex items-center justify-center text-inksoft hover:bg-ink hover:text-paper hover:border-ink transition-colors"
              >
                <TwitterIcon />
              </a>
            )}
          </div>
        </div>

        <p className="text-sm text-inksoft leading-relaxed mt-6">
          &ldquo;{member.description}&rdquo;
        </p>

        {(member.education || member.funFact) && (
          <div className="grid sm:grid-cols-2 gap-5 mt-6 pt-6 border-t border-line">
            {member.education && (
              <div>
                <div className="flex items-center gap-1.5 text-xs font-semibold text-slate uppercase tracking-wide mb-2">
                  <GraduationCap size={14} /> Education
                </div>
                <p className="text-sm text-inksoft">{member.education}</p>
              </div>
            )}
            {member.funFact && (
              <div>
                <div className="flex items-center gap-1.5 text-xs font-semibold text-slate uppercase tracking-wide mb-2">
                  <Sparkles size={14} /> Fun Fact
                </div>
                <p className="text-sm text-inksoft italic">
                  &ldquo;{member.funFact}&rdquo;
                </p>
              </div>
            )}
          </div>
        )}

        <div className="mt-5">
          <div className="text-xs font-semibold text-slate uppercase tracking-wide mb-2">
            Certifications
          </div>
          <ul className="flex flex-wrap gap-2">
            {member.certifications.map((c) => (
              <li
                key={c}
                className="text-xs font-medium text-signal bg-signaldim px-2.5 py-1 rounded-full"
              >
                {c}
              </li>
            ))}
          </ul>
        </div>
      </article>
    </RevealItem>
  );
}
