import Image from "next/image";
import { projects, type Project } from "@/data/projects";
import Section from "./Section";

const DOT_TONE: Record<Project["tone"], string> = {
  live: "bg-live",
  off: "bg-off",
  neutral: "bg-muted",
};

function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      id={project.slug}
      className="flex flex-col overflow-hidden rounded-xl border border-line bg-bg"
    >
      <div className="flex h-32 items-center justify-center border-b border-line bg-panel">
        <Image
          src={project.banner}
          alt={`${project.name} banner`}
          width={1600}
          height={620}
          className="h-full w-full object-contain"
        />
      </div>

      <div className="flex flex-1 flex-col p-3.5">
        <div className="flex items-center justify-between gap-2">
          <div className="flex min-w-0 items-center gap-2">
            <Image
              src={project.logo}
              alt=""
              aria-hidden="true"
              width={96}
              height={96}
              className="h-5 w-5 shrink-0 rounded object-contain"
            />
            <h3 className="truncate text-[0.9375rem] font-semibold text-title">{project.name}</h3>
          </div>
          <span className="inline-flex shrink-0 items-center gap-1.5 text-[0.8125rem] text-muted">
            <span
              aria-hidden="true"
              className={`h-1.5 w-1.5 rounded-full ${DOT_TONE[project.tone]}`}
            />
            {project.status}
          </span>
        </div>

        <p className="mt-2 text-sm leading-relaxed text-body">{project.blurb}</p>
        <p className="mt-2 text-[0.8125rem] leading-relaxed text-muted">{project.detail}</p>

        <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Technologies">
          {project.stack.map((tech) => (
            <li
              key={tech}
              className="rounded-md border border-line bg-chip px-2 py-0.5 text-[0.8125rem] text-body"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap gap-2 pt-4">
          {project.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-[9px] border border-line bg-chip px-2.5 py-1.5 text-[0.8125rem] font-medium text-title transition-colors hover:border-muted/40"
            >
              {link.label}
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
          ))}
        </div>
      </div>
    </article>
  );
}

export default function Building() {
  return (
    <Section id="projects" title="What I've built.">
      <div className="grid gap-3 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </Section>
  );
}
