import Categories from "@/components/Resources/Categories";
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
      <Categories />
      <VideoTutorials />
      <ExternalLinks />
      <LatestUpdates />
      <RequestResources />
      <SupportSection />
    </>
  );
}
