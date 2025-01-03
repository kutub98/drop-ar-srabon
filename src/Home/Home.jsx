import ComingSoon from "../components/ComingSoon";
import DetailsAndReview from "../components/Details&Review";
import GoldenEraSection from "../components/GoldenEra";
import HeroSection from "../components/HeroSection";
import RoadMap from "../components/RoadMap";
import VideoSection from "../components/VideoSection";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <VideoSection />
      <GoldenEraSection />
      <DetailsAndReview />
      <ComingSoon />
      <RoadMap />
    </>
  );
};

export default HomePage;
