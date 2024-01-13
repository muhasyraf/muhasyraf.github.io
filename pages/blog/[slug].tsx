import Page from "components/utility/Page";
// import { GetStaticProps, GetStaticPaths } from "next";
// import { AllKebabTitles, Blog } from "@/data/content/blog";
// import { KebabCase } from "@/utils/utils";
import Heading from "components/blog/Heading";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { getSlugs, getPostBySlug } from "@/utils/mdx";
import { serialize } from "next-mdx-remote/serialize";
import rehypeSlug from "rehype-slug";
import rehypeHighlight from "rehype-highlight";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeCodeTitles from "rehype-code-titles";
import { MDXRemote } from "next-mdx-remote";
import dayjs from "dayjs";
import React from "react";
import { GetStaticPropsContext } from "next";
import H1 from "@/components/mdx/H1";
import P from "@/components/mdx/P";
import Ol from "@/components/mdx/Ol";
import Ul from "@/components/mdx/Ul";
// export const getStaticPaths: GetStaticPaths = async () => {
//   const allTitlesPaths = AllKebabTitles.map((path) => ({
//     params: { slug: `${KebabCase(path)}` },
//   }));
//   return {
//     paths: allTitlesPaths,
//     fallback: false,
//   };
// };

// export const getStaticProps: GetStaticProps = async ({
//   params,
// }: {
//   params: { slug: string };
// }) => {
//   const slug = params.slug;
//   const filteredBlog = Blog.filter((blog) => {
//     return KebabCase(blog.title) === slug;
//   });
//   return {
//     props: await JSON.parse(
//       JSON.stringify({
//         filteredBlog,
//         slug: slug,
//       })
//     ),
//   };
// };

// const PostPage = ({ filteredBlog, slug }) => {
//   return (
//     <Page
//       currentPage="Blog"
//       meta={{
//         title: `${filteredBlog[0].title}`,
//         desc: `${filteredBlog[0].body[0].content}`,
//       }}
//     >
//       <Heading title={filteredBlog[0].title} />
//       <div className="flex flex-col items-start md:px-10 pb-5 gap-1">
//         {filteredBlog[0].img && (
//           <img
//             src={filteredBlog[0].img}
//             alt=""
//             className="w-1/3 rounded-md self-center"
//           />
//         )}
//         <div className="mt-2 px-3 sm:px-6 text-xs sm:text-sm font-light text-fun-gray-light flex flex-col items-start gap-1 w-full">
//           <p>
//             Posted at{" "}
//             {new Date(filteredBlog[0].date).toLocaleDateString(undefined, {
//               year: "numeric",
//               month: "long",
//               day: "numeric",
//             })}
//           </p>
//           <p>
//             by Muhammad{" "}
//             <span className="text-fun-pink font-medium">Asyraf</span> Faiz Kamil
//           </p>
//         </div>
//         <article className="p-3 sm:p-6 flex flex-col gap-5 w-full bg-gradient-to-b rounded-xl from-transparent via-[#1730417e]">
//           {filteredBlog[0].body.map((section, index) => {
//             return (
//               <div key={index} className="text-start">
//                 <h1 className="text-xl sm:text-3xl font-medium text-fun-pink-light">
//                   #<span className="font-bold italic">{section.title}</span>
//                 </h1>
//                 <p className="mt-2 text-base sm:text-lg font-normal text-fun-gray-light">
//                   {section.content}
//                 </p>
//               </div>
//             );
//           })}
//         </article>
//         <Link href={`/blog`} className="mt-8 self-center">
//           <div className="text-fun-gray-light hover:underline">
//             Back to all posts
//           </div>
//         </Link>
//       </div>
//     </Page>
//   );
// };

// export default PostPage;

export async function getStaticPaths() {
  const paths = (await getSlugs()).map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(
  ctx: GetStaticPropsContext<{ slug: string }>
) {
  const { slug } = ctx.params!;
  const { content, frontmatter } = await getPostBySlug(slug);
  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        [
          rehypeAutolinkHeadings,
          {
            behavior: "wrap",
            properties: {
              className: ["anchor"],
            },
          },
        ],
        rehypeCodeTitles,
      ],
    },
  });
  return {
    props: {
      posts: {
        source: mdxSource,
        frontmatter,
      },
    },
  };
}

export default function BlogPage({ posts: { source, frontmatter } }) {
  return (
    <Page
      currentPage="Blog"
      meta={{
        title: `${frontmatter.title}`,
        desc: `${frontmatter.description}`,
      }}
    >
      <Heading title={frontmatter.title} />
      <div className="flex flex-col items-start px-3 py-3 md:py-6 md:px-6 gap-3 md:gap-6 max-sm:bg-gradient-to-r sm:bg-gradient-to-br rounded-xl from-[#1730417e] via-transparent to-[#1730417e]">
        <div className="mt-2 px-2 text-xs sm:text-sm font-light text-fun-gray-light flex flex-col items-start gap-1 w-full">
          <p>Posted at {dayjs(frontmatter.date).format("MMMM D, YYYY")}</p>
          <p>
            by Muhammad{" "}
            <span className="text-fun-pink font-medium">Asyraf</span> Faiz Kamil
          </p>
          <p>{frontmatter.readingTime} approximately</p>
        </div>
        <article className="mt-2 px-2 flex flex-col gap-5 w-full text-start">
          <MDXRemote
            {...source}
            components={{
              h1: H1,
              p: P,
              ol: Ol,
              ul: Ul,
            }}
          />
        </article>
        <Link href={`/blog`} className="mt-8 self-center">
          <div className="text-fun-gray-light hover:underline">
            Back to all posts
          </div>
        </Link>
      </div>
    </Page>
  );
}
