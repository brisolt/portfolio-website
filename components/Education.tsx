import { awards, education } from "@/data/education";
import Section from "./Section";

export default function Education() {
  return (
    <>
      <Section id="education" title="My education.">
        <ul>
          {education.map((entry) => (
            <li
              key={entry.school}
              className="flex items-start justify-between gap-3 border-b border-line-soft py-3 last:border-b-0"
            >
              <div className="min-w-0">
                <p className="text-[0.9375rem] font-semibold text-title">{entry.school}</p>
                <p className="text-sm text-body">{entry.credential}</p>
                {entry.detail && <p className="text-[0.8125rem] text-muted">{entry.detail}</p>}
              </div>
              <p className="shrink-0 text-right text-[0.8125rem] font-semibold text-title">
                {entry.timeframe}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="awards" title="Awards.">
        <ul className="space-y-3">
          {awards.map((award) => (
            <li key={award.event}>
              <p className="text-[0.9375rem] font-semibold text-title">
                {award.href ? (
                  <a
                    href={award.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 underline decoration-line underline-offset-4 transition-colors hover:decoration-muted"
                  >
                    {award.event}
                    <svg
                      aria-hidden="true"
                      width="10"
                      height="10"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M7 17 17 7M9 7h8v8" />
                    </svg>
                  </a>
                ) : (
                  award.event
                )}
              </p>
              <ul className="mt-1 space-y-1">
                {award.results.map((result) => (
                  <li key={result} className="flex gap-2 text-sm text-body">
                    <span
                      aria-hidden="true"
                      className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-muted"
                    />
                    {result}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
