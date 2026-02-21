import AboutCSO from "@/components/About/AboutCSO";
import AboutHero from "@/components/About/AboutHero";
import ExpectedImpact from "@/components/About/ExpectedImpact";
import GetInvolved from "@/components/About/GetInvolved";
import NAOCommittee from "@/components/About/NAOCommittee";
import NeedForNAO from "@/components/About/NeedForNAO";
import NEPAlignment from "@/components/About/NEPAlignment";
import Objectives from "@/components/About/Objectives";
import SolutionPillars from "@/components/About/SolutionPillars";
import StakeholderEcosystem from "@/components/About/StakeholderEcosystem";
import UniqueDifferentiators from "@/components/About/UniqueDifferentiators";
import VisionMission from "@/components/About/VisionMission";
import WhyAviationNow from "@/components/About/WhyAviationNow";

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <WhyAviationNow />
      <VisionMission />
      <Objectives />
      <NeedForNAO />
      <SolutionPillars />
      {/* <UniqueDifferentiators /> */}
      {/* <NEPAlignment /> */}
      {/* <StakeholderEcosystem /> */}
      <ExpectedImpact />
      <NAOCommittee />

      <AboutCSO />
      <GetInvolved />
    </>
  );
}
