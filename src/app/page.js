import AtAGlance from "@/components/Home/AtAGlance";
import AwardsBenefits from "@/components/Home/AwardsBenefits";
import GuidedBy from "@/components/Home/GuidedBy";
import Hero from "@/components/Home/Hero";
import HowNAOSolves from "@/components/Home/HowNAOSolves";
import NAOHighlights from "@/components/Home/NAOHighlights";
import NationalPriorities from "@/components/Home/NationalPriorities";
import StudentJourney from "@/components/Home/StudentJourney";
import WhoCanParticipate from "@/components/Home/WhoCanParticipate";
import WhyAviation from "@/components/Home/WhyAviation";
import WhyPartner from "@/components/Home/WhyPartner";

export default function Home() {
  return (
    <>
      <Hero />
      <NAOHighlights />
      <AtAGlance />
      <WhyAviation />
      <HowNAOSolves />
      <StudentJourney />
      {/* <WhoCanParticipate /> */}
      <AwardsBenefits />
      <GuidedBy />
      {/* <NationalPriorities /> */}
      <WhyPartner />
    </>
  );
}
