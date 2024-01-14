import CTA from "@/components/home/CTA";
import Hero from "@/components/home/Hero";
import Page from "@/components/utility/Page";
import Projects from "@/components/home/Projects";
import Skills from "@/components/home/Skills";
import Blog from "@/components/home/Blog";
import { getAllPosts } from "@/utils/mdx";

export async function getStaticProps() {
  const posts = await getAllPosts();

  posts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
  return { props: { posts } };
}

export default function Home({ posts }) {
  return (
    <Page
      currentPage="Home"
      meta={{ desc: "Muhammad Asyraf Faiz Kamil's Personal Website" }}
    >
      <Hero />
      <div className="mt-20 space-y-32">
        <Projects />
        <Skills />
        <Blog posts={posts} />
        {/* <Posts allPosts={allPosts} /> */}
      </div>
      <CTA />
    </Page>
  );
}
