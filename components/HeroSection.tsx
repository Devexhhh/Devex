"use client";

import { useState, useEffect } from "react";
import HoverButton from "@/app/ui/HoverButton";
import DecryptedText from "@/app/ui/DecryptedText";
import { IMAGES } from "@/lib/imagesData";

export default function HeroSection() {
  const [isHovered, setIsHovered] = useState(false);
  const [isAltText, setIsAltText] = useState(false);

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setIsAltText((prev) => !prev);
    }, 4000);

    return () => clearInterval(interval);
  }, [isHovered]);

  const currentName = isHovered ? "Devex" : isAltText ? "Devex" : "Kumar Sujal";
  const currentTitle = isHovered
    ? " computer geek"
    : isAltText
      ? " computer geek"
      : " civil engineer";

  const connectLinks = [
    {
      label: "GitHub",
      href: "https://github.com/Devexhhh",
      icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.379.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z" /></svg>,
      previewImage: IMAGES.socials.github
    },
    {
      label: "Twitter",
      href: "https://x.com/devexxh",
      icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" /></svg>,
      previewImage: IMAGES.socials.twitter
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/kumar-sujal-a09515301/",
      icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>,
      previewImage: IMAGES.socials.linkedin
    },
    {
      label: "Mail",
      href: "mailto:kumarsujal.codes@gmail.com",
      icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>,
      previewText: "kumarsujal.codes@gmail.com"
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
      {/* Fluid padding applied here */}
      <section id="hero" className="px-4 sm:px-6 md:px-8 max-w-7xl mx-auto w-full pt-20 sm:pt-28 pb-16 sm:pb-24">
        <p className="font-mono text-[12px] sm:text-[13px] text-black/50 dark:text-white/40 mb-2 mt-5">
          Namaste. I&apos;m
        </p>

        <h1
          className="font-mono tracking-tighter font-medium mb-6 sm:mb-8 flex flex-wrap items-center gap-x-2 sm:gap-x-3 gap-y-1 cursor-default min-h-[1.2em]"
          style={{ fontSize: "clamp(32px, 5vw, 44px)" }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <DecryptedText
            key={`name-${currentName}`}
            text={currentName}
            animateOn="view"
            speed={70}
            maxIterations={20}
            sequential={true}
            revealDirection="start"
            className="text-black dark:text-[#f1f0ff]"
            encryptedClassName="text-black/40 dark:text-white/40"
          />

          <span className="text-black/40 dark:text-white/30 font-mono text-[18px] sm:text-2xl mt-2 sm:mt-3 tracking-tighter">
            <DecryptedText
              key={`title-${currentTitle}`}
              text={currentTitle}
              animateOn="view"
              speed={70}
              maxIterations={25}
              sequential={true}
              revealDirection="start"
              className="text-black/40 dark:text-white/30"
              encryptedClassName="text-black/20 dark:text-white/10"
            />
          </span>
        </h1>

        <p className="font-mono text-[13px] sm:text-[14px] text-black/60 dark:text-white/60 leading-[1.8] w-full sm:max-w-[750px] mb-2">
          Civil Engineer by degree, developer by passion. I build interactive web experiences, with a focus on {"Web3"}
        </p>



        <p className="font-mono text-[13px] sm:text-[14px] text-black/60 dark:text-white/60 leading-[1.8] w-full sm:max-w-[750px] mb-2">
          Outside code: games, comics, and films.
        </p>

        <p className="font-mono text-[13px] sm:text-[14px] text-black/60 dark:text-white/60 leading-[1.8] w-full sm:max-w-[600px] mb-8 sm:mb-10">
          If you like my work or just want to chat tech, I&apos;m around.
        </p>

        <div className="-mb-10 sm:-mb-20">
          <h3 className="font-mono font-bold text-[16px] sm:text-[18px] text-black/90 dark:text-white/90 mb-3 sm:mb-4">
            Connect
          </h3>

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
      </section>
    </>
  );
}