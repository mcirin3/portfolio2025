import AboutSection from "../components/homepage/about";
import Skills from "../components/homepage/skills";
import PageHeader from "../components/page-header";

export const metadata = {
  title: "About | Mark Cirineo",
  description: "Learn more about Mark Cirineo, his story, principles, and the skills he brings to every project.",
};

export default function AboutPage() {
  return (
    <div className="py-8 lg:py-12">
      <PageHeader
        eyebrow="About"
        title="Grounded, curious, and obsessed with building thoughtful products."
        subtitle="From shipping classroom tools to experimenting with cloud-native stacks, I obsess over the craft of great engineering and how it helps people."
        ctaLabel="View experience"
        ctaHref="/experience"
      />

      <div className="space-y-12 lg:space-y-16">
        <AboutSection />
        <Skills />
      </div>
    </div>
  );
}
