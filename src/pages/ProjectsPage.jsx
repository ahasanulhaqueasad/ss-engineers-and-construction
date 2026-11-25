import ProjectsHero from "../components/projects/ProjectsHero";
import ProjectStats from "../components/projects/ProjectStats";
import ProjectFilter from "../components/projects/ProjectFilter";
import ProjectsGrid from "../components/projects/ProjectsGrid";
import ProjectsCTA from "../components/projects/ProjectsCTA";

const ProjectsPage = () => {
  return (
    <>
      <ProjectsHero />
      <ProjectStats />
      <ProjectFilter />
      <ProjectsGrid />
      <ProjectsCTA />
    </>
  );
};

export default ProjectsPage;
