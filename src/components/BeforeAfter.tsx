"use client";

import Image from "next/image";
import { useState } from "react";
import type { UxImage } from "@/content/types";

type Props = {
  before: UxImage;
  after: UxImage;
  labels: { before: string; after: string; compare: string };
};

export function BeforeAfter({ before, after, labels }: Props) {
  const [position, setPosition] = useState(50);

  return (
    <figure className="relative overflow-hidden rounded-2xl border border-rule bg-surface select-none">
      <Image
        src={after.src}
        alt={after.alt}
        width={after.width}
        height={after.height}
        unoptimized
        className="block h-auto w-full"
      />

      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <Image
          src={before.src}
          alt={before.alt}
          width={before.width}
          height={before.height}
          unoptimized
          className="block h-full w-full object-cover object-top"
        />
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 w-0.5 bg-signal"
        style={{ left: `${position}%` }}
      >
        <span className="absolute top-1/2 left-1/2 flex size-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-signal text-base shadow-lg">
          <svg viewBox="0 0 16 16" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 4 2 8l4 4" />
            <path d="m10 4 4 4-4 4" />
          </svg>
        </span>
      </div>

      <span className="pointer-events-none absolute bottom-4 left-4 rounded-sm bg-base/85 px-3 py-1.5 text-sm font-medium text-ink">
        {labels.before}
      </span>
      <span className="pointer-events-none absolute right-4 bottom-4 rounded-sm bg-signal px-3 py-1.5 text-sm font-medium text-base">
        {labels.after}
      </span>

      <input
        type="range"
        min={0}
        max={100}
        value={position}
        onChange={(event) => setPosition(Number(event.target.value))}
        aria-label={labels.compare}
        className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
      />
    </figure>
  );
}
