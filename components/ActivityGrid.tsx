import HorizontalSeparator from "@/app/ui/HorizontalSeparator";
import LogoLoop from "@/app/ui/LogoLoop";
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiFigma, SiNodedotjs, SiPostgresql } from 'react-icons/si';

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiFigma />, title: "Figma", href: "https://figma.com" },
  { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
  { node: <SiPostgresql />, title: "PostgreSQL", href: "https://postgresql.org" },
];

async function getGithubContributions() {
  const username = process.env.GITHUB_USERNAME;
  const token = process.env.GITHUB_TOKEN;

  if (!username || !token) {
    console.warn("GitHub credentials missing in .env.local");
    return null;
  }

  const query = `
    query {
      user(login: "${username}") {
        contributionsCollection {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                contributionCount
                date
                contributionLevel
              }
            }
          }
        }
      }
    }
  `;

  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
    next: { revalidate: 3600 },
  });

  if (!response.ok) return null;
  const data = await response.json();
  return data?.data?.user?.contributionsCollection?.contributionCalendar;
}

export default async function ActivityGrid() {
  const calendar = await getGithubContributions();

  const getLevelColor = (level: string) => {
    switch (level) {
      case "FIRST_QUARTILE": return "bg-violet-300 dark:bg-violet-900/60";
      case "SECOND_QUARTILE": return "bg-violet-400 dark:bg-violet-700/80";
      case "THIRD_QUARTILE": return "bg-violet-500 dark:bg-violet-500";
      case "FOURTH_QUARTILE": return "bg-violet-600 dark:bg-violet-400";
      case "NONE":
      default: return "bg-black/[0.04] dark:bg-white/[0.03]";
    }
  };

  let monthLabels: { label: string; index: number }[] = [];
  if (calendar) {
    let lastMonth = -1;
    calendar.weeks.forEach((week: any, i: number) => {
      const firstDay = week.contributionDays[0];
      const date = new Date(firstDay.date);
      const month = date.getMonth();

      if (month !== lastMonth && i < calendar.weeks.length - 2) {
        monthLabels.push({
          label: date.toLocaleString('default', { month: 'short' }),
          index: i
        });
        lastMonth = month;
      }
    });

    if (monthLabels.length > 1 && monthLabels[1].index - monthLabels[0].index < 3) {
      monthLabels.shift();
    }
  }

  return (
    <>
      <div className="flex justify-between items-end mb-4 mt-12">
        <p className="font-mono text-[11px] text-black/40 dark:text-white/30 uppercase tracking-widest">
          <span className="font-semibold text-black/70 dark:text-white/80">
            {calendar?.totalContributions ?? 0}
          </span>{" "}
          Contributions in the last year
        </p>
      </div>
      <div
        data-lenis-prevent="true"
        className="w-full overflow-x-auto pb-4 relative [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] touch-pan-x"
      >
        <div className="min-w-max pr-8">

          {calendar && (
            <div className="relative h-5 text-[10px] font-mono text-black/50 dark:text-white/40 flex w-full transition-colors duration-300">
              {monthLabels.map((m, i) => (
                <span
                  key={i}
                  className="absolute top-0"
                  style={{ left: `${m.index * 15}px` }}
                >
                  {m.label}
                </span>
              ))}
            </div>
          )}

          <div className="flex gap-[3px]">
            {calendar?.weeks.map((week: any, i: number) => {

              // 1. SMART X-AXIS POSITIONING
              // Prevent cutting off on the left or right edges of the scrollable box
              const isFirstFewWeeks = i < 3;
              const isLastFewWeeks = i > calendar.weeks.length - 4;
              const tooltipX = isFirstFewWeeks ? "left-0" : isLastFewWeeks ? "right-0" : "left-1/2 -translate-x-1/2";

              return (
                <div key={i} className="flex flex-col gap-[3px] shrink-0">
                  {week.contributionDays.map((day: any, j: number) => {

                    // 2. SMART Y-AXIS POSITIONING
                    // If it's the top 2 rows, drop the tooltip DOWN so it doesn't clip the ceiling.
                    // Otherwise, pop it UP as usual.
                    const isTopRow = j < 2;
                    const tooltipY = isTopRow ? "top-full mt-2" : "bottom-full mb-2";

                    return (
                      <div key={j} className="relative group outline-none" tabIndex={0}>
                        <div
                          className={`w-3 h-3 rounded-[2px] ${getLevelColor(day.contributionLevel)} transition-all duration-200 group-hover:ring-1 group-focus:ring-1 group-hover:ring-black/40 dark:group-hover:ring-white/60 group-focus:ring-black/40 dark:group-focus:ring-white/60 cursor-crosshair`}
                        />
                        {/* We use our dynamic tooltipX and tooltipY here */}
                        <div className={`absolute ${tooltipX} ${tooltipY} hidden group-hover:block group-focus:block z-[99] pointer-events-none`}>
                          <div className="px-3 py-1.5 bg-white dark:bg-[#0a0a0c] border border-black/10 dark:border-white/10 rounded-md font-mono text-[10px] text-black/60 dark:text-white/60 whitespace-nowrap shadow-[0_8px_16px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_16px_rgba(0,0,0,0.8)] transition-colors duration-300">
                            <span className="text-black dark:text-white font-medium">{day.contributionCount}</span> contributions on {day.date}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            })}

            {!calendar && Array.from({ length: 52 }).map((_, i) => (
              <div key={i} className="flex flex-col gap-[3px] shrink-0">
                {Array.from({ length: 7 }).map((_, j) => (
                  <div key={j} className="w-3 h-3 rounded-[2px] bg-black/[0.04] dark:bg-white/[0.03] transition-colors duration-300" />
                ))}
              </div>
            ))}
          </div>

          <div className="flex justify-end items-center gap-1.5 mt-3 font-mono text-[10px] text-black/40 dark:text-white/30 transition-colors duration-300">
            <span className="mr-1">Less</span>
            <div className="w-3 h-3 rounded-[2px] bg-black/[0.04] dark:bg-white/[0.03]" />
            <div className="w-3 h-3 rounded-[2px] bg-violet-300 dark:bg-violet-900/60" />
            <div className="w-3 h-3 rounded-[2px] bg-violet-400 dark:bg-violet-700/80" />
            <div className="w-3 h-3 rounded-[2px] bg-violet-500 dark:bg-violet-500" />
            <div className="w-3 h-3 rounded-[2px] bg-violet-600 dark:bg-violet-400" />
            <span className="ml-1">More</span>
          </div>

        </div>
      </div>

      <div className="w-full pt-10">
        <LogoLoop
          logos={techLogos}
          speed={40}
          direction="left"
          logoHeight={32}
          gap={60}
          hoverSpeed={10}
          scaleOnHover={true}
          fadeOut={true}
          fadeOutColor="transparent"
          ariaLabel="Technology partners"
          className="text-black/50 hover:text-black/90 dark:text-white/50 dark:hover:text-white/90 transition-colors duration-500 py-4"
        />
      </div>
      <HorizontalSeparator className="mt-10" />
    </>
  );
}