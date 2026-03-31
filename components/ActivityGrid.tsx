import HorizontalSeparator from "@/app/ui/HorizontalSeparator";

// This is a Server Component, meaning this fetch never exposes your token to the browser.
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
    next: { revalidate: 3600 }, // Caches for 1 hour to avoid rate limiting
  });

  if (!response.ok) return null;
  const data = await response.json();
  return data?.data?.user?.contributionsCollection?.contributionCalendar;
}

export default async function ActivityGrid() {
  const calendar = await getGithubContributions();

  // Map GitHub's contribution levels to our violet theme
  const getLevelColor = (level: string) => {
    switch (level) {
      case "FIRST_QUARTILE": return "bg-violet-900/60";
      case "SECOND_QUARTILE": return "bg-violet-700/80";
      case "THIRD_QUARTILE": return "bg-violet-500";
      case "FOURTH_QUARTILE": return "bg-violet-400";
      case "NONE":
      default: return "bg-white/[0.03]";
    }
  };

  // Calculate month label positions dynamically
  let monthLabels: { label: string; index: number }[] = [];
  if (calendar) {
    let lastMonth = -1;
    calendar.weeks.forEach((week: any, i: number) => {
      const firstDay = week.contributionDays[0];
      const date = new Date(firstDay.date);
      const month = date.getMonth();

      // If the month changed, record the label and its column index
      if (month !== lastMonth && i < calendar.weeks.length - 2) {
        monthLabels.push({
          label: date.toLocaleString('default', { month: 'short' }),
          index: i
        });
        lastMonth = month;
      }
    });

    // FIX: Overlap prevention for the rolling year edge-case.
    // If the distance between the first and second label is less than 3 columns (< 45px),
    // we chop off the first partial month label to keep the UI clean.
    if (monthLabels.length > 1 && monthLabels[1].index - monthLabels[0].index < 3) {
      monthLabels.shift();
    }
  }

  return (
    <>
      <div className="mt-12 w-full overflow-x-auto pb-4 pt-8 relative [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <div className="w-max min-w-full pr-8">

          <div className="flex justify-between items-end mb-4">
            <p className="font-mono text-[11px] text-white/30 uppercase tracking-widest">
              {calendar ? `${calendar.totalContributions} Contributions in the last year` : "Activity Loading..."}
            </p>
          </div>

          {/* Month Labels Row */}
          {calendar && (
            <div className="relative h-5 text-[10px] font-mono text-white/40 flex w-full">
              {monthLabels.map((m, i) => (
                <span
                  key={i}
                  className="absolute top-0"
                  // Cell width (w-3 = 12px) + gap (3px) = 15px per column
                  style={{ left: `${m.index * 15}px` }}
                >
                  {m.label}
                </span>
              ))}
            </div>
          )}

          <div className="flex gap-[3px]">
            {calendar?.weeks.map((week: any, i: number) => {
              const isLastFewWeeks = i > calendar.weeks.length - 5;
              const tooltipPosition = isLastFewWeeks
                ? "right-0"
                : "left-1/2 -translate-x-1/2";

              return (
                <div key={i} className="flex flex-col gap-[3px]">
                  {week.contributionDays.map((day: any, j: number) => (
                    <div key={j} className="relative group">
                      {/* The Cell */}
                      <div
                        className={`w-3 h-3 rounded-[2px] ${getLevelColor(day.contributionLevel)} transition-all duration-200 hover:ring-1 hover:ring-white/60 cursor-crosshair`}
                      />

                      {/* Custom Tooltip */}
                      <div className={`absolute bottom-full ${tooltipPosition} mb-2 hidden group-hover:block z-50 pointer-events-none`}>
                        <div className="px-3 py-1.5 bg-[#0a0a0c] border border-white/10 rounded-md font-mono text-[10px] text-white/60 whitespace-nowrap shadow-[0_8px_16px_rgba(0,0,0,0.8)]">
                          <span className="text-white font-medium">{day.contributionCount}</span> contributions on {day.date}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              );
            })}

            {/* Fallback mock grid */}
            {!calendar && Array.from({ length: 52 }).map((_, i) => (
              <div key={i} className="flex flex-col gap-[3px]">
                {Array.from({ length: 7 }).map((_, j) => (
                  <div key={j} className="w-3 h-3 rounded-[2px] bg-white/[0.03]" />
                ))}
              </div>
            ))}
          </div>

          {/* Legend */}
          <div className="flex justify-end items-center gap-1.5 mt-3 font-mono text-[10px] text-white/30">
            <span className="mr-1">Less</span>
            <div className="w-3 h-3 rounded-[2px] bg-white/[0.03]" />
            <div className="w-3 h-3 rounded-[2px] bg-violet-900/60" />
            <div className="w-3 h-3 rounded-[2px] bg-violet-700/80" />
            <div className="w-3 h-3 rounded-[2px] bg-violet-500" />
            <div className="w-3 h-3 rounded-[2px] bg-violet-400" />
            <span className="ml-1">More</span>
          </div>

        </div>
      </div>
      <HorizontalSeparator className="mt-16" />
    </>
  );
}