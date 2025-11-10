"use client";

import { useEffect, useState } from "react";

type QuoteItem = {
  lines: [string, string];
  source: string;
};

const QUOTES: QuoteItem[] = [
  { lines: ["A floating festival", "of dreams"], source: "Forbes" },
  { lines: ["Summer’s most", "exclusive party"], source: "GQ" },
  { lines: ["Where adventure", "meets luxury"], source: "Condé Nast" },
  { lines: ["Sail, dance", "repeat"], source: "The Telegraph" },
  { lines: ["The original", "yacht week"], source: "TIME" },
];

interface QuoteCarouselProps {
  intervalMs?: number;
}

export default function QuoteCarousel({ intervalMs = 3500 }: QuoteCarouselProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % QUOTES.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [intervalMs]);

  const current = QUOTES[index];

  return (
    <div className="relative overflow-hidden bg-primary-600 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="min-h-[280px] lg:min-h-[360px] flex flex-col justify-center">
          <div className="transition-all">
            <h3 className="font-extrabold leading-tight tracking-tight text-balance text-4xl sm:text-5xl lg:text-7xl">
              {current.lines[0]}
            </h3>
            <h3 className="font-extrabold leading-tight tracking-tight text-balance text-4xl sm:text-5xl lg:text-7xl">
              {current.lines[1]}
            </h3>
          </div>
          <div className="mt-8">
            <span className="text-primary-100/90 text-lg lg:text-xl">— {current.source}</span>
          </div>
        </div>
      </div>
    </div>
  );
}


