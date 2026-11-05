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

const WORDS_PER_SECOND = 270 / 60; // an easy adult reading pace
const TRAVEL = 1; // seconds for the line to travel to the next stop

const readingTime = (step: ProcessStep) => `${step.title} ${step.body}`.split(/\s+/).length / WORDS_PER_SECOND;

function celebrate() {
  const style = getComputedStyle(document.documentElement);
  const colors = ["--color-primary", "--color-pink", "--color-accent-on-dark", "--color-surface"].map((t) => style.getPropertyValue(t).trim());
  const base = { colors, ticks: 260, disableForReducedMotion: true };
  confetti({ ...base, particleCount: 90, spread: 70, startVelocity: 55, angle: 60, origin: { x: 0, y: 0.75 } });
  confetti({ ...base, particleCount: 90, spread: 70, startVelocity: 55, angle: 120, origin: { x: 1, y: 0.75 } });
  confetti({ ...base, particleCount: 120, spread: 110, startVelocity: 40, origin: { x: 0.5, y: 0.45 } });
}

/**
 * How it works: four stops on one rail. All steps are visible from the start, upcoming ones
 * muted. When the timeline scrolls into view the line travels to each stop in turn, lights it,
 * then waits about as long as it takes to read that step before moving on. Confetti marks the
 * last stop, then a Replay link appears. Reduced motion: every stop lit, no confetti, no replay.
 */
export function Process() {
  const root = useRef<HTMLElement>(null);
  const timeline = useRef<gsap.core.Timeline | null>(null);
  const [lit, setLit] = useState(0);
  const [done, setDone] = useState(false);

  useGSAP(
    () => {
      const fill = root.current?.querySelector<HTMLElement>("[data-fill]");
      const rail = root.current?.querySelector<HTMLElement>("[data-rail]");
      const stops = gsap.utils.toArray<HTMLElement>("[data-stop]");
      if (!fill || !rail) return;

      // On the vertical rail, stop at the last circle's center rather than the bottom of the list
      const timelineEl = rail.parentElement!;
      const setTail = () => {
        const t = timelineEl.getBoundingClientRect();
        const last = stops[stops.length - 1].getBoundingClientRect();
        timelineEl.style.setProperty("--rail-tail", `${t.bottom - (last.top + last.height / 2)}px`);
      };
      setTail();
      const observer = new ResizeObserver(setTail);
      observer.observe(timelineEl);

      // How far along the rail (0–1) each stop's center sits, in whichever direction it runs
      const stopAt = (i: number) => {
        const r = rail.getBoundingClientRect();
        const s = stops[i].getBoundingClientRect();
        const horizontal = r.width > r.height;
        return horizontal ? (s.left + s.width / 2 - r.left) / r.width : (s.top + s.height / 2 - r.top) / r.height;
      };

      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: reduce)", () => {
        setLit(process.steps.length);
        gsap.set(fill, { "--fill": 1 });
      });
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({ paused: true });
        process.steps.forEach((step, i) => {
          tl.to(fill, { "--fill": () => stopAt(i), duration: i === 0 ? 0.6 : TRAVEL, ease: "power1.inOut" });
          tl.call(() => setLit(i + 1));
          if (i === process.steps.length - 1) tl.call(celebrate);
          tl.to({}, { duration: readingTime(step) });
        });
        tl.to(fill, { "--fill": 1, duration: TRAVEL, ease: "power1.inOut" }, "<");
        tl.call(() => setDone(true));
        timeline.current = tl;
        ScrollTrigger.create({ trigger: "[data-timeline]", start: "top 70%", once: true, onEnter: () => tl.play() });
      });
      return () => {
        observer.disconnect();
        mm.revert();
      };
    },
    { scope: root },
  );

  const replay = () => {
    setDone(false);
    setLit(0);
    timeline.current?.invalidate().restart();
  };

  return (
    <section ref={root} id="process" aria-labelledby="process-title" className="scroll-mt-20 bg-surface-alt px-gutter py-section-sm">
      <div className="mx-auto flex max-w-content flex-col gap-group">
        <SectionHeading id="process-title" title={process.title} label={process.label} align="start" />
        <div data-timeline className="timeline">
          <span data-rail className="timeline-rail" aria-hidden="true">
            <span data-fill className="timeline-fill" />
          </span>
          <ol className="relative grid grid-cols-1 gap-(--timeline-gap) lg:grid-cols-4">
            {process.steps.map((step, i) => {
              const Icon = icons[step.icon];
              const on = i < lit;
              return (
                <li key={step.title} className="stop">
                  <p className={`stop-label font-display text-label font-medium uppercase transition-colors duration-500 ease-soft ${on ? "text-accent" : "text-ink-faint"}`}>
                    Step {i + 1}
                  </p>
                  <span
                    data-stop
                    className={`stop-icon relative flex size-(--stop-size) items-center justify-center rounded-full border-2 transition-colors duration-500 ease-soft ${
                      on ? "border-primary bg-primary text-on-photo" : "border-line bg-surface-alt text-ink-faint"
                    }`}
                    aria-hidden="true"
                  >
                    <Icon size={22} strokeWidth={1.5} />
                  </span>
                  <h3 className={`stop-title font-display text-card-title font-medium uppercase transition-colors duration-500 ease-soft ${on ? "text-ink" : "text-ink-faint"}`}>
                    {step.title}
                  </h3>
                  <p className={`stop-body text-body-sm transition-colors duration-500 ease-soft ${on ? "text-ink" : "text-ink-faint"}`}>{step.body}</p>
                </li>
              );
            })}
          </ol>
        </div>
        <div className="flex min-h-tap items-center justify-end">
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
