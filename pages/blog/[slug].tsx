import Page from "components/utility/Page";
import { GetStaticProps, GetStaticPaths } from "next";
import { AllKebabTitles, Blog } from "@/data/content/blog";
import { KebabCase } from "@/utils/utils";
import Heading from "components/blog/Heading";
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
  const filteredBlog = Blog.filter((blog) => {
    return KebabCase(blog.title) === slug;
  });
  return {
    props: await JSON.parse(
      JSON.stringify({
        filteredBlog,
        slug: slug,
      })
    ),
  };
};

const PostPage = ({ filteredBlog, slug }) => {
  return (
    <Page
      currentPage="Blog"
      meta={{
        title: `${filteredBlog[0].title}`,
        desc: `${filteredBlog[0].body[0].content}`,
      }}
    >
      <Heading title={filteredBlog[0].title} />
      <div className="flex flex-col items-start md:px-10 pb-5 gap-1">
        {filteredBlog[0].img && (
          <img
            src={filteredBlog[0].img}
            alt=""
            className="w-1/3 rounded-md self-center"
          />
        )}
        <div className="mt-2 px-3 sm:px-6 text-xs sm:text-sm font-light text-fun-gray-light flex flex-col items-start gap-1 w-full">
          <p>
            Posted at{" "}
            {new Date(filteredBlog[0].date).toLocaleDateString(undefined, {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <p>
            by Muhammad{" "}
            <span className="text-fun-pink font-medium">Asyraf</span> Faiz Kamil
          </p>
        </div>
        <article className="p-3 sm:p-6 flex flex-col gap-5 w-full bg-gradient-to-b rounded-xl from-transparent via-[#1730417e]">
          {filteredBlog[0].body.map((section, index) => {
            return (
              <div key={index} className="text-start">
                <h1 className="text-xl sm:text-3xl font-medium text-fun-pink-light">
                  #<span className="font-bold italic">{section.title}</span>
                </h1>
                <p className="mt-2 text-base sm:text-lg font-normal text-fun-gray-light">
                  {section.content}
                </p>
              </div>
            );
          })}
        </article>
        <Link href={`/blog`} className="mt-8 self-center">
          <div className="text-fun-gray-light hover:underline">
            Back to all posts
          </div>
        </Link>
      </div>
    </Page>
  );
};

export default PostPage;
