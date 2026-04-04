import { EXPERIENCE, EDUCATION } from "@/lib/data";
import Accordion from "./Accordion";
import HorizontalSeparator from "@/app/ui/HorizontalSeparator";

export default function ExperienceSection() {
  return (
    <>
      <section id="experience" className="px-4 sm:px-6 md:px-8 max-w-7xl mx-auto w-full flex flex-col gap-12 sm:gap-16 mt-12 sm:mt-16">

        {/* Experience Block */}
        <div>
          <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
            <span className="font-mono text-[12px] sm:text-[13px] text-black/40 dark:text-white/40 transition-colors duration-300">01 ■</span>
            <h2 className="font-mono text-[16px] sm:text-[18px] text-black dark:text-[#f1f0ff] transition-colors duration-300">Experience</h2>
          </div>

          <div className="flex flex-col gap-3 sm:gap-4">
            {EXPERIENCE.map((exp, i) => (
              <Accordion
                key={i}
                title={exp.role}
                period={exp.period}
                icon={exp.icon}
                descItems={exp.descItems}
                tags={exp.tags}
                defaultOpen={i === 0}
              />
            ))}
          </div>
        </div>

        <HorizontalSeparator className="mt-2 sm:mt-5" />

        {/* Education Block */}
        <div>
          <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
            <span className="font-mono text-[12px] sm:text-[13px] text-black/40 dark:text-white/40 transition-colors duration-300">02 ■</span>
            <h2 className="font-mono text-[16px] sm:text-[18px] text-black dark:text-[#f1f0ff] transition-colors duration-300">Education</h2>
          </div>

          <div className="flex flex-col gap-3 sm:gap-4">
            {EDUCATION.map((edu, i) => (
              <Accordion
                key={i}
                title={edu.degree}
                period={edu.period}
                icon={edu.icon}
                descItems={edu.descItems}
                tags={edu.tags}
                defaultOpen={true}
                imageKey={edu.imageKey as any}
              />
            ))}
          </div>
        </div>
      </section>
      <HorizontalSeparator className="mt-12 sm:mt-16" />
    </>
  );
}