import React from "react";
import Link from "next/link";
import { Blogs } from "@/data/content/blogs";
import { KebabCase } from "@/utils/utils";

const BlogData = Blogs.sort((a, b) => {
  return new Date(b.date).getTime() - new Date(a.date).getTime();
});

function BlogsPage() {
  return (
    <div className="flex flex-col gap-2">
      {BlogData.map((item, index) => {
        return (
          <div className="flex flex-col gap-1 text-start" key={index}>
            <Link href={`/blogs/${KebabCase(item.title)}`} className="w-full">
              <h1 className="text-2xl sm:text-4xl font-bold text-fun-pink-light italic">
                {item.title}
              </h1>
            </Link>
            <p className="text-sm text-fun-pink">
              {item.date.toLocaleDateString(undefined, {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
            <p className="text-base sm:text-lg text-fun-gray-light max line-clamp-2">
              {item.body[0].content}
            </p>
            <div className="divider"></div>
          </div>
        );
      })}
      <Link href={`/`}>Back to home</Link>
    </div>
  );
}

export default BlogsPage;
