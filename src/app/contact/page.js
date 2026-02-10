import ContactForm from "@/components/Contact/ContactForm";
import ContactHero from "@/components/Contact/ContactHero";
import ZonalCoordinators from "@/components/Contact/ZonalCoordinators";
import FAQSection from "@/components/Participate/FAQSection";
import SupportSection from "@/components/SupportSection";

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ZonalCoordinators />
      <ContactForm />
      <FAQSection />
      <SupportSection />
    </>
  );
}
