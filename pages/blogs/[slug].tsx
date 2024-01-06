import Page from "components/utility/Page";
import { GetStaticProps, GetStaticPaths } from "next";
import { AllKebabTitles, Blogs } from "@/data/content/blogs";
import { KebabCase } from "@/utils/utils";
import Heading from "components/blogs/Heading";
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
  const filteredBlogs = Blogs.filter((blog) => {
    return KebabCase(blog.title) === slug;
  });
  return {
    props: await JSON.parse(
      JSON.stringify({
        filteredBlogs,
        slug: slug,
      })
    ),
  };
};

const PostPage = ({ filteredBlogs, slug }) => {
  return (
    <Page
      currentPage="Blogs"
      meta={{
        title: `${filteredBlogs[0].title}`,
        desc: `${filteredBlogs[0].body[0].content}`,
      }}
    >
      <Heading title={filteredBlogs[0].title} />
      <div className="flex flex-col items-start px-2 md:px-10 pb-5 gap-1">
        {filteredBlogs[0].img && (
          <img
            src={filteredBlogs[0].img}
            alt=""
            className="w-1/3 rounded-md self-center"
          />
        )}
        <div className="mt-2 text-sm font-light text-fun-gray-light flex flex-col items-start gap-1 w-full">
          <p>
            Posted at{" "}
            {new Date(filteredBlogs[0].date).toLocaleDateString(undefined, {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <p>
            by Muhammad{" "}
            <span className="text-fun-pink font-medium">Asyraf</span> Faiz Kamil
          </p>
          <hr className="custom-divider-blog w-full" />
        </div>
        <article className="mt-3 flex flex-col gap-5 w-full">
          {filteredBlogs[0].body.map((section, index) => {
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
        <hr className="custom-divider-blog w-full mt-2" />
        <Link href={`/blogs`} className="mt-8 self-center">
          <div className="text-fun-gray-light hover:underline">
            Back to all posts
          </div>
        </Link>
      </div>
    </Page>
  );
};

export default PostPage;
