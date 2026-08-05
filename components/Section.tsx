import Reveal from "./Reveal";

// A titled band: full-bleed dashed rule on top, heading, then content.
// Matches the "My experience." / "My skills." pattern.
export default function Section({
  id,
  title,
  action,
  children,
}: {
  id: string;
  title: string;
  action?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="rule scroll-mt-8">
      <Reveal>
        <div className="rule flex items-center justify-between px-3 py-3.5">
          <h2 className="text-[1.0625rem] font-semibold tracking-tight text-title">{title}</h2>
          {action}
        </div>
        <div className="px-3 py-4">{children}</div>
      </Reveal>
    </section>
  );
}
