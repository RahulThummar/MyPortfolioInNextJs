import { Hero } from "@/sections/hero";
import { About } from "@/sections/about";
import { Skills } from "@/sections/skills";
import { Experience } from "@/sections/experience";
import { Education } from "@/sections/education";
import { Projects } from "@/sections/projects";
import { Products } from "@/sections/products";
import { Achievements } from "@/sections/achievements";
import { Others } from "@/sections/others";
import { Marquee } from "@/sections/marquee";
import { Contact } from "@/sections/contact";
import { Footer } from "@/sections/footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full overflow-hidden">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <Products />
      <Achievements />
      <Others />
      <Marquee />
      <Contact />
      <Footer />
    </main>
  );
}
