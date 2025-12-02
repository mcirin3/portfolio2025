import Schedule from "../components/homepage/schedule";
import PageHeader from "../components/page-header";

export const metadata = {
  title: "Schedule | Mark Cirineo",
  description: "Office hours, availability, and upcoming commitments for Mark Cirineo.",
};

export default function SchedulePage() {
  return (
    <div className="py-8 lg:py-12">
      <PageHeader
        eyebrow="Schedule"
        title="See what I'm working on and where you can find me."
        subtitle="Keep up with office hours, speaking engagements, and the weekly cadence I use to stay organized."
        ctaLabel="Book time"
        ctaHref="/contact"
      />

      <Schedule />
    </div>
  );
}
