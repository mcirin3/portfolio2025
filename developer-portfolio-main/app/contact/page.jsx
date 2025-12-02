import ContactSection from "../components/homepage/contact";
import PageHeader from "../components/page-header";

export const metadata = {
  title: "Contact | Mark Cirineo",
  description: "Get in touch with Mark Cirineo for collaboration, opportunities, or mentorship.",
};

export default function ContactPage() {
  return (
    <div className="py-8 lg:py-12">
      <PageHeader
        eyebrow="Connect"
        title="Let's build something worthwhile."
        subtitle="Reach out for collaborations, freelance work, or just to talk shop about engineering and product."
        ctaLabel="View resume"
        ctaHref="https://drive.google.com/file/d/1kppuXAHdcg9ksQ9K6v6BlGl1wDRUn8f8/view?usp=sharing"
        ctaTarget="_blank"
      />

      <ContactSection />
    </div>
  );
}
