import { AppHeader } from "@/shared/components/AppHeader/AppHeader";
import { AppFooter } from "@/shared/components/AppFooter/AppFooter";
import { WhatsAppButton } from "@/shared/components/WhatsAppButton/WhatsAppButton";
import { cn } from "@/shared/lib/utils";
import type { Metadata } from "next";
import { Geist, Inter } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GNOQ | Soluções digitais sob medida",
  description:
    "Apps, sites, jogos, sistemas, automações e produtos digitais sob medida para empresas.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-br" className={cn("font-sans", geist.variable)}>
      <head>
        <meta
          name="google-site-verification"
          content="tDbwlgNIMrsZ_ks2DQ0Eqbp8sz-yqWlCCoK-V8BKVxk"
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <AppHeader />
        {children}
        <AppFooter />
        <WhatsAppButton />
      </body>
    </html>
  );
}
