import React from "react";
import Page from "@/components/utility/Page";
import Heading from "@/components/about/Heading";
import About from "@/components/about/About";

export default function AboutPage() {
  return (
    <Page
      currentPage="About Me"
      meta={{
        title: "About Me",
        desc: "I'm a passionate Full-stack Developer.",
      }}
    >
      <Heading />
      <About />
    </Page>
  );
}
