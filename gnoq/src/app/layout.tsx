import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/Header";
import { Toaster } from "sonner";
import { Footer } from "@/components/Footer";
import { LanguageProvider } from "@/app/shared/features/language-context";
import { RouteTransition } from "@/components/RouteTransition";
import "./global.css"

const inter = Inter({
  variable: "--font-inter",
  subsets : ["latin"],
});

export const metadata: Metadata = {
  title      : "GNOQ | Soluções digitais sob medida",
  description: "Apps, sites, jogos, sistemas, automações e produtos digitais sob medida para empresas que querem vender melhor, automatizar processos e validar ideias.",
  icons: "/public/icon.jpg"
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="pt-br">
      <head>
        <meta name="google-site-verification" content="tDbwlgNIMrsZ_ks2DQ0Eqbp8sz-yqWlCCoK-V8BKVxk" />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <LanguageProvider>
          <RouteTransition />
          <Toaster richColors />
          <Header />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
