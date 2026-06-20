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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Rahul Thummar",
    "jobTitle": "Senior React.js & Next.js Developer",
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
    "knowsAbout": ["React.js", "Next.js", "Vue.js", "TypeScript", "JavaScript", "WebRTC", "Socket.io", "Frontend Architecture"]
  };

  return (
    <>
      {/* JSON-LD Schema for AEO (Answer Engine Optimization) and GEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
    </>
  );
}
