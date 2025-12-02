import Education from "../components/homepage/education";
import PageHeader from "../components/page-header";

export const metadata = {
  title: "Education | Mark Cirineo",
  description: "Academic milestones, certifications, and the learning journey of Mark Cirineo.",
};

export default function EducationPage() {
  return (
    <div className="py-8 lg:py-12">
      <PageHeader
        eyebrow="Education"
        title="A foundation rooted in computer science and continuous learning."
        subtitle="Curriculum, research, and hands-on labs that shaped how I think about systems, scalability, and user experience."
        ctaLabel="View schedule"
        ctaHref="/schedule"
      />

      <Education />
    </div>
  );
}
