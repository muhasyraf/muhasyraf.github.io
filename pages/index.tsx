import CTA from "@/components/home/CTA";
import Hero from "@/components/home/Hero";
import Page from "@/components/utility/Page";
import Projects from "@/components/home/Projects";
import Skills from "@/components/home/Skills";
import Blog from "@/components/home/Blog";

export default function Home() {
  return (
    <Page
      currentPage="Home"
      meta={{ desc: "I'm a passionate Full-stack Developer." }}
    >
      <Hero />
      <div className="mt-20 space-y-32">
        <Projects />
        <Skills />
        <Blog />
        {/* <Posts allPosts={allPosts} /> */}
      </div>
      <CTA />
    </Page>
  );
}
