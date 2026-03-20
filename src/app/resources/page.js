import Categories from "@/components/Resources/Categories";
import SyllabusOverview from "@/components/Resources/SyllabusOverview";
import ExternalLinks from "@/components/Resources/ExternalLinks";
import LatestUpdates from "@/components/Resources/LatestUpdates";
import RequestResources from "@/components/Resources/RequestResources";
import ResourcesHero from "@/components/Resources/ResourcesHero";
import VideoTutorials from "@/components/Resources/VideoTutorials";
import SupportSection from "@/components/SupportSection";

export default function ResourcesPage() {
  return (
    <>
      <ResourcesHero />
      <SyllabusOverview />
      <Categories />
      {/* <VideoTutorials /> */}
      <ExternalLinks />
      <LatestUpdates />
      <RequestResources />
      <SupportSection />
    </>
  );
}
