"use client";

import { motion } from "framer-motion";
import PeopleHero from "@/components/People/PeopleHero";
import GovernanceStructure from "@/components/People/GovernanceStructure";
import AdvisoryCommittee from "@/components/People/AdvisoryCommittee";
import ExpertCommittee from "@/components/People/ExpertCommittee";
import ExpertEligibility from "@/components/People/ExpertEligibility";
import Secretariat from "@/components/People/Secretariat";
import NAOCommittee from "@/components/About/NAOCommittee";
import CTAStrip from "@/components/People/CTAStrip";

export default function PeoplePage() {
  return (
    <>
      <PeopleHero />
      <GovernanceStructure />
      <AdvisoryCommittee />
      <ExpertCommittee />
      <ExpertEligibility />
      <Secretariat />
      <CTAStrip />
    </>
  );
}
