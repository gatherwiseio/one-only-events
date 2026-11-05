"use client";

import { useGSAP } from "@gsap/react";
import confetti from "canvas-confetti";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ClipboardList, MessageCircleHeart, PartyPopper, Puzzle, RotateCcw } from "lucide-react";
import { useRef, useState } from "react";
import { SectionHeading } from "@/components/SectionHeading";
import { process, type ProcessStep } from "@/content/site";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const icons: Record<ProcessStep["icon"], typeof PartyPopper> = {
  talk: MessageCircleHeart,
  plan: ClipboardList,
  together: Puzzle,
  celebrate: PartyPopper,
};

const STEP_PAUSE = 0.35; // seconds a stop stays lit before the line moves on
const SEGMENT = 0.9; // seconds for the line to travel to the next stop

function celebrate() {
  const style = getComputedStyle(document.documentElement);
  const colors = ["--color-primary", "--color-pink", "--color-accent-on-dark", "--color-surface"].map((t) => style.getPropertyValue(t).trim());
  const base = { colors, ticks: 260, disableForReducedMotion: true };
  confetti({ ...base, particleCount: 90, spread: 70, startVelocity: 55, angle: 60, origin: { x: 0, y: 0.75 } });
  confetti({ ...base, particleCount: 90, spread: 70, startVelocity: 55, angle: 120, origin: { x: 1, y: 0.75 } });
  confetti({ ...base, particleCount: 120, spread: 110, startVelocity: 40, origin: { x: 0.5, y: 0.45 } });
}

/**
 * How it works: four stops on a timeline. When the section scrolls into view the line travels
 * from step 1 to step 4, lighting each stop; confetti marks the last one, then a Replay button
 * appears. Reduced motion: every stop lit, no confetti, no replay.
 */
export function Process() {
  const root = useRef<HTMLElement>(null);
  const timeline = useRef<gsap.core.Timeline | null>(null);
  const [lit, setLit] = useState(0);
  const [done, setDone] = useState(false);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: reduce)", () => {
        setLit(process.steps.length);
        gsap.set("[data-fill]", { "--fill": 1 });
      });
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const fills = gsap.utils.toArray<HTMLElement>("[data-fill]");
        const tl = gsap.timeline({ paused: true });
        process.steps.forEach((_, i) => {
          tl.call(() => setLit(i + 1));
          if (fills[i]) tl.fromTo(fills[i], { "--fill": 0 }, { "--fill": 1, duration: SEGMENT, ease: "power1.inOut" }, `+=${STEP_PAUSE}`);
        });
        tl.call(celebrate, [], "+=0.15");
        tl.call(() => setDone(true), [], "+=1.6");
        timeline.current = tl;
        ScrollTrigger.create({ trigger: "[data-timeline]", start: "top 70%", once: true, onEnter: () => tl.play() });
      });
      return () => mm.revert();
    },
    { scope: root },
  );

  const replay = () => {
    setDone(false);
    setLit(0);
    timeline.current?.restart();
  };

  return (
    <section ref={root} id="process" aria-labelledby="process-title" className="scroll-mt-20 bg-surface-alt px-gutter py-section">
      <div className="mx-auto flex max-w-content flex-col gap-group">
        <SectionHeading id="process-title" title={process.title} label={process.label} align="start" />
        <ol data-timeline className="grid grid-cols-1 gap-(--timeline-gap) md:grid-cols-4">
          {process.steps.map((step, i) => {
            const Icon = icons[step.icon];
            const on = i < lit;
            return (
              <li key={step.title} className="relative flex gap-5 md:flex-col md:gap-0">
                {i < process.steps.length - 1 ? (
                  <span className="timeline-connector" aria-hidden="true">
                    <span data-fill className="timeline-fill" />
                  </span>
                ) : null}
                <span
                  className={`relative z-10 flex size-(--stop-size) flex-none items-center justify-center rounded-full border-2 transition-colors duration-500 ease-soft ${
                    on ? "border-primary bg-primary text-on-photo" : "border-line bg-surface-alt text-accent"
                  }`}
                  aria-hidden="true"
                >
                  <Icon size={22} strokeWidth={1.5} />
                </span>
                <div className="flex flex-col gap-2 md:mt-6 md:pr-4">
                  <p className="font-display text-label font-medium uppercase text-accent">Step {i + 1}</p>
                  <h3 className="font-display text-card-title font-normal uppercase">{step.title}</h3>
                  <p className="text-body-sm">{step.body}</p>
                </div>
              </li>
            );
          })}
        </ol>
        <div className="flex min-h-tap items-center">
          {done ? (
            <button
              type="button"
              onClick={replay}
              className="inline-flex min-h-tap items-center gap-2 font-display text-label font-semibold uppercase text-accent underline decoration-1 underline-offset-6 hover:text-accent-deep"
            >
              <RotateCcw size={14} strokeWidth={1.75} aria-hidden="true" />
              {process.replayLabel}
            </button>
          ) : null}
        </div>
      </div>
    </section>
  );
}
