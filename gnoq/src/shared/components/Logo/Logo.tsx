import Image from "next/image";

interface LogoProps {
  className?: string;
  title?: string;
  variant?: "blue" | "white";
}

/** Display the supplied artwork without recreating or modifying the logo. */
export function Logo({
  className = "",
  title = "GNOQ",
  variant = "blue",
}: LogoProps) {
  return (
    <span className={`brand-logo brand-logo--${variant} ${className}`}>
      <Image
        src={`/brand/gnoq-${variant}.png`}
        alt={title}
        draggable={false}
        width={1254}
        height={1254}
        sizes="280px"
      />
    </span>
  );
}
