import Link from "next/link";
import React from "react";
import SectionTitle from "../global/SectionTitle";
import { Projects } from "@/data/content/projects";
import ProjectCard from "../projects/ProjectCard";

function ProjectsPage() {
  return (
    <div className="flex flex-col text-left justify-between pt-8 relative">
      <div id="learnmore">
        <SectionTitle title="Some projects i have worked on" />
      </div>
      <div className="grid grid-cols-1 gap-12 md:gap-5 md:grid-cols-3 items-start">
        {Projects.slice(0, 3).map((item) => {
          return <ProjectCard key={item.id} project={item} />;
        })}
      </div>
      <div className="relative w-full mt-2">
        <Link href="/projects">
          <div className="mt-8 max-w-sm md:max-w-2xl border border-fun-pink mx-auto text-center w-full whitespace-nowrap px-8 py-3 rounded-full text-fun-pink bg-fun-pink-darkerer hover:bg-fun-pink hover:text-white transition-colors cursor-pointer">
            View More
          </div>
        </Link>
      </div>
    </div>
  );
}

export default ProjectsPage;
