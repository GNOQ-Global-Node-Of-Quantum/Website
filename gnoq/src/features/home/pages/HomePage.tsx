import { FeaturedProject } from "@/features/home/components/FeaturedProject";
import { HomeContact } from "@/features/home/components/HomeContact";
import { HomeFaq } from "@/features/home/components/HomeFaq";
import { HomeHero } from "@/features/home/components/HomeHero";
import { HomeProcess } from "@/features/home/components/HomeProcess";
import { HomeProjects } from "@/features/home/components/HomeProjects";
import { HomeSolutions } from "@/features/home/components/HomeSolutions";
import { SiteFooter } from "@/shared/components/SiteFooter/SiteFooter";
import { SiteHeader } from "@/shared/components/SiteHeader/SiteHeader";
export function HomePage() {
  return (
    <>
      <a className="skip-link" href="#conteudo">
        Ir para o conteúdo
      </a>
      <SiteHeader />
      <main id="conteudo">
        <HomeHero />
        <FeaturedProject />
        <HomeSolutions />
        <HomeProcess />
        <HomeProjects />
        <HomeFaq />
        <HomeContact />
      </main>
      <SiteFooter />
    </>
  );
}
