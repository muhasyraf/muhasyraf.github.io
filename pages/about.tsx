import React from "react";
import Page from "@/components/utility/Page";
import Heading from "@/components/about/Heading";
import About from "@/components/about/Hero";
import Profile from "@/components/about/Profile";
import Experiences from "@/components/about/Experiences";
import Skills from "@/components/about/Skills";
import Contacts from "@/components/about/Contacts";

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
      <div className="flex flex-col gap-2 sm:gap-4 items-center px-2 sm:px-4">
        <About />
        <Profile />
        <Experiences />
        <Skills />
        <Contacts />
      </div>
    </Page>
  );
}
