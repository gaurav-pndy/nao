import WhoCanParticipate from "@/components/Home/WhoCanParticipate";
import FAQSection from "@/components/Participate/FAQSection";

import FeeStructure from "@/components/Participate/FeeStructure";
import ImportantDates from "@/components/Participate/ImportantDates";
import ParticipateHero from "@/components/Participate/ParticipateHero";
import PaymentMethods from "@/components/Participate/PaymentMethods";
import SupportSection from "@/components/SupportSection";
import WhatsIncluded from "@/components/Participate/WhatsIncluded";

export default function ParticipatePage() {
  return (
    <>
      <ParticipateHero />
      <WhoCanParticipate />
      <FeeStructure />
      <WhatsIncluded />
      <PaymentMethods />
      <ImportantDates />
      <FAQSection />
      <SupportSection />
    </>
  );
}
