import { GRID_CELLS } from "@/lib/data";

export default function ActivityGrid() {
  return (
    <div className="fade-in fade-in-5 mt-16 w-full">
      <p className="font-mono text-[10px] text-white/15 mb-3 tracking-[0.12em] uppercase">
        Activity — past year
      </p>
      {/* Fixed cell size so grid never blows up */}
      <div className="flex flex-wrap gap-[3px]">
        {GRID_CELLS.map((cell) => (
          <div
            key={cell.id}
            className="rounded-[2px] shrink-0"
            style={{
              width: "28px",
              height: "28px",
              background: cell.active
                ? `rgba(124,58,237,${(0.25 + cell.intensity * 0.7).toFixed(3)})`
                : "rgba(255,255,255,0.04)",
            }}
          />
        ))}
      </div>
    </div>
  );
}
