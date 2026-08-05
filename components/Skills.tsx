import { skills } from "@/data/skills";
import Section from "./Section";

export default function Skills() {
  return (
    <Section id="skills" title="My skills.">
      <ul className="flex flex-wrap gap-1.5">
        {skills.map((skill) => (
          <li
            key={skill}
            className="rounded-md border border-line bg-chip px-2 py-1 text-[0.8125rem] text-body"
          >
            {skill}
          </li>
        ))}
      </ul>
    </Section>
  );
}
