export default function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen w-full py-5 selection:bg-violet-500/30 overflow-x-hidden">

      {/* THE SCHEMATIC HUD OVERLAY */}
      <div className="fixed inset-0 pointer-events-none z-0 flex justify-center transition-colors duration-300">

        {/* Left Striped Track - 20px on mobile, 40px on desktop. border-x frames both sides! */}
        <div className="w-[20px] md:w-[40px] shrink-0 border-x border-black/10 dark:border-white/10 diagonal-stripes opacity-40 md:opacity-100 transition-opacity" />

        {/* Center Content Track - Uses flex-1 so it perfectly fills space between stripes on mobile */}
        <div className="relative flex-1 max-w-[800px] border-x border-transparent lg:border-black/5 dark:lg:border-white/5 transition-colors duration-300">
          {/* Top Area Dotted Grid */}
          <div className="absolute top-0 w-full h-[400px] bg-dot-grid mask-fade-out" />
        </div>

        {/* Right Striped Track - 20px on mobile, 40px on desktop. border-x frames both sides! */}
        <div className="w-[20px] md:w-[40px] shrink-0 border-x border-black/10 dark:border-white/10 diagonal-stripes opacity-40 md:opacity-100 transition-opacity" />

      </div>

      {/* MAIN CONTENT CONTAINER */}
      <main className="relative z-10 w-full max-w-[800px] mx-auto flex flex-col px-4 sm:px-6 lg:px-0">
        {children}
      </main>

    </div>
  );
}