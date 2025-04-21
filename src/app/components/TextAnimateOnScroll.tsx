// ./components/TextAnimateOnScroll.tsx
"use client";

import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Define the possible animation types
export type AnimationType =
  | "wordsSlideUp"
  | "wordsRotateIn"
  | "wordsSlideFromRight"
  | "lettersSlideUp"
  | "lettersSlideDown"
  | "lettersFadeIn"
  | "lettersFadeInRandom"
  | "scrubEachWord";

// Define the component props
interface TextAnimateOnScrollProps {
  children: React.ReactNode;
  animationType: AnimationType;
  tag?: keyof JSX.IntrinsicElements; // Allow specifying the HTML tag (e.g., 'h1', 'p', 'div')
  className?: string; // Allow passing additional Tailwind classes
  staggerAmount?: number; // Optional override for stagger amount
  duration?: number; // Optional override for duration
  startTrigger?: string; // Optional override for ScrollTrigger start
  endTrigger?: string; // Optional override for ScrollTrigger end
}

const TextAnimateOnScroll: React.FC<TextAnimateOnScrollProps> = ({
  children,
  animationType,
  tag = "div", // Default to div if no tag is provided
  className = "",
  staggerAmount: customStaggerAmount,
  duration: customDuration,
  startTrigger = "top bottom", // Default: trigger when top enters bottom of viewport
  endTrigger = "bottom top", // Default: end when bottom leaves top of viewport
}) => {
  const textRef = useRef<HTMLElement>(null);
  const Tag = tag as keyof JSX.IntrinsicElements; // Cast the tag prop

  useLayoutEffect(() => {
    if (!textRef.current) return;

    const ctx = gsap.context(() => {
      // --- Correctly determine split types ---
      const needsChars = animationType.startsWith("letters");
      const splitTypes = needsChars ? "words, chars" : "words";

      const splitInstance = new SplitType(textRef.current!, {
        types: splitTypes as any,
        tagName: "span",
      });

      let tl: gsap.core.Timeline | null = null;
      const triggerElement = textRef.current!;

      // --- Select targets based on whether we need chars or words ---
      const targets = needsChars ? splitInstance.chars : splitInstance.words;

      if (!targets || targets.length === 0) {
        console.warn(
          `SplitType found no targets ('${
            needsChars ? "chars" : "words"
          }') for animation type "${animationType}" in element:`,
          textRef.current?.textContent?.substring(0, 50) + "..." // Log truncated text
        );
        return; // Exit if no targets
      }

      // --- Create GSAP Timeline and ScrollTrigger based on animationType ---
      switch (animationType) {
        case "wordsSlideUp":
          tl = gsap.timeline({ paused: true });
          tl.from(targets, {
            opacity: 0,
            yPercent: 100,
            duration: customDuration ?? 0.5,
            ease: "back.out(1.7)",
            stagger: { amount: customStaggerAmount ?? 0.5 },
          });
          break;

        case "wordsRotateIn":
          tl = gsap.timeline({ paused: true });
          gsap.set(targets, { transformPerspective: 1000 }); // Apply to words
          tl.from(targets, {
            rotationX: -90,
            opacity: 0,
            duration: customDuration ?? 0.6,
            ease: "power2.out",
            stagger: { amount: customStaggerAmount ?? 0.6 },
          });
          break;

        case "wordsSlideFromRight":
          tl = gsap.timeline({ paused: true });
          tl.from(targets, {
            opacity: 0,
            x: "5em",
            duration: customDuration ?? 0.6,
            ease: "power2.out",
            stagger: { amount: customStaggerAmount ?? 0.2 },
          });
          break;

        // --- Letter Animations ---
        case "lettersSlideUp":
          tl = gsap.timeline({ paused: true });
          tl.from(targets, {
            // targets should now be splitInstance.chars
            yPercent: 100,
            opacity: 0,
            duration: customDuration ?? 0.2,
            ease: "power1.out",
            stagger: { amount: customStaggerAmount ?? 0.6 },
          });
          break;

        case "lettersSlideDown":
          tl = gsap.timeline({ paused: true });
          tl.from(targets, {
            // targets should now be splitInstance.chars
            yPercent: -120,
            opacity: 0,
            duration: customDuration ?? 0.3,
            ease: "power1.out",
            stagger: { amount: customStaggerAmount ?? 0.7 },
          });
          break;

        case "lettersFadeIn":
          tl = gsap.timeline({ paused: true });
          tl.from(targets, {
            // targets should now be splitInstance.chars
            opacity: 0,
            duration: customDuration ?? 0.2,
            ease: "power1.out",
            stagger: { amount: customStaggerAmount ?? 0.8 },
          });
          break;

        case "lettersFadeInRandom":
          tl = gsap.timeline({ paused: true });
          tl.from(targets, {
            // targets should now be splitInstance.chars
            opacity: 0,
            duration: customDuration ?? 0.05,
            ease: "power1.out",
            stagger: {
              amount: customStaggerAmount ?? 0.4,
              from: "random",
            },
          });
          break;

        case "scrubEachWord":
          // Setup for scrub effect remains the same
          const scrubStart = "top 90%";
          const scrubEnd = "top center";
          ScrollTrigger.create({
            trigger: triggerElement,
            start: scrubStart,
            end: scrubEnd,
            scrub: true,
            // markers: process.env.NODE_ENV === "development",
          });
          gsap.from(splitInstance.words, {
            // Animate words directly
            opacity: 0.2,
            duration: customDuration ?? 0.2,
            ease: "power1.out",
            stagger: { each: customStaggerAmount ?? 0.4 },
            scrollTrigger: {
              trigger: triggerElement,
              start: scrubStart,
              end: scrubEnd,
              scrub: true,
              // markers: process.env.NODE_ENV === "development",
            },
          });
          return; // Exit switch for scrub

        default:
          console.warn("Unknown animation type:", animationType);
          return;
      }

      // --- Create the standard ScrollTrigger for non-scrub animations ---
      if (tl) {
        ScrollTrigger.create({
          trigger: triggerElement,
          start: startTrigger, // Use prop or default
          end: endTrigger, // Use prop or default
          // markers: process.env.NODE_ENV === "development",
          onEnter: () => tl?.play(),
          onLeaveBack: () => tl?.progress(0).pause(),
          onEnterBack: () => tl?.play(),
        });
      }
    }, textRef);

    return () => {
      ctx.revert();
      // Optionally revert SplitType if needed, though GSAP context usually handles tweens
      // const split = SplitType.revert(textRef.current!) // Example if direct revert needed
    };
  }, [
    animationType,
    children,
    tag,
    className,
    customStaggerAmount,
    customDuration,
    startTrigger,
    endTrigger,
  ]);

  // Apply overflow-hidden directly here to contain animations like slideUp/slideDown
  // This prevents text from appearing outside its container during the animation.
  const combinedClassName = `overflow-hidden ${className}`;

  return (
    <Tag ref={textRef} className={combinedClassName}>
      {children}
    </Tag>
  );
};

export default TextAnimateOnScroll;
