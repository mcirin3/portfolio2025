import Experience from "../components/homepage/experience";
import Skills from "../components/homepage/skills";
import PageHeader from "../components/page-header";

export const metadata = {
  title: "Experience | Mark Cirineo",
  description: "Roles, internships, and initiatives that shaped how Mark Cirineo builds software.",
};

export default function ExperiencePage() {
  return (
    <div className="py-8 lg:py-12">
      <PageHeader
        eyebrow="Journey"
        title="The work, teams, and challenges that sharpened my craft."
        subtitle="From academic research to hands-on product delivery, I thrive in environments where learning fast meets building well."
        ctaLabel="See projects"
        ctaHref="/projects"
      />

      <div className="space-y-12 lg:space-y-16">
        <Experience />
        <Skills />
      </div>
    </div>
  );
}
