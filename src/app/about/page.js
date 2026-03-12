import AboutCSO from "@/components/About/AboutCSO";
import AboutHero from "@/components/About/AboutHero";
import ExpectedImpact from "@/components/About/ExpectedImpact";
import GetInvolved from "@/components/About/GetInvolved";
import NAOCommittee from "@/components/About/NAOCommittee";
import AviationCareerPathways from "@/components/About/AviationCareerPathways";
import NAOIndia2047 from "@/components/About/NAOIndia2047";
import NeedForNAO from "@/components/About/NeedForNAO";
import NEPAlignment from "@/components/About/NEPAlignment";
import Objectives from "@/components/About/Objectives";
import SolutionPillars from "@/components/About/SolutionPillars";
import StakeholderEcosystem from "@/components/About/StakeholderEcosystem";
import UniqueDifferentiators from "@/components/About/UniqueDifferentiators";
import VisionMission from "@/components/About/VisionMission";
import WhyAviationNow from "@/components/About/WhyAviationNow";
import NGAPAlignment from "@/components/About/NGAPAlignment";

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <WhyAviationNow />
      <VisionMission />
      <Objectives />
      <NeedForNAO />
      <SolutionPillars />
      <NGAPAlignment />
      {/* <UniqueDifferentiators /> */}
      {/* <NEPAlignment /> */}
      {/* <StakeholderEcosystem /> */}
      {/*<ExpectedImpact />*/}
      <NAOCommittee />
      <AviationCareerPathways />
      <NAOIndia2047 />
      <AboutCSO />
      <GetInvolved />
    </>
  );
}
