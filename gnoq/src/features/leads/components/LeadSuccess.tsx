import { Button } from "@/shared/components/ui/button";
import { whatsappLink } from "@/shared/constants/contact.constants";
import { cn } from "@/shared/lib/utils";
import { CheckCircle2Icon, MessageCircleIcon } from "lucide-react";
interface LeadSuccessProps {
  className?: string;
}
export function LeadSuccess({ className }: LeadSuccessProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-start gap-4 rounded-2xl border bg-muted/30 p-8",
        className,
      )}
    >
      <div className="flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
        <CheckCircle2Icon className="size-6" />
      </div>
      <div>
        <h3 className="text-xl font-semibold">Recebemos sua mensagem!</h3>
        <p className="mt-2 text-muted-foreground">
          A GNOQ vai te responder em breve. Se quiser adiantar, chame no
          WhatsApp agora.
        </p>
      </div>
      <Button
        nativeButton={false}
        render={
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" />
        }
      >
        <MessageCircleIcon className="size-4" />
        Falar no WhatsApp
      </Button>
    </div>
  );
}
