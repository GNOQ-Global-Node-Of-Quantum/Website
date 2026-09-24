import type { InterestOption } from "../types/lead.types";
interface LeadInterestsProps {
  interests: readonly InterestOption[];
}
export function LeadInterests({ interests }: LeadInterestsProps) {
  return (
    <div>
      <p className="text-sm font-medium">O que você imagina precisar?</p>
      <div className="mt-3 grid gap-3 md:grid-cols-2">
        {interests.map((option) => (
          <label
            key={option.title}
            className="flex cursor-pointer gap-3 rounded-xl border p-4 transition-colors hover:bg-muted/50"
          >
            <input
              type="checkbox"
              name="interesses"
              value={option.title}
              className="mt-1"
            />
            <span>
              <span className="block text-sm font-medium">{option.title}</span>
              {option.description && (
                <span className="mt-1 block text-sm leading-relaxed text-muted-foreground">
                  {option.description}
                </span>
              )}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
}
