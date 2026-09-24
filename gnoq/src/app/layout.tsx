import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GNOQ | Site em manutenção",
  description: "Estamos preparando o novo site da GNOQ. Entre em contato com nossa equipe por e-mail.",
  verification: { google: "tDbwlgNIMrsZ_ks2DQ0Eqbp8sz-yqWlCCoK-V8BKVxk" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
