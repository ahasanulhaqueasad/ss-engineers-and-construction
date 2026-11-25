import AboutHero from "../components/about/AboutHero";
import CompanyStory from "../components/about/CompanyStory";
import MissionVision from "../components/about/MissionVision";
import CompanyTimeline from "../components/about/CompanyTimeline";
import TeamSection from "../components/about/TeamSection";
import CredentialsSection from "../components/about/CredentialsSection";
import AwardsSection from "../components/about/AwardsSection";
import QualitySafety from "../components/about/QualitySafety";

const AboutPage = () => {
  return (
    <>
      <AboutHero />
      <CompanyStory />
      <MissionVision />
      <CompanyTimeline />
      <TeamSection />
      <CredentialsSection />
      <AwardsSection />
      <QualitySafety />
    </>
  );
};

export default AboutPage;
