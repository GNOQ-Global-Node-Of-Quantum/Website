import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./global.css";

const inter = Inter({
  variable: "--font-inter",
  subsets : ["latin"],
});

export const metadata: Metadata = {
  title: "GNOQ | Site em manutencao",
  description: "O site da GNOQ esta temporariamente em manutencao.",
  icons: "/public/icon.jpg",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-br">
      <head>
        <meta name="google-site-verification" content="tDbwlgNIMrsZ_ks2DQ0Eqbp8sz-yqWlCCoK-V8BKVxk" />
      </head>
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
