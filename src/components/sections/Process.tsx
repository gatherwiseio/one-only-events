"use client";

import { useGSAP } from "@gsap/react";
import confetti from "canvas-confetti";
import { gsap } from "gsap";
import { ClipboardList, MessageCircleHeart, PartyPopper, Puzzle, RotateCcw } from "lucide-react";
import { useRef, useState } from "react";
import { SectionHeading } from "@/components/SectionHeading";
import { process, type ProcessStep } from "@/content/site";

gsap.registerPlugin(useGSAP);

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
        // Always start from an empty line, so a replay never runs it backward from the end
        const tl = gsap.timeline({ paused: true }).set(fill, { "--fill": 0 });
        process.steps.forEach((step, i) => {
          if (i > 0) tl.to(fill, { "--fill": () => stopAt(i), duration: TRAVEL, ease: "power1.inOut" });
          tl.call(() => setLit(i + 1));
          if (i === process.steps.length - 1) tl.call(celebrate);
          tl.to({}, { duration: readingTime(step) });
        });
        tl.to(fill, { "--fill": 1, duration: TRAVEL, ease: "power1.inOut" }, "<");
        tl.call(() => setDone(true));
        timeline.current = tl;
        // Starts only once the timeline is actually on screen (top past 70% of the viewport), and
        // pauses wherever it is while the timeline is off screen, so the confetti never fires out
        // of sight. IntersectionObserver reports what's really visible, so a page loaded or
        // restored below this section doesn't start it.
        const el = root.current?.querySelector<HTMLElement>("[data-timeline]");
        if (!el) return;
        const starter = new IntersectionObserver(
          ([entry]) => {
            if (!entry.isIntersecting) return;
            tl.play();
            starter.disconnect();
          },
          { rootMargin: "0px 0px -30% 0px" },
        );
        const watcher = new IntersectionObserver(([entry]) => {
          const progress = tl.progress();
          if (progress > 0 && progress < 1) tl.paused(!entry.isIntersecting);
        });
        starter.observe(el);
        watcher.observe(el);
        return () => {
          starter.disconnect();
          watcher.disconnect();
        };
      });
      return () => mm.revert();
    },
    { scope: root },
  );

  const replay = () => {
    setDone(false);
    setLit(0);
    timeline.current?.invalidate().restart();
  };

  return (
    <section ref={root} id="process" aria-labelledby="process-title" className="scroll-mt-20 bg-surface px-gutter py-section-sm">
      <div className="mx-auto flex max-w-content flex-col gap-group">
        <SectionHeading id="process-title" title={process.title} label={process.label} />
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
        <div className="flex min-h-tap items-center justify-center lg:justify-end">
          {done ? (
            <button
              type="button"
              onClick={replay}
              className="inline-flex items-center gap-2 py-3 font-display text-label font-semibold uppercase link-beam text-accent"
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
