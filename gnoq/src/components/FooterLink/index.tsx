import Link from "next/link";

export function FooterLink({href, children}: {href: string; children: React.ReactNode;}) {
  return (
    <li>
      <Link href={href} className="hover:text-[#4f46e5] transition-colors duration-200">
        {children}
      </Link>
    </li>
  );
}