import Page from "components/utility/Page";
import { GetStaticProps, GetStaticPaths } from "next";
import { AllKebabTitles, Projects } from "@/data/content/projects";
import { KebabCase } from "@/utils/utils";
import Heading from "components/projects/Heading";
import Link from "next/link";
import Image from "next/image";

export const getStaticPaths: GetStaticPaths = async () => {
  const allTitlesPaths = AllKebabTitles.map((path) => ({
    params: { slug: `${KebabCase(path)}` },
  }));
  return {
    paths: allTitlesPaths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({
  params,
}: {
  params: { slug: string };
}) => {
  const slug = params.slug;
  const filteredProjects = Projects.filter((project) => {
    return KebabCase(project.title) === slug;
  });
  return {
    props: await JSON.parse(
      JSON.stringify({
        filteredProjects,
        slug: slug,
      })
    ),
  };
};

function PostPage({ filteredProjects }) {
  return (
    <Page
      currentPage="Projects"
      meta={{
        title: `${filteredProjects[0].title}`,
        desc: `${filteredProjects[0].desc}`,
      }}
    >
      <Heading title={filteredProjects[0].title} />
      <div className="flex flex-col px-2 md:px-10 pb-5 gap-1">
        <Image
          src={filteredProjects[0].img}
          alt={filteredProjects[0].title}
          width={550}
          height={400}
          className="w-1/2 self-center rounded-md"
        />
        <div className="text-start mt-3">
          <h1 className="text-xl sm:text-3xl font-medium text-fun-pink-light italic">
            Project Description
          </h1>
          <p className="text-base sm:text-lg font-normal text-fun-gray-light">
            {filteredProjects[0].desc}
          </p>
        </div>
        <div className="flex flex-col gap-2 py-4 text-start">
          <p className="font-light text-sm text-fun-gray-light">Built with</p>
          <ul className="flex flex-wrap items-center list-none gap-2">
            {filteredProjects[0].tags.map((tag) => {
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
          <p className="font-light text-sm text-fun-gray-light">Source</p>
          <div className="flex flex-row gap-1 w-max">
            {filteredProjects[0].link && (
              <a
                href={filteredProjects[0].link}
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
            {filteredProjects[0].github && (
              <a
                href={filteredProjects[0].github}
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
      <Link href="/projects">
        <div className="text-fun-gray-light hover:underline mt-5 block">
          Back to all projects
        </div>
      </Link>
    </Page>
  );
}

export default PostPage;
