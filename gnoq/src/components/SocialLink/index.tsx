export function SocialLink({href, icon, label}: {href: string; icon: React.ReactNode; label: string}) {
  return (
    <li>
      <a
        href       = {href}
        target     = "_blank"
        rel        = "noopener noreferrer"
        className  = "flex items-center gap-2.5 hover:text-[#4f46e5] transition-colors duration-200"
        aria-label = {label}
      >
        {icon}
        <span className="md:sr-only">{label}</span>
      </a>
    </li>
  );
}