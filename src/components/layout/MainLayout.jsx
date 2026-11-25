import Hero from "../home/Hero";
import TrustStrip from "../home/TrustStrip";
import AboutPreview from "../home/AboutPreview";
import ServicesPreview from "../home/ServicesPreview";
import FeaturedProjects from "../home/FeaturedProjects";
import WhyChooseUs from "../home/WhyChooseUs";
import ProcessSection from "../home/ProcessSection";
import Testimonials from "../home/Testimonials";
import CTA from "../home/CTA";

const MainLayout = () => {
  return (
    <>
      <Hero />
      <TrustStrip />
      <AboutPreview />
      <ServicesPreview />
      <FeaturedProjects />
      <WhyChooseUs />
      <ProcessSection />
      <Testimonials />
      <CTA />
    </>
  );
};

export default MainLayout;
