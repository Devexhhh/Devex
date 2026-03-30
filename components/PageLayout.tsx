export default function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen w-full py-5 selection:bg-violet-500/30 overflow-x-hidden">

      {/* THE SCHEMATIC HUD OVERLAY (Fixed to viewport, sits behind content but over Aurora) */}
      <div className="fixed inset-0 pointer-events-none z-0 flex justify-center">

        {/* Narrow Left Striped Track (48px wide) */}
        {/* border-l creates the outer boundary line, the center track provides the inner line */}
        <div className="hidden lg:block w-[40px] shrink-0 border-l border-white/10 diagonal-stripes" />

        {/* Center Content Track (800px) */}
        <div className="relative w-full max-w-[800px] shrink-0 border-x border-transparent lg:border-white/10">
          {/* Top Area Dotted Grid (like the reference image header) */}
          <div className="absolute top-0 w-full h-[400px] bg-dot-grid mask-fade-out" />
        </div>

        {/* Narrow Right Striped Track (48px wide) */}
        {/* border-r creates the outer boundary line */}
        <div className="hidden lg:block w-[40px] shrink-0 border-r border-white/10 diagonal-stripes" />

      </div>

      {/* MAIN CONTENT CONTAINER */}
      {/* We wrap children in a matching 800px column so it aligns perfectly with the HUD above */}
      <main className="relative z-10 w-full max-w-[800px] mx-auto flex flex-col px-4 md:px-0">
        {children}
      </main>

    </div>
  );
}