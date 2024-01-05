import Link from "next/link";
import React from "react";
import SectionTitle from "../global/SectionTitle";
import { Projects } from "@/data/content/projects";
import ProjectCard from "../projects/ProjectCard";

function ProjectsPage() {
  return (
    <div className="flex flex-col text-left justify-between sm:px-4 pt-8 relative">
      <div id="learnmore">
        <SectionTitle title="Some projects i have worked on" />
      </div>
      <div className="flex flex-col gap-4 sm:gap-8">
        {Projects.slice(0, 3).map((item) => {
          return (
            <ProjectCard
              key={item.id}
              project={item}
              index={Projects.indexOf(item)}
            />
          );
        })}
      </div>
      <div className="relative w-full mt-2">
        <Link href="/projects">
          <div className="mt-8 max-w-sm md:max-w-2xl text-fun-pink-light font-bold border-2 rounded-full border-fun-pink bg-transparent hover:bg-fun-pink hover:border-collapse hover:text-bg mx-auto text-center w-full whitespace-nowrap px-8 py-3 bg-fun-pink-darkerer transition-colors cursor-pointer">
            See more of my projects!
          </div>
        </Link>
      </div>
    </div>
  );
}

export default ProjectsPage;
