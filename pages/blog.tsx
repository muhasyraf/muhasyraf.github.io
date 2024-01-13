import Heading from "@/components/blog/Heading";
import More from "@/components/blog/More";
import Page from "@/components/utility/Page";
import BlogSection from "@/components/blog/Blog";
import React from "react";
import { getAllPosts } from "@/utils/mdx";

export async function getStaticProps() {
  const posts = await getAllPosts();

  posts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
  return {
    props: { posts },
  };
}

function Blog({ posts }) {
  return (
    <Page
      currentPage="Blog"
      meta={{
        title: "Blog",
        desc: "I write everything here.",
      }}
    >
      <Heading />
      <BlogSection posts={posts} />
      <More />
    </Page>
  );
}

export default Blog;
