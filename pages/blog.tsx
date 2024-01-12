import Heading from "@/components/blog/Heading";
import More from "@/components/blog/More";
import Page from "@/components/utility/Page";
import BlogSection from "@/components/blog/Blog";
import React from "react";

function Blog() {
  return (
    <Page
      currentPage="Blog"
      meta={{
        desc: "I write everything here.",
      }}
    >
      <Heading />
      <BlogSection />
      <More />
    </Page>
  );
}

export default Blog;
