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

  // Map GitHub's contribution levels to our harsh grayscale aesthetic
  const getLevelColor = (level: string) => {
    switch (level) {
      case "FIRST_QUARTILE": return "bg-white/[0.25]";
      case "SECOND_QUARTILE": return "bg-white/[0.5]";
      case "THIRD_QUARTILE": return "bg-white/[0.75]";
      case "FOURTH_QUARTILE": return "bg-white";
      case "NONE":
      default: return "bg-white/[0.03]";
    }
  };

  return (
    // Added classes to obliterate the scrollbar across all browsers
    <div className="mt-12 w-full overflow-x-auto pb-4 pt-8 relative [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      {/* Added pr-8 so the grid doesn't slam against the right edge when fully scrolled */}
      <div className="w-max min-w-full pr-8">

        <div className="flex justify-between items-end mb-3">
          <p className="font-mono text-[11px] text-white/30 uppercase tracking-widest">
            {calendar ? `${calendar.totalContributions} Contributions in the last year` : "Activity Loading..."}
          </p>
        </div>

        <div className="flex gap-[3px]">
          {calendar?.weeks.map((week: any, i: number) => {
            // Smart tooltip positioning: if it's in the last 4 weeks, align it to the right 
            // instead of centering it, so it never clips outside the scroll container.
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

        <div className="flex justify-end items-center gap-1.5 mt-3 font-mono text-[10px] text-white/30">
          <span className="mr-1">Less</span>
          <div className="w-3 h-3 rounded-[2px] bg-white/[0.03]" />
          <div className="w-3 h-3 rounded-[2px] bg-white/[0.25]" />
          <div className="w-3 h-3 rounded-[2px] bg-white/[0.5]" />
          <div className="w-3 h-3 rounded-[2px] bg-white/[0.75]" />
          <div className="w-3 h-3 rounded-[2px] bg-white" />
          <span className="ml-1">More</span>
        </div>

      </div>
    </div>
  );
}