import { Hero } from "@/sections/hero";
import { About } from "@/sections/about";
import { Skills } from "@/sections/skills";
import { Experience } from "@/sections/experience";
import { Education } from "@/sections/education";
import { Projects } from "@/sections/projects";
import { Products } from "@/sections/products";
import { Achievements } from "@/sections/achievements";
import { Others } from "@/sections/others";
import { Contact } from "@/sections/contact";
import { Footer } from "@/sections/footer";
import { SectionReveal } from "@/components/section-reveal";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Rahul Thummar",
    "jobTitle": "React.js & Next.js Developer",
    "url": "https://rahulthummar.com",
    "image": "https://rahulthummar.com/images/mpic.jpg",
    "sameAs": [
      "https://www.linkedin.com/in/rahul-thummar/",
      "https://twitter.com/Rahulthummar327",
      "https://www.facebook.com/rahul.thummar.1984"
    ],
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "Jain University"
    },
    "worksFor": {
      "@type": "Organization",
      "name": "AppWorld Infotech"
    },
    "knowsAbout": ["React.js", "Next.js", "Vue.js", "TypeScript", "JavaScript", "Socket.io", "Fabric.js", "Frontend Architecture"]
  };

  return (
    <>
      {/* JSON-LD Schema for AEO (Answer Engine Optimization) and GEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="flex min-h-screen flex-col w-full overflow-x-clip">
        <Hero />

        <SectionReveal>
          <About />
        </SectionReveal>

        <SectionReveal>
          <Projects />
        </SectionReveal>

        <SectionReveal>
          <Products />
        </SectionReveal>

        <SectionReveal>
          <Experience />
        </SectionReveal>

        <SectionReveal>
          <Skills />
        </SectionReveal>

        <SectionReveal>
          <Education />
        </SectionReveal>

        <SectionReveal>
          <Achievements />
        </SectionReveal>

        <SectionReveal>
          <Others />
        </SectionReveal>

        <SectionReveal>
          <Contact />
        </SectionReveal>

        <SectionReveal>
          <Footer />
        </SectionReveal>
      </main>
    </>
  );
}
