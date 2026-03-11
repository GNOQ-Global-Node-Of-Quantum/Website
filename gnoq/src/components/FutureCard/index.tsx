export function FeatureCard({icon, title, description}: {icon: React.ReactNode; title: string; description: string}) {
  return (
    <div className="bg-[#0a0a0f] border border-[#4f4f4f]/50 rounded-2xl p-8 hover:border-[#4f46e5]/50 transition-all duration-300 group">
      <div className="mb-6">{icon}</div>
      <h3 className="text-xl font-semibold mb-4 group-hover:text-[#4f46e5] transition-colors">
        {title}
      </h3>
      <p className="text-[#9ca3af] leading-relaxed">{description}</p>
    </div>
  );
}