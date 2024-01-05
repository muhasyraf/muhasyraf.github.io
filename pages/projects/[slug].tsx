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

function PostPage({ filteredProjects, slug }) {
  return (
    <Page
      currentPage="Projects"
      meta={{
        title: `${filteredProjects[0].title}`,
        desc: `${filteredProjects[0].desc}`,
      }}
    >
      <Heading title={filteredProjects[0].title} />
      <div className="flex flex-col px-10 pb-5">
        <img
          src={filteredProjects[0].img}
          alt=""
          className="w-full rounded-md"
        />
        <div className="flex flex-row justify-between">
          <ul className="flex flex-wrap items-center mt-2 -ml-2 list-none">
            {filteredProjects[0].tags.map((tag, index) => {
              return (
                <li key={tag}>
                  <Link href={`/projects/tag/${KebabCase(tag)}`}>
                    <div className="m-1 rounded-lg text-sm bg-fun-pink text-bg py-1 px-2 cursor-pointer hover:opacity-75">
                      {tag}
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="mt-2">
            <a
              className="w-auto inline-flex items-center sm:w-auto font-bold flex-shrink text-xs border border-fun-pink px-4 py-2 rounded-xl text-fun-pink cursor-pointer opacity-50"
              href={filteredProjects[0].github}
              target="_blank"
              rel="nooreferrer"
            >
              <Image
                src="/static/icons/github.svg"
                width={16}
                height={16}
                alt="Github Icon"
              />
              <span className="ml-2">View Source Code </span>
            </a>
          </div>
        </div>
        <p className="text-start mt-3">{filteredProjects[0].desc}</p>
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
