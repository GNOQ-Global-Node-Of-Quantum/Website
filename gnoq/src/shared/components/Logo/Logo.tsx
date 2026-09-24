import { cn } from "@/shared/lib/utils";

interface LogoProps {
  className?: string;
  /** Uses currentColor so it inherits text color (great on dark backgrounds). */
  title?: string;
}

/**
 * GNOQ wordmark — the "O" is an atom/orbit mark.
 * Vector so it stays crisp and adapts to light/dark via currentColor.
 * Replace with the official asset in /public if a final file is provided.
 */
export function Logo({ className, title = "GNOQ" }: LogoProps) {
  return (
    <svg
      viewBox="0 0 360 96"
      className={cn("h-7 w-auto", className)}
      role="img"
      aria-label={title}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <text
        x="0"
        y="70"
        fontFamily="var(--font-sans), system-ui, sans-serif"
        fontSize="80"
        fontWeight="700"
        letterSpacing="-2"
      >
        GN
      </text>
      <text
        x="250"
        y="70"
        fontFamily="var(--font-sans), system-ui, sans-serif"
        fontSize="80"
        fontWeight="700"
        letterSpacing="-2"
      >
        Q
      </text>
      {/* Atom mark standing in for the "O" */}
      <g transform="translate(205 40)" stroke="currentColor" strokeWidth="4" fill="none">
        <ellipse cx="0" cy="0" rx="30" ry="12" transform="rotate(45)" />
        <ellipse cx="0" cy="0" rx="30" ry="12" transform="rotate(-45)" />
        <circle cx="0" cy="0" r="6" fill="currentColor" stroke="none" />
      </g>
    </svg>
  );
}
