/** Abstract data → trend → forecast motif for the hero background */
export function ForecastMotif({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 800 420"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="presentation"
    >
      {/* Soft forecast uncertainty band */}
      <path
        className="motif-forecast"
        d="M420 210 C480 175 520 155 580 140 C640 125 700 130 760 118 L760 210 C700 222 640 230 580 245 C520 260 480 275 420 290 Z"
        fill="var(--hero-forecast)"
      />

      {/* Historical trend line */}
      <path
        className="motif-line"
        pathLength={1}
        d="M40 310 C110 295 150 250 210 240 C270 230 300 270 360 250 C400 238 410 220 420 210"
        stroke="var(--hero-motif)"
        strokeWidth="2.25"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />

      {/* Forecast continuation (dashed) */}
      <path
        className="motif-forecast"
        d="M420 210 C500 170 560 150 640 135 C700 124 740 120 760 118"
        stroke="var(--hero-motif)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="5 7"
        vectorEffect="non-scaling-stroke"
      />

      {/* Observed data points */}
      <g className="motif-points" fill="var(--accent)">
        <circle cx="70" cy="305" r="3.5" />
        <circle cx="140" cy="268" r="3.5" />
        <circle cx="210" cy="240" r="3.5" />
        <circle cx="280" cy="258" r="3.5" />
        <circle cx="340" cy="246" r="3.5" />
        <circle cx="420" cy="210" r="4" />
      </g>
    </svg>
  );
}
