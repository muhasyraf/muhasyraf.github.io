import React from "react";
import Image from "next/image";
import { KebabCase } from "@/utils/utils";
import Link from "next/link";

function ProjectCard({ project, index }) {
  return (
    <div
      className={`shadow-xl bg-gradient-to-br from-fun-card via-transparent to-fun-card backdrop-blur-sm rounded-xl max-w-full grid max-sm:grid-flow-row max-sm:auto-rows-max sm:grid-cols-2 gap-4 py-4 sm:py-8 px-4 border border-fun-border`}
      key={project.id}
    >
      <Link
        href={`/projects/${KebabCase(project.title)}`}
        className={`shadow-lg h-max relative rounded-xl transition hover:-translate-y-2 hover:opacity-75 will-change-projectCard justify-self-center self-center`}
      >
        <img
          className="w-max rounded-xl transition hover:-translate-y-2 hover:opacity-75 hover:border-fun-pink will-change-projectCard max-h-[250px] sm:max-h-[350px]"
          src={project.img}
          alt="Project Image"
        />
      </Link>
      <div
        className={`justify-self-start w-full px-2 sm:px-6 flex flex-col justify-around gap-2 sm:gap-6 ${
          index % 2 !== 0 ? "sm:order-first sm:text-end" : "sm:text-start"
        }`}
      >
        <div className="w-full h-max">
          <Link href={`/projects/${KebabCase(project.title)}`}>
            <h3 className="text-2xl md:text-3xl xl:text-4xl font-bold text-fun-pink-light text-center">
              {project.title}
            </h3>
          </Link>
          <p className="text-fun-gray-light text-base sm:text-lg mt-2 text-start sm:text-center">
            {project.desc}
          </p>
        </div>
        <div
          className={`flex flex-col gap-1 w-full max-sm:mt-2 ${
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
                    <div className="rounded-lg bg-transparent font-monospace text-fun-pink border border-fun-border-light py-1 px-2 cursor-pointer text-xs hover:bg-fun-pink hover:text-bg hover:border-bg">
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
            <p
              className={`font-light text-sm text-fun-gray-light ${
                project.link || project.github ? "" : "hidden"
              }`}
            >
              Source{" "}
            </p>
            <div className="flex justify-between items-center w-full">
              <div
                className={`flex flex-row gap-1 ${
                  index % 2 !== 0 ? "sm:order-last" : "sm:order-first"
                }`}
              >
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-lg bg-transparent text-fun-pink border border-fun-border-light py-1 px-2 cursor-pointer text-xs hover:opacity-50 flex gap-1"
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
                    className="rounded-lg bg-transparent text-fun-pink border border-fun-border-light py-1 px-2 cursor-pointer text-xs hover:opacity-65 flex gap-1"
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
              <Link href={`/projects/${KebabCase(project.title)}`}>
                <div
                  className={` text-fun-gray cursor-pointer text-xs hover:text-fun-pink flex gap-1`}
                >
                  <p
                    className={`${
                      index % 2 !== 0 ? "sm:order-last" : "sm:order-first"
                    }`}
                  >
                    More details
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="15"
                    width="15"
                    viewBox="0 0 512 512"
                    className={`fill-current ${
                      index % 2 !== 0 ? "sm:rotate-180" : ""
                    }`}
                  >
                    <path d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM281 385c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l71-71L136 280c-13.3 0-24-10.7-24-24s10.7-24 24-24l182.1 0-71-71c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L393 239c9.4 9.4 9.4 24.6 0 33.9L281 385z" />
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
