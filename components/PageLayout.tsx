export default function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen w-full flex justify-center">

      {/* Left hatch gutter — fills space left of the center column */}
      <div
        className="hatch-bg hidden lg:block fixed top-0 bottom-0 left-0 pointer-events-none z-0"
        style={{
          width: "calc((100vw - 768px) / 2)",
          borderRight: "1px solid rgba(255,255,255,0.08)",
        }}
      />

      {/* Right hatch gutter */}
      <div
        className="hatch-bg hidden lg:block fixed top-0 bottom-0 right-0 pointer-events-none z-0"
        style={{
          width: "calc((100vw - 768px) / 2)",
          borderLeft: "1px solid rgba(255,255,255,0.08)",
        }}
      />

      {/* Centered content column */}
      <div className="relative z-10 w-full max-w-3xl">
        {children}
      </div>

    </div>
  );
}
