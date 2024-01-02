import React from "react";
import { Projects } from "@/data/content/projects";
import { Project } from "types";
import ProjectCard from "./ProjectCard";

type ProjectProps = {
  overwriteProjects?: Project[];
};

function ProjectsPage({ overwriteProjects }: ProjectProps) {
  const projectsList = overwriteProjects ? overwriteProjects : Projects;
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-3 items-start">
      {projectsList.map((item) => {
        return <ProjectCard key={item.id} project={item} />;
      })}
    </div>
  );
}

export default ProjectsPage;
