import ServicesHero from "../components/services/ServicesHero";
import ServiceCategories from "../components/services/ServiceCategories";
import AllServices from "../components/services/AllServices";
import ServiceBenefits from "../components/services/ServiceBenefits";
import ServiceProcess from "../components/services/ServiceProcess";
import ServicesCTA from "../components/services/ServicesCTA";

const ServicesPage = () => {
  return (
    <>
      <ServicesHero />
      <ServiceCategories />
      <AllServices />
      <ServiceBenefits />
      <ServiceProcess />
      <ServicesCTA />
    </>
  );
};

export default ServicesPage;
