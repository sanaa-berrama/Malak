export function OrientalArch() {
  return (
    <div className="pointer-events-none absolute inset-[10px] z-[1]" aria-hidden>
      <svg
        viewBox="0 0 560 900"
        preserveAspectRatio="none"
        fill="none"
        className="block h-full w-full"
      >
        <path
          d="M280 6
             C 300 30 332 62 392 120
             C 452 178 522 210 522 268
             L 522 880 L 38 880 L 38 268
             C 38 210 108 178 168 120
             C 228 62 260 30 280 6 Z"
          stroke="url(#archGold)"
          strokeWidth={1.4}
        />
        <path
          d="M280 26
             C 298 48 328 78 384 132
             C 440 186 504 214 504 268
             L 504 864 L 56 864 L 56 268
             C 56 214 120 186 176 132
             C 232 78 262 48 280 26 Z"
          stroke="url(#archGold)"
          strokeWidth={0.7}
          opacity={0.5}
        />
        <defs>
          <linearGradient id="archGold" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#D9BC8E" />
            <stop offset="0.5" stopColor="#C8A97E" />
            <stop offset="1" stopColor="#B08D57" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
