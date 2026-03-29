export default function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    // Notice we removed the background color here
    <div className="relative min-h-screen w-full flex justify-center bg-transparent text-white selection:bg-violet-500/30">

      {/* Left hatch gutter */}
      <div
        className="hidden lg:block fixed top-0 bottom-0 left-0 pointer-events-none z-0"
        style={{
          width: "calc((100vw - 768px) / 3)",
          borderRight: "1px solid rgba(255,255,255,0.05)",
          backgroundImage: "repeating-linear-gradient(45deg, rgba(255,255,255,0.02) 0, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 10px)"
        }}
      />

      {/* Right hatch gutter */}
      <div
        className="hidden lg:block fixed top-0 bottom-0 right-0 pointer-events-none z-0"
        style={{
          width: "calc((100vw - 768px) / 3)",
          borderLeft: "1px solid rgba(255,255,255,0.05)",
          backgroundImage: "repeating-linear-gradient(45deg, rgba(255,255,255,0.02) 0, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 10px)"
        }}
      />

      {/* Centered content column */}
      <div className="relative z-10 w-full max-w-4xl pt-24 pb-12">
        {children}
      </div>
    </div>
  );
}