import BecomeSponsor from "@/components/Partners/BecomeSponsor";
import DownloadBrochure from "@/components/Partners/DownloadBrochure";
import PartnerHero from "@/components/Partners/PartnerHero";
import WhyPartner from "@/components/Partners/WhyPartner";
import PartnerOrganizations from "@/components/Partners/PartnerOrganizations";
import PartnershipCategories from "@/components/Partners/PartnershipCategories";
import WhatYouGet from "@/components/Partners/WhatYouGet";
import AeroClubCollab from "@/components/Partners/AeroClubCollab";

export default function PartnersPage() {
  return (
    <>
      <PartnerHero />
      <WhyPartner />
      <PartnershipCategories />
      <WhatYouGet />
      <DownloadBrochure />
      <AeroClubCollab />
      <PartnerOrganizations />
      <BecomeSponsor />
    </>
  );
}
