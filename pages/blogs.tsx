import Heading from "@/components/blogs/Heading";
import More from "@/components/blogs/More";
import Page from "@/components/utility/Page";
import Blogs from "@/components/blogs/Blogs";
import React from "react";

function blogs() {
  return (
    <Page
      currentPage="Blogs"
      meta={{
        desc: "I write everything here.",
      }}
    >
      <Heading />
      <Blogs />
      <More />
    </Page>
  );
}

export default blogs;
