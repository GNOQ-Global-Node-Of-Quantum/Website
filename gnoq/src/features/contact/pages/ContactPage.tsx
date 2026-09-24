import { ContactChannels } from "@/features/contact/components/ContactChannels";
import { ContactHero } from "@/features/contact/components/ContactHero";

export function ContactPage() {
  return (
    <main>
      <ContactHero />
      <ContactChannels />
    </main>
  );
}
