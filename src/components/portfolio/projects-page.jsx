import { PROJECTS } from "../../data/projects-info";
// components
import ProjectCard from "./project-card";

function ProjectsPage() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
      {PROJECTS.map((project, index) => (
        <ProjectCard
          key={index}
          projectTitle={project.title}
          projectDescription={project.description}
          projectTechnologies={project.technologies}
          projectImage={project.image}
          projectId={`${index}`}
          projectLink={project.link}
        />
      ))}
    </div>
  );
}

export default ProjectsPage;
