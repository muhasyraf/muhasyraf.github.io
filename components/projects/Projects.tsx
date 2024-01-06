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
    <div className="flex flex-col text-left gap-8 sm:gap-10">
      {projectsList.map((item) => {
        return (
          <ProjectCard
            key={item.id}
            project={item}
            index={projectsList.indexOf(item)}
          />
        );
      })}
    </div>
  );
}

export default ProjectsPage;
