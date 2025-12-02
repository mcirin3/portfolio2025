import Projects from "../components/homepage/projects";
import PageHeader from "../components/page-header";

export const metadata = {
  title: "Projects | Mark Cirineo",
  description: "Selected projects by Mark Cirineo that blend performance, accessibility, and thoughtful UX.",
};

export default function ProjectsPage() {
  return (
    <div className="py-8 lg:py-12">
      <PageHeader
        eyebrow="Portfolio"
        title="Building products with intention, clean code, human-centered UX, and measurable impact."
        subtitle="A mix of coursework, freelance, and personal experiments that explore how far the modern web stack can go."
        ctaLabel="Let's collaborate"
        ctaHref="/contact"
      />

      <Projects />
    </div>
  );
}
