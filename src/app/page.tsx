import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { CtaBand } from "@/components/sections/CtaBand";
import { ExperiencePreview } from "@/components/sections/ExperiencePreview";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { Hero } from "@/components/sections/Hero";
import { SkillsPreview } from "@/components/sections/SkillsPreview";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <AboutPreview />
        <FeaturedProjects />
        <SkillsPreview />
        <ExperiencePreview />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
