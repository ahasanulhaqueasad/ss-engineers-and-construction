import { useParams, Link } from "react-router-dom";

import projects from "../data/projects.json";

import ProjectDetailHero from "../components/projects/ProjectDetailHero";
import ProjectOverview from "../components/projects/ProjectOverview";
import ProjectGallery from "../components/projects/ProjectGallery";
import ProjectDetailCTA from "../components/projects/ProjectDetailCTA";

const ProjectDetailPage = () => {
  const { projectId } = useParams();

  const project = projects.find(
    (item) => String(item.id) === String(projectId),
  );

  if (!project) {
    return (
      <section className="flex min-h-[60vh] items-center justify-center bg-surface px-5 py-20">
        <div className="text-center">
          <h1 className="font-heading text-4xl font-extrabold text-brand">
            Project Not Found
          </h1>

          <p className="mt-4 text-slate-600">
            The project you are looking for is not available.
          </p>

          <Link
            to="/projects"
            className="mt-7 inline-flex rounded-lg bg-accent px-7 py-3 font-bold text-white transition hover:bg-orange-600"
          >
            Back to Projects
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
      <ProjectDetailHero project={project} />
      <ProjectOverview project={project} />
      <ProjectGallery project={project} />
      <ProjectDetailCTA project={project} />
    </>
  );
};

export default ProjectDetailPage;
