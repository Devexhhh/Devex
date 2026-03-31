import HorizontalSeparator from "@/app/ui/HorizontalSeparator";
import ActivityGrid from "./ActivityGrid";
import HoverButton from "@/app/ui/HoverButton";

export default function HeroSection() {

  // Data array for your social buttons
  const connectLinks = [
    {
      label: "GitHub",
      href: "https://github.com/yourusername",
      icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.379.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z" /></svg>,
      previewImage: "/github-preview.png" // Save a screenshot in your /public folder
    },
    {
      label: "Twitter",
      href: "https://twitter.com/yourusername",
      icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" /></svg>,
      previewImage: "/twitter-preview.png"
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/yourusername",
      icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>,
      previewImage: "/linkedin-preview.png"
    },
    {
      label: "Mail",
      href: "mailto:hello@yoursite.com",
      icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>,
      previewText: "hello@yoursite.com" // Shows text instead of an image
    },
    {
      label: "Resume",
      href: "/resume.pdf",
      icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>,
      previewText: "Download PDF"
    }
  ];

  return (
    <>
      <section id="hero" className="pt-28 pb-24 px-6">
        <p className="font-mono text-[13px] text-white/40 mb-2 mt-5">
          Namaste. I&apos;m
        </p>

        <h1 className="font-sans font-medium text-[#f1f0ff] mb-8" style={{ fontSize: "clamp(32px, 5vw, 44px)" }}>
          Vansh <span className="text-white/30 font-light">— A Design Engineer</span>
        </h1>

        <p className="font-mono text-[14px] text-white/60 leading-[1.8] max-w-[600px] mb-6">
          I build interfaces that look good and feel effortless to use. Designing in code, I bring experiences to life with <span className="text-white border-b border-white/20 pb-[1px]">Motion</span>.
        </p>

        <p className="font-mono text-[14px] text-white/60 leading-[1.8] max-w-[600px] mb-10">
          If you like my work or just want to chat tech, I&apos;m around.
        </p>

        {/* --- Header & Buttons Container --- */}
        <div className="mb-16">
          <h3 className="font-mono text-[14px] text-white/90 mb-4">Connect</h3>

          <div className="flex gap-2 flex-wrap font-mono">
            {connectLinks.map((link) => (
              <HoverButton
                key={link.label}
                href={link.href}
                icon={link.icon}
                label={link.label}
                previewImage={link.previewImage}
                previewText={link.previewText}
              />
            ))}
          </div>
        </div>

        <HorizontalSeparator className="mt-16" />
        <ActivityGrid />
      </section>
    </>
  );
}