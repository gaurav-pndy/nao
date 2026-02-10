import AboutCSO from "@/components/About/AboutCSO";
import AboutHero from "@/components/About/AboutHero";
import ExpectedImpact from "@/components/About/ExpectedImpact";
import GetInvolved from "@/components/About/GetInvolved";
import NEPAlignment from "@/components/About/NEPAlignment";
import SolutionPillars from "@/components/About/SolutionPillars";
import StakeholderEcosystem from "@/components/About/StakeholderEcosystem";
import UniqueDifferentiators from "@/components/About/UniqueDifferentiators";
import VisionMission from "@/components/About/VisionMission";

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <VisionMission />
      <SolutionPillars />
      <UniqueDifferentiators />
      <NEPAlignment />
      <StakeholderEcosystem />
      <ExpectedImpact />
      <AboutCSO />
      <GetInvolved />
    </>
  );
}
