import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/Header";
import { Toaster } from "sonner";
import { Footer } from "@/components/Footer";
import "./global.css"

const inter = Inter({
  variable: "--font-inter",
  subsets : ["latin"],
});

export const metadata: Metadata = {
  title      : "GNOQ | Global Node Of Quantum",
  description: "Engenharia digital para empresas que pensam à frente.",
  icons: "/public/icon.jpg"
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="pt-br">
      <head>
        <meta name="google-site-verification" content="tDbwlgNIMrsZ_ks2DQ0Eqbp8sz-yqWlCCoK-V8BKVxk" />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <Toaster richColors />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}