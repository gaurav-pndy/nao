import AtAGlance from "@/components/Home/AtAGlance";
import AwardsBenefits from "@/components/Home/AwardsBenefits";
import GuidedBy from "@/components/Home/GuidedBy";
import Hero from "@/components/Home/Hero";
import HowNAOSolves from "@/components/Home/HowNAOSolves";
import NationalPriorities from "@/components/Home/NationalPriorities";
import NewsSection from "@/components/Home/NewsSection";
import StudentJourney from "@/components/Home/StudentJourney";
import WhoCanParticipate from "@/components/Home/WhoCanParticipate";
import WhyAviation from "@/components/Home/WhyAviation";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <NewsSection />
      <AtAGlance />
      <WhyAviation />
      <HowNAOSolves />
      <StudentJourney />
      <WhoCanParticipate />
      <AwardsBenefits />
      <GuidedBy />
      <NationalPriorities />
    </>
  );
}
