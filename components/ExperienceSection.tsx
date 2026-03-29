import { EXPERIENCE, EDUCATION } from "@/lib/data";
import Accordion from "./Accordion";

export default function ExperienceSection() {
  return (
    <section id="experience" className="px-6 py-16 flex flex-col gap-16">

      {/* Experience Block */}
      <div>
        <div className="flex items-center gap-4 mb-8">
          <span className="font-mono text-[13px] text-white/40">01 ■</span>
          <h2 className="font-mono text-[18px] text-[#f1f0ff]">Experience</h2>
        </div>

        <div className="flex flex-col gap-4">
          {EXPERIENCE.map((exp, i) => (
            <Accordion
              key={i}
              title={exp.role}
              period={exp.period}
              icon={exp.icon}
              descItems={exp.descItems}
              tags={exp.tags}
              defaultOpen={i === 0} // Keeps the very first item open by default
            />
          ))}
        </div>
      </div>

      {/* Education Block */}
      <div>
        <div className="flex items-center gap-4 mb-8">
          <span className="font-mono text-[13px] text-white/40">02 ■</span>
          <h2 className="font-mono text-[18px] text-[#f1f0ff]">Education</h2>
        </div>

        <div className="flex flex-col gap-4">
          {EDUCATION.map((edu, i) => (
            <Accordion
              key={i}
              title={edu.degree}
              period={edu.period}
              icon={edu.icon}
              descItems={edu.descItems}
              tags={edu.tags}
              defaultOpen={true} // The screenshot showed it open, adjust as you want
            />
          ))}
        </div>
      </div>

    </section>
  );
}