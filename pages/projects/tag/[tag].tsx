import Page from "components/utility/Page";
import { GetStaticProps, GetStaticPaths } from "next";
import { AllKebabTags, AllTags, Projects } from "@/data/content/projects";
import { KebabCase, KebabArray } from "@/utils/utils";
import ProjectsPage from "components/projects/Projects";
import Heading from "components/projects/Heading";
import Link from "next/link";

export const getStaticPaths: GetStaticPaths = async () => {
  const allTags = [];
  Projects.forEach((project) =>
    project.tags.forEach((tag) => {
      allTags.push(tag);
    })
  );
  const uniqueAllTags = [...new Set(allTags)];
  const allTagsPaths = uniqueAllTags.map((path) => ({
    params: { tag: `${KebabCase(path)}` },
  }));
  return {
    paths: allTagsPaths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({
  params,
}: {
  params: { tag: string };
}) => {
  const tag = params.tag;
  const filteredProjects = Projects.filter((project) =>
    [...KebabArray(project.tags)].includes(tag)
  );
  return {
    props: await JSON.parse(
      JSON.stringify({
        filteredProjects,
        tag: tag,
      })
    ),
  };
};

function PostPage({ filteredProjects, tag }) {
  const capsTag = AllTags[AllKebabTags.indexOf(tag)];
  return (
    <Page
      currentPage="Projects"
      meta={{
        title: `${capsTag} Projects`,
        desc: `A showcase for all of my ${capsTag} projects.`,
      }}
    >
      <Heading tag={capsTag} />
      <ProjectsPage overwriteProjects={filteredProjects} />

      <Link href="/projects">
        <div className="mt-8 max-w-sm md:max-w-2xl border border-fun-pink mx-auto text-center w-full whitespace-nowrap px-8 py-3 rounded-full text-fun-pink bg-fun-pink-darkerer hover:bg-fun-pink hover:text-white transition-colors cursor-pointer">
          View All
        </div>
      </Link>
    </Page>
  );
}

export default PostPage;
