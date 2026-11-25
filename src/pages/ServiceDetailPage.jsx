import { useParams, Link } from "react-router-dom";

import services from "../data/services.json";

import ServiceDetailHero from "../components/services/ServiceDetailHero";
import ServiceOverview from "../components/services/ServiceOverview";
import ServiceFeatures from "../components/services/ServiceFeatures";
import RelatedProjects from "../components/services/RelatedProjects";
import ServiceFAQ from "../components/services/ServiceFAQ";

const ServiceDetailPage = () => {
  const { serviceId } = useParams();

  const service = services.find(
    (item) => String(item.id) === String(serviceId),
  );

  if (!service) {
    return (
      <section className="flex min-h-[60vh] items-center justify-center bg-surface px-5 py-20">
        <div className="text-center">
          <h1 className="font-heading text-4xl font-extrabold text-brand">
            Service Not Found
          </h1>

          <p className="mt-4 text-slate-600">
            The service you are looking for is not available.
          </p>

          <Link
            to="/services"
            className="mt-7 inline-flex rounded-lg bg-accent px-7 py-3 font-bold text-white transition hover:bg-orange-600"
          >
            Back to Services
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
      <ServiceDetailHero
        title={service.title}
        category={service.category}
        description={service.description}
      />

      <ServiceOverview
        title={service.title}
        description={service.description}
      />

      <ServiceFeatures />

      <RelatedProjects
        title={`Projects Related to ${service.title}`}
        category={service.category}
      />

      <ServiceFAQ />
    </>
  );
};

export default ServiceDetailPage;
