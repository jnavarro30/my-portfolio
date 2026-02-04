import { SimpleGrid } from "@mantine/core";
import { PROJECTS } from "../../data/projects-info";
// components
import ProjectCard from "./project-card";

function ProjectsPage() {
  return (
    <SimpleGrid
      className="mb-8"
      spacing="lg"
      breakpoints={[
        { minWidth: "xs", cols: 2, spacing: "sm" },
        { maxWidth: "xs", cols: 1, spacing: "sm" },
      ]}
    >
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
    </SimpleGrid>
  );
}

export default ProjectsPage;
