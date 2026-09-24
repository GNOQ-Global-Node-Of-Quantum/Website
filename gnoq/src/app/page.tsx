import { HomePage } from "@/features/home/pages/HomePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GNOQ | Desenvolvimento de software e soluções digitais",
  description:
    "Sistemas, automações, sites e produtos digitais sob medida. Conheça a GNOQ e converse sobre o próximo passo da sua empresa.",
};

export default function Home() {
  return <HomePage />;
}
