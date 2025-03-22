import Page from "components/utility/Page";
import Heading from "components/blog/Heading";
import Link from "next/link";
import { getSlugs, getPostBySlug } from "@/utils/mdx";
import { serialize } from "next-mdx-remote/serialize";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeCodeTitles from "rehype-code-titles";
import rehypeExternalLinks from "rehype-external-links";
import { MDXRemote } from "next-mdx-remote";
import dayjs from "dayjs";
import React from "react";
import { GetStaticPropsContext } from "next";
import H1 from "@/components/mdx/H1";
import P from "@/components/mdx/P";
import Ol from "@/components/mdx/Ol";
import Ul from "@/components/mdx/Ul";

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
  if (!ctx.params || !ctx.params.slug) {
    return { notFound: true };
  }

  const { slug } = ctx.params;
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
        [
          rehypeExternalLinks,
          {
            target: "_blank",
            rel: ["noopener", "noreferrer"],
            properties: {
              className: ["text-fun-pink", "hover:underline"],
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
      addClass="flex flex-col justify-start items-center"
    >
      <div className="pt-16 sm:pt-20 pb-8 sm:pb-12 text-md sm:text-lg flex flex-col items-center gap-1 font-normal text-fun-gray-light">
        <p>{dayjs(frontmatter.date).format("MMMM D, YYYY")}</p>
        <Heading title={frontmatter.title} />
        <p>
          by Muhammad <span className="text-fun-pink font-medium">Asyraf</span>{" "}
          Faiz Kamil
        </p>
      </div>
      <div className="flex flex-col items-start px-3 py-6 md:py-8 md:px-6 gap-3 md:gap-6 rounded-xl shadow-xl bg-gradient-to-b from-fun-card via-transparent to-fun-card border-2 border-fun-border sm:w-[55rem] mb-16">
        <article className="px-2 flex flex-col gap-2 sm:gap-5 w-full text-start">
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
      </div>
      <Link href={"/blog"} className="mt-2 self-center">
        <div className="text-fun-gray-light hover:underline">
          Back to all posts
        </div>
      </Link>
    </Page>
  );
}
