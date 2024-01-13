import path from "path";
import fs from "fs";
import matter from "gray-matter";
import readingTime from "reading-time";
import { sync } from "glob";
import { notFound } from "next/navigation";

const postsPath = path.join(process.cwd(), "blog");

export async function getSlugs() {
  const paths = sync(`${postsPath}/*.mdx`, { cwd: postsPath });

  return paths.map((path) => {
    const pathContent = path.split("/");
    const fileName = pathContent[pathContent.length - 1];
    const [slug, _extension] = fileName.split(".");

    return slug;
  });
}

export async function getPostBySlug(slug: string) {
  const postsDirectory = path.join(postsPath, `${slug}.mdx`);
  if (!fs.existsSync(postsDirectory)) {
    return {
      notFound: true,
    };
  }
  const fileContents = fs.readFileSync(postsDirectory, "utf8");
  if (!fileContents) {
    return {
      notFound: true,
    };
  }
  const { data, content } = matter(fileContents);

  return {
    content,
    frontmatter: {
      slug,
      description: data.description,
      title: data.title,
      date: data.date,
      readingTime: readingTime(fileContents).text,
      ...data,
    },
  };
}

export async function getAllPosts() {
  const posts = fs.readdirSync(postsPath);

  return posts.reduce((allPosts: any, postSlug: string) => {
    const source = fs.readFileSync(path.join(postsPath, `${postSlug}`), "utf8");
    const { data } = matter(source);
    return [
      {
        ...data,
        slug: postSlug.replace(".mdx", ""),
        readingTime: readingTime(source).text,
      },
      ...allPosts,
    ];
  }, []);
}
