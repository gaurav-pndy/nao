import WhoCanParticipate from "@/components/Home/WhoCanParticipate";
import HowToRegister from "@/components/Home/HowToRegister";
import StudentJourney from "@/components/Home/StudentJourney";
import FAQSection from "@/components/Participate/FAQSection";

import FeeStructure from "@/components/Participate/FeeStructure";
import ImportantDates from "@/components/Participate/ImportantDates";
import ParticipateHero from "@/components/Participate/ParticipateHero";
import PaymentMethods from "@/components/Participate/PaymentMethods";
import SupportSection from "@/components/SupportSection";
import WhatsIncluded from "@/components/Participate/WhatsIncluded";
import NAOZonesSection from "@/components/Participate/NAOZonesSection";
import StudentBenefits from "@/components/Participate/StudentBenefits";

export default function ParticipatePage() {
  return (
    <>
      <ParticipateHero />
      <WhoCanParticipate />
      <HowToRegister />
      <FeeStructure />
      <StudentJourney />
      <NAOZonesSection />
      <WhatsIncluded />
      <StudentBenefits />
      <PaymentMethods />
      <ImportantDates />
      <FAQSection />
      <SupportSection />
    </>
  );
}
