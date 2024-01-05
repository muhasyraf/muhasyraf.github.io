import React from "react";
import Image from "next/image";
import { KebabCase } from "@/utils/utils";
import Link from "next/link";

function ProjectCard({ project, index }) {
  return (
    <div
      className={`bg-gradient-to-r ${
        index % 2 === 0 ? "from-[#0b293d] to-bg" : "from-bg to-[#0b293d]"
      } rounded-xl max-w-full grid max-sm:grid-flow-row max-sm:auto-rows-max sm:grid-cols-2 gap-4 py-4 sm:py-8 px-4`}
      key={project.id}
    >
      <Link
        href={`/projects/${KebabCase(project.title)}`}
        className={`relative rounded-xl transition hover:-translate-y-2 hover:opacity-75 hover:border-fun-pink will-change-projectCard justify-self-center`}
      >
        <img
          className="w-max rounded-xl transition hover:-translate-y-2 hover:opacity-75 hover:border-fun-pink will-change-projectCard"
          src={project.img}
          alt="Project Image"
        />
      </Link>
      <div
        className={`justify-self-start w-full px-6 flex flex-col justify-around ${
          index % 2 !== 0 ? "sm:order-first sm:text-end" : "sm:text-start"
        }`}
      >
        <div className="w-full h-max text-center">
          <Link href={`/projects/${KebabCase(project.title)}`}>
            <h3 className="text-xl md:text-3xl font-bold text-fun-pink-light">
              {project.title}
            </h3>
          </Link>
          <p className="text-fun-pink-light text-base mt-2">{project.desc}</p>
        </div>
        <div
          className={`mt-4 flex flex-col gap-1 ${
            index % 2 !== 0 ? "sm:self-end" : "sm:self-start"
          }`}
        >
          <p className="font-light text-sm text-fun-gray-light">Built with </p>
          <ul
            className={`flex flex-wrap items-center ${
              index % 2 !== 0 ? "sm:justify-end" : "sm:justify-start"
            } list-none gap-2`}
          >
            {project.tags.map((tag, index) => {
              return (
                <li key={tag}>
                  <Link href={`/projects/tag/${KebabCase(tag)}`}>
                    <div className="rounded-lg bg-transparent font-monospace text-fun-pink border border-1 border-fun-pink py-1 px-2 cursor-pointer text-xs hover:bg-fun-pink hover:text-bg hover:border-bg">
                      {tag}
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
          <div
            className={`flex flex-col gap-1  ${
              index % 2 !== 0 ? "sm:items-end" : "sm:items-start"
            }`}
          >
            <p className="font-light text-sm text-fun-gray-light">Source </p>
            <div className="flex flex-row gap-1">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg bg-transparent text-fun-pink border border-1 border-fun-pink py-1 px-2 cursor-pointer text-xs hover:opacity-50 flex gap-1"
                >
                  <p>Live site </p>
                  <Image
                    src="/static/icons/external-link.svg"
                    width={16}
                    height={16}
                    alt="Link Icon"
                  />
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg bg-transparent text-fun-pink border border-1 border-fun-pink py-1 px-2 cursor-pointer text-xs hover:opacity-65 flex gap-1"
                >
                  <p>GitHub </p>
                  <Image
                    src="/static/icons/github.svg"
                    width={16}
                    height={16}
                    alt="Github Icon"
                  />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
